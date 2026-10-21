import type { Metadata } from "next";
import { Inter, Kanit } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const kanit = Kanit({
  weight: ["300", "400", "600"],
  subsets: ["thai", "latin"],
  variable: "--font-kanit",
  display: "swap",
});

const siteTitle = "Kampanart Poonpanao — Full-stack Developer";
const siteDescription =
  "Full-stack & low-code developer building enterprise systems: SaaS ERP/POS with Go-Fiber and Next.js, and Joget DX workflows for government agencies.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Kampanart Poonpanao",
  },
  description: siteDescription,
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    type: "website",
    title: siteTitle,
    description: siteDescription,
    siteName: "Kampanart Poonpanao",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
}

// Applies the saved theme before first paint so dark-mode visitors don't see a light flash
const themeScript = `try{document.documentElement.setAttribute('data-theme',localStorage.getItem('theme')||'light')}catch(e){}`;

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${inter.variable} ${kanit.variable} antialiased font-sans min-h-screen flex flex-col`}
      >
        <MotionConfig reducedMotion="user">
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
