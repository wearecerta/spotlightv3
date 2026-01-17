import { client } from "@/sanity/lib/client";
import { BLOG_DETAIL_QUERY, BLOG_SEO_QUERY } from "@/sanity/queries/blogQuery";
import Image from "next/image";

import { Metadata } from "next";
import BlogSocialMediaShare from "@/components/ui/BlogSocialMediaShare";

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blogData = await client.fetch(BLOG_SEO_QUERY, { slug });

  if (!blogData) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title:
      blogData?.onPageSeo?.pageTitle ||
      blogData?.title ||
      "Spotlight | Ethiopia",
    description: blogData?.excerpt,
    openGraph: {
      title: blogData?.title,
      description: blogData?.onPageSeo?.metaDescription || blogData?.excerpt,
      images: [blogData?.mainImage?.asset?.url || ""],
    },
  };
}

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetail({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blogData = await client.fetch(BLOG_DETAIL_QUERY, { slug });

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F7F7F8",
        position: "relative",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          display: "flex",
          padding: "64px var(--section-margin-x, 120px)",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--space-lg, 32px)",
          alignSelf: "stretch",
          background: "#F7F7F8",
          position: "relative",
        }}
        className="flex max-w-[1440px] mx-auto"
      >
        <div className="flex flex-col gap-(--space-xs) ">
          {/* Blog Title */}
          <h3
            style={{
              fontFamily: "var(--font-primary, 'Bebas Neue')",
              fontSize: "var(--h3-size)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "120%",
              textTransform: "uppercase",
              textAlign: "center",
              color: "var(--spotlight-950)",
              maxWidth: "1200px",
            }}
          >
            {blogData.title}
          </h3>

          {/* Author and Date */}
          <p
            style={{
              fontFamily: "var(--font-secondary, 'Outfit')",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "150%",
              textAlign: "center",
              color: "#4F4F4F",
              margin: 0,
            }}
          >
            By {blogData?.author} · {blogData?.publishedDate}
          </p>

          {/* Categories/Tags */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "var(--space-md, 24px)",
            }}
          >
            {blogData?.categories?.map((tag: any, index: number) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-md, 24px)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-secondary, 'Outfit')",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "150%",
                    textTransform: "uppercase",
                    textAlign: "center",
                    color: "#4A4A5A",
                  }}
                >
                  {tag}
                </span>
                {index < blogData.categories.length - 1 && (
                  <span className="w-3 h-3 rounded-full bg-[#B6B7C3]" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="relative md:p-52 w-full md:w-fit aspect-video">
          <Image
            src={blogData.mainImage.asset.url}
            alt={blogData.mainImage.alt || `${blogData.title} image`}
            fill
            className="object-cover rounded-2xl md:rounded-4xl"
            priority
          />
        </div>
      </section>

      {/* Blog Content Section */}
      <section
        style={{
          paddingLeft: "var(--section-margin-x, 120px)",
          paddingRight: "var(--section-margin-x, 120px)",
          paddingBottom: "var(--section-margin-y, 120px)",
          // gap: "var(--space-xl, 48px)",
          alignSelf: "stretch",
          background: "#F7F7F8",
          position: "relative",
        }}
        className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row gap-(--space-xl) md:gap-(--section-margin-x)"
      >
        {/* left side social media share button */}
        <BlogSocialMediaShare
          title={blogData.title}
          excerpt={blogData.excerpt}
        />
        {/* Right Column - Blog Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            maxWidth: "800px",
            gap: "var(--space-lg, 32px)",
          }}
        >
          {blogData?.body?.map((block: any, index: number) => {
            // Create a container for each block
            return (
              <div key={index} style={{ width: "100%" }}>
                {/* Render heading if text exists */}
                {block?.text && (
                  <h3
                    style={{
                      fontFamily: "var(--font-primary, 'Bebas Neue')",
                      fontSize: "var(--h3-size, 48px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "100%",
                      textTransform: "uppercase",
                      color: "#4F4F4F",
                      marginTop: index > 0 ? "var(--space-xl, 48px)" : "0",
                      marginBottom: "var(--space-md, 24px)",
                    }}
                  >
                    {block.text}
                  </h3>
                )}

                {/* Render paragraphs if paragraphGroup exists */}
                {block?.paragraphGroup?.contentArray?.map(
                  (para: string, paraIndex: number) => (
                    <p
                      key={paraIndex}
                      style={{
                        fontFamily: "var(--font-secondary, 'Outfit')",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "150%",
                        textAlign: "left",
                        color: "#0C0C0E",
                        marginBottom: "16px",
                      }}
                    >
                      {para}
                    </p>
                  )
                )}

                {/* Render ordered lists if they exist */}
                {block?.orderedList?.length > 0 && (
                  <ol
                    className="list-decimal pl-6 space-y-3"
                    style={{
                      marginBottom: "24px",
                      fontFamily: "var(--font-secondary, 'Outfit')",
                    }}
                  >
                    {block.orderedList.map((item: any, itemIndex: number) => (
                      <li key={itemIndex} style={{ marginBottom: "8px" }}>
                        <span style={{ fontWeight: "500" }}>{item.list}</span>
                        {item.listDescription && (
                          <p style={{ margin: "4px 0 0 0", color: "#0C0C0E" }}>
                            {item.listDescription}
                          </p>
                        )}
                      </li>
                    ))}
                  </ol>
                )}

                {/* Render unordered lists if they exist */}
                {block?.unorderedList?.length > 0 && (
                  <ul
                    className="list-disc pl-6 space-y-3"
                    style={{
                      marginBottom: "24px",
                      fontFamily: "var(--font-secondary, 'Outfit')",
                    }}
                  >
                    {block.unorderedList.map((item: any, itemIndex: number) => (
                      <li key={itemIndex} style={{ marginBottom: "8px" }}>
                        <span style={{ fontWeight: "500" }}>{item.list}</span>
                        {item.listDescription && (
                          <p style={{ margin: "4px 0 0 0", color: "#0C0C0E" }}>
                            {item.listDescription}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>{" "}
      </section>
    </main>
  );
}
