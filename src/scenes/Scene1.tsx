import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

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
		frame: frame - 45, // starts 1.5 seconds later
		fps,
		config: { damping: 12 },
	});

	const titleY = interpolate(titleProgress, [0, 1], [100, 0]);
	const subtitleScale = interpolate(subtitleProgress, [0, 1], [0.5, 1]);

	return (
		<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 80, backgroundColor: '#FF6B81', color: 'white', fontFamily: 'Outfit, sans-serif' }}>
			{/* Viral Hook */}
			<div
				style={{
					fontSize: 100,
					fontWeight: 900,
					textAlign: 'center',
					lineHeight: 1.1,
					transform: `translateY(${titleY}px)`,
					opacity: titleProgress,
					textShadow: '0 10px 30px rgba(0,0,0,0.2)'
				}}
			>
				START INVESTING
				<br />
				<span style={{ color: '#FFE66D', fontSize: 130 }}>₹5,000</span> / MO
			</div>

			{/* The Reveal */}
			<div
				style={{
					fontSize: 80,
					fontWeight: 800,
					textAlign: 'center',
					marginTop: 80,
					transform: `scale(${subtitleScale})`,
					opacity: subtitleProgress,
					backgroundColor: 'white',
					color: '#FF6B81',
					padding: '40px 60px',
					borderRadius: 40,
					boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
				}}
			>
				And make a corpus of<br />
				<span style={{ fontSize: 120, display: 'block', marginTop: 20 }}>₹22.6 Lakhs</span><br />
				in 18 years!
			</div>
		</AbsoluteFill>
	);
};
