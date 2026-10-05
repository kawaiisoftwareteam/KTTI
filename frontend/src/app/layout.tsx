import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sswv.org"),
  title: "Kawaii Tredmig Training Institute | SSW & Japanese Language Academy",
  description:
    "Premier SSW preparation and Japanese language training institute. Empowering students and professionals from Bangladesh to build successful, high-earning careers in Japan.",
  keywords: [
    "SSW Japan",
    "Japanese Language Training Dhaka",
    "Specified Skilled Worker",
    "JLPT N5 N4 N3",
    "Study and Work in Japan",
    "Kawaii Tredmig Training Institute",
  ],
  authors: [{ name: "Kawaii Tredmig Training Institute" }],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Kawaii Tredmig Training Institute | Gateway to Japan Careers",
    description:
      "Specialized SSW training, JLPT preparation, and career placement pathway to Japan.",
    type: "website",
    locale: "en_US",
    url: "https://sswv.org",
    siteName: "Kawaii Tredmig Training Institute",
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
      data-scroll-behavior="smooth"
      className="scroll-smooth antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@100..800&family=Jost:ital,wght@0,100..900;1,100..900&family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-screen bg-[#FFFFFF] text-[#111111] font-sans selection:bg-[#A71728] selection:text-white"
        suppressHydrationWarning
      >
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
