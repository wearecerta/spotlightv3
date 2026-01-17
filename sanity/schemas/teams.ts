import { defineType, defineField } from "sanity";

export const TeamMembers = defineType({
  name: "teamMembers",
  type: "object",
  title: "Team Member",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      type: "string",
      title: "Position",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      validation: (Rule) => Rule.required(),

      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "secondaryImage",
      title: "Secondary Image",
      type: "image",
      validation: (Rule) => Rule.required(),

      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text (Alt)",
          type: "string",
        }),
      ],
    }),
  ],
});

export const Team = defineType({
  name: "teams",
  type: "document",
  title: "Teams",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Team Title",
    }),
    defineField({
      name: "titleSvg",
      type: "image",
      title: "Team Title SVG image",
    }),
    defineField({
      name: "teamsGroupImage",
      title: "Teams Group Image",
      type: "image",
      fields: [
        defineField({ name: "alt", title: "Alternative Text", type: "string" }),
      ],
    }),
    defineField({
      name: "teamMembers",
      title: "Team Members",
      type: "array",
      of: [{ type: "teamMembers" }],
    }),
  ],
});
