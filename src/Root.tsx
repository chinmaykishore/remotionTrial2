import { Composition } from 'remotion';
import { SSYReel, calculateMetadataSSY } from './reels/ssy/SSYReel';
import { SSYReelEnhanced, calculateMetadataSSYEnhanced } from './reels/ssy/SSYReelEnhanced';
import { TiaraCardReel } from './reels/tiara-card/TiaraCardReel';
import { RBIRulesReel } from './reels/rbi-rules-apr2026/RBIRulesReel';
import { AccorAxisEndReel, calculateMetadataAccor } from './reels/accor-axis-end/AccorAxisEndReel';
import { AccorAxisEndReelEnhanced, calculateMetadataAccorEnhanced } from './reels/accor-axis-end/AccorAxisEndReelEnhanced';
import './index.css';

const FPS = 30;

export const RemotionRoot: React.FC = () => {
    return (
        <>
            {/* --- SSY REEL VARIATIONS --- */}
            <Composition
                id="SSY-Original"
                component={SSYReel}
                durationInFrames={720}
                fps={FPS}
                width={1080}
                height={1920}
                calculateMetadata={calculateMetadataSSY}
                defaultProps={{
                    sceneLengths: [180, 180, 180, 180]
                }}
            />

            <Composition
                id="SSY-Christopher-US"
                component={SSYReelEnhanced}
                durationInFrames={720}
                fps={FPS}
                width={1080}
                height={1920}
                calculateMetadata={calculateMetadataSSYEnhanced}
                defaultProps={{ voice: 'christopher' }}
            />

            <Composition
                id="SSY-Guy-US"
                component={SSYReelEnhanced}
                durationInFrames={720}
                fps={FPS}
                width={1080}
                height={1920}
                calculateMetadata={calculateMetadataSSYEnhanced}
                defaultProps={{ voice: 'guy' }}
            />

            <Composition
                id="SSY-Prabhat-India"
                component={SSYReelEnhanced}
                durationInFrames={720}
                fps={FPS}
                width={1080}
                height={1920}
                calculateMetadata={calculateMetadataSSYEnhanced}
                defaultProps={{ voice: 'prabhat' }}
            />

            {/* --- ACCOR AXIS END VARIATIONS --- */}
            <Composition
                id="Accor-Original"
                component={AccorAxisEndReel}
                durationInFrames={600}
                fps={FPS}
                width={1080}
                height={1920}
                calculateMetadata={calculateMetadataAccor}
                defaultProps={{
                    sceneLengths: [180, 180, 180, 180]
                }}
            />

            <Composition
                id="Accor-Christopher-US"
                component={AccorAxisEndReelEnhanced}
                durationInFrames={600}
                fps={FPS}
                width={1080}
                height={1920}
                calculateMetadata={calculateMetadataAccorEnhanced}
                defaultProps={{ voice: 'christopher' }}
            />

            <Composition
                id="Accor-Guy-US"
                component={AccorAxisEndReelEnhanced}
                durationInFrames={600}
                fps={FPS}
                width={1080}
                height={1920}
                calculateMetadata={calculateMetadataAccorEnhanced}
                defaultProps={{ voice: 'guy' }}
            />

            <Composition
                id="Accor-Prabhat-India"
                component={AccorAxisEndReelEnhanced}
                durationInFrames={600}
                fps={FPS}
                width={1080}
                height={1920}
                calculateMetadata={calculateMetadataAccorEnhanced}
                defaultProps={{ voice: 'prabhat' }}
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
                durationInFrames={2550}
                fps={FPS}
                width={1080}
                height={1920}
            />
        </>
    );
};
