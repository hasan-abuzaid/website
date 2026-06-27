import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const links = [
  { href: '/engineering', label: 'Engineering' },
  { href: '/videography', label: 'Videography' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/contact', label: 'Contact' }
];

export function Nav() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 h-[64px] border-b"
      style={{
        background: 'rgba(9,9,11,0.85)',
        backdropFilter: 'blur(12px)',
        borderColor: '#27272A'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-20 h-full flex items-center justify-between">
        <Link href="/" className="font-display text-[22px] tracking-wide relative z-50" style={{ color: '#F59E0B' }}>
          HASAN.
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 h-full">
          {links.map((link) => {
            const isActive = location === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`font-mono text-[13px] uppercase tracking-[0.1em] h-full flex items-center relative transition-colors ${isActive ? 'text-[#F59E0B]' : 'text-[#A1A1AA] hover:text-white'}`}
              >
                {link.label}
                {isActive && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F59E0B]" 
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <button 
          className="md:hidden text-white z-50 p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center" style={{ background: '#09090B' }}>
          <div className="flex flex-col items-center gap-8">
            <Link href="/" className={`font-mono text-[16px] uppercase tracking-[0.1em] ${location === '/' ? 'text-[#F59E0B]' : 'text-[#A1A1AA]'}`}>
              Home
            </Link>
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`font-mono text-[16px] uppercase tracking-[0.1em] ${location === link.href ? 'text-[#F59E0B]' : 'text-[#A1A1AA]'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
