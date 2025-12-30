import React from 'react';
import Seo from '../components/Seo.jsx';
import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';

// Define the service offerings displayed on the Services page.
const services = [
  {
    title: 'Taxation',
    subtitle: 'Advisory & representation',
    text: 'Tax planning, compliance guidance, and support on tax-related disputes and filings.',
  },
  {
    title: 'Corporate',
    subtitle: 'Company & commercial matters',
    text: 'Corporate structuring, governance, contracts, and commercial advisory.',
  },
  {
    title: 'Intellectual Property',
    subtitle: 'Protecting valuable rights',
    text: 'IP strategy support across trademarks/copyright and related matters.',
  },
  {
    title: 'Real Estate Conveyance',
    subtitle: 'Transactions & documentation',
    text: 'Support on property documentation, conveyance, and transactional execution.',
  },
  {
    title: 'Arbitration',
    subtitle: 'Efficient dispute resolution',
    text: 'Arbitration support and representation with a focus on clarity and outcomes.',
  },
  {
    title: 'Constitutional Litigation',
    subtitle: 'Public law matters',
    text: 'Representation in constitutional litigation and related legal proceedings.',
  },
  {
    title: 'Antitrust & Monopolies',
    subtitle: 'Competition-facing issues',
    text: 'Guidance on antitrust/competition concerns and related advisory needs.',
  },
];

/**
 * The Services page showcases the firm’s capabilities across its various practice areas.
 * Each service is displayed as a card with a brief description and links visitors to
 * the contact page to initiate enquiries.
 */
export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Services offered by Rizvi&Rizvi include... arbitration, constitutional litigation, and antitrust matters."
      />

      {/* Removed eyebrow="Services" to remove the top-left label and move title up */}
      <Section title="Capabilities">
        {/* Centered + widened intro text (same change style as Team page) */}
        <p className="mx-auto w-full max-w-6xl text-center text-ink-200/80">
          The firm’s profile lists services including taxation, corporate, intellectual property,
          real estate conveyance, arbitration, and constitutional matters, along with antitrust & monopolies.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {services.map((s) => (
            <Card key={s.title} title={s.title} subtitle={s.subtitle} href="/contact">
              {s.text}
            </Card>
          ))}
        </div>
      </Section>

      <div className="h-16" />
    </>
  );
}
