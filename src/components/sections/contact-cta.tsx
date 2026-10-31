import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "@/components/ui/icons";

interface ContactCtaProps {
  eyebrow?: string;
  title?: ReactNode;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function ContactCta({
  eyebrow = "Continue the conversation",
  title = (
    <>
      There is always a way to{" "}
      <em className="italic-accent">take part.</em>
    </>
  ),
  body = "Whether you have a question, an idea for partnership, time to offer or simply want to understand the work better, we would like to hear from you.",
  primaryLabel = "Contact Us",
  primaryHref = "/contact",
  secondaryLabel = "Explore Our Work",
  secondaryHref = "/work",
}: ContactCtaProps) {
  return (
    <section className="closing-cta" aria-labelledby="closing-cta-title">
      <div className="shell closing-cta__grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id="closing-cta-title" className="display-lg">
            {title}
          </h2>
        </div>
        <div className="closing-cta__aside">
          <p>{body}</p>
          <div className="closing-cta__actions">
            <Link href={primaryHref} className="btn btn--forest">
              {primaryLabel}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href={secondaryHref} className="btn btn--outline">
              {secondaryLabel}
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
