import ProjectCard from "@/components/ui/ProjectCard";
// import { works } from "@/data/work";
import { CASE_STUDIES } from "@/sanity/queries/caseStudyQuery";
import { client } from "@/sanity/lib/client";
import FilteredWorks from "@/components/sections/FilterdWorks";

export default async function Work() {
  const works = await client.fetch(CASE_STUDIES);

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
        {/* <div className="flex flex-wrap gap-y-2 items-center gap-4">
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
                >
                  {filter}
                </button>

                {index < 4 && (
                  <span className="w-2 h-2 rounded-full bg-[#B6B7C3]" />
                )}
              </div>
            )
          )}
        </div> */}

        {/* ================= GRID ================= */}
        {/* <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
            auto-rows-auto
            [grid-auto-flow:dense]
          "
        >
          {works.map((work: any, index: number) => (
            <div key={index} className={index === 0 ? "md:col-span-2" : ""}>
              <ProjectCard
                dark={false}
                className="w-full"
                title={work?.title}
                tags={work?.service.map((s: any) => s.title)}
                videoSrc={work?.heroVideo}
                href={"works/" + work?.slug.current}
              />
            </div>
          ))}
        </div> */}

         {/* Filters + Grid */}
        <FilteredWorks works={works} />
      </section>
    </main>
  );
}
