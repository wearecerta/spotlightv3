
"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Culture() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set(contentRef.current, { opacity: 0, y: 80 });

    tl.to({}, { duration: 2 })
      .to(overlayRef.current, {
        opacity: 0,
        scale: 1.1,
        duration: 1.2,
        ease: "power3.inOut",
      })
      .set(overlayRef.current, { display: "none" })
      .to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
      });
  }, []);

  return (
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
  );
}
