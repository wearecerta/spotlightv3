"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactInput() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit() {
    setError("");

    if (!name.trim()) return setError("Name is required");
    if (!email.trim()) return setError("Email is required");
    if (!message.trim()) return setError("Message is required");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return setError("Please enter a valid email");
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full bg-transparent border-b border-(--spotlight-700) py-3 text-(--spotlight-50) placeholder-(--spotlight-500) focus:outline-none";

  if (success) {
    return (
      <p className="mt-6 text-(--spotlight-50)">
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
      <div className="">
        <textarea
          placeholder="Message"
          rows={2}
          className={`${inputClass} resize-none`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {/* Send Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-10 self-end flex items-center gap-(--space-xxs) bg-(--spotlight-50) px-(--space-sm) py-(--space-xxs) text-lg font-medium text-(--spotlight-950) hover:bg-(--spotlight-100) transition disabled:opacity-50"
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
