"use client";

import { homeContent } from "@/data/site";

export function NewsletterSection() {
  const { newsletter } = homeContent;

  return (
    <section className="aj-newsletter">
      <div className="aj-container aj-newsletter__inner">
        <div className="aj-newsletter__text">
          <h2 className="aj-newsletter__title">{newsletter.title}</h2>
          <p className="aj-newsletter__desc">{newsletter.description}</p>
        </div>
        <form
          className="aj-newsletter__form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for subscribing!");
          }}
        >
          <input
            type="email"
            name="email"
            required
            placeholder={newsletter.placeholder}
            className="aj-newsletter__input"
            aria-label="Email address"
          />
          <button type="submit" className="aj-btn aj-btn--primary">
            {newsletter.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
