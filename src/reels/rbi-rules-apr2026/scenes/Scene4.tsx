import { useCurrentFrame, interpolate, spring, useVideoConfig, Audio, staticFile, Img } from 'remotion';
import { Layout } from '../components/Shared';

export const Scene4: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const penaltySpring = spring({
        frame: frame - 100,
        fps,
        config: { damping: 8, stiffness: 200 }
    });

    const iconSpring = spring({
        frame: frame - 40,
        fps,
        config: { damping: 12 }
    });

    return (
        <Layout subtitle="Change 3 —" title="Section 269ST Penalty is BRUTAL">
            <Audio src={staticFile('rbi-rules-apr2026/scene4.mp3')} playbackRate={1.3} />
            
            <div style={{ marginTop: 40, display: 'flex', gap: 40, alignItems: 'center' }}>
                <div style={{ flex: 1.2 }}>
                    <div style={{ 
                        background: 'rgba(255, 77, 77, 0.1)',
                        padding: 50,
                        borderRadius: 32,
                        border: '2px dashed #FF4D4D',
                        marginBottom: 40,
                        transform: `translateX(${interpolate(frame, [30, 70], [-100, 0])}px)`,
                        opacity: interpolate(frame, [30, 70], [0, 1])
                    }}>
                        <div style={{ color: '#FF4D4D', fontSize: 32, fontWeight: 900, marginBottom: 15 }}>THE RULE:</div>
                        <div style={{ fontSize: 44, fontWeight: 800 }}>You CANNOT make cash transactions above ₹2 Lakh in a single day.</div>
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
                        src={staticFile('rbi-rules-apr2026/assets/cash_penalty.png')} 
                        style={{ width: '100%', height: 'auto', borderRadius: 40 }}
                    />
                </div>
            </div>

            <div style={{ display: 'flex', gap: 40, marginTop: 20 }}>
                <div style={{ 
                    flex: 1,
                    textAlign: 'center',
                    transform: `scale(${penaltySpring})`,
                    opacity: penaltySpring
                }}>
                    <div style={{ fontSize: 36, fontWeight: 700, color: '#B0BEC5', marginBottom: 10 }}>PENALTY:</div>
                    <div style={{ fontSize: 130, fontWeight: 900, color: '#FF4D4D', lineHeight: 1 }}>100%</div>
                    <div style={{ fontSize: 32, fontWeight: 700, color: '#FFFFFF' }}>of the amount.</div>
                </div>

                <div style={{ 
                    flex: 1,
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: 35,
                    borderRadius: 24,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    opacity: interpolate(frame, [160, 190], [0, 1]),
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <div style={{ fontSize: 28, fontWeight: 700, color: '#FFD700', marginBottom: 10 }}>Important:</div>
                    <div style={{ fontSize: 32, fontWeight: 700 }}>This applies to **TOTAL transactions** in a day.</div>
                    <div style={{ fontSize: 28, fontWeight: 600, color: '#B0BEC5', marginTop: 15 }}>
                        Withdraw ₹1 Lakh twice = <span style={{ color: '#FF4D4D', fontWeight: 900 }}>VIOLATION!</span>
                    </div>
                </div>
            </div>

            <div style={{ 
                marginTop: 30, 
                fontSize: 36, 
                fontWeight: 900, 
                color: '#FFD700', 
                textAlign: 'center',
                opacity: interpolate(frame, [210, 240], [0, 1])
            }}>
                Avoid large cash transactions completely.
            </div>
        </Layout>
    );
};
