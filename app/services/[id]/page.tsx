"use client";

import OurAgency from "@/components/sections/OurAgency";
import Image from "next/image";
import { useParams } from "next/navigation";

const serviceDetail = {
  serviceTitle:
    "Best Website Developers in Addis Ababa Web Design & Development Company in Ethiopia",
  serviceHeroImage: "/ServiceDetails/serviceDetailHero.png",
  styleOneSection: {
    styleOneTitle: "Building Digital Excellence with Creativity and Technology",
    styleOneDescription:
      "Are you searching for the best marketing agency in Addis Ababa, Ethiopia to elevate your brand and capture your audience’s attention? Look no further than Spotlight! We specialize in helping businesses shine in a competitive marketplace through creative, data-driven, and impactful marketing solutions. From branding and digital marketing to advertising campaigns, social media management, and event promotions, our team is committed to positioning your business for long-term success",
    styleOneImages: [
      "/ServiceDetails/serviceDetailImg-1.png",
      "/ServiceDetails/serviceDetailImg-2.png",
    ],
  },
  styleTwoSection: {
    styleTwoTitle:
      "Why Choose Spotlight as Your Web Design Partner in Addis Ababa?",
    styleTwoDescriptions:
      "Are you searching for the best marketing agency in Addis Ababa, Ethiopia to elevate your brand and capture your audience’s attention? Look no further than Spotlight!We specialize in helping businesses shine in a competitive marketplace through creative, data-driven, and impactful marketing solutions. From branding and digital marketing to advertising campaigns, social media management, and event promotions, our team is committed to positioning your business for long-term success.",
    styleTwoServicesList: [
      {
        icon: "/ServiceDetails/web-icon.svg",
        title: "Creative and Professional Design Team",
        description:
          "We design websites that reflect your brand’s values, personality, and business goals.",
      },
      {
        icon: "/ServiceDetails/web-icon.svg",
        title: "Latest Technology Stack",
        description:
          "From HTML5 and CSS3 to advanced frameworks like React, Laravel, and WordPress, we use technologies that ensure performance and scalability.",
      },
      {
        icon: "/ServiceDetails/web-icon.svg",
        title: "SEO-Optimized Websites",
        description:
          "Every project we deliver is structured for search engines to help you achieve better visibility and higher rankings.",
      },
      {
        icon: "/ServiceDetails/web-icon.svg",
        title: "Mobile-First Approach",
        description:
          "Our designs are 100% responsive, ensuring your website looks perfect on every device.",
      },
      {
        icon: "/ServiceDetails/web-icon.svg",
        title: "Dedicated Local Support",
        description:
          "We’re based in Ethiopia, so you can always rely on quick communication and on-ground assistance.",
      },
      {
        icon: "/ServiceDetails/web-icon.svg",
        title: "Comprehensive Digital Solutions",
        description:
          "From UI/UX design to development, hosting, and maintenance, we provide end-to-end web solutions under one roof.",
      },
    ],
  },
  styleThreeSection: {
    title: "Our Core Marketing Services",
    description:
      "We provide a full spectrum of marketing services in Addis Ababa, ensuring that your business connects with the right audience at the right time.",
    styleThreeServiceList: [
      {
        title: "Branding & Identity Design",
        description:
          "Professional and elegant designs that establish authority.",
      },
      {
        title: "E-commerce Website Design",
        description: "User-centric layouts with optimized product displays.",
      },
      {
        title: "Portfolio & Personal Websites",
        description: "Creative designs for professionals and artists.",
      },
      {
        title: "Landing Page Design",
        description: "Conversion-driven designs for marketing campaigns.",
      },
    ],
  },
  styleFourSectionIndustries: {
    title: "Top Website Development Company in Ethiopia",
    descriptions:
      "Our team of website developers in Ethiopia stays updated with the latest trends and technologies to ensure your website is modern, secure, and optimized for the best results.",
    subTitle: "Your Trusted Partner in Ethiopia",
    subDescription:
      "Whether you’re looking to build your brand from the ground up or scale an existing business, Spotlight in Ethiopia has the expertise to make it happen.",
    styleFourIndustriesList: [
      {
        industry: "Education",
        industryDescription:
          "Building engaging platforms that enhance learning and accessibility.",
      },
      {
        industry: "Healthcare",
        industryDescription:
          "Creating secure, user-friendly websites for clinics and hospitals.",
      },
      {
        industry: "Real Estate",
        industryDescription:
          "Showcasing properties with interactive and conversion-focused designs.",
      },
      {
        industry: "E-commerce",
        industryDescription:
          "Developing fast, reliable online stores that drive sales.",
      },
      {
        industry: "Travel & Tourism",
        industryDescription:
          "Creating secure, user-friendly websites for clinics and hospitals.",
      },
      {
        industry: "NGOs and Government Projects",
        industryDescription:
          "Delivering transparent, informative, and impactful web solutions.",
      },
    ],
  },

  styleFiveSectionInfo: {
    title: "What Makes Our Web Solutions Stand Out.",
    description:
      "Our team of website developers in Ethiopia stays updated with the latest trends and technologies to ensure your website is modern, secure, and optimized for the best results.",
    subTitle: "Your Trusted Partner in Ethiopia",
    subDescription:
      "Whether you’re looking to build your brand from the ground up or scale an existing business, Spotlight in Ethiopia has the expertise to make it happen.",
    info: [
      {
        title: "Strategic Planning",
        description:
          "We begin by understanding your business goals, target audience, and competition.",
      },
      {
        title: "Design Excellence",
        description:
          "Every layout, image, and color scheme is chosen to resonate with your audience.",
      },
      {
        title: "Seamless Functionality",
        description:
          "We focus on performance, security, and scalability to ensure your website runs smoothly.",
      },
      {
        title: "Continuous Support",
        description:
          "From maintenance to updates, we stand by you even after project delivery.",
      },
    ],
  },

  styleSixCtaSection: {
    title: "Let’s Spotlight Your Business",
    slogan: "Where Your Brand Shines Brighter!",
    cta: "Are you ready to take your business to new heights with the best marketing agency in Addis Ababa?",
  },

  styleSevenInfo2: [
    {
      title: "What Makes Our Web Solutions Stand Out.",
      paragraphs: [
        "We take pride in being part of Ethiopia’s growing digital transformation. As one of the top website development companies in Ethiopia, our aim is to help local businesses expand their digital reach — from Addis Ababa to international markets.",
        "We believe Ethiopian brands deserve global-standard websites that reflect innovation, trust, and professionalism — and that’s exactly what we deliver at Spotlight.",
      ],
    },
    {
      title: "What Makes Our Web Solutions Stand Out.",
      paragraphs: [
        "We take pride in being part of Ethiopia’s growing digital transformation. As one of the top website development companies in Ethiopia, our aim is to help local businesses expand their digital reach — from Addis Ababa to international markets.",
        "We believe Ethiopian brands deserve global-standard websites that reflect innovation, trust, and professionalism — and that’s exactly what we deliver at Spotlight.",
      ],
    },
  ],
  faqsSection: [
    {
      question:
        "What makes Spotlight the best marketing agency in Addis Ababa?",
      answer:
        "We believe Ethiopian brands deserve global-standard websites that reflect innovation, trust, and professionalism — and that’s exactly what we deliver at Spotlight.",
    },
    {
      question: "Do we offer digital marketing in Ethiopia?",
      answer:
        "We believe Ethiopian brands deserve global-standard websites that reflect innovation, trust, and professionalism — and that’s exactly what we deliver at Spotlight.",
    },
    {
      question: "Can we help with branding and design?",
      answer:
        "We believe Ethiopian brands deserve global-standard websites that reflect innovation, trust, and professionalism — and that’s exactly what we deliver at Spotlight.",
    },
    {
      question: "Do we work with international clients?",
      answer:
        "We believe Ethiopian brands deserve global-standard websites that reflect innovation, trust, and professionalism — and that’s exactly what we deliver at Spotlight.",
    },
    {
      question: "How do you get started with Spotlight?",
      answer:
        "We believe Ethiopian brands deserve global-standard websites that reflect innovation, trust, and professionalism — and that’s exactly what we deliver at Spotlight.",
    },
  ],
};

