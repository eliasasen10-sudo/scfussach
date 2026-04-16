"use server";

import type { ServerFunctionClient } from "payload";
import { handleServerFunctions } from "@payloadcms/next/layouts";
import configPromise from "@payload-config";

import { importMap } from "./admin/importMap";

export const serverFunction: ServerFunctionClient = async function (args) {
  "use server";
  return handleServerFunctions({
    ...args,
    config: configPromise,
    importMap,
  });
};
