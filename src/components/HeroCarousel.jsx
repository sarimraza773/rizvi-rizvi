import React, { useEffect, useMemo, useState } from 'react';
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
    desc: "We reflect the dynamism and ambition of our clients' ventures.",
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
    const timer = setInterval(() => setI((value) => (value + 1) % safeSlides.length), 7000);
    return () => clearInterval(timer);
  }, [safeSlides.length]);

  const slide = safeSlides[i] ?? safeSlides[0];

  return (
    <section className="px-4 pt-10 sm:px-6 sm:pt-14 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="relative min-h-[640px] overflow-hidden rounded-3xl border border-white/10 shadow-soft sm:min-h-[520px] lg:h-[460px] lg:min-h-0">
          {slide?.image ? (
            <img
              key={slide.image}
              src={slide.image}
              alt=""
              width="1200"
              height="600"
              decoding="async"
              className="hero-slide absolute inset-0 h-full w-full object-cover"
            />
          ) : null}

          <div className="relative z-10 h-full bg-white/60 backdrop-blur-sm">
            <div className="flex h-full flex-col p-6 sm:p-10 lg:p-12">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs text-ink-200/70">
                  {slide?.tag ?? ''}
                </span>

                <div className="flex items-center gap-2">
                  {safeSlides.map((_, idx) => (
                    <Dot key={idx} active={idx === i} onClick={() => setI(idx)} />
                  ))}
                </div>
              </div>

              <div
                key={slide.title}
                className="hero-copy mt-7 grid flex-1 gap-6 sm:mt-10 sm:gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:gap-12"
              >
                <div>
                  <h1 className="font-sans text-3xl font-semibold leading-[1.06] tracking-tightish text-ink-100 sm:text-5xl sm:leading-[1.02] lg:text-6xl">
                    {slide?.title ?? ''}
                  </h1>
                  <p className="mt-4 max-w-2xl text-ink-200/80">{slide?.desc ?? ''}</p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center rounded-xl bg-navy-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-800"
                    >
                      Get in touch
                    </Link>
                    <Link
                      to="/services"
                      className="inline-flex items-center justify-center rounded-xl bg-white/15 px-6 py-3 text-sm font-medium text-ink-100 transition-colors hover:bg-white/20"
                    >
                      Explore services
                    </Link>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-5 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-ink-200/80">Featured</p>
                  <p className="mt-3 text-sm text-ink-100">
                    Counsel that moves at the speed of business.
                  </p>
                  <p className="mt-2 text-sm text-ink-200/80">
                    A client-first approach with clear communication and practical outcomes.
                  </p>

                  <div className="mt-6 rounded-xl bg-white/10 p-4">
                    <div className="grid grid-cols-1 gap-3 text-xs text-ink-200/80 sm:grid-cols-2">
                      <span>Karachi, Pakistan</span>
                      <span>Privately held</span>
                      <span>11-50 employees</span>
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
