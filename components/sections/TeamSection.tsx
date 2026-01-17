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
    position: string;
    name: string
  }>;
}



// Individual Photo Card Component with Hover Effect (same as Leadership)
function TeamPhotoCard({
  imageSrc,
  imageHoverSrc,
  alt,
  priority = false,
  name,
  position,
}: {
  imageSrc: string;
  imageHoverSrc?: string;
  alt: string;
  priority?: boolean;
  name: string;
  position: string;
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
        <img
          src={imageSrc}
          alt={alt}
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
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
          <img
            src={imageHoverSrc}
            alt={`${alt} - Hover`}
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
            fontSize: 'clamp(10px, 2vw, 28px)',
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

export default function TeamSection({
  titleSvgSrc,
  groupPhoto,
  individualPhotos,
  
}: TeamSectionProps) {
  return (
    <section
      style={{
        display: "flex",
        // padding:
        //   "var(--section-margin-y, 120px) var(--section-margin-y, 120px)",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"center",
        gap: "var(--space-xxl, 64px)",
        alignSelf: "stretch",
        background: "var(--spotlight-950, #0C0C0E)",
        position: "relative",
      }}
      className="p-6 md:p-(--space-xxl) lg:p-(--section-margin-y)"
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
        <img
          src={titleSvgSrc}
          alt="Team Title"
          width={1620}
          height={240}
          className="
      absolute
      top-[1%]
      md:top-[10%]
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
          <img
            src={groupPhoto}
            alt={`Group Photo`}
            
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
      {individualPhotos?.length > 0 && (
        <div
className={`
    grid place-items-center grid-cols-3 justify-center gap-4
    ${
      individualPhotos.length >= 5
        ? "md:grid-cols-5"
        : individualPhotos.length === 4
        ? "md:grid-cols-4"
        : "md:grid-cols-3"
    }
  `}
          style={{
  
    
            // display: "grid",
            // gridTemplateColumns: `repeat(auto-fit, minmax(150px, 1fr))`,
            // gap: "var(--space-lg, 32px)",
            width: "100%",
            maxWidth: "1400px",
          }}
        >
          {individualPhotos.map((photo, index) => (
            <TeamPhotoCard
  key={index}
  imageSrc={photo.src}
  imageHoverSrc={photo.hoverSrc}
  alt={photo.alt}
  priority={index < 3}
  name={photo.name}
  position={photo.position}
/>

          ))}
        </div>
      )}
    </section>
  );
}
