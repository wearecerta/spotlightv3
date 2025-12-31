"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

export default function Industries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);
  const isHovered = (index: number) => hoveredIndex === index;

  const industriesList = [
    {
      name: "FOOD AND BEVERAGE",
      industrysLogo: [
        "/Home/unilever.png",
        "/Home/mastercard.png",
        "/Home/safaricom.png",
        "/Home/urban.svg",
        "/Home/urban.svg",
        "/Home/safaricom.png",
        "/Home/mastercard.png",
        "/Home/ethiopian-airlines.png",
        
      ],
    },
    {
      name: "TRANSPORTATION",
      industrysLogo: [
        "/Home/ethiopian-airlines.png",
        "/Home/mastercard.png",
        "/Home/safaricom.png",
      ],
    },
    {
      name: "FINANCE",
      industrysLogo: ["/Home/mastercard.png", "/Home/ethiopian-lottery.png" ],
    },
    {
      name: "NON- PROFIT",
      industrysLogo: ["/Home/mastercard.png","/Home/unilever.png"],
    },
    {
      name: "TELECOM",
      industrysLogo: ["/Home/safaricom.png", "/Home/unilever.png"],
    },
  ];

  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    timeoutRefs.current.forEach((timeout) => clearTimeout(timeout));
    timeoutRefs.current = [];

    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setHoveredIndex(index);
      setIsAnimating(false);
    }, 50);
    timeoutRefs.current.push(timeout);
  };

  const handleMouseLeave = () => {
    timeoutRefs.current.forEach((timeout) => clearTimeout(timeout));
    timeoutRefs.current = [];

    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setHoveredIndex(null);
      setIsAnimating(false);
    }, 100);
    timeoutRefs.current.push(timeout);
  };

  return (
    <section
      style={{
        padding:
          "var(--section-margin-y, 120px) var(--section-margin-x, 120px)",

        background: "#F7F7F8",
      }}
    >
      <div
        className="max-w-[1440px] mx-auto "
        style={{
          display: "flex",
          gap: "var(--space-xxl, 64px)",
        }}
      >
        {/* Left Column - Title and Description */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "var(--space-xxl, 120px)",
            flex: "1 0 0",
          }}
        >
          {/* Title */}
          <h2
            style={{
              fontSize: "clamp(3rem, 8vw, var(--h2-size))",
              fontFamily: "var(--font-primary)",
              lineHeight: "var(--h2-line)",
              fontWeight: "400",
              color: "#4A4A5A",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
            }}
          >
            INDUSTRIES
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-secondary, Outfit)",
              fontSize: "var(--body-large-size, 20px)",
              lineHeight: "var(--body-large-line-height, 150%)",
              fontWeight: "300",
              color: "#4A4A5A",
            }}
          >
            We work across diverse industries, bringing tailored strategies and
            creative solutions that deliver real impact. From telecom and
            finance to fashion, film, real estate, and technology, our
            experience allows us to understand unique challenges and design
            approaches that help each sector thrive.
          </p>
        </div>

        {/* Right Column - Industries List */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            flex: "1 0 0",
            alignSelf: "stretch",
            minWidth: 0,
          }}
        >
          {industriesList.map((industry, index) => (
            <div
              key={industry.name}
              style={{ width: "100%" }}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <div
                style={{
                  padding: "var(--space-lg, 32px) 0",
                  borderBottom:
                    index < industriesList.length - 1
                      ? "1px solid rgba(74, 74, 90, 0.2)"
                      : "none",
                  backgroundColor: isHovered(index) ? "black" : "transparent",
                  transition: "background-color 0.3s ease",
                  cursor: "grab"
                }}
              >
                {!isHovered(index) && (
                  <h3
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontSize: "var(--h3-size, 48px)",
                      lineHeight: "var(--h3-line, 110%)",
                      fontWeight: "400",
                      color: "#4A4A5A",
                      textTransform: "uppercase",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {industry.name}
                  </h3>
                )}

                {isHovered(index) && (
                  <div
                    style={{
                      width: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <Marquee speed={100} gradient={false} loop={0} autoFill={true}>
                      <div
                        className="flex gap-10 items-center"
                        style={{
                          minWidth: "100%",
                          height: "80%",
                        }}
                      >
                        {industry.industrysLogo.map((logo, logoIndex) => (
                          <Image
                            key={logoIndex}
                            src={logo}
                            alt={`${industry.name} logo`}
                            width={50}
                            height={50}
                            className="object-contain w-16 h-16"
                          />
                        ))}
                      </div>
                    </Marquee>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
