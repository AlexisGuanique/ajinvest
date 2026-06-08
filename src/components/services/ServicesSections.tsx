import { servicesContent } from "@/data/site";

export function WhyChooseSection() {
  const { whyChoose } = servicesContent;

  return (
    <section className="aj-section aj-section--light">
      <div className="aj-container">
        <h2 className="aj-section-title aj-section-title--center">
          {whyChoose.title}
        </h2>
        <ul className="aj-why-list">
          {whyChoose.items.map((item) => (
            <li key={item} className="aj-why-list__item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
