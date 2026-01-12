export const Team = {
  name: "teams",
  type: "document",
  title: "Teams",
  fields: [
    {
      name: "titleSvg",
      type: "image",
      title: "Team Title SVG image",
    },
    {
      name: "teamsGroupImage",
      title: "Teams Group Image",
      type: "image",
       fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
        },
      ],
    },
   {
    name:"teamMembers",
    type:"teamMembers"
   }
  ],
};




export const TeamMembers = {
  name: "teamMembers",
  type: "object",
  title: "Teams",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "position",
      type: "string",
      title: "Position",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
       fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
        },
      ],
    },
   {
      name: "secondaryImage",
      title: "Secondary Image",
      type: "image",
       fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
        },
      ],
    },
  ],
};
