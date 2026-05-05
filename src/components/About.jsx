import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedCounter({ end, suffix = '', duration = 2200 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime = null;
    const start = 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * (end - start) + start));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    };

    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const STORY_PARAS = [
  "At 24, most people are still figuring out their career path. Harsh Aryan is already closing high-value real estate deals for India's ultra-luxury market.",
  "From Amity Business School's marketing halls to the boardrooms of Star Estates — the transition was deliberate, disciplined, and driven by one obsession: mastering the art of the close.",
  "Working with brands like Jacob & Co and Elie Saab, his role isn't just sales. It's trust architecture — understanding what a high-net-worth individual truly wants and delivering beyond expectation.",
  "Cold calls answered at 8AM. Site visits closed by evening. Referrals building themselves. This is what peak performance looks like at 24.",
];

const STATS = [
  { value: 50, suffix: '+', label: 'Deals Facilitated', sub: 'High-value transactions' },
  { value: 200, suffix: '+', label: 'HNI Clients', sub: 'High-net-worth conversations' },
  { value: 15, suffix: '+', label: 'Luxury Projects', sub: 'Premium portfolio' },
  { value: 24, suffix: '', label: 'Years Young', sub: 'Closing crore deals' },
];

const BRANDS = ['Jacob & Co', 'Elie Saab', 'Star Estates'];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="relative py-32 lg:py-40 bg-obsidian-900 overflow-hidden">
      {/* Background geometric accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid-about" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#C9A84C" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-about)" />
        </svg>
      </div>
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-gold-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — Story narrative */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="section-tag"
            >
              <span>The Story</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.08 }}
              className="font-cormorant text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white leading-[1.1] mb-10"
            >
              Not Just a Sales Guy.
              <br />
              <em className="text-gold-400">A Closer.</em>
            </motion.h2>

            <div className="space-y-5">
              {STORY_PARAS.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.14 + i * 0.1 }}
                  className="font-dm text-white/55 text-[15px] leading-[1.8] font-light"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* MBA Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 flex items-start gap-5 p-5 border border-gold-500/15 bg-gold-500/[0.03]"
            >
              <div className="w-10 h-10 border border-gold-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="font-dm text-white/80 text-sm font-medium">MBA — Marketing & Sales</p>
                <p className="font-cormorant text-gold-400 italic text-base mt-0.5">Amity Business School, 2026</p>
                <p className="font-dm text-white/35 text-xs mt-1 tracking-wider">Consumer Psychology · Sales Strategy · Brand Management</p>
              </div>
            </motion.div>

            {/* Brand badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-8"
            >
              <p className="font-dm text-white/30 text-[10px] tracking-[0.3em] uppercase mb-4">Working with</p>
              <div className="flex flex-wrap gap-3">
                {BRANDS.map((brand) => (
                  <span
                    key={brand}
                    className="px-4 py-2 border border-gold-500/20 text-gold-400/70 font-cormorant italic text-sm tracking-wider hover:border-gold-500/40 hover:text-gold-400 transition-all duration-300"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Stats */}
          <div className="lg:pt-14">
            {/* Profile card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative mb-8 gold-border-card p-7 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />

              <div className="flex items-center gap-5 mb-6">
                <div className="relative w-[72px] h-[72px] flex-shrink-0">
                  <div className="absolute inset-0 border border-gold-500/30 bg-obsidian-700/80 flex items-center justify-center">
                    <span className="font-cormorant text-gold-400 text-2xl font-light">HA</span>
                  </div>
                  <div className="absolute -inset-1 border border-gold-500/10" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400/80 border-2 border-obsidian-900" />
                </div>
                <div>
                  <h3 className="font-cormorant text-white text-2xl font-semibold">Harsh Aryan</h3>
                  <p className="font-dm text-gold-500 text-[10px] tracking-[0.25em] uppercase mt-1">Real Estate Sales Executive</p>
                  <p className="font-dm text-white/35 text-xs mt-0.5">Star Estates · Noida, India</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Cold Calling', 'Lead Generation', 'Deal Closing', 'HNI Relations', 'Luxury Segment'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gold-500/[0.06] border border-gold-500/15 text-gold-400/75 font-dm text-[10px] tracking-[0.15em] uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Animated Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.35 + i * 0.1 }}
                  className="bg-obsidian-800/40 border border-white/[0.05] p-6 hover:border-gold-500/20 hover:bg-gold-500/[0.03] transition-all duration-400 group cursor-default"
                >
                  <div className="font-cormorant text-[2.4rem] font-semibold leading-none mb-2 text-gold-400 group-hover:text-gold-300 transition-colors">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-dm text-white/75 text-sm font-medium">{stat.label}</div>
                  <div className="font-dm text-white/28 text-[11px] mt-1 tracking-wide">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
