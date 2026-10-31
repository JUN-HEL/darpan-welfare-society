import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/ui/icons";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <div className="shell not-found__grid">
        <div className="not-found__number" aria-hidden="true">
          404
        </div>

        <div className="not-found__copy">
          <p className="eyebrow">Page not found</p>
          <h1 id="not-found-title" className="display-lg">
            This path has wandered{" "}
            <em className="italic-accent">off the map.</em>
          </h1>
          <p>
            The page may have moved, the link may be incomplete, or the content
            may still be under preparation. You can return home, explore the
            work or begin a conversation.
          </p>
          <div className="not-found__actions">
            <Link href="/" className="btn btn--forest">
              Back home
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link href="/work" className="btn btn--outline">
              Explore our work
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <p className="not-found__contact">
            Looking for something specific?{" "}
            <Link href="/contact" className="inline-link">
              Contact {siteConfig.shortName}
              <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
