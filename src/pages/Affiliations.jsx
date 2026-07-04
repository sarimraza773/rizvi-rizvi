import React from 'react';
import Section from '../components/Section.jsx';

const affiliations = [
  {
    name: 'Sindh Bar Council',
    detail: 'Provincial legal council affiliation supporting professional standards and legal practice.',
  },
  {
    name: 'High Court Bar Association',
    detail: 'Association with the High Court legal community and its tradition of advocacy.',
  },
  {
    name: 'Karachi Bar Association',
    detail: 'Connected to Karachi\'s active legal forum for litigation, consultation, and professional exchange.',
  },
  {
    name: 'Income Tax Bar Association',
    detail: 'Tax-practice affiliation reflecting focused work in direct tax advisory and representation.',
  },
  {
    name: 'Sales Tax Bar Association',
    detail: 'Professional association tied to indirect tax practice, compliance, and fiscal matters.',
  },
  {
    name: 'American Bar Association',
    detail: 'International legal association connection supporting broader professional perspective.',
  },
];

export default function Affiliations() {
  return (
    <>
      <Section title="Affiliations" className="pb-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base leading-relaxed text-ink-200/80 sm:text-lg">
            FederalCorporation maintains respected professional affiliations across litigation,
            taxation, and wider legal practice communities, reflecting the firm&apos;s commitment
            to disciplined service and trusted representation.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl border-y border-navy-900/15">
          <div className="divide-y divide-navy-900/15">
            {affiliations.map((affiliation, index) => (
              <article
                key={affiliation.name}
                className="grid gap-4 py-6 sm:grid-cols-[4.5rem_1fr] sm:gap-8 sm:py-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-maroon-900">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div className="grid gap-2 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:gap-10">
                  <h3 className="font-serif text-2xl leading-tight tracking-tightish text-ink-100">
                    {affiliation.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-200/80 sm:pt-1">
                    {affiliation.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <section className="px-4 pb-16 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-5 rounded-2xl bg-navy-900 px-6 py-7 text-center shadow-soft sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-left">
          <p className="font-serif text-2xl tracking-tightish text-white sm:text-3xl">
            Rooted in the legal community.
          </p>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/75 sm:mx-0">
            These affiliations strengthen the firm&apos;s professional network across courts,
            tax forums, and local and international legal practice.
          </p>
        </div>
      </section>
    </>
  );
}
