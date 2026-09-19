import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://dualbytestudio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "DualByte Studio | Jasa Pengembangan Website dan Aplikasi",
    template: "%s | DualByte Studio",
  },

  description:
    "DualByte Studio membantu bisnis dan startup mewujudkan ide digital melalui pengembangan website, aplikasi mobile, dan perangkat lunak kustom.",

  applicationName: "DualByte Studio",

  keywords: [
    "DualByte Studio",
    "jasa pembuatan website",
    "jasa pengembangan aplikasi mobile",
    "jasa pembuatan aplikasi kustom",
    "pengembangan website bisnis",
    "software development Indonesia",
  ],

  authors: [{ name: "DualByte Studio" }],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "DualByte Studio | Jasa Pengembangan Website dan Aplikasi",
    description:
      "Wujudkan ide digital Anda bersama DualByte Studio melalui pengembangan website, aplikasi mobile, dan perangkat lunak kustom.",
    url: siteUrl,
    siteName: "DualByte Studio",
    locale: "id_ID",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}