import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { Intro } from "./scenes/Intro";
import { Vouchers } from "./scenes/Vouchers";
import { OtherPerks } from "./scenes/OtherPerks";
import { Conclusion } from "./scenes/Conclusion";

export const TiaraCardReel: React.FC = () => {
  return (
    <AbsoluteFill 
      style={{ fontFamily: 'Outfit, sans-serif' }}
      className="bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-slate-950 to-black flex flex-col items-center justify-center tracking-wide"
    >
      <Audio src={staticFile("tiara-card/audio.mp3")} volume={0.4} />

      <Sequence durationInFrames={180}>
        <Intro />
      </Sequence>

      <Sequence from={180} durationInFrames={240}>
        <Vouchers />
      </Sequence>

      <Sequence from={420} durationInFrames={240}>
        <OtherPerks />
      </Sequence>

      <Sequence from={660} durationInFrames={240}>
        <Conclusion />
      </Sequence>
    </AbsoluteFill>
  );
};
