import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// Import slideshow images. These are placed in the assets folder and used as
// backgrounds for the carousel slides. If you add more images, import them here.
// Import six unique photographs for the hero carousel.  These files are cropped
// from the user‑provided collage and skyline images and placed under the
// assets folder.  Using meaningful variable names helps keep track of which
// image corresponds to which slide.
import slide1 from '../assets/Slideshow.jpg';
import slide2 from '../assets/Slideshow2.jpg';
import slide3 from '../assets/Slideshow3.jpg';
import slide4 from '../assets/Slideshow4.jpg';
import slide5 from '../assets/Slideshow5.jpg';
import slide6 from '../assets/Slideshow6.jpg';

// Extend the default slides to include images and more vibrant messages.  Each
// slide now specifies an optional `image` property which, when present, will be
// displayed as a full‑bleed background behind the text content.  If you wish to
// add further slides simply import additional images above and add objects here.
// Redefine the default slide set to leverage the user‑provided photos.  Each
// object associates an imported image with a tag, title and description.
const slidesBase = [
  {
    image: slide1,
    tag: 'Multi-Disciplinary Law Firm',
    title: 'Modern legal practice, timeless values.',
    desc: 'Delivering trusted counsel and innovative solutions across corporate, tax and IP law.',
  },
  {
    image: slide2,
    tag: '50+ Years of Service',
    title: 'Guiding individuals and businesses to success.',
    desc: 'From startups to established enterprises, we steer your legal strategy.',
  },
  {
    image: slide3,
    tag: 'Professionalism',
    title: 'Building with integrity.',
    desc: 'We will help you every step of the way.',
  },
  {
    image: slide4,
    tag: 'Insight',
    title: 'Wisdom you can trust.',
    desc: 'Drawing on decades of experience across our diverse practice areas.',
  },
  {
    image: slide5,
    tag: 'Urban View',
    title: 'At the heart of the city that never sleeps',
    desc: 'We reflect the dynamism and ambition of our clients.’ ventures.',
  },
  {
    image: slide6,
    tag: 'Partnership',
    title: 'Relationships matter.',
    desc: 'We believe strong partnerships are the foundation of success.',
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
          {/* Use a maroon tinted backdrop instead of dark ink to evoke the leather texture seen on vellani.com */}
          <div className="relative z-10 bg-maroon-800/60 backdrop-blur-sm">
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
                    <Link
                      to="/services"
                      className="rounded-2xl border border-white/15 bg-white/10 hover:bg-white/15 transition-colors px-5 py-3 text-sm text-ink-100"
                    >
                      Explore Services
                    </Link>
                    <Link
                      to="/contact"
                      className="rounded-2xl border border-white/15 bg-transparent hover:bg-white/10 transition-colors px-5 py-3 text-sm text-ink-100"
                    >
                      Contact the Firm
                    </Link>
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
