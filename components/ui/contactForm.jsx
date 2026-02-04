"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactInput() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const inputClass =
    "w-full bg-transparent py-3 focus:outline-none placeholder-[var(--spotlight-500)] text-[var(--spotlight-50)] border-b border-[var(--spotlight-700)]";

  async function handleSubmit() {
    setError("");

    if (!name.trim()) return setError("Name is required");
    if (!email.trim()) return setError("Email is required");
    if (!message.trim()) return setError("Message is required");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return setError("Please enter a valid email");
    if (!captchaToken) {
      return setError("Please verify you are not a robot");
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          captchaToken,
        }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setCaptchaToken(null);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <p className="mt-6 text-[var(--spotlight-50)]">
        Thank you! We’ll get back to you shortly.
      </p>
    );
  }

  return (
    <div className="mt-8 flex flex-col max-w-3xl">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-8">
        <input
          type="text"
          placeholder="Name"
          className={inputClass}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className={inputClass}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Message */}
      <div className="mt-4">
        <textarea
          placeholder="Message"
          rows={2}
          className={`${inputClass} resize-none`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {/*  reCAPTCHA checkbox */}
      <div className="mt-4">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={(token) => setCaptchaToken(token)}
          theme="dark" 
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-4 self-end flex items-center gap-[var(--space-xxs)] bg-[var(--spotlight-50)] px-[var(--space-sm)] py-[var(--space-xxs)] text-lg font-medium text-[var(--spotlight-950)] hover:bg-[var(--spotlight-100)] transition disabled:opacity-50"
      >
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#0C0C0E" />
        </svg>
        {loading ? "SENDING" : "SEND"}
      </button>

      {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
    </div>
  );
}