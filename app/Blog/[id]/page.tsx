import Image from "next/image";

interface BlogDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogDetail({ params }: BlogDetailPageProps) {
  const { id } = await params;

  // TODO: Fetch blog data from Sanity based on id
  // For now, using placeholder data matching the design
  const blogData = {
    title: "BRANDING BEYOND LOGOS: BUILDING LASTING CONNECTIONS",
    author: "Admin",
    date: "August 10, 2025",
    tags: ["STORYTELLING", "BRANDING"],
    heroImage: "/Blog/BlogCard-1.jpg",
    content: {
      paragraphs: [
        "A strong brand isn't just about colors or logos—it's about the emotions, values, and stories that shape how people feel about your business. Discover how to build a brand that inspires trust and creates meaningful, lasting relationships with your audience.",
        "When most people hear the word brand, they often think of a logo, a color palette, or maybe a catchy slogan. But branding goes far deeper than design. The world's most successful brands don't just stand out visually—they connect emotionally. They build trust, loyalty, and lasting relationships that go far beyond what's on the surface.",
        "A logo may catch someone's eye, but it's the feeling behind your brand that keeps them coming back. Think of brands like Apple or Nike—their visuals are iconic, but what truly resonates is the experience they create: innovation, aspiration, belonging. To build this emotional bond, businesses must ask: What do we want people to feel when they engage with us?",
      ],
      headings: [
        "BRANDING IS ABOUT EMOTION, NOT DECORATION",
      ],
      additionalSections: [
        {
          heading: "VALUES SPEAK LOUDER THAN WORDS",
          paragraphs: [
            "Today's customers are conscious and value-driven. They don't just buy products; they support brands that align with their beliefs. Whether it's sustainability, empowerment, or community impact, your values should shine through every interaction. When values are consistent, customers feel a sense of trust and authenticity. And trust is the foundation of brand loyalty.",
          ],
        },
        {
          heading: "STORYTELLING MAKES IT MEMORABLE",
          paragraphs: [
            "Humans are wired to remember stories—not slogans. A brand story weaves together your mission, history, and vision in a way that feels relatable and inspiring. It gives customers a reason to care, not just a reason to buy.",
            "Ask yourself: What journey led us here? Who do we serve, and why does it matter? That's the story your audience wants to hear.",
          ],
        },
      ],
    },
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F7F7F8",
        position: "relative",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          display: "flex",
          padding: "var(--section-margin-y, 120px) var(--section-margin-x, 120px)",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--space-lg, 32px)",
          alignSelf: "stretch",
          background: "#F7F7F8",
          position: "relative",
        }}
      >
        {/* Blog Title */}
        <h1
          style={{
            fontFamily: "var(--font-primary, 'Bebas Neue')",
            fontSize: "clamp(40px, 6vw, 80px)",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "120%",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#4F4F4F",
            margin: 0,
            maxWidth: "1200px",
          }}
        >
          {blogData.title}
        </h1>

        {/* Author and Date */}
        <p
          style={{
            fontFamily: "var(--font-secondary, 'Outfit')",
            fontSize: "clamp(16px, 1.5vw, 20px)",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "150%",
            textAlign: "center",
            color: "#4A4A5A",
            margin: 0,
          }}
        >
          By {blogData.author} · {blogData.date}
        </p>

        {/* Categories/Tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--space-md, 24px)",
          }}
        >
          {blogData.tags.map((tag, index) => (
            <div key={tag} style={{ display: "flex", alignItems: "center", gap: "var(--space-md, 24px)" }}>
              <span
                style={{
                  fontFamily: "var(--font-secondary, 'Outfit')",
                  fontSize: "clamp(14px, 1.2vw, 18px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "150%",
                  textTransform: "uppercase",
                  textAlign: "center",
                  color: "#4A4A5A",
                }}
              >
                {tag}
              </span>
              {index < blogData.tags.length - 1 && (
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#4A4A5A",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Hero Image */}
        <div
          style={{
            position: "relative",
            width: "1200px",
            maxWidth: "100%",
            height: "675px",
            marginTop: "var(--space-xl, 48px)",
            borderRadius: "44px",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Image
            src={blogData.heroImage}
            alt={blogData.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            priority
          />
        </div>
      </section>

      {/* Blog Content Section */}
      <section
        style={{
          display: "flex",
          padding: "var(--section-margin-y, 120px) var(--section-margin-x, 120px)",
          flexDirection: "row",
          gap: "var(--space-xl, 48px)",
          alignSelf: "stretch",
          background: "#F7F7F8",
          position: "relative",
        }}
      >
        {/* Left Sidebar - Social Sharing */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--space-lg, 32px)",
            flex: "0 0 auto",
            minWidth: "80px",
            position: "relative",
            paddingRight: "var(--space-lg, 32px)",
          }}
        >
          {/* Dashed Vertical Line */}
          <div
            style={{
              position: "absolute",
              right: "0",
              top: "0",
              bottom: "0",
              width: "1px",
              borderLeft: "2px dashed #4A4A5A",
              opacity: 0.3,
            }}
          />

          {/* Share Button */}
          <button
            style={{
              padding: "var(--space-xs, 16px) var(--space-lg, 32px)",
              background: "#FFFFFF",
              border: "1px solid #0C0C0E",
              borderRadius: "50px",
              fontFamily: "var(--font-secondary, 'Outfit')",
              fontSize: "var(--body-medium-size, 16px)",
              fontWeight: "400",
              color: "#0C0C0E",
              cursor: "pointer",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Share
          </button>

          {/* Social Icons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md, 24px)",
              alignItems: "center",
            }}
          >
            {/* Facebook */}
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#0C0C0E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* LinkedIn */}
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#0C0C0E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="4" cy="4" r="2" stroke="#FFFFFF" strokeWidth="2" />
              </svg>
            </div>

            {/* Instagram */}
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#0C0C0E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#FFFFFF" strokeWidth="2" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="#FFFFFF" strokeWidth="2" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* X (Twitter) */}
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#0C0C0E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column - Blog Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            maxWidth: "800px",
            gap: "var(--space-lg, 32px)",
          }}
        >
          {/* First Paragraph */}
          <p
            style={{
              fontFamily: "var(--font-secondary, 'Outfit')",
              fontSize: "var(--body-large-size, 20px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%",
              textAlign: "left",
              color: "#0C0C0E",
              margin: 0,
            }}
          >
            {blogData.content.paragraphs[0]}
          </p>

          {/* Second Paragraph */}
          <p
            style={{
              fontFamily: "var(--font-secondary, 'Outfit')",
              fontSize: "var(--body-large-size, 20px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%",
              textAlign: "left",
              color: "#0C0C0E",
              margin: 0,
            }}
          >
            {blogData.content.paragraphs[1]}
          </p>

          {/* Section Heading */}
          <h2
            style={{
              fontFamily: "var(--font-primary, 'Bebas Neue')",
              fontSize: "clamp(40px, 5vw, 80px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "100%",
              textTransform: "uppercase",
              textAlign: "left",
              color: "#4F4F4F",
              margin: "var(--space-xl, 48px) 0",
            }}
          >
            {blogData.content.headings[0]}
          </h2>

          {/* Third Paragraph */}
          <p
            style={{
              fontFamily: "var(--font-secondary, 'Outfit')",
              fontSize: "var(--body-large-size, 20px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%",
              textAlign: "left",
              color: "#0C0C0E",
              margin: 0,
            }}
          >
            {blogData.content.paragraphs[2]}
          </p>

          {/* Additional Content Sections */}
          {blogData.content.additionalSections.map((section: { heading: string; paragraphs: string[] }, index: number) => (
            <div key={index} style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg, 32px)" }}>
              {/* Section Heading */}
              <h2
                style={{
                  fontFamily: "var(--font-primary, 'Bebas Neue')",
                  fontSize: "clamp(40px, 5vw, 80px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "100%",
                  textTransform: "uppercase",
                  textAlign: "left",
                  color: "#4F4F4F",
                  margin: 0,
                }}
              >
                {section.heading}
              </h2>

              {/* Section Paragraphs */}
              {section.paragraphs.map((paragraph: string, paraIndex: number) => (
                <p
                  key={paraIndex}
                  style={{
                    fontFamily: "var(--font-secondary, 'Outfit')",
                    fontSize: "var(--body-large-size, 20px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "150%",
                    textAlign: "left",
                    color: "#0C0C0E",
                    margin: 0,
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
