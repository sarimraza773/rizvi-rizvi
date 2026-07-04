import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const nav = [
  { to: '/', label: 'Home' },
  { to: '/team', label: 'Team' },
  { to: '/services', label: 'Services' },
  { to: '/non-profit', label: 'Pro Bono' },
  { to: '/affiliations', label: 'Affiliations' },
  { to: '/contact', label: 'Contact' },
  { to: '/about', label: 'About Us' },
  { to: '/useful-links', label: 'Resources' },
];

function NavButton({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          'whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors',
          'border border-white/20',
          isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-white/90 hover:bg-white/15',
        ].join(' ')
      }
    >
      {label}
    </NavLink>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-navy-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="hidden font-serif text-lg text-white tracking-tightish sm:inline sm:text-xl">
            Rizvi&ivziЯ
          </span>
          <NavLink to="/" className="flex min-w-0 items-center gap-3">
            <img
              src={logo}
              alt="FederalCorporation logo"
              width="36"
              height="36"
              decoding="async"
              className="h-9 w-9 rounded-full object-contain"
            />
            <span className="truncate font-serif text-lg text-white tracking-tightish sm:text-xl">
              FedCorp
            </span>
          </NavLink>
        </div>

        <a
          href="tel:+9236316677"
          className="shrink-0 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-white/15 transition-colors sm:px-5 sm:tracking-[0.14em]"
        >
          Call Now
        </a>
      </div>

      <div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-3">
          <nav className="flex justify-start gap-2 overflow-x-auto pb-1 sm:justify-center sm:pb-0">
            {nav.map((n) => (
              <NavButton key={n.to} to={n.to} label={n.label} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
