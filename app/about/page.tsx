import Image from "next/image";
import Leadership from "@/components/sections/Leadership";
import TeamSection from "@/components/sections/TeamSection";
import TextRevealEffect from "@/components/sections/Text-Reveal-Effect";

export default function About() {
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


      {/* Team Sections */}
      <TeamSection
        titleSvgSrc="/Aboutus/strategy-lab-team-title.svg"
        groupPhoto="/Aboutus/Teams/strategyLab.png"
        individualPhotos={[
          {
            src: "/Aboutus/Teams/sl1.png",
            hoverSrc: "/Aboutus/Teams/sl1h.png",
            alt: "Creative Team Member 1",
            position: "Position 1",
            name: "Name 1",
          },
          {
            src: "/Aboutus/Teams/sl2.png",
            hoverSrc: "/Aboutus/Teams/sl2h.png",
            alt: "Creative Team Member 2",
            position: "Position 1",
            name: "Name 1",
          },
          {
            src: "/Aboutus/Teams/sl3.png",
            hoverSrc: "/Aboutus/Teams/sl3h.png",
            alt: "Creative Team Member 3",
            position: "Position 1",
            name: "Name 1",
          },
          {
            src: "/Aboutus/Teams/sl4.png",
            hoverSrc: "/Aboutus/Teams/sl4h.png",
            alt: "Creative Team Member 4",
            position: "Position 1",
            name: "Name 1",
          },
        ]}
      />

      <TeamSection
        titleSvgSrc="/Aboutus/creatives-team-title.svg"
        groupPhoto="/Aboutus/Teams/creatives-team.png"
        individualPhotos={[
          {
            src: "/Aboutus/Teams/kidus1.png",
            hoverSrc: "/Aboutus/Teams/kidus2.png",
            alt: "creatives",
            position: "Creative team",
            name: "Kidus Ashenafi",
          },
          {
            src: "/Aboutus/Teams/israel1.png",
            hoverSrc: "/Aboutus/Teams/israel2.png",
            alt: "creative Team Member 2",
            position: "Creative",
            name: "Israel Abebe",
          },
          {
            src: "/Aboutus/Teams/kibreab1.png",
            hoverSrc: "/Aboutus/Teams/kibreab2.png",
            alt: "Creative Team Member 3",
            position: "Creative",
            name: "Kibreab Getachew",
          },
          {
            src: "/Aboutus/Teams/beza1.png",
            hoverSrc: "/Aboutus/Teams/beza2.png",
            alt: "creative Team Member 4",
            position: "creative",
            name: "Bezawit Tsegaye",
          },
           {
            src: "/Aboutus/Teams/erget2.png",
            hoverSrc: "/Aboutus/Teams/erget1.png",
            alt: "Creative Team Member 4",
            position: "Creative",
            name: "Erget Mekbib",
          },
           {
            src: "/Aboutus/Teams/yared1.png",
            hoverSrc: "/Aboutus/Teams/yared2.png",
            alt: "Creative Team Member 4",
            position: "Creative",
            name: "Yared Teku",
          },
        ]}
      />

      <TeamSection
        titleSvgSrc="/Aboutus/digital-squad-team-title.svg"
        groupPhoto="/Aboutus/Teams/digitalSquad-team.png"
        individualPhotos={[
          {
            src: "/Aboutus/Teams/marlen1.png",
            hoverSrc: "/Aboutus/Teams/marlen2.png",
            alt: "Digital Team Member 1",
            position: "Digital team member",
            name: "Marlen Assefa",
          },
          {
            src: "/Aboutus/Teams/miki1.png",
            hoverSrc: "/Aboutus/Teams/miki2.png",
            alt: "Digital Team Member 2",
            position: "Digital Team member",
            name: "Michael Shewangizaw",
          },
          {
            src: "/Aboutus/Teams/debo1.png",
            hoverSrc: "/Aboutus/Teams/debo2.png",
            alt: "Digital Team Member 3",
            position: "Digital Team member",
            name: "Deborah Munyaneza",
          },
          {
            src: "/Aboutus/Teams/sl4.png",
            hoverSrc: "/Aboutus/Teams/sl4h.png",
            alt: "Digital Team Member 4",
            position: "Position 1",
            name: "Name 1",
          },
          {
            src: "/Aboutus/Teams/sl1.png",
            hoverSrc: "/Aboutus/Teams/sl1h.png",
            alt: "Digital Team Member 5",
            position: "Position 1",
            name: "Name 1",
          },
          {
            src: "/Aboutus/Teams/sl2.png",
            hoverSrc: "/Aboutus/Teams/sl2h.png",
            alt: "Digital Team Member 6",
            position: "Position 1",
            name: "Name 1",
          },
          {
            src: "/Aboutus/Teams/sl3.png",
            hoverSrc: "/Aboutus/Teams/sl3h.png",
            alt: "Digital Team Member 7",
            position: "Position 1",
            name: "Name 1",
          },
        ]}
      />

      <TeamSection
        titleSvgSrc="/Aboutus/event-experts.team.svg"
        groupPhoto="/Aboutus/Teams/event-experts.png"
        individualPhotos={[
          {
            src: "/Aboutus/Teams/yoni1.png",
            hoverSrc: "/Aboutus/Teams/yoni2.png",
            alt: "Event Team Member 1",
            position: "Event Expert",
            name: "Yonathan Ekubemichale",
          },
          {
            src: "/Aboutus/Teams/sl2.png",
            hoverSrc: "/Aboutus/Teams/sl2h.png",
            alt: "Event Team Member 2",
            position: "Position 1",
            name: "Name 1",
          },
           {
            src: "/Aboutus/Teams/sl2.png",
            hoverSrc: "/Aboutus/Teams/sl2h.png",
            alt: "Event Team Member 2",
            position: "Position 1",
            name: "Name 1",
          },
        ]}
      />

      <TeamSection
        titleSvgSrc="/Aboutus/account-hive-team-title.svg"
        groupPhoto="/Aboutus/Teams/acount-hives-team.png"
        individualPhotos={[
          {
            src: "/Aboutus/Teams/marsilas1.png",
            hoverSrc: "/Aboutus/Teams/marsilas2.png",
            alt: "Account Team Member 1",
            position: "Senior Account",
            name: "Marsilas Mengistu",
          },
          {
            src: "/Aboutus/Teams/kalkidan1.png",
            hoverSrc: "/Aboutus/Teams/kalkidan2.png",
            alt: "Account Team Member 2",
            position: "Senior Account",
            name: "kalkidan Samson",
          },
          {
            src: "/Aboutus/Teams/bezawit1.png",
            hoverSrc: "/Aboutus/Teams/bezawit2.png",
            alt: "Account Team Member 3",
            position: "Senior Account",
            name: "Bezawit Tefera",
          }
        ]}
      />

      <TeamSection
        titleSvgSrc="/Aboutus/finance-crew-team-title.svg"
        groupPhoto="/Aboutus/Teams/finance-crew.png"
        individualPhotos={[
          {
            src: "/Aboutus/Teams/mekdes1.png",
            hoverSrc: "/Aboutus/Teams/mekdes2.png",
            alt: "Finance Team Member 1",
            position: "Finance team leader",
            name: "Mekdes Tadesse",
          },
          {
            src: "/Aboutus/Teams/helen1.png",
            hoverSrc: "/Aboutus/Teams/helen2.png",
            alt: "Finance Team Member 2",
            position: "Finance team member",
            name: "Helen Kalkidan",
          },
          {
            src: "/Aboutus/Teams/sl3.png",
            hoverSrc: "/Aboutus/Teams/sl3h.png",
            alt: "Finance Team Member 3",
            position: "Position 1",
            name: "Name 1",
          },
        ]}
      />
    </main>
  );
}
