"use client";

import Image from "next/image";
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
  const midPoint = Math.ceil(services?.length / 2);
  const leftColumn = services?.slice(0, midPoint);
  const rightColumn = services?.slice(midPoint);

  return (
    <Link
      href={href}
      scroll
      className={`
        block rounded-3xl p-px
        transition-all duration-300 border border-(--spotlight-700)   
        
        ${className}
      `}
      style={
        {
          background: "linear-gradient(180deg, rgba(74, 74, 90, 0.15) 0%, #0C0C0E 100%)"
        }
      }

// style={{background: "linear-gradient(180deg, rgba(74, 74, 90, 0) 0%, #0C0C0E 100%)"
// }}
      // style={{
      //   background: "linear-gradient(180deg, rgba(74, 74, 90, 0.00) 0%, var(--color-Spotlight-Color-Spotlight-Black, #0C0C0E) 100%)",
      // }}
    >
      <div 
        className="p-6 md:p-8 rounded-[23px] h-full"
        
      >
        {/* Header Section */}
        <div className="flex items-start justify-between mb-2">
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
          <Image
            src="/Icons/arrow.svg"
            alt="Arrow Icon"
            width={32}
            height={32}
            className="transition-transform h-5 w-5 md:h-8 md:w-8 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>

        {/* Title */}
        <h3
          className="mb-8"
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
          className="mb-8"
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
          <div className="space-y-0  pr-0 md:pr-6">
            {leftColumn?.map((service, index) => (
              <div key={index}>
                <div
                  className="py-3 md:text-center border-b border-[var(--spotlight-800)] "
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
          <div className="space-y-0 md:pl-6">
            {rightColumn?.map((service, index) => (
              <div key={index}>
                <div
                  className="py-3 md:text-center border-b border-[var(--spotlight-800)] "
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

