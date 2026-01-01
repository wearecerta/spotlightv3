
import Image from "next/image";
import Buttons from "../ui/Buttons";
import LeftParagraph from "./LeftParagraph";

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
      {/* !!!!!!!!!todo stikcy scroll */}
      {/* <div className="sticky top-0"> */}

      <div
        className="flex flex-col lg:flex-row  max-w-[1440px] mx-auto"
        style={{ marginTop: "var(--space-xl)", gap: "var(--space-xl)", justifyContent: "center", alignItems: "center" }}
      >
        {/* LEFT PARAGRAPH */}
        <LeftParagraph/>

        {/* RIGHT IMAGE */}
        <Image
          src="/Home/welcome-image.png"
          alt="Welcome Image"
          width={600}
          height={600}
          className="w-full max-w-md lg:max-w-lg mt-6 lg:mt-0"
        />        
      </div>
      {/* BUTTON */}
     <Buttons>
      ABOUT US
     </Buttons>


        {/* </div> */}
    </section>
  );
}
