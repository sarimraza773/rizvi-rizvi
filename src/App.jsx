import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import PageShell from './components/PageShell.jsx';

// Import pages for top‑level routes
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Team from './pages/Team.jsx';
import NonProfit from './pages/NonProfit.jsx';

export default function App() {
  // Grab the current location so we can animate route transitions.  Using
  // AnimatePresence from framer-motion allows pages to fade in/out smoothly
  // as the user navigates between routes.  The PageWrapper component
  // provides simple fade/slide animations for each page.
  const location = useLocation();

  const PageWrapper = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  );

  return (
    <PageShell>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
          <Route path="/non-profit" element={<PageWrapper><NonProfit /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          {/* Redirect unknown routes to home so users don't encounter a blank page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </PageShell>
  );
}
