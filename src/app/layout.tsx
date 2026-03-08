import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://battam1111.github.io"),
  title: `${profile.name} | ${profile.role}`,
  description: `${profile.name}, ${profile.role} at ${profile.institution}, working on RLHF, large language models, and embodied AI.`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: `${profile.name}, ${profile.role} at ${profile.institution}, working on RLHF, large language models, and embodied AI.`,
    url: "https://battam1111.github.io",
    siteName: `${profile.name} Academic Homepage`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plexSans.variable} ${plexMono.variable} ${newsreader.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
