import { defineType, defineField } from "sanity";

export const clients = defineType({
  name: "client",
  type: "document",
  title: "Clients",
  fields: [
    defineField({
      name: "clientName",
      type: "string",
      title: "Name of the client",
    }),

    defineField({
      name: "description",
      type: "string",
      title: "Description",
    }),

    defineField({
      name: "logo",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Alt text for SEO and accessibility.",
        }),
      ],
    }),

    defineField({
      name: "industry",
      title: "Industry",
      type: "reference",
      to: [{ type: "industries" }],
    }),
  ],
});
