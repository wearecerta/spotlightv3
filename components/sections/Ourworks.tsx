import Link from "next/link";
import Buttons from "../ui/Buttons";
import ProjectCard from "../ui/ProjectCard";
// import { works } from "@/data/work";
import { CASE_STUDIES } from "@/sanity/queries/caseStudyQuery";
import { client } from "@/sanity/lib/client";

export default async function Ourworks() {
  const data = await client.fetch(CASE_STUDIES, {}, { next: { revalidate: 60 } });
  const works = data?.slice(0, 5)??[];

  return (
    <section className="w-full bg-(--spotlight-950) min-h-screen py-(--space-xxl) px-(--section-margin-x) md:px-(--space-xxl) lg:py-(--space-xxl) lg:px-(--section-margin-x)">
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
          title={works[0]?.title}
          tags={works[0]?.service.map((s: any) => s.title)}
          videoSrc={works[0]?.heroVideo}
          imageSrc={works[0]?.heroImage?.asset?.url}
          href={"works/" + works[0]?.slug?.current}
          dark
        />

        {/* Remaining cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works?.slice(1).map((work: any, index: number) => (
            <ProjectCard
              key={index}
              className="w-full"
              title={work?.title}
              tags={work?.service.map((s: any) => s.title)}
              videoSrc={work?.heroVideo}
              imageSrc={work?.heroImage?.asset?.url}
              href={"/works/" + work?.slug.current}
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
