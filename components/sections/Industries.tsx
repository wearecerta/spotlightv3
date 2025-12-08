export default function Industries() {
  const industries = [
    "FOOD AND BEVERAGE",
    "TRANSPORTATION",
    "FINANCE",
    "NON- PROFIT",
    "TELECOM",
  ];

  return (
    <section
      style={{
        display: 'flex',
        padding: 'var(--section-margin-y, 120px) var(--section-margin-x, 120px)',
        alignItems: 'flex-start',
        gap: 'var(--space-xxl, 64px)',
        alignSelf: 'stretch',
        background: '#F7F7F8',
      }}
    >
      {/* Left Column - Title and Description */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: 'var(--space-xxl, 120px)',
          flex: '1 0 0',
          alignSelf: 'stretch',
        }}
      >
        {/* Title */}
        <h2
          style={{
            fontSize: 'clamp(3rem, 8vw, var(--h2-size))',
            fontFamily: 'var(--font-primary)',
            lineHeight: 'var(--h2-line)',
            fontWeight: '400',
            color: '#4A4A5A',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
          }}
        >
          INDUSTRIES
        </h2>

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--font-secondary, Outfit)',
            fontSize: 'var(--body-large-size, 20px)',
            lineHeight: 'var(--body-large-line-height, 150%)',
            fontWeight: '300',
            color: '#4A4A5A',
          }}
        >
          We work across diverse industries, bringing tailored strategies and
          creative solutions that deliver real impact. From telecom and
          finance to fashion, film, real estate, and technology, our experience
          allows us to understand unique challenges and design approaches
          that help each sector thrive.
        </p>
      </div>

      {/* Right Column - Industries List */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flex: '1 0 0',
          alignSelf: 'stretch',
        }}
      >
        {industries.map((industry, index) => (
          <div key={industry} style={{ width: '100%' }}>
            <div
              style={{
                padding: 'var(--space-lg, 32px) 0',
                borderBottom: index < industries.length - 1 ? '1px solid rgba(74, 74, 90, 0.2)' : 'none',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--h3-size, 48px)',
                  lineHeight: 'var(--h3-line, 110%)',
                  fontWeight: '400',
                  color: '#4A4A5A',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                }}
              >
                {industry}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

