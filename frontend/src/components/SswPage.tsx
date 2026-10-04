"use client";

import SswPathway from "@/components/SswPathway";
import { useApplyModal } from "@/contexts/ApplyModalContext";

export default function SswPage() {
  const { openApply } = useApplyModal();
  return (
    <div className="pt-28">
      <SswPathway onOpenApply={() => openApply()} />
    </div>
  );
}
