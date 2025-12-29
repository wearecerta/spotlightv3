"use client";

import Image from "next/image";

interface CultureCardProps {
  imageSrc: string;
  label: string;
  rotation?: number; // Optional rotation in degrees (e.g., -15, 5, 15)
  className?: string;
  width?: number;
  height?: number;
  labelPosition?: "left" | "right"; // Position of label at bottom
}

export default function CultureCard({
  imageSrc,
  label,
  rotation = 0,
  className = "",
  width = 400,
  height = 500,
  labelPosition = "right",
}: CultureCardProps) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
        transform: rotation !== 0 ? `rotate(${rotation}deg)` : "none",
        transition: "transform 0.3s ease",
      }}
    >
      {/* Polaroid Frame */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          background: "#FFFFFF",
          borderRadius: "4px",
          padding: "16px 16px 60px 16px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {/* Image Container */}
        <div
          style={{
            position: "relative",
            width: "100%",
            flex: 1,
            overflow: "hidden",
            borderRadius: "2px",
            background: "#F7F7F8",
            minHeight: 0,
          }}
        >
          <Image
            src={imageSrc}
            alt={label}
            fill
            className="object-cover"
            sizes={`${width}px`}
          />
        </div>

        {/* Label at Bottom - Handwritten Style */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: labelPosition === "left" ? "20px" : "auto",
            right: labelPosition === "right" ? "20px" : "auto",
            textAlign: labelPosition === "left" ? "left" : "right",
            pointerEvents: "none",
          }}
        >
          <p
            style={{
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', 'Comic Sans MS', cursive, sans-serif",
              fontSize: "28px",
              fontStyle: "italic",
              fontWeight: "400",
              color: "#0C0C0E",
              margin: 0,
              letterSpacing: "1px",
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

