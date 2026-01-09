export const works = {
  name: 'works',
  type: 'document',
  title: 'Works',
  fields: [
    {
      name: "client",
      type: "reference",
      
    },
    {
      name: 'description',
      type: 'string',
      title:"Description"

    },
    {
      name: 'logo',
      type: 'image',
      options:{
        hotspot:true
      }
    },
    {
      name: "industry",
      title: "Industry",
      type: "reference",
      to: [{ type: "industries" }],
    },
  ]
}

