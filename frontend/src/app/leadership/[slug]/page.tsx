import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LeaderProfilePage from "@/components/LeaderProfilePage";
import { getLeaderBySlug, getLeaderSlugs } from "@/data/leaders";

const SITE_URL = "https://sswv.org";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getLeaderSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const leader = getLeaderBySlug(slug, "en");

  if (!leader) {
    return { title: "Leadership | KTTI" };
  }

  const title = `${leader.name} — ${leader.title} | KTTI Leadership`;
  const description = leader.bio.slice(0, 155);
  const url = `${SITE_URL}/leadership/${leader.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "profile",
      siteName: "Kawaii Tredmig Training Institute",
      ...(leader.image
        ? {
            images: [
              {
                url: leader.image,
                width: 600,
                height: 400,
                alt: leader.name,
              },
            ],
          }
        : {}),
    },
  };
}

export default async function LeadershipProfileRoute({ params }: PageProps) {
  const { slug } = await params;
  const leader = getLeaderBySlug(slug, "en");

  if (!leader) {
    notFound();
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: leader.name,
    jobTitle: leader.title,
    description: leader.bio,
    url: `${SITE_URL}/leadership/${leader.slug}`,
    ...(leader.image
      ? { image: `${SITE_URL}${leader.image}` }
      : {}),
    worksFor: {
      "@type": "EducationalOrganization",
      name: "Kawaii Tredmig Training Institute",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <LeaderProfilePage slug={slug} />
    </>
  );
}
