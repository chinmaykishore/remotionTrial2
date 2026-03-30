import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

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
		<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 60, backgroundColor: '#FFE66D', color: '#333', fontFamily: 'Outfit, sans-serif' }}>
			
			<div style={{
				fontSize: 80,
				fontWeight: 800,
				textAlign: 'center',
				padding: '20px 40px',
				backgroundColor: '#333',
				color: 'white',
				borderRadius: 50,
				transform: `scale(${badgeProgress})`,
				marginBottom: 60,
			}}>
				THE SECRET?
			</div>

			<h1 style={{
				fontSize: 110,
				fontWeight: 900,
				textAlign: 'center',
				lineHeight: 1.1,
				color: '#FF6B81',
				transform: `translateY(${interpolate(titleProgress, [0, 1], [50, 0])}px)`,
				opacity: titleProgress,
				marginBottom: 80,
			}}>
				SUKANYA<br />
				SAMRIDDHI<br />
				YOJANA
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
					backgroundColor: 'white',
					padding: '40px',
					borderRadius: 30,
					fontSize: 60,
					fontWeight: 800,
					textAlign: 'center',
					boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
				}}>
					✅ 8.2% Interest
				</div>
				<div style={{
					backgroundColor: 'white',
					padding: '40px',
					borderRadius: 30,
					fontSize: 60,
					fontWeight: 800,
					textAlign: 'center',
					boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
				}}>
					✅ Completely Tax Free
				</div>
			</div>

		</AbsoluteFill>
	);
};
