import type { Metadata } from "next";
import { Cousine, Special_Elite } from "next/font/google";
import "./globals.css";

const cousine = Cousine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rabi | Data Science & UI/UX Portfolio",
  description:
    "Rabi — Data Science undergraduate and UI/UX Designer bridging the gap between heavy backend AI and beautiful frontends.",
  openGraph: {
    title: "Rabi | Data Science & UI/UX Portfolio",
    description:
      "Rabi — Data Science undergraduate and UI/UX Designer bridging the gap between heavy backend AI and beautiful frontends.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabi | Data Science & UI/UX Portfolio",
    description:
      "Rabi — Data Science undergraduate and UI/UX Designer bridging the gap between heavy backend AI and beautiful frontends.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cousine.variable} ${specialElite.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
