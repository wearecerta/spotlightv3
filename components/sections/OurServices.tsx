import Image from "next/image";
import OurServicesCard from "../ui/OurServicesCard";
import Buttons from "../ui/Buttons";

export default function OurServices() {
  const services = [
    {
      number: "01",
      title: "PR & COMMUNICATIONS",
      description:
        "As the Best Marketing Agency in Ethiopia and one of the most trusted names in Addis Ababa, we understand that communication is the foundation of every successful brand. Our PR & Communications services ensure that your brand voice is strong, consistent, and impactful. From managing reputation to building meaningful media relations, we specialize in strategies that enhance credibility and trust.",
      servicesList: [
        "Reputation Management",
        "Communications Strategy",
        "Media Training",
        "Media Relation",
      ],
      href: "/service/pr-communications",
    },
    {
      number: "02",
      title: "MARKETING",
      description:
        "Recognized as the Best Marketing Agency in Addis Ababa, we focus on result-driven marketing strategies that connect businesses with their audiences. Our marketing solutions are backed by research, creativity, and innovation, helping brands to position themselves strongly in the competitive Ethiopian market.",
      servicesList: [
        "Market Research",
        "Shoppers Marketing",
        "Experiential Marketing",
        "Marketing Strategy",
        "Promotional Marketing",
        "Content & Email Marketing",
      ],
      href: "/service/marketing",
    },
    {
      number: "03",
      title: "ADVERTISING",
      description:
        "As the Best Advertising Agency in Addis Ababa and Ethiopia, we provide 360° advertising solutions that make brands visible across platforms. Whether it's traditional media or digital advertising, our campaigns are designed to maximize reach, engagement, and conversions.",
      servicesList: [
        "TV Advertising",
        "Radio Advertising",
        "Print Advertising",
        "Outdoor Advertising",
        "Digital Advertising",
        "Campaign Strategy",
      ],
      href: "/service/advertising",
    },
    {
      number: "04",
      title: "BRANDING & DESIGN",
      description:
        "Being the Best Marketing Agency in Ethiopia, we believe that branding is more than just a logo - it's about crafting an identity that resonates. Our creative team crafts designs and brand strategies that make businesses stand out in Addis Ababa and beyond.",
      servicesList: [
        "Brand Identity",
        "Logo Design",
        "Visual Design",
        "Brand Strategy",
        "Packaging Design",
        "Creative Direction",
      ],
      href: "/service/branding-design",
    },
    {
      number: "05",
      title: "PRODUCTION",
      description:
        "As one of the leading Best Advertising Agencies in Ethiopia, we offer complete production services to bring your brand story to life. From TV commercials to documentaries and creative shoots, we deliver high-quality content that connects with audiences.",
      servicesList: [
        "Video Production",
        "TV Commercials",
        "Documentaries",
        "Creative Shoots",
        "Post-Production",
        "Content Creation",
      ],
      href: "/service/production",
    },
    {
      number: "06",
      title: "EVENT MANAGEMENT",
      description:
        "With years of expertise, we are known as the Best Marketing and Advertising Agency in Addis Ababa for organizing impactful events. From planning to execution, we manage every detail to ensure your brand is showcased in the best possible way.",
      servicesList: [
        "Event Planning",
        "Event Execution",
        "Corporate Events",
        "Product Launches",
        "Conferences",
        "Exhibitions",
      ],
      href: "/service/event-management",
    },
    {
      number: "07",
      title: "WEBSITE DEVELOPMENT",
      description:
        "As a full-service agency, we go beyond advertising and marketing. Being trusted as the Best Marketing Agency in Ethiopia, we also provide innovative web development services tailored to your business goals. Our websites are designed to be responsive, user-friendly, and conversion-focused.",
      servicesList: [
        "Web Design",
        "Web Development",
        "E-commerce",
        "Responsive Design",
        "UI/UX Design",
        "Website Maintenance",
      ],
      href: "/service/website-development",
    },
    {
      number: "08",
      title: "DIGITAL MARKETING",
      description:
        "In today's digital-first world, our expertise as the Best Advertising Agency in Addis Ababa makes us the go-to partner for businesses aiming to grow online. From SEO to influencer marketing, we deliver strategies that ensure visibility, engagement, and measurable growth.",
      servicesList: [
        "SEO",
        "Social Media Marketing",
        "Influencer Marketing",
        "PPC Advertising",
        "Content Marketing",
        "Analytics & Reporting",
      ],
      href: "/service/digital-marketing",
    },
  ];

  return (
    <section
    className="relative "
      style={{
        background: "var(--spotlight-950)",
      }}>


        {/* bg svg */}
      <div 
        className="sticky top-0 h-screen  flex flex-col items-center justify-center"
        style={{ 
          zIndex: 0,
          minHeight: '100vh',
        }}
      >
        <Image
          src="/Home/our-service-bg2.svg"
          alt="Our Services Background"
          fill
          className="object-contain object-center "
        />
      </div>

      <div className="h-screen"/>

      {/* Scrollable Content Container - Scrolls over the red background */}
      <div 
        className="relative z-10"
        style={{ 
          marginTop: '-100vh',
          backgroundColor: 'transparent',
          pointerEvents: 'none',
        }}
      >
        <div 
          className="max-w-[1440px] mx-auto w-full"
          style={{
            padding: "var(--section-margin-y) var(--section-margin-x)",
            pointerEvents: 'auto',
          }}
        >
          {/* Service Cards Grid - Zig-zag layout */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max">
              {services.map((service, index) => {
                // Zig-zag pattern: odd indices (0, 2, 4, 6) go left, even indices (1, 3, 5, 7) go right
                const isLeft = index % 2 === 0;
                const gridRow = index + 1; // Row number (1-based for CSS Grid)

                return (
                  <div
                    key={service.number}
                    className={isLeft ? "md:col-start-1" : "md:col-start-2"}
                    style={{
                      gridRow: `${gridRow} / span 1`,
                    }}
                  >
                    <OurServicesCard
                      number={service.number}
                      title={service.title}
                      description={service.description}
                      services={service.servicesList}
                      href={service.href}
                      className="w-full"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Explore More Button */}
          <Buttons>
            explore more
          </Buttons>
        </div>
      </div>
    </section>
  );
}