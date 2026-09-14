import { useState } from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Have an idea?</h2>
      <p>Let's turn it into a useful digital product.</p>
      <ContactForm />
    </section>
  );
}

const initialForm = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  message: "",
};

function validateForm(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!form.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.message.trim()) {
    errors.message = "Please tell us a little about your project.";
  }

  return errors;
}

function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [name]: "" }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validateForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setIsSubmitting(true);

    window.setTimeout(() => {
      setForm(initialForm);
      setErrors({});
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-fields">
        <label>
          Name
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <span id="name-error">{errors.name}</span>}
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <span id="email-error">{errors.email}</span>}
        </label>
        <label>
          Company <em>(optional)</em>
          <input
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
          />
        </label>
        <label>
          Project type
          <select name="projectType" value={form.projectType} onChange={handleChange}>
            <option value="">Select a project type</option>
            <option value="website">Website</option>
            <option value="web-app">Web application</option>
            <option value="design-system">UI system</option>
          </select>
        </label>
      </div>
      <label>
        Message
        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && <span id="message-error">{errors.message}</span>}
      </label>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
      {submitted && (
        <p className="form-success" role="status">
          ✓ Message sent successfully!
        </p>
      )}
    </form>
  );
}
