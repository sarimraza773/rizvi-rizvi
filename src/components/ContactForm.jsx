import React, { useMemo, useState } from 'react';


export default function ContactForm() {
  const [status, setStatus] = useState({ type: 'idle', msg: '' });

  const mailto = useMemo(() => {
    const to = 'info@rizvinrizvi.com.pk';
    const subject = encodeURIComponent('Website Inquiry — Rizvi&Rizvi');
    return { to, subject };
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = (fd.get('name') || '').toString().trim();
    const email = (fd.get('email') || '').toString().trim();
    const message = (fd.get('message') || '').toString().trim();

    if (!name || !email || !message) {
      setStatus({ type: 'error', msg: 'Please fill out all fields.' });
      return;
    }

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`,
    );

    window.location.href = `mailto:${mailto.to}?subject=${mailto.subject}&body=${body}`;
    setStatus({ type: 'ok', msg: 'Opening your email client…' });
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-xs tracking-[0.18em] uppercase text-ink-200/80">Name</span>
          <input
            name="name"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-ink-950/40 px-4 py-3 text-ink-100 outline-none focus:border-white/25"
            placeholder="Your full name"
          />
        </label>

        <label className="block">
          <span className="text-xs tracking-[0.18em] uppercase text-ink-200/80">Email</span>
          <input
            name="email"
            type="email"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-ink-950/40 px-4 py-3 text-ink-100 outline-none focus:border-white/25"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="block mt-4">
        <span className="text-xs tracking-[0.18em] uppercase text-ink-200/80">Message</span>
        <textarea
          name="message"
          rows={6}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-ink-950/40 px-4 py-3 text-ink-100 outline-none focus:border-white/25"
          placeholder="How can we help?"
        />
      </label>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="rounded-2xl border border-white/15 bg-white/10 hover:bg-white/15 transition-colors px-5 py-3 text-sm text-ink-100"
        >
          Send Message
        </button>

        {status.type !== 'idle' ? (
          <p
            className={`text-sm ${status.type === 'error' ? 'text-red-300' : 'text-ink-200/80'}`}
          >
            {status.msg}
          </p>
        ) : null}
      </div>

      <p className="mt-6 text-xs text-ink-200/60 leading-relaxed">
        Notice: Please do not send confidential information through this form. Submitting an inquiry does not
        create an attorney-client relationship until a formal engagement is confirmed.
      </p>
    </form>
  );
}
