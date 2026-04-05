"use client";

import { FormEvent, useState } from "react";

type Interest = "CONSULTANCY" | "TRAINING" | "MATERIALS" | "BOOKS" | "PARTNERSHIP";

type ContactPayload = {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  interest: Interest;
  message: string;
};

const initialPayload: ContactPayload = {
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  interest: "CONSULTANCY",
  message: ""
};

const interestOptions: Array<{ label: string; value: Interest }> = [
  { label: "Consultancy", value: "CONSULTANCY" },
  { label: "Teacher Training", value: "TRAINING" },
  { label: "Educational Materials", value: "MATERIALS" },
  { label: "Books and Curriculum", value: "BOOKS" },
  { label: "Partnership", value: "PARTNERSHIP" }
];

export function ContactForm() {
  const [payload, setPayload] = useState<ContactPayload>(initialPayload);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        setStatus("error");
        setFeedback("We could not submit your request right now. Please try again.");
        return;
      }

      setStatus("success");
      setFeedback("Thanks. Your message has been sent. Our team will reach out shortly.");
      setPayload(initialPayload);
    } catch {
      setStatus("error");
      setFeedback("A network issue occurred. Please try again in a moment.");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-grid">
        <label>
          Full Name
          <input
            type="text"
            name="fullName"
            required
            value={payload.fullName}
            onChange={(event) => setPayload((prev) => ({ ...prev, fullName: event.target.value }))}
          />
        </label>

        <label>
          Email Address
          <input
            type="email"
            name="email"
            required
            value={payload.email}
            onChange={(event) => setPayload((prev) => ({ ...prev, email: event.target.value }))}
          />
        </label>

        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            required
            value={payload.phone}
            onChange={(event) => setPayload((prev) => ({ ...prev, phone: event.target.value }))}
          />
        </label>

        <label>
          School or Organization
          <input
            type="text"
            name="organization"
            required
            value={payload.organization}
            onChange={(event) => setPayload((prev) => ({ ...prev, organization: event.target.value }))}
          />
        </label>

        <label>
          Interest Area
          <select
            name="interest"
            value={payload.interest}
            onChange={(event) =>
              setPayload((prev) => ({
                ...prev,
                interest: event.target.value as Interest
              }))
            }
          >
            {interestOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="form-full">
          Message
          <textarea
            name="message"
            rows={5}
            required
            value={payload.message}
            onChange={(event) => setPayload((prev) => ({ ...prev, message: event.target.value }))}
          />
        </label>
      </div>

      <div className="form-actions">
        <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
        <p className={`form-feedback ${status}`}>{feedback}</p>
      </div>
    </form>
  );
}
