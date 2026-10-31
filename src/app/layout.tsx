import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/ui/json-ld";
import { siteConfig } from "@/content/site";
import { organisationSchema, websiteSchema } from "@/lib/seo";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Darpan Welfare Society | Social Welfare Organisation in Uttarakhand",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "nonprofit",
  keywords: [
    "Darpan Welfare Society",
    "Darpan Welfare Society Uttarakhand",
    "NGO in Uttarakhand",
    "social welfare organisation",
    "community development NGO",
    "Roorkee NGO",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Darpan Welfare Society | Social Welfare Organisation in Uttarakhand",
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — social welfare in Uttarakhand`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darpan Welfare Society | Social Welfare Organisation in Uttarakhand",
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#183f35",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <JsonLd data={[organisationSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