export default function ServiceDetailPage() {
  const params = useParams();
  const id = params.id as string;
  if (!serviceDetail) return null;

  return (
    <main
      style={{
        width: "100%",
        overflow: "hidden",
        background: "var(--spotlight-50)",
      }}
    >
      {/* ================= HERO ================= */}
      {(serviceDetail.serviceTitle || serviceDetail.serviceHeroImage) && (
        <section
          style={{
            paddingTop: "80px",
            background: "#F7F7F8",
          }}
          className="flex flex-col gap-(--space-xxl) max-w-[1440px] mx-auto"
        >
          <div className="flex flex-col gap-4 px-(--space-lg) lg:px-(--space-xxl)">
            <h1
              style={{
                fontFamily: "var(--font-primary)",
                fontSize: "var(--h2-size)",
                fontWeight: 400,
                lineHeight: "100%",
                letterSpacing: 0,
                textTransform: "uppercase",
              }}
            >
              spotlight plc
            </h1>

            <p
              style={{
                fontFamily: "var(--font-secondary)",
                fontSize: "24px",
                fontWeight: 300,
                lineHeight: "1.2",
              }}
              className=" lg:w-[50%]"
            >
              {serviceDetail.serviceTitle}
            </p>
          </div>

          {serviceDetail.serviceHeroImage && (
            <div style={{ position: "relative", width: "100%", height: 420 }}>
              <Image
                src={serviceDetail.serviceHeroImage}
                alt="Service Hero"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
        </section>
      )}

      {/* ================= STYLE ONE ================= */}
      {serviceDetail.styleOneSection && (
        <section className="flex flex-col gap-(--space-xxl) max-w-[1440px] mx-auto px-(--section-margin-x) lg:px-(--space-xxl) py-(--section-margin-y)">
          {/* title and descriptions */}
          <div className="flex flex-col lg:flex-row  gap-(--space-xs) lg:gap-(--space-xxl)">
            {/* left content */}
            <div className="flex flex-col gap-(--space-xs) flex-1">
              <h4
                style={{
                  fontFamily: "var(--font-primary)",
                  fontWeight: "400",
                  fontSize: "var(--h4-size)",
                  lineHeight: "120%",
                  letterSpacing: 0,
                  color: "var(--spotlight-700)",
                }}
              >
                spotlight
              </h4>

              {serviceDetail.styleOneSection.styleOneTitle && (
                <h3
                  style={{
                    fontFamily: "var(--font-primary)",
                    fontWeight: "400",
                    fontSize: "var(--h3-size)",
                    lineHeight: "100%",
                    letterSpacing: 0,
                    color: "var(--spotlight-950)",
                  }}
                >
                  {serviceDetail.styleOneSection.styleOneTitle}
                </h3>
              )}
            </div>
            {/* right content */}
            {serviceDetail.styleOneSection.styleOneDescription && (
              <p
                style={{
                  fontFamily: "var(--font-secondary)",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "150%",
                  letterSpacing: 0,
                  color: "#000000",
                  flex: 1,
                }}
                className=""
              >
                {serviceDetail.styleOneSection.styleOneDescription}
              </p>
            )}
          </div>

          {/* 2 images */}
          {serviceDetail.styleOneSection.styleOneImages && (
            <div className="flex flex-col md:flex-row">
              {serviceDetail.styleOneSection.styleOneImages.map(
                (img: string, i: number) => (
                  <div
                    key={i}
                    style={{
                      position: "relative",
                      height: 360,
                    }}
                    className="md:flex-1"
                  >
                    <Image
                      src={img}
                      alt={`Service image ${i + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                )
              )}
            </div>
          )}
        </section>
      )}

      {/* ================= STYLE TWO ================= */}
      {serviceDetail.styleTwoSection && (
        <section className="flex flex-col gap-(--space-xxl) max-w-[1440px] mx-auto px-(--section-margin-x) lg:px-(--space-xxl) py-(--section-margin-y)">
          {/* title and description */}
          <div className="flex flex-col lg:flex-row gap-(--space-xs) md:gap-(--space-xxl)">
            <h3
              style={{
                fontFamily: "var(--font-primary)",
                fontWeight: "400",
                fontSize: "var(--h3-size)",
                lineHeight: "100%",
                letterSpacing: 0,
                color: "var(--spotlight-950)",
                flex: 1,
              }}
            >
              {serviceDetail.styleTwoSection.styleTwoTitle}
            </h3>

            <p
              style={{
                fontFamily: "var(--font-secondary)",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "150%",
                letterSpacing: 0,
                color: "#000000",
                flex: 1,
              }}
            >
              {serviceDetail.styleTwoSection.styleTwoDescriptions}
            </p>
          </div>


              {/* services list grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-(--space-xl) gap-y-(--space-xxl)">
            {serviceDetail.styleTwoSection.styleTwoServicesList?.map(
              (item: any, i: number) => (
                <div
                  key={i}
                  className={`flex flex-col  gap-(--space-sm) ${(i + 1) % 3 !== 0 ? "pr-6 lg:border-r border-[#B6B7C3]" : ""}`}
                >
                  <div className="flex  flex-col gap-(--space-xxs) ">
                    <div className="bg-[#B6B7C3] w-10 h-10 rounded-sm flex justify-center items-center">
                      <Image
                        src={item.icon}
                        alt="service icon"
                        width={24}
                        height={24}
                      />
                    </div>
                    <h4
                      style={{
                        fontFamily: "var(--font-secondary)",
                        fontWeight: "300",
                        fontSize: "24px",
                        lineHeight: "120%",
                        letterSpacing: 0,
                        color: "var(--spotlight-950)",
                      }}
                    >
                      {item.title}
                    </h4>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-secondary)",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "150%",
                      letterSpacing: 0,
                      color: "#000000",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              )
            )}
          </div>
        </section>
      )}

      {/* ================= STYLE THREE the black one ================= */}
      {serviceDetail.styleThreeSection && (
        <section className="bg-(--spotlight-950)">
          <div className="max-w-[1440px] mx-auto  px-(--section-margin-x) lg:px-(--space-xxl) py-(--section-margin-y)">
            <div className="flex flex-col lg:flex-row gap-(--section-margin-y)">
              {/* title and description */}
              <div className="flex-1 flex flex-col gap-(--space-lg)">
                {/* title make the first two words of the title gray  */}
                {(() => {
                  const words =
                    serviceDetail.styleThreeSection.title.split(" ");
                  const firstTwo = words.slice(0, 2).join(" ");
                  const rest = words.slice(2).join(" ");

                  return (
                    <h2
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontWeight: "400",
                        fontSize: "var(--h2-size)",
                        lineHeight: "100%",
                        letterSpacing: 0,
                        textTransform: "uppercase",
                        color: "var(--spotlight-50)",
                      }}
                    >
                      <span style={{ color: "var(--spotlight-300)" }}>
                        {firstTwo}{" "}
                      </span>
                      {rest}
                    </h2>
                  );
                })()}

                <p
                  style={{
                    fontFamily: "var(--font-secondary)",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "150%",
                    letterSpacing: 0,
                    color: "var(--spotlight-50)",
                  }}
                >
                  {serviceDetail.styleThreeSection.description}
                </p>
              </div>

              {/* right side lists */}
              <div className=" grid gap-(--space-xl) flex-1">
                {serviceDetail.styleThreeSection.styleThreeServiceList?.map(
                  (item: any, i: number) => (
                    <div
                      key={i}
                      className=" border-b border-b-[#4A4A5A] flex gap-(--space-xs) pb-(--space-xl) px-(--space-xl)"
                    >
                      {/* Number */}
                      <div
                        style={{
                          fontFamily: "var(--font-secondary)",
                          fontWeight: "300",
                          fontSize: "var(--accent-medium-size)",
                          lineHeight: "120%",
                          letterSpacing: 0,
                          color: "var(--spotlight-300)",
                        }}
                      >
                        {(i + 1).toString().padStart(2, "0")}
                      </div>

                      <div className="flex flex-col gap-(--space-xs)">
                        {/* title */}
                        <p
                          style={{
                            fontFamily: "var(--font-secondary)",
                            fontWeight: "300",
                            fontSize: "24px",
                            lineHeight: "120%",
                            letterSpacing: 0,
                            color: "var(--spotlight-50)",
                          }}
                        >
                          {item.title}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-secondary)",
                            fontWeight: "400",
                            fontSize: "16px",
                            lineHeight: "150%",
                            letterSpacing: 0,
                            color: "var(--spotlight-50)",
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= STYLE FOUR ================= */}
      {serviceDetail.styleFourSectionIndustries && (
        <section className="max-w-[1440px] mx-auto flex flex-col gap-(--space-xxl)  px-(--section-margin-x) lg:px-(--space-xxl) py-(--section-margin-y)">
          {/* title description sub title and sub descriptions */}
          <div className="flex flex-col lg:flex-row gap-(--space-lg) lg:gap-(--space-xxl)">
            {/* title and description */}
            <div className="flex-1 flex flex-col gap-(--space-xs)">
              <h3
                style={{
                  fontFamily: "var(--font-primary)",
                  fontWeight: "400",
                  fontSize: "var(--h3-size)",
                  lineHeight: "100%",
                  letterSpacing: 0,
                  color: "var(--spotlight-950)",
                }}
              >
                {serviceDetail.styleFourSectionIndustries.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-secondary)",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "150%",
                  letterSpacing: 0,
                  color: "#000000",
                }}
              >
                {serviceDetail.styleFourSectionIndustries.descriptions}
              </p>
            </div>

            {/* sub title and sub description */}
            <div className="flex-1 flex flex-col gap-(--space-xs)">
              <h2
                style={{
                  fontFamily: "var(--font-secondary)",
                  fontWeight: "300",
                  fontSize: "24px",
                  lineHeight: "120%",
                  letterSpacing: 0,
                  color: "var(--spotlight-950)",
                }}
              >
                {serviceDetail.styleFourSectionIndustries.subTitle}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-plus-jakarta-sans)",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "150%",
                  letterSpacing: 0,
                  color: "#000000",
                }}
              >
                {serviceDetail.styleFourSectionIndustries.subDescription}
              </p>
            </div>
          </div>

          {/* industries and their description grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-(--space-xxl)">
            {serviceDetail.styleFourSectionIndustries.styleFourIndustriesList?.map(
              (item: any, i: number) => (
                <div key={i} className=" flex flex-col gap-(--space-lg)">
                  <p
                    style={{
                      fontFamily: "var(--font-secondary)",
                      fontWeight: "300",
                      fontSize: "24px",
                      lineHeight: "120%",
                      letterSpacing: 0,
                      color: "var(--spotlight-950)",
                    }}
                    className=" pb-(--space-sm) border-b border-b-[#4A4A5A]"
                  >
                    {item.industry}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-secondary)",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "150%",
                      letterSpacing: 0,
                      color: "#000000",
                    }}
                  >
                    {item.industryDescription}
                  </p>
                </div>
              )
            )}
          </div>
        </section>
      )}

      {/* ================= STYLE FIVE ================= */}
      {serviceDetail.styleFiveSectionInfo && (
        <section className="max-w-[1440px] mx-auto flex flex-col gap-(--space-xxl)  px-(--section-margin-x) lg:px-(--space-xxl) py-(--section-margin-y)">
          {/* title description sub title and sub descriptions */}
          <div className="flex flex-col lg:flex-row gap-(--space-xxl)">
            {/* title and description */}
            <div className="flex-1 flex flex-col gap-(--space-xs)">
              <h3
                style={{
                  fontFamily: "var(--font-primary)",
                  fontWeight: "400",
                  fontSize: "var(--h3-size)",
                  lineHeight: "100%",
                  letterSpacing: 0,
                  color: "var(--spotlight-950)",
                }}
              >
                {serviceDetail.styleFiveSectionInfo.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-secondary)",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "150%",
                  letterSpacing: 0,
                  color: "#000000",
                }}
              >
                {serviceDetail.styleFiveSectionInfo.description}
              </p>
            </div>

            {/* sub title and sub description */}
            <div className="flex-1 flex flex-col gap-(--space-xs)">
              <h2
                style={{
                  fontFamily: "var(--font-secondary)",
                  fontWeight: "300",
                  fontSize: "24px",
                  lineHeight: "120%",
                  letterSpacing: 0,
                  color: "var(--spotlight-950)",
                }}
              >
                {serviceDetail.styleFiveSectionInfo.subTitle}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-plus-jakarta-sans)",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "150%",
                  letterSpacing: 0,
                  color: "#000000",
                }}
              >
                {serviceDetail.styleFiveSectionInfo.subDescription}
              </p>
            </div>
          </div>

          {/* infos and their description grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-(--space-xxl)">
            {serviceDetail.styleFiveSectionInfo.info?.map(
              (item: any, i: number) => (
                <div key={i} className=" flex flex-col gap-(--space-lg)">
                  <p
                    style={{
                      fontFamily: "var(--font-secondary)",
                      fontWeight: "300",
                      fontSize: "24px",
                      lineHeight: "120%",
                      letterSpacing: 0,
                      color: "var(--spotlight-950)",
                    }}
                    className=" pb-(--space-sm) border-b border-b-[#4A4A5A]"
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-secondary)",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "150%",
                      letterSpacing: 0,
                      color: "#000000",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              )
            )}
          </div>
        </section>
      )}

      {/* ================= CTA black one ================= */}
      {serviceDetail.styleSixCtaSection && (
        <section className="bg-(--spotlight-950) ">
          <div className="max-w-[1440px] mx-auto  px-(--section-margin-x) lg:px-(--space-xxl) py-(--section-margin-y)">
            <div className="flex flex-col lg:flex-row gap-(--space-xxl) lg:gap-28">
              {/* left side spotlight logo and slogan */}
              <div className="flex flex-col-reverse lg:flex-row gap-(--space-xxs)">
                <div className="flex flex-col gap-(--space-xxs)">
                  <h2
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: "400",
                      fontSize: "var(--h2-size)",
                      lineHeight: "100%",
                      letterSpacing: 0,
                      color: "var(--spotlight-50)",
                      textTransform: "uppercase",
                    }}
                  >
                    spotlight
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-secondary)",
                      fontWeight: "300",
                      fontSize: "24px",
                      lineHeight: "120%",
                      letterSpacing: 0,
                      color: "var(--spotlight-50)",
                    }}
                  >
                    {serviceDetail.styleSixCtaSection.slogan}
                  </p>
                </div>
                <Image
                  src={"/ServiceDetails/spotlight.svg"}
                  width={152}
                  height={152}
                  alt="spotlight"
                />
              </div>

              {/* right side content */}

              <div className="flex flex-col gap-(--space-lg)">
                <h3
                  style={{
                    fontFamily: "var(--font-primary)",
                    fontWeight: "400",
                    fontSize: "var(--h3-size)",
                    lineHeight: "100%",
                    letterSpacing: 0,
                    color: "var(--spotlight-300)",
                  }}
                >
                  {serviceDetail.styleSixCtaSection.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-secondary)",
                    fontWeight: "300",
                    fontSize: "24px",
                    lineHeight: "120%",
                    letterSpacing: 0,
                    color: "var(--spotlight-50)",
                  }}
                >
                  {serviceDetail.styleSixCtaSection.cta}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* style seven */}

      <section className="max-w-[1440px] mx-auto flex  flex-col gap-(--space-xxl)  px-(--section-margin-x) lg:px-(--space-xxl) py-(--section-margin-y)">
        {serviceDetail.styleSevenInfo2.map((info, index) => (
          // infos and descriptions
          <div
            key={index}
            className={`flex flex-col lg:flex-row gap-(--space-xs) lg:gap-(--space-xxl) ${
              index !== serviceDetail.styleSevenInfo2.length - 1
                ? "pb-16 border-b border-b-[#B6B7C3]"
                : ""
            }`}
          >
            <h4
              style={{
                fontFamily: "var(--font-primary)",
                fontWeight: "400",
                fontSize: "var(--h4-size)",
                lineHeight: "120%",
                letterSpacing: 0,
                color: "var(--spotlight-950)",
                flex: 1,
              }}
            >
              {info.title}
            </h4>

            <div className="flex flex-col gap-6 flex-1 ">
              {info.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--font-plus-jakarta-sans)",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "100%",
                    color: "#000000",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ================= FAQs ================= */}
      {serviceDetail.faqsSection && (
        <section className="max-w-[1440px] mx-auto flex flex-col gap-(--space-xxl)  px-(--section-margin-x) lg:px-(--space-xxl) py-(--section-margin-y)">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20    ">
            {/* LEFT SIDE */}
            <div className="flex-1 flex flex-col gap-(--space-lg) ">
              <h2
                style={{
                  fontFamily: "var(--font-primary)",
                  fontWeight: "400",
                  fontSize: "var(--h2-size)",
                  lineHeight: "100%",
                  color: "var(--spotlight-700)",
                  textTransform: "uppercase",
                  letterSpacing: 0,
                }}
              >
                FAQs
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-secondary)",
                  fontWeight: "300",
                  fontSize: "24px",
                  lineHeight: "120%",
                  color: "var(--spotlight-950)",
                  letterSpacing: 0,
                }}
              >
                Any Questions?
                <br />
                We’ve Got Answers
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex-1">
              {serviceDetail.faqsSection.map((faq: any, i: number) => (
                <div
                  key={i}
                  className=" p-(--space-xl) border-b border-b-[#B6B7C3]"
                >
                  <details>
                    {/* HEADER ROW */}
                    <summary
                      style={{
                        listStyle: "none",
                        display: "grid",
                        gridTemplateColumns: "1fr 32px",
                        alignItems: "center",
                        columnGap: "24px",
                        cursor: "pointer",
                      }}
                    >
                      {/* QUESTION */}
                      <span
                        style={{
                          fontFamily: "var(--font-secondary)",
                          fontWeight: "400",
                          fontSize: "20px",
                          lineHeight: "150%",
                          color: "var(--spotlight-950)",
                          letterSpacing: 0,
                        }}
                        className="text-wrap"
                      >
                        {faq.question}
                      </span>

                      {/* PLUS ICON */}
                      <Image
                        src={"/Icons/plus-icon.svg"}
                        alt="plus icon"
                        width={18.67}
                        height={18.67}
                      />
                    </summary>

                    {/* ANSWER */}
                    <p
                      style={{
                        marginTop: "16px",

                        fontFamily: "var(--font-plus-jakarta-sans)",
                        fontWeight: "400",
                        fontSize: "14px",
                        lineHeight: "100%",
                        color: "#4A4A5A",
                        maxWidth: "90%",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <OurAgency />
    </main>
  );
}
