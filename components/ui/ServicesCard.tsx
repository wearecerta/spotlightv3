"use client";

import Link from "next/link";
import Image from "next/image";

interface ServicesCardProps {
  title: string;
  description: string;
  services: {
    title: string;
    slug: {
      current: string;
    };
  }[];
  imageSrc1: string;
  imageSrc2: string;
  href: string;
  className?: string;
  alt1?: string;
  alt2?: string;
}

export default function ServicesCard({
  title,
  description,
  services,
  imageSrc1,
  imageSrc2,
  alt1,
  alt2,
  href,
  className = "",
}: ServicesCardProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Sticky Content Section */}
      <div
        style={{
          position: "sticky",
          top: "0",
          // paddingTop: "16px",
          // paddingBottom: "var(--space-xl, 48px)",
          // paddingLeft: "var(--space-xxl, 64px)",
          // paddingRight: "var(--space-xxl, 64px)",
          background: "#F7F7F8",
          width: "100vw",
          zIndex: 10,
        }}
        className="p-(--space-sm) md:px-(--space-xxl) md:py-6"
      >
        <div
          className="block w-full group"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {/* Arrow Icon - Top Right */}
          <Link
            scroll
            href={href}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "var(--space-md, 24px)",
            }}
          >
            {/* Right: Arrow Icon */}
            <Image
              src="/Icons/dark-arrow.svg"
              alt="Arrow Icon"
              width={24}
              height={24}
              className="transition-transform hidden md:block h-6 w-6"
            />
          </Link>

          {/* Title and Description */}
          <Link
          scroll
            href={href}
            // style={{
            //   display: "flex",
            //   alignItems: "flex-start",
            //   justifyContent: "space-between",
            //   gap: "var(--space-xl, 48px)",
            //   marginBottom: "var(--space-lg, 32px)",
            // }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-(--space-xs) mb-(--space-lg)"
          >
            {/* Left: Title */}
            <div className="flex justify-between ">
              <h2
                style={{
                  color: "#0C0C0E",
                  fontFamily: 'var(--font-primary, "Bebas Neue")',
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "100%",
                  textTransform: "uppercase",
                  flex: "0 0 auto",
                  maxWidth: "400px",
                }}
                className="text-[#0C0C0E] text-[32px] md:text-[56px]"
              >
                {title}
              </h2>

              <Image
                src="/Icons/dark-arrow.svg"
                alt="Arrow Icon"
                width={24}
                height={24}
                className="transition-transform md:hidden h-6 w-6"
              />
            </div>

            {/* Right: Description */}
            <p
              style={{
                color: "#0C0C0E",
                fontFamily: "var(--font-secondary, Outfit)",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "150%",
                // flex: "1",
              }}
              className="md:w-1/2"
            >
              {description}
            </p>
          </Link>

          {/* Services List */}
          <div className="md:flex flex-wrap items-center hidden gap-(--space-sm)">
            {services?.map((service, index) => (
              <div
                key={service?.slug?.current || index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-sm, 16px)",
                }}
              >
                <Link
                scroll
                  href={
                    service?.slug?.current
                      ? `/blog/${service?.slug?.current}`
                      : "#"
                  }
                  style={{
                    color: "#4A4A5A",
                    fontFamily: "var(--font-secondary, Outfit)",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "150%",
                    textTransform: "uppercase",
                  }}
                >
                  {service.title}
                </Link>
                {index < services.length - 1 && (
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#B6B7C3",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Two Images Side by Side - No Gap (Scrolls Normally) */}
      <Link scroll href={href} className="block group">
        <div
          // style={{
          //   display: "grid",
          //   gridTemplateColumns: "repeat(2, 1fr)",
          //   gap: "0",
          //   width: "100vw",
          //   height: "600px",
          // }}
          className="grid grid-cols-1 md:grid-cols-2 gap-0  w-full "
        >
          {/* Image 1 */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              aspectRatio: "1/1",
            }}
          >
            <Image
              src={imageSrc1}
              alt={alt1 || `${title} - Image 1`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Image 2 */}
          <div
            style={{
              position: "relative",
              aspectRatio: "1/1",
              overflow: "hidden",
            }}
          >
            <Image
              src={imageSrc2}
              alt={alt2 || `${title} - Image 2`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
