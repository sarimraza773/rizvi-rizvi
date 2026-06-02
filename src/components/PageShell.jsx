import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';


export default function PageShell({ children }) {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
