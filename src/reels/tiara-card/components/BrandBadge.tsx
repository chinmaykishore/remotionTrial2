import React from "react";
import { spring, useCurrentFrame, useVideoConfig, interpolate } from "remotion";

export const BrandBadge: React.FC<{
  brand: string;
  value: string;
  delay?: number;
}> = ({ brand, value, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    fps,
    frame: frame - delay,
    config: { damping: 14 },
  });

  const scale = interpolate(progress, [0, 1], [0.9, 1]);
  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translateY = interpolate(progress, [0, 1], [20, 0]);

  return (
    <div
      style={{
        transform: `scale(${scale}) translateY(${translateY}px)`,
        opacity,
      }}
      className="bg-slate-900/60 border border-slate-700/50 backdrop-blur-xl rounded-3xl p-8 flex flex-row items-center justify-between w-full shadow-2xl relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-transparent opacity-80" />
      <span className="text-5xl font-semibold text-slate-200 z-10">{brand}</span>
      <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-amber-300 z-10 drop-shadow-[0_0_8px_rgba(251,146,60,0.3)]">{value}</span>
    </div>
  );
};
