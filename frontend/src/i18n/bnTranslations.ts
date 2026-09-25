import { aboutPageBn } from "./aboutPage";
import { translations } from "./translations";

export type EnTranslations = (typeof translations)["en"];

/** Bangla pack — spreads EN, overrides high-traffic UI chrome */
export const bnTranslations = {
  ...translations.en,
  aboutPage: aboutPageBn as EnTranslations["aboutPage"],
  nav: {
    ...translations.en.nav,
    home: "হোম",
    about: "আমাদের সম্পর্কে",
    aboutStory: "আমাদের গল্প",
    aboutLeadership: "নেতৃত্ব ও ব্যবস্থাপনা",
    aboutAccreditation: "স্বীকৃতি ও কমপ্লায়েন্স",
    careers: "Japan Job Placement",
    courses: "কোর্সসমূহ",
    sswPrograms: "SSW প্রোগ্রাম",
    japaneseHub: "জাপানিজ হাব",
    whyUs: "কেন আমরা",
    cv: "CV তৈরি করুন",
    contact: "যোগাযোগ",
    hotline: "হটলাইন",
    applyNow: "আবেদন করুন",
    apply: "আবেদন",
  },
  hero: {
    ...translations.en.hero,
    eyebrow: "ঢাকা · টোকিও · 未来へ",
    titleLine1: "জাপানের পথে",
    titleLine2: "যাত্রা এখান থেকে",
    subtitle:
      "মর্যাদাপূর্ণ ক্যারিয়ারের জন্য প্রিমিয়াম ভাষা ও SSW প্রশিক্ষণ।",
    ctaPrimary: "যাত্রা শুরু করুন",
    ctaSecondary: "আরও জানুন",
  },
  about: {
    ...translations.en.about,
    eyebrow: "প্রতিষ্ঠান পরিচিতি",
    title: "জাপানের",
    titleAccent: "সেতুবন্ধন",
    titleEnd: "ঢাকা থেকে",
    cta: "আবেদন করুন",
    learnMore: "আরও জানুন",
  },
  programs: {
    ...translations.en.programs,
    eyebrow: "একাডেমিক প্রোগ্রাম",
    title: "আপনার",
    titleAccent: "জাপান ক্যারিয়ার",
  },
  ssw: {
    ...translations.en.ssw,
    eyebrow: "SSW পাথওয়ে",
  },
  whyUs: {
    ...translations.en.whyUs,
    eyebrow: "কেন KTTI",
  },
  japaneseHub: {
    ...translations.en.japaneseHub,
    eyebrow: "জাপানি ভাষা শিক্ষা • 日本語教育",
    title: "জাপানি শিখুন।",
    titleAccent: "নতুন দুয়ার খুলুন।",
  },
  japanBanner: {
    ...translations.en.japanBanner,
  },
  faq: {
    ...translations.en.faq,
    eyebrow: "প্রশ্নোত্তর",
    h2: "সাধারণ জিজ্ঞাসা",
  },
  finalCta: {
    ...translations.en.finalCta,
    title: "প্রস্তুত তো?",
    cta: "এখনই আবেদন করুন",
  },
  footer: {
    ...translations.en.footer,
    quickNav: "দ্রুত নেভিগেশন",
    sswDisciplines: "SSW খাতসমূহ",
    contactCampus: "যোগাযোগ ও ক্যাম্পাস",
    authorized: "অনুমোদিত SSW প্রস্তুতি ও JLPT প্রশিক্ষণ কেন্দ্র",
    copyright: "© ২০২৬ কাওয়াই ট্রেডমিগ ট্রেনিং ইনস্টিটিউট। সর্বস্বত্ব সংরক্ষিত।",
    contactHeading: "যোগাযোগ",
    locationsHeading: "আমাদের অবস্থান",
    scrollTopAria: "উপরে যান",
    navLinks: [
      { label: "হোম", href: "/" },
      { label: "আমাদের সম্পর্কে", href: "/about/" },
      { label: "নেতৃত্ব", href: "/leadership/" },
      { label: "Japan Job Placement", href: "/careers/" },
      { label: "কোর্সসমূহ", href: "/courses/" },
      { label: "SSW রোডম্যাপ", href: "/ssw/" },
      { label: "জাপানিজ একাডেমি", href: "/japanese/" },
      { label: "কেন আমরা", href: "/why-us/" },
      { label: "যোগাযোগ", href: "/contact/" },
    ],
  },
  applyModal: {
    ...translations.en.applyModal,
    eyebrow: "ভর্তি ও ক্যারিয়ার কাউন্সেলিং",
    title: "কাওয়াই ট্রেডমিগে আবেদন করুন",
    subtitle:
      "জাপানে উচ্চ আয়ের ক্যারিয়ারের প্রথম ধাপ নিন।",
    closeAria: "বন্ধ করুন",
    successTitle: "আবেদন সফলভাবে জমা হয়েছে!",
    successBody:
      "ধন্যবাদ, {name}। আমাদের অ্যাডমিশন কাউন্সেলর ২৪ ঘণ্টার মধ্যে ফোন বা WhatsApp-এ যোগাযোগ করবেন।",
    connectWhatsApp: "এখনই WhatsApp-এ যোগাযোগ",
    closeWindow: "বন্ধ করুন",
    fullName: "পুরো নাম *",
    phone: "ফোন / WhatsApp *",
    email: "ইমেইল",
    targetProgram: "টার্গেট প্রোগ্রাম *",
    preferredIndustry: "পছন্দের খাত *",
    japaneseLevel: "বর্তমান জাপানি লেভেল",
    messageLabel: "অতিরিক্ত প্রশ্ন বা পটভূমি",
    submitting: "আবেদন জমা হচ্ছে...",
    submit: "আবেদন জমা দিন",
    whatsappInstant: "WhatsApp ইনস্ট্যান্ট",
    privacy:
      "🔒 আপনার তথ্য গোপন রাখা হয় এবং শুধুমাত্র ভর্তি কাউন্সেলিংয়ের জন্য ব্যবহৃত হয়।",
  },
  common: {
    applyNow: "এখনই আবেদন করুন",
    apply: "আবেদন করুন",
    hotline: "হটলাইন",
  },
} as unknown as EnTranslations;
