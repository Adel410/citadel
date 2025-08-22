import type { Metadata } from "next";

export const baseMetadata: Metadata = {
  title: "CITADEL Cybersécurité",
  description:
    "CITADEL Cybersécurité accompagne les TPE, PME et collectivités avec des audits, pentests et formations.",
  metadataBase: new URL("https://www.citadel-cybersécurité.fr"),
  openGraph: {
    siteName: "CITADEL Cybersécurité",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CITADEL Cybersécurité",
      },
    ],
  },
};