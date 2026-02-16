import { defineType, defineField } from "sanity";

export const awards = defineType({
  name: "awards",
  type: "document",
  title: "Awards",
  description:
    "⚠️ Please keep only 6 awards. Extra awards will not appear on the website.",

  fields: [
    defineField({
      name: "organization",
      type: "string",
      title: "Organization",
    }),

    defineField({
      name: "award",
      type: "string",
      title: "Award",
    }),

    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
