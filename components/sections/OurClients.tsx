"use client";

import Image from "next/image";

export default function OurClients() {
  const clients = [
    { id: 1, name: "Safaricom", logo: "/Home/safaricom.png" },
    { id: 2, name: "Mastercard Foundation", logo: "/Home/mastercard.png" },
    { id: 3, name: "GIZ", logo: "/Home/giz.png" },
    { id: 4, name: "European Union", logo: "/Home/eu.png" },
    { id: 5, name: "Great Rift Valley", logo: "/Home/great-rift-valley.png" },
    { id: 6, name: "National Bank of Ethiopia", logo: "/Home/nbe.png" },
    { id: 7, name: "Ethiopian Lottery Service", logo: "/Home/ethiopian-lottery.png" },
    { id: 8, name: "Ethiopian Airlines", logo: "/Home/ethiopian-airlines.png" },
    { id: 9, name: "Ethel Events", logo: "/Home/ethel-events.png" },
    { id: 10, name: "FB Automotive", logo: "/Home/fb-automotive.png" },
    { id: 11, name: "Unilever", logo: "/Home/unilever.png" },
    { id: 12, name: "FTI 2035 Strategy", logo: "/Home/fti-2035.png" },
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
        background: '#000000',
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontSize: 'clamp(3rem, 10vw, var(--h2-size))',
          fontFamily: 'var(--font-primary)',
          lineHeight: 'var(--h2-line)',
          fontWeight: '400',
          color: '#F7F7F8',
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
          textAlign: 'center',
        }}
      >
        OUR CLIENT'S
      </h2>

      {/* Clients Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'var(--space-xs, 32px)',
          width: '100%',
          maxWidth: '1400px',
        }}
      >
        {clients.map((client) => (
          <div
            key={client.id}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 'var(--space-xl, 48px)',
              background: '#4A4A5A33',
              aspectRatio: '1 / 1',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            className="client-card"
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
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .client-card:hover {
          background: rgba(74, 74, 90, 0.2);
          border-color: rgba(247, 247, 248, 0.2);
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
}

