import React from 'react';
import { Link } from 'react-router-dom';

function getLinkProps(href) {
  if (!href) return { Component: 'div', props: {} };
  if (href.startsWith('/')) return { Component: Link, props: { to: href } };
  return { Component: 'a', props: { href } };
}

export default function Card({ title, subtitle, children, href, image }) {
  const { Component, props } = getLinkProps(href);
  const hasImage = Boolean(image);

  const cardClassName = hasImage
    ? 'group relative block min-h-[230px] overflow-hidden rounded-2xl border border-navy-900/15 bg-navy-900 shadow-soft transition-colors'
    : 'group block rounded-2xl border border-navy-900/15 bg-white/40 backdrop-blur-sm shadow-soft transition-colors hover:bg-white/50';
  const titleClassName = hasImage
    ? 'font-medium tracking-tightish text-white'
    : 'text-ink-100 font-medium tracking-tightish';
  const subtitleClassName = hasImage ? 'mt-1 text-sm text-white/80' : 'mt-1 text-sm text-ink-200/80';
  const bodyClassName = hasImage ? 'mt-4 text-sm text-white/85' : 'mt-4 text-sm text-ink-200/80';
  const iconClassName =
    'grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 transition-colors group-hover:bg-white/10';
  const contentClassName = hasImage
    ? 'relative z-10 flex min-h-[230px] flex-col justify-between p-5 sm:p-6'
    : 'p-5 sm:p-6';

  return (
    <Component {...props} className={cardClassName}>
      {hasImage ? (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="service-card-overlay absolute inset-0" />
        </>
      ) : null}

      <div className={contentClassName}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className={titleClassName}>{title}</h3>
            {subtitle ? <p className={subtitleClassName}>{subtitle}</p> : null}
          </div>
          {!hasImage ? (
            <div className={iconClassName}>
              <span className="text-lg text-ink-100/90" aria-hidden="true">
                {'\u2197'}
              </span>
            </div>
          ) : null}
        </div>
        {children ? <div className={bodyClassName}>{children}</div> : null}
      </div>
    </Component>
  );
}
