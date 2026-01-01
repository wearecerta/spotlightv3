import Image from "next/image";
import Leadership from "@/components/sections/Leadership";
import TeamSection from "@/components/sections/TeamSection";
import TextRevealEffect from "@/components/sections/Text-Reveal-Effect";


export default function About() {
  return (
    <main
      className="-mt-16 md:-mt-24 lg:-mt-26 overflow-hidden z-0"
      style={{
        minHeight: "100vh",
        background: "#0C0C0E",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
  {/* Layered container */}
 <div className="relative w-full overflow-hidden flex flex-col items-center justify-center">

  {/* ABOUT US SVG */}
  <Image
    src="/Aboutus/about-us-title.svg"
    alt="About Us Background"
    width={1620}
    height={240}
    priority
    className="
      absolute
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
        style={{
          display: "flex",
          padding: "var(--section-margin-y, 120px)",
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
            fontSize: "clamp(3.5rem, 10vw, var(--h2-size))",
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
       <TextRevealEffect  fontSize="var(--accent-medium-size)" paragraphText="Driving marketing from tired, stale tactics into creatively strategic campaigns that shake up entire industries. No brand is too big or too small our pioneering strategies can exponentially amplify any company’s influence and dominance."/>
      </section>

      {/* The grid section */}
      <div className="grid grid-cols-2  max-w-[1440px] mx-auto">
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
            borderRight: "1px solid #222224",
            borderBottom: "1px solid #222224",
          }}
          className="p-(--section-margin-x)"
        >
          {/* Heading */}
          <h2
            style={{
              color: "#FFF",
              fontFamily: 'var(--font-primary, "Bebas Neue")',
              fontSize: "var(--h3-size, 56px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "100%",
              textTransform: "uppercase",
              alignSelf: "stretch",
            }}

          >
            UNDER THE <br />
            SPOTLIGHT
          </h2>

          <TextRevealEffect  fontSize="var(--accent-small-size)" paragraphText="We don't stop until we put our brands front-and-center. Through deep insights, creative strategy, and spotless execution, we showcase brands as must-see icons and thought leaders that inspire their action."/>
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
            overflow: "hidden",
            borderBottom: "1px solid #222224",
          }}
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
       
        {/* Left Side - Image */}
        <div
          style={{
            flex: "1 0 0",
            alignSelf: "stretch",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            borderRight: "1px solid #222224",
          }}
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

        {/* Right Side - Text Content with description */}
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
          className="p-(--section-margin-x)"
        >
          {/* Heading */}
          <h2
            style={{
              color: "#FFF",
              fontFamily: 'var(--font-primary, "Bebas Neue")',
              fontSize: "var(--h3-size, 56px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "100%",
              textTransform: "uppercase",
              alignSelf: "stretch",
            }}
          >
            SETTING THE STAGE
          </h2>

          {/* Description with Interactive Hover Effect */}
          <TextRevealEffect fontSize="var(--accent-small-size)" paragraphText="We never follow we always lead. Our teams check egos at the door to create a playground of melding together perspectives, pushing creative boundaries through bold and fresh thinking is in our DNA. While our ideas are revolutionary, our process is swift and precise to bring game-changing campaigns to life."/>
        </div>
      </div>

      {/* Leadership Team Section */}
      <Leadership />

    
      {/* Team Sections */}
      <TeamSection
        titleSvgSrc="/Aboutus/strategy-lab-team-title.svg"
        groupPhoto="/Aboutus/Teams/strategyLab.png"
        individualPhotos={[
          {
            src: "/Aboutus/Teams/sl1.png",
            hoverSrc: "/Aboutus/Teams/sl1h.png",
            alt: "Creative Team Member 1",
          },
          {
            src: "/Aboutus/Teams/sl2.png",
            hoverSrc: "/Aboutus/Teams/sl2h.png",
            alt: "Creative Team Member 2",
          },
          {
            src: "/Aboutus/Teams/sl3.png",
            hoverSrc: "/Aboutus/Teams/sl3h.png",
            alt: "Creative Team Member 3",
          },
          {
            src: "/Aboutus/Teams/sl4.png",
            hoverSrc: "/Aboutus/Teams/sl4h.png",
            alt: "Creative Team Member 4",
          },
          {
            src: "/Aboutus/Teams/sl1.png",
            hoverSrc: "/Aboutus/Teams/sl1h.png",
            alt: "Creative Team Member 5",
          },
          {
            src: "/Aboutus/Teams/sl2.png",
            hoverSrc: "/Aboutus/Teams/sl2h.png",
            alt: "Creative Team Member 6",
          },
          {
            src: "/Aboutus/Teams/sl3.png",
            hoverSrc: "/Aboutus/Teams/sl3h.png",
            alt: "Creative Team Member 7",
          },
          {
            src: "/Aboutus/Teams/sl4.png",
            hoverSrc: "/Aboutus/Teams/sl4h.png",
            alt: "Creative Team Member 8",
          },
          {
            src: "/Aboutus/Teams/sl1.png",
            hoverSrc: "/Aboutus/Teams/sl1h.png",
            alt: "Creative Team Member 9",
          },
        ]}
        />

      <TeamSection
        titleSvgSrc="/Aboutus/creatives-team-title.svg"
        groupPhoto="/Aboutus/Teams/strategyLab.png"
        individualPhotos={[
          {
            src: "/Aboutus/Teams/sl1.png",
            hoverSrc: "/Aboutus/Teams/sl1h.png",
            alt: "Strategy Team Member 1",
          },
          {
            src: "/Aboutus/Teams/sl2.png",
            hoverSrc: "/Aboutus/Teams/sl2h.png",
            alt: "Strategy Team Member 2",
          },
          {
            src: "/Aboutus/Teams/sl3.png",
            hoverSrc: "/Aboutus/Teams/sl3h.png",
            alt: "Strategy Team Member 3",
          },
          {
            src: "/Aboutus/Teams/sl4.png",
            hoverSrc: "/Aboutus/Teams/sl4h.png",
            alt: "Strategy Team Member 4",
          },
        ]}
      />

      <TeamSection
        titleSvgSrc="/Aboutus/digital-squad-team-title.svg"
        groupPhoto="/Aboutus/Teams/strategyLab.png"
        individualPhotos={[
          {
            src: "/Aboutus/Teams/sl1.png",
            hoverSrc: "/Aboutus/Teams/sl1h.png",
            alt: "Digital Team Member 1",
          },
          {
            src: "/Aboutus/Teams/sl2.png",
            hoverSrc: "/Aboutus/Teams/sl2h.png",
            alt: "Digital Team Member 2",
          },
          {
            src: "/Aboutus/Teams/sl3.png",
            hoverSrc: "/Aboutus/Teams/sl3h.png",
            alt: "Digital Team Member 3",
          },
          {
            src: "/Aboutus/Teams/sl4.png",
            hoverSrc: "/Aboutus/Teams/sl4h.png",
            alt: "Digital Team Member 4",
          },
          {
            src: "/Aboutus/Teams/sl1.png",
            hoverSrc: "/Aboutus/Teams/sl1h.png",
            alt: "Digital Team Member 5",
          },
          {
            src: "/Aboutus/Teams/sl2.png",
            hoverSrc: "/Aboutus/Teams/sl2h.png",
            alt: "Digital Team Member 6",
          },
          {
            src: "/Aboutus/Teams/sl3.png",
            hoverSrc: "/Aboutus/Teams/sl3h.png",
            alt: "Digital Team Member 7",
          },
        ]}
      />

      <TeamSection
        titleSvgSrc="/Aboutus/event-experts.team.svg"
        groupPhoto="/Aboutus/Teams/strategyLab.png"
        individualPhotos={[
          {
            src: "/Aboutus/Teams/sl1.png",
            hoverSrc: "/Aboutus/Teams/sl1h.png",
            alt: "Event Team Member 1",
          },
          {
            src: "/Aboutus/Teams/sl2.png",
            hoverSrc: "/Aboutus/Teams/sl2h.png",
            alt: "Event Team Member 2",
          },
        ]}
      />

      <TeamSection
        titleSvgSrc="/Aboutus/account-hive-team-title.svg"
        groupPhoto="/Aboutus/Teams/strategyLab.png"
        individualPhotos={[
          {
            src: "/Aboutus/Teams/sl1.png",
            hoverSrc: "/Aboutus/Teams/sl1h.png",
            alt: "Account Team Member 1",
          },
          {
            src: "/Aboutus/Teams/sl2.png",
            hoverSrc: "/Aboutus/Teams/sl2h.png",
            alt: "Account Team Member 2",
          },
          {
            src: "/Aboutus/Teams/sl3.png",
            hoverSrc: "/Aboutus/Teams/sl3h.png",
            alt: "Account Team Member 3",
          },
          {
            src: "/Aboutus/Teams/sl4.png",
            hoverSrc: "/Aboutus/Teams/sl4h.png",
            alt: "Account Team Member 4",
          },
          {
            src: "/Aboutus/Teams/sl1.png",
            hoverSrc: "/Aboutus/Teams/sl1h.png",
            alt: "Account Team Member 5",
          },
          {
            src: "/Aboutus/Teams/sl2.png",
            hoverSrc: "/Aboutus/Teams/sl2h.png",
            alt: "Account Team Member 6",
          },
          {
            src: "/Aboutus/Teams/sl3.png",
            hoverSrc: "/Aboutus/Teams/sl3h.png",
            alt: "Account Team Member 7",
          },
        ]}
      />

      <TeamSection
        titleSvgSrc="/Aboutus/finance-crew-team-title.svg"
        groupPhoto="/Aboutus/Teams/strategyLab.png"
        individualPhotos={[
          {
            src: "/Aboutus/Teams/sl1.png",
            hoverSrc: "/Aboutus/Teams/sl1h.png",
            alt: "Finance Team Member 1",
          },
          {
            src: "/Aboutus/Teams/sl2.png",
            hoverSrc: "/Aboutus/Teams/sl2h.png",
            alt: "Finance Team Member 2",
          },
          {
            src: "/Aboutus/Teams/sl3.png",
            hoverSrc: "/Aboutus/Teams/sl3h.png",
            alt: "Finance Team Member 3",
          },
        ]}
      />
    </main>
  );
}
