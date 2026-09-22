"use client";

import SswPathway from "@/components/SswPathway";
import { useApplyModal } from "@/contexts/ApplyModalContext";

export default function SswPage() {
  const { openApply } = useApplyModal();
  return (
    <div className="pt-16 sm:pt-20">
      <SswPathway onOpenApply={() => openApply()} />
    </div>
  );
}
