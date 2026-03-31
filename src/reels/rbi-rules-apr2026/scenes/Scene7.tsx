import { useCurrentFrame, interpolate, spring, useVideoConfig, Audio, staticFile, Img } from 'remotion';
import { Layout } from '../components/Shared';

export const Scene7: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const iconSpring = spring({
        frame: frame - 40,
        fps,
        config: { damping: 12 }
    });

    return (
        <Layout subtitle="Change 6 —" title="Futures & Options Trading Tax Increased">
            <Audio src={staticFile('rbi-rules-apr2026/scene7.mp3')} playbackRate={1.3} />
            
            <div style={{ marginTop: 40, display: 'flex', gap: 40, alignItems: 'center' }}>
                <div style={{ flex: 1.5 }}>
                    <div style={{ 
                        fontSize: 34, 
                        fontWeight: 800, 
                        color: '#B0BEC5', 
                        marginBottom: 30,
                        textTransform: 'uppercase',
                        opacity: interpolate(frame, [0, 40], [0, 1])
                    }}>
                        STT Increased on F&O:
                    </div>

                    {/* Comparison UI */}
                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: 20,
                        marginBottom: 40
                    }}>
                        {/* Futures */}
                        <div style={{ 
                            padding: '25px',
                            background: 'rgba(255, 77, 77, 0.05)',
                            borderRadius: 32,
                            border: '1px solid rgba(255, 77, 77, 0.2)',
                            opacity: interpolate(frame, [50, 80], [0, 1]),
                            transform: `translateX(${interpolate(frame, [50, 80], [-50, 0])}px)`
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ fontSize: 32, fontWeight: 850 }}>Futures</div>
                                <div style={{ fontSize: 24, fontWeight: 900, color: '#FF4D4D' }}>+150% Increase</div>
                            </div>
                            <div style={{ display: 'flex', gap: 40, marginTop: 15, alignItems: 'center' }}>
                                <div>
                                    <div style={{ fontSize: 18, color: '#B0BEC5', fontWeight: 700 }}>Earlier: ₹200</div>
                                </div>
                                <div style={{ fontSize: 28 }}>➜</div>
                                <div>
                                    <div style={{ fontSize: 22, color: '#FF4D4D', fontWeight: 900 }}>Now: ₹500</div>
                                </div>
                            </div>
                        </div>

                        {/* Options */}
                        <div style={{ 
                            padding: '25px',
                            background: 'rgba(255, 77, 77, 0.05)',
                            borderRadius: 32,
                            border: '1px solid rgba(255, 77, 77, 0.2)',
                            opacity: interpolate(frame, [100, 130], [0, 1]),
                            transform: `translateX(${interpolate(frame, [100, 130], [-50, 0])}px)`
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ fontSize: 32, fontWeight: 850 }}>Options</div>
                                <div style={{ fontSize: 24, fontWeight: 900, color: '#FF4D4D' }}>+50% Increase</div>
                            </div>
                            <div style={{ display: 'flex', gap: 40, marginTop: 15, alignItems: 'center' }}>
                                <div>
                                    <div style={{ fontSize: 18, color: '#B0BEC5', fontWeight: 700 }}>Earlier: ₹10</div>
                                </div>
                                <div style={{ fontSize: 28 }}>➜</div>
                                <div>
                                    <div style={{ fontSize: 22, color: '#FF4D4D', fontWeight: 900 }}>Now: ₹15</div>
                                </div>
                            </div>
                        </div>
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
                        src={staticFile('rbi-rules-apr2026/assets/stock_chart.png')} 
                        style={{ width: '100%', height: 'auto', borderRadius: 40 }}
                    />
                </div>
            </div>

            <div style={{ 
                background: 'rgba(0, 200, 83, 0.1)',
                padding: '25px 40px',
                borderRadius: 24,
                border: '1px solid #00C853',
                opacity: interpolate(frame, [150, 180], [0, 1])
            }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: '#00C853', textTransform: 'uppercase', marginBottom: 5 }}>Good News:</div>
                <div style={{ fontSize: 26, fontWeight: 700 }}>Equity delivery and intraday taxes remain unchanged.</div>
            </div>

            <div style={{ 
                marginTop: 25, 
                fontSize: 28, 
                fontWeight: 700, 
                color: '#B0BEC5', 
                textAlign: 'center',
                fontStyle: 'italic',
                opacity: interpolate(frame, [190, 220], [0, 1])
            }}>
                Factor high tax into your profit calculations.
            </div>
        </Layout>
    );
};
