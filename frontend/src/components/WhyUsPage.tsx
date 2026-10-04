"use client";

import WhyUs from "@/components/WhyUs";
import { useApplyModal } from "@/contexts/ApplyModalContext";

export default function WhyUsPage() {
  const { openApply } = useApplyModal();
  return (
    <div className="pt-28">
      <WhyUs onOpenApply={() => openApply()} />
    </div>
  );
}
