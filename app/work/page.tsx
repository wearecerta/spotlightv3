"use client";

import Ourworks from "@/components/sections/Ourworks";
import WorkCard from "@/components/ui/WorkCard";

export default function Work() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#F7F7F8',
        position: 'relative',
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          display: 'flex',
          minHeight: '100vh',
          padding: 'var(--section-margin-y, 120px) var(--section-margin-x, 120px)',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 'var(--space-xl, 48px)',
          alignSelf: 'stretch',
          position: 'relative',
        }}
      >
        {/* Hero Heading */}
        <h1
          style={{
            fontFamily: 'var(--font-primary, "Bebas Neue")',
            fontSize: 'clamp(80px, 12vw, 148px)',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '100%',
            textTransform: 'uppercase',
            textAlign: 'center',
            alignSelf: 'stretch',
          }}
        >
          <span style={{ color: '#C7C7CC' }}>WE MAKE </span>
          <span style={{ color: '#0C0C0E' }}>STANDING</span>
          <br />
          <span style={{ color: '#0C0C0E' }}>OUT </span>
          <span style={{ color: '#C7C7CC' }}>SIMPLE</span>
        </h1>
      </section>

      {/* Works Section with Filter */}
      <section
        style={{
          display: 'flex',
          padding: 'var(--section-margin-y, 120px) var(--section-margin-x, 120px)',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 'var(--space-xl, 48px)',
          alignSelf: 'stretch',
          background: '#F7F7F8',
        }}
      >
        {/* Works Heading */}
        <h2
          style={{
            color: 'var(--color-Spotlight-Color-Dark-Gray, #4A4A5A)',
            fontFamily: 'var(--font-primary, "Bebas Neue")',
            fontSize: 'var(--h2-size, 148px)',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '100%',
            textTransform: 'uppercase',
            alignSelf: 'stretch',
          }}
        >
          WORKS
        </h2>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 'var(--space-xl, 48px)',
            alignSelf: 'stretch',
          }}
        >
          {['ALL', 'ADVERTISING', 'STORYTELLING', 'TVC', 'MARKETING'].map((filter, index) => (
            <div key={filter} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xl, 48px)' }}>
              <button
                className="work-filter-button"
                style={{
                  padding: '0',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--color-Spotlight-Color-Light-Gray, #B6B7C3)',
                  fontFamily: 'var(--font-primary, "Bebas Neue")',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '120%',
                  textTransform: 'uppercase',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#4A4A5A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#B6B7C3';
                }}
              >
                {filter}
              </button>
              {index < 4 && (
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#B6B7C3',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section
        style={{
          display: 'flex',
          padding: '0 var(--section-margin-x, 120px) var(--section-margin-y, 120px)',
          flexDirection: 'column',
          gap: 'var(--space-lg, 32px)',
          alignSelf: 'stretch',
          background: '#FFFFFF',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg, 32px)' }}>
        {/* First Card - Full Width */}
        <WorkCard
          title="SAFARICOM ETHIOPIA"
          tags={["BRANDING", "MARKETING", "PRODUCTION"]}
          videoSrc="https://www.youtube.com/watch?v=c5iitHD0bNg"
          href="/work/safaricom-ethiopia"
        />

        {/* Second Row - Two Cards Side by Side */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-lg, 32px)' }}>
          <WorkCard
            title="ADEY MUSIC AND STUDIO"
            tags={["BRANDING", "MARKETING", "PRODUCTION"]}
            videoSrc="https://www.youtube.com/watch?v=c5iitHD0bNg"
            href="/work/adey-music"
          />

          <WorkCard
            title="ST. GEORGE"
            tags={["BRANDING", "MARKETING", "PRODUCTION"]}
            videoSrc="https://www.youtube.com/watch?v=c5iitHD0bNg"
            href="/work/st-george"
          />
        </div>

        {/* Third Row - Two Cards Side by Side */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-lg, 32px)' }}>
          <WorkCard
            title="GRV SUMMIT"
            tags={["BRANDING", "MARKETING", "PRODUCTION"]}
            videoSrc="https://www.youtube.com/watch?v=c5iitHD0bNg"
            href="/work/grv-summit"
          />

          <WorkCard
            title="EU & AFRICA"
            tags={["BRANDING", "MARKETING", "PRODUCTION"]}
            videoSrc="https://www.youtube.com/watch?v=c5iitHD0bNg"
            href="/work/eu-africa"
          />
        </div>

        {/* Fourth Row - Two Cards Side by Side */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-lg, 32px)' }}>
          <WorkCard
            title="ADEY MUSIC AND STUDIO"
            tags={["BRANDING", "MARKETING", "PRODUCTION"]}
            videoSrc="https://www.youtube.com/watch?v=c5iitHD0bNg"
            href="/work/adey-music-2"
          />

          <WorkCard
            title="ST. GEORGE"
            tags={["BRANDING", "MARKETING", "PRODUCTION"]}
            videoSrc="https://www.youtube.com/watch?v=c5iitHD0bNg"
            href="/work/st-george-2"
          />
        </div>
        </div>
      </section>
    </main>
  );
}