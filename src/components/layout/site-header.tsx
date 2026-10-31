"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/logo";
import { ArrowUpRight, Close, Menu } from "@/components/ui/icons";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

const navItems = siteConfig.navigation;

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const isHome = pathname === "/";
  const overlay = isHome && !isScrolled && !isOpen;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const body = document.body;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    // Move focus once the overlay has left its inert state. Waiting a frame
    // also keeps the focus change reliable after the opening animation starts.
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 30);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        window.setTimeout(() => toggleRef.current?.focus(), 20);
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    window.setTimeout(() => toggleRef.current?.focus(), 20);
  };

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "site-header",
          isScrolled && "is-scrolled",
          isOpen && "is-menu-open",
        )}
        data-overlay={overlay ? "true" : "false"}
      >
        <div className="shell site-header__inner">
          <Logo />

          <nav className="site-nav desktop-only" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "site-nav__link",
                  item.href === "/contact" && "site-nav__link--contact",
                )}
                aria-current={isCurrent(item.href) ? "page" : undefined}
              >
                {item.label}
                {item.href === "/contact" && (
                  <ArrowUpRight size={13} aria-hidden="true" />
                )}
              </Link>
            ))}
          </nav>

          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label="Open navigation menu"
            onClick={() => setIsOpen(true)}
          >
            <span className="menu-toggle__label">Menu</span>
            <Menu size={23} />
          </button>
        </div>
      </header>

      <div
        ref={panelRef}
        id="mobile-navigation"
        className={cn("mobile-nav", isOpen && "is-open")}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
      >
        <div className="shell mobile-nav__top">
          <Logo />
          <button
            ref={closeRef}
            type="button"
            className="mobile-nav__close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <Close size={24} />
          </button>
        </div>

        <div className="shell mobile-nav__body">
          <nav className="mobile-nav__links" aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-nav__link"
                aria-current={isCurrent(item.href) ? "page" : undefined}
                onClick={closeMenu}
              >
                <span className="mobile-nav__number">
                  0{index + 1}
                </span>
                <span>{item.label}</span>
                <ArrowUpRight size={21} aria-hidden="true" />
              </Link>
            ))}
          </nav>

          <div className="mobile-nav__footer">
            <div>
              <p className="micro-label">Find us</p>
              <p>{siteConfig.address.locality}, {siteConfig.address.region}</p>
            </div>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-link--light"
            >
              {siteConfig.social.instagramHandle}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
