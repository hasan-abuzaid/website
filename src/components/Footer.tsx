import { Link } from 'wouter';
import { motion } from 'framer-motion';

const sections = [
  { href: '/engineering', label: 'Engineering' },
  { href: '/videography', label: 'Videography' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mt-24 border-t border-[#27272A]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-20 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <Link
            href="/"
            className="font-display text-[#F59E0B] text-[20px] tracking-wide hover:opacity-80 transition-opacity"
          >
            HASAN.
          </Link>
          <span className="font-mono text-[#52525B] text-[11px] text-center md:text-left">
            Mechatronics engineer <span className="text-[#3F3F46]">·</span> videographer{' '}
            <span className="text-[#3F3F46]">·</span> Amman, Jordan
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-y-2">
          {sections.map((s, i) => (
            <div key={s.href} className="flex items-center">
              <Link
                href={s.href}
                className="group relative font-mono text-[12px] uppercase tracking-[0.15em] text-[#A1A1AA] hover:text-[#F59E0B] transition-colors px-1 py-1"
              >
                {s.label}
                <span className="pointer-events-none absolute left-1 right-1 -bottom-0.5 h-px origin-left scale-x-0 bg-[#F59E0B] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
              {i < sections.length - 1 && (
                <span className="font-mono text-[#52525B] mx-1 select-none">·</span>
              )}
            </div>
          ))}
        </nav>

        <div className="font-mono text-[#52525B] text-[12px]">© 2026</div>
      </div>
    </motion.footer>
  );
}
