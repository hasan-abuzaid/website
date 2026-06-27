import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { AuroraBackground } from '@/components/AuroraBackground';

const projects = [
  {
    title: "Ball-on-Plate Balancing System",
    description: "Closed-loop LQR control with live OpenCV ball tracking.",
    tags: ["LQR", "OpenCV", "Arduino"],
    link: "[[GITHUB_BALL_ON_PLATE]]",
    linkLabel: "View on GitHub"
  },
  {
    title: "YOLOv11 PCB Defect Detection",
    description: "Custom object detection at 83.4% mAP, vs. an autoencoder baseline.",
    tags: ["YOLOv11", "Roboflow", "PyTorch"],
    link: "[[GITHUB_PCB_YOLO]]",
    linkLabel: "View on GitHub"
  },
  {
    title: "Gesture-Based Access Control",
    description: "Hand-gesture industrial access via myRIO, PLC & MediaPipe.",
    tags: ["myRIO", "Delta PLC", "MediaPipe"],
    link: "[[GITHUB_GESTURE_PLC]]",
    linkLabel: "View on GitHub"
  },
  {
    title: "Aqua-Link — LoRa Tank Monitor",
    description: "Long-range water-tank level monitoring over LoRa.",
    tags: ["LoRa", "IoT", "Embedded C"],
    link: "[[GITHUB_AQUALINK]]",
    linkLabel: "View on GitHub"
  },
  {
    title: "Lane Detection — Unmarked Roads",
    description: "Vision lane detection tuned for unmarked Jordanian roads.",
    tags: ["OpenCV", "Computer Vision"],
    link: "[[GITHUB_LANE_DETECTION]]",
    linkLabel: "View on GitHub"
  },
  {
    title: "AAAI Jordan Chapter Website",
    description: "Designed & built the chapter site, live on a custom domain.",
    tags: ["HTML/CSS/JS", "GitHub Pages"],
    link: "[[LIVE_AAAI_SITE]]",
    linkLabel: "Visit site"
  },
  {
    title: "Innovation Club Website",
    description: "The GJU Innovation Club site in clean vanilla JS.",
    tags: ["Vanilla JS", "Static Site"],
    link: "[[LIVE_INNOVATION_SITE]]",
    linkLabel: "Visit site"
  },
  {
    title: "Dukkan — Shop Management",
    description: "Arabic RTL shop app with Google Sheets sync & multi-branch login.",
    tags: ["RTL", "Sheets API"],
    link: "[[GITHUB_DUKKAN]]",
    linkLabel: "View on GitHub"
  },
  {
    title: "Arduino Car Security System",
    description: "Tinkercad sim with voltage-divider sensing & arming logic.",
    tags: ["Arduino", "Tinkercad"],
    link: "[[GITHUB_CAR_SECURITY]]",
    linkLabel: "View on GitHub"
  }
];

export default function Engineering() {
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
            <span className="eyebrow-text text-[#9DC2D9]/40 mb-6 font-mono tracking-widest">01</span>
            <h1 className="text-5xl md:text-7xl font-display font-medium text-white mb-6 tracking-tight leading-[1.1]">
              Systems that see, decide, and move.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Robotics, control, computer vision, and embedded / IoT — from balancing rigs to industrial commissioning.
            </p>
          </div>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-sm font-mono tracking-widest text-primary uppercase mb-6">Education</h2>
              <div className="border-l border-primary/30 pl-6 py-1">
                <h3 className="text-xl text-white font-medium mb-1">B.Sc. Mechatronics Engineering</h3>
                <p className="text-muted-foreground">German Jordanian University (GJU) — Expected 2026</p>
              </div>
            </section>

            <section>
              <h2 className="text-sm font-mono tracking-widest text-primary uppercase mb-6">Work Experience</h2>
              <div className="space-y-8">
                <div className="border-l border-primary/30 pl-6 py-1 relative">
                  <div className="absolute -left-0.5 top-2 w-1 h-1 bg-primary rounded-full"></div>
                  <div className="flex items-center gap-4 mb-1">
                    <h3 className="text-xl text-white font-medium">Nexus Nature — IoT / Embedded Systems Intern</h3>
                    <span className="px-2.5 py-0.5 text-xs font-mono bg-primary/20 text-primary border border-primary/20 rounded-full">CURRENT</span>
                  </div>
                  <p className="text-muted-foreground">GJU spinoff · Embedded & IoT systems for environmental monitoring.</p>
                </div>
                <div className="border-l border-white/10 pl-6 py-1">
                  <h3 className="text-xl text-white font-medium mb-1">Al-Taqadum Modern Company — Engineering Intern</h3>
                  <p className="text-muted-foreground">Industrial commissioning — Assembly & commissioning of a 16-meter film-blowing machine.</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-sm font-mono tracking-widest text-primary uppercase mb-8">Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (idx % 3), ease: "easeOut" }}
                className="portfolio-card p-8 rounded-2xl flex flex-col h-full group"
              >
                <div className="mb-4">
                  <h3 className="text-2xl text-white font-display font-medium mb-3 leading-tight">{project.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-6 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-mono px-2 py-1 rounded bg-white/[0.03] text-gray-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); console.log('Navigate to:', project.link); }}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-white transition-colors mt-auto"
                >
                  {project.linkLabel}
                  <ExternalLink className="w-3.5 h-3.5 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
