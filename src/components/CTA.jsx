import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="contact" className="relative py-32 lg:py-44 bg-obsidian-900 overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Luxury property"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-900/60 via-obsidian-900/80 to-obsidian-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-900 via-obsidian-900/70 to-obsidian-900" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          className="w-[700px] h-[700px] bg-gold-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Pre-text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="w-10 h-px bg-gold-500" />
          <span className="font-dm text-gold-500/70 text-[10px] tracking-[0.45em] uppercase">Ready to Close</span>
          <div className="w-10 h-px bg-gold-500" />
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-cormorant text-[clamp(2.4rem,6vw,5.5rem)] font-light text-white leading-[1.05] mb-6"
        >
          Looking for Someone Who
          <br />
          Can <em className="text-gold-400">Sell</em>, Not Just{' '}
          <span className="relative">
            Talk?
            <motion.span
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-gold-500 to-gold-400/50 origin-left"
            />
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-dm text-white/45 text-lg leading-relaxed max-w-xl mx-auto mb-14"
        >
          One conversation is all it takes. Let's talk about what you're building — and how Harsh can help you sell it.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="mailto:harshsinha0591@gmail.com?subject=Let's Connect — HA Realty"
            className="group relative px-10 py-4 bg-gold-500 text-obsidian-900 font-dm text-[11px] tracking-[0.3em] uppercase font-semibold overflow-hidden hover:shadow-[0_0_60px_rgba(201,168,76,0.4)] transition-shadow duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Book a Call
            </span>
            <div className="absolute inset-0 bg-gold-300 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-400" />
          </motion.a>

          <motion.a
            href="/Harsh_Aryan_Resume.pdf"
            download="Harsh_Aryan_Resume.pdf"
            className="px-10 py-4 border border-gold-500/40 text-gold-400 font-dm text-[11px] tracking-[0.3em] uppercase hover:bg-gold-500/10 hover:border-gold-500/60 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download Resume
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/harsh-aryan-68a854153"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border border-white/15 text-white/60 font-dm text-[11px] tracking-[0.3em] uppercase hover:border-white/30 hover:text-white/80 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </motion.a>
        </motion.div>

        {/* Contact info strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 divide-x divide-white/10"
        >
          {[
            {
              icon: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              ),
              text: 'harshsinha0591@gmail.com',
              href: 'mailto:harshsinha0591@gmail.com',
            },
            {
              icon: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              text: '+91 9217 664 741',
              href: 'tel:+919217664741',
            },
            {
              icon: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              ),
              text: 'Noida, India (NCR)',
              href: '#',
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="flex items-center gap-2 px-4 text-white/35 hover:text-gold-400 transition-colors duration-300 first:pl-0 last:pr-0"
            >
              <span className="text-gold-500/50">{item.icon}</span>
              <span className="font-dm text-xs">{item.text}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
