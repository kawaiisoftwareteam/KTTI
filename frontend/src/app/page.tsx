"use client";

import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import { useApplyModal } from "@/contexts/ApplyModalContext";

const SeminarPromoStrip = dynamic(
  () => import("@/components/SeminarPromoStrip"),
  { ssr: false }
);
const JapanBanner = dynamic(() => import("@/components/JapanBanner"), {
  ssr: false,
  loading: () => <div className="h-48 bg-neutral-100" aria-hidden />,
});
const StatsSection = dynamic(() => import("@/components/StatsSection"), {
  ssr: false,
  loading: () => <div className="h-40 bg-white" aria-hidden />,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
  loading: () => <div className="h-96 bg-neutral-50" aria-hidden />,
});
const HomeSeoContent = dynamic(() => import("@/components/HomeSeoContent"), {
  ssr: false,
});
const FinalCta = dynamic(() => import("@/components/FinalCta"), {
  ssr: false,
});

export default function Home() {
  const { openApply } = useApplyModal();

  return (
    <>
      <Hero onOpenApply={() => openApply()} />
      <SeminarPromoStrip />
      <Introduction onOpenApply={() => openApply()} />
      <JapanBanner onOpenApply={() => openApply()} />
      <StatsSection />
      <Testimonials />
      <HomeSeoContent onOpenApply={() => openApply()} />
      <FinalCta onOpenApply={() => openApply()} />
    </>
  );
}
