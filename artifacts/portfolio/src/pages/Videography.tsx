import { Link } from 'wouter';
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
  return (
    <>
      <AuroraBackground />
      <div className="min-h-[calc(100dvh-5rem)] w-full px-6 py-12 md:py-20 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-3xl"
        >
          <div className="flex flex-col mb-12">
            <span className="eyebrow-text text-[#8FA68E]/40 mb-6 font-mono tracking-widest">02</span>
            <h1 className="text-5xl md:text-7xl font-display font-medium text-white mb-6 tracking-tight leading-[1.1]">
              Shot like cinema.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-4">
              Seven years of production and editing — a full Adobe post pipeline, including color.
            </p>
            <p className="text-secondary font-mono text-sm tracking-widest uppercase">
              Since 2019.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          <div className="border border-[#8FA68E]/30 bg-[#8FA68E]/5 rounded-2xl p-8 flex flex-col justify-center">
            <span className="text-5xl text-white font-display font-medium mb-2 tracking-tight">30M+</span>
            <span className="text-sm text-muted-foreground font-light">Subscribers reached</span>
          </div>
          <div className="border border-[#8FA68E]/30 bg-[#8FA68E]/5 rounded-2xl p-8 flex flex-col justify-center">
            <span className="text-5xl text-white font-display font-medium mb-2 tracking-tight">150M+</span>
            <span className="text-sm text-muted-foreground font-light">Accumulated views</span>
          </div>
          <div className="border border-[#8FA68E]/30 bg-[#8FA68E]/5 rounded-2xl p-8 flex flex-col justify-center">
            <span className="text-5xl text-white font-display font-medium mb-2 tracking-tight">7 yrs</span>
            <span className="text-sm text-muted-foreground font-light">Professional production</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-sm font-mono tracking-widest text-secondary uppercase mb-8">Client Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="portfolio-card sage-glow p-8 rounded-2xl">
              <h3 className="text-2xl text-white font-display font-medium mb-3">[[BRAND_1]]</h3>
              <p className="text-muted-foreground font-light">
                Full content strategy, videography, and photography.
              </p>
            </div>
            <div className="portfolio-card sage-glow p-8 rounded-2xl">
              <h3 className="text-2xl text-white font-display font-medium mb-3">[[BRAND_2]]</h3>
              <p className="text-muted-foreground font-light">
                Campaign production and post — concept to color.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <h2 className="text-sm font-mono tracking-widest text-secondary uppercase mb-4 md:mb-0">Selected Reels</h2>
            <p className="text-sm text-muted-foreground">
              5 creator collaborations · [[YOUTUBER_1..5]] · 30M+ combined subscribers
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {reels.map((reel, idx) => (
              <div 
                key={idx}
                className="portfolio-card sage-glow aspect-[9/16] rounded-xl flex flex-col items-center justify-center p-4 relative group"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 rounded-xl" />
                <div className="z-20 text-center text-white/50 group-hover:text-white transition-colors">
                  <Play className="w-8 h-8 mb-4 mx-auto opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all fill-current" />
                  <span className="text-sm font-medium tracking-wide">{reel}</span>
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center text-[10px] text-white/30 font-mono z-20">
                  [[YT_SHORT_ID_{idx+1}]]
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
