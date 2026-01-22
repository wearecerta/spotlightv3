"use client";

import { useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";

interface FilteredWorksProps {
  works: any[];
}

export default function FilteredWorks({ works }: FilteredWorksProps) {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filters = ["ALL", "ADVERTISING", "EVENT MANAGEMENT", "BRANDING", "MARKETING",];

  const filteredWorks =
    activeFilter === "ALL"
      ? works
      : works.filter((work) =>
          work.service?.some(
            (s: any) => s.title.toUpperCase() === activeFilter
          )
        );

  return (
    <div className="flex flex-col gap-8">
      {/* Filters */}
      <div className="flex flex-wrap gap-y-2 items-center gap-4">
        {filters.map((filter, index) => (
          <div key={filter} className="flex items-center gap-4">
            <button
              onClick={() => setActiveFilter(filter)}
              className={`uppercase transition-colors duration-300 ${
                activeFilter === filter ? "text-black" : "text-[#B6B7C3]"
              }`}
              style={{
                fontFamily: 'var(--font-primary, "Bebas Neue")',
                fontSize: "24px",
              }}
            >
              {filter}
            </button>
            {index < filters.length - 1 && (
              <span className="w-2 h-2 rounded-full bg-[#B6B7C3]" />
            )}
          </div>
        ))}
      </div>

      {/* Grid */}
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
        {filteredWorks.map((work: any, index: number) => (
          <div key={index} className={index === 0 ? "md:col-span-2" : ""}>
            <ProjectCard
              dark={false}
              className="w-full"
              title={work?.title}
              tags={work?.service.map((s: any) => s.title)}
              videoSrc={work?.heroVideo}
              href={"works/" + work?.slug.current}
              imageSrc={work?.heroImage?.asset?.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
