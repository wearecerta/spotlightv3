import Image from "next/image";
// import { works } from "@/data/work";
import { CASE_STUDIES_DETAIL } from "@/sanity/queries/caseStudyQuery";
import { client } from "@/sanity/lib/client";

//check if URL is a YouTube link
function isYouTubeUrl(url: string): boolean {
  return /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/.test(
    url,
  );
}

//  extract YouTube video ID
function getYouTubeVideoId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/,
  );
  return match ? match[1] : null;
}

//YouTube embed URL with autoplay
function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0`;
}

interface Props {
  params: { id: string };
}
export default async function WorkDetail({ params }: Props) {
  const param = await params;
  const slug = param.id;

  const workData = await client.fetch(CASE_STUDIES_DETAIL, { slug });

  if (!workData) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Work not found</p>
      </main>
    );
  }

  const youtubeVideoId =
    workData?.heroVideo && isYouTubeUrl(workData?.heroVideo)
      ? getYouTubeVideoId(workData?.heroVideo)
      : null;

  return (
    <main
      style={{
        minHeight: "100vh",
        position: "relative",
        background: "#F7F7F8",
      }}
      className="px-6 md:px-16"
    >
      <section
        style={{ position: "relative", overflow: "hidden" }}
        className="max-w-[1440px] mx-auto pt-48px md:pt-16 lg:h-screen"
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            overflow: "hidden",
            background: "#000",
          }}
        >
          {youtubeVideoId ? (
            <iframe
              src={getYouTubeEmbedUrl(youtubeVideoId)}
              title={workData?.title}
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: "none",
                pointerEvents: "none",
              }}
            />
          ) : (
            <img
              src={workData?.heroImage?.asset?.url}
              alt={workData?.heroImage?.alt || workData?.title}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          )}
        </div>
      </section>

      {/* Project Details Section */}
      <section
        style={{
          justifyContent: "space-between",
          gap: "var(--space-lg)",
          position: "relative",
        }}
        className="max-w-[1440px] mx-auto pt-16 pb-[120px] flex flex-col lg:flex-row"
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
          <h2
            style={{
              fontFamily: "var(--font-primary, 'Bebas Neue')",
              // fontSize: "var(--h2-size, 148px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "100%",
              letterSpacing: "0%",
              textTransform: "uppercase",
              textAlign: "left",
              color: "#4A4A5A",
              margin: 0,
            }}
            className="md:text-[92px] text-[64px]"
          >
            {workData?.title}
          </h2>

          {/* Tagline */}
          <p
            style={{
              fontFamily: "var(--font-secondary, 'Outfit')",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%",
              textAlign: "left",
              color: "#0C0C0E",
              margin: 0,
            }}
          >
            {workData?.campaign}
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
              {workData?.overview}
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
                {workData?.client?.clientName || ""}
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
                {workData?.client?.industry?.industryName || ""}
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
                  textAlign: "right",
                }}
              >
                {(workData.service || [])
                  .map((service: any) => service.title)
                  .join(", ")}
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
                {workData?.duration || ""}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section
        className="max-w-[1440px] mx-auto flex flex-col gap-(--space-xxs) md:gap-(--space-lg)"
        style={{ position: "relative", alignSelf: "stretch" }}
      >
        {/* Top Image (Full Width) */}
        {workData?.gallery && workData?.gallery[0] && (
          <div style={{ position: "relative", aspectRatio: "16/9" }}>
            <img
              src={workData.gallery[0].asset.url}
              alt={workData.gallery[0].alt || "Work detail image 1"}
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
        )}

        {/* Bottom Images (Side by Side) */}
        <div
          className="gap-(--space-xxs) md:gap-(--space-lg)"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            width: "100%",
          }}
        >
          {(workData?.gallery || [])
            .slice(1, 3)
            .map((img: any, index: number) => (
              <div
                key={index}
                style={{ position: "relative", aspectRatio: "1/1" }}
              >
                <img
                  src={img.asset.url}
                  alt={img.alt || `Work detail image ${index + 2}`}
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
            ))}
        </div>
      </section>

      {/* Impact & Highlights Section */}
      <section className="mx-auto max-w-[1440px] w-full py-(--section-margin-y) flex flex-col gap-(--space-xxl)">
        <div className=" grid grid-cols-1  gap-(--space-lg) lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="relative w-full h-[500px] lg:h-auto">
            <Image
              src={
                workData?.impactsImage?.asset?.url || "https://placehold.co/400"
              }
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
                {workData?.impact}
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
                {(workData?.keyHighlights || []).map(
                  (impact: any, index: number) => (
                    <div
                      key={index}
                      className="p-(--space-lg) border-b border-b-[#B6B7C3] "
                    >
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
                        {impact}
                      </p>
                    </div>
                  ),
                )}

                {/* <div className="p-(--space-lg) border-b border-b-[#B6B7C3] ">
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
                </div> */}

                {/* <div className="p-(--space-lg) border-b border-b-[#B6B7C3] ">
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
                </div> */}

                {/* <div className="p-(--space-lg) border-b border-b-[#B6B7C3] ">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[var(--space-lg)]">
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
          {(workData?.projectAchievements || [])?.map(
            (item: any, index: number) => (
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
            ),
          )}
        </div>
      </section>
    </main>
  );
}
