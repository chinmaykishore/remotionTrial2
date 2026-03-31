import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Audio, staticFile } from 'remotion';

export const Scene2: React.FC = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	// Title pop
	const titleProgress = spring({
		frame,
		fps,
		config: { damping: 10, mass: 1 },
	});

	const badgeProgress = spring({
		frame: frame - 15,
		fps,
		config: { damping: 12 },
	});

	const infoScale = spring({
		frame: frame - 30,
		fps,
		config: { damping: 14 },
	});

	return (
		<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 60, color: 'white', fontFamily: 'Outfit, sans-serif' }}>
			<Audio src={staticFile('ssy/scene2.mp3')} />

			<div style={{
				fontSize: 70,
				fontWeight: 800,
				textAlign: 'center',
				padding: '20px 40px',
				backgroundColor: 'rgba(255,179,71,0.2)',
				border: '2px solid #FFB347',
				color: '#FFB347',
				borderRadius: 50,
				transform: `scale(${badgeProgress})`,
				marginBottom: 60,
			}}>
				Official Govt of India Scheme 🇮🇳
			</div>

			<h1 style={{
				fontSize: 100,
				fontWeight: 900,
				textAlign: 'center',
				lineHeight: 1.1,
				color: 'white',
				transform: `translateY(${interpolate(titleProgress, [0, 1], [50, 0])}px)`,
				opacity: titleProgress,
				marginBottom: 80,
				textShadow: '0 10px 30px rgba(0,0,0,0.5)'
			}}>
				SUKANYA<br />
				SAMRIDDHI<br />
				<span style={{ color: '#FFB347' }}>YOJANA</span>
			</h1>

			{/* Info Box */}
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				gap: 30,
				transform: `scale(${infoScale})`,
				width: '100%',
			}}>
				<div style={{
					backgroundColor: 'rgba(255, 255, 255, 0.1)',
					backdropFilter: 'blur(20px)',
					border: '1px solid rgba(255,255,255,0.2)',
					padding: '40px',
					borderRadius: 30,
					fontSize: 60,
					fontWeight: 800,
					textAlign: 'center',
					color: 'white',
					boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
				}}>
					✅ 8.2% Interest 📈
				</div>
				<div style={{
					backgroundColor: 'rgba(255, 255, 255, 0.1)',
					backdropFilter: 'blur(20px)',
					border: '1px solid rgba(255,255,255,0.2)',
					padding: '40px',
					borderRadius: 30,
					fontSize: 60,
					fontWeight: 800,
					textAlign: 'center',
					color: 'white',
					boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
				}}>
					✅ Completely Tax Free 🏦
				</div>
			</div>

		</AbsoluteFill>
	);
};
