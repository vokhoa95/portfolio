import { useState } from "react";
import type { FormEvent } from "react";
import "./Contact.css";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("Please complete all fields.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:khoavo.1895@gmail.com?subject=${subject}&body=${body}`;

    setStatus(
      "Your email app should open with a draft. Please send it there. " +
        "If it does not open, email khoavo.1895@gmail.com directly.",
    );
  }

  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <p className="eyebrow">CONTACT</p>
      <h2 id="contact-title">Let’s connect.</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-fields">
          <div className="contact-field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              maxLength={100}
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              required
            />
          </div>
        </div>

        <div className="contact-field">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            maxLength={2000}
            required
          />
        </div>

        <p className="contact-note" id="contact-email-note">
          This opens your email app so you can review and send your message.
        </p>

        <button
          className="button button-primary"
          type="submit"
          aria-describedby="contact-email-note"
        >
          Compose email
        </button>

        <p className="contact-status" role="status">
          {status}
        </p>
      </form>

      <div className="contact-social">
        <span>Get in touch:</span>

        <a
          className="linkedin-link"
          href="https://www.linkedin.com/in/khoavo95/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Khoa Vo on LinkedIn (opens in a new tab)"
        >
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
