const certificate = {
  name: "certificado",
  type: "document",
  title: "Certificados",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name" },
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt",
        },
      ],
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
  ],
};

export default certificate;
