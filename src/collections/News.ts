import type { CollectionConfig } from "payload";

export const News: CollectionConfig = {
  slug: "news",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "date", "featured"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
    },
    {
      name: "date",
      type: "date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "dd.MM.yyyy",
        },
      },
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Transfer", value: "Transfer" },
        { label: "Veranstaltung", value: "Veranstaltung" },
        { label: "Vereinsnews", value: "Vereinsnews" },
        { label: "Spielbericht", value: "Spielbericht" },
      ],
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description: "URL-freundlicher Name (z.B. neuzugang-wunderli)",
      },
    },
    {
      name: "imageUrl",
      type: "text",
      admin: {
        description: "Bild-URL (optional)",
      },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Als Hauptartikel anzeigen",
      },
    },
  ],
};
