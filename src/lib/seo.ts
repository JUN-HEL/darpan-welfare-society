import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/utils";

interface MetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  absoluteTitle?: boolean;
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description,
  path,
  image = "/og-image.png",
  absoluteTitle = false,
  noIndex = false,
}: MetadataInput): Metadata {
  const canonical = path === "/" ? "/" : path;
  const socialTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
    },
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: false,
            googleBot: { index: false, follow: false },
          },
        }
      : {}),
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      title: socialTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — social welfare in Uttarakhand`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [imageUrl],
    },
  };
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
  addressLocality: siteConfig.address.locality,
  addressRegion: siteConfig.address.region,
  postalCode: siteConfig.address.postalCode,
  addressCountry: siteConfig.address.countryCode,
};

export function organisationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${siteConfig.url}/#organisation`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/icon.svg"),
    description: siteConfig.description,
    foundingDate: String(siteConfig.established),
    address: postalAddress,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Uttarakhand, India",
    },
    slogan: siteConfig.tagline,
    sameAs: [siteConfig.social.instagram],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organisation` },
    inLanguage: "en-IN",
  };
}

export function webPageSchema({
  path,
  name,
  description,
  type = "WebPage",
}: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "CollectionPage" | "ContactPage" | "ImageGallery";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organisation` },
    inLanguage: "en-IN",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
