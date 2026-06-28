import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { AuroraBackground } from '@/components/AuroraBackground';

const reels = [
  "Brand reel",
  "Creator short",
  "Launch teaser",
  "Event recap",
  "Montage"
];

export default function Videography() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <>
      <AuroraBackground />
      <div className="w-full px-6 md:px-20 max-w-[1200px] mx-auto pt-32 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative"
        >
          <div className="absolute top-0 left-0 -mt-16 -ml-4 font-mono text-[#F59E0B] text-[120px] leading-none opacity-15 select-none pointer-events-none">
            02
          </div>
          
          <motion.div variants={itemVariants} className="mb-24 relative z-10">
            <h3 className="font-mono text-[#F59E0B] text-[11px] uppercase tracking-[0.2em] mb-6">
              VIDEOGRAPHY · PRODUCTION
            </h3>
            <h1 className="font-display text-white text-[64px] uppercase tracking-wide leading-[0.9] mb-6">
              SHOT LIKE CINEMA.
            </h1>
            <p className="font-body text-[#A1A1AA] text-[18px] max-w-[600px]">
              Seven years of production and editing — a full Adobe post pipeline, including color. Since 2019.
            </p>
          </motion.div>
          
          <div className="border-t border-[#27272A] pt-16 mb-16">
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col md:flex-row gap-6 mb-24"
            >
              <div className="flex-1 border border-[#27272A] bg-[#111113] p-8 flex flex-col justify-center rounded-[2px]">
                <span className="font-display text-[#F59E0B] text-[72px] leading-[0.8] mb-4">30M+</span>
                <span className="font-mono text-[#A1A1AA] text-[11px] uppercase tracking-[0.1em]">SUBSCRIBERS REACHED</span>
              </div>
              <div className="flex-1 border border-[#27272A] bg-[#111113] p-8 flex flex-col justify-center rounded-[2px]">
                <span className="font-display text-[#F59E0B] text-[72px] leading-[0.8] mb-4">150M+</span>
                <span className="font-mono text-[#A1A1AA] text-[11px] uppercase tracking-[0.1em]">ACCUMULATED VIEWS</span>
              </div>
              <div className="flex-1 border border-[#27272A] bg-[#111113] p-8 flex flex-col justify-center rounded-[2px]">
                <span className="font-display text-[#F59E0B] text-[72px] leading-[0.8] mb-4">7 YRS</span>
                <span className="font-mono text-[#A1A1AA] text-[11px] uppercase tracking-[0.1em]">PROFESSIONAL PRODUCTION</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-24">
              <h2 className="font-mono text-[#52525B] text-[11px] uppercase tracking-[0.15em] mb-6">
                CLIENT WORK
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#27272A] pb-6 group cursor-pointer">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-body text-white text-[18px] font-semibold transition-colors group-hover:text-[#F59E0B]">[[BRAND_1]]</h3>
                    <p className="font-body text-[#A1A1AA] text-[14px]">
                      Full content strategy, videography, and photography.
                    </p>
                  </div>
                  <div className="text-[#27272A] group-hover:text-[#F59E0B] transition-colors mt-4 md:mt-0 font-mono">
                    →
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#27272A] pb-6 group cursor-pointer">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-body text-white text-[18px] font-semibold transition-colors group-hover:text-[#F59E0B]">[[BRAND_2]]</h3>
                    <p className="font-body text-[#A1A1AA] text-[14px]">
                      Campaign production and post — concept to color.
                    </p>
                  </div>
                  <div className="text-[#27272A] group-hover:text-[#F59E0B] transition-colors mt-4 md:mt-0 font-mono">
                    →
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="font-mono text-[#52525B] text-[11px] uppercase tracking-[0.15em] mb-6">
                REEL CATEGORIES
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                {reels.map((reel, idx) => (
                  <div 
                    key={idx}
                    className="border border-[#27272A] bg-[#111113] aspect-[9/16] rounded-[2px] flex flex-col items-center justify-center p-4 relative group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[#09090B]/40 group-hover:bg-transparent transition-colors z-10" />
                    
                    <div className="z-20 text-center flex flex-col items-center">
                      <Play className="w-8 h-8 mb-4 text-[#F59E0B] opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all fill-[#F59E0B]" />
                      <span className="font-display text-white text-[24px] uppercase tracking-wide leading-none">{reel}</span>
                    </div>
                    
                    <div className="absolute bottom-4 left-0 right-0 text-center text-[10px] text-[#A1A1AA] font-mono z-20">
                      [[YT_SHORT_ID_{idx+1}]]
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-mono text-[11px] text-[#52525B] text-center">
                5 creator collaborations · [[YOUTUBER_1..5]] · 30M+ combined subscribers
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
