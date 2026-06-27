import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { AuroraBackground } from '@/components/AuroraBackground';

const projects = [
  {
    title: "Autonomous Robotics Platform",
    description: "Full-stack autonomy stack for mobile robots. Real-time SLAM, motion planning, and sensor fusion.",
    tags: ["C++", "ROS2", "Python"]
  },
  {
    title: "Distributed ML Pipeline",
    description: "End-to-end training and inference infrastructure handling millions of daily predictions.",
    tags: ["PyTorch", "Kubernetes", "Go"]
  },
  {
    title: "Open Source Dev Tooling",
    description: "CLI tools and libraries with 2k+ GitHub stars, used by engineers at top tech companies.",
    tags: ["TypeScript", "Node.js", "CLI"]
  },
  {
    title: "Computer Vision System",
    description: "Real-time object detection and tracking for edge devices. Sub-10ms inference latency.",
    tags: ["Python", "TensorRT", "CUDA"]
  }
];

export default function Engineering() {
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
            <span className="eyebrow-text text-primary/40 mb-4">01</span>
            <h1 className="text-5xl md:text-6xl font-display font-medium text-white mb-4">Engineering</h1>
            <p className="text-xl text-muted-foreground font-light">Building systems that scale. Products that matter.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (idx + 1), ease: "easeOut" }}
              className="portfolio-card p-8 rounded-sm flex flex-col h-full"
            >
              <h3 className="text-2xl text-white font-display font-medium mb-3">{project.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-sm bg-primary/10 text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}