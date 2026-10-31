import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/page-intro";
import { JsonLd } from "@/components/ui/json-ld";
import { ArrowUpRight } from "@/components/ui/icons";
import { siteConfig } from "@/content/site";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy",
  description:
    "A plain-language privacy note for the Darpan Welfare Society website, covering the enquiry form, embedded map and outbound social links.",
  path: "/privacy",
});

const breadcrumbs = [{ name: "Privacy", path: "/privacy" }];

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        index="Info"
        eyebrow="Website privacy"
        title={
          <>
            Privacy, without the{" "}
            <em className="italic-accent">fine print.</em>
          </>
        }
        intro="This note explains what happens to information when you use this website. It is written to be understood, and it will be updated as the site's services change."
        aside={
          <div className="intro-fact-list">
            <div>
              <span className="micro-label">Last reviewed</span>
              <span>31 October 2026</span>
            </div>
            <div>
              <span className="micro-label">Website analytics</span>
              <span>None currently in use</span>
            </div>
            <div>
              <span className="micro-label">Enquiry delivery</span>
              <span>Not yet connected</span>
            </div>
          </div>
        }
        breadcrumbs={breadcrumbs}
      />

      <section className="section privacy-page">
        <div className="shell privacy-page__grid">
          <nav className="privacy-nav" aria-label="Privacy note contents">
            <span className="micro-label">On this page</span>
            <a href="#what-we-collect">What is collected</a>
            <a href="#contact-form">Contact form</a>
            <a href="#third-parties">Third-party services</a>
            <a href="#your-choice">Your choices</a>
            <a href="#questions">Questions</a>
          </nav>

          <div className="privacy-content">
            <section id="what-we-collect" aria-labelledby="collect-title">
              <p className="micro-label">01</p>
              <h2 id="collect-title" className="display-sm">
                What this website collects
              </h2>
              <p>
                This website does not currently use analytics, advertising
                pixels or an account system. It does not set its own tracking
                cookies and does not store personal data in a database.
              </p>
              <p>
                Basic technical information may be processed by the hosting
                provider when a page is requested, as is normal for any
                website. That processing is governed by the host&apos;s own
                policies.
              </p>
            </section>

            <section id="contact-form" aria-labelledby="form-title">
              <p className="micro-label">02</p>
              <h2 id="form-title" className="display-sm">
                The contact form
              </h2>
              <p>
                The website does not currently have a connected form delivery
                service. When the form is not connected, no message is sent and
                no information entered into the form is stored by this site.
              </p>
              <p>
                If a secure form service is connected in future, this note will
                be updated before the form is used to collect personal
                information. The message, name and contact details you provide
                would be used only to respond to your enquiry. Please avoid
                sending sensitive personal or beneficiary information through
                the form.
              </p>
            </section>

            <section id="third-parties" aria-labelledby="third-party-title">
              <p className="micro-label">03</p>
              <h2 id="third-party-title" className="display-sm">
                Third-party services and links
              </h2>
              <p>
                This site embeds a Google Map to show the organisation&apos;s
                publicly listed location. When the map loads, Google may
                receive technical information about your browser or device,
                such as your IP address. Google&apos;s own privacy terms apply
                to that service.
              </p>
              <p>
                Links to Instagram and Google Maps take you to services outside
                this website. Their privacy policies apply once you leave these
                pages.
              </p>
            </section>

            <section id="your-choice" aria-labelledby="choice-title">
              <p className="micro-label">04</p>
              <h2 id="choice-title" className="display-sm">
                Your choices
              </h2>
              <p>
                You can browse this website without submitting personal
                information. If you use an external service such as Instagram or
                Google Maps, its privacy settings and controls apply.
              </p>
              <p>
                If you have sent personal information to the organisation and
                would like to ask about it, please contact the organisation
                through the verified channels once they are published. This
                note does not create a separate data-controller relationship
                with any third party.
              </p>
            </section>

            <section id="questions" aria-labelledby="privacy-questions-title">
              <p className="micro-label">05</p>
              <h2 id="privacy-questions-title" className="display-sm">
                Questions
              </h2>
              <p>
                If you have a question about this website, please{" "}
                <Link href="/contact" className="inline-link">
                  use the contact page
                  <ArrowUpRight size={13} aria-hidden="true" />
                </Link>
                . This is a plain-language website note rather than a
                substitute for a formally adopted organisational privacy
                policy.
              </p>
            </section>

            <p className="privacy-page__source">
              This website is operated for {siteConfig.name}. The publicly
              listed address can be found on the contact page.
            </p>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          ...breadcrumbs,
        ])}
      />
    </>
  );
}
