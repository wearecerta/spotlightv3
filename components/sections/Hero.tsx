import { getVideoUrl } from "@/sanity/lib/videoUrl";

interface HeroProps {
  videoAsset?: any;
  title?: string;
  subtitle?: string;
}


// Helper function to get YouTube embed URL with autoplay
function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}?` +
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
    `&vq=hd1080`;
}


export default function Hero({ videoAsset, title, subtitle }: HeroProps) {
  // const videoUrl = videoAsset ? getVideoUrl(videoAsset) : null;
  const youtubeVideoId = "ZUL8AK9GzRA";

  return (
    <section className="relative w-full h-screen -mt-20 md:-mt-26 lg:-mt-26 overflow-hidden z-0 bg-(--spotlight-950)">
     
        <img
          src="/Home/tumbnail.webp"
          alt="Hero background"
          fetchPriority="high"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
   

      {/* {videoUrl && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoUrl}
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
        />
      )} */}

     <iframe
    src={getYouTubeEmbedUrl(youtubeVideoId)}
    title="Hero background video"
    allow="autoplay; encrypted-media"
    loading="eager"
    referrerPolicy="strict-origin-when-cross-origin"
    className="
      absolute
      top-1/2 left-1/2
      min-w-[100vw] min-h-[100vh]
      w-[177.77vh] h-[56.25vw]
      -translate-x-1/2 -translate-y-1/2
    "
    style={{ border: "none" }}
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