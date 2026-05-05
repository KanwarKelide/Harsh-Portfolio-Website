import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const CORE_SKILLS = [
  {
    name: 'Client Relationship',
    level: 95,
    description: 'Building long-term trust with HNI clients and influencers',
    icon: '◈',
  },
  {
    name: 'Cold Calling',
    level: 90,
    description: 'High-conversion outreach across volume and quality',
    icon: '◈',
  },
  {
    name: 'Negotiation',
    level: 88,
    description: 'Closing at premium prices without pressure tactics',
    icon: '◈',
  },
  {
    name: 'Lead Conversion',
    level: 85,
    description: 'Turning cold prospects into warm, qualified buyers',
    icon: '◈',
  },
  {
    name: 'Market Intelligence',
    level: 82,
    description: 'Deep knowledge of NCR luxury real estate landscape',
    icon: '◈',
  },
  {
    name: 'Deal Structuring',
    level: 87,
    description: 'Managing complex, multi-stage luxury transactions',
    icon: '◈',
  },
];

const SOFT_SKILLS = [
  { name: 'Communication', icon: '💬', desc: 'Articulate, confident, persuasive' },
  { name: 'Adaptability', icon: '⚡', desc: 'Thrives in fast-changing markets' },
  { name: 'Resilience', icon: '🛡️', desc: 'Bounces back from rejections stronger' },
  { name: 'Empathy', icon: '🎯', desc: 'Understands what clients truly want' },
  { name: 'Discipline', icon: '🥋', desc: 'Martial arts mindset applied to sales' },
  { name: 'Drive', icon: '🚀', desc: 'Intrinsically motivated, self-sufficient' },
];

function SkillBar({ skill, index, isInView }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !animated) {
      const timer = setTimeout(() => setAnimated(true), 200 + index * 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, index, animated]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
      className="group"
    >
      <div className="flex items-end justify-between mb-2.5">
        <div className="flex items-center gap-2.5">
          <span className="text-gold-500/50 text-xs group-hover:text-gold-500/80 transition-colors duration-300">
            {skill.icon}
          </span>
          <span className="font-dm text-white/75 text-sm font-medium group-hover:text-white transition-colors duration-300">
            {skill.name}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-cormorant text-gold-400 text-lg font-semibold">{skill.level}</span>
          <span className="font-dm text-gold-500/40 text-xs">%</span>
        </div>
      </div>

      <div className="relative h-px bg-white/[0.07] mb-2">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold-500 to-gold-400"
          initial={{ width: 0 }}
          animate={{ width: animated ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-1 h-3 bg-gold-400"
          initial={{ left: 0, opacity: 0 }}
          animate={{
            left: animated ? `${skill.level}%` : '0%',
            opacity: animated ? 1 : 0,
          }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginLeft: '-2px' }}
        />
      </div>

      <p className="font-dm text-white/30 text-[11px] leading-relaxed">{skill.description}</p>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref} className="relative py-32 lg:py-40 bg-obsidian-800 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />

      {/* Background graphic */}
      <div className="absolute right-0 bottom-0 w-96 h-96 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 400 400" fill="none">
          <path d="M200 20L380 380H20L200 20z" stroke="#C9A84C" strokeWidth="0.8" />
          <path d="M200 80L330 340H70L200 80z" stroke="#C9A84C" strokeWidth="0.8" />
          <path d="M200 140L280 300H120L200 140z" stroke="#C9A84C" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="section-tag"
          >
            <span>Sales Arsenal</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.08 }}
            className="font-cormorant text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white leading-[1.1]"
          >
            Built to Sell.
            <br />
            <em className="text-gold-400">Wired to Close.</em>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Progress bars */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-dm text-white/30 text-[10px] tracking-[0.3em] uppercase mb-8"
            >
              Core Sales Skills
            </motion.p>
            <div className="space-y-8">
              {CORE_SKILLS.map((skill, i) => (
                <SkillBar key={i} skill={skill} index={i} isInView={isInView} />
              ))}
            </div>
          </div>

          {/* Right — Soft skills + Philosophy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-dm text-white/30 text-[10px] tracking-[0.3em] uppercase mb-8"
            >
              Personal Strengths
            </motion.p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {SOFT_SKILLS.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.07 }}
                  className="p-4 bg-obsidian-700/30 border border-white/[0.04] hover:border-gold-500/15 hover:bg-gold-500/[0.02] transition-all duration-400 group"
                >
                  <div className="text-xl mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {skill.icon}
                  </div>
                  <div className="font-dm text-white/70 text-sm font-medium mb-1">{skill.name}</div>
                  <div className="font-dm text-white/30 text-xs">{skill.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Philosophy quote */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative p-7 bg-obsidian-900/60 border border-gold-500/15 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold-500/50 via-gold-500/20 to-transparent" />
              <div className="absolute -top-3 -left-1 font-cormorant text-gold-500/15 text-8xl font-bold leading-none select-none">
                "
              </div>
              <p className="font-cormorant italic text-white/65 text-xl leading-relaxed relative">
                Sales is not about convincing someone to buy what they don't need. It's about helping them realize they already want it.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-px bg-gold-500/50" />
                <span className="font-dm text-gold-500/60 text-[10px] tracking-[0.3em] uppercase">
                  Harsh Aryan
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
