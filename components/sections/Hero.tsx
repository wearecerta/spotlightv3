'use client';
import { getVideoUrl } from "@/sanity/lib/videoUrl";
interface HeroProps {
  videoAsset?: any;
  title?: string;
  subtitle?: string;
}

export default function Hero({ videoAsset, title, subtitle }: HeroProps) {
  const videoUrl = videoAsset ? getVideoUrl(videoAsset) : null;

  return (
    <section className="relative w-full h-screen -mt-20 md:-mt-26 lg:-mt-26 overflow-hidden z-0 bg-(--spotlight-950)">
      {videoUrl && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoUrl}
          autoPlay
          poster="/Home/tumbnail.webp"
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

      {!videoUrl && (
        <div className="absolute inset-0 bg-gray-900"></div>
      )}

      {/* Overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          className="text-white font-medium  leading-(--h1-line) text-[5.75rem] md:text-[12rem]"
          style={{ fontFamily: "var(--font-primary)", 
            mixBlendMode: "overlay",
            opacity: 0.4
            
          }}
        >
          SHINE BRIGHT
        </h1>
      </div>
    </section>
  );
}
