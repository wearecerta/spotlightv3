"use client";

import BlogCard from "@/components/ui/BlogCard";

export default function Blog() {
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
          <span style={{ color: '#0C0C0E' }}>BEHIND EVERY </span>
          <span style={{ color: '#C7C7CC' }}>AD</span>
          <br />
          <span style={{ color: '#0C0C0E' }}>THERE'S </span>
          <span style={{ color: '#C7C7CC' }}>A STORY</span>
        </h1>
      </section>

      {/* Blogs Section */}
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
        {/* Blogs Heading */}
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
          BLOGS
        </h2>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 'var(--space-xl, 48px)',
            alignSelf: 'stretch',
            paddingLeft: '4px',
          }}
        >
          {['ALL', 'ADVERTISING', 'STORYTELLING', 'TVC', 'MARKETING'].map((filter, index) => (
            <div key={filter} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xl, 48px)' }}>
              <button
                className="blog-filter-button"
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

        {/* Blog Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--space-lg, 32px)',
            alignSelf: 'stretch',
            marginTop: 'var(--space-xl, 48px)',
          }}
        >
          <BlogCard
            title="BRANDING BEYOND LOGOS: BUILDING LASTING CONNECTIONS"
            excerpt="A strong brand isn't just about colors or logos—it's about the emotions, values, and stories ..."
            author="Admin"
            date="August 10, 2025"
            tags={["BRANDING", "MARKETING", "PRODUCTION"]}
            imageSrc="/Blog/BlogCard-1.jpg"
            href="/blog/branding-beyond-logos"
          />

          <BlogCard
            title="FROM SCRIPT TO SCREEN: HOW A GREAT TVC COMES TO LIFE"
            excerpt="Every great commercial starts with a story. In today's fast-paced world, brands can't just..."
            author="Admin"
            date="August 10, 2025"
            tags={["BRANDING", "MARKETING", "PRODUCTION"]}
            imageSrc="/Blog/BlogCard-2.jpg"
            href="/blog/script-to-screen"
          />
        </div>

        {/* Second Row of Blog Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--space-lg, 32px)',
            alignSelf: 'stretch',
          }}
        >
          <BlogCard
            title="BRANDING BEYOND LOGOS: BUILDING LASTING CONNECTIONS"
            excerpt="A strong brand isn't just about colors or logos—it's about the emotions, values, and stories ..."
            author="Admin"
            date="August 10, 2025"
            tags={["BRANDING", "MARKETING", "PRODUCTION"]}
            imageSrc="/Blog/BlogCard-1.jpg"
            href="/blog/branding-beyond-logos-2"
          />

          <BlogCard
            title="FROM SCRIPT TO SCREEN: HOW A GREAT TVC COMES TO LIFE"
            excerpt="Every great commercial starts with a story. In today's fast-paced world, brands can't just..."
            author="Admin"
            date="August 10, 2025"
            tags={["BRANDING", "MARKETING", "PRODUCTION"]}
            imageSrc="/Blog/BlogCard-2.jpg"
            href="/blog/script-to-screen-2"
          />
        </div>
      </section>
    </main>
  );
}