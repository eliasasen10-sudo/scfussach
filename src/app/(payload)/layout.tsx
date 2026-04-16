import "@payloadcms/next/css";
import { RootLayout } from "@payloadcms/next/layouts";
import configPromise from "@payload-config";
import React from "react";

import { importMap } from "./admin/importMap";
import { serverFunction } from "./serverFunction";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
    <RootLayout config={configPromise} importMap={importMap} serverFunction={serverFunction as any}>
      {children}
    </RootLayout>
  );
}
