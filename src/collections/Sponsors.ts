import type { CollectionConfig } from "payload";

export const Sponsors: CollectionConfig = {
  slug: "sponsors",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "tier"],
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "logo",
      type: "text",
      admin: {
        description: "Logo URL",
      },
    },
    {
      name: "url",
      type: "text",
      admin: {
        description: "Website URL",
      },
    },
    {
      name: "tier",
      type: "select",
      options: [
        { label: "Hauptsponsor", value: "hauptsponsor" },
        { label: "Premium", value: "premium" },
        { label: "Partner", value: "partner" },
      ],
    },
  ],
};
