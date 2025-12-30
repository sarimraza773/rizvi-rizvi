import React from 'react';
import { NavLink } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

/**
 * Fallback page for unknown routes.  Provides a friendly message and a
 * link back to the home page.
 */
export default function NotFound() {
  return (
    <>
      <Seo title="Not Found" />
      <div className="px-4 sm:px-6 lg:px-10 py-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8">
          <h1 className="font-serif text-3xl text-ink-100 tracking-tightish">Page not found</h1>
          <p className="mt-3 text-ink-200/80">The page you’re looking for doesn’t exist.</p>
          <NavLink
            to="/"
            className="inline-block mt-6 rounded-2xl border border-white/15 bg-white/10 hover:bg-white/15 transition-colors px-5 py-3 text-sm text-ink-100"
          >
            Back to Home
          </NavLink>
        </div>
      </div>
    </>
  );
}
