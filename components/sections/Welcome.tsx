import Image from "next/image";
import Buttons from "../ui/Buttons";
import LeftParagraph from "./LeftParagraph";
import Link from "next/link";

export default function Welcome() {
  return (
    <section
      className="w-full  h-auto  bg-(--spotlight-950) "
      // style={{
      //   background: "var()",
      //   paddingLeft: "var(--section-margin-x)",
      //   paddingRight: "var(--section-margin-x)",
      //   paddingTop: "var(--section-margin-y)",
      //   paddingBottom: "var(--section-margin-y)",
      // }}

    >
      <div className="max-w-[1440px] mx-auto px-(--section-margin-x) md:px-(--space-xxl) lg:px-(--section-margin-x) py-(--section-margin-y) text-white">

      {/* TOP TITLE */}
      <div className="text-center flex flex-col gap-5">
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
          The{" "}
          <span style={{ color: "var(--spotlight-100)" }}>
            Best Advertising Agency
          </span>
          <br />
          in Addis Ababa, Ethiopia
        </p>
      </div>

      {/* CONTENT WRAPPER */}
      {/* !!!!!!!!!todo stikcy scroll */}
      {/* <div className="sticky top-0"> */}

      <div
        className="flex flex-col-reverse lg:flex-row  "
        style={{
          marginTop: "var(--space-xl)",
          gap: "var(--space-xl)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* LEFT PARAGRAPH */}
        <LeftParagraph />

        {/* RIGHT IMAGE */}
        <Image
          src="/Home/welcome-image.png"
          alt="Welcome Image"
          width={600}
          height={600}
          className="w-full flex-1 lg:max-w-lg mt-6 lg:mt-0"
        />
      </div>
      {/* BUTTON */}
      <Link href={"/about"}>
        <Buttons>ABOUT US</Buttons>
      </Link>

      {/* </div> */}
          </div>
    </section>
  );
}
