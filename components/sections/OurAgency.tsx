"use client";

import Image from "next/image";

export default function OurAgency() {
  const agencies = [
    { id: 1, name: "Urban", logo: "/Home/urban.svg" },
    { id: 2, name: "Domino Marketing Solutions", logo: "/Home/domino.png" },
    { id: 3, name: "Certa", logo: "/Home/certa.png" },
    { id: 4, name: "Making Events", logo: "/Home/making-events.png" },
    { id: 5, name: "On A Rebel", logo: "/Home/on-a-rebel.jpg" },
  ];
 
  return (
    <section
      style={{
        display: 'flex',
        padding: 'var(--section-margin-y, 120px) var(--section-margin-x, 120px)',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-xxl, 64px)',
        alignSelf: 'stretch',
        background: '#F7F7F8',
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontSize: 'clamp(3rem, 10vw, var(--h2-size))',
          fontFamily: 'var(--font-primary)',
          lineHeight: 'var(--h2-line)',
          fontWeight: '400',
          color: '#4A4A5A',
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
          textAlign: 'center',
        }}
      >
        OUR AGENCY NETWORKS
      </h2>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-secondary, Outfit)',
          fontSize: 'var(--body-large-size, 24px)',
          lineHeight: '150%',
          fontWeight: '300',
          color: '#4A4A5A',
          textAlign: 'center',
          maxWidth: '900px',
        }}
      >
        A multi-industry creative ecosystem powering everything from
        storytelling to technology and experiences.
      </p>

      {/* Agencies Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 'var(--space-lg, 32px)',
          width: '100%',
          maxWidth: '1400px',
        }}
      >
        {agencies.map((agency) => (
          <div
            key={agency.id}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 'var(--space-xl, 48px) var(--space-lg, 32px)',
              background: 'rgba(255, 255, 255, 0.5)',
              border: '1px solid rgba(74, 74, 90, 0.1)',
              borderRadius: '16px',
              aspectRatio: '4 / 3',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            className="agency-card"
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src={agency.logo}
                alt={agency.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .agency-card:hover {
          background: rgba(255, 255, 255, 0.8);
          border-color: rgba(74, 74, 90, 0.2);
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
}

