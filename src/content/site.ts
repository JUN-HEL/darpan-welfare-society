export const siteConfig = {
  name: "Darpan Welfare Society",
  shortName: "Darpan",
  tagline: "For Humanity. For Every Life. For A Better Tomorrow.",
  supportingLine:
    "Working together to build a compassionate, inclusive and empowered society through community service and social welfare.",
  description:
    "Darpan Welfare Society is a social welfare organisation based in Uttarakhand, India. The organisation brings people and partners together around care, dignity, opportunity and community-led change.",
  established: 2015,
  copyrightYear: 2026,
  locale: "en_IN",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://darpanwelfare.org",
  location: {
    city: "Roorkee",
    region: "Uttarakhand",
    country: "India",
    line: "Roorkee, Uttarakhand, India",
  },
  address: {
    line1: "Street 11, House No. 241",
    line2: "Krishna Nagar",
    locality: "Roorkee",
    region: "Uttarakhand",
    postalCode: "247667",
    country: "India",
    countryCode: "IN",
    formatted:
      "Street 11, House No. 241, Krishna Nagar, Roorkee, Uttarakhand 247667, India",
    mapQuery: "Krishna Nagar, Roorkee, Uttarakhand 247667, India",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Krishna+Nagar+Roorkee+Uttarakhand+247667",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Krishna+Nagar,+Roorkee,+Uttarakhand+247667,+India&output=embed",
    sourceNote: "Address as publicly listed for the organisation.",
  },
  social: {
    instagram: "https://www.instagram.com/darpanwelfare/",
    instagramHandle: "@darpanwelfare",
  },
  // Public phone, email and WhatsApp details are intentionally empty until
  // they have been confirmed by the organisation. Do not add illustrative
  // values here.
  contact: {
    email: null as string | null,
    phone: null as string | null,
    phoneHref: null as string | null,
    whatsapp: null as string | null,
    whatsappHref: null as string | null,
    note:
      "Direct phone, email and WhatsApp details are being confirmed with the organisation.",
  },
  donation: {
    verified: false,
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  footerNavigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
