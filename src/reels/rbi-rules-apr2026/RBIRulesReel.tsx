import { AbsoluteFill, Sequence } from 'remotion';
import { Scene1 } from './scenes/Scene1';

export const RBIRulesReel: React.FC = () => {
	return (
		<AbsoluteFill style={{ backgroundColor: '#1a1a1a' }}>
			<Sequence from={0} durationInFrames={300}>
				<Scene1 />
			</Sequence>
		</AbsoluteFill>
	);
};
