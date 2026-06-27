import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { AuroraBackground } from '@/components/AuroraBackground';

const experiences = [
  {
    role: "President",
    org: "Engineering Student Society",
    description: "Led 800+ member technical organization. Organized 12 industry events, 3 hackathons, and managed $50k budget."
  },
  {
    role: "Technical Lead",
    org: "University Robotics Team",
    description: "Directed software team of 14 engineers. Competed in international autonomous robotics competitions."
  },
  {
    role: "Director",
    org: "Student Film Collective",
    description: "Founded and directed campus filmmaking club. Grew to 60+ active members, produced 8 short films annually."
  },
  {
    role: "Mentor",
    org: "Code for Good Initiative",
    description: "Mentored 20+ students in software development. Facilitated 6-week technical bootcamps."
  }
];

export default function Leadership() {
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
            <span className="eyebrow-text text-primary/40 mb-4">03</span>
            <h1 className="text-5xl md:text-6xl font-display font-medium text-white mb-4">Leadership</h1>
            <p className="text-xl text-muted-foreground font-light">Building teams, communities, and institutions.</p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8 max-w-4xl">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (idx + 1), ease: "easeOut" }}
              className="group border-b border-white/5 pb-8 last:border-0"
            >
              <h3 className="text-2xl text-white font-display font-medium mb-1">
                {exp.role} <span className="text-primary/70 font-light">— {exp.org}</span>
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed mt-3 text-lg">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}