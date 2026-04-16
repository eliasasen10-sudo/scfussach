"use server";

import { handleServerFunctions } from "@payloadcms/next/layouts";
import configPromise from "@payload-config";

import { importMap } from "./admin/importMap";

export const serverFunction = async (
  args: Parameters<typeof handleServerFunctions>[0],
) => {
  return handleServerFunctions({
    ...args,
    config: configPromise,
    importMap,
  });
};
