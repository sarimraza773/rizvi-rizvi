import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import slide1 from '../assets/slideshow.jpg';
import slide2 from '../assets/slideshow2.jpg';
import slide5 from '../assets/slideshow5.jpg';

const slidesBase = [
  {
    image: slide1,
    tag: 'Global Reach',
    title: 'Modern legal practice, timeless values.',
    desc: 'Delivering trusted counsel and innovative solutions across corporate, tax and IP law.',
  },
  {
    image: slide2,
    tag: 'Client-first',
    title: 'Precision, clarity, outcomes.',
    desc: 'A client-first approach with clear communication and practical results.',
  },
  {
    image: slide5,
    tag: 'Trusted Counsel',
    title: 'At the heart of the city.',
    desc: 'We reflect the dynamism and ambition of our clients’ ventures.',
  },
];

function Dot({ active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-2.5 w-2.5 rounded-full transition-all ${
        active ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
      }`}
      aria-label="Go to slide"
    />
  );
}

export default function HeroCarousel({ slides = slidesBase }) {
  const [i, setI] = useState(0);

  const safeSlides = useMemo(() => (slides?.length ? slides : slidesBase), [slides]);

  useEffect(() => {
    if (!safeSlides.length) return undefined;
    const t = setInterval(() => setI((v) => (v + 1) % safeSlides.length), 7000);
    return () => clearInterval(t);
  }, [safeSlides.length]);

  const s = safeSlides[i] ?? safeSlides[0];

  return (
    <section className="px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14">
      <div className="mx-auto max-w-6xl">
        {/* FIX: lock carousel height so slides never change size */}
        <div className="relative rounded-3xl border border-white/10 shadow-soft overflow-hidden h-[360px] sm:h-[420px] lg:h-[460px]">
          {s?.image ? (
            <img src={s.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
          ) : null}

          {/* Fill full height so text wrapping doesn’t change container size */}
          <div className="relative z-10 h-full bg-white/60 backdrop-blur-sm">
            <div className="p-6 sm:p-10 lg:p-12 h-full flex flex-col">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs text-ink-200/70">
                  {s?.tag ?? ''}
                </span>

                <div className="flex items-center gap-2">
                  {safeSlides.map((_, idx) => (
                    <Dot key={idx} active={idx === i} onClick={() => setI(idx)} />
                  ))}
                </div>
              </div>

              <div className="mt-7 sm:mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:gap-12 flex-1">
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl text-ink-100 font-sans font-semibold tracking-tightish leading-[1.02]">
                    {s?.title ?? ''}
                  </h1>
                  <p className="mt-4 text-ink-200/80 max-w-2xl">
                    {s?.desc ?? ''}
                  </p>

                  <div className="mt-8 flex items-center gap-3 flex-wrap">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center rounded-xl bg-navy-900 text-white px-6 py-3 text-sm font-medium hover:bg-navy-800 transition-colors"
                    >
                      Get in touch
                    </Link>
                    <Link
                      to="/services"
                      className="inline-flex items-center justify-center rounded-xl bg-white/15 text-ink-100 px-6 py-3 text-sm font-medium hover:bg-white/20 transition-colors"
                    >
                      Explore services
                    </Link>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
                  <p className="text-xs tracking-[0.18em] uppercase text-ink-200/80">Featured</p>
                  <p className="mt-3 text-sm text-ink-100">
                    Counsel that moves at the speed of business.
                  </p>
                  <p className="mt-2 text-sm text-ink-200/80">
                    A client-first approach with clear communication and practical outcomes.
                  </p>

                  <div className="mt-6 rounded-xl bg-white/10 p-4">
                    <div className="grid grid-cols-2 gap-3 text-xs text-ink-200/80">
                      <span>Karachi, Pakistan</span>
                      <span>Privately held</span>
                      <span>11–50 employees</span>
                      <span />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
