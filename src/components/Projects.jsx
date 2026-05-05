import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const PROJECTS = [
  {
    id: 1,
    brand: 'Jacob & Co',
    title: 'Residences at The Time',
    location: 'Sector 128, Noida',
    type: 'Ultra-Luxury Residential',
    tag: 'Sold',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=85',
    price: 'Starting ₹12Cr',
    beds: '4–6 BHK',
    area: '5,000–9,500 sq.ft',
    description:
      'Where the world\'s most iconic watchmaker meets architecture. Private lobbies, concierge services, and interiors that feel like wearing a Jacob & Co timepiece — impossibly precise, impossibly luxurious.',
    highlights: ['Private elevator lobbies', 'Climate-controlled wine rooms', 'Panoramic NCR skyline views'],
  },
  {
    id: 2,
    brand: 'Elie Saab',
    title: 'Villas by Elie Saab',
    location: 'Sector 150, Noida',
    type: 'Signature Villas',
    tag: 'Featured',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=85',
    price: 'Starting ₹18Cr',
    beds: '5–7 BHK',
    area: '8,000–14,000 sq.ft',
    description:
      'Fashion\'s most celebrated name, now written in marble and glass. Each villa embodies Elie Saab\'s signature — sculptural silhouettes, cascading light, and a permanent air of haute couture.',
    highlights: ['Infinity pool with NCR views', 'Private home theatre', 'Couture-inspired interiors'],
  },
  {
    id: 3,
    brand: 'Star Estates',
    title: 'The Sky Penthouse Collection',
    location: 'Noida Expressway',
    type: 'Duplex Penthouses',
    tag: 'New Launch',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=85',
    price: 'Starting ₹8Cr',
    beds: '3–5 BHK',
    area: '3,500–7,000 sq.ft',
    description:
      'Above the city. Below the stars. Duplex penthouses with triple-height ceilings, private terraces, and a living experience designed for those who demand more from every dimension.',
    highlights: ['Private rooftop terrace', 'Triple-height living room', 'Smart home integration'],
  },
];

function ProjectCard({ project, index, isInView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.15 + index * 0.15 }}
      className="group relative overflow-hidden bg-obsidian-800 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/30 to-transparent" />
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gold-500/10"
        />

        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span className={`font-dm text-[9px] tracking-[0.3em] uppercase px-3 py-1.5 ${
            project.tag === 'Sold'
              ? 'bg-green-900/80 text-green-400 border border-green-400/30'
              : project.tag === 'Featured'
              ? 'bg-gold-500/90 text-obsidian-900'
              : 'bg-obsidian-900/80 text-gold-400 border border-gold-500/30'
          }`}>
            {project.tag}
          </span>
        </div>

        {/* Brand label */}
        <div className="absolute top-4 right-4">
          <span className="font-cormorant italic text-white/60 text-sm tracking-wider bg-obsidian-900/60 backdrop-blur-sm px-3 py-1">
            {project.brand}
          </span>
        </div>

        {/* Hover overlay with highlights */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 right-4"
            >
              <div className="bg-obsidian-900/90 backdrop-blur-sm border border-gold-500/20 p-4">
                <p className="font-dm text-white/40 text-[9px] tracking-[0.3em] uppercase mb-2">Highlights</p>
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-px bg-gold-500/60" />
                    <span className="font-dm text-white/65 text-xs">{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card content */}
      <div className="p-6 border border-t-0 border-white/[0.05] group-hover:border-gold-500/15 transition-colors duration-400">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="font-dm text-gold-500/60 text-[9px] tracking-[0.35em] uppercase mb-1">{project.type}</p>
            <h3 className="font-cormorant text-white text-xl font-semibold group-hover:text-gold-300 transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          <div className="text-right">
            <p className="font-cormorant text-gold-400 text-lg font-semibold">{project.price}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-gold-500/50">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span className="font-dm text-white/35 text-xs">{project.location}</span>
        </div>

        <p className="font-dm text-white/45 text-sm leading-relaxed mb-5 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
          <div className="flex gap-4">
            <span className="font-dm text-white/40 text-xs">{project.beds}</span>
            <span className="w-px h-4 bg-white/10 self-center" />
            <span className="font-dm text-white/40 text-xs">{project.area}</span>
          </div>
          <motion.div
            className="w-8 h-8 border border-gold-500/30 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="group-hover:[&_path]:stroke-obsidian-900 transition-colors">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref} className="relative py-32 lg:py-40 bg-obsidian-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />

      {/* Corner accent */}
      <div className="absolute top-20 right-0 w-64 h-64 opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="150" cy="50" r="140" stroke="#C9A84C" strokeWidth="0.5" />
          <circle cx="150" cy="50" r="100" stroke="#C9A84C" strokeWidth="0.5" />
          <circle cx="150" cy="50" r="60" stroke="#C9A84C" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="section-tag"
            >
              <span>Luxury Portfolio</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.08 }}
              className="font-cormorant text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white leading-[1.1]"
            >
              Projects That Speak
              <br />
              <em className="text-gold-400">at a Luxury Frequency.</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-dm text-white/40 text-sm leading-relaxed max-w-xs lg:text-right lg:mb-1"
          >
            Curated selection from the ultra-luxury segment — where every square foot tells a story.
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500/20" />
          <p className="font-cormorant italic text-white/30 text-base text-center">
            "Every client I meet deserves to live beautifully."
          </p>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500/20" />
        </motion.div>
      </div>
    </section>
  );
}
