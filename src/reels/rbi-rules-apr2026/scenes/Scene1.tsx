import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';

export const Scene1: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);

	return (
		<AbsoluteFill style={{ 
			justifyContent: 'center', 
			alignItems: 'center', 
			backgroundColor: '#1a1a1a', 
			color: 'white',
			fontFamily: 'Outfit, sans-serif'
		}}>
			<div style={{ opacity, fontSize: 80, fontWeight: 800, textAlign: 'center' }}>
				New RBI Rules<br />
				<span style={{ color: '#FFD700' }}>April 2026</span>
			</div>
			<div style={{ opacity, fontSize: 40, marginTop: 40 }}>
				Coming soon...
			</div>
		</AbsoluteFill>
	);
};
