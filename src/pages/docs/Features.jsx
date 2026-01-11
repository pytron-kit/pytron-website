export default function Features() {
  return (
    <div className="prose">
      <h1>Core Features</h1>
      <p>
        Pytron is more than just a webview wrapper. It is a full-stack ecosystem composed of three synchronized pillars that make desktop development feel like magic.
      </p>

      <h2>1. Pytron Kit (The Backend)</h2>
      <p>
        The heart of your application. Written in Python, it manages your window, manages your rendering engine (Native or PySide6), and handles your business logic.
      </p>
      <ul>
        <li><strong>@app.expose:</strong> Effortlessly expose Python functions to JavaScript.</li>
        <li><strong>Reactive State:</strong> Change a variable in Python, and your UI re-renders automatically.</li>
        <li><strong>Native API:</strong> Direct access to the filesystem, system tray, and OS-level features.</li>
      </ul>
      <pre><code className="language-python">{`from pytron import App
app = App()

@app.expose
def get_data():
    return {"status": "success", "value": 42}

def toggle_app():
    if app.is_visible:
        app.hide()
    else:
        app.show()

# Global OS-level Shortcut
app.shortcut("Ctrl+Shift+P", toggle_app)

app.run()`}</code></pre>

      <h3>Global Shortcuts</h3>
      <p>
        Define keyboard shortcuts that work even when your application is not in focus. Perfect for launcher apps, quick capture tools, and system controllers.
      </p>

      <h3>Lifecycle Hooks</h3>
      <p>
        Ensure clean shutdowns by registering <code>@app.on_exit</code> callbacks. Perfect for saving state, closing database connections, or stopping background threads.
      </p>
      <pre><code className="language-python">{`@app.on_exit
def cleanup():
    print("Cleaning up resources...")
    db.close()`}</code></pre>

      <h3>System Integration</h3>
      <p>
        Deeply integrate with the host OS using native APIs.
      </p>
      <ul>
        <li><strong>System Tray:</strong> <code>app.setup_tray_standard()</code> creates a tray icon with menu support.</li>
        <li><strong>Native Dialogs:</strong> <code>app.dialog_open_file()</code>, <code>app.message_box()</code> for native UI interaction.</li>
        <li><strong>Notifications:</strong> <code>app.system_notification()</code> for toast messages in Windows Action Center or macOS Notification Center.</li>
      </ul>

      <h3>Power Tools</h3>
      <ul>
        <li><strong>Agentic Shield:</strong> Rust-based bootloader that encrypts your source code with AES-256-GCM.</li>
        <li><strong>Nuitka Support:</strong> Compile your Python code into actual machine code (C++) for maximum performance.</li>
        <li><strong>VAP (Virtual Asset Provider):</strong> High-performance binary bridge for streaming data via <code>pytron://</code> protocol.</li>
        <li><strong>Deep Linking:</strong> Handle custom URI schemes like <code>my-app://action</code>.</li>
        <li><strong>Taskbar Progress:</strong> Native progress bars in Windows Taskbar or macOS Dock.</li>
      </ul>


      <h2>2. Pytron Client (The Bridge)</h2>
      <p>
        A lightweight JavaScript library that connects your frontend (React, Vue, Svelte) to your Python backend. It abstracts IPC into clean, promise-based calls.
      </p>
      <ul>
        <li><strong>Transparent RPC:</strong> Call Python functions as if they were local JS functions.</li>
        <li><strong>Typed Definitions:</strong> Automatically generated TypeScript types for your Python API.</li>
        <li><strong>Event Streaming:</strong> Push data from Python to JS in real-time.</li>
      </ul>
      <pre><code className="language-javascript">{`import pytron from 'pytron-client';

// Call exposed Python function
const data = await pytron.get_data();

// Listen for backend events
pytron.on('status-update', (msg) => {
  console.log(msg);
});`}</code></pre>

      <h2>3. Pytron UI (The Presentation)</h2>
      <p>
        A professional component library designed to make web apps feel native. Stop building websites in windows; start building desktop software.
      </p>
      <ul>
        <li><strong>Custom TitleBars:</strong> Implement draggable, frameless window headers with ease.</li>
        <li><strong>System Dialogs:</strong> Native-feeling file pickers and message boxes.</li>
        <li><strong>Desktop Paradigms:</strong> Components built for mouse interaction, sidebars, and multi-paned layouts.</li>
      </ul>
      <pre><code className="language-jsx">{`import { TitleBar, Sidebar, AppContainer } from 'pytron-ui';

function App() {
  return (
    <AppContainer>
      <TitleBar title="My Pytron App" />
      <Sidebar items={['Home', 'Settings']} />
      <Dashboard />
    </AppContainer>
  );
}`}</code></pre>

      <hr style={{ margin: '4rem 0' }} />

      <h1>The Developer Experience</h1>

      <h2>System Health (Pytron Doctor)</h2>
      <p>
        Building desktop apps requires many tools (Node, Python, SDKs). Our <code>doctor</code> command ensures your environment is perfectly configured.
      </p>
      <pre><code>{`pytron doctor`}</code></pre>

      <h2>Native Desktop Performance</h2>
      <p>
        Pytron uses the <strong>Native System Webview</strong> (WebView2 on Windows, WebKitGTK on Linux) to ensure ultra-lightweight binaries (~30MB) and very low memory consumption compared to Electron.
      </p>

      <h2>Professional Packaging</h2>
      <p>
        Package your app for Windows (NSIS), macOS (DMG), or Linux (Deb) with one command. Pytron handles the complexity of manifests, icons, and bundling.
      </p>
      <pre><code>{`pytron package --secure --installer`}</code></pre>

      <h2>Built-in Auto Updater</h2>
      <p>
        Pytron includes a robust <code>Updater</code> module out of the box. Simply host a JSON manifest file and your binary, and Pytron handles checking for updates, verifying versions, and installing the new release.
      </p>
      <pre><code className="language-python">{`from pytron import App
app = App()

@app.expose
def check_updates():
    return app.check_updates("https://myapp.com/update.json")`}</code></pre>
    </div>
  );
}
