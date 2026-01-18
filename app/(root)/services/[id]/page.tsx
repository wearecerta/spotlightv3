import OurAgency from "@/components/sections/OurAgency";
import Image from "next/image";
import { SERVICE_BY_SLUG_QUERY, SERVICE_SEO_QUERY } from "@/sanity/queries/serviceQuery";
import { client } from "@/sanity/lib/client";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props) {
  const param = await params;

  const slug = param.id;

  const serviceDetail: any = await client.fetch(SERVICE_SEO_QUERY, {
    slug,
  });

  const seo = serviceDetail?.serviceDetail?.onPageSeo;

  return {
    title: seo?.pageTitle ?? "Spotlight Ethiopia",
    description: seo?.metaDescription ?? "",
    keywords: seo?.targetKeyWords?.join(", ") ?? "",
    openGraph: {
      title: seo?.pageTitle ?? "Spotlight Ethiopia",
      description: seo?.metaDescription ?? "",
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const param = await params;
  const slug = param.id;
  let serviceDetail: any = null;
  try {
    serviceDetail = await client.fetch(SERVICE_BY_SLUG_QUERY, { slug });
  } catch (err) {
    console.error("Error fetching service:", err);
    serviceDetail = null;
  }

  if (!serviceDetail) return null;

  const {
    heroTitle,
    heroImage,
    introductionSection,
    coreServiceSection,
    industriesSection,
    whyChooseUsSectionOne,
    whyChooseUsSectionTwo,
    cta,
    additionalInformation,
    frequentlyAskedQuestions,
  } = serviceDetail?.serviceDetail ?? {};
  const faqs = frequentlyAskedQuestions?.items ?? [];

  return (
    <main
      style={{
        width: "100%",
        overflow: "hidden",
        background: "var(--spotlight-50)",
      }}
    >
      {/*  HERO  */}
      {(heroTitle || heroImage) && (
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
              {heroTitle}
            </p>
          </div>

          {heroImage && (
            <div
              className="bg-(--spotlight-200)"
              style={{ position: "relative", width: "100%", height: 420 }}
            >
              <Image
                src={heroImage.asset.url}
                alt={heroImage.alt || "Service Hero"}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
        </section>
      )}

      {/*  Introduction Section */}
      {introductionSection && (
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

              {introductionSection.title && (
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
                  {introductionSection.title}
                </h3>
              )}
            </div>
            {/* right content */}
            {introductionSection.description && (
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
                {introductionSection.description}
              </p>
            )}
          </div>

          {/* 2 images */}
          {introductionSection.images &&
            introductionSection.images.length > 0 && (
              <div className="flex flex-col md:flex-row">
                {introductionSection.images.map((img: any, i: number) => (
                  <div
                    key={i}
                    style={{ position: "relative", height: 360 }}
                    className="md:flex-1"
                  >
                    <Image
                      src={img.asset?.url ?? "/placeholder.png"}
                      alt={img.alt ?? `Service image ${i + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            )}
        </section>
      )}

      {/*  Why choose us  */}
      {whyChooseUsSectionOne && (
        <section className="flex flex-col gap-(--space-xxl) max-w-[1440px] mx-auto px-(--section-margin-x) lg:px-(--space-xxl) py-(--section-margin-y)">
          {/* title and description */}
          <div className="flex flex-col lg:flex-row gap-(--space-xs) md:gap-(--space-xxl)">
            {whyChooseUsSectionOne.title && (
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
                {whyChooseUsSectionOne.title}
              </h3>
            )}

            {whyChooseUsSectionOne.description && (
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
                {whyChooseUsSectionOne.description}
              </p>
            )}
          </div>

          {/* services list grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-(--space-xl) gap-y-(--space-xxl)">
            {whyChooseUsSectionOne.services?.map((item: any, i: number) => (
              <div
                key={i}
                className={`flex flex-col  gap-(--space-sm) ${(i + 1) % 3 !== 0 ? "pr-6 lg:border-r border-[#B6B7C3]" : ""}`}
              >
                <div className="flex  flex-col gap-(--space-xxs) ">
                  <div className="bg-[#B6B7C3] w-10 h-10 rounded-sm flex justify-center items-center">
                    {item.icon?.asset?.url && (
                      <Image
                        src={item.icon?.asset?.url}
                        alt="service icon"
                        width={24}
                        height={24}
                      />
                    )}
                  </div>
                  {item.title && (
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
                  )}
                </div>
                {item.description && (
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
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/*  core service  */}
      {coreServiceSection && (
        <section className="bg-(--spotlight-950)">
          <div className="max-w-[1440px] mx-auto  px-(--section-margin-x) lg:px-(--space-xxl) py-(--section-margin-y)">
            <div className="flex flex-col lg:flex-row gap-(--section-margin-y)">
              {/* title and description */}
              <div className="flex-1 flex flex-col gap-(--space-lg)">
                {/* title make the first two words of the title gray  */}
                {(() => {
                  const words = coreServiceSection.title?.split(" ");
                  const firstTwo = words.slice(0, 2).join(" ");
                  const rest = words.slice(2).join(" ");

                  return (
                    <h2
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontWeight: "400",
                        lineHeight: "100%",
                        letterSpacing: 0,
                        textTransform: "uppercase",
                        color: "var(--spotlight-50)",
                      }}
                      className="text-(length:--h2-size) md:text-[92px]"
                    >
                      <span style={{ color: "var(--spotlight-300)" }}>
                        {firstTwo}{" "}
                      </span>
                      {rest}
                    </h2>
                  );
                })()}

                {coreServiceSection.description && (
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
                    {coreServiceSection.description}
                  </p>
                )}
              </div>

              {/* right side lists */}
              <div className=" grid gap-(--space-xl) flex-1">
                {coreServiceSection.services?.map((item: any, i: number) => (
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
                      {item.title && (
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
                      )}
                      {item.description && (
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
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Industries section */}
      {industriesSection && (
        <section className="max-w-[1440px] mx-auto flex flex-col gap-(--space-xxl)  px-(--section-margin-x) lg:px-(--space-xxl) py-(--section-margin-y)">
          {/* title description sub title and sub descriptions */}
          <div className="flex flex-col lg:flex-row gap-(--space-lg) lg:gap-(--space-xxl)">
            {/* title and description */}
            <div className="flex-1 flex flex-col gap-(--space-xs)">
              {industriesSection.title && (
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
                  {industriesSection.title}
                </h3>
              )}
              {industriesSection.description && (
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
                  {industriesSection.description}
                </p>
              )}
            </div>

            {/* sub title and sub description */}
            <div className="flex-1 flex flex-col gap-(--space-xs)">
              {industriesSection.subTitle && (
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
                  {industriesSection.subTitle}
                </h2>
              )}
              {industriesSection.subDescription && (
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
                  {industriesSection.subDescription}
                </p>
              )}
            </div>
          </div>

          {/* industries and their description grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--space-xxl)">
            {industriesSection.industries?.map((item: any, i: number) => (
              <div key={i} className=" flex flex-col gap-(--space-lg)">
                {item.industry && (
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
                )}
                {item.industryDescription && (
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
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/*whyChooseUsSectionTwo */}
      {whyChooseUsSectionTwo && (
        <section className="max-w-[1440px] mx-auto flex flex-col gap-(--space-xxl)  px-(--section-margin-x) lg:px-(--space-xxl) py-(--section-margin-y)">
          {/* title description sub title and sub descriptions */}
          <div className="flex flex-col lg:flex-row gap-(--space-xxl)">
            {/* title and description */}
            <div className="flex-1 flex flex-col gap-(--space-xs)">
              {whyChooseUsSectionTwo.title && (
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
                  {whyChooseUsSectionTwo.title}
                </h3>
              )}
              {whyChooseUsSectionTwo.description && (
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
                  {whyChooseUsSectionTwo.description}
                </p>
              )}
            </div>

            {/* sub title and sub description */}
            <div className="flex-1 flex flex-col gap-(--space-xs)">
              {whyChooseUsSectionTwo.subTitle && (
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
                  {whyChooseUsSectionTwo.subTitle}
                </h2>
              )}
              {whyChooseUsSectionTwo.subDescription && (
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
                  {whyChooseUsSectionTwo.subDescription}
                </p>
              )}
            </div>
          </div>

          {/* infos and their description grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-(--space-xxl)">
            {whyChooseUsSectionTwo.features?.map((item: any, i: number) => (
              <div key={i} className=" flex flex-col gap-(--space-lg)">
                {item.title && (
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
                )}
                {item.description && (
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
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/*  CTA black one  */}
      {cta && (
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
                  {cta.slogan && (
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
                      {cta.slogan}
                    </p>
                  )}
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
                {cta.title && (
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
                    {cta.title}
                  </h3>
                )}

                {cta.ctaText && (
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
                    {cta.ctaText}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Additional info */}

      {additionalInformation && (
        <section className="max-w-[1440px] mx-auto flex  flex-col gap-(--space-xxl)  px-(--section-margin-x) lg:px-(--space-xxl) py-(--section-margin-y)">
          {additionalInformation?.blocks.map((info: any, index: number) => (
            // infos and descriptions
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-(--space-xs) lg:gap-(--space-xxl) ${
                index !== additionalInformation.blocks.length - 1
                  ? "pb-16 border-b border-b-[#B6B7C3]"
                  : ""
              }`}
            >
              {info.title && (
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
              )}

              <div className="flex flex-col gap-6 flex-1 ">
                {info.paragraphs?.map((paragraph: any, i: number) => (
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
      )}
      {/* ================= FAQs ================= */}
      {faqs.length !== 0 && (
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
              {faqs?.map((faq: any, i: number) => (
                <div
                  key={i}
                  className=" p-(--space-xl) border-b border-b-[#B6B7C3]"
                >
                  <details className="group">
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
                        className="block group-open:hidden"
                      />
                      {/* minus icon */}
                      <Image
                        src="/Icons/minus-icon.svg"
                        alt="minus icon"
                        width={18.67}
                        height={18.67}
                        className="hidden group-open:block"
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
