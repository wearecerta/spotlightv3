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
        className="max-w-[1440px] mx-auto"
      >
        {/* Hero Heading */}
        <h1
          className="text-center uppercase leading-none"
          style={{
            fontFamily: 'var(--font-primary, "Bebas Neue")',
            fontSize: "var(--h2-size)",
          }}
        >
          <span style={{ color: '#0C0C0E' }}>BEHIND EVERY </span>
          <span style={{ color: '#B6B7C3' }}>AD,</span>
          <br />
          <span style={{ color: '#0C0C0E' }}>THERE'S </span>
          <span style={{ color: '#B6B7C3' }}>A STORY</span>
        </h1>
      </section>

      {/* Blogs Section */}
      <section
        style={{
          display: 'flex',
          padding: 'var(--section-margin-y, 120px) var(--section-margin-x, 120px)',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 'var(--space-xxl, 48px)',
          alignSelf: 'stretch',
          background: '#F7F7F8',
        }}
        className="max-w-[1440px] mx-auto"
      >
        {/* Blogs Heading */}
        <h2
          className="uppercase leading-none"
          style={{
            fontFamily: 'var(--font-primary, "Bebas Neue")',
            fontSize: "var(--h2-size)",
            color: "#4A4A5A",
          }}
        >
          BLOGS
        </h2>

        <div className="flex flex-wrap gap-y-2 items-center gap-4">
          {['ALL', 'ADVERTISING', 'STORYTELLING', 'TVC', 'MARKETING'].map(
            (filter, index) => (
              <div key={filter} className="flex items-center gap-4">
                <button
                  className="uppercase transition-colors duration-300"
                  style={{
                    fontFamily: 'var(--font-primary, "Bebas Neue")',
                    fontSize: "24px",
                    color: "#B6B7C3",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#4A4A5A")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#B6B7C3")
                  }
                >
                  {filter}
                </button>

                {index < 4 && (
                  <span className="w-2 h-2 rounded-full bg-[#B6B7C3]" />
                )}
              </div>
            )
          )}
        </div>


        {/* Blog Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-(--space-lg) self-center"
        >
          <BlogCard
            title="BRANDING BEYOND LOGOS: BUILDING LASTING CONNECTIONS BRANDING BEYOND LOGOS: BUILDING LASTING CONNECTIONS"
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