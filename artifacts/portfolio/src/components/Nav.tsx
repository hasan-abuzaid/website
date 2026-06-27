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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0C10]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-display font-medium text-white z-50 relative">
          Hasan<span className="text-primary">.</span>
          {location === '/' && (
            <motion.div
              layoutId="nav-indicator"
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
            />
          )}
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = location === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`text-sm font-medium transition-colors relative ${isActive ? 'text-white' : 'text-muted-foreground hover:text-white'}`}
              >
                {link.label}
                {isActive && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" 
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

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-[#0A0C10] z-40 flex flex-col items-center justify-center pt-20">
          <div className="flex flex-col items-center gap-8">
            <Link href="/" className={`text-2xl font-display font-medium ${location === '/' ? 'text-white' : 'text-muted-foreground'}`}>
              Home
            </Link>
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`text-2xl font-display font-medium ${location === link.href ? 'text-white' : 'text-muted-foreground'}`}
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
