import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote:
      'Harsh has an extraordinary ability to understand what a high-net-worth client truly wants. He doesn\'t just sell properties — he sells a vision of living. Rarely do you find someone this sharp at 24.',
    author: 'Senior Sales Partner',
    company: 'Star Estates',
    initials: 'SP',
    relation: 'Direct Manager',
  },
  {
    quote:
      'His follow-up game is unmatched. From the first call to the final signature, Harsh made the entire journey feel effortless. He anticipated every question before I asked. That\'s a rare quality in luxury real estate.',
    author: 'Private Investor',
    company: 'Sector 150, Noida',
    initials: 'PI',
    relation: 'Satisfied Client',
  },
  {
    quote:
      'What sets Harsh apart is preparation. He walks into every meeting knowing the market, knowing the product, and knowing the buyer. He doesn\'t guess — he knows. That\'s why clients trust him.',
    author: 'Industry Mentor',
    company: 'NCR Real Estate Circle',
    initials: 'IM',
    relation: 'Industry Senior',
  },
  {
    quote:
      'In three months, Harsh generated more qualified leads than most executives manage in a year. His energy, communication, and persistence are elite. He\'s going to be one of the top closers in this country.',
    author: 'Director of Sales',
    company: 'Star Estates',
    initials: 'DS',
    relation: 'Team Leadership',
  },
];

function QuoteIcon() {
  return (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
      <path
        d="M0 24V14.4C0 10.4 1.06667 7.06667 3.2 4.4C5.33333 1.6 8.26667 0 12 0L13.6 2.8C11.2 3.46667 9.33333 4.8 8 6.8C6.66667 8.8 6 11.0667 6 13.6H12V24H0ZM18.4 24V14.4C18.4 10.4 19.4667 7.06667 21.6 4.4C23.7333 1.6 26.6667 0 30.4 0L32 2.8C29.6 3.46667 27.7333 4.8 26.4 6.8C25.0667 8.8 24.4 11.0667 24.4 13.6H30.4V24H18.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} className="relative py-32 lg:py-40 bg-obsidian-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />

      {/* Background radial */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-gold-500/[0.025] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-10 h-px bg-gold-500" />
            <span className="font-dm text-gold-500 text-[10px] tracking-[0.4em] uppercase">Social Proof</span>
            <div className="w-10 h-px bg-gold-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.08 }}
            className="font-cormorant text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white leading-[1.1]"
          >
            What the Industry
            <br />
            <em className="text-gold-400">Says About Him.</em>
          </motion.h2>
        </div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative max-w-4xl mx-auto gold-border-card p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
            <div className="absolute top-8 left-8 text-gold-500/12">
              <QuoteIcon />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-cormorant text-white/80 text-xl md:text-2xl leading-[1.6] italic mb-8 relative z-10">
                  "{TESTIMONIALS[active].quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 border border-gold-500/40 flex items-center justify-center bg-gold-500/[0.06] flex-shrink-0">
                    <span className="font-cormorant text-gold-400 font-semibold text-sm">
                      {TESTIMONIALS[active].initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-dm text-white/80 text-sm font-medium">{TESTIMONIALS[active].author}</p>
                    <p className="font-dm text-gold-500/60 text-xs mt-0.5">{TESTIMONIALS[active].relation} · {TESTIMONIALS[active].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Navigation tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex justify-center gap-3 mb-16"
        >
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 ${
                i === active
                  ? 'w-8 h-1 bg-gold-500'
                  : 'w-3 h-1 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </motion.div>

        {/* Trust indicators */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: '🏆', title: 'Top Performer', desc: 'Consistently in top percentile of quarterly targets' },
            { icon: '🤝', title: 'HNI Network', desc: 'Active relationships with high-net-worth decision makers' },
            { icon: '📞', title: '500+ Calls', desc: 'High-volume outreach with above-average conversion rate' },
            { icon: '⭐', title: 'Client Referrals', desc: 'Repeat and referral business from satisfied clients' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              className="p-5 bg-obsidian-800/40 border border-white/[0.05] hover:border-gold-500/15 transition-all duration-400 group text-center"
            >
              <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="font-cormorant text-white text-base font-semibold mb-2">{item.title}</h4>
              <p className="font-dm text-white/35 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
