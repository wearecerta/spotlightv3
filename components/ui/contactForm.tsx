"use client";

import Image from "next/image";
import { useState } from "react";

type Step = "name" | "email" | "phone" | "message" | "done";

export default function ContactInput() {
  const [step, setStep] = useState<Step>("name");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleNext() {
    setError("");

    if (step === "name" && !name.trim()) {
      setError("Name is required");
      return;
    }

    if (step === "email") {
      if (!email.trim()) {
        setError("Email is required");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address");
        return;
      }
    }

    if (step === "message" && !message.trim()) {
      setError("Message is required");
      return;
    }

    switch (step) {
      case "name":
        setStep("email");
        break;
      case "email":
        setStep("phone");
        break;
      case "phone":
        setStep("message");
        break;
      case "message":
        handleSubmit();
        break;
    }
  }

  function handleBack() {
    switch (step) {
      case "email":
        setStep("name");
        break;
      case "phone":
        setStep("email");
        break;
      case "message":
        setStep("phone");
        break;
    }
  }

  async function handleSubmit() {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phoneNumber: phone,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit");
      }

      setStep("done");
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function renderInput() {
    const commonClasses =
      "flex-1 bg-transparent border-b border-(--spotlight-700) placeholder-(--spotlight-500) text-(--spotlight-50) py-2 px-1 focus:outline-none";

    switch (step) {
      case "name":
        return (
          <input
            type="text"
            placeholder="Insert Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleNext()}
            className={commonClasses}
          />
        );

      case "email":
        return (
          <input
            type="email"
            placeholder="Insert Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleNext()}
            className={commonClasses}
          />
        );

      case "phone":
        return (
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleNext()}
            className={commonClasses}
          />
        );

      case "message":
        return (
          <textarea
            placeholder="Write Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.ctrlKey) handleNext();
            }}
            rows={3}
            className={`${commonClasses} resize-none`}
          />
        );

      default:
        return null;
    }
  }

  if (step === "done") {
    return (
      <div className="mt-6 p-4">
        <p className="text-(--spotlight-50) text-lg">
          Thank you! We'll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
        <div className="flex-1">
          {renderInput()}

          <div className="flex gap-2 mt-2 text-sm text-(--spotlight-400)">
            {step !== "name" && (
              <button
                onClick={handleBack}
                className="hover:text-(--spotlight-50)"
                disabled={loading}
              >
                ← Back
              </button>
            )}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={loading}
          className="bg-(--spotlight-50) flex items-center justify-center text-(--spotlight-950) gap-2 px-8 py-4 text-xl font-medium shadow-sm sm:w-auto disabled:opacity-50 hover:bg-(--spotlight-100) transition-colors"
        >
          <Image src="/Icons/black-dot.svg" alt="dot" width={14} height={14} />
          <span>
            {loading
              ? "SENDING..."
              : step === "message"
              ? "SEND"
              : "NEXT"}
          </span>
        </button>
      </div>

      {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
    </div>
  );
}
