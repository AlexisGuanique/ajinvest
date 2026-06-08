import { aboutContent, siteConfig } from "@/data/site";

export function AboutContent() {
  const { intro, mission, values, contact } = aboutContent;

  return (
    <>
      <section className="aj-section">
        <div className="aj-container aj-about">
          <h2 className="aj-section-title">{intro.title}</h2>
          {intro.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="aj-body-text">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="aj-section aj-section--light">
        <div className="aj-container">
          <h2 className="aj-section-title">{mission.title}</h2>
          <p className="aj-body-text">{mission.description}</p>
        </div>
      </section>

      <section className="aj-section">
        <div className="aj-container">
          <h2 className="aj-section-title aj-section-title--center">Our Values</h2>
          <div className="aj-values-grid">
            {values.map((value) => (
              <article key={value.title} className="aj-value-card">
                <h3 className="aj-value-card__title">{value.title}</h3>
                <p className="aj-value-card__desc">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="aj-section aj-section--dark">
        <div className="aj-container aj-contact-info">
          <h2 className="aj-section-title">Contact Information</h2>
          <div className="aj-contact-info__grid">
            <div>
              <h3 className="aj-contact-info__label">Address</h3>
              <p>{contact.address}</p>
            </div>
            <div>
              <h3 className="aj-contact-info__label">Phone</h3>
              <p>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                  {contact.phone}
                </a>
              </p>
            </div>
            <div>
              <h3 className="aj-contact-info__label">Email</h3>
              <p>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
            </div>
          </div>
          <p className="aj-contact-info__note">
            Business name: {siteConfig.brand}
          </p>
        </div>
      </section>
    </>
  );
}
