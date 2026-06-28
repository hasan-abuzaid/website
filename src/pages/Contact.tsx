import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { AuroraBackground } from '@/components/AuroraBackground';

export default function Contact() {
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
      <div className="w-full flex flex-col px-6 md:px-20 max-w-[1200px] mx-auto pt-32 min-h-[100dvh]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex-1 flex flex-col"
        >
          <motion.div variants={itemVariants} className="mb-24">
            <h3 className="font-mono text-[#F59E0B] text-[11px] uppercase tracking-[0.2em] mb-6">
              CONTACT · GET IN TOUCH
            </h3>
            <h1 className="font-display text-white text-[80px] uppercase tracking-wide leading-[0.9] mb-6">
              LET'S BUILD SOMETHING.
            </h1>
            <p className="font-body text-[#A1A1AA] text-[18px] max-w-[600px]">
              Open to engineering roles, collaborations, and videography work. The fastest way to reach me is email.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="mailto:[[EMAIL]]" className="amber-glow-hover border border-[#27272A] bg-[#111113] p-8 rounded-[2px] flex flex-col group">
              <Mail className="w-6 h-6 text-[#F59E0B] mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="font-mono text-[#52525B] text-[11px] uppercase tracking-[0.15em] mb-2">EMAIL</h3>
              <p className="font-body text-white text-[18px] truncate">[[EMAIL]]</p>
            </a>

            <a href="[[LINKEDIN]]" target="_blank" rel="noopener noreferrer" className="amber-glow-hover border border-[#27272A] bg-[#111113] p-8 rounded-[2px] flex flex-col group">
              <Linkedin className="w-6 h-6 text-[#F59E0B] mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="font-mono text-[#52525B] text-[11px] uppercase tracking-[0.15em] mb-2">LINKEDIN</h3>
              <p className="font-body text-white text-[18px] truncate">[[LINKEDIN]]</p>
            </a>

            <a href="[[GITHUB]]" target="_blank" rel="noopener noreferrer" className="amber-glow-hover border border-[#27272A] bg-[#111113] p-8 rounded-[2px] flex flex-col group">
              <Github className="w-6 h-6 text-[#F59E0B] mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="font-mono text-[#52525B] text-[11px] uppercase tracking-[0.15em] mb-2">GITHUB</h3>
              <p className="font-body text-white text-[18px] truncate">[[GITHUB]]</p>
            </a>

            <div className="amber-glow-hover border border-[#27272A] bg-[#111113] p-8 rounded-[2px] flex flex-col group">
              <MapPin className="w-6 h-6 text-[#F59E0B] mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="font-mono text-[#52525B] text-[11px] uppercase tracking-[0.15em] mb-2">LOCATION</h3>
              <p className="font-body text-white text-[18px] truncate">Amman, Jordan</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
