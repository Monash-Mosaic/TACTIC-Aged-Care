import type { Metadata } from "next";
import localFont from "next/font/local";

import { SiteHeader } from "@/components/layout/site-header";
import { site } from "@/lib/site";

import "./globals.css";

const geistSans = localFont({
  src: "../fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  display: "swap",
});

const ibmPlexSerif = localFont({
  src: [
    { path: "../fonts/ibm-plex-serif-400.ttf", weight: "400", style: "normal" },
    { path: "../fonts/ibm-plex-serif-500.ttf", weight: "500", style: "normal" },
    { path: "../fonts/ibm-plex-serif-600.ttf", weight: "600", style: "normal" },
    { path: "../fonts/ibm-plex-serif-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-ibm-plex-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${ibmPlexSerif.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
