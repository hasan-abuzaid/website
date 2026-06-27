import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { AuroraBackground } from '@/components/AuroraBackground';

export default function Contact() {
  return (
    <>
      <AuroraBackground />
      <div className="min-h-[calc(100dvh-5rem)] w-full flex flex-col px-6 py-12 md:py-20 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-medium text-white mb-8 tracking-tight">
              Let's build something.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Open to engineering roles, collaborations, and videography work. The fastest way to reach me is email.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <a href="mailto:[[EMAIL]]" className="portfolio-card p-8 rounded-2xl flex flex-col group">
              <Mail className="w-6 h-6 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-mono tracking-widest text-muted-foreground uppercase mb-2">Email</h3>
              <p className="text-white text-lg font-medium break-all">[[EMAIL]]</p>
            </a>

            <a href="[[LINKEDIN]]" target="_blank" rel="noopener noreferrer" className="portfolio-card p-8 rounded-2xl flex flex-col group">
              <Linkedin className="w-6 h-6 text-[#0A66C2] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-mono tracking-widest text-muted-foreground uppercase mb-2">LinkedIn</h3>
              <p className="text-white text-lg font-medium break-all">Hasan Abuzaid</p>
            </a>

            <a href="[[GITHUB]]" target="_blank" rel="noopener noreferrer" className="portfolio-card p-8 rounded-2xl flex flex-col group">
              <Github className="w-6 h-6 text-white mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-mono tracking-widest text-muted-foreground uppercase mb-2">GitHub</h3>
              <p className="text-white text-lg font-medium break-all">[[GITHUB]]</p>
            </a>

            <div className="portfolio-card p-8 rounded-2xl flex flex-col">
              <MapPin className="w-6 h-6 text-primary mb-6" />
              <h3 className="text-sm font-mono tracking-widest text-muted-foreground uppercase mb-2">Location</h3>
              <p className="text-white text-lg font-medium">Amman, Jordan</p>
            </div>
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span className="font-display text-white text-lg font-medium">Hasan<span className="text-primary">.</span></span>
          </div>
          <div className="text-center md:text-left">
            Mechatronics engineer · videographer · Amman, Jordan
          </div>
          <div>
            © 2026
          </div>
        </motion.footer>
      </div>
    </>
  );
}
