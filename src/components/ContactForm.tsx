"use client";

import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "lo_eklof";
const TEMPLATE_ID = "template_syx72mo";
const PUBLIC_KEY = "oeL4wbVK6MtNg_Or5";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({ email }: { email: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      formRef.current.reset();
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
      <label className="field">
        <span>Your email</span>
        <input type="email" name="email" required autoComplete="email" />
      </label>
      <label className="field">
        <span>Message</span>
        <textarea name="message" rows={4} required />
      </label>
      <button type="submit" className="button" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {status === "sent" && "Message sent. I'll get back to you soon."}
        {status === "error" && (
          <>
            The message didn&apos;t go through. Email me directly at{" "}
            <a href={`mailto:${email}`}>{email}</a>.
          </>
        )}
      </p>
    </form>
  );
}
