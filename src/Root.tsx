import { Composition } from 'remotion';
import { SSYReel } from './SSYReel';
import './index.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="SSYReel"
				component={SSYReel}
				durationInFrames={720}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
