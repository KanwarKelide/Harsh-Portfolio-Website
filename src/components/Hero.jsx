import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HERO_STATS = [
  { value: '50+', label: 'Deals Facilitated' },
  { value: '₹100Cr+', label: 'Portfolio Value' },
  { value: '200+', label: 'HNI Clients' },
  { value: 'NCR', label: 'Luxury Market' },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], ['0px', '-40px']);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-110 origin-center"
      >
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85"
          alt="Luxury interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-900/60 via-obsidian-900/75 to-obsidian-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-900/85 via-obsidian-900/40 to-obsidian-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-obsidian-900/30" />
      </motion.div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vertical decorative lines */}
      <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/25 to-transparent hidden xl:block z-[2]" />
      <div className="absolute right-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/10 to-transparent hidden xl:block z-[2]" />

      {/* Main content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24 pb-32"
      >
        <div className="max-w-5xl">
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-14 h-px bg-gradient-to-r from-gold-500 to-gold-500/30" />
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
              <span className="font-dm text-gold-400/80 text-[10px] tracking-[0.45em] uppercase">
                HA Realty · Noida, India
              </span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-cormorant text-[clamp(2.8rem,8vw,6.5rem)] font-light text-white leading-[1.04] mb-6">
              Selling Luxury
              <br />
              <span className="italic text-gold-400">Real Estate</span> is Not
              <br />
              a Job.{' '}
              <span className="relative inline-block">
                It's a Craft.
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-gold-500 via-gold-400 to-transparent origin-left"
                />
              </span>
            </h1>
          </motion.div>

          {/* Sub headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-dm text-white/55 text-[clamp(1rem,2.2vw,1.2rem)] max-w-lg mb-12 leading-relaxed font-light"
          >
            Meet{' '}
            <span className="text-gold-400 font-medium not-italic">Harsh Aryan</span>
            {' '}— India's rising luxury real estate closer.
            <br />
            Where discipline meets desire, and desire becomes a deal.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#about"
              className="group relative px-8 py-4 bg-gold-500 text-obsidian-900 font-dm text-[11px] tracking-[0.28em] uppercase font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(201,168,76,0.4)]"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">View Portfolio</span>
              <div className="absolute inset-0 bg-gold-300 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-400" />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 border border-white/25 text-white font-dm text-[11px] tracking-[0.28em] uppercase hover:border-gold-500/60 hover:text-gold-400 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Book a Call
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-dm text-white/25 text-[9px] tracking-[0.5em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-gold-500/70 to-transparent"
        />
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-10 hidden md:block"
      >
        <div className="border-t border-white/[0.06] bg-obsidian-900/70 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-stretch divide-x divide-white/[0.06]">
              {HERO_STATS.map((stat, i) => (
                <div key={i} className="flex-1 py-4 px-6 lg:px-8 group hover:bg-gold-500/5 transition-colors duration-300">
                  <div className="font-cormorant text-gold-400 text-xl font-semibold group-hover:text-gold-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="font-dm text-white/35 text-[9px] tracking-[0.25em] uppercase mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
