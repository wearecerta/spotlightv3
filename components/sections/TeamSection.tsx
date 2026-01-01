"use client";
import Image from "next/image";
import { useState } from "react";

interface TeamSectionProps {
  titleSvgSrc: string;
  groupPhoto: string;
  individualPhotos: Array<{
    src: string;
    hoverSrc?: string;
    alt: string;
  }>;
}

// Individual Photo Card Component with Hover Effect (same as Leadership)
function TeamPhotoCard({
  imageSrc,
  imageHoverSrc,
  alt,
  priority = false,
}: {
  imageSrc: string;
  imageHoverSrc?: string;
  alt: string;
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
        cursor: imageHoverSrc ? "pointer" : "default",
      }}
    >
      {/* Default Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: isHovered && imageHoverSrc ? 0 : 1,
          transform:
            isHovered && imageHoverSrc ? "translateX(-100%)" : "translateX(0)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          priority={priority}
          loading={priority ? undefined : "lazy"}
          style={{
            filter: "grayscale(100%)",
            transition: "filter 0.3s ease",
          }}
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
      {imageHoverSrc && (isHovered || hoverImageLoaded) && (
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
            alt={`${alt} - Hover`}
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
    </div>
  );
}

export default function TeamSection({
  titleSvgSrc,
  groupPhoto,
  individualPhotos,
}: TeamSectionProps) {
  return (
    <section
      style={{
        display: "flex",
        padding:
          "var(--section-margin-y, 120px) var(--section-margin-y, 120px)",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--space-xxl, 64px)",
        alignSelf: "stretch",
        background: "var(--spotlight-950, #0C0C0E)",
        position: "relative",
      }}
    >
      {/* Title and Group Photo Container */}
      <div
        style={{
          // position: 'sticky',
          // top: '20px',
          zIndex: 10,
          width: "100%",
          // maxWidth: '1400px',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Title SVG */}
        <Image
          src={titleSvgSrc}
          alt="Team Title"
          width={1620}
          height={240}
          className="
      absolute
      top-[10%]
      w-[80%]
      h-auto
      select-none
      pointer-events-none
    "
        />

        {/* Group Photo */}
        <div
          style={{
            position: "relative",

            width: "100%",
            aspectRatio: "16/9",
            overflow: "hidden",
            borderRadius: "12px",
            zIndex: 1,
          }}
        >
          <Image
            src={groupPhoto}
            alt={`Group Photo`}
            fill
            className="object-cover"
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
          {/* Gradient Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(12, 12, 14, 0) 0%, rgba(12, 12, 14, 0.6) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* Individual Photos Grid */}
      {individualPhotos.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fit, minmax(150px, 1fr))`,
            gap: "var(--space-lg, 32px)",
            width: "100%",
            maxWidth: "1400px",
            justifyContent: "center",
          }}
        >
          {individualPhotos.map((photo, index) => (
            <TeamPhotoCard
              key={index}
              imageSrc={photo.src}
              imageHoverSrc={photo.hoverSrc}
              alt={photo.alt}
              priority={index < 3}
            />
          ))}
        </div>
      )}
    </section>
  );
}
