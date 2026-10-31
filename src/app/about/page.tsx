import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/page-intro";
import { EditorialImage } from "@/components/ui/editorial-image";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRight, QuoteMark } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { ContactCta } from "@/components/sections/contact-cta";
import { imageSlots } from "@/content/images";
import { siteConfig } from "@/content/site";
import { approachSteps, coreValues } from "@/content/work";
import {
  breadcrumbSchema,
  createMetadata,
  webPageSchema,
} from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Darpan Welfare Society, a social welfare organisation based in Uttarakhand. Discover our purpose, mission, vision, values and community-led approach.",
  path: "/about",
  image: "/og-image.png",
});

const breadcrumbs = [{ name: "About Us", path: "/about" }];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        index="02 / 05"
        eyebrow="About the society"
        title={
          <>
            A mirror held up to what is{" "}
            <em className="italic-accent">possible.</em>
          </>
        }
        intro="Darpan means mirror. In a community, a mirror can show what is already there — and what becomes possible when people are seen with dignity, care and respect."
        aside={
          <div className="intro-fact-list">
            <div>
              <span className="micro-label">Based in</span>
              <span>Roorkee, Uttarakhand</span>
            </div>
            <div>
              <span className="micro-label">Established</span>
              <span>{siteConfig.established}</span>
            </div>
            <div>
              <span className="micro-label">Purpose</span>
              <span>Social welfare & community service</span>
            </div>
          </div>
        }
        breadcrumbs={breadcrumbs}
      />

      <section className="section about-who" aria-labelledby="who-title">
        <div className="shell">
          <div className="section-rail">
            <span className="micro-label">01 / Who we are</span>
            <span className="section-rail__note">Rooted in Uttarakhand</span>
          </div>

          <div className="about-who__grid">
            <Reveal className="about-who__copy">
              <p className="eyebrow">Who we are</p>
              <h2 id="who-title" className="display-lg">
                A society built on the belief that{" "}
                <em className="italic-accent">every life matters.</em>
              </h2>
              <p className="lead">
                Darpan Welfare Society is a social welfare organisation based
                in Uttarakhand, India. It brings people and partners together
                around care, dignity, opportunity and community-led change.
              </p>
              <div className="body-copy">
                <p>
                  Our work is shaped by the understanding that community life
                  is interconnected. A person&apos;s health is connected to
                  their security, their learning to their livelihood, and their
                  present to the environment they will pass on.
                </p>
                <p>
                  That is why our areas of focus span the many dimensions of
                  social welfare — from healthcare and education to dignified
                  ageing, animal welfare, rural development and humanitarian
                  response.
                </p>
              </div>
            </Reveal>

            <Reveal className="about-who__visual" delay={100}>
              <EditorialImage
                slot={imageSlots.aboutWho}
                aspect="4 / 5"
                tone="clay"
                sizes="(max-width: 900px) 100vw, 44vw"
                caption={
                  <span>
                    A community plantation
                    <br />
                    <span className="caption-muted">Working together</span>
                  </span>
                }
                captionAside={<span className="micro-label">01 / 03</span>}
              />
              <p className="about-who__side-note">
                Established in {siteConfig.established}, Darpan works from
                Roorkee, serving a broad social welfare purpose.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section about-story" aria-labelledby="story-title">
        <div className="shell">
          <div className="section-rail">
            <span className="micro-label">02 / Our story</span>
            <span className="section-rail__note">A purpose in progress</span>
          </div>

          <div className="about-story__grid">
            <Reveal className="about-story__heading">
              <p className="eyebrow">Our story</p>
              <h2 id="story-title" className="display-lg">
                A public beginning in{" "}
                <em className="italic-accent">{siteConfig.established}.</em>
              </h2>
              <QuoteMark size={38} aria-hidden="true" />
              <p className="about-story__pullquote">
                The mirror is not only for looking back. It is for imagining
                what comes next.
              </p>
            </Reveal>

            <Reveal className="about-story__text" delay={80}>
              <div className="body-copy body-copy--large">
                <p>
                  Darpan Welfare Society began its public journey in{" "}
                  {siteConfig.established}. Its purpose has remained centred on
                  social welfare and community service in Uttarakhand: caring
                  for people, strengthening opportunity and encouraging a more
                  compassionate society.
                </p>
                <p>
                  Rather than invent a narrative of milestones, this website
                  grows as the organisation&apos;s own record grows. The
                  programmes, photographs and stories shared here will carry
                  the context, consent and verification they deserve.
                </p>
                <p>
                  What can be said with clarity is this: the organisation
                  exists to be useful to people and places that need care,
                  attention and a fairer share of possibility.
                </p>
              </div>
              <p className="source-note">
                Publicly listed since {siteConfig.established}. Further
                organisational milestones will be published when confirmed.
              </p>
            </Reveal>
          </div>

          <div className="about-story__gallery">
            <Reveal>
              <EditorialImage
                slot={imageSlots.aboutStoryTall}
                aspect="3 / 4"
                tone="linen"
                sizes="(max-width: 900px) 100vw, 34vw"
                caption={
                  <span>
                    A sapling, planted
                    <br />
                    <span className="caption-muted">Environment</span>
                  </span>
                }
              />
            </Reveal>
            <Reveal delay={80}>
              <EditorialImage
                slot={imageSlots.aboutStoryWide}
                aspect="16 / 10"
                tone="forest"
                sizes="(max-width: 900px) 100vw, 58vw"
                caption={
                  <span>
                    A women&apos;s programme
                    <br />
                    <span className="caption-muted">Community gathering</span>
                  </span>
                }
                captionAside={<span className="micro-label">02 / 03</span>}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section about-purpose" aria-labelledby="purpose-title">
        <div className="shell">
          <div className="section-rail section-rail--light">
            <span className="micro-label">03 / Mission & vision</span>
            <span className="section-rail__note">The direction of the work</span>
          </div>

          <div className="about-purpose__intro">
            <Reveal>
              <p className="eyebrow eyebrow--light">What guides us</p>
              <h2 id="purpose-title" className="display-lg">
                Care, turned into{" "}
                <em>intention.</em>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p>
                Our mission describes what we do. Our vision describes the
                future that makes the work worth doing.
              </p>
            </Reveal>
          </div>

          <div className="about-purpose__grid">
            <Reveal>
              <span className="purpose-number">01</span>
              <h3>Our mission</h3>
              <p>
                To work alongside people and communities towards dignity, care,
                opportunity and a more compassionate society — with particular
                attention to those facing exclusion.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <span className="purpose-number">02</span>
              <h3>Our vision</h3>
              <p>
                A tomorrow in which every person can participate in community
                life with safety, agency and hope, and the natural world that
                sustains us is cared for in turn.
              </p>
            </Reveal>
          </div>

          <div className="about-values">
            <div className="about-values__heading">
              <span className="micro-label">Our core values</span>
              <h3>The principles behind the practice.</h3>
            </div>
            <ol>
              {coreValues.map((value, index) => (
                <li key={value.name}>
                  <span className="about-values__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4>{value.name}</h4>
                  <p>{value.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section about-approach" aria-labelledby="approach-title">
        <div className="shell">
          <div className="section-rail">
            <span className="micro-label">04 / Our approach</span>
            <span className="section-rail__note">How we choose to work</span>
          </div>

          <div className="about-approach__grid">
            <div className="about-approach__sticky">
              <Reveal>
                <p className="eyebrow">Our approach</p>
                <h2 id="approach-title" className="display-lg">
                  Listen. Learn.{" "}
                  <em className="italic-accent">Act with care.</em>
                </h2>
                <p className="about-approach__intro">
                  Good intentions are not enough. The way work is done matters
                  as much as the outcome we hope to see.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <EditorialImage
                  slot={imageSlots.aboutApproach}
                  aspect="4 / 3"
                  tone="sand"
                  sizes="(max-width: 900px) 100vw, 44vw"
                  caption={
                    <span>
                      Planting together
                      <br />
                      <span className="caption-muted">Community effort</span>
                    </span>
                  }
                />
              </Reveal>
            </div>

            <ol className="approach-list">
              {approachSteps.map((step, index) => (
                <li key={step.title}>
                  <span className="approach-list__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="about-approach__footnote">
            <p>
              This website does not claim leadership details, registration
              credentials or impact figures that have not been independently
              confirmed. If you are looking for organisational information,
              please{" "}
              <Link href="/contact" className="inline-link">
                contact us
                <ArrowUpRight size={13} aria-hidden="true" />
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <ContactCta />

      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, ...breadcrumbs]),
          webPageSchema({
            path: "/about",
            name: "About Darpan Welfare Society",
            description:
              "The purpose, mission, values and approach of Darpan Welfare Society, a social welfare organisation in Uttarakhand.",
            type: "AboutPage",
          }),
        ]}
      />
    </>
  );
}
