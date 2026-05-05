import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ROLE_HIGHLIGHTS = [
  'Cold calling and high-volume pipeline development for ultra-luxury residential projects',
  'End-to-end relationship management with high-net-worth clients and serious investors',
  'Lead generation through digital outreach, site visits, referral networks, and strategic follow-ups',
  'Driving sales for Jacob & Co and Elie Saab branded luxury residences in NCR',
  'Converting qualified prospects into closed deals through consultative, trust-based selling',
  'Developing deep market knowledge across Noida\'s premium real estate landscape',
];

const STORY_CARDS = [
  {
    number: '01',
    title: 'From First Call to First Trust',
    description:
      'Every HNI deal starts with a cold call that lands differently — because Harsh researches before he dials. He speaks to lifestyle, not just square footage.',
    accent: 'Cold Calling',
  },
  {
    number: '02',
    title: 'The Art of the Follow-Up',
    description:
      'Most leads die in silence. Not his. Structured follow-ups, site visit preparation, and genuine interest in client goals keeps pipelines alive and closing.',
    accent: 'Pipeline Management',
  },
  {
    number: '03',
    title: 'Closing in the Luxury Lane',
    description:
      'Ultra-luxury buyers don\'t respond to pressure — they respond to authority and empathy. Harsh has learned to deliver both, every single time.',
    accent: 'Deal Closing',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={ref} className="relative py-32 lg:py-40 bg-obsidian-800 overflow-hidden">
      {/* Subtle gradient top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/8 to-transparent" />

      {/* BG decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-gold-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="section-tag"
          >
            <span>Experience</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.08 }}
            className="font-cormorant text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white leading-[1.1] max-w-2xl"
          >
            Where Ambition Meets
            <br />
            <em className="text-gold-400">Ultra-Luxury Markets.</em>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left — Role details */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative gold-border-card p-8 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold-500/60 via-gold-500/20 to-transparent" />

              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="font-dm text-[9px] tracking-[0.4em] uppercase text-gold-500/60 mb-2">Current Role</div>
                  <h3 className="font-cormorant text-white text-2xl font-semibold">Star Estates</h3>
                  <p className="font-dm text-gold-400 text-[11px] tracking-[0.2em] uppercase mt-1.5">
                    Sales Executive
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-green-400/10 border border-green-400/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-dm text-green-400 text-[9px] tracking-widest uppercase">Active</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {[
                  { icon: '📍', text: 'Noida, India (NCR)' },
                  { icon: '📅', text: '2024 — Present' },
                  { icon: '🏢', text: 'Ultra-Luxury Segment' },
                  { icon: '🎓', text: 'MBA Marketing & Sales' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs">{item.icon}</span>
                    <span className="font-dm text-white/45 text-xs">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/[0.06] pt-6">
                <p className="font-dm text-white/30 text-[9px] tracking-[0.35em] uppercase mb-3">Key Brands</p>
                <div className="space-y-2">
                  {['Jacob & Co Residences', 'Elie Saab Villas', 'Star Estates Premium'].map((brand) => (
                    <div key={brand} className="flex items-center gap-2">
                      <div className="w-4 h-px bg-gold-500/50" />
                      <span className="font-cormorant text-gold-400/70 italic text-sm">{brand}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Highlights & story cards */}
          <div className="lg:col-span-3 space-y-6">
            {/* Responsibilities */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="bg-obsidian-700/30 border border-white/[0.05] p-7"
            >
              <h4 className="font-dm text-white/40 text-[10px] tracking-[0.35em] uppercase mb-5">What I Do</h4>
              <div className="space-y-3">
                {ROLE_HIGHLIGHTS.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-5 h-px bg-gold-500/40 mt-[11px] flex-shrink-0 group-hover:w-8 group-hover:bg-gold-500 transition-all duration-300" />
                    <p className="font-dm text-white/55 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                      {highlight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Story cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {STORY_CARDS.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.5 + i * 0.1 }}
                  className="bg-obsidian-700/20 border border-white/[0.04] p-5 hover:border-gold-500/15 hover:bg-gold-500/[0.02] transition-all duration-400 group"
                >
                  <div className="font-cormorant text-gold-500/25 text-3xl font-light mb-3 group-hover:text-gold-500/40 transition-colors">
                    {card.number}
                  </div>
                  <div className="font-dm text-[9px] tracking-[0.3em] uppercase text-gold-500/60 mb-2">{card.accent}</div>
                  <h4 className="font-cormorant text-white text-base font-medium mb-2 leading-snug">{card.title}</h4>
                  <p className="font-dm text-white/40 text-xs leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
