"use client";

import React from "react";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import JapanBanner from "@/components/JapanBanner";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import { useApplyModal } from "@/contexts/ApplyModalContext";

export default function Home() {
  const { openApply } = useApplyModal();

  return (
    <>
      <Hero onOpenApply={() => openApply()} />
      <Introduction onOpenApply={() => openApply()} />
      <JapanBanner onOpenApply={() => openApply()} />
      <StatsSection />
      <Testimonials />
      <FaqSection />
      <FinalCta onOpenApply={() => openApply()} />
    </>
  );
}
