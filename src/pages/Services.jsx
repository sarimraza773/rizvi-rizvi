import React from "react";
import Seo from "../components/Seo.jsx";
import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";

const services = [
  {
    title: "Taxation",
    subtitle: "Advisory & representation",
    text: "Tax planning, compliance guidance, and support on tax-related disputes and filings.",
  },
  {
    title: "Corporate",
    subtitle: "Company & commercial matters",
    text: "Corporate structuring, governance, contracts, and commercial advisory.",
  },
  {
    title: "Intellectual Property",
    subtitle: "Protecting valuable rights",
    text: "IP strategy support across trademarks/copyright and related matters.",
  },
  {
    title: "Real Estate Conveyance",
    subtitle: "Transactions & documentation",
    text: "Support on property documentation, conveyance, and transactional execution.",
  },
  {
    title: "Arbitration",
    subtitle: "Efficient dispute resolution",
    text: "Arbitration support and representation with a focus on clarity and outcomes.",
  },
  {
    title: "Constitutional Litigation",
    subtitle: "Public law matters",
    text: "Representation in constitutional litigation and related legal proceedings.",
  },
  {
    title: "Antitrust & Monopolies",
    subtitle: "Competition-facing issues",
    text: "Guidance on antitrust/competition concerns and related advisory needs.",
  },
];

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Services offered by Rizvi&Rizvi include taxation, corporate, intellectual property, real estate conveyance, arbitration, constitutional litigation, and antitrust matters."
      />

      <Section eyebrow="Services" title="Capabilities">
        <p className="max-w-3xl text-ink-200/80">
          The firm’s LinkedIn profile lists services including taxation, corporate, intellectual property,
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
