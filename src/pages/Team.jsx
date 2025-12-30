import React from 'react';
import Seo from '../components/Seo.jsx';
import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';

/**
 * Team page
 *
 * This page introduces the key professionals within the firm. Each team
 * member is presented with their role and a brief description of their
 * expertise. Feel free to update the content or add more members as
 * necessary.
 */
export default function Team() {
  const members = [
    {
      name: 'Syed Faiq Raza Rizvi',
      role: 'Managing Partner',
      text: 'Specialist in corporate law and regulatory compliance with over 20 years of experience guiding clients through complex transactions.',
    },
    {
      name: 'Syed Wasim Raza Rizvi',
      role: 'Managing Partner',
      text: 'Leads the litigation practice with a focus on arbitration and constitutional matters, known for strategic advocacy and results.',
    },
    {
      name: 'Syed Atif Raza',
      role: 'Junior Partner',
      text: 'Advises clients on intellectual property protection, technology licensing and innovation strategy.',
    },
    {
      name: 'Omar Khan',
      role: 'Real Estate & Conveyance Lead',
      text: 'Provides legal counsel on property transactions, conveyancing and real estate development projects.',
    },
  ];

  return (
    <>
      <Seo
        title="Team"
        description="Meet the lawyers and professionals at Rizvi&Rizvi who provide expert legal services across diverse practice areas."
      />

      <Section title="Meet our professionals">
        <div className="w-full">
          <p className="mx-auto w-full max-w-6xl text-center text-ink-200/80">
            At Rizvi&Rizvi, our team combines decades of experience with a passion for client service. Each member
            brings unique skills and insight to deliver the high-quality legal support our clients depend on.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
          {members.map((m) => (
            <Card key={m.name} title={m.name} subtitle={m.role} href="/contact">
              {m.text}
            </Card>
          ))}
        </div>
      </Section>

      <div className="h-16" />
    </>
  );
}
