import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { buildConfig } from "payload";
import { CMSAdmins } from "./src/payload/collections/CMSAdmins";
import { FormLinks } from "./src/payload/collections/FormLinks";
import { SiteDocuments } from "./src/payload/collections/SiteDocuments";

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "code-for-people-dev-secret-change-me",
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || "file:./payload.db",
    },
  }),
  admin: {
    user: "cms-admins",
    importMap: {
      autoGenerate: false,
    },
  },
  collections: [CMSAdmins, SiteDocuments, FormLinks],
});

