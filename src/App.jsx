import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import PageShell from './components/PageShell.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Team = lazy(() => import('./pages/Team.jsx'));
const NonProfit = lazy(() => import('./pages/NonProfit.jsx'));
const Affiliations = lazy(() => import('./pages/Affiliations.jsx'));
const UsefulLinks = lazy(() => import('./pages/UsefulLinks.jsx'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'));

const routes = [
  { path: '/', element: <Home /> },
  { path: '/services', element: <Services /> },
  { path: '/services/:slug', element: <ServiceDetail /> },
  { path: '/team', element: <Team /> },
  { path: '/non-profit', element: <NonProfit /> },
  { path: '/affiliations', element: <Affiliations /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/useful-links', element: <UsefulLinks /> },
];

function RouteFallback() {
  return <div className="min-h-[40vh]" aria-live="polite" />;
}

function PageTransition({ children }) {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition">
      {children}
    </div>
  );
}

export default function App() {
  return (
    <PageShell>
      <Suspense fallback={<RouteFallback />}>
        <PageTransition>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </PageTransition>
      </Suspense>
    </PageShell>
  );
}
