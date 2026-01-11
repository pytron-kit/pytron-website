import { motion } from 'framer-motion';
import { Send, Database, Code, Terminal, Globe, Menu, Bell, Monitor, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RequestsStudioPage() {
    return (
        <div style={{
            background: '#020203',
            minHeight: '100vh',
            color: '#fff',
            overflowX: 'hidden',
            position: 'relative'
        }}>
            {/* Insane Background Gradient Layer */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 0,
                background: '#020203',
                pointerEvents: 'none'
            }} />

            {/* Animated Mesh Layers */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, 0],
                    x: [0, 30, 0],
                    y: [0, -20, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'fixed',
                    top: '-10%',
                    left: '-10%',
                    width: '70vw',
                    height: '70vw',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
                    filter: 'blur(100px)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, -40, 0],
                    y: [0, 30, 0]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'fixed',
                    bottom: '-15%',
                    right: '-10%',
                    width: '60vw',
                    height: '60vw',
                    background: 'radial-gradient(circle, rgba(34, 211, 238, 0.06) 0%, transparent 60%)',
                    filter: 'blur(100px)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Hero Section */}
                <section style={{
                    padding: '6rem 2rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ width: '100%', maxWidth: '1100px' }}
                    >
                        <div style={{ marginBottom: '1.5rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <img
                                src={`${import.meta.env.BASE_URL}examples/RequestsStudio/Requests-studio-banner.png`}
                                alt="Requests Studio"
                                style={{
                                    width: '100%',
                                    maxWidth: '1000px',
                                    height: 'auto',
                                    display: 'block',
                                    filter: 'drop-shadow(0 0 50px rgba(139, 92, 246, 0.15))'
                                }}
                            />
                        </div>

                        <p style={{
                            fontSize: '1.25rem',
                            maxWidth: '750px',
                            color: '#94a3b8',
                            margin: '0 auto 2.5rem',
                            lineHeight: 1.6,
                            fontWeight: 450
                        }}>
                            An modern, extensible desktop API client built with Pytron-kit. <br />
                            Powered by <span style={{ color: '#a78bfa', fontWeight: 600 }}>Requests</span> & <span style={{ color: '#22d3ee', fontWeight: 600 }}>React</span>.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <a href="https://github.com/Ghua8088/Requests-Studio" target="_blank" className="btn-primary" style={{
                                padding: '0.9rem 2.5rem',
                                borderRadius: '0.75rem',
                                background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                                color: 'white',
                                textDecoration: 'none',
                                fontWeight: 700,
                                boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)',
                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                <Github size={20} /> View Source
                            </a>
                            <Link to="/docs" style={{
                                padding: '0.9rem 2.5rem',
                                borderRadius: '0.75rem',
                                background: 'rgba(255,255,255,0.03)',
                                color: 'white',
                                textDecoration: 'none',
                                fontWeight: 600,
                                border: '1px solid rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(10px)'
                            }}>
                                Documentation
                            </Link>
                        </div>
                    </motion.div>
                </section>

                {/* Features Grid */}
                <section style={{ padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2rem'
                    }}>
                        <FeatureCard
                            icon={<Send size={24} />}
                            title="Send HTTP Requests"
                            desc="Support for GET, POST, PUT, DELETE, and other methods using the 'requests' library."
                            accent="#8b5cf6"
                        />
                        <FeatureCard
                            icon={<Database size={24} />}
                            title="Request Collections"
                            desc="Organize and save your API requests in collections for easy reuse."
                            accent="#22d3ee"
                        />
                        <FeatureCard
                            icon={<Code size={24} />}
                            title="Response Viewer"
                            desc="View and analyze API responses with syntax highlighting."
                            accent="#f472b6"
                        />
                        <FeatureCard
                            icon={<Terminal size={24} />}
                            title="Console Drawer"
                            desc="Monitor logs and debug information in a dedicated panel."
                            accent="#60a5fa"
                        />
                        <FeatureCard
                            icon={<Globe size={24} />}
                            title="Address Bar"
                            desc="Easily input and modify request URLs with auto-suggestion."
                            accent="#34d399"
                        />
                        <FeatureCard
                            icon={<Menu size={24} />}
                            title="Sidebar Navigation"
                            desc="Navigate through your collections and requests with ease."
                            accent="#fbbf24"
                        />
                        <FeatureCard
                            icon={<Bell size={24} />}
                            title="Notifications"
                            desc="Get feedback on request status and errors via native-feel toasts."
                            accent="#f87171"
                        />
                        <FeatureCard
                            icon={<Monitor size={24} />}
                            title="Cross-Platform"
                            desc="Runs natively on Windows, macOS, and Linux with optimized performance."
                            accent="#a78bfa"
                        />
                    </div>
                </section>


                {/* Installation Guide */}
                <section style={{ padding: '8rem 2rem' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{
                            background: 'rgba(15, 15, 20, 0.5)',
                            padding: '4rem',
                            borderRadius: '3rem',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(20px)',
                            boxShadow: '0 40px 100px -20px rgba(0,0,0,0.5)'
                        }}>
                            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Get Started</h2>
                                <p style={{ color: '#64748b' }}>Scaffold and run the project locally with the Pytron CLI.</p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', color: '#8b5cf6', fontWeight: 700 }}>01. Setup</h3>
                                    <CodeBlock code={`pytron install\nnpm install`} color="#8b5cf6" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', color: '#22d3ee', fontWeight: 700 }}>02. Run</h3>
                                    <CodeBlock code={`pytron run`} color="#22d3ee" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer style={{ padding: '6rem 2rem', textAlign: 'center', color: '#444' }}>
                    <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        Built with <Link to="/" style={{ color: '#8b5cf6', textDecoration: 'none', fontWeight: 600 }}>Pytron Kit</Link>
                    </p>
                </footer>
            </div>
        </div>
    );
}


function FeatureCard({ icon, title, desc, accent }) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                padding: '3rem',
                borderRadius: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
        >
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: `radial-gradient(circle at top right, ${accent}15, transparent 70%)`,
                zIndex: 0
            }} />
            <div style={{
                marginBottom: '2rem',
                background: 'rgba(255,255,255,0.03)',
                width: '64px',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '1.25rem',
                border: `1px solid ${accent}40`,
                boxShadow: `0 8px 20px ${accent}20`
            }}>{icon}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700, color: '#f8fafc' }}>{title}</h3>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>{desc}</p>
        </motion.div>
    )
}

function CodeBlock({ code, color }) {
    return (
        <pre style={{
            background: '#0a0a0c',
            padding: '1.5rem',
            borderRadius: '1.25rem',
            border: `1px solid ${color}30`,
            overflowX: 'auto',
            fontFamily: "'Fira Code', monospace",
            fontSize: '0.95rem',
            lineHeight: 1.6,
            color: color,
            boxShadow: `0 10px 30px rgba(0,0,0,0.5)`
        }}>
            {code}
        </pre>
    )
}
