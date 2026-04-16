import "@payloadcms/next/css";
import { RootLayout } from "@payloadcms/next/layouts";
import configPromise from "@payload-config";
import React from "react";

import { importMap } from "./admin/importMap";
import { serverFunction } from "./serverFunction";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout config={configPromise} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  );
}
