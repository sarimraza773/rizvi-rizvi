import React from 'react';
import Seo from '../components/Seo.jsx';
import Section from '../components/Section.jsx';
import ContactForm from '../components/ContactForm.jsx';

/**
 * The Contact page provides an email form and displays office information.
 */
export default function Contact() {
  return (
    <>
      <Seo title="Contact" description="Contact Rizvi&Rizvi — Karachi office details and inquiry form." />

      <Section eyebrow="Contact" title="Get in touch">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ContactForm />

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h3 className="font-serif text-2xl text-ink-100 tracking-tightish">Office</h3>
            <p className="mt-4 text-ink-200/80 leading-relaxed">
              M2A UK Square
              <br />
              Federal B Area Block 16
              <br />
              Karachi, Pakistan
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-ink-950/40 p-4">
              <p className="text-xs tracking-[0.18em] uppercase text-ink-200/70">Website</p>
              <p className="mt-2 text-ink-100/90 text-sm">rizvinrizvi.com.pk</p>
            </div>

            <p className="mt-6 text-xs text-ink-200/60 leading-relaxed">
              Note: This website is for general information only and does not constitute legal advice.
            </p>
          </div>
        </div>
      </Section>

      <div className="h-16" />
    </>
  );
}
