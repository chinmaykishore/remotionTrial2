import { useCurrentFrame, interpolate, spring, useVideoConfig, Audio, staticFile, Img } from 'remotion';
import { Layout } from '../components/Shared';

export const Scene3: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const transactions = [
        "Cash deposits/withdrawals above ₹10 Lakh/year",
        "Credit card bills above ₹1 Lakh paid in cash",
        "Digital transactions above ₹10 Lakh/day",
        "Cash FDs above ₹10 Lakh",
        "High-value purchases (cars, jewelry, property)"
    ];

    const iconSpring = spring({
        frame: frame - 40,
        fps,
        config: { damping: 12 }
    });

    return (
        <Layout subtitle="Change 2 —" title="Income Tax Will Track High-Value Transactions">
            <Audio src={staticFile('rbi-rules-apr2026/scene3.mp3')} playbackRate={1.3} />
            
            <div style={{ marginTop: 40, display: 'flex', gap: 40 }}>
                <div style={{ flex: 1 }}>
                    <div style={{ 
                        fontSize: 32, 
                        fontWeight: 700, 
                        color: '#B0BEC5', 
                        marginBottom: 30,
                        textTransform: 'uppercase',
                        opacity: interpolate(frame, [30, 60], [0, 1])
                    }}>
                        Automatic reports on:
                    </div>

                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: 15
                    }}>
                        {transactions.map((text, i) => {
                            const sceneFrame = 60 + i * 15;
                            const op = interpolate(frame, [sceneFrame, sceneFrame + 20], [0, 1], { extrapolateRight: 'clamp' });
                            const tr = interpolate(frame, [sceneFrame, sceneFrame + 20], [20, 0], { extrapolateRight: 'clamp' });

                            return (
                                <div key={i} style={{ 
                                    padding: '20px 30px',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: 16,
                                    borderLeft: '10px solid #FFD700',
                                    fontSize: 28,
                                    fontWeight: 700,
                                    color: '#FFFFFF',
                                    opacity: op,
                                    transform: `translateY(${tr}px)`
                                }}>
                                    {text}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div style={{ 
                    width: 320, 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: 30
                }}>
                    <div style={{ transform: `scale(${iconSpring})`, opacity: iconSpring }}>
                        <Img 
                            src={staticFile('rbi-rules-apr2026/assets/income_tax.png')} 
                            style={{ width: '100%', height: 'auto', borderRadius: '50%' }}
                        />
                    </div>
                    
                    <div style={{ 
                        background: 'rgba(0, 242, 255, 0.1)',
                        padding: '25px 35px',
                        borderRadius: 20,
                        border: '1px solid #00F2FF',
                        opacity: interpolate(frame, [180, 210], [0, 1]),
                        textAlign: 'center'
                    }}>
                        <div style={{ 
                            background: '#00F2FF', 
                            padding: '10px 20px', 
                            borderRadius: 12, 
                            fontWeight: 900, 
                            color: '#0A0E21',
                            fontSize: 20,
                            marginBottom: 10
                        }}>PAN REQUIRED</div>
                        <div style={{ fontSize: 24, fontWeight: 700 }}>All these require PAN card verification.</div>
                    </div>
                </div>
            </div>

            <div style={{ 
                marginTop: 30, 
                color: '#FF4D4D', 
                fontWeight: 900, 
                fontSize: 32, 
                textAlign: 'center',
                fontStyle: 'italic',
                opacity: interpolate(frame, [210, 240], [0, 1])
            }}>
                Failure to explain source = Income Tax notice.
            </div>
        </Layout>
    );
};
