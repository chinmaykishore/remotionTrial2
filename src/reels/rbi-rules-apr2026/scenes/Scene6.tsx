import { useCurrentFrame, interpolate, spring, useVideoConfig, Audio, staticFile, Img } from 'remotion';
import { Layout } from '../components/Shared';

export const Scene6: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const benefits = [
        "Unlimited cash deposits (no charges)",
        "Free debit card (no annual fee)",
        "Free checkbook (up to a limit)",
        "Minimum 4 free ATM withdrawals"
    ];

    const iconSpring = spring({
        frame: frame - 40,
        fps,
        config: { damping: 12 }
    });

    return (
        <Layout subtitle="Change 5 —" title="Zero Balance Accounts Get MORE Benefits">
            <Audio src={staticFile('rbi-rules-apr2026/scene6.mp3')} playbackRate={1.3} />
            
            <div style={{ marginTop: 40, display: 'flex', gap: 40, alignItems: 'flex-start' }}>
                <div style={{ flex: 1.2 }}>
                    <div style={{ 
                        fontSize: 34, 
                        fontWeight: 800, 
                        color: '#00F2FF', 
                        marginBottom: 30,
                        textTransform: 'uppercase',
                        opacity: interpolate(frame, [30, 60], [0, 1])
                    }}>
                        BSBD accounts now offer:
                    </div>

                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: 20
                    }}>
                        {benefits.map((text, i) => {
                            const sceneFrame = 60 + i * 15;
                            const op = interpolate(frame, [sceneFrame, sceneFrame + 20], [0, 1], { extrapolateRight: 'clamp' });
                            const tr = interpolate(frame, [sceneFrame, sceneFrame + 20], [20, 0], { extrapolateRight: 'clamp' });

                            return (
                                <div key={i} style={{ 
                                    padding: '20px 30px',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: 16,
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 20,
                                    fontSize: 32,
                                    fontWeight: 700,
                                    color: '#FFFFFF',
                                    opacity: op,
                                    transform: `translateY(${tr}px)`
                                }}>
                                    <div style={{ 
                                        width: 32, 
                                        height: 32, 
                                        background: '#00C853', 
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: 18,
                                        color: '#FFFFFF'
                                    }}>✓</div>
                                    {text}
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
                        src={staticFile('rbi-rules-apr2026/assets/zero_balance.png')} 
                        style={{ width: '100%', height: 'auto', borderRadius: 40 }}
                    />
                </div>
            </div>

            <div style={{ 
                marginTop: 50, 
                display: 'flex', 
                gap: 30,
                alignItems: 'center',
                opacity: interpolate(frame, [160, 190], [0, 1])
            }}>
                <div style={{ 
                    flex: 1, 
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: 25,
                    borderRadius: 20,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    textAlign: 'center'
                }}>
                    <div style={{ color: '#B0BEC5', fontSize: 20, fontWeight: 700, marginBottom: 5 }}>Earlier:</div>
                    <div style={{ fontSize: 24, fontWeight: 700 }}>Many restrictions.</div>
                </div>

                <div style={{ fontSize: 40 }}>➜</div>

                <div style={{ 
                    flex: 1, 
                    background: 'rgba(0, 242, 255, 0.1)',
                    padding: 25,
                    borderRadius: 20,
                    border: '1px solid #00F2FF',
                    textAlign: 'center'
                }}>
                    <div style={{ color: '#00F2FF', fontSize: 20, fontWeight: 800, marginBottom: 5 }}>NOW:</div>
                    <div style={{ fontSize: 24, fontWeight: 900 }}>Genuinely useful banking.</div>
                </div>
            </div>

            <div style={{ 
                marginTop: 25, 
                fontSize: 30, 
                fontWeight: 700, 
                color: '#B0BEC5', 
                textAlign: 'center',
                fontStyle: 'italic',
                opacity: interpolate(frame, [180, 210], [0, 1])
            }}>
                No hidden charges for zero-balance banking.
            </div>
        </Layout>
    );
};
