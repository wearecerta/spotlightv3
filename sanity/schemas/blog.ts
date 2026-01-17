import { defineType, defineField } from "sanity";

export const blog = defineType({
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),

    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),

    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "Short description for SEO and blog listings",
    }),

    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),

    defineField({
      name: "publishedDate",
      title: "Published Date",
      type: "date",
    }),

    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "body",
      title: "Body Content",
      type: "array",
      of: [
        {
          name: "headingBlock",
          title: "Heading Block",
          type: "object",
          fields: [
            defineField({
              name: "text",
              title: "Heading Text",
              type: "string",
            }),

            defineField({
              name: "paragraphGroup",
              title: "Paragraphs",
              type: "object",
              fields: [
                defineField({
                  name: "contentArray",
                  title: "Paragraphs",
                  type: "array",
                  of: [{ type: "text" }],
                }),
              ],
              preview: {
                prepare() {
                  return { title: "Paragraph Block" };
                },
              },
            }),

            // ✅ Ordered List
            defineField({
              name: "orderedList",
              title: "Ordered List",
              description: "Numbered list items",
              type: "array",
              of: [
                {
                  name: "listItem",
                  title: "List Item",
                  type: "object",
                  fields: [
                    defineField({
                      name: "list",
                      title: "List Text",
                      type: "string",
                    }),
                    defineField({
                      name: "listDescription",
                      title: "List Description (optional)",
                      type: "text",
                    }),
                  ],
                },
              ],
            }),

            // ✅ Unordered List
            defineField({
              name: "unorderedList",
              title: "Unordered List",
              description: "Bullet point list",
              type: "array",
              of: [
                {
                  name: "listItem",
                  title: "List Item",
                  type: "object",
                  fields: [
                    defineField({
                      name: "list",
                      title: "List Text",
                      type: "string",
                    }),
                    defineField({
                      name: "listDescription",
                      title: "List Description (optional)",
                      type: "text",
                    }),
                  ],
                },
              ],
            }),
          ],
          preview: {
            select: { title: "text" },
          },
        },
      ],
    }),

    defineField({
      name: "onPageSeo",
      title: "On Page SEO",
      type: "object",
      fields: [
        defineField({
          name: "pageTitle",
          title: "Page Title",
          type: "string",
          description: "SEO title (60 characters max)",
        }),
        defineField({
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          rows: 3,
          description: "SEO description (150–160 characters)",
        }),
        defineField({
          name: "targetKeywords",
          title: "Target Keywords",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
      preview: {
        prepare() {
          return { title: "On Page SEO" };
        },
      },
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
