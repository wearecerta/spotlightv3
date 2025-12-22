import Image from "next/image";

interface ServiceDetailPageProps {
  params: {
    id: string;
  };
}

export default async function ServiceDetail({ params }: ServiceDetailPageProps) {
  const { id } = params;

  // TODO: Fetch service data from Sanity based on id
  // For now, using placeholder data matching the design
  const serviceData = {
    title: "SPOTLIGHT PLC",
    tagline: "Best Marketing Agency in Addis Ababa | Ethiopia",
    heroImage: "/ServiceDetails/hero.png",
    image1: "/ServiceDetails/I1.jpg",
    image2: "/ServiceDetails/I2.png",
    coreServices: {
      heading: {
        part1: "OUR CORE",
        part2: "MARKETING",
        part3: "SERVICES",
      },
      description: "We provide a full spectrum of marketing services in Addis Ababa, ensuring that your business connects with the right audience at the right time.",
      services: [
        { id: "01", name: "Branding & Identity Design" },
        { id: "02", name: "Digital Marketing & SEO" },
        { id: "03", name: "Social Media Management" },
        { id: "04", name: "Creative Advertising Campaigns" },
        { id: "05", name: "Event Marketing & Promotions" },
        { id: "06", name: "Public Relations & Media Buying" },
        { id: "07", name: "Content Creation & Video Production" },
      ],
    },
    servicesIncludes: {
      leftColumn: {
        heading: {
          part1: "OUR SERVICES",
          part2: "INCLUDES",
        },
        description: "When it comes to marketing companies in Addis Ababa, Ethiopia, Spotlight is recognized for excellence, creativity, and results-driven strategies.",
      },
      rightColumn: {
        heading: {
          part1: "YOUR TRUSTED",
          part2: "MARKETING PARTNER",
          part3: "IN ETHIOPIA",
        },
        description: "Whether you're looking to build your brand from the ground up or scale an existing business, Spotlight in Ethiopia has the expertise to make it happen.",
      },
      services: [
        {
          title: "Market Research",
          description: "Whether you're looking to build your brand from the ground up or scale an existing business, Spotlight in Ethiopia has the expertise to make it happen.",
        },
        {
          title: "Marketing Strategy",
          description: "Whether you're looking to build your brand from the ground up or scale an existing business, Spotlight in Ethiopia has the expertise to make it happen.",
        },
        {
          title: "Shoppers Marketing",
          description: "Whether you're looking to build your brand from the ground up or scale an existing business, Spotlight in Ethiopia has the expertise to make it happen.",
        },
      ],
    },
    spotlightCTA: {
      leftSide: {
        title: "SPOTLIGHT",
        tagline: "Where Your Brand Shines Brighter!",
      },
      rightSide: {
        heading: "LET'S SPOTLIGHT YOUR BUSINESS",
        description: "Are you ready to take your business to new heights with the best marketing agency in Addis Ababa?",
      },
    },
    faqs: {
      heading: "FAQS",
      subheading: {
        line1: "Any Questions?",
        line2: "We've Got Answers",
      },
      questions: [
        "What makes Spotlight the best marketing agency in Addis Ababa?",
        "Do we offer digital marketing in Ethiopia?",
        "Can we help with branding and design?",
        "Do we work with international clients?",
        "How do you get started with Spotlight?",
      ],
    },
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#FFFFFF",
        position: "relative",
      }}
    >
      {/* Hero Text Section */}
      <section
        style={{
          display: "flex",
          padding: "var(--section-margin-y, 120px) var(--section-margin-x, 120px)",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "var(--space-md, 24px)",
          alignSelf: "stretch",
          background: "#F7F7F8",
          position: "relative",
        }}
      >
        {/* Main Heading */}
        <h1
          style={{
            fontFamily: "var(--font-primary, 'Bebas Neue')",
            fontSize: "clamp(60px, 10vw, 148px)",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "100%",
            textTransform: "uppercase",
            textAlign: "left",
            color: "#0C0C0E",
            alignSelf: "stretch",
            margin: 0,
          }}
        >
          {serviceData.title}
        </h1>

        {/* Subheading/Tagline */}
        <p
          style={{
            fontFamily: "var(--font-secondary, 'Outfit')",
            fontSize: "clamp(16px, 2vw, 24px)",
            fontStyle: "normal",
            fontWeight: "300",
            lineHeight: "150%",
            textAlign: "left",
            color: "#0C0C0E",
            margin: 0,
          }}
        >
          {serviceData.tagline}
        </p>
      </section>

      {/* Hero Image Section */}
      <section
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "clamp(400px, 60vh, 800px)",
            minHeight: "400px",
          }}
        >
          <Image
            src={serviceData.heroImage}
            alt={`${serviceData.title} - Hero Image`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      {/* Two-Column Text Section */}
      <section
        style={{
          display: "flex",
          padding: "var(--section-margin-y, 120px) var(--section-margin-x, 120px)",
          flexDirection: "column",
          gap: "var(--space-xxl, 64px)",
          alignSelf: "stretch",
          background: "#F7F7F8",
          position: "relative",
        }}
      >
        {/* First Content Block */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-xl, 48px)",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {/* Heading */}
          <h2
            style={{
              fontFamily: "var(--font-primary, 'Bebas Neue')",
              fontSize: "clamp(40px, 5vw, 80px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "100%",
              textTransform: "uppercase",
              textAlign: "left",
              color: "#0C0C0E",
              margin: 0,
            }}
          >
            YOUR TRUSTED{" "}
            <span style={{ color: "#4A4A5A" }}>MARKETING PARTNER</span> IN ETHIOPIA
          </h2>

          {/* Paragraph */}
          <p
            style={{
              fontFamily: "var(--font-secondary, 'Outfit')",
              fontSize: "clamp(16px, 1.5vw, 20px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%",
              textAlign: "left",
              color: "#0C0C0E",
              margin: 0,
            }}
          >
            Are you searching for the best marketing agency in Addis Ababa, Ethiopia to elevate your brand and capture your audience's attention? Look no further than Spotlight! We specialize in helping businesses shine in a competitive marketplace through creative, data-driven, and impactful marketing solutions. From branding and digital marketing to advertising campaigns, social media management, and event promotions, our team is committed to positioning your business for long-term success.
          </p>
        </div>

        {/* Second Content Block */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-xl, 48px)",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {/* Heading */}
          <h2
            style={{
              fontFamily: "var(--font-primary, 'Bebas Neue')",
              fontSize: "clamp(40px, 5vw, 80px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "100%",
              textTransform: "uppercase",
              textAlign: "left",
              color: "#0C0C0E",
              margin: 0,
            }}
          >
            WHY CHOOSE{" "}
            <span style={{ color: "#B6B7C3" }}>SPOTLIGHT</span> IN ETHIOPIA?
          </h2>

          {/* Paragraph */}
          <p
            style={{
              fontFamily: "var(--font-secondary, 'Outfit')",
              fontSize: "clamp(16px, 1.5vw, 20px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%",
              textAlign: "left",
              color: "#0C0C0E",
              margin: 0,
            }}
          >
            Whether you're looking to build your brand from the ground up or scale an existing business, Spotlight in Ethiopia has the expertise to make it happen.
          </p>
        </div>
      </section>

      {/* Side-by-Side Images Section */}
      <section
        style={{
          display: "flex",
          padding: "var(--section-margin-y, 120px) var(--section-margin-x, 120px)",
          flexDirection: "column",
          alignSelf: "stretch",
          background: "#F7F7F8",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0",
            width: "100%",
            height: "clamp(400px, 50vh, 600px)",
            minHeight: "400px",
          }}
        >
          {/* Left Image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <Image
              src={serviceData.image1}
              alt={`${serviceData.title} - Production Scene`}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>

          {/* Right Image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <Image
              src={serviceData.image2}
              alt={`${serviceData.title} - Client Interaction`}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      {/* Core Marketing Services Section */}
      <section
        style={{
          display: "flex",
          padding: "var(--section-margin-y, 120px) var(--section-margin-x, 120px)",
          flexDirection: "column",
          alignSelf: "stretch",
          background: "#0C0C0E",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-xl, 48px)",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {/* Left Column - Heading and Description */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-lg, 32px)",
            }}
          >
            {/* Main Heading */}
            <h2
              style={{
                fontFamily: "var(--font-primary, 'Bebas Neue')",
                fontSize: "var(--h2-size, 148px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "100%",
                letterSpacing: "0%",
                textTransform: "uppercase",
                textAlign: "left",
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              <span style={{ color: "#B6B7C3" }}>{serviceData.coreServices.heading.part1}</span>
              <br />
              {serviceData.coreServices.heading.part2}
              <br />
              {serviceData.coreServices.heading.part3}
            </h2>

            {/* Description Paragraph */}
            <p
              style={{
                fontFamily: "var(--font-secondary, 'Outfit')",
                fontSize: "clamp(16px, 1.5vw, 20px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "150%",
                textAlign: "left",
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              {serviceData.coreServices.description}
            </p>
          </div>

          {/* Right Column - Services List */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {serviceData.coreServices.services.map((service, index) => (
              <div key={service.id}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-lg, 32px)",
                    paddingTop: index > 0 ? "var(--space-lg, 32px)" : "0",
                    paddingBottom: "var(--space-lg, 32px)",
                  }}
                >
                  {/* Service Number */}
                  <span
                    style={{
                      fontFamily: "var(--font-primary, 'Bebas Neue')",
                      fontSize: "var(--accent-medium-size, 48px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "120%",
                      color: "#B6B7C3",
                      minWidth: "60px",
                    }}
                  >
                    {service.id}
                  </span>

                  {/* Service Name */}
                  <span
                    style={{
                      fontFamily: "var(--font-secondary, 'Outfit')",
                      fontSize: "var(--accent-small-size, 32px)",
                      fontStyle: "normal",
                      fontWeight: "300",
                      lineHeight: "120%",
                      letterSpacing: "0%",
                      color: "#FFFFFF",
                      flex: 1,
                    }}
                  >
                    {service.name}
                  </span>
                </div>

                {/* Horizontal Separator */}
                {index < serviceData.coreServices.services.length - 1 && (
                  <div
                    style={{
                      width: "100%",
                      height: "1px",
                      background: "#B6B7C3",
                      opacity: 0.3,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Includes Section */}
      <section
        style={{
          display: "flex",
          padding: "var(--section-margin-y, 120px) var(--section-margin-x, 120px)",
          flexDirection: "column",
          gap: "var(--space-xxl, 64px)",
          alignSelf: "stretch",
          background: "#F7F7F8",
          position: "relative",
        }}
      >
        {/* Top Two-Column Informational Area */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gap: "var(--space-xl, 48px)",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {/* Left Column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-lg, 32px)",
            }}
          >
            {/* Heading */}
            <h2
              style={{
                fontFamily: "var(--font-primary, 'Bebas Neue')",
                fontSize: "var(--accent-medium-size, 48px)",
                fontStyle: "normal",
                fontWeight: "300",
                lineHeight: "120%",
                letterSpacing: "0%",
                textTransform: "uppercase",
                textAlign: "left",
                color: "#0C0C0E",
                margin: 0,
              }}
            >
              {serviceData.servicesIncludes.leftColumn.heading.part1}
              <br />
              {serviceData.servicesIncludes.leftColumn.heading.part2}
            </h2>

            {/* Description Paragraph */}
            <p
              style={{
                fontFamily: "var(--font-secondary, 'Outfit')",
                fontSize: "clamp(16px, 1.5vw, 20px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "150%",
                textAlign: "left",
                color: "#0C0C0E",
                margin: 0,
              }}
            >
              {serviceData.servicesIncludes.leftColumn.description}
            </p>
          </div>

          {/* Right Column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-lg, 32px)",
            }}
          >
            {/* Heading */}
            <h3
              style={{
                fontFamily: "var(--font-primary, 'Bebas Neue')",
                fontSize: "var(--h3-size, 56px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "100%",
                letterSpacing: "0%",
                textTransform: "uppercase",
                textAlign: "left",
                color: "#0C0C0E",
                margin: 0,
              }}
            >
              {serviceData.servicesIncludes.rightColumn.heading.part1}
              <br />
              <span style={{ color: "#4A4A5A" }}>
                {serviceData.servicesIncludes.rightColumn.heading.part2}
              </span>
              <br />
              {serviceData.servicesIncludes.rightColumn.heading.part3}
            </h3>

            {/* Description Paragraph */}
            <p
              style={{
                fontFamily: "var(--font-secondary, 'Outfit')",
                fontSize: "clamp(16px, 1.5vw, 20px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "150%",
                textAlign: "left",
                color: "#0C0C0E",
                margin: 0,
              }}
            >
              {serviceData.servicesIncludes.rightColumn.description}
            </p>
          </div>
        </div>

        {/* Bottom Three-Column Services Listing */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--space-xl, 48px)",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {serviceData.servicesIncludes.services.map((service, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              {/* Service Title */}
              <h3
                style={{
                  fontFamily: "var(--font-primary, 'Bebas Neue')",
                  fontSize: "var(--accent-small-size, 32px)",
                  fontStyle: "normal",
                  fontWeight: "300",
                  lineHeight: "120%",
                  letterSpacing: "0%",
                  textTransform: "uppercase",
                  textAlign: "left",
                  color: "#0C0C0E",
                  margin: 0,
                  marginBottom: "var(--space-md, 24px)",
                }}
              >
                {service.title}
              </h3>

              {/* Horizontal Separator */}
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "#4A4A5A",
                  opacity: 0.3,
                  marginBottom: "var(--space-md, 24px)",
                }}
              />

              {/* Service Description */}
              <p
                style={{
                  fontFamily: "var(--font-secondary, 'Outfit')",
                  fontSize: "var(--body-medium-size, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  textAlign: "left",
                  color: "#0C0C0E",
                  margin: 0,
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Spotlight CTA Section */}
      <section
        style={{
          display: "flex",
          padding: "var(--section-margin-y, 120px) var(--section-margin-x, 120px)",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-xl, 48px)",
          alignSelf: "stretch",
          background: "#0C0C0E",
          position: "relative",
          minHeight: "400px",
        }}
      >
        {/* Left Content Block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-md, 24px)",
            flex: "0 0 auto",
            zIndex: 2,
          }}
        >
          {/* SPOTLIGHT Title with dot replacing 'I' */}
          <h2
            style={{
              fontFamily: "var(--font-primary, 'Bebas Neue')",
              fontSize: "clamp(60px, 8vw, 120px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "100%",
              textTransform: "uppercase",
              textAlign: "left",
              color: "#FFFFFF",
              margin: 0,
              display: "flex",
              alignItems: "center",
              gap: "0.05em",
              position: "relative",
            }}
          >
            SPOT
            {/* Light Source Dot replacing 'I' */}
            <span
              style={{
                display: "inline-block",
                width: "0.12em",
                height: "0.12em",
                borderRadius: "50%",
                background: "#FFFFFF",
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.9)",
                flexShrink: 0,
              }}
            />
            LIGHT
          </h2>

          {/* Tagline */}
          <p
            style={{
              fontFamily: "var(--font-secondary, 'Outfit')",
              fontSize: "clamp(16px, 1.5vw, 20px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%",
              textAlign: "left",
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            {serviceData.spotlightCTA.leftSide.tagline}
          </p>
        </div>

        {/* Center Spotlight Effect */}
        <div
          style={{
            position: "absolute",
            left: "35%",
            top: "0",
            width: "30%",
            height: "100%",
            zIndex: 1,
            pointerEvents: "none",
            overflow: "visible",
          }}
        >
          {/* Light Source Dot - positioned in top-left area */}
          <div
            style={{
              position: "absolute",
              left: "-8px",
              top: "15%",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: "#FFFFFF",
              boxShadow: "0 0 25px rgba(255, 255, 255, 1), 0 0 50px rgba(255, 255, 255, 0.7)",
              zIndex: 3,
            }}
          />

          {/* Conical Light Beam - starts from the dot center, thinner beam with 45-degree angle from bottom */}
          <div
            style={{
              position: "absolute",
              left: "2px",
              top: "calc(15% + 10px)",
              width: "calc(100% - 2px)",
              height: "calc(100% - 15% - 10px)",
              background: "linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(220, 220, 220, 0.35) 10%, rgba(180, 180, 180, 0.2) 25%, rgba(120, 120, 120, 0.1) 45%, rgba(60, 60, 60, 0.05) 65%, rgba(20, 20, 20, 0.02) 85%, rgba(0, 0, 0, 0) 100%)",
              clipPath: "polygon(0 0, 100% 0%, 100% 15%, 0 100%)",
              transformOrigin: "left top",
            }}
          />
        </div>

        {/* Right Content Block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-md, 24px)",
            flex: "0 0 auto",
            maxWidth: "500px",
            zIndex: 2,
          }}
        >
          {/* Heading */}
          <h3
            style={{
              fontFamily: "var(--font-primary, 'Bebas Neue')",
              fontSize: "clamp(32px, 4vw, 56px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "100%",
              textTransform: "uppercase",
              textAlign: "left",
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            {serviceData.spotlightCTA.rightSide.heading}
          </h3>

          {/* Description Paragraph */}
          <p
            style={{
              fontFamily: "var(--font-secondary, 'Outfit')",
              fontSize: "clamp(16px, 1.5vw, 20px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%",
              textAlign: "left",
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            {serviceData.spotlightCTA.rightSide.description}
          </p>
        </div>
      </section>

      {/* FAQs Section */}
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
        {/* Left Column - Heading and Subheading */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-lg, 32px)",
            flex: "0 0 auto",
            minWidth: "300px",
          }}
        >
          {/* Main Title */}
          <h2
            style={{
              fontFamily: "var(--font-primary, 'Bebas Neue')",
              fontSize: "clamp(60px, 8vw, 120px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "100%",
              textTransform: "uppercase",
              textAlign: "left",
              color: "#4A4A5A",
              margin: 0,
            }}
          >
            {serviceData.faqs.heading}
          </h2>

          {/* Subheading */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-xs, 16px)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-secondary, 'Outfit')",
                fontSize: "clamp(18px, 2vw, 24px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "150%",
                textAlign: "left",
                color: "#4A4A5A",
                margin: 0,
              }}
            >
              {serviceData.faqs.subheading.line1}
            </p>
            <p
              style={{
                fontFamily: "var(--font-secondary, 'Outfit')",
                fontSize: "clamp(18px, 2vw, 24px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "150%",
                textAlign: "left",
                color: "#4A4A5A",
                margin: 0,
              }}
            >
              {serviceData.faqs.subheading.line2}
            </p>
          </div>
        </div>

        {/* Right Column - Questions List */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            gap: "var(--space-lg, 32px)",
          }}
        >
          {serviceData.faqs.questions.map((question: string, index: number) => (
            <div key={index}>
              {/* Question with Plus Icon */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "var(--space-md, 24px)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-secondary, 'Outfit')",
                    fontSize: "clamp(18px, 2vw, 24px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "150%",
                    textAlign: "left",
                    color: "#4A4A5A",
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {question}
                </p>
                
                {/* Plus Icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{
                    flexShrink: 0,
                    marginLeft: "var(--space-md, 24px)",
                  }}
                >
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="#0C0C0E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Horizontal Separator */}
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "#D1D1D6",
                  opacity: 0.5,
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
