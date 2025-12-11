"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Welcome() {
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const [textHeight, setTextHeight] = useState<number | null>(null);
  const [gradientStops, setGradientStops] = useState<string>("");

  const fullText = "Spotlight communications and Marketing is one of the best advertising and marketing agencies in Addis Ababa, Ethiopia specializing in marketing, advertising, branding & design, production, and PR. Trusted by brands like the European Union, Ethiopian Airlines, and Safaricom Ethiopia, we create bold, youthful, and unforgettable brand experiences that connect, inspire, and drive real impact.";

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
        const triggerPoint = windowHeight * 0.7;
        const paragraphTop = rect.top;
        const paragraphHeight = rect.height;
        
        // Get the text node
        const textNode = paragraphRef.current.firstChild;
        if (!textNode || textNode.nodeType !== Node.TEXT_NODE) return;
        
        // Use Range to get actual line positions
        const range = document.createRange();
        range.selectNodeContents(paragraphRef.current);
        const lineRects = range.getClientRects();
        
        // Calculate gradient stops for each line
        const stops: string[] = [];
        const numLines = lineRects.length;
        
        Array.from(lineRects).forEach((lineRect, index) => {
          const lineTop = lineRect.top;
          const lineBottom = lineRect.bottom;
          const lineCenter = (lineTop + lineBottom) / 2;
          
          let progress = 0;
          
          // Calculate progress based on line position relative to trigger point
          if (lineCenter <= triggerPoint) {
            const distance = triggerPoint - lineCenter;
            const lineHeight = lineRect.height;
            const maxDistance = lineHeight * 1.5; // Animation range
            
            if (distance < maxDistance) {
              progress = Math.max(0, Math.min(1, 1 - (distance / maxDistance)));
            } else {
              progress = 1; // Line has passed - fully animated
            }
          }
          
          const currentColor = `rgba(${74 + (247 - 74) * progress}, ${74 + (247 - 74) * progress}, ${90 + (248 - 90) * progress}, 1)`;
          const linePercent = ((lineTop - paragraphTop) / paragraphHeight) * 100;
          const nextLinePercent = index < numLines - 1 
            ? ((Array.from(lineRects)[index + 1].top - paragraphTop) / paragraphHeight) * 100
            : 100;
          
          // Add gradient stop at start and end of line
          stops.push(`${currentColor} ${Math.max(0, linePercent)}%`);
          if (index < numLines - 1) {
            stops.push(`${currentColor} ${Math.min(100, nextLinePercent)}%`);
          }
        });
        
        setGradientStops(stops.join(', '));
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Use requestAnimationFrame for smoother updates
    let rafId: number;
    const rafHandleScroll = () => {
      handleScroll();
      rafId = requestAnimationFrame(rafHandleScroll);
    };
    rafId = requestAnimationFrame(rafHandleScroll);
    
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fullText]);
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
              fontFamily: "var(--font-outfit)",
              fontSize: "var(--accent-small-size)",
              fontWeight: 300,
              fontStyle: "normal",
              lineHeight: "120%",
              letterSpacing: "0%",
              background: gradientStops 
                ? `linear-gradient(to bottom, ${gradientStops})`
                : "rgba(74, 74, 90, 1)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              transition: "background 0.2s ease-out",
            }}
          >
            {fullText}
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

            {/* bottom-right image overlapping */}
            <div
              className="absolute right-0 bottom-0 w-[313px] h-[425px] overflow-hidden shadow-2xl z-20"
              style={{ transform: "translateX(-8%) translateY(-50%)", minWidth: 260 }}
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
