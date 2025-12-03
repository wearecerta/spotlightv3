"use client";

import Link from "next/link";

interface ProjectCardProps {
  title: string;
  tags: string[];
  videoSrc: string;
  href: string;
  className?: string; // <- only customizable sizing
}

export default function ProjectCard({
  title,
  tags,
  videoSrc,
  href,
  className = "",
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className={`
        block rounded-2xl overflow-hidden
        bg-(--spotlight-900)
        border border-(--spotlight-800)
        hover:border-(--spotlight-700)
        transition-all duration-300
        ${className}   /* <- YOU CONTROL WIDTH & HEIGHT HERE */
      `}
    >
      {/* TOP CONTENT */}
      <div className="flex items-start justify-between p-6 md:p-8">
        <div>
          <h2
            className="tracking-wide"
            style={{
              fontFamily: "var(--font-primary)",
              color: "var(--spotlight-50)",
              fontSize: "var(--h3-size)",
            }}
          >
            {title}
          </h2>

          <div
            className="flex items-center gap-3 mt-1 text-sm"
            style={{
              fontFamily: "var(--font-secondary)",
              color: "var(--spotlight-300)",
              fontSize: "var(--body-medium-size)",
            }}
          >
            {tags.map((tag, index) => (
              <span key={index} className="flex items-center gap-3">
                {tag}
                {index < tags.length - 1 && <span>•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow (SVG, no dependencies) */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="transition-colors"
          style={{ color: "var(--spotlight-200)" }}
        >
          <path
            d="M7 17L17 7M17 7H9M17 7V15"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hover:stroke-(--spotlight-50) transition-colors"
          />
        </svg>
      </div>

      {/* VIDEO SECTION — auto expands to fit height you give */}
      <div className="relative w-full h-full overflow-hidden rounded-b-2xl">
        <video
          className="w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          onEnded={(e) => {
            const v = e.currentTarget as HTMLVideoElement;
            v.currentTime = 0;
            v.play();
          }}
        />
      </div>
    </Link>
  );
}
