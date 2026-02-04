"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";

interface WorkCardProps {
  title: string;
  tags: string[];
  videoSrc?: string; 
  imageSrc?: string; // Optional - for images
  href: string;
  className?: string;
}

// Helper function to check if URL is a YouTube link
function isYouTubeUrl(url: string): boolean {
  return /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/.test(url);
}

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  return match ? match[1] : null;
}

// Helper function to get YouTube embed URL with autoplay
function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0`;
}

export default function WorkCard({
  title,
  tags,
  videoSrc,
  imageSrc,
  href,
  className = "",
}: WorkCardProps) {
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

  return (
    <Link
      href={href}
      className={`
        block rounded-3xl overflow-hidden
        transition-all duration-300 hover:shadow-lg
        ${className}
      `}
      style={{
        background: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* TOP CONTENT */}
      <div className="flex items-start justify-between p-6 md:p-8">
        <div className="flex flex-col gap-2 " >
          <h2
            className="tracking-wide"
            style={{
              fontFamily: "var(--font-primary)",
              color: "var(--spotlight-950)",
              fontSize: "var(--h4-size)",
            }}
          >
            {title}
          </h2>

          <div
            className="flex flex-wrap items-center gap-3 mt-1"
            style={{
              fontFamily: "var(--font-secondary)",
              color: "var(--spotlight-950)",
              fontSize: "var(--body-medium-size)",
              fontWeight:"400"
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

        {/* Arrow  */}
        <Image src={'/Icons/dark-arrow.svg'} width={32} height={32} alt="arrow"/>
      </div>

      {/* MEDIA SECTION — auto expands to fit height you give */}
      <div className="relative w-full aspect-video overflow-hidden rounded-2xl" style={{ background: '#F7F7F8' }}>
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
          <iframe
            src={getYouTubeEmbedUrl(youtubeVideoId)}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ border: 'none', pointerEvents:"none" }}
            title={title}

          />
        )}

        {mediaType === "none" && (
          <div className="w-full h-full flex items-center justify-center bg-[#F7F7F8]">
            <span
              style={{
                fontFamily: "var(--font-secondary)",
                fontSize: "var(--body-medium-size)",
                color: "#4A4A5A",
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

