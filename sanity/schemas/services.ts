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
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),

    defineField({
      name: "description",
      type: "text",
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
      description: "Two images related to this service",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt text",
              type: "string",
            },
          ],
        },
      ],
    }),

    // SERVICE DETAIL PAGE
    defineField({
      name: "serviceDetail",
      title: "Service Detail Page",
      type: "object",
      fields: [
        defineField({
          name: "heroTitle",
          type: "string",
          title: "Hero Title",
        }),
         defineField({
          name: "onPageSeo",
          type: "onPageSeo",
        }),

        defineField({
          name: "heroImage",
          type: "image",
          title: "Hero Image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alt Text",
            }),
          ],
        }),

        defineField({
          name: "introductionSection",
          type: "introductionSection",
        }),

        defineField({
          name: "whyChooseUsSectionOne",
          type: "whyChooseUsSectionOne",
        }),

        defineField({
          name: "coreServiceSection",
          type: "coreServiceSection",
        }),

        defineField({
          name: "industriesSection",
          type: "industriesSection",
        }),

        defineField({
          name: "whyChooseUsSectionTwo",
          type: "whyChooseUsSectionTwo",
        }),

        defineField({
          name: "cta",
          type: "cta",
        }),

        defineField({
          name: "additionalInformation",
          type: "additionalInformation",
        }),

        defineField({
          name: "frequentlyAskedQuestions",
          type: "frequentlyAskedQuestions",
        }),

       
      ],
    }),
  ],
});
