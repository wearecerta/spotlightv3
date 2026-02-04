"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface HeroProps {
  videoId?: string;
}

export default function Hero({ videoId = "ZUL8AK9GzRA" }: HeroProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      // Wait 2 seconds after iframe is loaded
      const timer = setTimeout(() => {
        setVideoLoaded(true);
      }, 2000);

      return () => clearTimeout(timer);
    };

    iframe.addEventListener("load", handleLoad);

    return () => {
      iframe.removeEventListener("load", handleLoad);
    };
  }, []);

  const getEmbedUrl = (id: string) =>
    `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0&iv_load_policy=3&fs=0&disablekb=1&playsinline=1&vq=hd1080`;

  return (
    <section className="relative w-full h-screen -mt-20 md:-mt-26 lg:-mt-26 overflow-hidden z-0 bg-(--spotlight-950)">


      {/* gradient overlay */}
{/* gradient overlay */}
{/* bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] to-[#0C0C0E00]/1 z-10" />


      {/* Thumbnail */}
      {!videoLoaded && (
        <Image
          src="/Home/tumbnail.webp"
          alt="Hero background"
          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500"
          width={1920}
          height={1080}
          quality={80}
          fetchPriority="high"
        />
      )}

      {/* YouTube iframe */}
      <iframe
        ref={iframeRef}
        src={getEmbedUrl(videoId)}
        title="Hero background video"
        allow="autoplay; encrypted-media"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  min-w-[100vw] min-h-[100vh]
          w-[177.77vh] h-[56.25vw] transition-opacity duration-700 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        style={{ border: "none", pointerEvents:"none" }}
      />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          className="text-white font-medium leading-(--h1-line) text-[5.75rem] md:text-[12rem]"
          style={{
            fontFamily: "var(--font-primary)",
            mixBlendMode: "overlay",
            opacity: 0.4,
          }}
        >
          SHINE BRIGHT
        </h1>
      </div>
    </section>
  );
}
