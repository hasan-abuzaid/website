import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { AuroraBackground } from '@/components/AuroraBackground';

const reels = [
  {
    title: "Brand Films",
    description: "Commercial storytelling for startups and established brands."
  },
  {
    title: "Documentary",
    description: "Long-form narrative work exploring technology and human experience."
  },
  {
    title: "Event Coverage",
    description: "Live event capture and post-production for conferences and launches."
  },
  {
    title: "Short Films",
    description: "Fiction and experimental short-form narratives."
  }
];

export default function Videography() {
  return (
    <>
      <AuroraBackground />
      <div className="min-h-[100dvh] w-full px-6 py-12 md:py-24 md:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-white transition-colors mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex flex-col">
            <span className="eyebrow-text text-secondary/40 mb-4">02</span>
            <h1 className="text-5xl md:text-6xl font-display font-medium text-white mb-4">Videography</h1>
            <p className="text-xl text-muted-foreground font-light">Stories told through light and motion.</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="border border-secondary/30 bg-secondary/5 rounded-sm p-6 flex flex-col justify-center shadow-[inset_0_0_20px_rgba(143,166,142,0.05)]">
            <span className="text-4xl text-white font-display font-medium mb-1">150M+</span>
            <span className="text-sm text-muted-foreground font-light uppercase tracking-wider">Views Across Platforms</span>
          </div>
          <div className="border border-secondary/30 bg-secondary/5 rounded-sm p-6 flex flex-col justify-center shadow-[inset_0_0_20px_rgba(143,166,142,0.05)]">
            <span className="text-4xl text-white font-display font-medium mb-1">3+</span>
            <span className="text-sm text-muted-foreground font-light uppercase tracking-wider">Years Shooting</span>
          </div>
          <div className="border border-secondary/30 bg-secondary/5 rounded-sm p-6 flex flex-col justify-center shadow-[inset_0_0_20px_rgba(143,166,142,0.05)]">
            <span className="text-4xl text-white font-display font-medium mb-1">50+</span>
            <span className="text-sm text-muted-foreground font-light uppercase tracking-wider">Projects Completed</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reels.map((reel, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (0.1 * idx), ease: "easeOut" }}
              className="portfolio-card p-8 rounded-sm min-h-[200px] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl text-white font-display font-medium mb-3">{reel.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {reel.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}