import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { PageIntro } from "@/components/ui/page-intro";
import { EditorialImage, type PlaceholderTone } from "@/components/ui/editorial-image";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRight } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { ContactCta } from "@/components/sections/contact-cta";
import { imageSlots } from "@/content/images";
import { siteConfig } from "@/content/site";
import { focusAreas, type FocusArea } from "@/content/work";
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Our Work",
  description:
    "Explore the areas of focus that shape Darpan Welfare Society's social welfare and community development work in Uttarakhand, from healthcare and education to livelihood and rural development.",
  path: "/work",
  image: "/og-image.png",
});

const breadcrumbs = [{ name: "Our Work", path: "/work" }];

const areaById = Object.fromEntries(
  focusAreas.map((area) => [area.id, area]),
) as Record<string, FocusArea>;

const indexById = Object.fromEntries(
  focusAreas.map((area, index) => [area.id, index]),
) as Record<string, number>;

function serialFor(area: FocusArea) {
  return String((indexById[area.id] ?? 0) + 1).padStart(2, "0");
}

interface AreaEntryProps {
  area: FocusArea;
  aspect?: string;
  tone?: PlaceholderTone;
  className?: string;
  compact?: boolean;
}

function AreaEntry({
  area,
  aspect = "4 / 5",
  tone = "linen",
  className,
  compact = false,
}: AreaEntryProps) {
  return (
    <Reveal className={cn("work-entry", compact && "work-entry--compact", className)}>
      <article id={area.id}>
        <div className="work-entry__media">
          <EditorialImage
            slot={imageSlots[area.imageKey]}
            aspect={aspect}
            tone={tone}
            sizes={compact ? "(max-width: 900px) 100vw, 30vw" : "(max-width: 900px) 100vw, 48vw"}
            caption={
              <span>
                {area.photoCaption ?? area.title}
                <br />
                <span className="caption-muted">
                  {area.photoCaption ? "Darpan Welfare Society" : "Photography pending"}
                </span>
              </span>
            }
            captionAside={
              <span className="micro-label">
                Focus / {serialFor(area)}
              </span>
            }
          />
        </div>
        <div className="work-entry__copy">
          <div className="work-entry__meta">
            <span>{serialFor(area)}</span>
            <span>Area of focus</span>
          </div>
          <h3>{area.title}</h3>
          <p>{area.description}</p>
        </div>
      </article>
    </Reveal>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  copy: string;
  id: string;
}) {
  return (
    <div className="work-section-heading">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id} className="display-lg">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <p>{copy}</p>
      </Reveal>
    </div>
  );
}

