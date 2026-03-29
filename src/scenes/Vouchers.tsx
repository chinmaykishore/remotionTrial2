import React from "react";
import { Sequence } from "remotion";
import { AnimatedText } from "../components/AnimatedText";
import { BrandBadge } from "../components/BrandBadge";

export const Vouchers: React.FC = () => {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center p-12 text-center text-white space-y-12">
      <AnimatedText 
        text="But the quarterly vouchers alone are insane 👇" 
        className="text-6xl leading-tight text-slate-100 font-bold"
        highlightWords={["insane"]}
      />

      <div className="w-full flex flex-col space-y-6 px-4">
        <BrandBadge brand="Flipkart" value="₹500" delay={30} />
        <BrandBadge brand="Myntra" value="₹500" delay={40} />
        <BrandBadge brand="Nykaa" value="₹500" delay={50} />
        <BrandBadge brand="Lakmé Salon" value="₹1500" delay={60} />
        <BrandBadge brand="BigBasket" value="₹250" delay={70} />
        <BrandBadge brand="BookMyShow" value="₹250" delay={80} />
      </div>

      <Sequence from={140}>
        <div className="mx-4 bg-slate-900/60 border border-slate-700/50 rounded-3xl p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden mt-8">
           <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
           <AnimatedText 
             text="That’s ₹3,500 every quarter." 
             className="text-5xl leading-tight text-slate-300 font-medium mb-6 relative z-10"
           />
           <AnimatedText 
             text="₹3,500 × 4 quarters = ₹14,000 per year 🎁" 
             className="text-6xl leading-tight text-slate-100 font-bold relative z-10"
             delay={20}
             highlightWords={["₹14,000"]}
           />
        </div>
      </Sequence>
    </div>
  );
};
