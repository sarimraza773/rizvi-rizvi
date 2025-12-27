import React from 'react';
import { Link } from 'react-router-dom';

/**
 * A simple card component used to display a small block of content with
 * an optional link.  Cards have a subtle backdrop blur and a hover
 * effect that slightly brightens the background.
 */
export default function Card({ title, subtitle, children, href }) {

  const Wrap = href && href.startsWith('/') ? Link : href ? 'a' : 'div';

  const linkProps = {};
  if (href) {
    if (href.startsWith('/')) linkProps.to = href;
    else linkProps.href = href;
  }
  return (
    <Wrap
      {...linkProps}
      className="group block rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-soft hover:bg-white/7 transition-colors"
    >
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-ink-100 font-medium tracking-tightish">{title}</h3>
            {subtitle ? (
              <p className="mt-1 text-sm text-ink-200/80">{subtitle}</p>
            ) : null}
          </div>
          <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 grid place-items-center group-hover:bg-white/10 transition-colors">
            <span className="text-ink-100/90 text-lg">↗</span>
          </div>
        </div>
        {children ? (
          <div className="mt-4 text-sm text-ink-200/80">{children}</div>
        ) : null}
      </div>
    </Wrap>
  );
}
