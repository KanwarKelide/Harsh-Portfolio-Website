import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-obsidian-900/92 backdrop-blur-2xl border-b border-gold-500/8'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.01 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-9 h-9 border border-gold-500/70 flex items-center justify-center group-hover:border-gold-400 transition-colors duration-300 relative">
              <span className="font-cormorant text-gold-500 font-semibold text-base tracking-widest group-hover:text-gold-400 transition-colors">HA</span>
              <div className="absolute inset-0 bg-gold-500/5 group-hover:bg-gold-500/10 transition-colors" />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-cormorant text-white text-[15px] font-semibold tracking-[0.22em] uppercase">
                Harsh Aryan
              </span>
              <span className="font-dm text-gold-500/60 text-[9px] tracking-[0.38em] uppercase mt-0.5">
                Luxury Real Estate
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative font-dm text-[11px] tracking-[0.18em] uppercase text-white/50 hover:text-gold-400 transition-colors duration-300 group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-400" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="mailto:harryaryan1110@gmail.com"
              className="px-6 py-2.5 border border-gold-500/40 text-gold-400 font-dm text-[10px] tracking-[0.25em] uppercase hover:bg-gold-500 hover:text-obsidian-900 hover:border-gold-500 transition-all duration-300 font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Book a Call
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-px bg-gold-500 block origin-center"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-px bg-gold-500 block"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-px bg-gold-500 block origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-obsidian-900/98 backdrop-blur-2xl flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center px-10 gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="font-cormorant text-4xl font-light text-white/70 hover:text-gold-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <div className="px-10 pb-12">
              <a
                href="mailto:harryaryan1110@gmail.com"
                className="block w-full text-center py-4 border border-gold-500/50 text-gold-400 font-dm text-xs tracking-[0.3em] uppercase hover:bg-gold-500 hover:text-obsidian-900 transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
