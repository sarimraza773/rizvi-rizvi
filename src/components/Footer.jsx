import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * The site footer provides navigation and basic firm information.  It
 * includes a disclaimer and dynamically renders the current year.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-ink-950/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="font-serif text-xl text-ink-100 tracking-tightish">Rizvi&Rizvi</div>
            <p className="mt-2 text-sm text-ink-200/70 max-w-xl">
              Legal Services — Karachi. Practice areas include taxation, corporate, intellectual property,
              real estate conveyance, arbitration, and constitutional litigation.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <NavLink className="text-sm text-ink-200/70 hover:text-ink-100" to="/services">
              Services
            </NavLink>
            <NavLink className="text-sm text-ink-200/70 hover:text-ink-100" to="/about">
              About
            </NavLink>
            <NavLink className="text-sm text-ink-200/70 hover:text-ink-100" to="/contact">
              Contact
            </NavLink>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-xs text-ink-200/60 leading-relaxed">
          <p>
            Attorney Advertising / Disclaimer: This website is for general information purposes only and does not
            constitute legal advice. No attorney-client relationship is created by use of this website.
          </p>
          <p className="mt-3">© {year} Rizvi&Rizvi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
