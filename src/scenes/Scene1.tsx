import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Audio, staticFile, Img } from 'remotion';

export const Scene1: React.FC = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	// Animations
	const titleProgress = spring({
		frame,
		fps,
		config: { damping: 12 },
	});

	const subtitleProgress = spring({
		frame: frame - 40,
		fps,
		config: { damping: 12 },
	});

	const titleY = interpolate(titleProgress, [0, 1], [100, 0]);
	const subtitleScale = interpolate(subtitleProgress, [0, 1], [0.5, 1]);

	return (
		<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 80, color: 'white', fontFamily: 'Outfit, sans-serif' }}>
			
			<Audio src={staticFile('scene1.mp3')} />

			{/* PM Modi Photo */}
			<div style={{
				width: 300,
				height: 300,
				borderRadius: '50%',
				overflow: 'hidden',
				marginBottom: 30,
				transform: `scale(${titleProgress})`,
				border: '8px solid rgba(255,179,71,0.5)',
				boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
			}}>
				<Img 
					src={staticFile('modi.png')}
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				/>
			</div>

			{/* Hook Label */}
			<div
				style={{
					fontSize: 60,
					fontWeight: 800,
					textAlign: 'center',
					marginBottom: 40,
					color: '#FFB347',
					transform: `scale(${titleProgress})`
				}}
			>
				Secure Your Girl Child's Future! 👧
			</div>

			{/* Hook Title */}
			<div
				style={{
					fontSize: 90,
					fontWeight: 900,
					textAlign: 'center',
					lineHeight: 1.1,
					transform: `translateY(${titleY}px)`,
					opacity: titleProgress,
					textShadow: '0 10px 30px rgba(0,0,0,0.5)'
				}}
			>
				START INVESTING
				<br />
				<span style={{ color: '#FFB347', fontSize: 130 }}>₹5,000</span> / MO
			</div>

			{/* The Reveal */}
			<div
				style={{
					fontSize: 70,
					fontWeight: 800,
					textAlign: 'center',
					marginTop: 80,
					transform: `scale(${subtitleScale})`,
					opacity: subtitleProgress,
					background: 'rgba(255, 255, 255, 0.1)',
					backdropFilter: 'blur(20px)',
					color: 'white',
					padding: '50px 70px',
					borderRadius: 40,
					border: '1px solid rgba(255,255,255,0.2)',
					boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
				}}
			>
				And make a corpus of<br />
				<span style={{ fontSize: 120, display: 'block', marginTop: 20, color: '#FFB347' }}>₹22.6 Lakhs</span><br />
				in 18 years! 📈
			</div>
		</AbsoluteFill>
	);
};
