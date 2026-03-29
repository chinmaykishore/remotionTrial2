import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { loadFont } from "@remotion/google-fonts/Outfit";
import { Intro } from "./scenes/Intro";
import { Vouchers } from "./scenes/Vouchers";
import { OtherPerks } from "./scenes/OtherPerks";
import { Conclusion } from "./scenes/Conclusion";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const TiaraCardReel: React.FC = () => {
  return (
    <AbsoluteFill 
      style={{ fontFamily }}
      className="bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-slate-950 to-black flex flex-col items-center justify-center tracking-wide"
    >
      <Audio src={staticFile("audio.mp3")} volume={0.4} />

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
