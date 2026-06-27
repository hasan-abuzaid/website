import { motion } from 'framer-motion';
import { AuroraBackground } from '@/components/AuroraBackground';

const projects = [
  {
    title: "Ball-on-Plate Balancing System",
    description: "Closed-loop LQR control with live OpenCV ball tracking.",
    tags: ["LQR", "OpenCV", "Arduino"],
    link: "[[GITHUB_BALL_ON_PLATE]]",
    linkLabel: "VIEW ON GITHUB →"
  },
  {
    title: "YOLOv11 PCB Defect Detection",
    description: "Custom object detection at 83.4% mAP, vs. an autoencoder baseline.",
    tags: ["YOLOv11", "Roboflow", "PyTorch"],
    link: "[[GITHUB_PCB_YOLO]]",
    linkLabel: "VIEW ON GITHUB →"
  },
  {
    title: "Gesture-Based Access Control",
    description: "Hand-gesture industrial access via myRIO, PLC & MediaPipe.",
    tags: ["myRIO", "Delta PLC", "MediaPipe"],
    link: "[[GITHUB_GESTURE_PLC]]",
    linkLabel: "VIEW ON GITHUB →"
  },
  {
    title: "Aqua-Link — LoRa Tank Monitor",
    description: "Long-range water-tank level monitoring over LoRa.",
    tags: ["LoRa", "IoT", "Embedded C"],
    link: "[[GITHUB_AQUALINK]]",
    linkLabel: "VIEW ON GITHUB →"
  },
  {
    title: "Lane Detection — Unmarked Roads",
    description: "Vision lane detection tuned for unmarked Jordanian roads.",
    tags: ["OpenCV", "Computer Vision"],
    link: "[[GITHUB_LANE_DETECTION]]",
    linkLabel: "VIEW ON GITHUB →"
  },
  {
    title: "AAAI Jordan Chapter Website",
    description: "Designed & built the chapter site, live on a custom domain.",
    tags: ["HTML/CSS/JS", "GitHub Pages"],
    link: "[[LIVE_AAAI_SITE]]",
    linkLabel: "VISIT SITE →"
  },
  {
    title: "Innovation Club Website",
    description: "The GJU Innovation Club site in clean vanilla JS.",
    tags: ["Vanilla JS", "Static Site"],
    link: "[[LIVE_INNOVATION_SITE]]",
    linkLabel: "VISIT SITE →"
  },
  {
    title: "Dukkan — Shop Management",
    description: "Arabic RTL shop app with Google Sheets sync & multi-branch login.",
    tags: ["RTL", "Sheets API"],
    link: "[[GITHUB_DUKKAN]]",
    linkLabel: "VIEW ON GITHUB →"
  },
  {
    title: "Arduino Car Security System",
    description: "Tinkercad sim with voltage-divider sensing & arming logic.",
    tags: ["Arduino", "Tinkercad"],
    link: "[[GITHUB_CAR_SECURITY]]",
    linkLabel: "VIEW ON GITHUB →"
  }
];

export default function Engineering() {
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
            01
          </div>
          
          <motion.div variants={itemVariants} className="mb-24 relative z-10">
            <h3 className="font-mono text-[#F59E0B] text-[11px] uppercase tracking-[0.2em] mb-6">
              ENGINEERING · SYSTEMS
            </h3>
            <h1 className="font-display text-white text-[64px] uppercase tracking-wide leading-[0.9] mb-6">
              SYSTEMS THAT SEE, DECIDE, AND MOVE.
            </h1>
            <p className="font-body text-[#A1A1AA] text-[18px] max-w-[600px]">
              Robotics, control, computer vision, and embedded / IoT
            </p>
          </motion.div>
          
          <div className="border-t border-[#27272A] pt-16 mb-16">
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="font-mono text-[#52525B] text-[11px] uppercase tracking-[0.15em] mb-6">
                EDUCATION
              </h2>
              <div className="border-l-[2px] border-[#F59E0B] pl-6 py-1">
                <h3 className="font-body text-white text-[18px] mb-1">
                  B.Sc. Mechatronics Engineering — German Jordanian University (GJU)
                </h3>
                <p className="font-body text-[#A1A1AA] text-[14px]">
                  Expected 2026
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-24">
              <h2 className="font-mono text-[#52525B] text-[11px] uppercase tracking-[0.15em] mb-6">
                WORK EXPERIENCE
              </h2>
              <div className="flex flex-col gap-8">
                <div className="border-l-[2px] border-[#F59E0B] pl-6 py-1 relative">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-body text-white text-[18px] font-semibold">Nexus Nature</h3>
                    <span className="font-mono text-white text-[16px]">—</span>
                    <h3 className="font-body text-[#A1A1AA] text-[18px]">IoT / Embedded Systems Intern</h3>
                    <span className="ml-2 font-mono text-[#4ADE80] border border-[#4ADE80]/30 bg-[#4ADE80]/10 px-2 py-0.5 text-[10px] tracking-widest rounded-sm">LIVE</span>
                  </div>
                  <p className="font-body text-[#A1A1AA] text-[14px]">
                    GJU spinoff · Embedded & IoT systems for environmental monitoring.
                  </p>
                </div>
                
                <div className="border-l-[2px] border-[#F59E0B] pl-6 py-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-body text-white text-[18px] font-semibold">Al-Taqadum Modern Company</h3>
                    <span className="font-mono text-white text-[16px]">—</span>
                    <h3 className="font-body text-[#A1A1AA] text-[18px]">Engineering Intern</h3>
                  </div>
                  <p className="font-body text-[#A1A1AA] text-[14px]">
                    Industrial commissioning — Assembly & commissioning of a 16-meter film-blowing machine.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-[#27272A] pt-16">
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="font-mono text-[#52525B] text-[11px] uppercase tracking-[0.15em]">
                SELECTED PROJECTS ({projects.length})
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => {
                const projectNumber = String(idx + 1).padStart(2, '0');
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="amber-glow-hover p-6 rounded-[2px] flex flex-col h-full border relative"
                    style={{ backgroundColor: '#111113', borderColor: '#27272A' }}
                  >
                    <div className="font-mono text-[#52525B] text-[11px] mb-4">
                      {projectNumber} /
                    </div>
                    
                    <h3 className="font-body font-semibold text-white text-[16px] mb-2 leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="font-body text-[#A1A1AA] text-[14px] mb-6 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="font-mono text-[#A1A1AA] text-[11px] px-2 py-1 rounded-[2px] border border-[#27272A]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); console.log('Navigate to:', project.link); }}
                      className="font-mono text-[#F59E0B] text-[12px] uppercase mt-auto inline-block"
                    >
                      {project.linkLabel}
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
