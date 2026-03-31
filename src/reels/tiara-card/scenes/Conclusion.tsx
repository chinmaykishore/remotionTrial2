import React from "react";
import { Sequence } from "remotion";
import { AnimatedText } from "../components/AnimatedText";

export const Conclusion: React.FC = () => {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center p-12 text-center text-white h-full relative space-y-16">
      <div className="bg-slate-900/60 backdrop-blur-xl rounded-full py-6 px-16 border border-slate-700/50 shadow-2xl">
        <AnimatedText 
          text="👉 Income requirement: ₹7.2L+" 
          className="text-6xl font-semibold text-slate-200"
          highlightWords={["₹7.2L+"]}
        />
      </div>

      <Sequence from={60} layout="none">
        <div className="w-full bg-slate-900/80 border border-slate-600/50 rounded-3xl p-10 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(251,146,60,0.2)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
          <AnimatedText 
            text="If you actually shop on Myntra / Nykaa / Flipkart..." 
            className="text-5xl leading-tight font-medium mb-10 text-slate-300 relative z-10"
            delay={10}
            highlightWords={["Myntra", "Nykaa", "Flipkart"]}
          />
          <AnimatedText 
            text="This card can easily outperform many ₹5K–₹10K cards." 
            className="text-7xl leading-tight font-bold text-slate-100 relative z-10"
            delay={30}
            highlightWords={["₹5K–₹10K", "outperform"]}
          />
        </div>
      </Sequence>
      
      <Sequence from={150}>
         <div className="absolute inset-0 flex flex-col items-center justify-center space-y-16 bg-slate-950/80 backdrop-blur-lg z-50">
           <span className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-500 to-orange-400 drop-shadow-[0_0_20px_rgba(236,72,153,0.5)] tracking-wide">
             @fintech_with_ai
           </span>
           <div className="flex flex-col items-center space-y-10 text-6xl font-bold text-slate-200 drop-shadow-md">
             <div className="flex flex-row space-x-12">
               <span>❤️ Like</span>
               <span>🚀 Share</span>
             </div>
             <div className="flex flex-row space-x-12">
               <span>💾 Save</span>
               <span>➕ Follow</span>
             </div>
           </div>
         </div>
      </Sequence>
    </div>
  );
};
