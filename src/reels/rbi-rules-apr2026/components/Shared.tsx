import { AbsoluteFill, useCurrentFrame, interpolate, useVideoConfig, Img, staticFile } from 'remotion';



export const Watermark: React.FC = () => {
    return (
        <div style={{
            position: 'absolute',
            bottom: 100, // Move up for safe zone
            width: '100%',
            textAlign: 'center',
            fontSize: 32,
            fontWeight: 600,
            color: 'rgba(255, 255, 255, 0.4)',
            fontFamily: 'Outfit, sans-serif',
            letterSpacing: 2
        }}>

            @fintech_with_ai
        </div>
    );
};

export const Layout: React.FC<{ children: React.ReactNode, title?: string, subtitle?: string }> = ({ children, title, subtitle }) => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();

    const opacity = interpolate(
        frame,
        [0, 20, durationInFrames - 20, durationInFrames],
        [0, 1, 1, 0],
        { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
    );

    const slide = interpolate(
        frame,
        [0, 35, durationInFrames - 35, durationInFrames],
        [100, 0, 0, -100],
        { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
    );



    return (
        <AbsoluteFill style={{
            backgroundColor: '#0A0E21',
            fontFamily: 'Outfit, sans-serif',
            color: 'white',
            padding: '250px 80px 120px 80px', // Significantly increased top padding to 250px
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            opacity,
            transform: `translateX(${slide}px)`
        }}>


            {/* Background Gradient Mesh Effect */}
            <div style={{
                position: 'absolute',
                top: -500,
                right: -500,
                width: 1000,
                height: 1000,
                background: 'radial-gradient(circle, rgba(0, 242, 255, 0.1) 0%, rgba(10, 14, 33, 0) 70%)',
                zIndex: 0
            }} />
            <div style={{
                position: 'absolute',
                bottom: -300,
                left: -300,
                width: 800,
                height: 800,
                background: 'radial-gradient(circle, rgba(255, 215, 0, 0.05) 0%, rgba(10, 14, 33, 0) 70%)',
                zIndex: 0
            }} />

            {/* Header */}
            {(title || subtitle) && (
                <div style={{ marginBottom: 60, zIndex: 1, position: 'relative' }}>
                    {/* RBI Logo in corner - Adjusted to stay within safe zone */}
                    <div style={{ 
                        position: 'absolute', 
                        top: -80, // Moved slightly higher relative to header but lower than previous -20
                        right: 0, 
                        width: 140, 
                        height: 140, 
                        opacity: 0.8
                    }}>
                        <Img 
                            src={staticFile('rbi-rules-apr2026/assets/rbi_logo.png')} 
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                        />
                    </div>


                    {subtitle && (
                        <div style={{ 
                            fontSize: 36, 
                            color: '#00F2FF', 
                            fontWeight: 700, 
                            textTransform: 'uppercase',
                            letterSpacing: 4,
                            marginBottom: 10,
                            maxWidth: '70%'
                        }}>
                            {subtitle}
                        </div>
                    )}
                    {title && (
                        <h1 style={{ 
                            fontSize: 84, 
                            fontWeight: 900, 
                            lineHeight: 1.1,
                            margin: 0,
                            background: 'linear-gradient(to right, #FFFFFF, #B0BEC5)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            maxWidth: '80%'
                        }}>
                            {title}
                        </h1>
                    )}
                    <div style={{ 
                        width: 120, 
                        height: 8, 
                        background: 'linear-gradient(to right, #00F2FF, #FFD700)',
                        marginTop: 30,
                        borderRadius: 4
                    }} />
                </div>
            )}


            <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                {children}
            </div>

            <Watermark />
        </AbsoluteFill>
    );
};
