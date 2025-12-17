import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

/**
 * A shared layout wrapper that renders the navigation bar, page content,
 * and footer.  Children passed into this component will be displayed
 * between the Navbar and Footer.
 */
export default function PageShell({ children }) {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
