"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import ApplyModal from "@/components/ApplyModal";

type ApplyModalContextValue = {
  openApply: (programName?: string) => void;
};

const ApplyModalContext = createContext<ApplyModalContextValue | null>(null);

const DEFAULT_PROGRAM = "SSW Specialized Skill Training";

export function ApplyModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultProgram, setDefaultProgram] = useState(DEFAULT_PROGRAM);

  const openApply = useCallback((programName?: string) => {
    if (programName) {
      setDefaultProgram(programName);
    }
    setIsOpen(true);
  }, []);

  const closeApply = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(() => ({ openApply }), [openApply]);

  return (
    <ApplyModalContext.Provider value={value}>
      {children}
      <ApplyModal
        isOpen={isOpen}
        onClose={closeApply}
        defaultProgram={defaultProgram}
      />
    </ApplyModalContext.Provider>
  );
}

export function useApplyModal() {
  const ctx = useContext(ApplyModalContext);
  if (!ctx) {
    throw new Error("useApplyModal must be used within ApplyModalProvider");
  }
  return ctx;
}
