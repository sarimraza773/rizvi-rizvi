import { useEffect } from 'react';

/**
 * A lightweight SEO helper that updates the document title and
 * description whenever the component's props change.  Passing
 * `title` will prefix it with the firm name; passing `description`
 * will update the meta description tag if it exists.
 */
export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} — Rizvi&Rizvi` : 'Rizvi&Rizvi';
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) {
      meta.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
}
