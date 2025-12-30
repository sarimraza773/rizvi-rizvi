import React from 'react';
import Seo from '../components/Seo.jsx';
import Section from '../components/Section.jsx';

/**
 * The About page provides background on the firm, summarising its history,
 * practice areas and core details such as company size, type and headquarters.
 */
export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="About Rizvi&Rizvi — a Karachi-based privately held law firm highlighting 50+ years of trusted client relationships."
      />

      <Section eyebrow="About" title="Rizvi&Rizvi">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h3 className="font-serif text-2xl text-ink-100 tracking-tightish">Who we are</h3>
            <p className="mt-4 text-ink-200/80 leading-relaxed">
              Rizvi&Rizvi is a Karachi-based legal services firm. The firm highlights over five decades
              of customer trust and lists key practice areas spanning taxation, corporate, intellectual property,
              real estate conveyance, arbitration, and constitutional matters.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 sm:p-8">
            <h3 className="font-serif text-2xl text-ink-100 tracking-tightish">Firm details</h3>
            <ul className="mt-4 space-y-3 text-ink-200/80">
              <li><span className="text-ink-100/90">Industry:</span> Legal Services</li>
              <li><span className="text-ink-100/90">Company size:</span> 11–50 employees</li>
              <li><span className="text-ink-100/90">Type:</span> Privately Held</li>
              <li><span className="text-ink-100/90">Headquarters:</span> Karachi</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="Approach" title="How we work">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <p className="text-ink-200/80 leading-relaxed max-w-4xl">
            We focus on responsive communication, clear documentation, and a disciplined approach to risk.
           
          </p>
        </div>
      </Section>

      <div className="h-16" />
    </>
  );
}
