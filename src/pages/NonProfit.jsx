import React from 'react';
import Seo from '../components/Seo.jsx';
import Section from '../components/Section.jsx';

export default function NonProfit() {
  const items = [
    {
      title: 'Legal Aid Clinics',
      text: 'We partner with local charities to provide pro bono legal advice and representation to those in need.',
    },
    {
      title: 'Education & Scholarships',
      text: 'Supporting legal education through scholarships and mentorship programs for aspiring lawyers from underrepresented communities.',
    },
    {
      title: 'Community Outreach',
      text: 'Our team volunteers time and expertise to community organisations and civic initiatives that make a positive impact.',
    },
  ];

  return (
    <>
      <Seo
        title="Non-Profit"
        description="Learn how Rizvi&Rizvi supports non-profit organisations and community initiatives through pro bono work and outreach."
      />

      {/* Removed eyebrow="Non-Profit" to remove the top-left label and move title up */}
      <Section title="Giving back to our community">
        {/* One consistent column so ALL text starts at the same margin */}
        <div className="mx-auto w-full max-w-4xl">
          <p className="text-ink-200/80">
            Beyond our core legal practice, we believe in using our skills and resources to support the public good.
            Here are some of the ways we contribute to non-profit organisations and social causes.
          </p>

          <div className="mt-12 space-y-14">
            {items.map((it) => (
              <div key={it.title}>
                <h3 className="font-serif text-2xl tracking-tightish text-ink-100">
                  {it.title}
                </h3>
                <p className="mt-3 text-ink-200/80">
                  {it.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="h-16" />
    </>
  );
}
