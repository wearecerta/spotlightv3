"use client";
import Image from "next/image";
import { useState } from "react";

interface TeamMemberCardProps {
  name: string;
  position: string;
  imageSrc: string;
  imageHoverSrc: string;
}

export function TeamMemberCard({
  name,
  position,
  imageSrc,
  imageHoverSrc,
}: TeamMemberCardProps) {
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
        <img
          src={imageSrc}
          alt={name}
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
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
          <img
            src={imageHoverSrc}
            alt={`${name} - ${position}`}
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
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
    </div>  );
}
