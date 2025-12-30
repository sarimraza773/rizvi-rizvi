import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const nav = [
  { to: '/', label: 'Home' },
  { to: '/team', label: 'Team' },
  { to: '/services', label: 'Services' },
  { to: '/non-profit', label: 'Non-Profit' },
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
    <header className="sticky top-0 z-50 bg-navy-900 border-b border-white/10">
      {/* Top row: logo + call-to-action */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="Rizvi&Rizvi logo" className="h-9 w-9 rounded-full object-contain" />
          <span className="font-serif text-xl text-white tracking-tightish">Rizvi&Rizvi</span>
        </NavLink>

        <a
          href="tel:+92212345678"
          className="rounded-xl border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white hover:bg-white/15 transition-colors"
        >
          Call Now
        </a>
      </div>

      {/* Second row: navigation buttons */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-3">
          <nav className="flex justify-center gap-2 overflow-x-auto">
            {nav.map((n) => (
              <NavButton key={n.to} to={n.to} label={n.label} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
