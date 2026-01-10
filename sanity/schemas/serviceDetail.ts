
export const IntroductionSection = {
  name: "introduction-section",
  title: "Intro Section content",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
    },
    {
      name: "description",
      title: "Section Description",
      type: "text",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      description:"two images for first section",
      of: [
        {
          type: "image",
          options: { hotspot: true },
           fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};





export const WhyChooseUsSection1 = {
  name: "why-choose-us-section-one",
  title: "Why Choose Us section 1",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
    },
    {
      name: "description",
      title: "Section Description",
      type: "text",
    },
    {
      name: "services",
      title: "Service Points",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "image",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
};




export const coreServicesSection = {
  name: "core-service-section",
  title: "Core Services section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
    },
    {
      name: "description",
      title: "Section Description",
      type: "text",
    },
    {
      name: "services",
      title: "Services List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "description", type: "text" },
          ],
        },
      ],
    },
  ],
};





export const NicheIndustries = {
  name: "industries-section",
  title: "Niche Industries section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "subTitle",
      title: "Sub Title",
      type: "string",
    },
    {
      name: "subDescription",
      title: "Sub Description",
      type: "text",
    },
    {
      name: "industries",
      title: "Industries List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "industry", type: "string" },
            { name: "industryDescription", type: "text" },
          ],
        },
      ],
    },
  ],
};




export const WhyChooseUsSection2 = {
  name: "why-choose-us-section-two",
  title: "Why choose us section 2",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "subTitle",
      title: "Sub Title",
      type: "string",
    },
    {
      name: "subDescription",
      title: "Sub Description",
      type: "text",
    },
    {
      name: "features",
      title: "Key Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "description", type: "text" },
          ],
        },
      ],
    },
  ],
};





export const CtaSection = {
  name: "cta",
  title: "Call To Action Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "CTA Title",
      type: "string",
    },
    {
      name: "slogan",
      title: "Slogan",
      type: "string",
    },
    {
      name: "ctaText",
      title: "CTA Text",
      type: "string",
    },
  ],
};






export const AdditionalInformation = {
  name: "additional-information",
  title: "Additional Info Block",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Block Title",
      type: "string",
    },
    {
      name: "paragraphs",
      title: "Paragraphs",
      type: "array",
      of: [{ type: "text" }],
    },
  ],
};




export const faq = {
  name: "faq",
  title: "FAQ",
  type: "object",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
    },
    {
      name: "answer",
      title: "Answer",
      type: "text",
    },
  ],
};