import { AbsoluteFill, Sequence } from 'remotion';
import { Scene1 } from './scenes/Scene1';
import { Scene2 } from './scenes/Scene2';
import { Scene3 } from './scenes/Scene3';
import { Scene4 } from './scenes/Scene4';

export const SSYReel: React.FC = () => {
	// Total duration is 720 frames (24 seconds)
	return (
		<AbsoluteFill style={{ backgroundColor: '#fff8f9' }}>
			{/* Hook: "Start investing 5000 today..." 0 - 6s */}
			<Sequence from={0} durationInFrames={180}>
				<Scene1 />
			</Sequence>

			{/* Scheme Introduce: "Sukanya Samriddhi Yojana" 6s - 10s */}
			<Sequence from={180} durationInFrames={120}>
				<Scene2 />
			</Sequence>

			{/* Chart Growth: 10s - 18s */}
			<Sequence from={300} durationInFrames={240}>
				<Scene3 />
			</Sequence>

			{/* CTA: 18s - 24s */}
			<Sequence from={540} durationInFrames={180}>
				<Scene4 />
			</Sequence>
		</AbsoluteFill>
	);
};
