export const blog = {
  name: "blogs",
  type: "document",
  title: "Blogs",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "string",
      title: "Slug",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description: "A short description for SEO and post listings",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",

      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
        },
      ],
    },
    {
      name: "author",
      type: "string",
      title: "Author",
    },
    {
      name: "publishedDate",
      title: "Published Date",
      type: "date",
      options: {
        dateFormat: "MMMM d, yyyy",
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
