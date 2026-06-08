"use client";

import Link from "next/link";
import { contactContent } from "@/data/site";
import type { Locale } from "@/lib/locales";

type ContactFormProps = {
  locale: Locale;
};

export function ContactForm({ locale }: ContactFormProps) {
  const { form, info } = contactContent;
  const base = `/${locale}`;

  const fields = [
    { id: "firstName", name: "firstName", label: form.fields.firstName.label, required: form.fields.firstName.required, type: "text" },
    { id: "lastName", name: "lastName", label: form.fields.lastName.label, required: form.fields.lastName.required, type: "text" },
    { id: "phone", name: "phone", label: form.fields.phone.label, required: form.fields.phone.required, type: "tel" },
    { id: "email", name: "email", label: form.fields.email.label, required: form.fields.email.required, type: "email" },
    { id: "message", name: "message", label: form.fields.message.label, required: form.fields.message.required, type: "textarea" },
  ];

  return (
    <section className="aj-section">
      <div className="aj-container aj-contact-page">
        <div className="aj-contact-info-cards">
          <div className="aj-contact-card">
            <h3 className="aj-contact-card__label">Address</h3>
            <p>{info.address}</p>
          </div>
          <div className="aj-contact-card">
            <h3 className="aj-contact-card__label">Email Address</h3>
            <p>
              <a href={`mailto:${info.email}`}>{info.email}</a>
            </p>
          </div>
          <div className="aj-contact-card">
            <h3 className="aj-contact-card__label">Phone</h3>
            <p>
              <a href={`tel:${info.phone.replace(/\s/g, "")}`}>{info.phone}</a>
            </p>
          </div>
        </div>

        <div className="aj-contact-form-wrap">
          <h2 className="aj-section-title">{form.title}</h2>
          <p className="aj-body-text">{form.subtitle}</p>
          <form
            className="aj-contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We will contact you shortly.");
            }}
          >
            {fields.map((field) =>
              field.type === "textarea" ? (
                <div key={field.id} className="aj-form-field aj-form-field--full">
                  <label htmlFor={field.id} className="aj-form-label">
                    {field.label}
                    {field.required && <span className="aj-form-required"> *</span>}
                  </label>
                  <textarea
                    id={field.id}
                    name={field.name}
                    required={field.required}
                    rows={5}
                    className="aj-form-textarea"
                  />
                </div>
              ) : (
                <div key={field.id} className="aj-form-field">
                  <label htmlFor={field.id} className="aj-form-label">
                    {field.label}
                    {field.required && <span className="aj-form-required"> *</span>}
                  </label>
                  <input
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    className="aj-form-input"
                  />
                </div>
              )
            )}

            <div className="aj-form-legal">
              <Link href={`${base}/privacy-policy`}>{form.legalLinks.privacy}</Link>
              {" | "}
              <Link href={`${base}/term-of-services`}>{form.legalLinks.terms}</Link>
              {" | "}
              <Link href={`${base}/refund-policy`}>{form.legalLinks.refund}</Link>
            </div>

            <label className="aj-form-checkbox">
              <input type="checkbox" required />
              <span>{form.consentCheckboxLabel}</span>
            </label>

            <button type="submit" className="aj-btn aj-btn--primary">
              {form.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
