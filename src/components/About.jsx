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

const BRANDS = [
  {
    name: 'JACOB & CO.',
    sub: 'Residences',
    desc: 'Where the world\'s most iconic watchmaker meets architecture. Precision living at its pinnacle.',
    roman: 'I',
    accent: 'Swiss precision. Architectural mastery.',
    bg: 'from-[#1a1408] to-obsidian-800',
    lineColor: 'bg-gold-500',
  },
  {
    name: 'ELIE SAAB',
    sub: 'Villas',
    desc: 'Fashion\'s most celebrated couture house — now written in marble, glass, and light.',
    roman: 'II',
    accent: 'Haute couture. Elevated living.',
    bg: 'from-[#0d1018] to-obsidian-800',
    lineColor: 'bg-gold-400',
  },
  {
    name: 'HA REALTY',
    sub: 'The Vision',
    desc: 'A future luxury real estate brand built on trust, taste, and the art of the perfect close.',
    roman: 'III',
    accent: 'Your vision. His execution.',
    bg: 'from-[#0f0f0a] to-obsidian-800',
    lineColor: 'bg-gold-300',
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
  { value: 3, suffix: '', label: 'Iconic Brands', sub: 'Jacob & Co · Elie Saab · HA Realty' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="relative bg-obsidian-900 overflow-hidden">

      {/* ── BRAND ECOSYSTEM ────────────────────────────────────────────────── */}
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

        {/* Brand cards — full bleed */}
        <div className="grid md:grid-cols-3 border-t border-white/[0.05]">
          {BRANDS.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.15 }}
              className={`relative group bg-gradient-to-b ${brand.bg} border-r border-white/[0.04] last:border-r-0 overflow-hidden cursor-default`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gold-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative p-10 lg:p-12 flex flex-col min-h-[340px]">
                {/* Roman numeral */}
                <div className="font-cormorant text-white/[0.06] text-7xl font-light absolute top-6 right-8 leading-none select-none group-hover:text-white/[0.08] transition-colors duration-500">
                  {brand.roman}
                </div>

                {/* Brand name — the star of the card */}
                <div className="flex-1 flex flex-col justify-center">
                  <motion.h3
                    className="font-cormorant text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-white tracking-[0.08em] mb-1 group-hover:text-gold-300 transition-colors duration-500 leading-none"
                    whileHover={{ letterSpacing: '0.12em' }}
                    transition={{ duration: 0.4 }}
                  >
                    {brand.name}
                  </motion.h3>

                  {/* Gold separator line */}
                  <div className="flex items-center gap-3 mb-5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '3rem' } : {}}
                      transition={{ duration: 0.8, delay: 0.5 + i * 0.15 }}
                      className={`h-px ${brand.lineColor}`}
                    />
                    <span className="font-dm text-gold-500/50 text-[9px] tracking-[0.45em] uppercase">
                      {brand.sub}
                    </span>
                  </div>

                  <p className="font-dm text-white/40 text-sm leading-relaxed mb-6">
                    {brand.desc}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="mt-auto pt-6 border-t border-white/[0.06]">
                  <p className="font-cormorant italic text-gold-500/50 text-sm group-hover:text-gold-500/70 transition-colors duration-400">
                    {brand.accent}
                  </p>
                </div>
              </div>

              {/* Bottom border reveal on hover */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-px ${brand.lineColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── STORY + STATS ───────────────────────────────────────────────────── */}
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

            {/* Brand logos strip */}
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
                  <div key={i} className="text-center group">
                    <div className="font-cormorant text-white/30 text-base tracking-[0.15em] group-hover:text-gold-400/70 transition-colors duration-400">
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
