"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Instagram } from "@/components/ui/icons";

type FormStatus =
  | { state: "idle"; message: "" }
  | { state: "sending"; message: string }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

const formEndpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({
    state: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    if (!formEndpoint) {
      setStatus({
        state: "error",
        message:
          "This form is not connected to a delivery service yet, so your message has not been sent. Please begin a conversation through Instagram in the meantime.",
      });
      return;
    }

    setStatus({
      state: "sending",
      message: "Sending your message…",
    });

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Form service returned an error");
      }

      form.reset();
      setStatus({
        state: "success",
        message:
          "Thank you — your message has been sent. The organisation will respond as soon as it can.",
      });
    } catch {
      setStatus({
        state: "error",
        message:
          "We could not send your message. Nothing has been submitted. Please try again later or contact the organisation through Instagram.",
      });
    }
  }

  return (
    <form
      id="contact-form"
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate={false}
    >
      <div className="contact-form__notice" role="note">
        <span className="contact-form__notice-dot" aria-hidden="true" />
        <div>
          <strong>Online delivery is not connected yet.</strong>
          <p>
            This form is ready for a secure form service, but it is not yet
            delivering messages. Until it is, please{" "}
            <a
              href="https://www.instagram.com/darpanwelfare/"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact the organisation on Instagram
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
            .
          </p>
        </div>
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="How should we address you?"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="contact-email">Email address</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="contact-phone">
            Phone <span>(optional)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Include a country code if relevant"
          />
        </div>

        <div className="field">
          <label htmlFor="contact-subject">What is this about?</label>
          <select
            id="contact-subject"
            name="subject"
            defaultValue="general"
            required
          >
            <option value="general">General enquiry</option>
            <option value="programmes">Programmes and referrals</option>
            <option value="volunteering">Volunteering</option>
            <option value="partnership">Partnerships and CSR</option>
            <option value="support">Supporting the mission</option>
            <option value="media">Media and press</option>
            <option value="concern">A concern or complaint</option>
            <option value="photography">Photography and archive</option>
          </select>
        </div>

        <div className="field field--full">
          <label htmlFor="contact-message">Your message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            placeholder="Share enough context for the organisation to route your message. Please avoid sensitive personal information."
            required
          />
        </div>

        <div className="field field--placeholder" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="field field--full contact-form__consent">
          <label className="checkbox">
            <input type="checkbox" name="consent" required />
            <span>
              I agree that Darpan Welfare Society may use these details to
              respond to my enquiry. I have read the{" "}
              <Link href="/privacy">privacy page</Link>.
            </span>
          </label>
        </div>
      </div>

      <div className="contact-form__footer">
        <button
          type="submit"
          className="btn btn--forest"
          disabled={status.state === "sending"}
        >
          {status.state === "sending" ? "Sending…" : "Send message"}
          <ArrowUpRight size={15} aria-hidden="true" />
        </button>
        <p>No message is delivered until a form service is connected.</p>
      </div>

      <div
        className={`form-status form-status--${status.state}`}
        role="status"
        aria-live="polite"
      >
        {status.message ? <p>{status.message}</p> : null}
      </div>

      <p className="contact-form__alt">
        <Instagram size={15} aria-hidden="true" />
        Prefer social? Write to{" "}
        <a
          href="https://www.instagram.com/darpanwelfare/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @darpanwelfare
          <ArrowUpRight size={12} aria-hidden="true" />
        </a>
      </p>
    </form>
  );
}
