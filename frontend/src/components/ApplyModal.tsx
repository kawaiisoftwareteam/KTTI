"use client";

import React, { useState } from "react";
import { X, CheckCircle, Send, Phone, User, Mail, BookOpen, Briefcase } from "lucide-react";
import DoorButton from "@/components/DoorButton";
import { useLanguage } from "@/i18n/LanguageContext";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export default function ApplyModal({
  isOpen,
  onClose,
  defaultProgram = "SSW Specialized Skill Training",
}: ApplyModalProps) {
  const { t } = useLanguage();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedProgram, setSelectedProgram] = useState(defaultProgram);
  // Industry and level are tracked by index so a language switch mid-form keeps
  // the current selection instead of stranding a value that no longer exists.
  const [levelIndex, setLevelIndex] = useState(0);
  const [industryIndex, setIndustryIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const programLabel =
    t.applyModal.programs.find((program) => program.value === selectedProgram)?.label ??
    selectedProgram;

  const [successBeforeName, successAfterName = ""] =
    t.applyModal.successBody.split("{name}");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      t.applyModal.whatsappTemplate
        .replace("{program}", programLabel)
        .replace("{name}", fullName || t.applyModal.interestedCandidate)
    );
    window.open(`https://wa.me/8801817047247?text=${text}`, "_blank");
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName("");
    setPhone("");
    setEmail("");
    setMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white text-[#111111] rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative bg-neutral-50 text-neutral-900 p-6 sm:p-8 border-b border-neutral-200">
          <div className="flex items-center justify-between">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest text-[#A71728] uppercase mb-1 font-mono">
                {t.applyModal.eyebrow}
              </span>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-neutral-950">
                {t.applyModal.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                {t.applyModal.subtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/80 rounded-none transition-colors cursor-pointer"
              aria-label={t.applyModal.closeAria}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Red decorative accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A71728] via-[#C22237] to-[#A71728]" />
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-neutral-900 mb-2">
                {t.applyModal.successTitle}
              </h4>
              <p className="text-neutral-600 max-w-md mx-auto text-sm mb-6">
                {successBeforeName}
                <strong>{fullName}</strong>
                {successAfterName}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold rounded-none shadow-sm flex items-center justify-center gap-2 text-sm transition-all"
                >
                  <Phone className="w-4 h-4" /> {t.applyModal.connectWhatsApp}
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold rounded-none text-sm transition-all"
                >
                  {t.applyModal.closeWindow}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    {t.applyModal.fullName}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={t.applyModal.fullNamePlaceholder}
                      className="w-full pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#A71728] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    {t.applyModal.phone}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.applyModal.phonePlaceholder}
                      className="w-full pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#A71728] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                  {t.applyModal.email}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.applyModal.emailPlaceholder}
                    className="w-full pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#A71728] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Program Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    {t.applyModal.targetProgram}
                  </label>
                  <div className="relative">
                    <BookOpen className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                    <select
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#A71728] focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      {t.applyModal.programs.map((program) => (
                        <option key={program.value} value={program.value}>
                          {program.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Target Industry */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    {t.applyModal.preferredIndustry}
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                    <select
                      value={industryIndex}
                      onChange={(e) => setIndustryIndex(Number(e.target.value))}
                      className="w-full pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#A71728] focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      {t.applyModal.industries.map((industry, idx) => (
                        <option key={industry} value={idx}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Japanese Current Proficiency */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                  {t.applyModal.japaneseLevel}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {t.applyModal.levels.map((level, idx) => (
                    <button
                      type="button"
                      key={level}
                      onClick={() => setLevelIndex(idx)}
                      className={`py-2 px-3 text-xs font-medium rounded-none border transition-all ${
                        levelIndex === idx
                          ? "bg-[#A71728] text-white border-[#A71728] shadow-sm"
                          : "bg-neutral-50 text-neutral-700 border-neutral-300 hover:bg-neutral-100"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                  {t.applyModal.messageLabel}
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.applyModal.messagePlaceholder}
                  className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#A71728] focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <DoorButton
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 px-6 font-bold text-sm shadow-md"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      {t.applyModal.submitting}
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> {t.applyModal.submit}
                    </>
                  )}
                </DoorButton>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="py-3.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-none text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <Phone className="w-4 h-4" /> {t.applyModal.whatsappInstant}
                </button>
              </div>

              <p className="text-[11px] text-neutral-500 text-center pt-1">
                {t.applyModal.privacy}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
