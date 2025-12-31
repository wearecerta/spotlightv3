"use client";

import Link from "next/link";
import Image from "next/image";

interface ServicesCardProps {
  title: string;
  description: string;
  services: string[];
  imageSrc1: string;
  imageSrc2: string;
  href: string;
  className?: string;
}

export default function ServicesCard({
  title,
  description,
  services,
  imageSrc1,
  imageSrc2,
  href,
  className = "",
}: ServicesCardProps) {
  return (
    <div className={`relative ${className}`} style={{ minHeight: '100vh' }}>
      {/* Sticky Content Section */}
      <div
        style={{
          position: 'sticky',
          top: '0',
          paddingTop: '10px',
          paddingBottom: 'var(--space-xxl, 64px)',
          paddingLeft: 'var(--space-xl, 48px)',
          paddingRight: 'var(--space-xl, 48px)',
          background: '#F7F7F8',
          width: '100vw',
          marginLeft: 'calc(-1 * var(--section-margin-x, 120px))',
          zIndex: 10,
        }}
      >
        <Link href={href} className="block w-full group " style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Arrow Icon - Top Right */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 'var(--space-md, 24px)' }}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              <path
                d="M8 24L24 8M24 8H12M24 8V20"
                stroke="#0C0C0E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Title and Description - Aligned Horizontally */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: 'var(--space-xl, 48px)',
              marginBottom: 'var(--space-lg, 32px)',
            }}
          >
            {/* Left: Title */}
            <h2
              style={{
                color: '#0C0C0E',
                fontFamily: 'var(--font-primary, "Bebas Neue")',
                fontSize: '56px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '100%',
                textTransform: 'uppercase',
                flex: '0 0 auto',
                maxWidth: '400px',
              }}
            >
              {title}
            </h2>

            {/* Right: Description */}
            <p
              style={{
                color: '#0C0C0E',
                fontFamily: 'var(--font-secondary, Outfit)',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '150%',
                flex: '1',
              }}
            >
              {description}
            </p>
          </div>

          {/* Services List */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 'var(--space-sm, 16px)',
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm, 16px)',
                }}
              >
                <span
                  style={{
                    color: '#4A4A5A',
                    fontFamily: 'var(--font-secondary, Outfit)',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '150%',
                    textTransform: 'uppercase',
                  }}
                >
                  {service}
                </span>
                {index < services.length - 1 && (
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#D1D1D6',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </Link>
      </div>

      {/* Two Images Side by Side - No Gap (Scrolls Normally) */}
      <Link href={href} className="block group">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0',
            width: '100vw',
            marginLeft: 'calc(-1 * var(--section-margin-x, 120px))',
            height: '480px',
          }}
        >
          {/* Image 1 */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
            }}
          >
            <Image
              src={imageSrc1}
              alt={`${title} - Image 1`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="50vw"
            />
          </div>

          {/* Image 2 */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
            }}
          >
            <Image
              src={imageSrc2}
              alt={`${title} - Image 2`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="50vw"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

