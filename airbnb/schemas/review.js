export default {
  name: "review",
  title: "Review",
  type: "object",
  fields: [
    {
      name: "reviewDescription",
      title: "Review Description",
      type: "string",
    },
    {
      name: "traveller",
      title: "Traveller",
      type: "traveller",
    },
    {
      name: "rating",
      title: "Rating",
      type: "string",
      options: {
        list: [
          {
            title: "5 starts",
            value: "5-stars",
          },
          {
            title: "4 starts",
            value: "4-stars",
          },
          {
            title: "3 starts",
            value: "3-stars",
          },
          {
            title: "2 starts",
            value: "2-stars",
          },
          {
            title: "1 starts",
            value: "1-stars",
          },
        ],
        layout: "radio",
      },
    },
  ],
};
