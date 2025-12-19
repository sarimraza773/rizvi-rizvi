import React from 'react';
import Seo from '../components/Seo.jsx';
import Section from '../components/Section.jsx';

/**
 * NonProfit Organisations page
 *
 * This page describes the firm’s commitment to community engagement and
 * support for non‑profit organisations.  
 */
export default function NonProfit() {
  const initiatives = [
    {
      title: 'Legal Aid Clinics',
      desc: 'We partner with local charities to provide pro bono legal advice and representation to those in need.',
    },
    {
      title: 'Education & Scholarships',
      desc: 'Supporting legal education through scholarships and mentorship programs for aspiring lawyers from underrepresented communities.',
    },
    {
      title: 'Community Outreach',
      desc: 'Our team volunteers time and expertise to community organisations and civic initiatives that make a positive impact.',
    },
  ];

  return (
    <>
      <Seo
        title="Non‑Profit Organisations"
        description="Learn about how Rizvi&Rizvi supports non‑profit organisations through legal aid, education and community engagement."
      />
      <Section eyebrow="Non‑Profit" title="Giving back to our community">
        <p className="max-w-3xl text-ink-200/80">
          Beyond our core legal practice, we believe in using our skills and resources to support the public good.
          Here are some of the ways we contribute to non‑profit organisations and social causes.
        </p>
        <div className="mt-8 space-y-6">
          {initiatives.map((i) => (
            <div
              key={i.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm"
            >
              <h3 className="font-serif text-xl text-ink-100 tracking-tightish">{i.title}</h3>
              <p className="mt-3 text-ink-200/80">{i.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <div className="h-16" />
    </>
  );
}
