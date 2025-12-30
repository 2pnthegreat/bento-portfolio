import type { Metadata } from "next";
import { Inter, Kanit } from "next/font/google";
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

export const metadata = {
  title: "2pnthegreat Portfolio",
  description: "Portfolio of 2pnthegreat",
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${inter.variable} ${kanit.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
