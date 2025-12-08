"use client";

import Image from "next/image";

interface AwardsCardProps {
  organization: string;
  award: string;
  imageSrc: string;
  className?: string;
}

export default function AwardsCard({
  organization,
  award,
  imageSrc,
  className = "",
}: AwardsCardProps) {
  return (
    <div
      className={`flex flex-col items-center overflow-hidden ${className}`}
      style={{
        borderRadius: '24px',
        border: '1px solid rgba(247, 247, 248, 0.2)',
        background: 'linear-gradient(180deg, rgba(74, 74, 90, 0.3) 0%, rgba(12, 12, 14, 0.8) 100%)',
        padding: 'var(--space-xl)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Organization Name */}
      <h3
        className="text-center mb-4"
        style={{
          fontFamily: 'var(--font-primary)',
          fontSize: 'var(--h4-size)',
          lineHeight: 'var(--h4-line)',
          fontWeight: '400',
          color: 'var(--spotlight-50)',
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
        }}
      >
        {organization}
      </h3>

      {/* Award Title */}
      <p
        className="text-center mb-6"
        style={{
          fontFamily: 'var(--font-secondary)',
          fontSize: 'var(--body-large-size)',
          lineHeight: 'var(--body-large-line-height)',
          fontWeight: '300',
          color: 'var(--spotlight-100)',
        }}
      >
        {award}
      </p>

      {/* Award Image */}
      <div 
        className="relative w-full"
        style={{
          aspectRatio: '3/4',
          borderRadius: '16px',
          overflow: 'hidden',
        }}
      >
        <Image
          src={imageSrc}
          alt={`${organization} - ${award}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}

