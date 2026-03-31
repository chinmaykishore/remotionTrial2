import { Composition } from 'remotion';
import { SSYReel, calculateMetadataSSY } from './reels/ssy/SSYReel';
import { TiaraCardReel } from './reels/tiara-card/TiaraCardReel';
import { RBIRulesReel } from './reels/rbi-rules-apr2026/RBIRulesReel';
import './index.css';

const FPS = 30;

export const RemotionRoot: React.FC = () => {
    return (
        <>
            {/* Sukanya Samriddhi Yojana Reel */}
            <Composition
                id="SSYReel"
                component={SSYReel}
                durationInFrames={720} // overridden by calculateMetadata
                fps={FPS}
                width={1080}
                height={1920}
                calculateMetadata={calculateMetadataSSY}
                defaultProps={{
                    sceneLengths: [180, 180, 180, 180]
                }}
            />

            {/* Tiara Card Reel */}
            <Composition
                id="TiaraCardReel"
                component={TiaraCardReel}
                durationInFrames={900}
                fps={FPS}
                width={1080}
                height={1920}
            />

            {/* RBI Rules Reel */}
            <Composition
                id="RBIRulesReel"
                component={RBIRulesReel}
                durationInFrames={300}
                fps={FPS}
                width={1080}
                height={1920}
            />
        </>
    );
};
