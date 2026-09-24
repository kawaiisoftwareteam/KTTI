"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/** Old About submenu URL → /careers/ */
export default function LegacyCareersRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/careers/");
  }, [router]);
  return null;
}
