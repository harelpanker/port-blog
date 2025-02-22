import type { Metadata } from "next";
import { dm_sans, spack_grotesk } from "@/app/lib/fonts";
import { Children } from "@/app/types/children";
import { layoutMetadata } from "@/app/lib/layout-metadata";
import "./globals.css";

export const metadata: Metadata = layoutMetadata;

export default function RootLayout({ children }: Readonly<Children>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${dm_sans.variable} ${spack_grotesk.variable}`}
    >
      <body className={`font-dm-sans antialiased`}>{children}</body>
    </html>
  );
}
