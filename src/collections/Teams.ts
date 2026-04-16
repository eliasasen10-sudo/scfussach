import type { CollectionConfig } from "payload";

export const Teams: CollectionConfig = {
  slug: "teams",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "league", "trainer"],
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "league",
      type: "text",
      required: true,
    },
    {
      name: "trainer",
      type: "text",
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "color",
      type: "text",
      admin: {
        description: "Tailwind CSS Klasse (z.B. bg-primary)",
      },
    },
    {
      name: "image",
      type: "text",
      admin: {
        description: "Mannschaftsfoto URL",
      },
    },
  ],
};
