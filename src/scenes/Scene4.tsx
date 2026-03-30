import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

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
		<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 80, backgroundColor: '#FF6B81', color: 'white', fontFamily: 'Outfit, sans-serif' }}>
			
			<div style={{
				fontSize: 90,
				fontWeight: 800,
				textAlign: 'center',
				transform: `scale(${logoScale})`,
				marginBottom: 60,
			}}>
				YOU CAN START<br />
				<span style={{ color: '#FFE66D', fontSize: 130 }}>₹250</span> / YR
			</div>

			<div style={{
				fontSize: 60,
				fontWeight: 600,
				textAlign: 'center',
				backgroundColor: 'white',
				color: '#FF6B81',
				padding: '40px 80px',
				borderRadius: 50,
				opacity: textOpacity,
				boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
			}}>
				Open an account<br />
				at any post office or bank!
			</div>

			<div style={{
				position: 'absolute',
				bottom: 150,
				fontSize: 45,
				fontWeight: 400,
				opacity: textOpacity,
				textAlign: 'center'
			}}>
				Secure her future today.
			</div>
			
		</AbsoluteFill>
	);
};
