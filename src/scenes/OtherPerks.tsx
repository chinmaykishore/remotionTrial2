import React from "react";
import { Sequence } from "remotion";
import { AnimatedText } from "../components/AnimatedText";
import { BrandBadge } from "../components/BrandBadge";

export const OtherPerks: React.FC = () => {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center p-12 text-center text-white space-y-12">
      <AnimatedText 
        text="✨ Other perks:" 
        className="text-8xl text-slate-100 font-bold mb-8"
        highlightWords={["perks:"]}
      />

      <div className="w-full grid grid-cols-1 gap-8 px-4 mb-20">
        <BrandBadge brand="Amazon Voucher" value="₹1000" delay={20} />
        <BrandBadge brand="Amazon Prime" value="1 Year" delay={30} />
        <BrandBadge brand="FITPASS Pro" value="1 Year" delay={40} />
        <BrandBadge brand="Swiggy One" value="3 Mo." delay={50} />
      </div>

      <Sequence from={100}>
        <div className="w-full space-y-10 px-4 mt-8">
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 text-left border border-slate-700/50 shadow-2xl relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-orange-400/80 shadow-[0_0_15px_rgba(251,146,60,0.6)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 to-transparent" />
            <AnimatedText text="✈️ Unlimited domestic lounge access" className="text-5xl leading-tight text-slate-200 pl-6 relative z-10" />
          </div>
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 text-left border border-slate-700/50 shadow-2xl relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-blue-400/80 shadow-[0_0_15px_rgba(96,165,250,0.6)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-transparent" />
            <AnimatedText text="📱 RuPay credit card → UPI payments supported" className="text-5xl leading-tight text-slate-200 pl-6 relative z-10" delay={15}/>
          </div>
        </div>
      </Sequence>
    </div>
  );
};
