const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "slug",
      type: "string",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      title: "Genre",
      name: "genre",
      type: "string",
      options: {
        list: [
          { title: "Sci-Fi", value: "sci-fi" },
          { title: "Western", value: "western" },
        ], // <-- predefined values
        layout: "radio", // <-- defaults to 'dropdown'
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};

export default project;
