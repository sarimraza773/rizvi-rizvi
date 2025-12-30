import React from 'react';
import Section from '../components/Section.jsx';

export default function UsefulLinks() {
  return (
    <Section
      title="Useful Links"
      subtitle="Official government and regulatory resources for reference and compliance."
    >
      <div className="max-w-3xl space-y-8 text-ink-100">
        {[
          'Federal Board of Revenue',
          'Punjab Revenue Authority',
          'Sindh Revenue Board',
          'KP Revenue Authority',
          'Balochistan Revenue Authority',
          'State Bank of Pakistan',
          'Securities & Exchange Commission of Pakistan',
          'Ministry of Finance',
          'Board of Revenue Sindh',
          'Sindh Ease of Doing Business',
          'Sindh e-stamping',
          'Pakistan Intellectual Property',
          'Pakistan Competition Commission',
        ].map((title, index) => (
          <div key={index} className="border-b border-white/10 pb-6">
            <h3 className="font-serif text-xl tracking-tightish">{title}</h3>

            {/* Placeholder for website link */}
            <div className="mt-3 h-6 rounded-md bg-white/5" />
          </div>
        ))}
      </div>
    </Section>
  );
}
