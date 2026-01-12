import { defineType, defineField } from "sanity";

export const services = defineType({
  name: "services",
  type: "document",
  title: "Services",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Service Title",
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Service Description",
    }),
    defineField({
      name: "subServices",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Service Images",
      description: "two images related to this service",
      of: [
        defineField({
          name: "image",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt text for the image",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "serviceDetail",
      type: "array",
      title: "Service Detail",
      of: [
        defineField({
          name: "heroImageItem",
          type: "object",
          title: "Hero Section",
          fields: [
            defineField({
              name: "heroImage",
              type: "image",
              title: "Hero section Image",
              description: "landscape image",
              options: { hotspot: true },
              fields: [
                defineField({
                  name: "alt",
                  title: "Alt Text",
                  type: "string",
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: "introductionSectionItem",
          type: "introductionSection",
        }),
        defineField({
          name: "whyChooseUsSectionOneItem",
          type: "whyChooseUsSectionOne",
        }),
        defineField({
          name: "coreServiceSectionItem",
          type: "coreServiceSection",
        }),
        defineField({
          name: "industriesSectionItem",
          type: "industriesSection",
        }),
        defineField({
          name: "whyChooseUsSectionTwoItem",
          type: "whyChooseUsSectionTwo",
        }),
        defineField({
          name: "ctaItem",
          type: "cta",
        }),
        defineField({
          name: "additionalInformationItem",
          type: "additionalInformation",
        }),
        defineField({
          name: "frequentlyAskedQuestionsItem",
          type: "frequentlyAskedQuestions",
        }),
      ],
    }),
  ],
});
