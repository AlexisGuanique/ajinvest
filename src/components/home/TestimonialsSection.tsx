import Image from "next/image";
import { homeContent } from "@/data/site";

export function TestimonialsSection() {
  const { testimonials } = homeContent;

  return (
    <section className="aj-section aj-section--light">
      <div className="aj-container">
        <h2 className="aj-section-title aj-section-title--center">
          {testimonials.title}
        </h2>
        <div className="aj-testimonials-grid">
          {testimonials.items.map((item) => (
            <blockquote key={item.name} className="aj-testimonial">
              <p className="aj-testimonial__quote">&ldquo;{item.quote}&rdquo;</p>
              <footer className="aj-testimonial__author">
                <div className="aj-testimonial__avatar">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <cite className="aj-testimonial__name">{item.name}</cite>
                  <p className="aj-testimonial__role">{item.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
