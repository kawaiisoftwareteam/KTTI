"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import DoorButton from "@/components/DoorButton";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";
import { CONTACT_PHONES, WHATSAPP_URL } from "@/data/contact";

interface NavbarProps {
  onOpenApply: () => void;
}

type NavChild = { label: string; href: string; id?: string };

type NavLink = {
  label: string;
  href: string;
  id: string;
  children?: NavChild[];
};

export default function Navbar({ onOpenApply }: NavbarProps) {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

  const routeActiveId = (() => {
    if (!pathname || isHome) return null;
    if (pathname.startsWith("/about") || pathname.startsWith("/leadership"))
      return "about";
    if (pathname.startsWith("/careers")) return "careers";
    if (pathname.startsWith("/courses")) return "programs";
    if (pathname.startsWith("/ssw")) return "ssw";
    if (pathname.startsWith("/japanese")) return "japanese";
    if (pathname.startsWith("/why-us")) return "why-us";
    if (pathname.startsWith("/cv")) return "cv";
    if (pathname.startsWith("/contact")) return "contact";
    return "";
  })();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState(routeActiveId ?? "home");

  useEffect(() => {
    if (!isHome) {
      setActiveSection(routeActiveId ?? "");
      return;
    }

    const handleScroll = () => {
      const sections = ["home", "about", "testimonials", "contact"];
      const scrollPos = window.scrollY + 160;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome, routeActiveId]);

  useEffect(() => {
    if (!openMenu) return;
    const onDoc = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest?.("[data-nav-menu]")) return;
      setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [openMenu]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  const navLinks: NavLink[] = [
    { label: t.nav.home, href: "/", id: "home" },
    {
      label: t.nav.about,
      href: "/about/",
      id: "about",
      children: [
        { label: t.nav.aboutStory, href: "/about/" },
        { label: t.nav.aboutLeadership, href: "/leadership/" },
        { label: t.nav.aboutAccreditation, href: "/about/accreditation/" },
      ],
    },
    { label: t.nav.careers, href: "/careers/", id: "careers" },
    { label: t.nav.courses, href: "/courses/", id: "programs" },
    { label: t.nav.sswPrograms, href: "/ssw/", id: "ssw" },
    { label: t.nav.japaneseHub, href: "/japanese/", id: "japanese" },
    { label: t.nav.whyUs, href: "/why-us/", id: "why-us" },
    { label: t.nav.cv, href: "/cv/", id: "cv" },
    { label: t.nav.contact, href: "/contact/", id: "contact" },
  ];

  const LangToggle = ({ variant }: { variant: "dark" | "light" }) => (
    <div className="flex items-center" role="group" aria-label="Language">
      {(["en", "bn", "jp"] as Lang[]).map((code, i) => (
        <React.Fragment key={code}>
          {i > 0 && (
            <span
              className={
                variant === "dark" ? "text-white/20 px-0.5" : "text-neutral-300 px-0.5"
              }
            >
              /
            </span>
          )}
          <button
            type="button"
            onClick={() => setLang(code)}
            className={`px-1.5 py-0.5 text-xs font-semibold tracking-wider uppercase ${
              lang === code
                ? variant === "dark"
                  ? "text-white"
                  : "text-[#A71728]"
                : variant === "dark"
                  ? "text-white/45 hover:text-white"
                  : "text-neutral-500 hover:text-neutral-900"
            }`}
            aria-pressed={lang === code}
          >
            {code === "en" ? "EN" : code === "bn" ? "BN" : "JP"}
          </button>
        </React.Fragment>
      ))}
    </div>
  );

  const renderLinks = (onNavigate?: () => void) =>
    navLinks.map((link) => {
      const isActive = activeSection === link.id;
      const isOpen = openMenu === link.id;
      if (link.children) {
        return (
          <div key={link.id} className="relative shrink-0" data-nav-menu>
            <button
              type="button"
              className={`inline-flex items-center gap-1 px-3 xl:px-3.5 py-2 text-sm xl:text-[15px] font-medium whitespace-nowrap ${
                isActive
                  ? "text-[#A71728]"
                  : "text-neutral-600 hover:text-neutral-950"
              }`}
              aria-expanded={isOpen}
              aria-haspopup="menu"
              onClick={() => setOpenMenu(isOpen ? null : link.id)}
              onMouseEnter={() => setOpenMenu(link.id)}
            >
              {link.label}
              <ChevronDown
                className={`w-3.5 h-3.5 opacity-60 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <>
                <div
                  className="absolute left-0 right-0 top-full h-2 z-[60]"
                  onMouseEnter={() => setOpenMenu(link.id)}
                />
                <div
                  className="absolute top-full left-0 pt-1 min-w-[240px] z-[60]"
                  onMouseEnter={() => setOpenMenu(link.id)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <div
                    role="menu"
                    className="bg-white border border-neutral-200 shadow-[0_12px_40px_rgba(0,0,0,0.12)] py-1.5"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-[#A71728]"
                        onClick={() => {
                          setOpenMenu(null);
                          onNavigate?.();
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        );
      }
      return (
        <Link
          key={link.id}
          href={link.href}
          className={`relative shrink-0 px-3 xl:px-3.5 py-2 text-sm xl:text-[15px] font-medium whitespace-nowrap ${
            isActive ? "text-[#A71728]" : "text-neutral-600 hover:text-neutral-950"
          }`}
          onMouseEnter={() => setOpenMenu(null)}
          onClick={onNavigate}
        >
          {link.label}
          {isActive && (
            <span className="absolute left-2.5 right-2.5 -bottom-px h-[2px] bg-[#A71728]" />
          )}
        </Link>
      );
    });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="hidden lg:flex h-11 items-stretch justify-between bg-black/50 backdrop-blur-xl border-b border-white/10 text-sm">
        <div className="flex items-center gap-3 px-6 xl:px-8 text-white/70">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-white hover:text-white/80"
          >
            <Phone className="w-4 h-4 text-[#25D366]" />
            {CONTACT_PHONES[0]}
          </a>
          <span className="text-white/25">|</span>
          <span>Dhaka · Tokyo</span>
        </div>
        <div className="flex items-stretch">
          <div className="flex items-center px-4">
            <LangToggle variant="dark" />
          </div>
          <button
            type="button"
            onClick={onOpenApply}
            className="px-6 bg-[#A71728]/90 backdrop-blur-sm text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#A71728]"
          >
            {t.nav.applyNow}
          </button>
        </div>
      </div>

      <div className="h-16 sm:h-[4.25rem] flex items-center justify-between gap-4 px-4 sm:px-6 xl:px-8 bg-white/65 backdrop-blur-2xl border-b border-white/40">
        <Link
          href="/"
          className="flex items-center select-none shrink-0"
          aria-label="KTTI — Kawaii Tredmig Training Institute"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Image
            src="/ktti-logo.svg"
            alt="KTTI"
            width={400}
            height={132}
            priority
            className="h-9 sm:h-10 w-auto max-w-[42vw] object-contain object-left"
            style={{ width: "auto" }}
          />
        </Link>

        <nav className="hidden lg:flex flex-1 items-center justify-end min-w-0">
          {renderLinks()}
        </nav>

        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <LangToggle variant="light" />
          <DoorButton
            onClick={onOpenApply}
            className="hidden min-[400px]:inline-flex px-3 py-2 text-xs font-bold uppercase tracking-wider"
          >
            {t.nav.apply}
          </DoorButton>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="p-2 text-neutral-900 border border-neutral-200"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-200 bg-white">
          <div className="max-h-[min(80vh,calc(100dvh-5rem))] overflow-y-auto px-4 py-3">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <div key={link.id}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 text-[15px] font-medium ${
                      activeSection === link.id
                        ? "text-[#A71728]"
                        : "text-neutral-800"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-3 mb-2 border-l border-neutral-200 pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-2 text-sm text-neutral-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 py-3 border-t border-neutral-100 text-sm font-medium text-neutral-800 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#25D366]" />
                {t.nav.hotline} · {CONTACT_PHONES[0]}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
