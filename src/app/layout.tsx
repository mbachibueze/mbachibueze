
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

const Base_Url = "https://mbachibueze.vercel.app"

export const metadata: Metadata = {

  metadataBase: new URL(Base_Url),

  title: "Mba Chibueze",
  description: "Portfolio of Mba Chibueze - Frontend Developer specializing in Next.js, React, and TypeScript. Showcasing projects, skills, and contact information.",

  keywords: [
    // Name variations
    "Mba Chibueze",
    "Mba Chibueze Ananso",
    "Chibueze Mba",
    "Oba developer",
    "ObaTech",
    // Role + location
    "Frontend Engineer Nigeria",
    "Frontend Developer Port Harcourt",
    "React Developer Nigeria",
    "Next.js Developer Nigeria",
    "TypeScript Developer Nigeria",
    "Web Developer Port Harcourt",
    "Freelance Developer Nigeria",
    // Skills
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "Tailwind CSS developer",
    "Firebase developer",
    "Framer Motion developer",
    "SaaS frontend developer",
    "UI UX developer Nigeria",
    // Services
    "website development Nigeria",
    "admin dashboard development",
    "e-commerce frontend Nigeria",
    "Figma to Next.js",
    "web application developer Nigeria",
    // Background
    "mechanical engineer turned developer",
    "MOUAU graduate developer",
    "Michael Okpara University developer",
  ],

  authors: [{ name: "Mba Chibueze", url: Base_Url }],
  creator: "Mba Chibueze",
  publisher: "Mba Chibueze",

  alternates: {
    canonical: Base_Url,
  },



  icons: {
    icon: "favicon.svg",
    shortcut: "/favicon.svg",
  },

    robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },


  category: "technology",


  openGraph: {
    type: "website",
    url: Base_Url,
    siteName: "Mba Chibueze — Portfolio",
    title: "Mba Chibueze | Frontend Engineer ",
    description:
      "Portfolio of Mba Chibueze - Frontend Engineer. I build clean, scalable web experiences using Next.js, React, TypeScript & Tailwind CSS. Based in Port Harcourt, Nigeria.",
    locale: "en_NG",
    images: [
      {
        url: `${Base_Url}/og-image.png`, // create a 1200x630 image (see note below)
        width: 1200,
        height: 630,
        alt: "Mba Chibueze — Frontend Engineer based in Port Harcourt, Nigeria",
        type: "image/png",
      },
    ],
  },


    twitter: {
    card: "summary_large_image",
    site: "@mba_chibuezez",
    creator: "@mba_chibuezez",
    title: "Mba Chibueze | Frontend Engineer ",
    description:
      "Portfolio of Mba Chibueze - Frontend Developer specializing in Next.js, React, and TypeScript.",
    images: [`${Base_Url}/og-image.png`],
  },


};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="ZwINS8JlQ6orLu993dp0Kd6f2gf1NvmB-0pf_rS1uq8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mba Chibueze",
              alternateName: ["Chibueze Mba", "Oba", "Mba Chibueze Ananso"],
              url: "https://mbachibueze.vercel.app",
              image: "https://mbachibueze.vercel.app/og-image.png",
              jobTitle: "Frontend Engineer",
              description:
                "Frontend Engineer specializing in Next.js, React, TypeScript, and scalable SaaS web applications. Based in Port Harcourt, Nigeria.",
              email: "mbachibueze27@gmail.com",
              telephone: "+2347012108363",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Port Harcourt",
                addressRegion: "Rivers State",
                addressCountry: "NG",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Michael Okpara University of Agriculture, Umudike",
                url: "https://mouau.edu.ng",
              },
              knowsAbout: [
                "Next.js",
                "React.js",
                "TypeScript",
                "Tailwind CSS",
                "Firebase",
                "Framer Motion",
                "Frontend Engineering",
                "SaaS Development",
                "UI/UX Implementation",
                "E-commerce Development",
                "Admin Dashboard Development",
                "Mechanical Engineering",
              ],
              sameAs: [
                "https://github.com/mbachibueze",
                "https://www.linkedin.com/in/mba-chibueze-8118a9252",
                "https://twitter.com/mba_chibuezez",
                "https://wa.me/+2347012108363",
              ],
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://mbachibueze.vercel.app",
              },
            }),
          }}
        />
      </head>
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





