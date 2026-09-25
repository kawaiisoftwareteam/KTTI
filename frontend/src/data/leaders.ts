import { aboutPageEn, aboutPageJp, aboutPageBn } from "@/i18n/aboutPage";
import type { Lang } from "@/i18n/translations";

export type LeaderRole = "executive" | "coo" | "partner";

export type LeaderProfile = {
  slug: string;
  name: string;
  title: string;
  bio: string;
  image?: string;
  role: LeaderRole;
  pullQuote?: string;
};

function collectLeaders(
  page: typeof aboutPageEn | typeof aboutPageJp | typeof aboutPageBn
): LeaderProfile[] {
  const executives: LeaderProfile[] = page.leadership.executives.map(
    (leader) => ({
      ...leader,
      role: "executive" as const,
    })
  );

  const coo: LeaderProfile = {
    slug: page.leadership.coo.slug,
    name: page.leadership.coo.name,
    title: page.leadership.coo.title,
    bio: page.leadership.coo.bio,
    image: page.leadership.coo.image,
    pullQuote: page.leadership.coo.pullQuote,
    role: "coo",
  };

  const partners: LeaderProfile[] = page.leadership.partners.members.map(
    (member) => ({
      ...member,
      role: "partner" as const,
    })
  );

  return [...executives, coo, ...partners];
}

function pageForLang(lang: Lang) {
  if (lang === "jp") return aboutPageJp;
  if (lang === "bn") return aboutPageBn;
  return aboutPageEn;
}

export function getLeaders(lang: Lang = "en"): LeaderProfile[] {
  return collectLeaders(pageForLang(lang));
}

export function getLeaderBySlug(
  slug: string,
  lang: Lang = "en"
): LeaderProfile | undefined {
  return getLeaders(lang).find((leader) => leader.slug === slug);
}

export function getLeaderSlugs(): string[] {
  return getLeaders("en").map((leader) => leader.slug);
}
