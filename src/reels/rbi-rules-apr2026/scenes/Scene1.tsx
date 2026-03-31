import { useCurrentFrame, spring, interpolate, useVideoConfig, Audio, staticFile, Img } from 'remotion';
import { Layout } from '../components/Shared';

export const Scene1: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const titleSpring = spring({
        frame: frame - 20,
        fps,
        config: { damping: 12 }
    });

    const listOpacity = interpolate(frame, [80, 130], [0, 1], { extrapolateRight: 'clamp' });

    const iconSpring = spring({
        frame: frame - 40,
        fps,
        config: { damping: 12 }
    });

    return (
        <Layout subtitle="From April 1, 2026 —" title="RBI is changing EVERYTHING">
            <Audio src={staticFile('rbi-rules-apr2026/scene1.mp3')} playbackRate={1.3} />
            
            <div style={{ marginTop: 40, display: 'flex', gap: 40, alignItems: 'center' }}>
                <div style={{ flex: 1.2 }}>
                    <p style={{ 
                        fontSize: 56, 
                        color: '#B0BEC5', 
                        fontWeight: 600, 
                        transform: `translateY(${(1 - titleSpring) * 100}px)`,
                        opacity: titleSpring,
                        marginBottom: 60
                    }}>
                        about your bank account.
                    </p>

                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: 40,
                        opacity: listOpacity,
                        transform: `translateX(${(1 - listOpacity) * 50}px)`
                    }}>
                        {[
                            "UPI ATM withdrawals will cost you money.",
                            "Income Tax can check your Instagram now.",
                            "Digital fraud? You might get ₹25,000 back."
                        ].map((text, i) => (
                            <div key={i} style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: 20,
                                padding: '30px 40px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: 16,
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                fontSize: 34,
                                fontWeight: 700,
                                color: '#FFFFFF'
                            }}>
                                <div style={{ 
                                    width: 18, 
                                    height: 18, 
                                    background: '#00F2FF', 
                                    borderRadius: '50%',
                                    boxShadow: '0 0 15px rgba(0, 242, 255, 0.5)'
                                }} />
                                {text}
                            </div>
                        ))}
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
                        src={staticFile('rbi-rules-apr2026/assets/banking.png')} 
                        style={{ width: '100%', height: 'auto', borderRadius: 40 }}
                    />
                </div>
            </div>

            <div style={{ 
                marginTop: 60, 
                fontSize: 54, 
                fontWeight: 800, 
                color: '#FFD700',
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                opacity: interpolate(frame, [180, 210], [0, 1], { extrapolateRight: 'clamp' })
            }}>
                Here is what is changing <span style={{ fontSize: 70 }}>👇</span>
            </div>
        </Layout>
    );
};
