import React from 'react';
import Seo from '../components/Seo.jsx';
import HeroCarousel from '../components/HeroCarousel.jsx';
import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';

/**
 * The home page provides a welcoming overview of the firm, highlights
 * practice areas, and features some of the qualities that set the firm
 * apart.  A carousel introduces visitors to key messages and calls to
 * action.
 */
export default function Home() {
  return (
    <>
      <Seo
        title="Rizvi&Rizvi — Legal Services"
        description="Delivering trusted counsel and innovative solutions across corporate, tax and IP law."
      />

      <HeroCarousel />

      <Section eyebrow="Overview" title="A modern legal practice built on trust.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card title="Practice Areas" subtitle="Clear expertise across core matters" href="/services">
            Explore services across taxation, corporate, intellectual property, real estate conveyance,
            arbitration, and constitutional litigation.
          </Card>
          <Card title="Team" subtitle="Our professionals" href="/team">
            Meet the attorneys and staff who bring decades of experience and dedication to the firm.
          </Card>
          <Card title="Non-Profit" subtitle="Community work" href="/non-profit">
            Learn about our commitment to non-profit organisations and pro bono initiatives.
          </Card>
          <Card title="Contact" subtitle="Reach us for inquiries" href="/contact">
            Use the contact page to send a message and find the listed office location.
          </Card>
        </div>
      </Section>

      {/* MOVED DOWN (per your red-box/blue-line vision) */}
      <Section eyebrow="Featured" title="What we focus on" className="mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 sm:p-8">
            <p className="text-xs tracking-[0.18em] uppercase text-ink-200/80">Client-first</p>
            <h3 className="mt-3 font-serif text-2xl text-ink-100 tracking-tightish">
              Practical advice, timely delivery.
            </h3>
            <p className="mt-4 text-ink-200/80">
              A premium, streamlined experience — quick navigation, clean typography, and smooth transitions.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="text-xs tracking-[0.18em] uppercase text-ink-200/80">Established</p>
            <h3 className="mt-3 font-serif text-2xl text-ink-100 tracking-tightish">
              50+ years of trusted relationships.
            </h3>
            <p className="mt-4 text-ink-200/80">
              The firm highlights three decades of customer trust and a broad scope of services.
            </p>
          </div>
        </div>
      </Section>

      <div className="h-8" />
    </>
  );
}
