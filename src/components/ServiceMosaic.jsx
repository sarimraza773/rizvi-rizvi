import React from 'react';
import { Link } from 'react-router-dom';
import ArrowUpRight from 'lucide-react/dist/esm/icons/arrow-up-right.js';
import { featuredServices, getServiceBySlug } from '../data/services.js';

const featuredTiles = featuredServices.map((slug) => getServiceBySlug(slug)).filter(Boolean);

export default function ServiceMosaic() {
  return (
    <div className="services-mosaic">
      {featuredTiles.map((service, index) => (
        <Link
          key={service.slug}
          to={`/services/${service.slug}`}
          className={`services-mosaic-tile services-mosaic-tile-${index + 1}`}
        >
          <span className="services-mosaic-label">{service.title}</span>
          <span className="services-mosaic-text">{service.subtitle}</span>
          <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
        </Link>
      ))}

      <Link to="/services" className="services-mosaic-tile services-mosaic-more">
        <span className="services-mosaic-label">Explore other services</span>
        <span className="services-mosaic-text">View the full range of legal support</span>
        <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
      </Link>
    </div>
  );
}
