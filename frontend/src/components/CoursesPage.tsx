"use client";

import Programs from "@/components/Programs";
import { useApplyModal } from "@/contexts/ApplyModalContext";

export default function CoursesPage() {
  const { openApply } = useApplyModal();
  return (
    <div className="pt-16 sm:pt-20">
      <Programs onOpenApply={openApply} />
    </div>
  );
}
