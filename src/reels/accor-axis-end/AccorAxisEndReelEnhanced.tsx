import { AbsoluteFill, Sequence, staticFile, CalculateMetadataFunction } from 'remotion';
import { getAudioDurationInSeconds } from '@remotion/media-utils';
import { Scene1Enhanced } from './scenes/Scene1Enhanced';
import { Scene2Enhanced } from './scenes/Scene2Enhanced';
import { Scene3Enhanced } from './scenes/Scene3Enhanced';
import { Scene4Enhanced } from './scenes/Scene4Enhanced';

const FPS = 30;

export const calculateMetadataAccorEnhanced: CalculateMetadataFunction<{ voice: string }> = async ({ props }) => {
	const voice = props.voice || 'christopher';
	
	const durations = await Promise.all([
		getAudioDurationInSeconds(staticFile(`accor-axis-end/${voice}/scene1.mp3`)),
		getAudioDurationInSeconds(staticFile(`accor-axis-end/${voice}/scene2.mp3`)),
		getAudioDurationInSeconds(staticFile(`accor-axis-end/${voice}/scene3.mp3`)),
		getAudioDurationInSeconds(staticFile(`accor-axis-end/${voice}/scene4.mp3`)),
	]);

	// Note: The original code used 1.35x playback rate for audio.
	// We need to account for that in metadata calculation.
	const sceneLengths = durations.map((d) => Math.ceil((d / 1.35) * FPS));
	const totalDuration = sceneLengths.reduce((a, b) => a + b, 0);

	return {
		durationInFrames: totalDuration,
		props: {
			...props,
			sceneLengths,
		},
	};
};


export const AccorAxisEndReelEnhanced: React.FC<{
	voice: string;
	sceneLengths?: number[];
}> = ({ voice, sceneLengths }) => {
	
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
				<Scene1Enhanced voice={voice} />
			</Sequence>

			{/* Devaluation */}
			<Sequence from={s2Start} durationInFrames={lengths[1]}>
				<Scene2Enhanced voice={voice} />
			</Sequence>

			{/* Who is affected */}
			<Sequence from={s3Start} durationInFrames={lengths[2]}>
				<Scene3Enhanced voice={voice} />
			</Sequence>

			{/* CTA */}
			<Sequence from={s4Start} durationInFrames={lengths[3]}>
				<Scene4Enhanced voice={voice} />
			</Sequence>
		</AbsoluteFill>
	);
};
