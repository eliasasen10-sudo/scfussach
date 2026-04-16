import type { CollectionConfig } from "payload";

export const Players: CollectionConfig = {
  slug: "players",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "position", "team", "image"],
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "position",
      type: "select",
      options: [
        { label: "Tormann", value: "Tormann" },
        { label: "Verteidiger", value: "Verteidiger" },
        { label: "Mittelfeld", value: "Mittelfeld" },
        { label: "Flügelspieler", value: "Flügelspieler" },
        { label: "Stürmer", value: "Stürmer" },
        { label: "Trainer", value: "Trainer" },
        { label: "Co-Trainer", value: "Co-Trainer" },
      ],
    },
    {
      name: "team",
      type: "select",
      options: [
        { label: "1. Mannschaft", value: "erste" },
        { label: "1b Mannschaft", value: "erste-b" },
        { label: "Nachwuchs", value: "nachwuchs" },
        { label: "Altherren", value: "altherren" },
        { label: "Bodensee Kickers", value: "bsk" },
      ],
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Spielerfoto hochladen",
      },
    },
    {
      name: "number",
      type: "number",
      admin: {
        description: "Trikotnummer (optional)",
      },
    },
  ],
};
