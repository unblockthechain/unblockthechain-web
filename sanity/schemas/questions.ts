const questions = {
  name: "perguntas",
  type: "document",
  title: "Frequently Asked Questions",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
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
