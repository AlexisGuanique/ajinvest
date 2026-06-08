import { homeContent } from "@/data/site";

const iconMap: Record<string, React.ReactNode> = {
  support: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2 22l5-1.338A9.954 9.954 0 0012 22z" />
    </svg>
  ),
  warehouse: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
    </svg>
  ),
  marketplace: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0" />
    </svg>
  ),
  payment: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="4" width="22" height="16" rx="2" />
      <path d="M1 10h22" />
    </svg>
  ),
};

export function FeaturesBar() {
  const { features } = homeContent;

  return (
    <section className="aj-features-bar">
      <div className="aj-container">
        <div className="aj-features-grid">
          {features.map((feature) => (
            <article key={feature.title} className="aj-feature-item">
              <div className="aj-feature-item__icon">
                {iconMap[feature.icon] ?? iconMap.support}
              </div>
              <div>
                <h3 className="aj-feature-item__title">{feature.title}</h3>
                <p className="aj-feature-item__desc">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
