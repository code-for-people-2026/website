import type { CollectionConfig } from "payload";
import { isAdmin } from "../access/isAdmin";

const canAccessAdmin = ({ req }: { req: { user?: unknown } }) => Boolean(req.user);

export const CMSAdmins: CollectionConfig = {
  slug: "cms-admins",
  auth: true,
  admin: {
    useAsTitle: "email",
    group: "系统",
  },
  access: {
    admin: canAccessAdmin,
    create: () => process.env.ALLOW_ADMIN_BOOTSTRAP === "true",
    read: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "displayName",
      label: "显示名",
      type: "text",
    },
  ],
};
