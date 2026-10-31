import Link from "next/link";
import { EditorialImage } from "@/components/ui/editorial-image";
import { Reveal } from "@/components/ui/reveal";
import {
  ArrowRight,
  ArrowUpRight,
  Instagram,
  QuoteMark,
} from "@/components/ui/icons";
import { imageSlots } from "@/content/images";
import { siteConfig } from "@/content/site";
import { coreValues } from "@/content/work";
import { FocusIndex } from "@/components/home/focus-index";

export function Introduction() {
  return (
    <section
      className="section introduction"
      id="introduction"
      aria-labelledby="introduction-title"
    >
      <div className="shell">
        <div className="section-rail">
          <span className="micro-label">01 / Introduction</span>
          <span className="section-rail__note">Darpan means mirror</span>
        </div>

        <div className="introduction__grid">
          <div className="introduction__copy">
            <Reveal>
              <p className="eyebrow">Who we are</p>
              <h2 id="introduction-title" className="display-lg">
                Where compassion meets{" "}
                <em className="italic-accent">action.</em>
              </h2>
            </Reveal>

            <Reveal delay={90}>
              <p className="introduction__lead">
                Darpan Welfare Society is a social welfare organisation based
                in Uttarakhand. Our purpose is simple to say and demanding to
                practise: to make care useful, consistent and rooted in dignity.
              </p>
              <div className="introduction__body">
                <p>
                  Community life is connected. Learning is tied to livelihood,
                  health to dignity, and the environment to the future we share.
                  The organisation&apos;s work brings people and partners
                  together around those connections.
                </p>
                <p>
                  Established in {siteConfig.established}, Darpan is presented
                  here through its purpose, its areas of focus and the
                  photographs and records that can be responsibly shared.
                </p>
              </div>

              <Link href="/about" className="text-link">
                Read our story
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <Reveal className="introduction__visual" delay={120}>
            <EditorialImage
              slot={imageSlots.homeIntro}
              aspect="4 / 5"
              tone="linen"
              sizes="(max-width: 900px) 100vw, 48vw"
              caption={
                <span>
                  A health team at work
                  <br />
                  Darpan Welfare Society
                </span>
              }
              captionAside={<span className="micro-label">01 / 02</span>}
            />
            <div className="introduction__stamp" aria-hidden="true">
              <svg viewBox="0 0 120 120" fill="none">
                <defs>
                  <path
                    id="stamp-circle"
                    d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                  />
                </defs>
                <text>
                  <textPath href="#stamp-circle">
                    DARPAN WELFARE SOCIETY · UTTARAKHAND ·
                  </textPath>
                </text>
                <path
                  d="M47 72V54.5C47 47.044 52.82 41 60 41s13 6.044 13 13.5V72"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <circle cx="60" cy="62" r="2.5" fill="currentColor" />
              </svg>
            </div>
            <div className="introduction__detail">
              <EditorialImage
                slot={imageSlots.homeIntroDetail}
                aspect="1 / 1"
                tone="clay"
                sizes="(max-width: 900px) 40vw, 18vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function MissionAndVision() {
  return (
    <section
      className="section mission-section"
      aria-labelledby="mission-title"
    >
      <div className="shell">
        <div className="section-rail section-rail--light">
          <span className="micro-label">02 / Purpose</span>
          <span className="section-rail__note">What holds the work together</span>
        </div>

        <div className="mission-section__statement">
          <Reveal>
            <p className="eyebrow eyebrow--light">Mission & vision</p>
            <h2 id="mission-title" className="display-lg">
              A society where dignity is not a{" "}
              <em>privilege.</em>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p>
              We understand social welfare as the patient work of making
              everyday life more humane — for people at every stage of life,
              for communities and for the natural world we share.
            </p>
          </Reveal>
        </div>

        <div className="mission-grid">
          <Reveal className="mission-grid__primary">
            <p className="micro-label">Our mission</p>
            <h3>
              To stand alongside people and communities in building a life of
              dignity, care and possibility.
            </h3>
            <p>
              We work towards a more compassionate and inclusive society, with
              particular attention to people and communities facing exclusion,
              hardship or a lack of opportunity.
            </p>
          </Reveal>

          <Reveal className="mission-grid__secondary" delay={90}>
            <p className="micro-label">Our vision</p>
            <h3>
              A tomorrow in which every person can take part in community life
              with safety, agency and hope.
            </h3>
            <p>
              A future shaped by mutual responsibility, where care is practical
              and opportunity is not determined by circumstance.
            </p>
          </Reveal>
        </div>

        <div className="values">
          <div className="values__heading">
            <span className="micro-label">What guides us</span>
            <h3>Core values</h3>
          </div>
          <ul className="values__list">
            {coreValues.map((value, index) => (
              <li key={value.name}>
                <span className="values__number">
                  0{index + 1}
                </span>
                <span className="values__name">{value.name}</span>
                <span className="values__description">{value.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function WorkInAction() {
  return (
    <section
      className="section action-section"
      aria-labelledby="action-title"
    >
      <div className="shell">
        <div className="section-rail">
          <span className="micro-label">04 / Our work in action</span>
          <span className="section-rail__note">A visual field record</span>
        </div>

        <div className="action-section__header">
          <Reveal>
            <p className="eyebrow">From the field</p>
            <h2 id="action-title" className="display-lg">
              The work is{" "}
              <em className="italic-accent">human.</em>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p>
              A shared table. A room full of attention. The practical gestures
              that turn compassion into something a person can feel. These
              photographs from Darpan&apos;s work are accompanied by clear,
              truthful captions.
            </p>
            <Link href="/gallery" className="text-link">
              View the full gallery
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="action-grid">
          <Reveal className="action-grid__feature">
            <EditorialImage
              slot={imageSlots.homeActionFeature}
              aspect="4 / 5"
              tone="clay"
              sizes="(max-width: 900px) 100vw, 40vw"
              caption={
                <span>
                  A bag of essentials
                  <br />
                  <span className="caption-muted">Darpan Welfare Society</span>
                </span>
              }
              captionAside={<span className="micro-label">01 / 04</span>}
            />
          </Reveal>

          <div className="action-grid__middle">
            <Reveal delay={80}>
              <EditorialImage
                slot={imageSlots.homeActionTop}
                aspect="16 / 10"
                tone="sand"
                sizes="(max-width: 900px) 100vw, 28vw"
                caption={
                  <span>
                    A moment of recognition
                    <br />
                    <span className="caption-muted">School gathering</span>
                  </span>
                }
              />
            </Reveal>

            <Reveal delay={120}>
              <div className="action-note">
                <QuoteMark size={28} aria-hidden="true" />
                <p>
                  Care is often quiet. It is a listening ear, a skill passed on,
                  a place made welcome.
                </p>
                <span className="micro-label">Notes on dignity</span>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <EditorialImage
                slot={imageSlots.homeActionBottom}
                aspect="5 / 4"
                tone="forest"
                sizes="(max-width: 900px) 100vw, 28vw"
                caption={
                  <span>
                    A closer look
                    <br />
                    <span className="caption-muted">Eye screening</span>
                  </span>
                }
              />
            </Reveal>
          </div>

          <Reveal className="action-grid__wide" delay={100}>
            <EditorialImage
              slot={imageSlots.homeActionWide}
              aspect="21 / 8"
              tone="linen"
              sizes="100vw"
              caption={
                <span>
                  A community meeting
                  <br />
                  <span className="caption-muted">Uttarakhand</span>
                </span>
              }
              captionAside={<span className="micro-label">04 / 04</span>}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export { FocusIndex };

export function CallToAction() {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="cta-section__arch" aria-hidden="true">
        <svg viewBox="0 0 600 600" fill="none">
          <path
            d="M1 600V282C1 126.432 126.432 1 282 1s281 125.432 281 281v318"
            stroke="currentColor"
          />
          <path
            d="M80 600V301C80 189.543 170.318 99 282 99s202 90.543 202 202v299"
            stroke="currentColor"
            opacity=".45"
          />
        </svg>
      </div>

      <div className="shell cta-section__inner">
        <Reveal>
          <p className="eyebrow eyebrow--light">Take part</p>
          <h2 id="cta-title" className="display-lg">
            Be part of something{" "}
            <em>meaningful.</em>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p>
            Bring an idea, offer your time, begin a partnership or simply start
            a conversation. Meaningful change grows through people who choose to
            take part.
          </p>
          <div className="cta-section__actions">
            <Link href="/contact" className="btn btn--cream">
              Contact Us
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/contact#support" className="btn btn--ghost-light">
              Support Our Mission
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function InstagramSection() {
  return (
    <section
      className="section instagram-section"
      aria-labelledby="instagram-title"
    >
      <div className="shell instagram-section__grid">
        <Reveal className="instagram-section__copy">
          <p className="eyebrow">From Instagram</p>
          <h2 id="instagram-title" className="display-lg">
            The work,{" "}
            <em className="italic-accent">as it happens.</em>
          </h2>
          <p>
            Follow Darpan Welfare Society on Instagram for photographs, updates
            and moments from the organisation&apos;s public work.
          </p>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            <Instagram size={16} aria-hidden="true" />
            {siteConfig.social.instagramHandle}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal className="instagram-section__visual" delay={100}>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-frame"
            aria-label="Visit Darpan Welfare Society on Instagram"
          >
            <EditorialImage
              slot={imageSlots.homeInstagram}
              aspect="4 / 3"
              tone="sand"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <span className="instagram-frame__overlay">
              <Instagram size={26} aria-hidden="true" />
              <span>
                <strong>Follow the work</strong>
                <br />
                {siteConfig.social.instagramHandle}
              </span>
              <ArrowUpRight size={20} aria-hidden="true" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
