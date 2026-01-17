import { defineType, defineField } from "sanity";

export const contactForm = defineType({
  name: "contactForm",
  type: "document",
  title: "Contact Form",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email", 
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "phoneNumber",
      type: "string",
      title: "Phone Number",
    }),
    defineField({
      name: "message",
      type: "text",
      title: "Message",
      validation: (Rule) => Rule.required(),
    }),
  ],
});