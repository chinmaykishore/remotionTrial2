import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const AnimatedText: React.FC<{
  text: string;
  delay?: number;
  className?: string;
  highlightWords?: string[];
  highlightColor?: string;
}> = ({ text, delay = 0, className = "", highlightWords = [], highlightColor = "text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-amber-200 drop-shadow-[0_0_15px_rgba(251,146,60,0.4)]" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = text.split(" ");

  return (
    <h1 className={`flex flex-wrap justify-center font-bold pb-4 drop-shadow-xl ${className}`}>
      {words.map((w, i) => {
        const wordDelay = delay + i * 3; // Stagger effect
        const animationProgress = spring({
          fps,
          frame: frame - wordDelay,
          config: {
            damping: 14, // smoother
            mass: 0.6,
          },
        });

        const translateY = interpolate(animationProgress, [0, 1], [40, 0]);
        const opacity = interpolate(animationProgress, [0, 1], [0, 1]);
        const scale = interpolate(animationProgress, [0, 1], [0.9, 1]);

        const cleanWord = w.replace(/[.,!?]/g, "");
        const isHighlight = highlightWords.includes(cleanWord) || highlightWords.includes(w);

        return (
          <span
            key={i}
            style={{
              opacity,
              transform: `translateY(${translateY}px) scale(${scale})`,
              display: "inline-block",
              marginRight: "0.3em", // tighter modern spacing
              whiteSpace: "pre-wrap",
            }}
            className={isHighlight ? highlightColor : "drop-shadow-md"}
          >
            {w}
          </span>
        );
      })}
    </h1>
  );
};
