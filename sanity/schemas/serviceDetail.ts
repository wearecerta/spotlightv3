import { defineType, defineField } from "sanity";

export const IntroductionSection = defineType({
  name: "introductionSection",
  title: "Intro Section content",
  preview: {
  prepare() {
    return {
      title: "Intro Section",
    };
  },
},
  type: "object",
  fields: [
    defineField({ name: "title", title: "Section Title", type: "string" }),
    defineField({
      name: "description",
      title: "Section Description",
      type: "text",
    }),
    defineField({
      name: "images",
      title: "Images",
      description: "two images for first section",
      type: "array",
      of: [
        defineField({
          name: "image",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt Text", type: "string" }),
          ],
        }),
      ],
    }),
  ],
});

export const WhyChooseUsSection1 = defineType({
  name: "whyChooseUsSectionOne",
  title: "Why Choose Us section 1",
  preview: {
  prepare() {
    return {
      title: "Why choose us Section",
    };
  },
},
  type: "object",
  fields: [
    defineField({ name: "title", title: "Section Title", type: "string" }),
    defineField({
      name: "description",
      title: "Section Description",
      type: "text",
    }),
    defineField({
      name: "services",
      title: "Service Points",
      type: "array",
      of: [
        defineField({
          type: "object",
          name: "servicePoints",
          fields: [
            defineField({ name: "icon", title: "Icon", type: "image" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
          ],
        }),
      ],
    }),
  ],
});

export const coreServicesSection = defineType({
  name: "coreServiceSection",
  title: "Core Services section",
  preview: {
  prepare() {
    return {
      title: "core services list Section",
    };
  },
},
  type: "object",
  fields: [
    defineField({ name: "title", title: "Section Title", type: "string" }),
    defineField({
      name: "description",
      title: "Section Description",
      type: "text",
    }),
    defineField({
      name: "services",
      title: "Services List",
      type: "array",
      of: [
        defineField({
          type: "object",
          name: "serviceLists",
          fields: [
            defineField({ name: "title", type: "string" }),
            defineField({ name: "description", type: "text" }),
          ],
        }),
      ],
    }),
  ],
});

export const NicheIndustries = defineType({
  name: "industriesSection",
  title: "Niche Industries section",
  preview: {
  prepare() {
    return {
      title: "Niche Industries list Section",
    };
  },
},
  type: "object",
  fields: [
    defineField({ name: "title", title: "Section Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "subTitle", title: "Sub Title", type: "string" }),
    defineField({
      name: "subDescription",
      title: "Sub Description",
      type: "text",
    }),
    defineField({
      name: "industries",
      title: "Industries List",
      type: "array",
      of: [
        defineField({
          type: "object",
          name: "industriesList",
          fields: [
            defineField({ name: "industry", type: "string" }),
            defineField({ name: "industryDescription", type: "text" }),
          ],
        }),
      ],
    }),
  ],
});

export const WhyChooseUsSection2 = defineType({
  name: "whyChooseUsSectionTwo",
  title: "Why choose us section 2",
  type: "object",
  preview: {
  prepare() {
    return {
      title: "Why choose us one Section",
    };
  },
},
  fields: [
    defineField({ name: "title", title: "Section Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "subTitle", title: "Sub Title", type: "string" }),
    defineField({
      name: "subDescription",
      title: "Sub Description",
      type: "text",
    }),
    defineField({
      name: "features",
      title: "Key Features",
      type: "array",
      of: [
        defineField({
          type: "object",
          name: "keyFeatures",
          fields: [
            defineField({ name: "title", type: "string" }),
            defineField({ name: "description", type: "text" }),
          ],
        }),
      ],
    }),
  ],
});

export const CtaSection = defineType({
  name: "cta",
  title: "Call To Action Section",
  type: "object",
  preview: {
  prepare() {
    return {
      title: "Call to action Section",
    };
  },
},
  fields: [
    defineField({ name: "title", title: "CTA Title", type: "string" }),
    defineField({ name: "slogan", title: "Slogan", type: "string" }),
    defineField({ name: "ctaText", title: "CTA Text", type: "text" }),
  ],
});

export const AdditionalInformation = defineType({
  name: "additionalInformation",
  title: "Additional Info Block",
  preview: {
  prepare() {
    return {
      title: "Additional Information Section",
    };
  },
},
  type: "object",
  fields: [
    defineField({ name: "title", title: "Block Title", type: "string" }),
    defineField({
      name: "paragraphs",
      title: "Paragraphs",
      type: "array",
      of: [{ type: "text" }],
    }),
  ],
});

export const faq = defineType({
  name: "frequentlyAskedQuestions",
  preview: {
  prepare() {
    return {
      title: "FAQ Section",
    };
  },
},
  title: "FAQ",
  type: "object",
  fields: [
    defineField({ name: "question", title: "Question", type: "string" }),
    defineField({ name: "answer", title: "Answer", type: "text" }),
  ],
});

export const onPageSeo = defineType({
  name: "onPageSeo",
  title: "On Page Seo",
  preview: {
  prepare() {
    return {
      title: "on page seo",
    };
  },
},
  type: "object",
  fields: [
    defineField({ name: "pageTitle", title: "Page Title", type: "string" }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
    }),
    defineField({
      name: "targetKeyWords",
      title: "Target Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
