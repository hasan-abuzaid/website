import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Code2, Video, Users } from 'lucide-react';
import { AuroraBackground } from '@/components/AuroraBackground';

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <div className="min-h-[100dvh] w-full flex flex-col justify-center px-6 py-12 md:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white tracking-tighter mb-4">
            Hasan Abuzaid<span className="text-primary">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8">
            Engineer · Filmmaker · Leader
          </p>
          <div className="w-full md:w-2/3 lg:w-3/4 pr-0 lg:pr-12 xl:w-2/3 mb-16">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              I build things — systems, products, stories. Currently studying Computer Science and Film at [University]. I care about the intersection of technology and craft.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Link href="/engineering" className="block outline-none">
            <div className="portfolio-card p-8 h-full rounded-sm flex flex-col group">
              <Code2 className="w-8 h-8 text-primary mb-6" />
              <h2 className="text-2xl text-white font-display font-medium mb-3">Engineering</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Building systems that scale. Products that matter.
              </p>
            </div>
          </Link>

          <Link href="/videography" className="block outline-none">
            <div className="portfolio-card p-8 h-full rounded-sm flex flex-col group">
              <Video className="w-8 h-8 text-primary mb-6" />
              <h2 className="text-2xl text-white font-display font-medium mb-3">Videography</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Stories told through light and motion.
              </p>
            </div>
          </Link>

          <Link href="/leadership" className="block outline-none">
            <div className="portfolio-card p-8 h-full rounded-sm flex flex-col group">
              <Users className="w-8 h-8 text-primary mb-6" />
              <h2 className="text-2xl text-white font-display font-medium mb-3">Leadership</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Building teams, communities, and institutions.
              </p>
            </div>
          </Link>
        </motion.div>
      </div>
    </>
  );
}