import type { Metadata } from "next";
import { Outfit, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
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
  openGraph: {
    title: "Kawaii Tredmig Training Institute | Gateway to Japan Careers",
    description:
      "Specialized SSW training, JLPT preparation, and career placement pathway to Japan.",
    type: "website",
    locale: "en_US",
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
      className={`${outfit.variable} ${notoSansJP.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FFFFFF] text-[#111111] font-sans selection:bg-[#A71728] selection:text-white">
        {children}
      </body>
    </html>
  );
}
