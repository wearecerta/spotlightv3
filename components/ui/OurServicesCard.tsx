"use client";

import Link from "next/link";

interface OurServicesCardProps {
  number: string; // e.g., "01"
  title: string; // e.g., "PR & COMMUNICATIONS"
  description: string;
  services: string[]; // Array of service items (will be split into two columns)
  href: string;
  className?: string;
}

export default function OurServicesCard({
  number,
  title,
  description,
  services,
  href,
  className = "",
}: OurServicesCardProps) {
  // Split services into two columns
  const midPoint = Math.ceil(services.length / 2);
  const leftColumn = services.slice(0, midPoint);
  const rightColumn = services.slice(midPoint);

  return (
    <Link
      href={href}
      className={`
        block overflow-hidden
        transition-all duration-300
        ${className}
      `}
      style={{
        borderRadius: '24px',
        border: '1px solid #F7F7F8',
        background: 'linear-gradient(180deg, rgba(74, 74, 90, 0.00) 0%, var(--spotlight-950, #0C0C0E) 100%)',
      }}
    >
      <div className="p-6 md:p-8">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-6">
          {/* Left: Number */}
          <div
            className="font-bold"
            style={{
              fontFamily: "var(--font-primary)",
              color: "var(--spotlight-50)",
              fontSize: "var(--h3-size)",
              lineHeight: "var(--h3-line)",
            }}
          >
            {number}
          </div>

          {/* Right: Arrow Icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="transition-colors flex-shrink-0"
            style={{ color: "var(--spotlight-200)" }}
          >
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hover:stroke-[var(--spotlight-50)] transition-colors"
            />
          </svg>
        </div>

        {/* Title */}
        <h3
          className="mb-4"
          style={{
            fontFamily: "var(--font-primary)",
            color: "var(--spotlight-50)",
            fontSize: "var(--h3-size)",
            lineHeight: "var(--h3-line)",
            fontWeight: "400",
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="mb-6"
          style={{
            fontFamily: "var(--font-secondary)",
            color: "var(--spotlight-100)",
            fontSize: "var(--body-medium-size)",
            lineHeight: "var(--body-medium-line-height)",
            fontWeight: "300",
          }}
        >
          {description}
        </p>

        {/* Services List - Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left Column */}
          <div className="space-y-0 pr-0 md:pr-6">
            {leftColumn.map((service, index) => (
              <div key={index}>
                <div
                  className="py-3 border-b border-[var(--spotlight-800)] last:border-b-0"
                  style={{
                    fontFamily: "var(--font-secondary)",
                    color: "var(--spotlight-50)",
                    fontSize: "var(--body-medium-size)",
                    lineHeight: "var(--body-medium-line-height)",
                  }}
                >
                  {service}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-0 md:border-l md:border-[var(--spotlight-800)] md:pl-6">
            {rightColumn.map((service, index) => (
              <div key={index}>
                <div
                  className="py-3 border-b border-[var(--spotlight-800)] last:border-b-0"
                  style={{
                    fontFamily: "var(--font-secondary)",
                    color: "var(--spotlight-50)",
                    fontSize: "var(--body-medium-size)",
                    lineHeight: "var(--body-medium-line-height)",
                  }}
                >
                  {service}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

