import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import {
  CallToAction,
  FocusIndex,
  InstagramSection,
  Introduction,
  MissionAndVision,
  WorkInAction,
} from "@/components/home/home-sections";
import { JsonLd } from "@/components/ui/json-ld";
import { createMetadata, webPageSchema } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = createMetadata({
  title: "Darpan Welfare Society | Social Welfare Organisation in Uttarakhand",
  description:
    "Darpan Welfare Society is a social welfare organisation in Uttarakhand, India. Explore its purpose, areas of work, gallery and ways to get in touch.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <MissionAndVision />
      <FocusIndex />
      <WorkInAction />
      <CallToAction />
      <InstagramSection />
      <JsonLd
        data={webPageSchema({
          path: "/",
          name: `${siteConfig.name} — ${siteConfig.tagline}`,
          description: siteConfig.description,
        })}
      />
    </>
  );
}
