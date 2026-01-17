"use client";

import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  tags: string[];
  imageSrc: string;
  href: string;
  className?: string;
}

export default function BlogCard({
  title,
  excerpt,
  author,
  date,
  tags,
  imageSrc,
  href,
  className = "",
}: BlogCardProps) {
  return (
    <Link
      href={href}
      className={`
        block rounded-3xl overflow-hidden
        transition-all duration-300 
        ${className}
      `}
      style={{
        background: '#FFFFFF',
      }}
    >
      {/* Image Section */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-3xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8">
        {/* Author and Date */}
        <div
          style={{
            fontFamily: "var(--font-secondary, Outfit)",
            fontSize: "14px",
            color: "#4A4A5A",
            marginBottom: "var(--space-md, 24px)",
          }}
        >
          By {author} · {date}
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-primary, 'Bebas Neue')",
            fontSize: "var(--h4-size, 40px)",
            fontWeight: "400",
            lineHeight: "110%",
            color: "#0C0C0E",
            textTransform: "uppercase",
            marginBottom: "var(--space-md, 24px)",
          }}
          className="line-clamp-2"
        >
          {title}
        </h3>

        {/* Excerpt */}
        <p
          style={{
            fontFamily: "var(--font-secondary, Outfit)",
            fontSize: "var(--body-large-size, 20px)",
            fontWeight: "400",
            lineHeight: "150%",
            color: "#4A4A5A",
            marginBottom: "var(--space-lg, 32px)",
          }}
          className="line-clamp-2"
        >
          {excerpt}
        </p>

        {/* Tags and Arrow */}
        <div className="flex items-center justify-between">
           <div
                      className="flex flex-wrap gap-y-0 gap-2 "
                      style={{
                        fontFamily: "var(--font-secondary)",
                        color:  "#0C0C0E",
                        fontSize: "var(--body-medium-size)",
                      }}
                    >
                      {tags.map((tag, index) => (
                        <span key={index} className="flex uppercase text-[12px] items-center gap-2">
                          {tag}
                          {index < tags.length + 1 && (
                            <span>
                              <Image
                                src={"/Icons/black-dot.svg"}
                                alt="Separator"
                                width={8}
                                height={8}
                              />
                            </span>
                          )}
                        </span>
                      ))}
                    </div>

          {/* Arrow Icon */}
          <Image
                   src={"/Icons/dark-arrow.svg"}
                   alt="Arrow"
                   width={20}
                   height={20}
                   className="transition-colors h-5 w-5 md:h-6 md:w-6  "
                   style={{ color: "#FFFFFF" }}
                 />
        </div>
      </div>
    </Link>
  );
}

