import { useCurrentFrame, interpolate, spring, useVideoConfig, Audio, staticFile, Img } from 'remotion';
import { Layout } from '../components/Shared';

export const Scene5: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const comparisonSpring = spring({
        frame: frame - 80,
        fps,
        config: { damping: 12 }
    });

    const iconSpring = spring({
        frame: frame - 40,
        fps,
        config: { damping: 12 }
    });

    return (
        <Layout subtitle="Change 4 —" title="Income Tax Can Check Your Social Media">
            <Audio src={staticFile('rbi-rules-apr2026/scene5.mp3')} playbackRate={1.3} />
            
            <div style={{ marginTop: 40, display: 'flex', gap: 40, alignItems: 'center' }}>
                <div style={{ flex: 1.5 }}>
                    <div style={{ 
                        fontSize: 38, 
                        fontWeight: 700, 
                        color: '#B0BEC5', 
                        marginBottom: 40,
                        opacity: interpolate(frame, [30, 60], [0, 1])
                    }}>
                        ITD can verify your lifestyle by checking your <span style={{ color: '#C13584', fontWeight: 900 }}>Instagram Account.</span>
                    </div>

                    {/* Comparison UI */}
                    <div style={{ 
                        display: 'flex', 
                        gap: 20,
                        alignItems: 'center',
                        marginBottom: 50,
                        opacity: comparisonSpring,
                        transform: `scale(${interpolate(frame, [80, 110], [0.95, 1])})`
                    }}>
                        {/* Your ITR */}
                        <div style={{ 
                            flex: 1, 
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: 30,
                            borderRadius: 24,
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            textAlign: 'center'
                        }}>
                            <div style={{ color: '#B0BEC5', fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Your ITR:</div>
                            <div style={{ fontSize: 54, fontWeight: 900 }}>₹7 Lakh</div>
                            <div style={{ fontSize: 18, color: 'rgba(255, 255, 255, 0.3)', marginTop: 5 }}>ANNUAL INCOME</div>
                        </div>

                        <div style={{ fontSize: 32, fontWeight: 900, color: '#00F2FF' }}>VS</div>

                        {/* Your Instagram */}
                        <div style={{ 
                            flex: 1, 
                            background: 'rgba(193, 53, 132, 0.1)',
                            padding: 30,
                            borderRadius: 24,
                            border: '2px solid #C13584',
                            textAlign: 'center'
                        }}>
                            <div style={{ color: '#C13584', fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Instagram:</div>
                            <div style={{ fontSize: 54, fontWeight: 900 }}>₹60 Lakh</div>
                            <div style={{ fontSize: 18, color: '#C13584', marginTop: 5 }}>LUXURY CAR</div>
                        </div>
                    </div>
                </div>

                <div style={{ 
                    flex: 1, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    transform: `scale(${iconSpring}) rotate(${interpolate(frame, [40, 100], [10, 0], {extrapolateRight: 'clamp'})}deg)`,
                    opacity: iconSpring
                }}>
                    <Img 
                        src={staticFile('rbi-rules-apr2026/assets/social_media.png')} 
                        style={{ width: '100%', height: 'auto', borderRadius: 40 }}
                    />
                </div>
            </div>

            <div style={{ 
                background: '#FFD700',
                padding: '30px 45px',
                borderRadius: 24,
                color: '#0A0E21',
                fontSize: 36, 
                fontWeight: 900, 
                textAlign: 'center',
                opacity: interpolate(frame, [140, 170], [0, 1]),
                boxShadow: '0 10px 30px rgba(255, 215, 0, 0.3)'
            }}>
                RESULT: "Where did the money come from?"
            </div>

            <div style={{ 
                marginTop: 40, 
                padding: 30, 
                borderTop: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
                opacity: interpolate(frame, [200, 230], [0, 1])
            }}>
                <div style={{ fontSize: 28, color: '#FF4D4D', fontWeight: 900 }}>LESSON:</div>
                <div style={{ fontSize: 32, fontWeight: 700, marginTop: 10 }}>
                    What you show online can trigger tax investigations.
                </div>
            </div>
        </Layout>
    );
};
