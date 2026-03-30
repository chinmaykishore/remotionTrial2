import { AbsoluteFill, Sequence } from 'remotion';
import { Scene1 } from './scenes/Scene1';
import { Scene2 } from './scenes/Scene2';
import { Scene3 } from './scenes/Scene3';
import { Scene4 } from './scenes/Scene4';

export const SSYReel: React.FC<{
	sceneLengths: number[];
}> = ({ sceneLengths }) => {
	
	// Default lengths if not provided by calculateMetadata
	const lengths = sceneLengths || [180, 180, 180, 180];

	// Accumulate starts
	let t = 0;
	const s1Start = t; t += lengths[0];
	const s2Start = t; t += lengths[1];
	const s3Start = t; t += lengths[2];
	const s4Start = t; t += lengths[3];

	return (
		<AbsoluteFill style={{ backgroundColor: '#0B132B' }}>
			{/* Hook */}
			<Sequence from={s1Start} durationInFrames={lengths[0]}>
				<Scene1 />
			</Sequence>

			{/* Scheme Introduce */}
			<Sequence from={s2Start} durationInFrames={lengths[1]}>
				<Scene2 />
			</Sequence>

			{/* Chart Growth */}
			<Sequence from={s3Start} durationInFrames={lengths[2]}>
				<Scene3 />
			</Sequence>

			{/* CTA */}
			<Sequence from={s4Start} durationInFrames={lengths[3]}>
				<Scene4 />
			</Sequence>
		</AbsoluteFill>
	);
};
