import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Fraunces } from "next/font/google";
import { LenisProvider } from "@/components/lenis-provider";
import { Nav } from "@/components/layout/nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ten Aker Wood - Local Guide",
  description:
    "Your guide to Cazadero and Sonoma County. Food, outdoors, wellness, and everything you need while you're here.",
  keywords: [
    "Ten Aker Wood",
    "Cazadero",
    "Sonoma County",
    "crew guide",
    "local guide",
  ],
  metadataBase: new URL("https://tenaker.devonmeadows.com"),
  openGraph: {
    title: "Ten Aker Wood - Local Guide",
    description:
      "Your guide to Cazadero and Sonoma County. Food, outdoors, wellness, and everything you need while you're here.",
    url: "https://tenaker.devonmeadows.com",
    siteName: "Ten Aker Wood Guide",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable}`}
    >
      <body className="antialiased pb-20 md:pb-0">
        <LenisProvider>
          <div className="grain" aria-hidden="true" />
          <Nav />
          <main className="min-h-[100dvh]">{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}
