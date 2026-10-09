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
  title: "Rabi ul awal | Data Scientist & UI/UX Designer",
  description:
    "Portfolio of Rabi ul awal, a Data Scientist and UI/UX Designer specializing in building autonomous AI agents, machine learning pipelines, and elegant, user-centric web applications.",
  openGraph: {
    title: "Rabi ul awal | Data Scientist & UI/UX Designer",
    description:
      "Portfolio of Rabi ul awal, a Data Scientist and UI/UX Designer specializing in building autonomous AI agents, machine learning pipelines, and elegant, user-centric web applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabi ul awal | Data Scientist & UI/UX Designer",
    description:
      "Portfolio of Rabi ul awal, a Data Scientist and UI/UX Designer specializing in building autonomous AI agents, machine learning pipelines, and elegant, user-centric web applications.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cousine.variable} ${specialElite.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
