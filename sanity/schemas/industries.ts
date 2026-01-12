import { defineType, defineField } from "sanity";

export const industries = defineType({
  name: "industries",
  type: "document",
  title: "Industries",
  fields: [
    defineField({
      name: "industryName",
      type: "string",
      title: "Industry Name",
    }),
  ],
});
