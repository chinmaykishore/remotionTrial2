import { Layout } from '../components/Shared';
import { useCurrentFrame, spring, useVideoConfig, Audio, staticFile, Img } from 'remotion';

export const Scene2Enhanced: React.FC<{ voice: string }> = ({ voice }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const scale = spring({
        frame,
        fps,
        config: { damping: 12 },
        delay: 15
    });

    const rates = [
        { label: 'EDGE REWARD POINTS', old: '5:4', new: '5:2', delay: 40 },
        { label: 'EDGE MILES', old: '1:4', new: '1:2', delay: 60 }
    ];

    return (
        <Layout 
            title="REWARD DEVALUATION" 
            subtitle="HUGE VALUE DROP"
            color="#FF9500"
            showAxis
        >
            <Audio src={staticFile(`accor-axis-end/${voice}/scene2.mp3`)} playbackRate={1.35} />

            <div style={{ marginTop: 60, display: 'flex', flexDirection: 'column', gap: 60 }}>
                {rates.map((rate, i) => {
                    const rateSpring = spring({
                        frame,
                        fps,
                        config: { damping: 12 },
                        delay: rate.delay === 40 ? 30 : 45
                    });

                    return (
                        <div key={rate.label} style={{ 
                            background: 'rgba(255, 149, 0, 0.1)', 
                            border: '2px solid rgba(255, 149, 0, 0.2)',
                            borderRadius: 30,
                            padding: '40px 60px',
                            transform: `scale(${rateSpring})`,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 30,
                            position: 'relative'
                        }}>
                            <div style={{ fontSize: 40, fontWeight: 900, color: '#FF9500', letterSpacing: 2 }}>{rate.label}</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 50 }}>
                                <div style={{ fontSize: 64, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through' }}>{rate.old}</div>
                                <div style={{ fontSize: 80, fontWeight: 900, color: 'white' }}>➔</div>
                                <div style={{ fontSize: 84, fontWeight: 900, color: 'white' }}>{rate.new}</div>
                            </div>
                        </div>
                    );
                })}

                <div style={{ 
                    marginTop: 40, 
                    padding: '40px 60px', 
                    background: 'linear-gradient(90deg, #FF4B2B, #FF9500)', 
                    borderRadius: 30,
                    textAlign: 'center',
                    transform: `scale(${scale})`,
                    boxShadow: '0 20px 50px rgba(255, 75, 43, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 40
                }}>
                    <div style={{ width: 120, height: 120 }}>
                        <Img 
                            src={staticFile('accor-axis-end/assets/devaluation_icon.png')} 
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                        />
                    </div>
                    <div>
                        <div style={{ fontSize: 36, fontWeight: 600, color: 'rgba(255,255,255,0.8)', marginBottom: 10 }}>VALUE DROP:</div>
                        <div style={{ fontSize: 72, fontWeight: 900, color: 'white' }}>Up to 50%+</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
