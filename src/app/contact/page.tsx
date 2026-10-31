import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { EditorialImage } from "@/components/ui/editorial-image";
import { Reveal } from "@/components/ui/reveal";
import {
  ArrowUpRight,
  Instagram,
  Mail,
  MapPin,
  Phone,
  WhatsApp,
} from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { ContactForm } from "@/components/contact/contact-form";
import { imageSlots } from "@/content/images";
import { siteConfig } from "@/content/site";
import { breadcrumbSchema, createMetadata, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description:
    "Contact Darpan Welfare Society in Roorkee, Uttarakhand. Find the publicly listed address, Instagram and enquiry form, and learn about partnership, volunteering and programme enquiries.",
  path: "/contact",
  image: "/og-image.png",
});

const breadcrumbs = [{ name: "Contact", path: "/contact" }];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        index="05 / 05"
        eyebrow="Contact"
        title={
          <>
            Begin with a{" "}
            <em className="italic-accent">conversation.</em>
          </>
        }
        intro="Questions, ideas, corrections and concerns are welcome. Tell us what you need and we will route your message as clearly as we can."
        aside={
          <div className="contact-intro-note">
            <p className="micro-label">A note on direct contact</p>
            <p>{siteConfig.contact.note}</p>
            <p>
              The address and Instagram profile shown here are publicly listed.
              Online form delivery is not yet active.
            </p>
          </div>
        }
        breadcrumbs={breadcrumbs}
      />

      <section className="section contact-main" aria-labelledby="contact-title">
        <div className="shell contact-main__grid">
          <div className="contact-details">
            <Reveal>
              <p className="eyebrow">Reach us</p>
              <h2 id="contact-title" className="display-md">
                We are{" "}
                <em className="italic-accent">listening.</em>
              </h2>
              <p className="contact-details__intro">
                Use the form for an enquiry, or reach the organisation through
                the public channels below. Please keep personal and sensitive
                information to a minimum.
              </p>
            </Reveal>

            <Reveal delay={70}>
              <dl className="contact-channels">
                <div className="contact-channel">
                  <dt>
                    <MapPin size={18} aria-hidden="true" />
                    Address
                    <span className="contact-channel__status">Publicly listed</span>
                  </dt>
                  <dd>
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                    <br />
                    {siteConfig.address.locality}, {siteConfig.address.region}{" "}
                    {siteConfig.address.postalCode}
                    <br />
                    {siteConfig.address.country}
                    <a
                      href={siteConfig.address.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-link contact-channel__link"
                    >
                      Open in Google Maps
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  </dd>
                </div>

                <div className="contact-channel">
                  <dt>
                    <Mail size={18} aria-hidden="true" />
                    Email
                    <span className="contact-channel__status contact-channel__status--pending">
                      Pending confirmation
                    </span>
                  </dt>
                  <dd>
                    {siteConfig.contact.email ? (
                      <a href={`mailto:${siteConfig.contact.email}`}>
                        {siteConfig.contact.email}
                      </a>
                    ) : (
                      <span className="contact-pending">
                        A public email address is being confirmed.
                      </span>
                    )}
                  </dd>
                </div>

                <div className="contact-channel">
                  <dt>
                    <Phone size={18} aria-hidden="true" />
                    Phone
                    <span className="contact-channel__status contact-channel__status--pending">
                      Pending confirmation
                    </span>
                  </dt>
                  <dd>
                    {siteConfig.contact.phone ? (
                      <a href={siteConfig.contact.phoneHref ?? undefined}>
                        {siteConfig.contact.phone}
                      </a>
                    ) : (
                      <span className="contact-pending">
                        A public phone number is being confirmed.
                      </span>
                    )}
                  </dd>
                </div>

                <div className="contact-channel">
                  <dt>
                    <WhatsApp size={18} aria-hidden="true" />
                    WhatsApp
                    <span className="contact-channel__status contact-channel__status--pending">
                      Pending confirmation
                    </span>
                  </dt>
                  <dd>
                    {siteConfig.contact.whatsapp ? (
                      <a
                        href={siteConfig.contact.whatsappHref ?? undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {siteConfig.contact.whatsapp}
                      </a>
                    ) : (
                      <span className="contact-pending">
                        A verified WhatsApp channel is not yet published.
                      </span>
                    )}
                  </dd>
                </div>

                <div className="contact-channel">
                  <dt>
                    <Instagram size={18} aria-hidden="true" />
                    Instagram
                    <span className="contact-channel__status">Public profile</span>
                  </dt>
                  <dd>
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {siteConfig.social.instagramHandle}
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={110}>
              <EditorialImage
                slot={imageSlots.contactImage}
                aspect="16 / 9"
                tone="linen"
                sizes="(max-width: 900px) 100vw, 44vw"
                caption={
                  <span>
                    The Darpan team
                    <br />
                    <span className="caption-muted">
                      Outside the office
                    </span>
                  </span>
                }
              />
            </Reveal>
          </div>

          <Reveal className="contact-form-column" delay={100}>
            <div className="contact-form-heading">
              <span className="micro-label">Send an enquiry</span>
              <h2 className="display-md">A place to start.</h2>
              <p>
                Share a question, an idea or a concern. Your message will only
                be delivered once a secure form service is connected to this
                site.
              </p>
            </div>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="contact-map" aria-labelledby="map-title">
        <div className="shell contact-map__grid">
          <Reveal className="contact-map__copy">
            <p className="eyebrow eyebrow--light">Find us</p>
            <h2 id="map-title" className="display-md">
              Roorkee,{" "}
              <em>Uttarakhand.</em>
            </h2>
            <address>
              {siteConfig.address.formatted}
            </address>
            <p>{siteConfig.address.sourceNote}</p>
            <a
              href={siteConfig.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost-light"
            >
              Open in Google Maps
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal className="contact-map__frame" delay={100}>
            <iframe
              src={siteConfig.address.mapEmbedUrl}
              title="Map showing the publicly listed location of Darpan Welfare Society in Krishna Nagar, Roorkee"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <span className="contact-map__label">
              Publicly listed location
            </span>
          </Reveal>
        </div>
      </section>

      <section
        className="section contact-support"
        id="support"
        aria-labelledby="support-title"
      >
        <div className="shell contact-support__grid">
          <Reveal>
            <p className="eyebrow">Support the mission</p>
            <h2 id="support-title" className="display-lg">
              There are many ways to{" "}
              <em className="italic-accent">take part.</em>
            </h2>
          </Reveal>
          <Reveal className="contact-support__copy" delay={80}>
            <p className="lead">
              Verified donation channels are not yet published. No payments are
              collected through this website, and no donation is implied by
              this page.
            </p>
            <p>
              If you would like to contribute your time, expertise, materials,
              professional support or a partnership idea, please contact the
              organisation. Once verified giving information is available, it
              will be published clearly.
            </p>
            <div className="contact-support__actions">
              <a href="#contact-form" className="btn btn--forest">
                Start a conversation
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                <Instagram size={16} aria-hidden="true" />
                Instagram
              </a>
            </div>
            <p className="source-note">
              Never make a donation to an unverified account or payment link
              presented in the organisation&apos;s name.
            </p>
          </Reveal>
        </div>
      </section>

      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, ...breadcrumbs]),
          webPageSchema({
            path: "/contact",
            name: "Contact Darpan Welfare Society",
            description:
              "Contact information and enquiry form for Darpan Welfare Society, a social welfare organisation in Roorkee, Uttarakhand.",
            type: "ContactPage",
          }),
        ]}
      />
    </>
  );
}
