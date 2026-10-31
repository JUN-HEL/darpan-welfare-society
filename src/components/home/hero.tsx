import Link from "next/link";
import type { CSSProperties } from "react";
import { EditorialImage } from "@/components/ui/editorial-image";
import { ArrowDown, ArrowRight, ArrowUpRight } from "@/components/ui/icons";
import { imageSlots } from "@/content/images";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="home-hero-title">
      <div className="hero__media">
        <EditorialImage
          slot={imageSlots.homeHero}
          fill
          priority
          sizes="100vw"
          tone="forest"
          variant="corner"
          indexLabel="Hero / 01"
          overlay={<span className="hero__scrim" aria-hidden="true" />}
        />
      </div>

      <div className="shell hero__content">
        <div
          className="hero__meta hero-enter"
          style={{ "--enter-delay": "80ms" } as CSSProperties}
        >
          <span>Social welfare society</span>
          <span>{siteConfig.location.line}</span>
          <span>Est. {siteConfig.established}</span>
        </div>

        <div className="hero__main">
          <p
            className="eyebrow eyebrow--light hero-enter"
            style={{ "--enter-delay": "160ms" } as CSSProperties}
          >
            For people. For possibility.
          </p>

          <h1
            id="home-hero-title"
            className="hero__title hero-enter"
            style={{ "--enter-delay": "230ms" } as CSSProperties}
          >
            <span>For Humanity.</span>
            <span className="hero__title-accent">For Every Life.</span>
            <span className="hero__title-small">For A Better Tomorrow.</span>
          </h1>

          <div
            className="hero__lower hero-enter"
            style={{ "--enter-delay": "330ms" } as CSSProperties}
          >
            <p className="hero__lede">{siteConfig.supportingLine}</p>

            <div className="hero__actions">
              <Link href="/work" className="btn btn--cream">
                Discover Our Work
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/contact" className="btn btn--ghost-light">
                Get In Touch
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div
          className="hero__footer hero-enter"
          style={{ "--enter-delay": "420ms" } as CSSProperties}
        >
          <a href="#introduction" className="scroll-cue">
            <span className="scroll-cue__line" aria-hidden="true" />
            <span>Scroll to discover</span>
            <ArrowDown size={15} aria-hidden="true" />
          </a>
          <p className="hero__photo-note">
            Photographs from Darpan Welfare Society&apos;s public work.
          </p>
        </div>
      </div>
    </section>
  );
}
