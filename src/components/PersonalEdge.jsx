import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TRAITS = [
  {
    emoji: '🥋',
    title: 'Karate Champion',
    tag: 'Discipline',
    color: 'from-amber-500/10 to-orange-500/5',
    borderColor: 'border-amber-500/20',
    tagColor: 'text-amber-400/80',
    description:
      'Multiple medals in karate. The dojo taught him what no boardroom can — patience, precision, and the relentless ability to absorb pressure and strike at exactly the right moment.',
    salesLink: 'In sales: Every cold call is a sparring match. He doesn\'t flinch.',
  },
  {
    emoji: '🎤',
    title: 'Passionate Singer',
    tag: 'Charisma',
    color: 'from-purple-500/10 to-pink-500/5',
    borderColor: 'border-purple-500/20',
    tagColor: 'text-purple-400/80',
    description:
      'Music is emotion delivered with intention. Singing trained his voice, his rhythm, and his ability to hold a room — skills that translate directly to high-stakes client conversations.',
    salesLink: 'In sales: He knows when to speak, when to pause, and when to close.',
  },
  {
    emoji: '🤝',
    title: 'Social Worker',
    tag: 'Character',
    color: 'from-green-500/10 to-emerald-500/5',
    borderColor: 'border-green-500/20',
    tagColor: 'text-green-400/80',
    description:
      'Community service isn\'t just a line on a resume. It built the empathy and perspective to understand people beyond their wallets — making him a better advisor, not just a better salesperson.',
    salesLink: 'In sales: Clients sense authenticity. He earns trust, not just deals.',
  },
];

export default function PersonalEdge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 lg:py-40 bg-obsidian-800 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/8 to-transparent" />

      {/* BG elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.015] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 50%, #C9A84C 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center lg:justify-start gap-4 mb-6"
          >
            <div className="w-10 h-px bg-gold-500" />
            <span className="font-dm text-gold-500 text-[10px] tracking-[0.4em] uppercase">Beyond Sales</span>
            <div className="w-10 h-px bg-gold-500 hidden lg:block" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.08 }}
            className="font-cormorant text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white leading-[1.1] max-w-2xl mx-auto lg:mx-0"
          >
            The Person Behind
            <br />
            <em className="text-gold-400">the Closer.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="font-dm text-white/40 text-sm leading-relaxed max-w-xl mx-auto lg:mx-0 mt-5"
          >
            Great salespeople aren't built in training rooms. They're shaped by everything they've
            lived — the discipline, the art, the calling.
          </motion.p>
        </div>

        {/* Trait cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {TRAITS.map((trait, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              className={`relative group bg-gradient-to-b ${trait.color} border ${trait.borderColor} hover:border-opacity-60 p-8 transition-all duration-500 hover:-translate-y-1 cursor-default overflow-hidden`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gold-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Emoji */}
                <motion.div
                  className="text-4xl mb-4 block"
                  animate={{ rotate: [0, -3, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 4 + i * 0.7, ease: 'easeInOut', delay: i * 0.5 }}
                >
                  {trait.emoji}
                </motion.div>

                {/* Tag */}
                <span className={`font-dm text-[9px] tracking-[0.35em] uppercase ${trait.tagColor} mb-3 block`}>
                  {trait.tag}
                </span>

                {/* Title */}
                <h3 className="font-cormorant text-white text-2xl font-semibold mb-4 group-hover:text-gold-300 transition-colors duration-300">
                  {trait.title}
                </h3>

                {/* Description */}
                <p className="font-dm text-white/50 text-sm leading-[1.75] mb-5">
                  {trait.description}
                </p>

                {/* Sales connection */}
                <div className="pt-5 border-t border-white/[0.07]">
                  <p className="font-cormorant italic text-gold-400/70 text-sm leading-relaxed">
                    {trait.salesLink}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 border border-gold-500/15 bg-gold-500/[0.03]">
            <span className="font-cormorant text-gold-400/70 italic text-base">
              Disciplined. Charismatic. Driven.
            </span>
            <div className="w-px h-5 bg-gold-500/30" />
            <span className="font-dm text-white/30 text-[10px] tracking-[0.3em] uppercase">
              The Complete Package
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
