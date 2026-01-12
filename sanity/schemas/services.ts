export const services = {
  name: "services",
  type: "document",
  title: "Services",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Service Title",
    },
    {
      name: "description",
      type: "string",
      title: "Service Description",
    },
    {
      name: "subServices",
      type: "array",
    },
    {
      name: "images",
      type: "array",
      title: "Service Images",
      description: "two images related to this service",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Alt text for the image",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "serviceDetail",
      type: "array",
      title: "Service Detail",
      fields: [
        {
          name: "heroImage",
          type: "image",
          title: "Hero section Image",
          description:"landscape image",
          options: {
            hotspot: true,
          },
           fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
        {
          name: "introductionSection",  //firsts section
          type: "introductionSection",
        },
        {
          name: "whyChooseUsSectionOne", //second section
          type: "whyChooseUsSectionOne",
        },
        {
          name: "coreServiceSection", //third section
          type: "corServiceSection",
        },
        {
          name: "industriesSection", //forth section
          type: "industriesSection",
        },
        {
          name: "whyChooseUsSectionTwo", //fifth section
          type: "whyChooseUsSectionTwo",
        },
        {
          name: "cta", //cta section
          type: "cta",
        },
        {
          name: "additionalInformation", //additional information section
          type: "additionalInformation",
        },
        {
          name: "frequentlyAskedQuestions", //faq section
          type: "frequentlyAskedQuestions",
        },
      ],
    },
  ],
};


