"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Buttons from "../ui/Buttons";
import LeftParagraph from "./LeftParagraph";

export default function Welcome() {
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const [textHeight, setTextHeight] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (textRef.current) {
        setTextHeight(textRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (paragraphRef.current) {
        const rect = paragraphRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        // Calculate scroll progress (0 to 1)
        // Starts animating when element enters viewport, completes when it's fully visible
        const startPoint = windowHeight;
        const endPoint = windowHeight - elementHeight;
        const progress = Math.max(0, Math.min(1, (startPoint - elementTop) / (startPoint - endPoint)));
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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

    </section>
  );
}
