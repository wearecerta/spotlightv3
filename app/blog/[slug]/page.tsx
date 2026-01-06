import Image from "next/image";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const socialMediaIcons = [
  "/Icons/facebook.svg",
  "/Icons/linkedin.svg",
  "/Icons/instagram.svg",
  "/Icons/twitter.svg",
];

export default async function BlogDetail({ params }: BlogDetailPageProps) {
  const { slug } = await params;

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
      headings: ["BRANDING IS ABOUT EMOTION, NOT DECORATION"],
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
          padding: "64px var(--section-margin-x, 120px)",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--space-lg, 32px)",
          alignSelf: "stretch",
          background: "#F7F7F8",
          position: "relative",
        }}
        className="flex max-w-[1440px] mx-auto "
      >
        <div className="flex flex-col gap-(--space-xs) ">
          {/* Blog Title */}
          <h3
            style={{
              fontFamily: "var(--font-primary, 'Bebas Neue')",
              fontSize: "var(--h3-size)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "120%",
              textTransform: "uppercase",
              textAlign: "center",
              color: "var(--spotlight-950)",
              maxWidth: "1200px",
            }}
          >
            {blogData.title}
          </h3>

          {/* Author and Date */}
          <p
            style={{
              fontFamily: "var(--font-secondary, 'Outfit')",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%",
              textAlign: "center",
              color: "#4F4F4F",
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
              <div
                key={tag}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-md, 24px)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-secondary, 'Outfit')",
                    fontSize: "16px",
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
                  <span className="w-3 h-3 rounded-full bg-[#B6B7C3]" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="relative md:p-52 w-full md:w-fit aspect-video">
          <Image
            src={blogData.heroImage}
            alt={`${blogData.title} image`}
            fill
            className="object-cover rounded-2xl md:rounded-4xl"
            priority
          />
        </div>
      </section>

      {/* Blog Content Section */}
      <section
        style={{
          paddingLeft: "var(--section-margin-x, 120px)",
          paddingRight: "var(--section-margin-x, 120px)",
          paddingBottom: "var(--section-margin-y, 120px)",
          // gap: "var(--space-xl, 48px)",
          alignSelf: "stretch",
          background: "#F7F7F8",
          position: "relative",
        }}
        className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row gap-(--space-xl) md:gap-(--section-margin-x)"
      >
        {/* Left Sidebar - Social Sharing */}
        <div
          style={{
            gap: "var(--space-lg, 32px)",
            flex: "0 0 auto",
            minWidth: "80px",
          }}
          className="flex flex-col  items-center md:self-start md:sticky md:top-6"
        >
          {/* Share Button */}
          <button
            style={{
              padding: "var(--space-xxs) var(--space-sm)",
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
              gap: "var(--space-xs)",
              alignItems: "center",
            }}
            className="flex md:flex-col flex-row"
          >
            {socialMediaIcons.map((icon, index) => (
              <Image
                src={icon}
                alt="social media icon"
                width={32}
                height={32}
                key={index}
              />
            ))}
          </div>{" "}
        </div>

        {/* Right Column - Blog Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            maxWidth: "800px",
            gap: "var(--space-lg, 32px)",
          }}
        >
          {/* First Paragraph */}
          <p
            style={{
              fontFamily: "var(--font-secondary, 'Outfit')",
              fontSize: "16px",
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
              fontSize: "16px",
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
          <h3
            style={{
              fontFamily: "var(--font-primary, 'Bebas Neue')",
              fontSize: "var(--h3-size)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "100%",
              textTransform: "uppercase",
              color: "#4F4F4F",
              marginTop: "var(--space-xl, 48px)",
            }}
          >
            {blogData.content.headings[0]}
          </h3>

          {/* Third Paragraph */}
          <p
            style={{
              fontFamily: "var(--font-secondary, 'Outfit')",
              fontSize: "16px",
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
          {blogData.content.additionalSections.map(
            (
              section: { heading: string; paragraphs: string[] },
              index: number
            ) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-lg, 32px)",
                }}
              >
                {/* Section Heading */}
                <h2
                  style={{
                    fontFamily: "var(--font-primary, 'Bebas Neue')",
                    fontSize: "var(--h3-size)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "100%",
                    textTransform: "uppercase",
                    textAlign: "left",
                    color: "#4F4F4F",
                    marginTop: "var(--space-xl, 48px)",
                  }}
                >
                  {section.heading}
                </h2>

                {/* Section Paragraphs */}
                {section.paragraphs.map(
                  (paragraph: string, paraIndex: number) => (
                    <p
                      key={paraIndex}
                      style={{
                        fontFamily: "var(--font-secondary, 'Outfit')",
                        fontSize: "16px",
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
                  )
                )}
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}
