import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Define a base set of slides if none are provided.  Each slide contains a
// tag (eyebrow), a title and a description.  These slides introduce the
// firm and its core practice areas.
const slidesBase = [
  {
    tag: 'Rizvi&Rizvi',
    title: 'Trusted counsel for complex matters.',
    desc: 'A Karachi-based firm providing legal services across key practice areas with a reputation built over decades.',
  },
  {
    tag: 'Core Practices',
    title: 'Taxation, Corporate & IP.',
    desc: 'Advising clients across taxation, corporate matters, intellectual property, and related commercial needs.',
  },
  {
    tag: 'Disputes',
    title: 'Arbitration & constitutional litigation.',
    desc: 'Representation in arbitration and constitutional matters with a focus on clarity, precision, and results.',
  },
  {
    tag: 'Transactions',
    title: 'Real estate, competition & conveyance.',
    desc: 'Guidance on property conveyance, antitrust/competition matters, and transactional execution to protect your interests.',
  },
];

function Dot({ active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`h-2.5 w-2.5 rounded-full transition-all ${
        active ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
      }`}
      aria-label="Go to slide"
    />
  );
}

/**
 * A simple carousel that cycles through a set of slides every few seconds.
 * Dots allow manual navigation.  Animations are powered by Framer Motion.
 */
export default function HeroCarousel({ slides = slidesBase }) {
  const [i, setI] = useState(0);

  const safeSlides = useMemo(() => (slides?.length ? slides : slidesBase), [slides]);

  // Automatically advance slides every 7 seconds
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % safeSlides.length), 7000);
    return () => clearInterval(t);
  }, [safeSlides.length]);

  const s = safeSlides[i];

  return (
    <section className="px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 shadow-soft overflow-hidden">
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs tracking-[0.18em] uppercase text-ink-200/80">{s.tag}</p>
              <div className="flex items-center gap-2">
                {safeSlides.map((_, idx) => (
                  <Dot key={idx} active={idx === i} onClick={() => setI(idx)} />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="mt-8"
              >
                <h1 className="font-serif tracking-tightish text-3xl sm:text-5xl lg:text-6xl text-ink-100 leading-[1.05]">
                  {s.title}
                </h1>
                <p className="mt-5 max-w-2xl text-ink-200/80 text-base sm:text-lg">{s.desc}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/services"
                    className="rounded-2xl border border-white/15 bg-white/10 hover:bg-white/15 transition-colors px-5 py-3 text-sm text-ink-100"
                  >
                    Explore Services
                  </a>
                  <a
                    href="/contact"
                    className="rounded-2xl border border-white/15 bg-transparent hover:bg-white/10 transition-colors px-5 py-3 text-sm text-ink-100"
                  >
                    Contact the Firm
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="h-px bg-white/10" />
          <div className="px-6 sm:px-10 lg:px-12 py-5 flex flex-wrap items-center gap-x-10 gap-y-2 text-xs text-ink-200/70">
            <span>Karachi, Pakistan</span>
            <span>Privately held</span>
            <span>11–50 employees</span>
          </div>
        </div>
      </div>
    </section>
  );
}
