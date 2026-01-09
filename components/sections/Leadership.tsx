"use client";
import Image from "next/image";
import { useState } from "react";

// Team Member Card Component with Hover Effect
function TeamMemberCard({
  name,
  position,
  imageSrc,
  imageHoverSrc,
  priority = false,
}: {
  name: string;
  position: string;
  imageSrc: string;
  imageHoverSrc: string;
  priority?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverImageLoaded, setHoverImageLoaded] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "3/4",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* Default Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: isHovered ? 0 : 1,
          transform: isHovered ? "translateX(-100%)" : "translateX(0)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          priority={priority}
          loading={priority ? undefined : "lazy"}
        />
        {/* Gradient Overlay for Default Image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(12, 12, 14, 0) 0%, var(--color-Spotlight-Color-Spotlight-Black, #0C0C0E) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Hover Image - Only load when hovered */}
      {(isHovered || hoverImageLoaded) && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateX(0)" : "translateX(100%)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <Image
            src={imageHoverSrc}
            alt={`${name} - ${position}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            loading="lazy"
            onLoad={() => setHoverImageLoaded(true)}
          />
          {/* Gradient Overlay for Hover Image */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(12, 12, 14, 0) 0%, var(--color-Spotlight-Color-Spotlight-Black, #0C0C0E) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>
      )}

      {/* Name and Position Overlay - Shows on Hover */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "var(--space-md, 24px)",
          //   background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          zIndex: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3
          style={{
            color: "#FFF",
            fontFamily: 'var(--font-primary, "Bebas Neue")',
            fontSize: "clamp(10px, 1.9vw, 24px)",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "120%",
            textTransform: "uppercase",
            marginBottom: "4px",
          }}
        >
          {name}
        </h3>
        <p
          style={{
            color: "#FFF",
            fontFamily: "var(--font-secondary, Outfit)",
            fontSize: "clamp(10px, 1.2vw, 18px)",
            fontStyle: "normal",
            fontWeight: "300",
            lineHeight: "150%",
            opacity: 0.9,
          }}
        >
          {position}
        </p>
      </div>
    </div>
  );
}

export default function Leadership() {
  // 15 team members with default and hover images
  const teamMembers = [
    {
      id: 1,
      name: "SAMUEL BEKELE",
      position: "Founder",
      imageSrc: "/Aboutus/Leadership/I1.png",
      imageHoverSrc: "/Aboutus/Leadership/I1h.png",
    },
    {
      id: 2,
      name: "selam berhanu",
      position: "CEO",
      imageSrc: "/Aboutus/Leadership/I2.png",
      imageHoverSrc: "/Aboutus/Leadership/I2h.png",
    },
    {
      id: 3,
      name: "ammanuel bizuayehu",
      position: "Chief of Strategy",
      imageSrc: "/Aboutus/Leadership/I3.png",
      imageHoverSrc: "/Aboutus/Leadership/I3h.png",
    },
    {
      id: 4,
      name: "TESFAYE SISAY",
      position: "Head of Culture",
      imageSrc: "/Aboutus/Leadership/I4.png",
      imageHoverSrc: "/Aboutus/Leadership/I4h.png",
    },
    {
      id: 5,
      name: "hamrawi kelemu",
      position: "Chief of Staff",
      imageSrc: "/Aboutus/Leadership/I5.png",
      imageHoverSrc: "/Aboutus/Leadership/I5h.png",
    },
    {
      id: 6,
      name: "ahadu Simegnew",
      position: "Traffic Manager",
      imageSrc: "/Aboutus/Leadership/I6.png",
      imageHoverSrc: "/Aboutus/Leadership/I6h.png",
    },
    {
      id: 7,
      name: "rolina nigussie",
      position: "Chief of Operations",
      imageSrc: "/Aboutus/Leadership/I7.png",
      imageHoverSrc: "/Aboutus/Leadership/I7h.png",
    },
    {
      id: 8,
      name: "Zelalem Temesgen",
      position: "Head of Digital",
      imageSrc: "/Aboutus/Leadership/I8.png",
      imageHoverSrc: "/Aboutus/Leadership/I8h.png",
    },
    {
      id: 9,
      name: "Yanet Aregaw",
      position: "Head of Accounts",
      imageSrc: "/Aboutus/Leadership/I9.png",
      imageHoverSrc: "/Aboutus/Leadership/I9h.png",
    },
    {
      id: 10,
      name: "Endrias Alemseged ",
      position: "Head of Creatives",
      imageSrc: "/Aboutus/Leadership/I10.png",
      imageHoverSrc: "/Aboutus/Leadership/I10h.png",
    },
    {
      id: 11,
      name: "Maranata Tegegn",
      position: "Creative Director",
      imageSrc: "/Aboutus/Leadership/I11.png",
      imageHoverSrc: "/Aboutus/Leadership/I11h.png",
    },
    {
      id: 12,
      name: "eyob atnafu",
      position: "CTO",
      imageSrc: "/Aboutus/Leadership/I12.png",
      imageHoverSrc: "/Aboutus/Leadership/I12h.png",
    },
    {
      id: 13,
      name: "Arsema Eyasu",
      position: "Head of Events",
      imageSrc: "/Aboutus/Leadership/I13.png",
      imageHoverSrc: "/Aboutus/Leadership/I13h.png",
    },
    {
      id: 14,
      name: "Hiwot Webante",
      position: "Head of HR",
      imageSrc: "/Aboutus/Leadership/I14.png",
      imageHoverSrc: "/Aboutus/Leadership/I14h.png",
    },
    {
      id: 15,
      name: "Alem eshetu",
      position: "Head of PR & Media",
      imageSrc: "/Aboutus/Leadership/I15.png",
      imageHoverSrc: "/Aboutus/Leadership/I15h.png",
    },
  ];

  return (
    <section
      style={{
        display: "flex",
        // padding: 'var(--section-margin-y, 120px) var(--section-margin-x, 120px)',
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--space-xxl, 64px)",
        alignSelf: "stretch",
        background: "var(--spotlight-950, #0C0C0E)",
      }}
      className="p-6 md:p-(--space-xxl) lg:p-(--section-margin-y)"
    >
      {/* Title */}
      <h2
        style={{
          fontSize: "clamp(3.5rem, 10vw, var(--h2-size))",
          fontFamily: "var(--font-primary)",
          lineHeight: "var(--h2-line)",
          display: "inline-block",
          width: "100%",
          background:
            "linear-gradient(180deg, var(--spotlight-50) 0%, var(--spotlight-700) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
        }}
      >
        LEADERSHIP TEAM
      </h2>

      {/* Team Grid - 3 rows, 5 columns */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-(--space-lg) w-full max-w-[1400px]">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={member.id}
            name={member.name}
            position={member.position}
            imageSrc={member.imageSrc}
            imageHoverSrc={member.imageHoverSrc}
            priority={index < 5}
          />
        ))}
      </div>
    </section>
  );
}
