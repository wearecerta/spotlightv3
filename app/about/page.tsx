"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// Interactive Character Component
function InteractiveChar({ 
  char, 
  isActive
}: { 
  char: string;
  isActive: boolean;
}) {
  return (
    <span
      style={{
        color: isActive ? '#F7F7F8' : '#4A4A5A',
        transition: 'color 0.3s ease',
        display: 'inline-block',
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  );
}

// Under Spotlight Interactive Text Component
function UnderSpotlightText() {
  const [currentActiveIndex, setCurrentActiveIndex] = useState(-1);
  const localCharRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      let closestIndex = -1;
      let minDistance = 100;

      localCharRefs.current.forEach((charEl, index) => {
        if (charEl) {
          const rect = charEl.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          const distance = Math.sqrt(
            Math.pow(e.clientX - centerX, 2) +
            Math.pow(e.clientY - centerY, 2)
          );
          
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });

      setCurrentActiveIndex(closestIndex);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <p
      style={{
        fontFamily: 'var(--font-secondary, Outfit)',
        fontSize: 'var(--accent-small-size, 32px)',
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: '120%',
        alignSelf: 'stretch',
        position: 'relative',
        cursor: 'default',
      }}
    >
      {"We don't stop until we put our brands front-and-center. Through deep insights, creative strategy, and spotless execution, we showcase brands as must-see icons and thought leaders that inspire their action."
        .split('')
        .map((char, index) => (
          <span
            key={index}
            ref={(el) => {
              localCharRefs.current[index] = el;
            }}
          >
            <InteractiveChar 
              char={char}
              isActive={index <= currentActiveIndex}
            />
          </span>
        ))}
    </p>
  );
}

// Setting the Stage Interactive Text Component
function SettingStageText() {
  const [currentActiveIndex, setCurrentActiveIndex] = useState(-1);
  const localCharRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      let closestIndex = -1;
      let minDistance = 100;

      localCharRefs.current.forEach((charEl, index) => {
        if (charEl) {
          const rect = charEl.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          const distance = Math.sqrt(
            Math.pow(e.clientX - centerX, 2) +
            Math.pow(e.clientY - centerY, 2)
          );
          
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });

      setCurrentActiveIndex(closestIndex);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <p
      style={{
        fontFamily: 'var(--font-secondary, Outfit)',
        fontSize: '32px',
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: '120%',
        alignSelf: 'stretch',
        position: 'relative',
        cursor: 'default',
      }}
    >
      {"We never follow we always lead. Our teams check egos at the door to create a playground of melding together perspectives, pushing creative boundaries through bold and fresh thinking is in our DNA. While our ideas are revolutionary, our process is swift and precise to bring game-changing campaigns to life."
        .split('')
        .map((char, index) => (
          <span
            key={index}
            ref={(el) => {
              localCharRefs.current[index] = el;
            }}
          >
            <InteractiveChar 
              char={char}
              isActive={index <= currentActiveIndex}
            />
          </span>
        ))}
    </p>
  );
}

export default function About() {
  const [currentActiveIndex, setCurrentActiveIndex] = useState(-1);
  const textRef = useRef<HTMLParagraphElement>(null);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (textRef.current) {
        // Check which character is closest to cursor
        let closestIndex = -1;
        let minDistance = 100; // Proximity threshold

        charRefs.current.forEach((charEl, index) => {
          if (charEl) {
            const rect = charEl.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const distance = Math.sqrt(
              Math.pow(e.clientX - centerX, 2) +
              Math.pow(e.clientY - centerY, 2)
            );
            
            if (distance < minDistance) {
              minDistance = distance;
              closestIndex = index;
            }
          }
        });

        // Update current active index (can go back and forth)
        setCurrentActiveIndex(closestIndex);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <main className='-mt-16 md:-mt-24 lg:-mt-26 overflow-hidden z-0'
      style={{
        minHeight: '100vh',
        background: '#0C0C0E',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          display: 'flex',
          height: '1000px',
          padding: '20px var(--section-margin-x, 120px) 60px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 'var(--space-md, 24px)',
          alignSelf: 'stretch',
          position: 'relative',
        }}
      >
        {/* Background "ABOUT US" Text */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 0,
            overflow: 'hidden',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(120px, 20vw, 400px)',
              fontFamily: 'var(--font-primary, "Bebas Neue")',
              fontWeight: '400',
              lineHeight: '100%',
              textTransform: 'uppercase',
              color: 'rgba(74, 74, 90, 0.3)',
              letterSpacing: '0.02em',
              whiteSpace: 'nowrap',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            ABOUT US
          </h1>
        </div>

        {/* Hero Image */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1400px',
            aspectRatio: '16/9',
            overflow: 'hidden',
            zIndex: 1,
          }}
        >
          <Image
            src="/Aboutus/AboutUsHero.png"
            alt="About Us - Spotlight Team"
            fill
            className="object-cover"
            sizes="(max-width: 1400px) 100vw, 1400px"
            priority
          />
        </div>
      </section>

      {/* Leading the Change Section */}
      <section
        style={{
          display: 'flex',
          padding: 'var(--section-margin-y, 120px) var(--section-margin-x, 120px)',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 'var(--space-lg, 32px)',
          alignSelf: 'stretch',
          background: 'var(--spotlight-950, #0C0C0E)',
        }}
      >
        {/* Main Heading */}
        <h2
          style={{
            color: '#FFF',
            fontFamily: 'var(--font-primary, "Bebas Neue")',
            fontSize: 'var(--h2-size, 148px)',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '100%',
            textTransform: 'uppercase',
            alignSelf: 'stretch',
          }}
        >
          LEADING THE CHANGE
        </h2>

        {/* Description Text with Interactive Hover Effect */}
        <p
          ref={textRef}
          style={{
            fontFamily: 'var(--font-secondary, Outfit)',
            fontSize: 'var(--accent-large-size, 68px)',
            fontStyle: 'normal',
            fontWeight: '300',
            lineHeight: '110%',
            alignSelf: 'stretch',
            position: 'relative',
            cursor: 'default',
          }}
        >
          {"Driving marketing from tired, stale tactics into creatively strategic campaigns that shake up entire industries. No brand is too big or too small our pioneering strategies can exponentially amplify any company's influence and dominance."
            .split('')
            .map((char, index) => (
              <span
                key={index}
                ref={(el) => {
                  charRefs.current[index] = el;
                }}
              >
                <InteractiveChar 
                  char={char}
                  isActive={index <= currentActiveIndex}
                />
              </span>
            ))}
        </p>
      </section>

      {/* Under the Spotlight Section */}
      <section
        style={{
          display: 'flex',
          padding: 'var(--section-margin-y, 120px) var(--section-margin-x, 120px)',
          alignItems: 'center',
          gap: 'var(--space-lg, 32px)',
          alignSelf: 'stretch',
          background: 'var(--spotlight-950, #0C0C0E)',
        }}
      >
        {/* Left Side - Text Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 'var(--space-lg, 32px)',
            flex: '1 0 0',
            alignSelf: 'stretch',
          }}
        >
          {/* Heading */}
          <h2
            style={{
              color: '#FFF',
              fontFamily: 'var(--font-primary, "Bebas Neue")',
              fontSize: 'var(--h3-size, 56px)',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '100%',
              textTransform: 'uppercase',
              alignSelf: 'stretch',
            }}
          >
            UNDER THE <br/>SPOTLIGHT
          </h2>

          {/* Description with Interactive Hover Effect */}
          <UnderSpotlightText />
        </div>

        {/* Right Side - Image */}
        <div
          style={{
            flex: '1 0 0',
            alignSelf: 'stretch',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/Aboutus/under_spot.png"
            alt="Under the Spotlight"
            width={800}
            height={800}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              mixBlendMode: 'screen',
              opacity: 0.95,
            }}
          />
        </div>
      </section>

      {/* Setting the Stage Section */}
      <section
        style={{
          display: 'flex',
          padding: 'var(--section-margin-y, 120px) var(--section-margin-x, 120px)',
          alignItems: 'center',
          gap: 'var(--space-lg, 32px)',
          alignSelf: 'stretch',
          background: 'var(--spotlight-950, #0C0C0E)',
        }}
      >
        {/* Left Side - Image */}
        <div
          style={{
            flex: '1 0 0',
            alignSelf: 'stretch',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/Aboutus/under_spot_2.png"
            alt="Setting the Stage"
            width={800}
            height={800}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              mixBlendMode: 'screen',
              opacity: 0.95,
            }}
          />
        </div>

        {/* Right Side - Text Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 'var(--space-lg, 32px)',
            flex: '1 0 0',
            alignSelf: 'stretch',
          }}
        >
          {/* Heading */}
          <h2
            style={{
              color: '#FFF',
              fontFamily: 'var(--font-primary, "Bebas Neue")',
              fontSize: 'var(--h3-size, 56px)',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '100%',
              textTransform: 'uppercase',
              alignSelf: 'stretch',
            }}
          >
            SETTING THE STAGE
          </h2>

          {/* Description with Interactive Hover Effect */}
          <SettingStageText />
        </div>
      </section>
    </main>
  );
}