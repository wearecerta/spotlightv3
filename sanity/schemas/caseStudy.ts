export const caseStudy = {
  name: "caseStudy",
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
      name: "campaign",
      type: "string",
      title: "Campaign",
      description: 'example "#1moveaway"',
    },
     {
      name: "heroVideo",
      type: "string",
      title: "Hero section video url",
    },
    {
      name: "service",
      type: "reference",
      title: "Service",
      to:[{type:"service"}]
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
      description:"three images one landscape and two portrait ",
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
        name:"impactsImage",
        title:"Impacts section Image",
        type:"image",
        description:"Portrait image",
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
      name: "keyHighlights",
      title: "Key Highlights",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "projectAchievements",
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
