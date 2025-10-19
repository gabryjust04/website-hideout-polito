import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hideout.polito.it"),
  title: {
    default: "Hideout Polito",
    template: "%s | Hideout Polito"
  },
  description:
    "Il club Hideout del Politecnico di Torino unisce studenti appassionati di tecnologia, creatività e innovazione.",
  keywords: [
    "Hideout",
    "Politecnico di Torino",
    "studenti",
    "tecnologia",
    "club"
  ],
  authors: [{ name: "Hideout Polito" }],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://hideout.polito.it",
    title: "Hideout Polito",
    siteName: "Hideout Polito",
    description:
      "Il club Hideout del Politecnico di Torino unisce studenti appassionati di tecnologia, creatività e innovazione.",
    images: [
      {
        url: "/placeholder.png",
        width: 1200,
        height: 630,
        alt: "Studenti di Hideout Polito che collaborano insieme"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Hideout Polito",
    description:
      "Il club Hideout del Politecnico di Torino unisce studenti appassionati di tecnologia, creatività e innovazione.",
    images: ["/placeholder.png"],
    creator: "@hideoutpolito"
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
      { url: "/logo.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest"
};

export const viewport: Viewport = {
  themeColor: "#1b6fd6"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="it" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          outfit.variable,
          "min-h-screen bg-background font-inter text-foreground antialiased"
        )}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <footer className="border-t bg-muted/40 py-6 text-sm text-muted-foreground">
            <div className="container flex flex-col gap-2 text-center md:flex-row md:items-center md:justify-between">
              <p>&copy; {currentYear} Hideout Polito. Tutti i diritti riservati.</p>
              <p className="flex items-center justify-center gap-2">
                <span>Seguici su</span>
                <a className="font-semibold text-primary hover:underline" href="https://instagram.com" rel="noreferrer" target="_blank">
                  Instagram
                </a>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
