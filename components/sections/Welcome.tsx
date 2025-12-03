import Image from "next/image";

export default function Welcome() {
  return (
    <section
      className="w-full h-auto text-white"
      style={{
        background: "var(--spotlight-950)",
        paddingLeft: "var(--section-margin-x)",
        paddingRight: "var(--section-margin-x)",
        paddingTop: "var(--section-margin-y)",
        paddingBottom: "var(--section-margin-y)",
      }}
    >
      {/* TOP TITLE */}
      <div className="text-center">
        <h1
          className="uppercase"
          style={{
            fontSize: "var(--h2-size)",
            lineHeight: "var(--h2-line)",
            fontWeight: "400",
            fontFamily: "var(--font-primary)",
          }}
        >
          Welcome to Spotlight!
        </h1>

        <p
          className="font-secondary"
          style={{
            fontWeight: 300,
            fontStyle: "normal",
            fontSize: "var(--accent-small-size)",
            lineHeight: "120%",
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          The <span style={{ color: "var(--spotlight-100)" }}>Best Advertising Agency</span><br />
          in Addis Ababa, Ethiopia
        </p>
      </div>

      {/* CONTENT WRAPPER */}
      <div
        className="flex flex-col lg:flex-row items-start"
        style={{ marginTop: "var(--space-xl)", gap: "var(--space-xl)" }}
      >
        {/* LEFT PARAGRAPH */}
        <p
          className="max-w-lg font-secondary"
          style={{
            color: "var(--spotlight-100, #F7F7F8)",
            fontFamily: "var(--font-secondary)",
            fontSize: "var(--accent-small-size)",
            fontWeight: 200,
            lineHeight: "120%",
          }}
        >
          Spotlight communications and Marketing is one of the best advertising
          and marketing agencies in Addis Ababa, Ethiopia specializing in marketing,
          advertising, branding & design, production, and PR. Trusted by brands like
          the European Union, Ethiopian Airlines, and Safaricom Ethiopia, we create
          bold, youthful, and unforgettable brand experiences that connect, inspire,
          and drive real impact.
        </p>

        {/* RIGHT IMAGES */}
        <div className="relative w-full h-[490px]">
          {/* left image: bottom-left */}
          <div
            className="absolute left-0 bottom-0 w-[313px] h-[425px] overflow-hidden shadow-lg z-10"
            style={{ minWidth: 260 }}
          >
            <Image src="/Home/welcome1.jpg" alt="welcome left" fill className="object-cover" />
          </div>

          {/* right image: top-right and overlapping center */}
          <div
            className="absolute right-0 top-0 w-[313px] h-[425px]  overflow-hidden shadow-2xl z-20"
            style={{ transform: "translateX(-8%) translateY(50%)", minWidth: 260 }}
          >
            <Image src="/Home/welcome2.png" alt="welcome right" fill className="object-cover" />
          </div>
        </div>
        
      </div>

      {/* BUTTON */}
      <div
        className="flex justify-center items-center"
        style={{ marginTop: "var(--space-xl)" }}
      >
        <button className="border border-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition">
          • About Us →
        </button>
      </div>
    </section>
  );
}
