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
        position: 'relative',
        width: '100%',
        aspectRatio: '3/4',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      {/* Default Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isHovered ? 0 : 1,
          transform: isHovered ? 'translateX(-100%)' : 'translateX(0)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
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
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(12, 12, 14, 0) 0%, var(--color-Spotlight-Color-Spotlight-Black, #0C0C0E) 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Hover Image - Only load when hovered */}
      {(isHovered || hoverImageLoaded) && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateX(0)' : 'translateX(100%)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
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
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(12, 12, 14, 0) 0%, var(--color-Spotlight-Color-Spotlight-Black, #0C0C0E) 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>
      )}

      {/* Name and Position Overlay - Shows on Hover */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 'var(--space-md, 24px)',
        //   background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          zIndex: 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h3
          style={{
            color: '#FFF',
            fontFamily: 'var(--font-primary, "Bebas Neue")',
            fontSize: 'clamp(20px, 2vw, 28px)',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '120%',
            textTransform: 'uppercase',
            marginBottom: '4px',
          }}
        >
          {name}
        </h3>
        <p
          style={{
            color: '#FFF',
            fontFamily: 'var(--font-secondary, Outfit)',
            fontSize: 'clamp(14px, 1.5vw, 18px)',
            fontStyle: 'normal',
            fontWeight: '300',
            lineHeight: '150%',
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
    { id: 1, name: "SAMUEL BEKELE", position: "Founder", imageSrc: "/Aboutus/Leadership/I1.png", imageHoverSrc: "/Aboutus/Leadership/I1h.png" },
    { id: 2, name: "Team Member 2", position: "Position", imageSrc: "/Aboutus/Leadership/I2.png", imageHoverSrc: "/Aboutus/Leadership/I2h.png" },
    { id: 3, name: "Team Member 3", position: "Position", imageSrc: "/Aboutus/Leadership/I3.png", imageHoverSrc: "/Aboutus/Leadership/I3h.png" },
    { id: 4, name: "Team Member 4", position: "Position", imageSrc: "/Aboutus/Leadership/I4.png", imageHoverSrc: "/Aboutus/Leadership/I4h.png" },
    { id: 5, name: "Team Member 5", position: "Position", imageSrc: "/Aboutus/Leadership/I5.png", imageHoverSrc: "/Aboutus/Leadership/I5h.png" },
    { id: 6, name: "Team Member 6", position: "Position", imageSrc: "/Aboutus/Leadership/I6.png", imageHoverSrc: "/Aboutus/Leadership/I6h.png" },
    { id: 7, name: "Team Member 7", position: "Position", imageSrc: "/Aboutus/Leadership/I7.png", imageHoverSrc: "/Aboutus/Leadership/I7h.png" },
    { id: 8, name: "Team Member 8", position: "Position", imageSrc: "/Aboutus/Leadership/I8.png", imageHoverSrc: "/Aboutus/Leadership/I8h.png" },
    { id: 9, name: "Team Member 9", position: "Position", imageSrc: "/Aboutus/Leadership/I9.png", imageHoverSrc: "/Aboutus/Leadership/I9h.png" },
    { id: 10, name: "Team Member 10", position: "Position", imageSrc: "/Aboutus/Leadership/I10.png", imageHoverSrc: "/Aboutus/Leadership/I10h.png" },
    { id: 11, name: "Team Member 11", position: "Position", imageSrc: "/Aboutus/Leadership/I11.png", imageHoverSrc: "/Aboutus/Leadership/I11h.png" },
    { id: 12, name: "Team Member 12", position: "Position", imageSrc: "/Aboutus/Leadership/I12.png", imageHoverSrc: "/Aboutus/Leadership/I12h.png" },
    { id: 13, name: "Team Member 13", position: "Position", imageSrc: "/Aboutus/Leadership/I13.png", imageHoverSrc: "/Aboutus/Leadership/I13h.png" },
    { id: 14, name: "Team Member 14", position: "Position", imageSrc: "/Aboutus/Leadership/I14.png", imageHoverSrc: "/Aboutus/Leadership/I14h.png" },
    { id: 15, name: "Team Member 15", position: "Position", imageSrc: "/Aboutus/Leadership/I15.png", imageHoverSrc: "/Aboutus/Leadership/I15h.png" },
  ];

  return (
    <section
      style={{
        display: 'flex',
        padding: 'var(--section-margin-y, 120px) var(--section-margin-x, 120px)',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-xxl, 64px)',
        alignSelf: 'stretch',
        background: 'var(--spotlight-950, #0C0C0E)',
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontFamily: 'var(--Typograpghy-Heading-H2-font-family, "Bebas Neue")',
          fontSize: 'var(--Typograpghy-Heading-H2-font-Size, 148px)',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center',
          textTransform: 'uppercase',
          background: 'linear-gradient(180deg, rgba(182, 183, 195, 1) 0%, rgba(255, 255, 255, 1) 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
        }}
      >
        LEADERSHIP TEAM
      </h2>

      {/* Team Grid - 3 rows, 5 columns */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 'var(--space-lg, 32px)',
          width: '100%',
          maxWidth: '1400px',
        }}
      >
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
