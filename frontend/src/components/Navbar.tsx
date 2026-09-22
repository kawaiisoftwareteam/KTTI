"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone, ChevronDown } from "lucide-react";
import DoorButton from "@/components/DoorButton";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

interface NavbarProps {
  onOpenApply: () => void;
}

type NavLink = {
  label: string;
  href: string;
  id: string;
  children?: { label: string; href: string }[];
};

export default function Navbar({ onOpenApply }: NavbarProps) {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

  const routeActiveId = (() => {
    if (!pathname || isHome) return null;
    if (pathname.startsWith("/about") || pathname.startsWith("/leadership"))
      return "about";
    if (pathname.startsWith("/courses")) return "programs";
    if (pathname.startsWith("/ssw")) return "ssw";
    if (pathname.startsWith("/japanese")) return "japanese";
    if (pathname.startsWith("/why-us")) return "why-us";
    if (pathname.startsWith("/cv")) return "cv";
    if (pathname.startsWith("/contact")) return "contact";
    return "";
  })();

  const [isScrolled, setIsScrolled] = useState(!isHome);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    routeActiveId ?? "home"
  );

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      setActiveSection(routeActiveId ?? "");
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "testimonials", "contact"];
      const scrollPos = window.scrollY + 140;

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
        { label: t.nav.aboutCareers, href: "/about/careers/" },
      ],
    },
    { label: t.nav.courses, href: "/courses/", id: "programs" },
    { label: t.nav.sswPrograms, href: "/ssw/", id: "ssw" },
    { label: t.nav.japaneseHub, href: "/japanese/", id: "japanese" },
    { label: t.nav.whyUs, href: "/why-us/", id: "why-us" },
    { label: t.nav.cv, href: "/cv/", id: "cv" },
    { label: t.nav.contact, href: "/contact/", id: "contact" },
  ];

  const LangToggle = ({ compact = false }: { compact?: boolean }) => (
    <div
      className={`flex items-center rounded-none border overflow-hidden shrink-0 ${
        compact
          ? "border-neutral-200"
          : isScrolled
            ? "border-neutral-200 bg-white/90"
            : "border-white/20 bg-black/35 backdrop-blur-md"
      }`}
      role="group"
      aria-label="Language"
    >
      {(["en", "jp"] as Lang[]).map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            className={`px-2.5 py-2 text-xs font-bold tracking-wider uppercase transition-colors ${
              active
                ? "bg-[#A71728] text-white"
                : compact
                  ? "text-neutral-600 hover:bg-neutral-100"
                  : isScrolled
                    ? "text-neutral-700 hover:bg-neutral-100"
                    : "text-white/80 hover:bg-white/10"
            }`}
            aria-pressed={active}
          >
            {code === "en" ? "EN" : "JP"}
          </button>
        );
      })}
    </div>
  );

  const linkClass = (isActive: boolean) =>
    `px-2 xl:px-3 2xl:px-4 py-2.5 font-semibold tracking-wide rounded-none transition-all duration-200 whitespace-nowrap ${
      lang === "jp" ? "text-[13px] xl:text-sm" : "text-sm xl:text-base"
    } ${
      isActive
        ? "bg-white text-[#A71728] shadow-sm font-bold"
        : isScrolled
          ? "text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100"
          : "text-white/90 hover:text-white hover:bg-white/10"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full py-4 transition-all duration-300">
      <div className="relative w-full flex items-center justify-between gap-3 px-4 sm:px-5 lg:px-6 min-w-0">
        <Link
          href="/"
          className="flex items-center select-none shrink-0 z-10"
          aria-label="KTTI — Kawaii Tredmig Training Institute"
        >
          <Image
            src={isScrolled ? "/ktti-logo.svg" : "/ktti-logo-light.svg"}
            alt="KTTI"
            width={400}
            height={132}
            priority
            className="h-12 sm:h-14 lg:h-16 w-auto"
            style={{ width: "auto" }}
          />
        </Link>

        <nav
          className={`hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center max-w-[min(100%,52rem)] xl:max-w-none ${
            lang === "jp" ? "gap-0" : "gap-0.5"
          } rounded-xl border transition-all duration-300 p-1.5 xl:p-2 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-2xl border-neutral-200/70 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              : "bg-black/35 backdrop-blur-md border-white/15"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            if (link.children) {
              return (
                <div
                  key={link.id}
                  className="relative"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <Link href={link.href} className={`${linkClass(isActive)} inline-flex items-center gap-1`}>
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                  </Link>
                  {aboutOpen && (
                    <div className="absolute top-full left-0 pt-2 min-w-[240px]">
                      <div className="bg-white border border-neutral-200 shadow-[0_12px_40px_rgba(0,0,0,0.12)] py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 hover:text-[#A71728]"
                            onClick={() => setAboutOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link key={link.id} href={link.href} className={linkClass(isActive)}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2 shrink-0 z-10 min-w-0">
          <LangToggle />

          <a
            href="https://wa.me/8801817047247"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 font-bold px-2.5 xl:px-3.5 py-2.5 rounded-none transition-all group whitespace-nowrap border ${
              lang === "jp" ? "text-sm" : "text-[15px]"
            } ${
              isScrolled
                ? "text-neutral-800 bg-white/90 hover:bg-white border-neutral-200"
                : "text-white bg-black/35 hover:bg-black/45 border-white/15 backdrop-blur-md"
            }`}
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
            </span>
            {t.nav.hotline}
          </a>

          <DoorButton
            onClick={onOpenApply}
            className={`group px-3 xl:px-4 py-2.5 font-bold tracking-wider uppercase shadow-md shadow-[#A71728]/25 whitespace-nowrap ${
              lang === "jp" ? "text-sm" : "text-[15px]"
            }`}
          >
            <span>{t.nav.applyNow}</span>
            <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </DoorButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LangToggle />
          <DoorButton
            onClick={onOpenApply}
            className="px-3 py-2 text-sm font-bold uppercase tracking-wider"
          >
            {t.nav.apply}
          </DoorButton>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2.5 rounded-none transition-colors border ${
              isScrolled
                ? "text-neutral-900 bg-white/90 border-neutral-200"
                : "text-white bg-white/10 border-white/20"
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden mx-4 mt-3 rounded-xl bg-white/95 backdrop-blur-3xl border border-white/80 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <div key={link.id}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 text-lg font-semibold rounded-lg transition-all flex items-center justify-between ${
                    activeSection === link.id
                      ? "bg-[#A71728]/10 text-[#A71728] font-bold"
                      : "text-neutral-800 hover:bg-neutral-100"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
                {link.children && (
                  <div className="ml-3 mb-2 border-l border-neutral-200 pl-3 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 px-3 text-sm font-medium text-neutral-600 hover:text-[#A71728]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 mt-2 border-t border-neutral-100 flex flex-col gap-2">
              <a
                href="https://wa.me/8801817047247"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-center font-bold text-base rounded-none flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#25D366]" />
                {t.nav.hotline}
              </a>

              <DoorButton
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="w-full py-3.5 font-bold text-base uppercase tracking-wider"
              >
                {t.nav.applyNow}
                <ArrowUpRight className="w-4 h-4" />
              </DoorButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
