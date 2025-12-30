import React from 'react';

/**
 * A generic section component with optional eyebrow, title and
 * arbitrary content.  It provides consistent spacing and typographic
 * treatments for top‑level sections throughout the site.
 */
export default function Section({ eyebrow, title, children, className = '' }) {
  return (
    <section className="relative pt-16 pb-16">
      <div className="mx-auto max-w-6xl">
        {eyebrow ? (
          <p className="text-ink-200/80 text-xs tracking-[0.18em] uppercase mb-3">
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2 className="font-serif tracking-tightish text-2xl sm:text-3xl lg:text-4xl text-ink-100">
            {title}
          </h2>
        ) : null}
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </section>
  );
}
