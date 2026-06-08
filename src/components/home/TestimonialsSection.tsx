"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { homeContent } from "@/data/site";
import type { Testimonial } from "@/data/site";

const AUTOPLAY_MS = 6000;

function TestimonialSlide({ item }: { item: Testimonial }) {
  return (
    <blockquote className="aj-testimonial aj-testimonial--slide">
      <p className="aj-testimonial__quote">&ldquo;{item.quote}&rdquo;</p>
      <footer className="aj-testimonial__author">
        <div className="aj-testimonial__avatar">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
        <div>
          <cite className="aj-testimonial__name">{item.name}</cite>
          <p className="aj-testimonial__role">{item.role}</p>
        </div>
      </footer>
    </blockquote>
  );
}

export function TestimonialsSection() {
  const { testimonials } = homeContent;
  const { items, title } = testimonials;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setActive((index + items.length) % items.length);
    },
    [items.length]
  );

  const next = useCallback(() => {
    goTo(active + 1);
  }, [active, goTo]);

  const prev = useCallback(() => {
    goTo(active - 1);
  }, [active, goTo]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) setPaused(true);

    const onChange = (e: MediaQueryListEvent) => setPaused(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, next]);

  return (
    <section className="aj-section aj-section--light">
      <div className="aj-container">
        <h2 className="aj-section-title aj-section-title--center">
          {title}
        </h2>

        <div
          className="aj-testimonials-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="aj-testimonials-carousel__controls">
            <button
              type="button"
              className="aj-testimonials-carousel__arrow"
              aria-label="Previous testimonial"
              onClick={prev}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            <div
              className="aj-testimonials-carousel__viewport"
              aria-live="polite"
              aria-atomic="true"
            >
              <div
                className="aj-testimonials-carousel__track"
                style={{ transform: `translateX(-${active * 100}%)` }}
              >
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="aj-testimonials-carousel__slide"
                    aria-hidden={items[active]?.name !== item.name}
                  >
                    <TestimonialSlide item={item} />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="aj-testimonials-carousel__arrow"
              aria-label="Next testimonial"
              onClick={next}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div
            className="aj-testimonials-carousel__dots"
            role="tablist"
            aria-label="Testimonial slides"
          >
            {items.map((item, index) => (
              <button
                key={item.name}
                type="button"
                role="tab"
                className={`aj-testimonials-carousel__dot${index === active ? " aj-testimonials-carousel__dot--active" : ""}`}
                aria-selected={index === active}
                aria-label={`Show testimonial from ${item.name}`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
