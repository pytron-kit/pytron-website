import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

// Get current directory dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the routes you want to prerender
const routes = [
    '/',
    '/docs',
    '/docs/architecture',
    '/docs/features',
    '/docs/security',
    '/docs/vap',
    '/docs/cli',
    '/examples',
    '/bite',
    '/requests-studio'
];

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;
const OUT_DIR = path.resolve(__dirname, 'dist');

async function waitForServer(url) {
    const maxRetries = 20;
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url);
            if (response.ok) return;
        } catch (e) {
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
    throw new Error(`Server at ${url} did not start in time.`);
}

(async () => {
    console.log(' ️  Starting Build Process for Prerendering...');

    // 1. Build the project first
    console.log('  Running Vite Build...');
    const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    const build = spawn(npmCommand, ['run', 'build'], { stdio: 'inherit', shell: true });

    await new Promise((resolve, reject) => {
        build.on('close', (code) => {
            if (code === 0) resolve();
            else reject(new Error('Vite build failed'));
        });
    });

    // 2. Start the preview server
    console.log('  Starting Preview Server...');
    const server = spawn(npmCommand, ['run', 'preview', '--', '--port', PORT.toString()], {
        stdio: 'ignore', // Ignore output to keep console clean
        detached: true,
        shell: true
    });

    try {
        await waitForServer(BASE_URL);
        console.log('  Server is up!');

        const browser = await puppeteer.launch({
            headless: "new",
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();

        for (const route of routes) {
            console.log(`  Prerendering: ${route}`);

            const targetUrl = `${BASE_URL}${route}`;
            await page.goto(targetUrl, { waitUntil: 'networkidle0' });

            // Important: Ensure we wait for the root element to be fully populated if needed
            await page.waitForSelector('#root');

            // Hydrate HTML
            const html = await page.content();

            // Determine output path. 
            // If route is '/', it goes to index.html.
            // If route is '/docs', we make a folder 'docs' and put 'index.html' inside it 
            // so that /docs/ works as a clean URL.
            let outputPath;
            if (route === '/') {
                outputPath = path.join(OUT_DIR, 'index.html');
            } else {
                // Remove leading slash
                const cleanRoute = route.substring(1);
                const dir = path.join(OUT_DIR, cleanRoute);
                if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
                outputPath = path.join(dir, 'index.html');
            }

            fs.writeFileSync(outputPath, html);
            console.log(`   └── Saved to ${outputPath}`);
        }

        await browser.close();
        console.log('  Prerendering Complete!');

    } catch (error) {
        console.error('  Prerendering error:', error);
        process.exit(1);
    } finally {
        // Kill the preview server
        if (server.pid) {
            // Windows often requires taskkill for spawned processes
            try {
                process.kill(server.pid);
                // Force kill specifically for windows tree
                spawn("taskkill", ["/pid", server.pid, '/f', '/t']);
            } catch (e) {
                // ignore
            }
        }
        process.exit(0);
    }
})();
