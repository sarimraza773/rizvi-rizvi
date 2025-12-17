import React from "react";
import Seo from "../components/Seo.jsx";
import HeroCarousel from "../components/HeroCarousel.jsx";
import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";

export default function Home() {
  return (
    <>
      <Seo
        title="Home"
        description="Rizvi&Rizvi — Karachi-based law firm providing services across taxation, corporate, IP, real estate conveyance, arbitration, and constitutional litigation."
      />

      <HeroCarousel />

      <Section eyebrow="Overview" title="A modern legal practice built on trust.">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card
            title="Practice Areas"
            subtitle="Clear expertise across core matters"
            href="/services"
          >
            Explore services across taxation, corporate, intellectual property, real estate conveyance,
            arbitration, and constitutional litigation.
          </Card>
          <Card title="About the Firm" subtitle="Karachi • Privately held" href="/about">
            The firm emphasizes long-standing client trust and relationships, with operations based in Karachi.
          </Card>
          <Card title="Contact" subtitle="Reach us for inquiries" href="/contact">
            Use the contact page to send a message and find the listed office location.
          </Card>
        </div>
      </Section>

      <Section eyebrow="Featured" title="What we focus on">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 sm:p-8">
            <p className="text-xs tracking-[0.18em] uppercase text-ink-200/80">Client-first</p>
            <h3 className="mt-3 font-serif text-2xl text-ink-100 tracking-tightish">
              Practical advice, timely delivery.
            </h3>
            <p className="mt-4 text-ink-200/80">
              A premium, streamlined experience — quick navigation, clean typography, and smooth transitions.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="text-xs tracking-[0.18em] uppercase text-ink-200/80">Established</p>
            <h3 className="mt-3 font-serif text-2xl text-ink-100 tracking-tightish">
              30+ years of trusted relationships.
            </h3>
            <p className="mt-4 text-ink-200/80">
              The firm highlights “thirty years of customers trust & relationship” and a broad scope of services.
            </p>
          </div>
        </div>
      </Section>

      <div className="h-16" />
    </>
  );
}
