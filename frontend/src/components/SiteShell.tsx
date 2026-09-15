"use client";

import React from "react";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ApplyModalProvider, useApplyModal } from "@/contexts/ApplyModalContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function ShellChrome({ children }: { children: React.ReactNode }) {
  const { openApply } = useApplyModal();

  return (
    <main className="min-h-screen bg-white text-neutral-900 relative">
      <Navbar onOpenApply={() => openApply()} />
      {children}
      <Footer />
    </main>
  );
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ApplyModalProvider>
        <ShellChrome>{children}</ShellChrome>
      </ApplyModalProvider>
    </LanguageProvider>
  );
}
