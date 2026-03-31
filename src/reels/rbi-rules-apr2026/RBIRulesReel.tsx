import { AbsoluteFill, Sequence, Audio, staticFile } from 'remotion';
import { Scene1 } from './scenes/Scene1';
import { Scene2 } from './scenes/Scene2';
import { Scene3 } from './scenes/Scene3';
import { Scene4 } from './scenes/Scene4';
import { Scene5 } from './scenes/Scene5';
import { Scene6 } from './scenes/Scene6';
import { Scene7 } from './scenes/Scene7';
import { Scene8 } from './scenes/Scene8';
import { Scene9 } from './scenes/Scene9';
import { Scene10 } from './scenes/Scene10';

export const RBIRulesReel: React.FC = () => {
    const sceneDuration = 255;

    return (
        <AbsoluteFill style={{ backgroundColor: '#0A0E21' }}>
            {/* Background Music - Starting from 10s mark of the source */}
            <Audio 
                src={staticFile('rbi-rules-apr2026/TIKI_TIKI_Slowed_256KBPS.webm')} 
                startFrom={300} 
                volume={0.04}
            />


            <Sequence from={0} durationInFrames={sceneDuration}>
                <Scene1 />
            </Sequence>
            <Sequence from={sceneDuration} durationInFrames={sceneDuration}>
                <Scene2 />
            </Sequence>
            <Sequence from={sceneDuration * 2} durationInFrames={sceneDuration}>
                <Scene3 />
            </Sequence>
            <Sequence from={sceneDuration * 3} durationInFrames={sceneDuration}>
                <Scene4 />
            </Sequence>
            <Sequence from={sceneDuration * 4} durationInFrames={sceneDuration}>
                <Scene5 />
            </Sequence>
            <Sequence from={sceneDuration * 5} durationInFrames={sceneDuration}>
                <Scene6 />
            </Sequence>
            <Sequence from={sceneDuration * 6} durationInFrames={sceneDuration}>
                <Scene7 />
            </Sequence>
            <Sequence from={sceneDuration * 7} durationInFrames={sceneDuration}>
                <Scene8 />
            </Sequence>
            <Sequence from={sceneDuration * 8} durationInFrames={sceneDuration}>
                <Scene9 />
            </Sequence>
            <Sequence from={sceneDuration * 9} durationInFrames={sceneDuration}>
                <Scene10 />
            </Sequence>
        </AbsoluteFill>
    );
};
