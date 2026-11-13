"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

type ContactFields = {
  name: string;
  phone: string;
  email: string;
  message: string;
};
type ContactField = keyof ContactFields;

const emptyFields: ContactFields = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [fields, setFields] = useState(emptyFields);
  const [errors, setErrors] = useState<Partial<Record<ContactField, string>>>(
    {},
  );
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const updateField = (field: ContactField, value: string) => {
    setFields((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setFeedback(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<Record<ContactField, string>> = {};
    if (!fields.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^[+\d(][\d\s()+-]{6,19}$/.test(fields.phone.trim())) {
      nextErrors.phone = "Enter a valid phone number.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (fields.message.trim().length < 10) {
      nextErrors.message = "Please include at least 10 characters.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setFeedback({
        type: "error",
        text: "Please review the highlighted fields.",
      });
      return;
    }

    setFeedback({
      type: "success",
      text: "Your details are valid. This demo form is not connected yet; please contact the hospital directly once contact details are confirmed.",
    });
    setFields(emptyFields);
  };

  const fieldProps = (field: ContactField) => ({
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-heading">
        <span className="eyebrow">
          <span />
          Send an enquiry
        </span>
        <h2>How can we help?</h2>
        <p>
          All fields are required. This form is prepared for future integration
          and does not send or store information.
        </p>
      </div>
      <div className="form-field-grid">
        <label className="form-field">
          <span>Name</span>
          <input
            autoComplete="name"
            {...fieldProps("name")}
            value={fields.name}
            onChange={(event) => updateField("name", event.target.value)}
          />
          {errors.name && <small id="name-error">{errors.name}</small>}
        </label>
        <label className="form-field">
          <span>Phone</span>
          <input
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            {...fieldProps("phone")}
            value={fields.phone}
            onChange={(event) => updateField("phone", event.target.value)}
          />
          {errors.phone && <small id="phone-error">{errors.phone}</small>}
        </label>
        <label className="form-field form-field-wide">
          <span>Email</span>
          <input
            type="email"
            autoComplete="email"
            {...fieldProps("email")}
            value={fields.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
          {errors.email && <small id="email-error">{errors.email}</small>}
        </label>
        <label className="form-field form-field-wide">
          <span>Message</span>
          <textarea
            rows={5}
            {...fieldProps("message")}
            value={fields.message}
            onChange={(event) => updateField("message", event.target.value)}
          />
          {errors.message && <small id="message-error">{errors.message}</small>}
        </label>
      </div>
      <button className="button button-primary" type="submit">
        Submit enquiry <ArrowRight size={16} aria-hidden="true" />
      </button>
      <p
        className={`form-feedback${feedback ? ` is-${feedback.type}` : ""}`}
        role={feedback?.type === "error" ? "alert" : "status"}
        aria-live="polite"
      >
        {feedback?.text ?? ""}
      </p>
    </form>
  );
}
