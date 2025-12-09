"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Leadership from "@/components/sections/Leadership";

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
        {/* Background "ABOUT US" SVG */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '26%',
            zIndex: 0,
            overflow: 'hidden',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1200"
            height="178"
            viewBox="0 0 1200 178"
            fill="none"
            style={{
              width: 'clamp(800px, 60vw, 1200px)',
              height: 'auto',
              opacity: 0.3,
              userSelect: 'none',
              pointerEvents: 'none',
            }}
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M1131.78 176.701C1117.48 176.701 1105.02 174.532 1094.41 170.192C1083.97 165.853 1074.4 159.023 1065.73 149.702L1092.97 122.22C1098.91 128.488 1105.26 133.309 1112.01 136.684C1118.76 139.898 1126.39 141.506 1134.91 141.506C1142.14 141.506 1147.69 140.3 1151.55 137.89C1155.56 135.318 1157.57 131.863 1157.57 127.524C1157.57 123.506 1156.13 120.211 1153.23 117.64C1150.34 114.908 1146.48 112.578 1141.66 110.649C1137 108.56 1131.78 106.631 1125.99 104.864C1120.37 102.935 1114.66 100.685 1108.88 98.1137C1103.25 95.3816 1098.03 92.0871 1093.21 88.23C1088.55 84.373 1084.77 79.5517 1081.88 73.7661C1078.99 67.9805 1077.54 60.8289 1077.54 52.3113C1077.54 41.3829 1080.11 32.0617 1085.25 24.3476C1090.56 16.6335 1097.87 10.6872 1107.19 6.50877C1116.51 2.3303 1127.36 0.24107 1139.73 0.24107C1152.11 0.24107 1163.52 2.3303 1173.96 6.50877C1184.41 10.6872 1193.01 16.4728 1199.76 23.8655L1172.28 51.1059C1167.13 45.9632 1161.91 42.1061 1156.61 39.5348C1151.3 36.9634 1145.52 35.6777 1139.25 35.6777C1133.31 35.6777 1128.64 36.7223 1125.27 38.8116C1121.89 40.9008 1120.21 43.8739 1120.21 47.731C1120.21 51.5881 1121.65 54.7219 1124.55 57.1326C1127.44 59.5432 1131.22 61.7128 1135.88 63.6413C1140.7 65.4091 1145.92 67.2573 1151.55 69.1858C1157.33 71.1144 1163.04 73.3643 1168.66 75.9357C1174.29 78.507 1179.43 81.8016 1184.09 85.8194C1188.91 89.8371 1192.77 94.8995 1195.66 101.007C1198.55 107.114 1200 114.506 1200 123.185C1200 140.22 1193.97 153.398 1181.92 162.719C1170.03 172.041 1153.31 176.701 1131.78 176.701Z" fill="url(#paint0_linear_6404_1039)"/>
            <path d="M979.86 176.701C965.396 176.701 952.62 173.728 941.531 167.782C930.603 161.675 922.085 153.238 915.978 142.47C909.871 131.702 906.818 119.489 906.818 105.828V3.13414H949.727V108.962C949.727 115.069 951.013 120.372 953.584 124.872C956.316 129.211 959.932 132.586 964.432 134.997C969.093 137.247 974.236 138.372 979.86 138.372C985.646 138.372 990.708 137.247 995.048 134.997C999.387 132.586 1002.84 129.211 1005.41 124.872C1007.98 120.533 1009.27 115.31 1009.27 109.203V3.13414H1052.66V106.069C1052.66 119.73 1049.61 131.944 1043.5 142.711C1037.39 153.318 1028.88 161.675 1017.95 167.782C1007.18 173.728 994.485 176.701 979.86 176.701Z" fill="url(#paint1_linear_6404_1039)"/>
            <path d="M753.654 174.05V4.33946H796.805V174.05H753.654ZM701.343 40.2583V3.13414H849.116V40.2583H701.343Z" fill="url(#paint2_linear_6404_1039)"/>
            <path d="M612.376 176.701C597.912 176.701 585.136 173.728 574.047 167.782C563.119 161.675 554.601 153.238 548.494 142.47C542.387 131.702 539.334 119.489 539.334 105.828V3.13414H582.243V108.962C582.243 115.069 583.529 120.372 586.1 124.872C588.832 129.211 592.448 132.586 596.948 134.997C601.609 137.247 606.752 138.372 612.376 138.372C618.162 138.372 623.224 137.247 627.564 134.997C631.903 132.586 635.358 129.211 637.929 124.872C640.501 120.533 641.786 115.31 641.786 109.203V3.13414H685.178V106.069C685.178 119.73 682.125 131.944 676.018 142.711C669.911 153.318 661.393 161.675 650.465 167.782C639.697 173.728 627.001 176.701 612.376 176.701Z" fill="url(#paint3_linear_6404_1039)"/>
            <path d="M429.522 177.183C416.344 177.183 404.211 174.933 393.121 170.433C382.032 165.934 372.31 159.666 363.953 151.63C355.756 143.595 349.328 134.193 344.667 123.426C340.007 112.497 337.676 100.765 337.676 88.23C337.676 75.6946 339.926 64.1235 344.426 53.5166C349.087 42.749 355.515 33.3474 363.711 25.3119C371.908 17.2764 381.55 11.089 392.639 6.74985C403.728 2.24995 415.862 0 429.04 0C442.219 0 454.352 2.24995 465.441 6.74985C476.53 11.089 486.173 17.2764 494.369 25.3119C502.565 33.3474 508.913 42.749 513.413 53.5166C518.074 64.2842 520.404 75.9357 520.404 88.4711C520.404 101.007 518.074 112.658 513.413 123.426C508.913 134.193 502.565 143.675 494.369 151.871C486.173 159.907 476.53 166.175 465.441 170.674C454.513 175.014 442.54 177.183 429.522 177.183ZM429.04 138.613C438.683 138.613 447.04 136.524 454.111 132.345C461.182 128.167 466.647 122.301 470.504 114.747C474.361 107.194 476.289 98.3548 476.289 88.23C476.289 80.8373 475.164 74.0875 472.914 67.9805C470.825 61.8735 467.691 56.6504 463.513 52.3113C459.334 47.8114 454.352 44.3561 448.567 41.9454C442.781 39.5348 436.272 38.3294 429.04 38.3294C419.398 38.3294 411.041 40.4187 403.969 44.5972C396.898 48.6149 391.434 54.4005 387.577 61.9539C383.72 69.5073 381.791 78.266 381.791 88.23C381.791 95.9441 382.836 102.935 384.925 109.203C387.175 115.31 390.389 120.613 394.568 125.113C398.746 129.452 403.728 132.827 409.514 135.238C415.3 137.488 421.808 138.613 429.04 138.613Z" fill="url(#paint4_linear_6404_1039)"/>
            <path d="M223.799 174.05V141.988H259.477C266.227 141.988 271.53 140.14 275.387 136.443C279.405 132.586 281.414 127.604 281.414 121.497C281.414 117.48 280.53 113.944 278.762 110.89C276.995 107.676 274.423 105.266 271.048 103.659C267.834 101.891 263.977 101.007 259.477 101.007H223.799V69.9093H256.825C262.45 69.9093 267.031 68.5433 270.566 65.8112C274.262 62.9184 276.111 58.4989 276.111 52.5526C276.111 46.6063 274.262 42.2671 270.566 39.535C267.031 36.6423 262.45 35.1959 256.825 35.1959H223.799V3.13414H267.191C277.798 3.13414 286.959 5.14302 294.673 9.16079C302.548 13.1785 308.574 18.5623 312.753 25.3122C316.931 32.062 319.02 39.6958 319.02 48.2134C319.02 59.6239 315.083 69.1058 307.208 76.6591C299.494 84.0518 288.244 88.6321 273.459 90.3999V75.936C289.851 77.8645 302.387 83.1679 311.065 91.8463C319.744 100.364 324.083 111.132 324.083 124.149C324.083 133.792 321.672 142.39 316.851 149.943C312.029 157.336 305.199 163.202 296.36 167.541C287.682 171.88 277.396 174.05 265.504 174.05H223.799ZM189.568 174.05V3.13414H231.996V174.05H189.568Z" fill="url(#paint5_linear_6404_1039)"/>
            <path d="M0 174.05L66.293 3.13414H107.997L173.567 174.05H128.488L79.0695 30.3746H94.7388L44.115 174.05H0ZM40.258 144.158V109.926H134.515V144.158H40.258Z" fill="url(#paint6_linear_6404_1039)"/>
            <defs>
              <linearGradient id="paint0_linear_6404_1039" x1="600" y1="0" x2="600" y2="177.183" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A4A5A"/>
                <stop offset="1" stopColor="#0C0C0E"/>
              </linearGradient>
              <linearGradient id="paint1_linear_6404_1039" x1="600" y1="0" x2="600" y2="177.183" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A4A5A"/>
                <stop offset="1" stopColor="#0C0C0E"/>
              </linearGradient>
              <linearGradient id="paint2_linear_6404_1039" x1="600" y1="0" x2="600" y2="177.183" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A4A5A"/>
                <stop offset="1" stopColor="#0C0C0E"/>
              </linearGradient>
              <linearGradient id="paint3_linear_6404_1039" x1="600" y1="0" x2="600" y2="177.183" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A4A5A"/>
                <stop offset="1" stopColor="#0C0C0E"/>
              </linearGradient>
              <linearGradient id="paint4_linear_6404_1039" x1="600" y1="0" x2="600" y2="177.183" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A4A5A"/>
                <stop offset="1" stopColor="#0C0C0E"/>
              </linearGradient>
              <linearGradient id="paint5_linear_6404_1039" x1="600" y1="0" x2="600" y2="177.183" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A4A5A"/>
                <stop offset="1" stopColor="#0C0C0E"/>
              </linearGradient>
              <linearGradient id="paint6_linear_6404_1039" x1="600" y1="0" x2="600" y2="177.183" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A4A5A"/>
                <stop offset="1" stopColor="#0C0C0E"/>
              </linearGradient>
            </defs>
          </svg>
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

      {/* Leadership Team Section */}
      <Leadership />
    </main>
  );
}