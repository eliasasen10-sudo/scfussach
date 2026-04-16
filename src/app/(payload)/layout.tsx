import "@payloadcms/next/css";
import { RootLayout } from "@payloadcms/next/layouts";
import configPromise from "@payload-config";
import React from "react";

import { importMap } from "./admin/importMap";
import { serverFunction } from "./serverFunction";

type Args = {
  children: React.ReactNode;
};

export default function Layout({ children }: Args) {
  return RootLayout({
    children,
    config: configPromise,
    importMap,
    serverFunction,
  });
}
