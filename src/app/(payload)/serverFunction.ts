"use server";

import { handleServerFunctions } from "@payloadcms/next/layouts";
import configPromise from "@payload-config";
import { importMap } from "./admin/importMap";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const serverFunction = async (args: any) => {
  "use server";
  return handleServerFunctions({ ...args, config: configPromise, importMap });
};
