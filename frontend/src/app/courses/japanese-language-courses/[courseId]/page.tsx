import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JapaneseCourseDetailPage from "@/components/JapaneseCourseDetailPage";
import {
  getJapaneseCourseById,
  JAPANESE_COURSE_IDS,
  JAPANESE_COURSE_PACKAGES,
  japaneseCoursePath,
  type JapaneseCourseId,
} from "@/data/japaneseCourseRegistrations";

type PageProps = {
  params: Promise<{ courseId: string }>;
};

export function generateStaticParams() {
  return JAPANESE_COURSE_IDS.map((courseId) => ({ courseId }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { courseId } = await params;
  const course = getJapaneseCourseById(courseId);
  if (!course) {
    return { title: "কোর্স পাওয়া যায়নি | KTTI" };
  }

  const url = `https://sswv.org${japaneseCoursePath(course.id)}`;
  return {
    title: `${course.title} | KTTI`,
    description: course.intro.slice(0, 155),
    alternates: { canonical: url },
    openGraph: {
      title: `${course.title} | KTTI`,
      description: course.intro.slice(0, 155),
      url,
      type: "website",
      siteName: "Kawaii Training Institute",
    },
  };
}

export default async function JapaneseCourseIdPage({ params }: PageProps) {
  const { courseId } = await params;
  const course = getJapaneseCourseById(courseId);
  if (!course) notFound();

  const courseIndex = JAPANESE_COURSE_PACKAGES.findIndex(
    (p) => p.id === (courseId as JapaneseCourseId)
  );

  return (
    <JapaneseCourseDetailPage course={course} courseIndex={courseIndex} />
  );
}
