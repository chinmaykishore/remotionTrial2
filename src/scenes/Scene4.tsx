import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Img, Audio, staticFile } from 'remotion';

export const Scene4: React.FC = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	const logoScale = spring({
		frame,
		fps,
		config: { damping: 10, mass: 0.8 },
	});

	const textOpacity = interpolate(frame - 30, [0, 20], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 80, color: 'white', fontFamily: 'Outfit, sans-serif' }}>
			
			<Audio src={staticFile('scene4.mp3')} />

			{/* PM Modi Photo */}
			<div style={{
				width: 400,
				height: 400,
				borderRadius: '50%',
				overflow: 'hidden',
				marginBottom: 60,
				transform: `scale(${logoScale})`,
				border: '10px solid rgba(255,255,255,0.2)',
				boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
			}}>
				<Img 
					src={staticFile('modi.png')}
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				/>
			</div>

			<div style={{
				fontSize: 80,
				fontWeight: 800,
				textAlign: 'center',
				opacity: textOpacity,
				marginBottom: 40,
				color: '#FFB347'
			}}>
				A Step Towards Empowerment 🇮🇳
			</div>

			<div style={{
				fontSize: 60,
				fontWeight: 600,
				textAlign: 'center',
				backgroundColor: 'rgba(255, 255, 255, 0.1)',
				backdropFilter: 'blur(20px)',
				border: '1px solid rgba(255,255,255,0.2)',
				color: 'white',
				padding: '40px 80px',
				borderRadius: 50,
				opacity: textOpacity,
				boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
			}}>
				Start with just <b style={{ color: '#FFB347' }}>₹250</b> / YR<br />
				Open an account today! 🏦
			</div>
			
		</AbsoluteFill>
	);
};
