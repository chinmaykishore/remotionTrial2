import { CalculateMetadataFunction, Composition, staticFile } from 'remotion';
import { getAudioDurationInSeconds } from '@remotion/media-utils';
import { SSYReel } from './SSYReel';
import './index.css';

const FPS = 30;

// The calculateMetadata function measures the length of our TTS audio
export const calculateMetadata: CalculateMetadataFunction<any> = async () => {
	const durations = await Promise.all([
		getAudioDurationInSeconds(staticFile('scene1.mp3')),
		getAudioDurationInSeconds(staticFile('scene2.mp3')),
		getAudioDurationInSeconds(staticFile('scene3.mp3')),
		getAudioDurationInSeconds(staticFile('scene4.mp3')),
	]);

	const sceneLengths = durations.map((d) => Math.ceil(d * FPS));
	const totalDuration = sceneLengths.reduce((a, b) => a + b, 0);

	return {
		durationInFrames: totalDuration,
		props: {
			sceneLengths,
		},
	};
};

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="SSYReel"
				component={SSYReel}
				durationInFrames={720} // placeholder, calculateMetadata overrides
				fps={FPS}
				width={1080}
				height={1920}
				calculateMetadata={calculateMetadata}
				defaultProps={{
					sceneLengths: [180, 180, 180, 180] // Fallback
				}}
			/>
		</>
	);
};
