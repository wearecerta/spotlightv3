"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useMemo } from "react";

// Helper function to check if URL is a YouTube link
function isYouTubeUrl(url: string): boolean {
  return /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/.test(
    url
  );
}

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  );
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
    overview:
      "With the objective of connecting all Ethiopians, Safaricom has launched the MTN campaign during the Ethiopian new year 2017, to serve as a pivotal driver of the digital Ethiopia plan by providing the essential infrastructure and services for various sectors by bringing the possibilities of life to the local population. For this initiative spotlight developed and implemented an integrated campaign by strategically penetrating through various roll outs with an idea that aligns well with the brand promise and the previous campaign",
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
    achievements: [
      { value: "11m+", label: "views" },
      { value: "850k+", label: "likes" },
      { value: "58k+", label: "shares" },
      { value: "64k+", label: "saves" },
      { value: "64k+", label: "saves" },
    ],
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
        position: "relative",
        background: "#F7F7F8",
      }}
      className="px-6 md:px-16"
    >
      {/* Hero Section with Video */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
        }}
        className="max-w-[1440px] mx-auto  pt-48px md:pt-16 md:h-screen"
      >
        {/* Video Background */}
        {youtubeVideoId && (
          <div>
            <iframe
              src={getYouTubeEmbedUrl(youtubeVideoId)}
              style={{
                border: "none",
                aspectRatio: "16/9",
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
          justifyContent: "space-between",
          gap: "var(--space-lg)",
          position: "relative",
        }}
        className="max-w-[1440px] mx-auto pt-16 pb-[120px] flex flex-col md:flex-row"
      >
        {/* Left Column - Title and Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: "0 0 50%",
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
              fontSize: "var(--accent-medium-size)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%",
              textAlign: "left",
              color: "#0C0C0E",
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
          <div className="flex flex-col gap-(--space-xxs)">
            <h2
              style={{
                fontFamily: "var(--font-secondary, 'Outfit')",
                fontSize: "var(--body-large-size, 20px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "150%",
                textTransform: "uppercase",
                textAlign: "left",
                color: "#0C0C0E",
                margin: 0,
              }}
            >
              OVERVIEW
            </h2>

            {/* Overview Paragraph */}
            <p
              style={{
                fontFamily: "var(--font-secondary, 'Outfit')",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "150%",
                textAlign: "left",
                color: "#4F4F4F",
                marginTop: 0,
              }}
            >
              {workData.overview}
            </p>
          </div>

          {/* Details List */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-xs)",
            }}
          >
            {/* Company */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "var(--space-xxs) 0",
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
                padding: "var(--space-xxs) 0",
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
                padding: "var(--space-xxs) 0",
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
                padding: "var(--space-xxs) 0",
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
          flexDirection: "column",
          alignSelf: "stretch",
          position: "relative",
        }}
        className="max-w-[1440px] mx-auto gap-(--space-xxs) md:gap-(--space-lg)"
      >
        {/* I1 - Top Image (Full Width) */}
        <div
          style={{
            position: "relative",
            // width: "100%",
            // height: "clamp(400px, 50vh, 600px)",
            // overflow: "hidden",
            aspectRatio: "16/9",
          }}
        >
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
            width: "100%",
          }}
          className="gap-(--space-xxs) md:gap-(--space-lg)"
        >
          {/* I2 - Left Image */}
          <div
            style={{
              position: "relative",
              aspectRatio: "1/1",
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
              aspectRatio: "1/1",
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
      <section className="mx-auto max-w-[1440px] w-full py-(--section-margin-y) flex flex-col gap-(--space-xxl)">
        <div className=" grid grid-cols-1  gap-(--space-lg) md:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="relative w-full h-[500px] lg:h-auto">
            <Image
              src="/WorkDetails/I4.png"
              alt="Campaign promotional poster"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex bg-[#FFFFFF] flex-col gap-(--space-xl) justify-center py-(--space-xxl) px-6 md:px-(--space-xl)">
            {/* IMPACT */}
            <div className="flex flex-col gap-(--space-xs)">
              <h4
                style={{
                  fontFamily: "var(--font-primary)",
                  fontWeight: "400",
                  fontSize: "var(--h4-size)",
                  lineHeight: "120%",
                  letterSpacing: 0,
                }}
                className="text-[length:--h4-size] tracking-widest text-black uppercase"
              >
                Impact
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-secondary)",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "150%",
                  letterSpacing: 0,
                }}
                className=" text-(--spotlight-700) leading-relaxed max-w-xl"
              >
                This campaign successfully bridged digital platforms and
                mainstream media, fostering cultural relevance, platform-native
                engagement, and national visibility for both Safaricom Ethiopia
                and the youth talents who took part.
              </p>
            </div>

            {/* KEY HIGHLIGHTS */}
            <div className=" flex flex-col gap-(--space-xs)">
              <h3
                style={{
                  fontFamily: "var(--font-primary)",
                  fontWeight: "400",
                  fontSize: "var(--h4-size)",
                  lineHeight: "120%",
                  letterSpacing: 0,
                  textTransform: "uppercase",
                }}
                className=" text-[#0C0C0E]"
              >
                Key Highlights
              </h3>

              {/* high lights */}
              <div>
                <div className="p-(--space-lg) border-b border-b-[#B6B7C3] ">
                  <p
                    style={{
                      fontFamily: "var(--font-secondary)",
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: "150%",
                      letterSpacing: 0,
                      color: "#4A4A5A",
                    }}
                  >
                    Launched on TikTok as the primary engagement channel
                  </p>
                </div>

                <div className="p-(--space-lg) border-b border-b-[#B6B7C3] ">
                  <p
                    style={{
                      fontFamily: "var(--font-secondary)",
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: "150%",
                      letterSpacing: 0,
                      color: "#4A4A5A",
                    }}
                  >
                    611 participants created content over a 3.5-month campaign
                    period
                  </p>
                </div>

                <div className="p-(--space-lg) border-b border-b-[#B6B7C3] ">
                  <p
                    style={{
                      fontFamily: "var(--font-secondary)",
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: "150%",
                      letterSpacing: 0,
                      color: "#4A4A5A",
                    }}
                  >
                    Culminated in a 10-day bootcamp for the top 10 finalists
                  </p>
                </div>

                <div className="p-(--space-lg) border-b border-b-[#B6B7C3] ">
                  <p
                    style={{
                      fontFamily: "var(--font-secondary)",
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: "150%",
                      letterSpacing: 0,
                      color: "#4A4A5A",
                    }}
                  >
                    Finalists featured in a nationally televised special
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[var(--space-lg)]">
          {/* Title */}
          <h4
            style={{
              fontFamily: "var(--font-primary)",
              fontWeight: "400",
              fontSize: "var(--h4-size)",
              lineHeight: "100%",
              letterSpacing: 0,
              color: "var(--spotlight-950)",
            }}
          >
            Project <br /> Achievements
          </h4>

          {/* Stats */}
          {workData.achievements.map((item, index) => (
            <div key={index} className="flex flex-col">
              <span
                style={{
                  fontFamily: "var(--font-primary)",
                  fontWeight: "400",
                  fontSize: "var(--h2-size)",
                  lineHeight: "100%",
                  letterSpacing: 0,
                  color: "var(--spotlight-300)",
                  textTransform: "uppercase",
                }}
              >
                {item.value}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-secondary)",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "150%",
                  letterSpacing: 0,
                  color: "var(--spotlight-700)",
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
