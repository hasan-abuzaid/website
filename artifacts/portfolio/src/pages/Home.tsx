import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Cpu, Clapperboard, Users, ArrowRight } from 'lucide-react';
import { AuroraBackground } from '@/components/AuroraBackground';

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <div className="min-h-[calc(100dvh-5rem)] w-full flex flex-col justify-center px-6 py-12 md:px-12 lg:px-24 max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-primary/40 inline-block"></span>
            Mechatronics · Robotics · AI Vision
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-display font-medium text-white tracking-tighter mb-6 leading-[0.95]">
            Hasan Abuzaid<span className="text-primary">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-12">
            Mechatronics engineer · videographer · Amman, Jordan
          </p>
          <div className="w-full md:w-3/4 lg:w-[85%] pr-0 mb-16">
            <p className="text-2xl md:text-4xl text-white font-display font-medium leading-tight mb-8">
              "I build systems that see, decide, and move — and I tell stories with a camera."
            </p>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
              Final-semester Mechatronics engineer at GJU — with seven years of professional videography behind the engineering.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 mb-16 border-t border-white/10 pt-8"
        >
          <div>
            <h4 className="text-white font-medium mb-1">Education</h4>
            <p className="text-muted-foreground text-sm">B.Sc. Mechatronics<br/>GJU, 2026</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1">Now</h4>
            <p className="text-muted-foreground text-sm">IoT / Embedded Eng.<br/>Nexus Nature</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1">Leadership</h4>
            <p className="text-muted-foreground text-sm">President<br/>GJU Innovation Club</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1">Videography</h4>
            <p className="text-muted-foreground text-sm">7 yrs experience<br/>30M+ subscribers reached</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <Link href="/engineering" className="block outline-none h-full">
            <div className="portfolio-card p-8 h-full rounded-2xl flex flex-col group min-h-[220px]">
              <Cpu className="w-7 h-7 text-primary mb-6 transition-transform group-hover:scale-110" strokeWidth={1.5} />
              <h2 className="text-2xl text-white font-display font-medium mb-3">Engineering</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Robotics, control & computer vision.
              </p>
              <div className="mt-auto pt-6 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </Link>

          <Link href="/videography" className="block outline-none h-full">
            <div className="portfolio-card sage-glow p-8 h-full rounded-2xl flex flex-col group min-h-[220px]">
              <Clapperboard className="w-7 h-7 text-secondary mb-6 transition-transform group-hover:scale-110" strokeWidth={1.5} />
              <h2 className="text-2xl text-white font-display font-medium mb-3">Videography</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Cinematic production & color.
              </p>
              <div className="mt-auto pt-6 flex items-center text-secondary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </Link>

          <Link href="/leadership" className="block outline-none h-full">
            <div className="portfolio-card p-8 h-full rounded-2xl flex flex-col group min-h-[220px]">
              <Users className="w-7 h-7 text-primary mb-6 transition-transform group-hover:scale-110" strokeWidth={1.5} />
              <h2 className="text-2xl text-white font-display font-medium mb-3">Leadership</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Communities, events & AI.
              </p>
              <div className="mt-auto pt-6 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-start"
        >
          <Link href="/contact" className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-white transition-colors group">
            <span className="border-b border-muted-foreground/30 group-hover:border-white/50 pb-1">Get in touch</span>
            <ArrowRight className="w-3 h-3 ml-2 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </>
  );
}
