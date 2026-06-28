import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Cpu, Clapperboard, Users, ArrowDown } from 'lucide-react';
import { AuroraBackground } from '@/components/AuroraBackground';

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <div className="w-full flex flex-col px-6 md:px-20 max-w-[1200px] mx-auto pt-32 pb-24 min-h-[100dvh]">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col justify-center flex-1 py-12"
        >
          <h1 
            className="font-display text-white leading-[0.85] tracking-tight uppercase"
            style={{ fontSize: 'clamp(80px, 12vw, 160px)' }}
          >
            HASAN<br/>ABUZAID<span style={{ color: '#F59E0B' }}>.</span>
          </h1>
          
          <div className="mt-8 flex flex-col gap-8">
            <p className="font-mono text-[#A1A1AA] uppercase tracking-[0.2em] text-xs md:text-sm">
              MECHATRONICS ENGINEER <span className="text-[#F59E0B] mx-2">·</span> VIDEOGRAPHER <span className="text-[#F59E0B] mx-2">·</span> AMMAN, JORDAN
            </p>
            
            <p className="font-body text-[#D4D4D8] italic text-[22px] max-w-[600px] leading-relaxed">
              "I build systems that see, decide, and move — and I tell stories with a camera."
            </p>
          </div>
        </motion.div>

        <div className="mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-[#27272A] py-8 gap-y-8"
          >
            <div className="flex flex-col gap-2 md:border-r border-[#27272A] pr-4">
              <span className="font-mono text-white text-[28px] leading-none">GJU '26</span>
              <span className="font-mono text-[#A1A1AA] uppercase tracking-[0.12em] text-[11px]">B.SC. MECHATRONICS</span>
            </div>
            <div className="flex flex-col gap-2 md:border-r border-[#27272A] px-4">
              <span className="font-mono text-white text-[28px] leading-none">NEXUS NATURE</span>
              <span className="font-mono text-[#A1A1AA] uppercase tracking-[0.12em] text-[11px]">CURRENT ROLE</span>
            </div>
            <div className="flex flex-col gap-2 md:border-r border-[#27272A] px-4">
              <span className="font-mono text-white text-[28px] leading-none">PRES. INNOVATION CLUB</span>
              <span className="font-mono text-[#A1A1AA] uppercase tracking-[0.12em] text-[11px]">LEADERSHIP</span>
            </div>
            <div className="flex flex-col gap-2 pl-4">
              <span className="font-mono text-white text-[28px] leading-none">7 YRS · 30M+</span>
              <span className="font-mono text-[#A1A1AA] uppercase tracking-[0.12em] text-[11px]">VIDEOGRAPHY</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            <Link href="/engineering" className="block outline-none h-full">
              <div 
                className="amber-glow-hover p-8 h-full rounded-[2px] flex flex-col group min-h-[240px] relative border"
                style={{ backgroundColor: '#111113', borderColor: '#27272A' }}
              >
                <Cpu className="w-6 h-6 mb-8 text-[#F59E0B]" strokeWidth={1.5} />
                <h2 className="text-[28px] text-white font-display uppercase tracking-wide mb-2">Engineering</h2>
                <p className="font-body text-[#A1A1AA] text-[14px]">
                  Robotics, control & computer vision.
                </p>
                <div className="absolute bottom-8 right-8 text-[#F59E0B]">
                  →
                </div>
              </div>
            </Link>

            <Link href="/videography" className="block outline-none h-full">
              <div 
                className="amber-glow-hover p-8 h-full rounded-[2px] flex flex-col group min-h-[240px] relative border"
                style={{ backgroundColor: '#111113', borderColor: '#27272A' }}
              >
                <Clapperboard className="w-6 h-6 mb-8 text-[#F59E0B]" strokeWidth={1.5} />
                <h2 className="text-[28px] text-white font-display uppercase tracking-wide mb-2">Videography</h2>
                <p className="font-body text-[#A1A1AA] text-[14px]">
                  Cinematic production & color.
                </p>
                <div className="absolute bottom-8 right-8 text-[#F59E0B]">
                  →
                </div>
              </div>
            </Link>

            <Link href="/leadership" className="block outline-none h-full">
              <div 
                className="amber-glow-hover p-8 h-full rounded-[2px] flex flex-col group min-h-[240px] relative border"
                style={{ backgroundColor: '#111113', borderColor: '#27272A' }}
              >
                <Users className="w-6 h-6 mb-8 text-[#F59E0B]" strokeWidth={1.5} />
                <h2 className="text-[28px] text-white font-display uppercase tracking-wide mb-2">Leadership</h2>
                <p className="font-body text-[#A1A1AA] text-[14px]">
                  Communities, events & AI.
                </p>
                <div className="absolute bottom-8 right-8 text-[#F59E0B]">
                  →
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex justify-center text-[#F59E0B]"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </>
  );
}
