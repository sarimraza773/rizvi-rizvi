import React, { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
// Import the firm logo.  This logo will appear in the navbar alongside the firm name.
import logo from '../assets/logo.jpg';

// Define the primary navigation links used throughout the site.
// We include additional pages for Team and Non‑Profit Organisations to
// provide visitors with direct access to these sections of the site.
const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/non-profit', label: 'Non‑Profit' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function LinkItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `text-sm tracking-[0.12em] uppercase transition-colors ${
          isActive ? 'text-ink-100' : 'text-ink-200/80 hover:text-ink-100'
        }`
      }
    >
      {label}
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [loc.pathname]);

  // Lock scrolling on mobile when the drawer menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Determine the label of the active route for the menu button.
  const activeLabel = useMemo(() => {
    const found = nav.find((n) => n.to === loc.pathname);
    return found?.label ?? 'Menu';
  }, [loc.pathname]);

  return (
    // Use a deep navy background on the header to echo the dark band at the top of vellani.com.
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          {/* Logo image */}
          <img src={logo} alt="Rizvi&Rizvi logo" className="h-8 w-8 rounded-full object-contain" />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xl text-white tracking-tightish">Rizvi&Rizvi</span>
            <span className="text-xs tracking-[0.18em] uppercase text-ink-200/70">
              Legal Services
            </span>
          </div>
        </NavLink>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <LinkItem key={n.to} to={n.to} label={n.label} />
          ))}
          {/* Call to action button similar to the header on vellani.com */}
          <a
            href="tel:+92212345678"
            className="ml-4 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase text-white hover:bg-white/15 transition-colors"
          >
            Call Now
          </a>
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-ink-100"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Open menu"
        >
          <span className="text-xs tracking-[0.18em] uppercase">{activeLabel}</span>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile drawer navigation */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden border-t border-white/10 bg-navy-900/95 backdrop-blur-md"
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-6 flex flex-col gap-5">
              {nav.map((n) => (
                <LinkItem
                  key={n.to}
                  to={n.to}
                  label={n.label}
                  onClick={() => setOpen(false)}
                />
              ))}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-ink-200/70">
                  Karachi • Privately held • Established trust over 30+ years
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
