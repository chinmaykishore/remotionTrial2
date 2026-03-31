import { useCurrentFrame, interpolate, spring, useVideoConfig, Audio, staticFile, Img } from 'remotion';
import { Layout } from '../components/Shared';

export const Scene9: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const rules = [
        "Threaten or physically intimidate you",
        "Contact you before 8 AM or after 7 PM",
        "Call your relatives or friends",
        "Share your loan details with others"
    ];

    const iconSpring = spring({
        frame: frame - 40,
        fps,
        config: { damping: 12 }
    });

    return (
        <Layout subtitle="Change 8 —" title="Loan Recovery Agents Cannot Harass You">
            <Audio src={staticFile('rbi-rules-apr2026/scene9.mp3')} playbackRate={1.3} />
            
            <div style={{ marginTop: 40, display: 'flex', gap: 40, alignItems: 'center' }}>
                <div style={{ flex: 1.2 }}>
                    <div style={{ 
                        fontSize: 34, 
                        fontWeight: 800, 
                        color: '#FF4D4D', 
                        marginBottom: 30,
                        textTransform: 'uppercase',
                        opacity: interpolate(frame, [20, 50], [0, 1])
                    }}>
                        What agents CANNOT do:
                    </div>

                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: 20
                    }}>
                        {rules.map((text, i) => {
                            const sceneFrame = 60 + i * 15;
                            const op = interpolate(frame, [sceneFrame, sceneFrame + 20], [0, 1], { extrapolateRight: 'clamp' });
                            const tr = interpolate(frame, [sceneFrame, sceneFrame + 20], [20, 0], { extrapolateRight: 'clamp' });

                            return (
                                <div key={i} style={{ 
                                    padding: '20px 30px',
                                    background: 'rgba(255, 77, 77, 0.05)',
                                    borderRadius: 16,
                                    borderLeft: '10px solid #FF4D4D',
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
                                        background: '#FF4D4D', 
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: 18,
                                        color: '#FFFFFF',
                                        fontWeight: 900
                                    }}>X</div>
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
                        src={staticFile('rbi-rules-apr2026/assets/phone_block.png')} 
                        style={{ width: '100%', height: 'auto', borderRadius: 40 }}
                    />
                </div>
            </div>

            {/* Bank Penalty */}
            <div style={{ 
                marginTop: 40, 
                background: 'rgba(255, 215, 0, 0.1)',
                padding: '25px 40px',
                borderRadius: 24,
                border: '1px solid #FFD700',
                display: 'flex',
                alignItems: 'center',
                gap: 30,
                opacity: interpolate(frame, [160, 190], [0, 1])
            }}>
                <div style={{ 
                    background: '#FFD700', 
                    padding: '10px 20px', 
                    borderRadius: 12, 
                    fontWeight: 900, 
                    color: '#0A0E21',
                    fontSize: 22
                }}>PENALTY FOR BANKS</div>
                <div style={{ fontSize: 28, fontWeight: 800 }}>Heavy fines and license suspension.</div>
            </div>

            <div style={{ 
                marginTop: 30, 
                fontSize: 36, 
                fontWeight: 900, 
                color: '#00F2FF', 
                textAlign: 'center',
                opacity: interpolate(frame, [200, 230], [0, 1])
            }}>
                Report harassment to RBI immediately!
            </div>
        </Layout>
    );
};
