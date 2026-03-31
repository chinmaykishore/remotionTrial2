import { useCurrentFrame, interpolate, spring, useVideoConfig, Audio, staticFile, Img } from 'remotion';
import { Layout } from '../components/Shared';

export const Scene2: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const cardSpring = spring({
        frame: frame - 60,
        fps,
        config: { damping: 10 }
    });

    const iconSpring = spring({
        frame: frame - 30,
        fps,
        config: { damping: 12 }
    });

    return (
        <Layout subtitle="Change 1 —" title="UPI ATM Withdrawals Now Count Towards Free Limit">
            <Audio src={staticFile('rbi-rules-apr2026/scene2.mp3')} playbackRate={1.3} />
            
            <div style={{ marginTop: 40, display: 'flex', gap: 40 }}>
                <div style={{ flex: 1 }}>
                    {/* Earlier vs Now Comparison */}
                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: 30,
                        marginBottom: 60
                    }}>
                        <div style={{ 
                            padding: '35px 45px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: 24,
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            opacity: interpolate(frame, [40, 70], [0, 1]),
                            transform: `translateX(${interpolate(frame, [40, 70], [-50, 0])}px)`
                        }}>
                            <div style={{ color: '#B0BEC5', fontSize: 24, fontWeight: 700, textTransform: 'uppercase', marginBottom: 10 }}>Earlier:</div>
                            <div style={{ fontSize: 36, fontWeight: 750 }}>UPI cash withdrawals from ATMs were separate.</div>
                        </div>

                        <div style={{ 
                            padding: '35px 45px',
                            background: 'rgba(0, 242, 255, 0.1)',
                            borderRadius: 24,
                            border: '2px solid #00F2FF',
                            opacity: interpolate(frame, [80, 110], [0, 1]),
                            transform: `scale(${interpolate(frame, [80, 110], [0.9, 1])})`
                        }}>
                            <div style={{ color: '#00F2FF', fontSize: 24, fontWeight: 800, textTransform: 'uppercase', marginBottom: 10 }}>From April 1, 2026:</div>
                            <div style={{ fontSize: 36, fontWeight: 900 }}>They will COUNT towards your monthly free withdrawal limit.</div>
                        </div>
                    </div>
                </div>

                {/* Side Illustration / Icon */}
                <div style={{ 
                    width: 300, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    transform: `scale(${iconSpring})`,
                    opacity: iconSpring
                }}>
                    <Img 
                        src={staticFile('rbi-rules-apr2026/assets/upi_atm.png')} 
                        style={{ width: '100%', height: 'auto', borderRadius: 40 }}
                    />
                </div>
            </div>

            {/* Example Illustration */}
            <div style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                padding: 40,
                borderRadius: 32,
                border: '1px dashed rgba(255, 255, 255, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 30,
                opacity: cardSpring
            }}>
                <div style={{ fontSize: 32, fontWeight: 700, color: '#FFD700' }}>Example:</div>
                <div style={{ display: 'flex', gap: 60, alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 24, color: '#B0BEC5', marginBottom: 5 }}>Monthly Free</div>
                        <div style={{ fontSize: 80, fontWeight: 900 }}>5</div>
                    </div>
                    <div style={{ fontSize: 48 }}>-</div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 24, color: '#B0BEC5', marginBottom: 5 }}>UPI Used</div>
                        <div style={{ fontSize: 80, fontWeight: 900, color: '#FF4D4D' }}>3</div>
                    </div>
                    <div style={{ fontSize: 48 }}>=</div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 24, color: '#00F2FF', marginBottom: 5 }}>Now Left</div>
                        <div style={{ fontSize: 100, fontWeight: 900, color: '#00F2FF' }}>2</div>
                    </div>
                </div>
                <div style={{ fontSize: 36, fontWeight: 800, color: '#FFFFFF' }}>
                    6th withdrawal onwards = <span style={{ color: '#FFD700' }}>₹20 to ₹25 charge</span>
                </div>
            </div>
        </Layout>
    );
};
