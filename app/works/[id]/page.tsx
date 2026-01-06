"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";

// Helper function to check if URL is a YouTube link
function isYouTubeUrl(url: string): boolean {
  return /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/.test(url);
}

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  return match ? match[1] : null;
}

// Helper function to get YouTube embed URL with autoplay
function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0`;
}

export default function WorkDetail() {
  const params = useParams();
  const id = params.id as string;

  // TODO: Fetch work data from Sanity based on id
  // For now, using placeholder data matching the design
  const workData = {
    title: "SAFARICOM ETHIOPIA",
    tagline: "#1MoveAway",
    tags: ["BRANDING", "MARKETING", "PRODUCTION"],
    videoSrc: "https://www.youtube.com/watch?v=c5iitHD0bNg", // Same video as in Ourworks component
    overview: "With the objective of connecting all Ethiopians, Safaricom has launched the MTN campaign during the Ethiopian new year 2017, to serve as a pivotal driver of the digital Ethiopia plan by providing the essential infrastructure and services for various sectors by bringing the possibilities of life to the local population. For this initiative spotlight developed and implemented an integrated campaign by strategically penetrating through various roll outs with an idea that aligns well with the brand promise and the previous campaign",
    details: {
      company: "Safaricom",
      industry: "Telecommunication",
      service: "Advertising, Marketing, Production",
      duration: "Ongoing",
    },
    images: {
      image1: "/WorkDetails/I1.jpg",
      image2: "/WorkDetails/I2.jpg",
      image3: "/WorkDetails/I3.jpg",
    },
  };

  const youtubeVideoId = useMemo(() => {
    if (workData.videoSrc && isYouTubeUrl(workData.videoSrc)) {
      return getYouTubeVideoId(workData.videoSrc);
    }
    return null;
  }, [workData.videoSrc]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0C0C0E",
        position: "relative",
      }}
    >
      {/* Hero Section with Video */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          minHeight: "600px",
          overflow: "hidden",
        }}
      >
        {/* Video Background */}
        {youtubeVideoId && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
          >
            <iframe
              src={getYouTubeEmbedUrl(youtubeVideoId)}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "100vw",
                height: "100vh",
                transform: "translate(-50%, -50%)",
                border: "none",
                pointerEvents: "none",
              }}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={workData.title}
            />
          </div>
        )}

      </section>

      {/* Project Details Section */}
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
        {/* Left Column - Title and Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: "0 0 40%",
            gap: "var(--space-md, 24px)",
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-primary, 'Bebas Neue')",
              fontSize: "var(--h2-size, 148px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "100%",
              letterSpacing: "0%",
              textTransform: "uppercase",
              textAlign: "left",
              color: "#4A4A5A",
              margin: 0,
            }}
          >
            {workData.title}
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontFamily: "var(--font-secondary, 'Outfit')",
              fontSize: "clamp(18px, 2vw, 28px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%",
              textAlign: "left",
              color: "#4F4F4F",
              margin: 0,
            }}
          >
            {workData.tagline}
          </p>
        </div>

        {/* Right Column - Overview and Details */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            gap: "var(--space-lg, 32px)",
          }}
        >
          {/* Overview Heading */}
          <h2
            style={{
              fontFamily: "var(--font-secondary, 'Outfit')",
              fontSize: "clamp(16px, 1.5vw, 20px)",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "150%",
              textTransform: "uppercase",
              textAlign: "left",
              color: "#4F4F4F",
              margin: 0,
            }}
          >
            OVERVIEW
          </h2>

          {/* Overview Paragraph */}
          <p
            style={{
              fontFamily: "var(--font-secondary, 'Outfit')",
              fontSize: "var(--body-large-size, 20px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%",
              textAlign: "left",
              color: "#4F4F4F",
              margin: 0,
            }}
          >
            {workData.overview}
          </p>

          {/* Details List */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {/* Company */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "var(--space-md, 24px) 0",
                borderBottom: "1px solid rgba(79, 79, 79, 0.2)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-secondary, 'Outfit')",
                  fontSize: "var(--body-medium-size, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  color: "#4A4A5A",
                }}
              >
                Company
              </span>
              <span
                style={{
                  fontFamily: "var(--font-secondary, 'Outfit')",
                  fontSize: "var(--body-medium-size, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  color: "#4A4A5A",
                }}
              >
                {workData.details.company}
              </span>
            </div>

            {/* Industry */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "var(--space-md, 24px) 0",
                borderBottom: "1px solid rgba(79, 79, 79, 0.2)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-secondary, 'Outfit')",
                  fontSize: "var(--body-medium-size, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  color: "#4A4A5A",
                }}
              >
                Industry
              </span>
              <span
                style={{
                  fontFamily: "var(--font-secondary, 'Outfit')",
                  fontSize: "var(--body-medium-size, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  color: "#4A4A5A",
                }}
              >
                {workData.details.industry}
              </span>
            </div>

            {/* Service */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "var(--space-md, 24px) 0",
                borderBottom: "1px solid rgba(79, 79, 79, 0.2)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-secondary, 'Outfit')",
                  fontSize: "var(--body-medium-size, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  color: "#4A4A5A",
                }}
              >
                Service
              </span>
              <span
                style={{
                  fontFamily: "var(--font-secondary, 'Outfit')",
                  fontSize: "var(--body-medium-size, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  color: "#4A4A5A",
                }}
              >
                {workData.details.service}
              </span>
            </div>

            {/* Duration */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "var(--space-md, 24px) 0",
                borderBottom: "1px solid rgba(79, 79, 79, 0.2)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-secondary, 'Outfit')",
                  fontSize: "var(--body-medium-size, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  color: "#4A4A5A",
                }}
              >
                Duration
              </span>
              <span
                style={{
                  fontFamily: "var(--font-secondary, 'Outfit')",
                  fontSize: "var(--body-medium-size, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  color: "#4A4A5A",
                }}
              >
                {workData.details.duration}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section
        style={{
          display: "flex",
          padding: "var(--section-margin-y, 120px) var(--section-margin-x, 120px)",
          flexDirection: "column",
          gap: "var(--space-xl, 48px)",
          alignSelf: "stretch",
          background: "#F7F7F8",
          position: "relative",
        }}
      >
        {/* I1 - Top Image (Full Width) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "clamp(400px, 50vh, 600px)",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={workData.images.image1}
            alt="Work detail image 1"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute",
              inset: 0,
            }}
            sizes="100vw"
          />
        </div>

        {/* I2 and I3 - Side by Side Images */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "var(--space-xl, 48px)",
            width: "100%",
          }}
        >
          {/* I2 - Left Image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "clamp(400px, 50vh, 600px)",
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={workData.images.image2}
              alt="Work detail image 2"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: "absolute",
                inset: 0,
              }}
              sizes="50vw"
            />
          </div>

          {/* I3 - Right Image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "clamp(400px, 50vh, 600px)",
              overflow: "hidden",
            }}
          >
            <img
              src={workData.images.image3}
              alt="Work detail image 3"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: "absolute",
                inset: 0,
              }}
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      {/* Impact & Highlights Section */}
      <section
        style={{
          display: "flex",
          padding: "var(--section-margin-y, 120px) var(--section-margin-x, 120px)",
          flexDirection: "row",
          gap: "var(--space-xl, 48px)",
          alignSelf: "stretch",
          background: "#0C0C0E",
          position: "relative",
        }}
      >
        {/* Left Column - Promotional Poster */}
        <div
          style={{
            flex: "0 0 50%",
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
            minHeight: "clamp(400px, 60vh, 700px)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/WorkDetails/I4.png"
            alt="Campaign promotional poster"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              position: "absolute",
              inset: 0,
            }}
            sizes="50vw"
          />
        </div>

        {/* Right Column - Impact and Highlights */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            gap: "var(--space-xl, 48px)",
            justifyContent: "flex-start",
            paddingTop: "var(--space-lg, 32px)",
          }}
        >
          {/* IMPACT Section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md, 24px)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-secondary, 'Outfit')",
                fontSize: "clamp(18px, 2vw, 24px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "150%",
                textTransform: "uppercase",
                textAlign: "left",
                color: "#FFFFFF",
                margin: 0,
                letterSpacing: "0.5px",
              }}
            >
              IMPACT
            </h2>
            <p
              style={{
                fontFamily: "var(--font-secondary, 'Outfit')",
                fontSize: "var(--body-large-size, 20px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "150%",
                textAlign: "left",
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              This campaign successfully bridged digital platforms and mainstream media, fostering cultural relevance, platform-native engagement, and national visibility for both Safaricom Ethiopia and the youth talents who took part.
            </p>
          </div>

          {/* KEY HIGHLIGHTS Section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md, 24px)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-secondary, 'Outfit')",
                fontSize: "clamp(18px, 2vw, 24px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "150%",
                textTransform: "uppercase",
                textAlign: "left",
                color: "#FFFFFF",
                margin: 0,
                letterSpacing: "0.5px",
              }}
            >
              KEY HIGHLIGHTS
            </h2>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-md, 24px)",
              }}
            >
              <li
                style={{
                  fontFamily: "var(--font-secondary, 'Outfit')",
                  fontSize: "var(--body-large-size, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  color: "#FFFFFF",
                  paddingLeft: "var(--space-md, 24px)",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "0.6em",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                  }}
                />
                Launched on TikTok as the primary engagement channel
              </li>
              <li
                style={{
                  fontFamily: "var(--font-secondary, 'Outfit')",
                  fontSize: "var(--body-large-size, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  color: "#FFFFFF",
                  paddingLeft: "var(--space-md, 24px)",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "0.6em",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                  }}
                />
                611 participants created content over a 3.5-month campaign period
              </li>
              <li
                style={{
                  fontFamily: "var(--font-secondary, 'Outfit')",
                  fontSize: "var(--body-large-size, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  color: "#FFFFFF",
                  paddingLeft: "var(--space-md, 24px)",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "0.6em",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                  }}
                />
                Culminated in a 10-day bootcamp for the top 10 finalists
              </li>
              <li
                style={{
                  fontFamily: "var(--font-secondary, 'Outfit')",
                  fontSize: "var(--body-large-size, 20px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  color: "#FFFFFF",
                  paddingLeft: "var(--space-md, 24px)",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "0.6em",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                  }}
                />
                Finalists featured in a nationally televised special
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
