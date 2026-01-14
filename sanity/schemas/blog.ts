import { defineType, defineField } from "sanity";

export const blog = defineType({
  name: "blogs",
  type: "document",
  title: "Blogs",
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
      description: "A short description for SEO and post listings",
    }),

    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text (ALT)",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "author",
      type: "string",
      title: "Author",
    }),

    defineField({
      name: "publishedDate",
      title: "Published Date",
      type: "date",
      options: {
        dateFormat: "MMMM d, yyyy",
      },
    }),

    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
