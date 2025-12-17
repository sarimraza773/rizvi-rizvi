import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PageShell from './components/PageShell.jsx';

// Import pages for top-level routes
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
// Note: NotFound page has been removed from the design.  We use Navigate to redirect unknown
// routes back to the home page instead of rendering a NotFound component.

export default function App() {
  return (
    <PageShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Redirect unknown routes to home so users don't encounter a blank page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PageShell>
  );
}
