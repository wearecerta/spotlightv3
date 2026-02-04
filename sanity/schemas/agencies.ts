import { defineType, defineField } from "sanity";

export const agencies = defineType({
  name: "agencies",
  type: "document",
  title: "Agencies",
  fields: [
    defineField({
      name: "agencyName",
      type: "string",
      title: "Agency Name",
    }),
     defineField({
      name: "websiteLink",
      type: "string",
      title: "Website Link",
    }),
    defineField({
      name: "agencyLogo",
      type: "image",
      title: "Agency Logo",
    }),
  ],
});
