export const clients = {
  name: 'client',
  type: 'document',
  title: 'Clients',
  fields: [
    {
      name: "client-name",
      type: "string",
      title: "Name of the client",
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

