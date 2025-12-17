"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
        className="flex flex-col lg:flex-row"
        style={{ marginTop: "var(--space-xl)", gap: "var(--space-xl)", alignItems: "flex-start" }}
      >
        {/* LEFT PARAGRAPH */}
        <div ref={textRef} className="max-w-lg">
          <p
            ref={paragraphRef}
            className="font-secondary"
            style={{
              color: `rgba(${74 + (247 - 74) * scrollProgress}, ${74 + (247 - 74) * scrollProgress}, ${90 + (248 - 90) * scrollProgress}, 1)`,
              fontFamily: "var(--font-outfit)",
              fontSize: "var(--accent-small-size)",
              fontWeight: 300,
              fontStyle: "normal",
              lineHeight: "120%",
              letterSpacing: "0%",
              transition: "color 0.1s ease-out",
            }}
          >
            Spotlight communications and Marketing is one of the best advertising
            and marketing agencies in Addis Ababa, Ethiopia specializing in marketing,
            advertising, branding & design, production, and PR. Trusted by brands like
            the European Union, Ethiopian Airlines, and Safaricom Ethiopia, we create
            bold, youthful, and unforgettable brand experiences that connect, inspire,
            and drive real impact.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div ref={imagesRef} className="relative w-full flex-1">
          <div 
            className="relative w-full" 
            style={{ 
              height: textHeight ? `${textHeight}px` : "425px",
              minHeight: "425px"
            }}
          >
            {/* top-left image */}
            <div
              className="absolute left-0 top-0 w-[313px] h-[425px] overflow-hidden shadow-lg z-10"
              style={{ minWidth: 260 }}
            >
              <Image src="/Home/welcome1.jpg" alt="welcome left" fill className="object-cover" />
            </div>

            {/* top-right image overlapping */}
            <div
              className="absolute right-0 top-0 w-[313px] h-[425px] overflow-hidden shadow-2xl z-20"
              style={{ transform: "translateX(-5%) translateY(25%)", minWidth: 260 }}
            >
              <Image src="/Home/welcome2.png" alt="welcome right" fill className="object-cover" />
            </div>
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
