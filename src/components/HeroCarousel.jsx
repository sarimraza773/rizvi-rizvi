import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';


const slidesBase = [
  {
    tag: 'Experience',
    title: 'Law firm expertise for modern clients.',
    desc: 'Your partner in complex legal matters, delivering strategic advice with precision.',
    image: slide1,
  },
  {
    tag: 'Integrity',
    title: 'Trusted counsel for businesses.',
    desc: 'Committed to delivering results and protecting your interests at every step.',
    image: slide2,
  },
  {
    tag: 'Innovation',
    title: 'Forward‑thinking legal solutions.',
    desc: 'Navigating complex challenges with agility and insight.',
    image: slide1,
  },
  {
    tag: 'Community',
    title: 'Dedicated to our community.',
    desc: 'Supporting non‑profits and social initiatives with passion.',
    image: slide2,
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
        <div className="relative rounded-3xl border border-white/10 shadow-soft overflow-hidden">
          {/* Background image layer */}
          {s.image ? (
            <img
              src={s.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : null}
          {/* Content overlay with translucent backdrop */}
          <div className="relative z-10 bg-ink-950/50 backdrop-blur-sm">
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
                  <p className="mt-5 max-w-2xl text-ink-200/80 text-base sm:text-lg">
                    {s.desc}
                  </p>
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
      </div>
    </section>
  );
}
