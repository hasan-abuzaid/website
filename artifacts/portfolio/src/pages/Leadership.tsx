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
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
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
            03
          </div>
          
          <motion.div variants={itemVariants} className="mb-24 relative z-10">
            <h3 className="font-mono text-[#F59E0B] text-[11px] uppercase tracking-[0.2em] mb-6">
              LEADERSHIP · COMMUNITY
            </h3>
            <h1 className="font-display text-white text-[64px] uppercase tracking-wide leading-[0.9] mb-6">
              LEADING THE PEOPLE BEHIND THE WORK.
            </h1>
            <p className="font-body text-[#A1A1AA] text-[18px] max-w-[600px]">
              President of GJU's Innovation Club and Chairman of its AAAI chapter.
            </p>
          </motion.div>
          
          <div className="border-t border-[#27272A] pt-16 mb-16">
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              <div className="amber-glow-hover border border-[#27272A] border-l-[2px] border-l-[#F59E0B] bg-[#111113] p-8 rounded-[2px] flex flex-col h-full">
                <h2 className="font-display text-[#F59E0B] text-[32px] tracking-wide mb-2 uppercase">
                  PRESIDENT
                </h2>
                <h3 className="font-body text-white text-[16px] font-semibold mb-4">
                  GJU Innovation Club
                </h3>
                <p className="font-body text-[#A1A1AA] text-[14px]">
                  GJU's largest club — 1,500+ members, 20-person board.
                </p>
              </div>

              <div className="amber-glow-hover border border-[#27272A] border-l-[2px] border-l-[#F59E0B] bg-[#111113] p-8 rounded-[2px] flex flex-col h-full">
                <h2 className="font-display text-[#F59E0B] text-[32px] tracking-wide mb-2 uppercase">
                  CHAIRMAN
                </h2>
                <h3 className="font-body text-white text-[16px] font-semibold mb-4">
                  AAAI GJU Chapter
                </h3>
                <p className="font-body text-[#A1A1AA] text-[14px]">
                  The student chapter for AI, in Jordan.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-24">
              <h2 className="font-mono text-[#52525B] text-[11px] uppercase tracking-[0.15em] mb-6">
                INITIATIVES & EVENTS
              </h2>
              <div className="flex flex-wrap gap-3">
                {initiatives.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="font-mono text-[#A1A1AA] text-[12px] px-[14px] py-[6px] border border-[#27272A] rounded-[2px] bg-[#111113]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="font-mono text-[#52525B] text-[11px] uppercase tracking-[0.15em] mb-6">
                EVENT GALLERY
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((idx) => (
                  <div key={idx} className="aspect-[4/3] bg-[#111113] border border-[#27272A] rounded-[2px] flex items-center justify-center relative group overflow-hidden">
                    <span className="font-mono text-[#52525B] text-[11px] group-hover:text-[#A1A1AA] transition-colors">
                      PHOTO [[PHOTO_EVENT_{idx}]]
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
