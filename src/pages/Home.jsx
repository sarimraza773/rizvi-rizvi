import React from 'react';
import Seo from '../components/Seo.jsx';
import HeroCarousel from '../components/HeroCarousel.jsx';
import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';
import ServiceMosaic from '../components/ServiceMosaic.jsx';
import ReviewsFeature from '../components/ReviewsFeature.jsx';

export default function Home() {
  return (
    <>
      <Seo
        title="Federalcorporation Legal Services"
        description="Delivering trusted counsel and practical legal support across conveyance, taxation, corporate, and non-profit matters."
      />

      <HeroCarousel />

      <Section title="A modern legal practice built on trust.">
        <div className="home-card-grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Practice Areas" subtitle="Clear expertise across core matters" href="/services">
            Explore services across taxation, corporate, intellectual property, real estate conveyance,
            arbitration, and constitutional litigation.
          </Card>
          <Card title="Team" subtitle="Our professionals" href="/team">
            Meet the attorneys and staff who bring decades of experience and dedication to the firm.
          </Card>
          <Card title="NonProfit" subtitle="Community work" href="/non-profit">
            Learn about our commitment to non-profit organisations and pro bono initiatives.
          </Card>
          <Card title="Contact" subtitle="Reach us for inquiries" href="/contact">
            Use the contact page to send a message and find the listed office location.
          </Card>
        </div>
      </Section>

      <Section title="Explore Our Services" className="home-services-section">
        <ServiceMosaic />
      </Section>

      <Section className="reviews-section mt-10">
        <ReviewsFeature />
      </Section>

      <div className="h-8" />
    </>
  );
}
