import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/page-intro";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { ArrowUpRight, Instagram } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { ContactCta } from "@/components/sections/contact-cta";
import { galleryItems } from "@/content/gallery";
import { siteConfig } from "@/content/site";
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Gallery",
  description:
    "Explore the Darpan Welfare Society gallery — a photographic record of community, care, education, wellbeing and shared effort in Uttarakhand.",
  path: "/gallery",
  image: "/og-image.png",
});

const breadcrumbs = [{ name: "Gallery", path: "/gallery" }];

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        index="04 / 05"
        eyebrow="Gallery"
        title={
          <>
            A record of care,{" "}
            <em className="italic-accent">in moments.</em>
          </>
        }
        intro="Photographs can hold what a report cannot: a glance, a shared table, the ordinary gestures that make dignity visible."
        aside={
          <div className="gallery-intro-note">
            <p className="micro-label">An honest gallery</p>
            <p>
              Every image will be an authorised photograph from Darpan Welfare
              Society, published with a truthful caption. The frames below are
              placeholders until those photographs are added.
            </p>
            <Link href="/contact" className="inline-link">
              Share a photograph
              <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
          </div>
        }
        breadcrumbs={breadcrumbs}
      />

      <section className="section gallery-section" aria-labelledby="gallery-title">
        <div className="shell">
          <div className="gallery-section__head">
            <h2 id="gallery-title" className="eyebrow">
              The visual archive
            </h2>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link gallery-instagram-link"
            >
              <Instagram size={16} aria-hidden="true" />
              See more on Instagram
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>

          <GalleryGrid items={galleryItems} />
        </div>
      </section>

      <ContactCta
        eyebrow="Add to the record"
        title={
          <>
            A photograph can be an act of{" "}
            <em className="italic-accent">witness.</em>
          </>
        }
        body="If you have authorised photographs from Darpan Welfare Society's work, we would be glad to hear from you. Every image added to the gallery must have a clear source, consent and an accurate caption."
        primaryLabel="Contact the organisation"
        secondaryLabel="Explore our work"
        secondaryHref="/work"
      />

      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, ...breadcrumbs]),
          webPageSchema({
            path: "/gallery",
            name: "Gallery — Darpan Welfare Society",
            description:
              "A photographic gallery of Darpan Welfare Society's community, care and social welfare work in Uttarakhand.",
            type: "ImageGallery",
          }),
        ]}
      />
    </>
  );
}
