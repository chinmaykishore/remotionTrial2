import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const Scene3: React.FC = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	const data = [
		{ year: 5, amount: 3.6, label: '3.6L' },
		{ year: 10, amount: 9.2, label: '9.2L' },
		{ year: 15, amount: 17.6, label: '17.6L' },
		{ year: 18, amount: 22.6, label: '22.6L' },
	];

	const maxAmount = 25; // Setup scale max

	return (
		<AbsoluteFill style={{ padding: 60, backgroundColor: 'white', color: '#333', fontFamily: 'Outfit, sans-serif' }}>
			{/* Title */}
			<div style={{
				fontSize: 90,
				fontWeight: 900,
				textAlign: 'center',
				marginTop: 80,
				color: '#FF6B81',
				opacity: interpolate(frame, [0, 20], [0, 1])
			}}>
				Watch It Grow 🚀
			</div>

			<div style={{
				fontSize: 60,
				fontWeight: 600,
				textAlign: 'center',
				marginTop: 20,
				color: '#666',
				opacity: interpolate(frame, [15, 30], [0, 1])
			}}>
				₹5,000 / month investment
			</div>

			{/* Chart Area */}
			<div style={{
				position: 'absolute',
				bottom: 150,
				left: 80,
				right: 80,
				height: 900,
				display: 'flex',
				alignItems: 'flex-end',
				justifyContent: 'space-around',
				borderBottom: '4px solid #eee'
			}}>
				{data.map((item, index) => {
					// Stagger the bars
					const delay = index * 30 + 30; // 1s per bar
					
					const barProgress = spring({
						frame: frame - delay,
						fps,
						config: { damping: 14, mass: 0.8 },
					});

					const height = (item.amount / maxAmount) * 800;
					
					return (
						<div key={item.year} style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							width: 140,
						}}>
							{/* Value Label */}
							<div style={{
								fontSize: 50,
								fontWeight: 800,
								color: '#FF6B81',
								marginBottom: 20,
								opacity: barProgress,
								transform: `translateY(${interpolate(barProgress, [0, 1], [20, 0])}px)`
							}}>
								₹{item.label}
							</div>

							{/* Bar */}
							<div style={{
								width: '100%',
								height: height * barProgress,
								backgroundColor: index === data.length - 1 ? '#FFE66D' : '#FF6B81',
								borderRadius: '20px 20px 0 0',
								boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
								transition: 'background-color 0.3s'
							}} />

							{/* X-Axis Label */}
							<div style={{
								fontSize: 45,
								fontWeight: 700,
								color: '#888',
								marginTop: 30,
								whiteSpace: 'nowrap',
								opacity: interpolate(frame - delay, [0, 20], [0, 1])
							}}>
								Year {item.year}
							</div>
						</div>
					);
				})}
			</div>
		</AbsoluteFill>
	);
};
