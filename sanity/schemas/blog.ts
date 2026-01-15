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
      of: [
        {
          type: "string",
        },
      ],
    }),

    defineField({
      name: "body",
      title: "Body Content",
      type: "array",
      of: [
        // Heading block
        {
          name: "heading",
          title: "Heading",
          type: "object",
          fields: [
            {
              name: "text",
              title: "Heading Text",
              type: "string",
            },
            {
              name: "paragraphGroup",
              title: "Paragraphs",
              type: "object",
              fields: [
                {
                  name: "contentArray",
                  title: "Paragraphs",
                  type: "array",
                  of: [{ type: "text" }],
                },
              ],
              preview: {
                prepare() {
                  return { title: "Paragraph Block" };
                },
              },
            },
          ],
          preview: {
            select: { title: "text" },
          },
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
