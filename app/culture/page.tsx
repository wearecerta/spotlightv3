"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import culture  from "../culture/culture"

export default function Culture() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial hidden state for main content
    gsap.set(contentRef.current, { opacity: 0, y: 80 });

    tl.to({}, { duration: 2 }) // Wait 2 seconds

      // Exit animation for the intro image overlay
      .to(overlayRef.current, {
        opacity: 0,
        scale: 1.1,
        duration: 1.2,
        ease: "power3.inOut",
      })

      // Remove overlay after animation
      .set(overlayRef.current, { display: "none" })

      // Animate main content into view
      .to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
      });
  }, []);

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
      {/* 🔥 Intro Image Overlay */}
      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "#0C0C0E",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/Culture/Frame-56.png"
          alt="Culture Intro"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* 🔥 Main Content Wrapper for GSAP */}
      <div ref={contentRef}>
        {/* 🔥 Your Original Code (UNCHANGED) */}
        <section
          style={{
            display: "flex",
            minHeight: "100vh",
            padding:
              "20px var(--section-margin-x, 120px) var(--section-margin-y, 120px)",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--space-xxl, 64px)",
            position: "relative",
          }}
        >
          {/* Left Column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "var(--space-lg, 32px)",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Culture 1 */}
            <div
              style={{
                position: "relative",
                width: "433.795px",
                height: "325.875px",
                transform: "rotate(-15deg)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Image
                src="/Culture/culture-1.png"
                alt="Culture 1"
                fill
                className="object-cover"
                sizes="500px"
              />
            </div>

            {/* Culture 2 */}
            <div
              style={{
                position: "relative",
                width: "433.795px",
                height: "325.875px",
                transform: "rotate(-5deg)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Image
                src="/Culture/culture-2.png"
                alt="Culture 2"
                fill
                className="object-cover"
                sizes="500px"
              />
            </div>

            {/* Culture 3 */}
            <div
              style={{
                position: "relative",
                width: "441.296px",
                height: "331.51px",
                transform: "rotate(-15deg)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Image
                src="/Culture/culture-3.png"
                alt="Culture 3"
                fill
                className="object-cover"
                sizes="500px"
              />
            </div>
          </div>

          {/* Middle Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "var(--space-xxl, 64px)",
              position: "relative",
              width: "100%",
              maxWidth: "none",
              zIndex: 10,
            }}
          >
            <h1
              style={{
                color: "#FFF",
                fontFamily:
                  'var(--Typograpghy-Heading-H1-font-family, "Bebas Neue")',
                fontSize: "var(--Typograpghy-Heading-H1-font-Size, 192px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "100%",
                textTransform: "uppercase",
                textAlign: "center",
                width: "100%",
                position: "relative",
                zIndex: 10,
              }}
            >
              OUR CULTURE
            </h1>

            <p
              style={{
                color: "#FFF",
                fontFamily: "var(--font-secondary, Outfit)",
                fontSize: "clamp(24px, 3vw, 40px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "150%",
                textAlign: "center",
                width: "100%",
                position: "relative",
                zIndex: 10,
              }}
            >
              This is No Ordinary Workplace, It's
            </p>

            <div
              style={{
                display: "flex",
                padding: "var(--space-xl, 48px) var(--space-xxl, 64px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--space-md, 24px)",
                background: "#F7F7F8",
                borderRadius: "64px",
                position: "relative",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "#0C0C0E",
                  flexShrink: 0,
                }}
              />

              <h2
                style={{
                  fontSize: "clamp(32px, 4vw, 56px)",
                  fontFamily: 'var(--font-primary, "Bebas Neue")',
                  fontWeight: "400",
                  lineHeight: "100%",
                  color: "#0C0C0E",
                  textTransform: "capitalize",
                }}
              >
                A Creative Playground
              </h2>
            </div>
          </div>

          {/* Right Column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "var(--space-lg, 32px)",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Culture 4 */}
            <div
              style={{
                position: "relative",
                width: "433.795px",
                height: "325.875px",
                transform: "rotate(15deg)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Image
                src="/Culture/culture-4.png"
                alt="Culture 4"
                fill
                className="object-cover"
                sizes="500px"
              />
            </div>

            {/* Culture 5 */}
            <div
              style={{
                position: "relative",
                width: "433.795px",
                height: "325.875px",
                transform: "rotate(5deg)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Image
                src="/Culture/culture-5.jpg"
                alt="Culture 5"
                fill
                className="object-cover"
                sizes="500px"
              />
            </div>

            {/* Culture 6 */}
            <div
              style={{
                position: "relative",
                width: "433.795px",
                height: "325.875px",
                transform: "rotate(15deg)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Image
                src="/Culture/culture-6.png"
                alt="Culture 6"
                fill
                className="object-cover"
                sizes="500px"
              />
            </div>
          </div>

          {/* cards */}

        <Culture />

          <main
              style={{
                minHeight: "100vh",
                background: "#0C0C0E",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Intro Overlay */}
              <div
                ref={overlayRef}
                style={{
                  position: "fixed",
                  inset: 0,
                  zIndex: 9999,
                  background: "#0C0C0E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/Culture/Frame-56.png"
                  alt="Culture Intro"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
        
              <div ref={contentRef}>
                <section
                  style={{
                    minHeight: "100vh",
                    padding: "120px 120px",
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {/* ================= CARDS SECTION ================= */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      maxWidth: "1200px",
                    }}
                  >
                    {/* LEFT QUOTES */}
                    <p className="quote left">
                      We don’t follow trends — we forecast them.
                    </p>
        
                    <p className="quote left second">
                      Spotlight ideas don’t whisper — they roar.
                    </p>
        
                    {/* RIGHT QUOTES */}
                    <p className="quote right">
                      We move at the speed of culture.
                    </p>
        
                    <p className="quote right second">
                      Playing it safe isn’t in our DNA.
                    </p>
        
                    {/* POLAROID STACK */}
                    <div className="polaroid-stack">
                      {[
                        { src: "/Culture/culture-1.png", label: "Creative", rotate: "-8deg" },
                        { src: "/Culture/culture-2.png", label: "Playful", rotate: "6deg" },
                        { src: "/Culture/culture-3.png", label: "Vibrant", rotate: "-6deg" },
                        { src: "/Culture/culture-4.png", label: "Bold", rotate: "8deg" },
                      ].map((card, i) => (
                        <div
                          key={i}
                          className="polaroid"
                          style={{ transform: `rotate(${card.rotate})` }}
                        >
                          <div className="img-wrap">
                            <Image
                              src={card.src}
                              alt={card.label}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span>{card.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
        
              {/* ================= STYLES ================= */}
              <style jsx>{`
                .polaroid-stack {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  gap: 80px;
                }
        
                .polaroid {
                  background: #fff;
                  padding: 16px 16px 24px;
                  border-radius: 4px;
                  width: 360px;
                  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
                }
        
                .img-wrap {
                  position: relative;
                  width: 100%;
                  height: 260px;
                  overflow: hidden;
                }
        
                .polaroid span {
                  display: block;
                  margin-top: 12px;
                  text-align: center;
                  font-family: "Caveat", cursive;
                  font-size: 20px;
                  color: #000;
                }
        
                .quote {
                  position: absolute;
                  font-family: "Caveat", cursive;
                  font-size: 18px;
                  color: #fff;
                  max-width: 240px;
                  line-height: 1.5;
                  opacity: 0.9;
                }
        
                .quote.left {
                  left: -40px;
                  top: 100px;
                }
        
                .quote.left.second {
                  top: 520px;
                }
        
                .quote.right {
                  right: -40px;
                  top: 180px;
                  text-align: right;
                }
        
                .quote.right.second {
                  top: 700px;
                }
        
                @media (max-width: 1024px) {
                  .quote {
                    display: none;
                  }
        
                  .polaroid {
                    width: 300px;
                  }
                }
              `}</style>
            </main>


        </section>
      </div>
    </main>
  );
}