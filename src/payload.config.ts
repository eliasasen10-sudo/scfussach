import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";

import { News } from "@/collections/News";
import { Players } from "@/collections/Players";
import { Teams } from "@/collections/Teams";
import { Sponsors } from "@/collections/Sponsors";
import { Media } from "@/collections/Media";
import { Users } from "@/collections/Users";

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: "– SC Fussach Admin",
    },
  },
  collections: [News, Players, Teams, Sponsors, Media, Users],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: "src/payload-types.ts",
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
});
