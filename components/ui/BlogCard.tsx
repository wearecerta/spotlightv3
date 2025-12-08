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
        transition-all duration-300 hover:shadow-lg
        ${className}
      `}
      style={{
        background: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Image Section */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8">
        {/* Author and Date */}
        <div
          style={{
            fontFamily: "var(--font-secondary, Outfit)",
            fontSize: "var(--body-medium-size, 16px)",
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
        >
          {excerpt}
        </p>

        {/* Tags and Arrow */}
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-3"
            style={{
              fontFamily: "var(--font-secondary, Outfit)",
              fontSize: "var(--body-medium-size, 16px)",
              color: "#0C0C0E",
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            {tags.map((tag, index) => (
              <span key={index} className="flex items-center gap-3">
                {tag}
                {index < tags.length - 1 && <span>•</span>}
              </span>
            ))}
          </div>

          {/* Arrow Icon */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            style={{ color: "#0C0C0E" }}
          >
            <path
              d="M8 24L24 8M24 8H12M24 8V20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

