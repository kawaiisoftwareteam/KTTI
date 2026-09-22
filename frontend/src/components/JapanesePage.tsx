"use client";

import JapaneseHub from "@/components/JapaneseHub";
import { useApplyModal } from "@/contexts/ApplyModalContext";

export default function JapanesePage() {
  const { openApply } = useApplyModal();
  return (
    <div className="pt-16 sm:pt-20">
      <JapaneseHub onOpenApply={() => openApply()} />
    </div>
  );
}
