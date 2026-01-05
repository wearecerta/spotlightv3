import ServicesCard from "@/components/ui/ServicesCard";

export default function Service() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        minHeight: "100vh",
        background: "#F7F7F8",
        paddingBottom:"160px"
      }}
    >
      {/* Services Heading */}
      <div className="max-w-[1440px] flex flex-col gap-2 p-[24px] md:p-(--space-xxl) mx-auto">
        <h2
          style={{
            color: "var(--spotlight-950, #0C0C0E)",
            fontFamily: 'var(--font-primary, "Bebas Neue")',
            fontSize: "var(--h2-size)",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "100%",
            textTransform: "uppercase",
            textAlign: "left",
          }}
        >
          SERVICES
        </h2>

        {/* Description Paragraph */}
        <p
          style={{
            color: "#000",
            fontFamily: "var(--font-secondary, Outfit)",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "300",
            lineHeight: "120%",
            textAlign: "left",
          }}
        >
          We are storytellers and brand advocates. We craft compelling
          narratives that grow brands, nurture meaningful connections, and
          inspire audiences through experiences across the full spectrum of
          strategy, marketing, advertising, branding, production, and event
          services.
        </p>
      </div>

      {/* Three Videos Side by Side - Full Width, No Gaps */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 w-full mt-0 gap-0"
      >
        {/* Video 1 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            overflow: "hidden",
            background: "#000",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/c5iitHD0bNg?autoplay=1&mute=1&loop=1&playlist=c5iitHD0bNg&controls=0&modestbranding=1&rel=0&showinfo=0"
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ border: "none" }}
            title="Video 1"
          />
        </div>

        {/* Video 2 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            overflow: "hidden",
            background: "#000",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/c5iitHD0bNg?autoplay=1&mute=1&loop=1&playlist=c5iitHD0bNg&controls=0&modestbranding=1&rel=0&showinfo=0"
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ border: "none" }}
            title="Video 2"
          />
        </div>

        {/* Video 3 */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            overflow: "hidden",
            background: "#000",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/c5iitHD0bNg?autoplay=1&mute=1&loop=1&playlist=c5iitHD0bNg&controls=0&modestbranding=1&rel=0&showinfo=0"
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ border: "none" }}
            title="Video 3"
          />
        </div>
      </div>

      {/* Service Cards Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* PR & Communications Card */}
        <ServicesCard
          title="PR & COMMUNICATIONS"
          description="We are storytellers and brand advocates. We craft compelling narratives that grow brands, nurture meaningful connections, and inspire audiences through experiences across the full spectrum of strategy, marketing, advertising, branding, production, and event services."
          services={[
            "REPUTATION MANAGEMENT",
            "COMMUNICATIONS STRATEGY",
            "RISK AND CRISIS MANAGEMENT",
            "MEDIA TRAINING",
            "PUBLIC RELATIONS CAMPAIGNS",
            "CRISIS COMMUNICATION SUPPORT",
          ]}
          imageSrc1="/Service/pr_1.png"
          imageSrc2="/Service/pr_2.jpg"
          href="/service/pr-communications"
        />

        {/* Marketing Card */}
        <ServicesCard
          title="MARKETING"
          description="Recognized as the Best Marketing Agency in Addis Ababa, we focus on result-driven marketing strategies that connect businesses with their audiences. Our marketing solutions are backed by research, creativity, and innovation, helping brands to position themselves strongly in the competitive Ethiopian market."
          services={[
            "MARKET RESEARCH",
            "SHOPPERS MARKETING",
            "EXPERIENTIAL MARKETING",
            "MARKETING STRATEGY",
            "PROMOTIONAL MARKETING",
            "CONTENT & EMAIL MARKETING",
          ]}
          imageSrc1="/Service/marketing_1.png"
          imageSrc2="/Service/marketing_2.jpg"
          href="/service/marketing"
        />

        {/* Advertising Card */}
        <ServicesCard
          title="ADVERTISING"
          description="As the Best Advertising Agency in Addis Ababa and Ethiopia, we provide 360° advertising solutions that make brands visible across platforms. Whether it's traditional media or digital advertising, our campaigns are designed to maximize reach, engagement, and conversions."
          services={[
            "TV ADVERTISING",
            "RADIO ADVERTISING",
            "PRINT ADVERTISING",
            "OUTDOOR ADVERTISING",
            "DIGITAL ADVERTISING",
            "CAMPAIGN STRATEGY",
          ]}
          imageSrc1="/Service/adv-1.png"
          imageSrc2="/Service/adv-2.jpg"
          href="/service/advertising"
        />

        {/* Branding & Design Card */}
        <ServicesCard
          title="BRANDING & DESIGN"
          description="Being the Best Marketing Agency in Ethiopia, we believe that branding is more than just a logo — it's about creating an identity that resonates. Our creative team crafts designs and brand strategies that make businesses stand out in Addis Ababa and beyond."
          services={[
            "BRAND IDENTITY",
            "LOGO DESIGN",
            "VISUAL DESIGN",
            "BRAND STRATEGY",
            "PACKAGING DESIGN",
            "CREATIVE DIRECTION",
          ]}
          imageSrc1="/Service/brand-1.jpg"
          imageSrc2="/Service/brand-2.jpg"
          href="/service/branding-design"
        />

        {/* Production Card */}
        <ServicesCard
          title="PRODUCTION"
          description="As one of the leading Best Advertising Agencies in Ethiopia, we offer complete production services to bring your brand story to life. From TV commercials to documentaries and creative shoots, we deliver high-quality content that connects with audiences."
          services={[
            "VIDEO PRODUCTION",
            "TV COMMERCIALS",
            "DOCUMENTARIES",
            "CREATIVE SHOOTS",
            "POST-PRODUCTION",
            "CONTENT CREATION",
          ]}
          imageSrc1="/Service/prod-1.jpg"
          imageSrc2="/Service/prod-2.jpg"
          href="/service/production"
        />

        {/* Event Management Card */}
        <ServicesCard
          title="EVENT MANAGEMENT"
          description="With years of expertise, we are known as the Best Marketing and Advertising Agency in Addis Ababa for organizing impactful events. From planning to execution, we manage every detail to ensure your brand is showcased in the best possible way."
          services={[
            "EVENT PLANNING",
            "EVENT EXECUTION",
            "CORPORATE EVENTS",
            "PRODUCT LAUNCHES",
            "CONFERENCES",
            "EXHIBITIONS",
          ]}
          imageSrc1="/Service/event-1.jpg"
          imageSrc2="/Service/event-2.png"
          href="/service/event-management"
        />
      </div>
    </main>
  );
}
