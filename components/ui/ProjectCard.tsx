"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

interface ProjectCardProps {
  title: string;
  tags: string[];
  videoSrc?: string; // Optional - for direct video files (.mp4, etc.)
  imageSrc?: string; // Optional - for images
  href: string;
  dark: boolean;
  className?: string; // <- only customizable sizing
}

// Helper function to check if URL is a YouTube link
function isYouTubeUrl(url: string): boolean {
  return /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/.test(
    url,
  );
}

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/,
  );
  return match ? match[1] : null;
}

function getYouTubeEmbedUrl(videoId: string): string {
  return (
    `https://www.youtube.com/embed/${videoId}?` +
    `autoplay=1` +
    `&mute=1` +
    `&loop=1` +
    `&playlist=${videoId}` +
    `&controls=0` +
    `&modestbranding=1` +
    `&rel=0` +
    `&iv_load_policy=3` +
    `&fs=0` +
    `&disablekb=1` +
    `&playsinline=1` +
    `&vq=hd1080`
  );
}

export default function ProjectCard({
  title,
  tags,
  videoSrc,
  imageSrc,
  href,
  dark,
  className = "",
}: ProjectCardProps) {
  // Determine what media to show
  const mediaType = useMemo(() => {
    if (imageSrc) return "image";
    if (videoSrc) {
      if (isYouTubeUrl(videoSrc)) return "youtube";
      return "video";
    }
    return "none";
  }, [videoSrc, imageSrc]);

  const youtubeVideoId = useMemo(() => {
    if (videoSrc && isYouTubeUrl(videoSrc)) {
      return getYouTubeVideoId(videoSrc);
    }
    return null;
  }, [videoSrc]);

  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  useEffect(() => {
    if (mediaType === "youtube") {
      const timer = setTimeout(() => {
        setIsIframeLoaded(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [mediaType]);

  return (
    <Link
      href={href}
      className={`
        block rounded-2xl overflow-hidden
        transition-all duration-300
        ${className}
      `}
      style={{
        background: dark ? "#2C2C34" : "white",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* TOP CONTENT */}
      <div className="flex items-start  justify-between p-6 md:p-8">
        <div className="flex flex-col gap-2">
          <h2
            className="tracking-wide"
            style={{
              fontFamily: "var(--font-primary)",
              color: dark ? "#FFFFFF" : "#0C0C0E",
              fontSize: "var(--h4-size)",
              lineHeight: "var(--h4-line)",
              lineClamp: 2,
            }}
          >
            {title}
          </h2>

          <div
            className="flex flex-wrap gap-y-0 gap-2 "
            style={{
              fontFamily: "var(--font-secondary)",
              color: dark ? "#FFFFFF" : "#0C0C0E",
              fontSize: "var(--body-medium-size)",
              opacity: 0.8,
            }}
          >
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="flex uppercase text-[12px] items-center gap-2"
              >
                {tag}
                {index < tags.length + 1 && (
                  <span>
                    <Image
                      src={dark ? "/Icons/dot.svg" : "/Icons/black-dot.svg"}
                      alt="Separator"
                      width={8}
                      height={8}
                    />
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow (SVG, no dependencies) */}
        <Image
          src={dark ? "/Icons/arrow.svg" : "/Icons/dark-arrow.svg"}
          alt="Arrow"
          width={20}
          height={20}
          className="transition-colors h-5 w-5 md:h-6 md:w-6  "
          style={{ color: "#FFFFFF" }}
        />
      </div>

      {/* MEDIA SECTION — auto expands to fit height you give */}
      <div
        className="relative aspect-video overflow-hidden rounded-b-2xl"
        style={{ background: "#1A1A20" }}
      >
        {mediaType === "image" && imageSrc && (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        {mediaType === "video" && videoSrc && (
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
        )}
        {mediaType === "youtube" && youtubeVideoId && (
          <div className="w-full h-full  relative">
            {!isIframeLoaded && (
              <img
                src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
                alt={title}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setIsIframeLoaded(true)}
              />
            )}
            <iframe
              src={getYouTubeEmbedUrl(youtubeVideoId)}
              className={`absolute inset-0 w-full h-full     ${isIframeLoaded ? "opacity-100" : "opacity-0"}
          `}
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ border: "none" }}
              title={title}
              loading="lazy"              
            />
          </div>
        )}

        {mediaType === "none" && (
          <div className="w-full h-full flex items-center justify-center bg-[var(--spotlight-800)]">
            <span
              className="text-[var(--spotlight-400)]"
              style={{
                fontFamily: "var(--font-secondary)",
                fontSize: "var(--body-medium-size)",
              }}
            >
              No media available
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
