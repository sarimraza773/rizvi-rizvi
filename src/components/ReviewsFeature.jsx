import React, { useEffect, useState } from 'react';

const reviews = [
  {
    name: 'Mikail Shaikh',
    meta: '2 reviews · 7 months ago',
    text: 'One stop shop. Professional service as I expected. Highly recommend',
  },
  {
    name: 'Muhammad Haider',
    meta: '3 reviews · 3 years ago',
    text: "I've been using their services for quite a while now and fully trust them with their commitments. Initially the staff used to be a little strict and straight-forward. But in these past couple years I've seen a drastic change in their customer service. Can't recommend anyplace better for transfer, taxation, business registration, and legal consultation most matters.",
  },
  {
    name: 'Dr. Talha Shakil',
    meta: 'Local Guide · 11 reviews · a year ago',
    text: 'Very professional and authentic. Extremely reliable services.',
  },
  {
    name: 'Zubi Shah',
    meta: 'Local Guide · 99 reviews · 3 years ago',
    text: 'This company is a well known firm for preparation of any kind of legal documentation. They have an efficient team for their services. I have the trust since long at about 40 years.',
  },
  {
    name: 'Muhammad Ali',
    meta: 'Local Guide · 105 reviews · Edited 4 years ago',
    text: 'Experienced professionals who really know their stuff from documentation for real estate, rental, tax filing and in other valuable fields. Highly recommended for result oriented people.',
  },
  {
    name: 'Muhammad Ibrahim Aslam',
    meta: 'Local Guide · 68 reviews · 3 years ago',
    text: 'If you are stuck in some legal documents or any other foreign country documentation issue then this would be the right place, have a visit and get the proper solution with minimum time.',
  },
];

export default function ReviewsFeature() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % reviews.length);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="reviews-feature">
      <div className="reviews-feature-copy">
        <h2 className="font-serif tracking-tightish text-3xl text-ink-100 sm:text-4xl">
          SOME WORDS FROM OUR SATISFIED CUSTOMERS!
        </h2>
      </div>

      <div className="reviews-feature-quote">
        <div key={review.name} className="reviews-feature-slide">
          <div className="flex items-center gap-3">
            <div className="reviews-avatar">{review.name.charAt(0)}</div>
            <div>
              <p className="font-semibold text-ink-100">{review.name}</p>
              <p className="text-sm text-ink-200/70">{review.meta}</p>
            </div>
          </div>

          <p className="mt-5 text-lg leading-relaxed text-ink-100">"{review.text}"</p>
          <p className="mt-5 text-lg tracking-[0.08em] text-amber-500" aria-label="Five star review">
            ★★★★★
          </p>
        </div>

        <div className="mt-6 flex gap-2" aria-label="Review navigation">
          {reviews.map((item, dotIndex) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setIndex(dotIndex)}
              className={`h-2.5 rounded-full transition-all ${
                dotIndex === index ? 'w-8 bg-navy-900' : 'w-2.5 bg-navy-900/25 hover:bg-navy-900/45'
              }`}
              aria-label={`Show review from ${item.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
