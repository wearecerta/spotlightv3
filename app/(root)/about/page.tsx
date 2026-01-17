import Image from "next/image";
import Leadership from "@/components/sections/Leadership";
import TeamSection from "@/components/sections/TeamSection";
import TextRevealEffect from "@/components/sections/Text-Reveal-Effect";
import { client } from "@/sanity/lib/client";
import { TEAMS_QUERY } from "@/sanity/queries/AboutUsQuery";
import { urlFor } from "@/sanity/lib/image";

export default async function About() {
  const teams = (await client.fetch(TEAMS_QUERY)) || [];

  return (
    <main
      className="-mt-20 md:-mt-26 overflow-hidden z-0"
      style={{
        minHeight: "100vh",
        background: "#0C0C0E",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hero Section */}
      <section className="relative h-[390px] md:h-svh flex items-center justify-center overflow-hidden">
        {/* Layered container */}
        <div className="relative w-full overflow-hidden flex flex-col items-center justify-center">
          {/* ABOUT US SVG */}
          <Image
            src="/Aboutus/about-us-title.svg"
            alt="About Us Background"
            width={1620}
            height={240}
            priority
            className=" absolute
                      top-[28%]
                      w-[80%]
                      h-auto
                      select-none
                      pointer-events-none
                    "
          />

          {/* Hero Image */}
          <div className="relative w-full aspect-[16/9] z-10">
            <Image
              src="/Aboutus/AboutUsHero.png"
              alt="About Us - Spotlight Team"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Leading the Change Section */}
      <section
        className="p-6 md:p-(--space-xxl) lg:p-(--section-margin-y)"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "var(--space-lg, 32px)",
          alignSelf: "stretch",
          background: "var(--spotlight-950, #0C0C0E)",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        {/* Main Heading */}
        <h2
          style={{
            fontSize: "clamp(68px, 10vw, var(--h2-size))",
            fontFamily: "var(--font-primary)",
            lineHeight: "var(--h2-line)",
            display: "inline-block",
            width: "100%",
            background:
              "linear-gradient(180deg, var(--spotlight-50) 0%, var(--spotlight-700) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          LEADING THE CHANGE
        </h2>

        {/* Description Text with Interactive Hover Effect */}
        <TextRevealEffect
          className="font-secondary text-[24px] md:text-[48px]"
          paragraphText="Driving marketing from tired, stale tactics into creatively strategic campaigns that shake up entire industries. No brand is too big or too small our pioneering strategies can exponentially amplify any company’s influence and dominance."
        />
      </section>

      {/* The grid section */}
      <div className="flex  flex-col max-w-[1440px] mx-auto p-6 md:p-(--space-xxl) lg:p-(--section-margin-y)">
        {/* ===== Row 1 ===== */}
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Text Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "var(--space-lg, 32px)",
              flex: "1 0 0",
              alignSelf: "stretch",
            }}
            className="md:border-r md:border-b border-[#222224]"
          >
            <h2
              style={{
                color: "#FFF",
                fontFamily: 'var(--font-primary, "Bebas Neue")',
                fontSize: "var(--h3-size, 56px)",
                fontWeight: "400",
                lineHeight: "100%",
                textTransform: "uppercase",
              }}
            >
              UNDER THE <br />
              SPOTLIGHT
            </h2>

            <TextRevealEffect
              className="font-secondary text-[1.5rem] md:text-[2rem] md:pr-(--section-margin-x)"
              paragraphText="We don't stop until we put our brands front-and-center. Through deep insights, creative strategy, and spotless execution, we showcase brands as must-see icons and thought leaders that inspire their action."
            />
          </div>

          {/* Right Side - Image */}
          <div
            style={{
              flex: "1 0 0",
              alignSelf: "stretch",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // overflow: "hidden",
            }}
            className="md:border-b border-[#222224]"
          >
            <Image
              src="/Aboutus/under_spot.png"
              alt="Under the Spotlight"
              width={800}
              height={800}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                mixBlendMode: "screen",
                opacity: 0.95,
              }}
            />
          </div>
        </div>

        {/* ===== Row 2 ===== */}
        <div className="flex flex-col-reverse md:flex-row">
          {/* Left Side - Image */}
          <div
            style={{
              flex: "1 0 0",
              alignSelf: "stretch",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // overflow: "hidden",
            }}
            className="md:border-r border-[#222224]"
          >
            <Image
              src="/Aboutus/under_spot_2.png"
              alt="Setting the Stage"
              width={800}
              height={800}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                mixBlendMode: "screen",
                opacity: 0.95,
              }}
            />
          </div>

          {/* Right Side - Text Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "var(--space-lg, 32px)",
              flex: "1 0 0",
              alignSelf: "stretch",
            }}
          >
            <h2
              style={{
                color: "#FFF",
                fontFamily: 'var(--font-primary, "Bebas Neue")',
                fontSize: "var(--h3-size, 56px)",
                fontWeight: "400",
                lineHeight: "100%",
                textTransform: "uppercase",
              }}
              className="md:pl-(--section-margin-x) md:pt-(--section-margin-x)"
            >
              SETTING THE STAGE
            </h2>

            <TextRevealEffect
              className="font-secondary text-[1.5rem] md:text-[2rem] md:pl-(--section-margin-x)"
              paragraphText="We never follow we always lead. Our teams check egos at the door to create a playground of melding together perspectives, pushing creative boundaries through bold and fresh thinking is in our DNA. While our ideas are revolutionary, our process is swift and precise to bring game-changing campaigns to life."
            />
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <Leadership />

      {teams?.map((team: any) => (
        <TeamSection
          key={team._id}
          titleSvgSrc={team.titleSvg.asset.url}
          groupPhoto={team.teamsGroupImage.asset.url}
          individualPhotos={team.teamMembers.map((member: any) => ({
            src: urlFor(member?.mainImage).format("webp").url(),
            hoverSrc: urlFor(member?.secondaryImage).format("webp").url(),
            alt: member?.name || "",
            name: member?.name || "",
            position: member?.position || "",
          }))}
        />
      )) || []}
    </main>
  );
}
