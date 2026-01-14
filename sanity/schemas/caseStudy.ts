import { defineType, defineField } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  type: "document",
  title: "Case Study",
  fields: [
    defineField({
      name: "client",
      type: "reference",
      title: "Client",
      to: [{ type: "client" }],
    }),

    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        maxLength: 96,
      },
    }),

    defineField({
      name: "campaign",
      type: "string",
      title: "Campaign",
      description: 'example "#1moveaway"',
    }),

    defineField({
      name: "heroVideo",
      type: "string",
      title: "Hero section video url",
    }),

    defineField({
      name: "service",
      type: "reference",
      title: "Service",
      to: [{ type: "services" }],
    }),   

    defineField({
      name: "duration",
      type: "string",
      title: "Duration",
    }),

    defineField({
      name: "gallery",
      type: "array",
      title: "Gallery",
      description: "three images one landscape and two portrait",
      of: [
        defineField({
          name: "image",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alternative Text (Alt)",
              type: "string",
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "impactsImage",
      title: "Impacts section Image",
      type: "image",
      description: "Portrait image",
      options: { hotspot: true },
    }),

    defineField({
      name: "impacts",
      title: "Impacts",
      type: "string",
    }),

    defineField({
      name: "keyHighlights",
      title: "Key Highlights",
      type: "array",
      of: [{ type: "string" }],
    }),

   defineField({
  name: "projectAchievements",
  title: "Project Achievements",
  type: "array",
  of: [
    defineField({
      name: "achievement",
      title: "Achievement",
      type: "object",
      fields: [
        defineField({
          name: "label",
          title: "Label (e.g. likes, views, shares)",
          type: "string",
        }),
        defineField({
          name: "value",
          title: "Value (e.g. 100k, 25k)",
          type: "string",
        }),
      ],
    }),
  ],
}),

  ],
});
