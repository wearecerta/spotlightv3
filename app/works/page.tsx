"use client";

import ProjectCard from "@/components/ui/ProjectCard";

type WorkItem = {
  title: string;
  tags: string[];
  videoSrc: string;
  href: string;
  featured?: boolean;
};

const WORKS: WorkItem[] = [
  {
    title: "SAFARICOM ETHIOPIA",
    tags: ["BRANDING", "MARKETING", "PRODUCTION"],
    videoSrc: "https://www.youtube.com/watch?v=c5iitHD0bNg",
    href: "/works/safaricom-ethiopia",
    featured: true,
  },
  {
    title: "ADEY MUSIC AND STUDIO",
    tags: ["BRANDING", "MARKETING", "PRODUCTION"],
    videoSrc: "https://www.youtube.com/watch?v=c5iitHD0bNg",
    href: "/works/adey-music",
  },
  {
    title: "ST. GEORGE",
    tags: ["BRANDING", "MARKETING", "PRODUCTION"],
    videoSrc: "https://www.youtube.com/watch?v=c5iitHD0bNg",
    href: "/works/st-george",
  },
  {
    title: "GRV SUMMIT",
    tags: ["BRANDING", "MARKETING", "PRODUCTION"],
    videoSrc: "https://www.youtube.com/watch?v=c5iitHD0bNg",
    href: "/works/grv-summit",
  },
  {
    title: "EU & AFRICA",
    tags: ["BRANDING", "MARKETING", "PRODUCTION"],
    videoSrc: "https://www.youtube.com/watch?v=c5iitHD0bNg",
    href: "/works/eu-africa",
  },
  {
    title: "ADEY MUSIC AND STUDIO",
    tags: ["BRANDING", "MARKETING", "PRODUCTION"],
    videoSrc: "https://www.youtube.com/watch?v=c5iitHD0bNg",
    href: "/works/adey-music-2",
  },
  {
    title: "ST. GEORGE",
    tags: ["BRANDING", "MARKETING", "PRODUCTION"],
    videoSrc: "https://www.youtube.com/watch?v=c5iitHD0bNg",
    href: "/works/st-george-2",
  },
];

export default function Work() {
  return (
    <main className="min-h-screen bg-[#F7F7F8] mx-auto">
      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-[64px] lg:px-(--section-margin-x) gap-12 max-w-[1440px] mx-auto">
        <h1
          className="text-center uppercase leading-none"
          style={{
            fontFamily: 'var(--font-primary, "Bebas Neue")',
            fontSize: "var(--h2-size)",
          }}
        >
          <span className="text-[#B6B7C3]">WE MAKE </span>
          <span className="text-[#0C0C0E]">STANDING</span>
          <br />
          <span className="text-[#0C0C0E]">OUT </span>
          <span className="text-[#B6B7C3]">SIMPLE</span>
        </h1>
      </section>

      {/* ================= WORKS ================= */}
      <section className="px-6 md:px-[64px] lg:px-[120px] pb-24 flex flex-col gap-12 max-w-[1440px] mx-auto">
        {/* Heading */}
        <h2
          className="uppercase leading-none"
          style={{
            fontFamily: 'var(--font-primary, "Bebas Neue")',
            fontSize: "var(--h2-size)",
            color: "#4A4A5A",
          }}
        >
          WORKS
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-y-2 items-center gap-4">
          {["ALL", "ADVERTISING", "STORYTELLING", "TVC", "MARKETING"].map(
            (filter, index) => (
              <div key={filter} className="flex items-center gap-4">
                <button
                  className="uppercase transition-colors duration-300"
                  style={{
                    fontFamily: 'var(--font-primary, "Bebas Neue")',
                    fontSize: "24px",
                    color: "#B6B7C3",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#4A4A5A")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#B6B7C3")
                  }
                >
                  {filter}
                </button>

                {index < 4 && (
                  <span className="w-2 h-2 rounded-full bg-[#B6B7C3]" />
                )}
              </div>
            )
          )}
        </div>

        {/* ================= GRID ================= */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
            auto-rows-auto
            [grid-auto-flow:dense]
          "
        >
          {WORKS.map((work) => (
            <div
              key={work.href}
              className={work.featured ? "md:col-span-2" : ""}
            >
              <ProjectCard dark={false} {...work} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