export default function WorkPage() {
  return (
    <>
      <PageIntro
        index="03 / 05"
        eyebrow="Our work"
        title={
          <>
            Care has many dimensions.{" "}
            <em className="italic-accent">So does the work.</em>
          </>
        }
        intro="Social welfare is connected. A child's learning, a family's livelihood, an elder's dignity and a community's environment all shape one another."
        aside={
          <div className="work-intro-note">
            <span className="micro-label">How to read this page</span>
            <p>
              The categories below are areas of focus. They are not a claim
              that every area is an active or completed programme. The
              photographs are drawn from Darpan&apos;s public work, and their
              captions describe only what is visible in the frame.
            </p>
          </div>
        }
        breadcrumbs={breadcrumbs}
      />

      <div className="shell">
        <Reveal className="work-hero-visual">
          <EditorialImage
            slot={imageSlots.workHero}
            aspect="21 / 8"
            tone="forest"
            sizes="100vw"
            variant="corner"
            caption={
              <span>
                An eye camp in progress
                <br />
                <span className="caption-muted">
                  A wider view / Eye camp
                </span>
              </span>
            }
            captionAside={
              <span className="micro-label">A wider view / Eye camp</span>
            }
          />
        </Reveal>
      </div>

      <nav className="work-index-nav" aria-label="Jump to an area of focus">
        <div className="shell">
          <div className="work-index-nav__head">
            <span className="micro-label">On this page</span>
            <span>11 dimensions of care</span>
          </div>
          <ol>
            {focusAreas.map((area) => (
              <li key={area.id}>
                <Link href={`#${area.id}`}>
                  <span>{serialFor(area)}</span>
                  {area.title}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <section
        className="section work-feature"
        aria-labelledby="livelihood-title"
      >
        <div className="shell">
          <div className="section-rail">
            <span className="micro-label">A publicly noted focus</span>
            <span className="section-rail__note">{serialFor(areaById["livelihood-development"])} / 11</span>
          </div>

          <div className="work-feature__grid">
            <Reveal className="work-feature__visual">
              <EditorialImage
                slot={imageSlots.workLivelihood}
                aspect="5 / 4"
                tone="clay"
                sizes="(max-width: 900px) 100vw, 54vw"
                caption={
                  <span>
                    A Darpan Welfare Society box
                    <br />
                    <span className="caption-muted">Community visit</span>
                  </span>
                }
                captionAside={<span className="micro-label">01 / 11</span>}
              />
            </Reveal>

            <Reveal className="work-feature__copy" delay={80}>
              <p className="status-note">
                <span aria-hidden="true" />
                Publicly noted area of work
              </p>
              <h2 id="livelihood-title">Livelihood Development</h2>
              <p className="lead">
                A livelihood is more than income. It is the ability to make
                choices, care for a family and take part fully in community
                life.
              </p>
              <p>
                Darpan&apos;s public organisation listing notes vocational
                training for minority youth as current work. We present that
                fact carefully: it is a starting point, not a full programme
                record, and it makes no claim about scale or outcomes.
              </p>
              <p className="source-note">
                Programme scope, locations and outcomes will be published when
                they can be verified and shared with consent.
              </p>
              <Link href="/contact" className="text-link">
                Ask about livelihood work
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="section work-pair"
        aria-labelledby="health-learning-title"
      >
        <div className="shell">
          <SectionHeading
            id="health-learning-title"
            eyebrow="Health & learning"
            title={
              <>
                Care begins with{" "}
                <em className="italic-accent">possibility.</em>
              </>
            }
            copy="Wellbeing and learning are closely tied. When health is supported and curiosity is welcomed, people have more room to shape their own lives."
          />

          <div className="work-pair__grid">
            <AreaEntry
              area={areaById["healthcare"]}
              aspect="4 / 5"
              tone="sand"
            />
            <AreaEntry
              area={areaById["education"]}
              aspect="16 / 11"
              tone="linen"
              className="work-pair__offset"
            />
          </div>
        </div>
      </section>

      <section className="work-principle" aria-label="A principle of our work">
        <div className="shell work-principle__inner">
          <span className="work-principle__number" aria-hidden="true">
            04
          </span>
          <p>
            Dignity is the thread that connects every part of the work.
          </p>
          <span className="work-principle__mark" aria-hidden="true">
            DWS
          </span>
        </div>
      </section>

      <section
        className="section work-generations"
        aria-labelledby="generations-title"
      >
        <div className="shell">
          <SectionHeading
            id="generations-title"
            eyebrow="Every stage of life"
            title={
              <>
                Dignity, at every{" "}
                <em className="italic-accent">stage.</em>
              </>
            }
            copy="A community is at its strongest when women, children and older people are all seen, heard and supported. These three areas belong together."
          />

          <div className="work-generations__grid">
            <AreaEntry
              area={areaById["women-empowerment"]}
              aspect="3 / 4"
              tone="clay"
              compact
            />
            <AreaEntry
              area={areaById["child-welfare"]}
              aspect="1 / 1"
              tone="sand"
              compact
              className="work-generations__offset"
            />
            <AreaEntry
              area={areaById["elderly-care"]}
              aspect="3 / 4"
              tone="forest"
              compact
            />
          </div>
        </div>
      </section>

      <section
        className="section work-rooted"
        aria-labelledby="rooted-title"
      >
        <div className="shell">
          <div className="section-rail section-rail--light">
            <span className="micro-label">People, animals & place</span>
            <span className="section-rail__note">The wider community</span>
          </div>

          <div className="work-rooted__heading">
            <Reveal>
              <p className="eyebrow eyebrow--light">Rooted in place</p>
              <h2 id="rooted-title" className="display-lg">
                A future that is{" "}
                <em>shared.</em>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p>
                Human welfare cannot be separated from the land, water and
                living world around us. These areas of focus carry that wider
                responsibility.
              </p>
            </Reveal>
          </div>

          <div className="work-rooted__grid">
            <AreaEntry
              area={areaById["animal-welfare"]}
              aspect="1 / 1"
              tone="linen"
              compact
              className="work-rooted__animal"
            />
            <AreaEntry
              area={areaById["rural-development"]}
              aspect="4 / 5"
              tone="clay"
              compact
              className="work-rooted__rural"
            />
            <AreaEntry
              area={areaById["environmental-protection"]}
              aspect="3 / 4"
              tone="sand"
              compact
              className="work-rooted__environment"
            />
          </div>
        </div>
      </section>

      <section
        className="section work-relief"
        aria-labelledby="relief-title"
      >
        <div className="shell">
          <SectionHeading
            id="relief-title"
            eyebrow="Care in difficult seasons"
            title={
              <>
                A steady presence when{" "}
                <em className="italic-accent">it matters.</em>
              </>
            }
            copy="Humanitarian relief and community development are both forms of neighbourly care — one responds to urgent need, the other builds the relationships that make a community resilient."
          />

          <div className="work-relief__grid">
            <AreaEntry
              area={areaById["humanitarian-relief"]}
              aspect="16 / 9"
              tone="forest"
              className="work-relief__entry"
            />
            <AreaEntry
              area={areaById["community-development"]}
              aspect="16 / 9"
              tone="sand"
              className="work-relief__entry"
            />
          </div>
        </div>
      </section>

      <ContactCta
        eyebrow="Work with us"
        title={
          <>
            A better tomorrow is{" "}
            <em className="italic-accent">shared work.</em>
          </>
        }
        body="If you work on one of these issues in Uttarakhand, want to offer your time or would like to explore a partnership, begin a conversation with Darpan Welfare Society."
        primaryLabel="Start a conversation"
        secondaryLabel="View the gallery"
        secondaryHref="/gallery"
      />

      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, ...breadcrumbs]),
          webPageSchema({
            path: "/work",
            name: "Our Work — Darpan Welfare Society",
            description:
              "Areas of focus spanning healthcare, education, women and child welfare, elderly care, animals, rural development, the environment, livelihood and humanitarian relief in Uttarakhand.",
            type: "CollectionPage",
          }),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Areas of focus — Darpan Welfare Society",
            numberOfItems: focusAreas.length,
            itemListElement: focusAreas.map((area, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: area.title,
              url: `${siteConfig.url}/work#${area.id}`,
            })),
          },
        ]}
      />
    </>
  );
}
