import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedCounter({ end, suffix = '', duration = 2200 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* Brand imagery — cinematic photography that represents each brand's world */
const BRANDS = [
  {
    name: 'JACOB & CO.',
    sub: 'Residences',
    tagline: 'Where Timeless Precision Meets Architecture',
    desc: "The world's most iconic watchmaker now crafts residences with the same obsessive precision as their timepieces. Every detail. Every finish. Impossibly perfect.",
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=90',
    fallback: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=90',
    accent: 'Swiss precision. Architectural mastery.',
    align: 'left',
  },
  {
    name: 'ELIE SAAB',
    sub: 'Villas',
    tagline: 'Haute Couture Translated Into Living Spaces',
    desc: "Fashion's most celebrated name, now in marble and glass. Elie Saab's signature — sculpted silhouettes, cascading light, permanent elegance — written into every room.",
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=90',
    fallback: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=90',
    accent: 'Haute couture. Elevated living.',
    align: 'right',
  },
];

const PUNCHY_LINES = [
  'From cold call to closed deal — every step handled with precision.',
  'High-net-worth clients who trust him with their most significant purchase.',
  'Operating where Jacob & Co and Elie Saab set the standard.',
  'He doesn\'t just sell properties. He curates a lifestyle.',
];

const STATS = [
  { value: 50, suffix: '+', label: 'Deals Facilitated', sub: 'High-value transactions' },
  { value: 200, suffix: '+', label: 'HNI Clients', sub: 'High-net-worth conversations' },
  { value: 15, suffix: '+', label: 'Luxury Projects', sub: 'Premium portfolio' },
  { value: 2, suffix: '', label: 'Iconic Brands', sub: 'Jacob & Co · Elie Saab' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="relative bg-obsidian-900 overflow-hidden">

      {/* ── BRAND ECOSYSTEM ─────────────────────────────────────────────────── */}
      <div className="border-t border-white/[0.05]">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="section-tag"
          >
            <span>Brand Ecosystem</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.08 }}
            className="font-cormorant text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white leading-[1.1] max-w-3xl"
          >
            Operating at the World's Most
            <br />
            <em className="text-gold-400">Coveted Addresses.</em>
          </motion.h2>
        </div>

        {/* Full-bleed brand image cards */}
        <div className="grid md:grid-cols-2">
          {BRANDS.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative group overflow-hidden cursor-default"
              style={{ minHeight: '520px' }}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <motion.img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  onError={(e) => { e.target.src = brand.fallback; }}
                />
                {/* Deep gradient overlay — bottom-heavy for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/70 to-obsidian-900/20" />
                {/* Side gradient based on alignment */}
                <div className={`absolute inset-0 bg-gradient-to-r ${
                  brand.align === 'left'
                    ? 'from-obsidian-900/40 to-transparent'
                    : 'from-transparent to-obsidian-900/40'
                }`} />
                {/* Hover gold tint */}
                <div className="absolute inset-0 bg-gold-500/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Divider between cards */}
              {i === 0 && (
                <div className="hidden md:block absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/30 to-transparent z-10" />
              )}

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-10 lg:p-14" style={{ minHeight: '520px' }}>
                {/* Brand number */}
                <div className="absolute top-8 right-10 font-cormorant text-white/10 text-6xl font-light select-none group-hover:text-white/15 transition-colors duration-500">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Brand name — the hero element */}
                <div className="mt-auto">
                  {/* Sub label */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                    className="flex items-center gap-3 mb-4"
                  >
                    <div className="w-8 h-px bg-gold-500" />
                    <span className="font-dm text-gold-400/70 text-[9px] tracking-[0.5em] uppercase">
                      {brand.sub}
                    </span>
                  </motion.div>

                  {/* Main brand name */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.55 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="font-cormorant text-[clamp(2.5rem,5vw,4rem)] font-light text-white tracking-[0.05em] leading-none mb-1 group-hover:text-gold-300 transition-colors duration-500"
                  >
                    {brand.name}
                  </motion.h3>

                  {/* Gold rule */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: 0.7 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-gradient-to-r from-gold-500 via-gold-400 to-transparent origin-left mb-5"
                  />

                  {/* Tagline */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.7, delay: 0.75 + i * 0.15 }}
                    className="font-cormorant italic text-white/50 text-lg mb-4 group-hover:text-white/65 transition-colors duration-500"
                  >
                    {brand.tagline}
                  </motion.p>

                  {/* Description — hidden until hover */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.7, delay: 0.85 + i * 0.15 }}
                    className="font-dm text-white/35 text-sm leading-relaxed max-w-sm group-hover:text-white/50 transition-colors duration-500"
                  >
                    {brand.desc}
                  </motion.p>

                  {/* Bottom accent */}
                  <div className="mt-6 pt-5 border-t border-white/[0.08]">
                    <p className="font-dm text-gold-500/40 text-[10px] tracking-[0.35em] uppercase group-hover:text-gold-500/60 transition-colors duration-400">
                      {brand.accent}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── STORY + STATS ────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — Punchy narrative */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="section-tag"
            >
              <span>The Story</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="font-cormorant text-[clamp(1.8rem,3.5vw,3rem)] font-light text-white leading-[1.15] mb-10"
            >
              Not Just a Sales Guy.
              <br />
              <em className="text-gold-400">A Closer.</em>
            </motion.h2>

            <div className="space-y-6">
              {PUNCHY_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-6 h-px bg-gold-500/50 mt-3 flex-shrink-0 group-hover:w-10 group-hover:bg-gold-500 transition-all duration-400" />
                  <p className="font-cormorant text-white/65 text-xl italic leading-[1.5] group-hover:text-white/80 transition-colors duration-300">
                    {line}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Role badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-12 inline-flex items-center gap-4 px-6 py-4 gold-border-card overflow-hidden"
            >
              <div className="w-10 h-10 border border-gold-500/40 flex items-center justify-center flex-shrink-0">
                <span className="font-cormorant text-gold-400 font-semibold text-sm">HA</span>
              </div>
              <div>
                <p className="font-cormorant text-white text-lg font-semibold">Harsh Aryan</p>
                <p className="font-dm text-gold-500 text-[9px] tracking-[0.3em] uppercase mt-0.5">
                  Young Realtor · HA Realty
                </p>
              </div>
              <div className="ml-2 pl-4 border-l border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-dm text-green-400/70 text-[9px] tracking-wider uppercase">Active</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Stats */}
          <div className="lg:pt-14">
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.45 + i * 0.1 }}
                  className="bg-obsidian-800/40 border border-white/[0.05] p-6 hover:border-gold-500/20 hover:bg-gold-500/[0.03] transition-all duration-400 group cursor-default"
                >
                  <div className="font-cormorant text-[2.4rem] font-semibold leading-none mb-2 text-gold-400 group-hover:text-gold-300 transition-colors">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-dm text-white/75 text-sm font-medium">{stat.label}</div>
                  <div className="font-dm text-white/28 text-[10px] mt-1 leading-relaxed">{stat.sub}</div>
                </motion.div>
              ))}
            </div>

            {/* Brand names strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="mt-6 p-6 bg-obsidian-800/20 border border-white/[0.04]"
            >
              <p className="font-dm text-white/20 text-[9px] tracking-[0.4em] uppercase mb-5 text-center">
                Associated Luxury Brands
              </p>
              <div className="flex items-center justify-center gap-8">
                {['JACOB & CO.', 'ELIE SAAB'].map((name, i) => (
                  <div key={i} className="text-center group cursor-default">
                    <div className="font-cormorant text-white/35 text-base tracking-[0.15em] group-hover:text-gold-400/70 transition-colors duration-400">
                      {name}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
