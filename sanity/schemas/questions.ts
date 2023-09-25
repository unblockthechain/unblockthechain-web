const questions = {
  name: "perguntas",
  type: "document",
  title: "Perguntas frequentes",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Título",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title" },
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
  ],
};

export default questions;
