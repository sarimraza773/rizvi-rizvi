import React from 'react';
import Seo from '../components/Seo.jsx';
import Section from '../components/Section.jsx';

/**
 * The Non‑Profit Organisations page details the firm’s commitment to
 * supporting community initiatives.  It lists the types of support
 * offered and encourages visitors to learn more about the firm’s
 * philanthropic efforts.
 */
export default function NonProfitOrganisations() {
  return (
    <>
      <Seo
        title="Non‑Profit Organisations"
        description="Learn about Rizvi&Rizvi's support for non-profit organisations and community initiatives."
      />
      <Section eyebrow="Community" title="Supporting Non‑Profit Organisations">
        <p className="max-w-3xl text-ink-200/80">
          At Rizvi&Rizvi, we believe in giving back to the community. We provide pro bono services and
          support to a variety of non‑profit organisations.
        </p>
        <p className="mt-4 max-w-3xl text-ink-200/80">
          Whether it’s assisting charities with legal compliance or helping social enterprises structure
          their operations, our team is committed to empowering those who work for the greater good.
        </p>
        <ul className="mt-6 space-y-3 text-ink-200/80 list-disc list-inside">
          <li>Legal advisory for charitable trusts</li>
          <li>Structuring and registration of NGOs</li>
          <li>Ongoing compliance and governance support</li>
        </ul>
      </Section>
      <div className="h-16" />
    </>
  );
}
