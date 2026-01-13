import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "heroVideo",
      title: "Hero Video",
      type: "file",
      options: { accept: "video/*" },
    }),
  ]
});
