import { useCurrentFrame, interpolate, spring, useVideoConfig, Audio, staticFile, Img } from 'remotion';
import { Layout } from '../components/Shared';

export const Scene10: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const ctaSpring = (offset: number) => spring({
        frame: frame - offset,
        fps,
        config: { damping: 10 }
    });

    const iconSpring = spring({
        frame: frame - 40,
        fps,
        config: { damping: 12 }
    });

    const items = [
        { icon: "🔖", text: "Save (important for future)" },
        { icon: "✈️", text: "Share with your family" },
        { icon: "💬", text: "Comment 'RULES' to learn more" },
        { icon: "👤", text: "Follow @fintech_with_ai" }
    ];

    return (
        <Layout subtitle="Be aware. Be smart. —" title="These rules can save you... or cost you money.">
            <Audio src={staticFile('rbi-rules-apr2026/scene10.mp3')} playbackRate={1.3} />
            
            <div style={{ marginTop: 40, display: 'flex', gap: 40, alignItems: 'center' }}>
                <div style={{ flex: 1.5 }}>
                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: 20
                    }}>
                        {items.map((item, i) => {
                            const s = ctaSpring(40 + i * 20);
                            return (
                                <div key={i} style={{ 
                                    padding: '30px 40px',
                                    background: i === 3 ? 'rgba(0, 242, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: 24,
                                    border: i === 3 ? '2px solid #00F2FF' : '1px solid rgba(255, 255, 255, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 25,
                                    fontSize: 34,
                                    fontWeight: 800,
                                    color: '#FFFFFF',
                                    transform: `scale(${s})`,
                                    opacity: s,
                                    boxShadow: i === 3 ? '0 10px 40px rgba(0, 242, 255, 0.2)' : 'none'
                                }}>
                                    <div style={{ fontSize: 40 }}>{item.icon}</div>
                                    {item.text}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div style={{ 
                    flex: 1, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    transform: `scale(${iconSpring})`,
                    opacity: iconSpring
                }}>
                    <Img 
                        src={staticFile('rbi-rules-apr2026/assets/conclusion.png')} 
                        style={{ width: '100%', height: 'auto', borderRadius: 40 }}
                    />
                </div>
            </div>

            <div style={{ 
                marginTop: 60, 
                textAlign: 'center',
                opacity: interpolate(frame, [180, 210], [0, 1])
            }}>
                <div style={{ 
                    fontSize: 60, 
                    fontWeight: 900, 
                    background: 'linear-gradient(to right, #00F2FF, #FFD700)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: 10
                }}>
                    Stay financially smart.
                </div>
            </div>
        </Layout>
    );
};
