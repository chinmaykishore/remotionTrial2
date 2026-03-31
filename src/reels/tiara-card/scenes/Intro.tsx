import React from "react";
import { Sequence } from "remotion";
import { AnimatedText } from "../components/AnimatedText";

export const Intro: React.FC = () => {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center p-12 text-center text-white space-y-16">
      <Sequence durationInFrames={180}>
        <div className="absolute top-1/2 -translate-y-[110%] left-0 w-full px-16">
          <AnimatedText 
            text="🚨 This ₹2,499 credit card gives ~₹14,000 benefits every year." 
            className="text-8xl leading-tight text-slate-100 font-extrabold"
            highlightWords={["₹2,499", "~₹14,000"]}
          />
        </div>
      </Sequence>

      <Sequence from={90} durationInFrames={180}>
        <div className="absolute top-1/2 left-0 w-full px-16 mt-8">
          <AnimatedText 
            text="Most people completely ignore the Bank of Baroda Tiara Credit Card." 
            delay={10} 
            className="text-7xl leading-tight text-slate-300 font-medium"
            highlightWords={["Bank", "of", "Baroda", "Tiara"]}
          />
        </div>
      </Sequence>
    </div>
  );
};
