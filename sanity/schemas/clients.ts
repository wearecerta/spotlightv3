export const clients = {
  name: "client",
  type: "document",
  title: "Clients",
  fields: [
    {
      name: "client-name",
      type: "string",
      title: "Name of the client",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "logo",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "alt Text (optional)",
          type: "string",
          description: "Alt text for SEO and accessibility.",
        },
      ],
    },
    {
      name: "industry",
      title: "Industry",
      type: "reference",
      to: [{ type: "industries" }],
    },
  ],
};
