import { motion } from 'framer-motion';
import { AuroraBackground } from '@/components/AuroraBackground';

const initiatives = [
  "Passionate Innovators",
  "Expert on Campus",
  "GJU Career Fair (15th ed.)",
  "Industrial Partnership Conf.",
  "Inter-University Machine League",
  "Conferences & courses"
];

export default function Leadership() {
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
            <span className="eyebrow-text text-[#9DC2D9]/40 mb-6 font-mono tracking-widest">03</span>
            <h1 className="text-5xl md:text-7xl font-display font-medium text-white mb-6 tracking-tight leading-[1.1]">
              Leading the people behind the work.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              President of GJU's Innovation Club and Chairman of its AAAI chapter — building bridges between students, industry, and AI.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="portfolio-card p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <span className="text-8xl font-display font-bold">1.5k</span>
              </div>
              <h3 className="text-xl text-primary font-mono tracking-widest uppercase mb-4 text-sm">President</h3>
              <h2 className="text-3xl text-white font-display font-medium mb-4">GJU Innovation Club</h2>
              <p className="text-muted-foreground font-light text-lg">
                GJU's largest club — 1,500+ members, 20-person board.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="portfolio-card p-8 rounded-2xl"
            >
              <h3 className="text-xl text-primary font-mono tracking-widest uppercase mb-4 text-sm">Chairman</h3>
              <h2 className="text-3xl text-white font-display font-medium mb-4">AAAI GJU Chapter</h2>
              <p className="text-muted-foreground font-light text-lg">
                The student chapter for AI, in Jordan.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h2 className="text-sm font-mono tracking-widest text-primary uppercase mb-8">Initiatives & Events</h2>
            <div className="flex flex-wrap gap-3 mb-12">
              {initiatives.map((item, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 border border-white/10 rounded-full text-sm text-gray-300 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/50 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="border-t border-white/10 pt-12">
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-6xl text-white font-display font-medium">15+</span>
                <span className="text-xl text-muted-foreground font-light">Events initiated & organized</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((idx) => (
                  <div key={idx} className="aspect-[4/3] bg-white/[0.02] border border-white/5 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-mono text-white/20">[[PHOTO_EVENT_{idx}]]</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
