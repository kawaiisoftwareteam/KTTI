import { aboutPageEn, aboutPageJp } from "@/i18n/aboutPage";

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
  page: typeof aboutPageEn | typeof aboutPageJp
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

export function getLeaders(lang: "en" | "jp" = "en"): LeaderProfile[] {
  return collectLeaders(lang === "jp" ? aboutPageJp : aboutPageEn);
}

export function getLeaderBySlug(
  slug: string,
  lang: "en" | "jp" = "en"
): LeaderProfile | undefined {
  return getLeaders(lang).find((leader) => leader.slug === slug);
}

export function getLeaderSlugs(): string[] {
  return getLeaders("en").map((leader) => leader.slug);
}
