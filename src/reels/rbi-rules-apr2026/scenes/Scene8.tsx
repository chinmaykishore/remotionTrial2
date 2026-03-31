import { useCurrentFrame, interpolate, spring, useVideoConfig, Audio, staticFile, Img } from 'remotion';
import { Layout } from '../components/Shared';

export const Scene8: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const compensationSpring = spring({
        frame: frame - 100,
        fps,
        config: { damping: 10 }
    });

    const iconSpring = spring({
        frame: frame - 40,
        fps,
        config: { damping: 12 }
    });

    return (
        <Layout subtitle="Change 7 —" title="Digital Fraud Compensation (Up to ₹25,000)">
            <Audio src={staticFile('rbi-rules-apr2026/scene8.mp3')} playbackRate={1.3} />
            
            <div style={{ marginTop: 40, display: 'flex', gap: 40, alignItems: 'center' }}>
                <div style={{ flex: 1.2 }}>
                    <div style={{ 
                        padding: '40px 50px',
                        background: 'rgba(0, 242, 255, 0.1)',
                        borderRadius: 32,
                        border: '2px solid #00F2FF',
                        marginBottom: 40,
                        opacity: interpolate(frame, [30, 70], [0, 1])
                    }}>
                        <div style={{ fontSize: 44, fontWeight: 900 }}>85% Compensation</div>
                        <div style={{ fontSize: 28, color: '#B0BEC5', marginTop: 15, fontWeight: 700 }}>If you fall victim to digital fraud up to ₹50,000.</div>
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
                        src={staticFile('rbi-rules-apr2026/assets/fraud_shield.png')} 
                        style={{ width: '100%', height: 'auto', borderRadius: 40 }}
                    />
                </div>
            </div>

            {/* Main Stats */}
            <div style={{ 
                display: 'flex', 
                gap: 30,
                marginBottom: 40
            }}>
                <div style={{ 
                    flex: 1, 
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: 35,
                    borderRadius: 24,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    textAlign: 'center',
                    opacity: compensationSpring,
                    transform: `translateY(${interpolate(frame, [100, 130], [30, 0])}px)`
                }}>
                    <div style={{ color: '#FFD700', fontSize: 24, fontWeight: 800, marginBottom: 10 }}>Max Payout:</div>
                    <div style={{ fontSize: 56, fontWeight: 950 }}>₹25,000</div>
                </div>

                <div style={{ 
                    flex: 1, 
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: 35,
                    borderRadius: 24,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    textAlign: 'center',
                    opacity: compensationSpring,
                    transform: `translateY(${interpolate(frame, [100, 130], [30, 0])}px)`
                }}>
                    <div style={{ color: '#00F2FF', fontSize: 24, fontWeight: 800, marginBottom: 10 }}>Effective:</div>
                    <div style={{ fontSize: 36, fontWeight: 950 }}>July 1, 2026</div>
                </div>
            </div>

            {/* Conditions */}
            <div style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                padding: 35,
                borderRadius: 24,
                border: '1px dashed rgba(255, 255, 255, 0.2)',
                opacity: interpolate(frame, [150, 180], [0, 1])
            }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: '#FFD700', marginBottom: 15 }}>CONDITIONS:</div>
                <ul style={{ fontSize: 26, fontWeight: 700, listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <li>✓ Report fraud to bank within **5 days**.</li>
                    <li>✓ You can claim this **ONLY ONCE** in your lifetime.</li>
                </ul>
            </div>

            <div style={{ 
                marginTop: 30, 
                fontSize: 32, 
                fontWeight: 900, 
                color: '#FF4D4D', 
                textAlign: 'center',
                opacity: interpolate(frame, [200, 230], [0, 1])
            }}>
                Prevent fraud first. Compensation is backup.
            </div>
        </Layout>
    );
};
