
import type { Metadata } from "next";
import Navigation from "../components/ui/navigation";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import { ThemeProvider } from "../context/themeContext";
import { Toaster } from "@/components/ui/sonner"




const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mba Chibueze",
  description: "Portfolio of Mba Chibueze - Frontend Developer specializing in Next.js, React, and TypeScript. Showcasing projects, skills, and contact information.",
  icons: {
    icon: "favicon.svg",
  },

  openGraph: {
    title: "Mba Chibueze",
    description: "Portfolio of Mba Chibueze - Frontend Developer specializing in Next.js, React, and TypeScript. Showcasing projects, skills, and contact information.",
    url: "https://mbachibueze.vercel.app",
    siteName: "Mba Chibueze",
    images: [
      {
        url: "https://mbachibueze.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mba Chibueze's Portfolio Preview"
      },
    ],
    type: 'website'
  },

  twitter: {
    card: "summary_large_image",
    title: "Mba Chibueze",
    description:
      "Portfolio of Mba Chibueze - Frontend Developer specializing in Next.js, React, and TypeScript.",
    images: ["https://mbachibueze.vercel.app/og-image.png"],
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
        className={cn(
          " antialised min-h-screen flex flex-col ",
          manrope.className,
          {
            "debug-screens": process.env.NODE_ENV === "development",
          },
        )}
      >
        <ThemeProvider>
          <Navigation />
          <div className="background-gradient h-screen  ">{children}</div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
