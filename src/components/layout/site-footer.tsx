import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { ArrowUpRight, Instagram, MapPin } from "@/components/ui/icons";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__masthead">
          <div>
            <Logo />
            <p className="site-footer__description">
              A social welfare organisation based in Uttarakhand, working
              towards a more compassionate, inclusive and empowered society.
            </p>
          </div>

          <div className="site-footer__social">
            <span className="micro-label">Follow the work</span>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-instagram"
            >
              <Instagram size={19} aria-hidden="true" />
              <span>{siteConfig.social.instagramHandle}</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="site-footer__columns">
          <div>
            <h2 className="footer-heading">Explore</h2>
            <nav aria-label="Footer navigation" className="footer-links">
              {siteConfig.footerNavigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="footer-heading">Visit</h2>
            <address className="footer-address">
              <MapPin size={17} aria-hidden="true" />
              <span>
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}, {siteConfig.address.locality}
                <br />
                {siteConfig.address.region} {siteConfig.address.postalCode}
                <br />
                {siteConfig.address.country}
              </span>
            </address>
            <p className="footer-note">{siteConfig.address.sourceNote}</p>
          </div>

          <div>
            <h2 className="footer-heading">Contact</h2>
            <p className="footer-note footer-note--larger">
              {siteConfig.contact.note}
            </p>
            <Link href="/contact" className="text-link text-link--light">
              Contact the organisation
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
            <p className="footer-note footer-note--spaced">
              For press, partnership, volunteering or programme enquiries,
              please use the contact page.
            </p>
          </div>
        </div>

        <div className="site-footer__wordmark" aria-hidden="true">
          <span>Darpan</span>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="site-footer__bottom-note">
            Photography will be published with the organisation&apos;s
            permission.
          </p>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
