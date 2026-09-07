"use client";

import React, { useState } from "react";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Programs from "@/components/Programs";
import SswPathway from "@/components/SswPathway";
import JapaneseHub from "@/components/JapaneseHub";
import WhyUs from "@/components/WhyUs";
import JapanBanner from "@/components/JapanBanner";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import ApplyModal from "@/components/ApplyModal";

export default function Home() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [defaultProgram, setDefaultProgram] = useState(
    "SSW Specialized Skill Training"
  );

  const handleOpenApply = (programName?: string) => {
    if (programName) {
      setDefaultProgram(programName);
    }
    setIsApplyModalOpen(true);
  };

  const handleCloseApply = () => {
    setIsApplyModalOpen(false);
  };

  return (
    <LanguageProvider>
      <main className="min-h-screen bg-white text-neutral-900 relative">
        <Navbar onOpenApply={() => handleOpenApply()} />
        <Hero onOpenApply={() => handleOpenApply()} />
        <Introduction onOpenApply={() => handleOpenApply()} />
        <Programs onOpenApply={handleOpenApply} />
        <SswPathway onOpenApply={() => handleOpenApply()} />
        <JapaneseHub onOpenApply={() => handleOpenApply()} />
        <WhyUs onOpenApply={() => handleOpenApply()} />
        <JapanBanner onOpenApply={() => handleOpenApply()} />
        <StatsSection />
        <Testimonials />
        <FaqSection />
        <FinalCta onOpenApply={() => handleOpenApply()} />
        <Footer />
        <ApplyModal
          isOpen={isApplyModalOpen}
          onClose={handleCloseApply}
          defaultProgram={defaultProgram}
        />
      </main>
    </LanguageProvider>
  );
}
