import type { Metadata } from "next";

const COMPANY_NAME = "Port.io";
const SITE_URL = "https://productmanagement.port.io/";
const SITE_TITLE = "Product management @ Port";
const SITE_DESCRIPTION =
  "Product management, building developer tools, and the challenges along the way.";

export const siteMetadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  generator: COMPANY_NAME,
  applicationName: COMPANY_NAME,
  referrer: "origin-when-cross-origin",
  creator: COMPANY_NAME,
  keywords: [
    "Product Management",
    "Product Manager Blog",
    "Product Strategy",
    "Roadmap Planning",
    "User Research",
    "Developer Experience",
    "Platform Engineering",
    "DevOps Product Management",
    "Internal Developer Platform",
    "API Product Management",
    "Developer Tooling",
    "Scaling Platform Teams",
    "Stakeholder Management",
    "Prioritization Frameworks",
    "Data-Driven Product Management",
    "Technical Debt in Product",
    "Product Management for Developers",
    "Building Developer Tools",
    "Lessons from a Product Manager",
    "Best Practices in Platform PM",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    type: "website",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_TITLE,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
