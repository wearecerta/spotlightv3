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
      name: "sub-services",
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
      name: "service-detail",
      type: "array",
      title: "Service Detail",
      fields: [
        {
          name: "hero-image",
          type: "image",
          title: "Hero section Image",
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
          name: "introduction-section",  //firsts section
          type: "introduction-section",
        },
        {
          name: "why-choose-us-section-one", //second section
          type: "why-choose-us-section-one",
        },
        {
          name: "core-service-section", //third section
          type: "core-service-section",
        },
        {
          name: "industries-section", //forth section
          type: "industries-section",
        },
        {
          name: "why-choose-us-section-two", //fifth section
          type: "why-choose-us-section-two",
        },
        {
          name: "cta", //cta section
          type: "cta",
        },
        {
          name: "additional-information", //additional information section
          type: "additional-information",
        },
        {
          name: "frequently-asked-questions", //faq section
          type: "frequently-asked-questions",
        },
      ],
    },
  ],
};


