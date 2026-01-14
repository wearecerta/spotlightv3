import Link from "next/link";
import Buttons from "../ui/Buttons";
import ProjectCard from "../ui/ProjectCard";
import { works } from "@/data/work";

// const works = [
//   {
//     title: "SAFARICOM ETHIOPIA",
//     tags: ["BRANDING", "MARKETING", "PRODUCTION"],
//     videoSrc: "https://www.youtube.com/watch?v=c5iitHD0bNg",
//     href: "/works/safaricom-ethiopia",
//   },
//   {
//     title: "ADEY MUSIC AND STUDIO",
//     tags: ["BRANDING", "MARKETING", "PRODUCTION"],
//     videoSrc: "https://www.youtube.com/watch?v=c5iitHD0bNg",
//     href: "/works/adey-music",
//   },
//   {
//     title: "ST. GEORGE",
//     tags: ["BRANDING", "MARKETING", "PRODUCTION"],
//     videoSrc: "https://www.youtube.com/watch?v=c5iitHD0bNg",
//     href: "/works/st-george",
//   },
//   {
//     title: "GRV SUMMIT",
//     tags: ["BRANDING", "MARKETING", "PRODUCTION"],
//     videoSrc: "https://www.youtube.com/watch?v=c5iitHD0bNg",
//     href: "/works/grv-summit",
//   },
//   {
//     title: "EU & AFRICA",
//     tags: ["BRANDING", "MARKETING", "PRODUCTION"],
//     videoSrc: "https://www.youtube.com/watch?v=c5iitHD0bNg",
//     href: "/works/eu-africa",
//   },
//   {
//     title: "ADEY MUSIC AND STUDIO",
//     tags: ["BRANDING", "MARKETING", "PRODUCTION"],
//     videoSrc: "https://www.youtube.com/watch?v=c5iitHD0bNg",
//     href: "/works/adey-music-2",
//   },
//   {
//     title: "ST. GEORGE",
//     tags: ["BRANDING", "MARKETING", "PRODUCTION"],
//     videoSrc: "https://www.youtube.com/watch?v=c5iitHD0bNg",
//     href: "/works/st-george-2",
//   },
// ];


export default function Ourworks() {
  return (
    <section
      className="w-full bg-(--spotlight-950) min-h-screen py-(--space-xxl) px-(--section-margin-x) md:px-(--space-xxl) lg:py-(--space-xxl) lg:px-(--section-margin-x)"
    >
      {/* Title */}
      <h1
        className="text-center mb-[var(--space-xxl)]"
        style={{
          fontSize: "clamp(3.5rem, 10vw, var(--h2-size))",
          fontFamily: "var(--font-primary)",
          lineHeight: "var(--h2-line)",
          display: "inline-block",
          width: "100%",
          background:
            "linear-gradient(180deg, var(--spotlight-50) 0%, var(--spotlight-700) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
        }}
      >
        OUR WORKS
      </h1>

      {/* Project Cards Grid */}
     <div className="w-full max-w-7xl mx-auto space-y-6">
  {/* First card – full width */}
  <ProjectCard
    className="w-full"
    title={works[0].title}
    tags={works[0].tags}
    videoSrc={works[0].videoSrc}
    href={"works/"+works[0].slug}
    dark
  />

  {/* Remaining cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {works.slice(1).map((work, index) => (
      <ProjectCard
        key={index}
        className="w-full"
        title={work.title}
        tags={work.tags}
        videoSrc={work.videoSrc}
        href={"works/"+work.slug}
        dark
      />
    ))}
  </div>
</div>

      <Link href={"/works"}>
        <Buttons>explore now</Buttons>
      </Link>
    </section>
  );
}
