import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/harsh-aryan',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:harryaryan1110@gmail.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <path d="M22 6l-10 7L2 6"/>
      </svg>
    ),
  },
  {
    name: 'Phone',
    href: 'tel:+919310034979',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-obsidian-800 border-t border-white/[0.05]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main footer content */}
        <div className="py-14 lg:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 border border-gold-500/60 flex items-center justify-center">
                <span className="font-cormorant text-gold-500 font-semibold text-base">HA</span>
              </div>
              <div>
                <div className="font-cormorant text-white text-[15px] font-semibold tracking-[0.2em] uppercase">
                  Harsh Aryan
                </div>
                <div className="font-dm text-gold-500/50 text-[9px] tracking-[0.35em] uppercase mt-0.5">
                  Luxury Real Estate Sales
                </div>
              </div>
            </div>

            <p className="font-dm text-white/35 text-sm leading-relaxed max-w-xs mb-6">
              Closing ultra-luxury real estate deals at 24. Based in Noida, operating across the premium NCR market.
            </p>

            <div className="flex items-center gap-3">
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target={s.name === 'LinkedIn' ? '_blank' : undefined}
                  rel={s.name === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/35 hover:border-gold-500/50 hover:text-gold-400 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={s.name}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-dm text-white/25 text-[9px] tracking-[0.4em] uppercase mb-5">Navigation</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-dm text-white/45 text-sm hover:text-gold-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-white/20 group-hover:w-5 group-hover:bg-gold-500/60 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="font-dm text-white/25 text-[9px] tracking-[0.4em] uppercase mb-5">Contact</h4>
            <div className="space-y-4">
              {[
                {
                  label: 'Email',
                  value: 'harryaryan1110@gmail.com',
                  href: 'mailto:harryaryan1110@gmail.com',
                },
                {
                  label: 'Phone',
                  value: '+91 9310 034 979',
                  href: 'tel:+919310034979',
                },
                {
                  label: 'Location',
                  value: 'Noida, India (NCR)',
                  href: null,
                },
                {
                  label: 'Company',
                  value: 'Star Estates',
                  href: null,
                },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-dm text-white/20 text-[9px] tracking-[0.25em] uppercase mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-dm text-white/50 text-sm hover:text-gold-400 transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-dm text-white/50 text-sm">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-dm text-white/20 text-xs">
            © {year} Harsh Aryan. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400/70 animate-pulse" />
              <span className="font-dm text-white/20 text-xs">Open to opportunities</span>
            </div>
            <div className="w-px h-3 bg-white/10" />
            <p className="font-cormorant italic text-gold-500/30 text-sm">
              Built for luxury. Designed to close.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
