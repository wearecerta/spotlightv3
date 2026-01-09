export const caseStudy = {
  name: "case-study",
  type: "document",
  title: "CaseStudy",
  fields: [
    {
      name: "client",
      type: "reference",
      title: "Client",
      to: [{ type: "client" }],
    },
    {
      name: "slug",
      type: "slug",
    },
    {
      name: "tagline",
      type: "string",
      title: "Tag Line",
      description: 'example "#1moveaway"',
    },
     {
      name: "hero-video",
      type: "string",
      title: "Hero section video url",
    },
    {
      name: "service",
      type: "array",
      title: "Service",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "duration",
      type: "string",
      title: "Duration",
    },
    {
      name: "gallery",
      type: "array",
      title: "Gallery",
      of: [
        {
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
      ],
    },
    {
        name:"impacts-image",
        title:"Impacts section Image",
        type:"image",
        option:{
            hotspot:true
        }
    },
    {
      name: "impacts",
      title: "Impacts",
      type: "string",
    },
    {
      name: "key-highlights",
      title: "Key Highlights",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "project-achievements",
      title: "Project Achievements",
      type: "object",
      fields: [
        {
          name: "label",
          title: "label (eg likes, views , shares)",
          type: "string",
        },
        {
          name: "value",
          title: "Value (e.g., 100k ,25k)",
          type: "string",
        },
      ],
    },
  ],
};
