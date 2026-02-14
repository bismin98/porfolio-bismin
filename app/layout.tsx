import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const displayFont = Bebas_Neue({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minvect | Portfolio",
  description:
    "Portfolio colorfull dengan perpaduan fotografer, desain grafis, dan programmer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} bg-[#f6f2ff] text-[#1c142c] antialiased`}
      >
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,87,34,0.35),_transparent_65%)] blur-2xl" />
            <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(120,108,255,0.35),_transparent_68%)] blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(0,198,174,0.35),_transparent_70%)] blur-3xl" />
          </div>
          <Header />
          <main className="relative px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-12 md:px-12 lg:px-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
