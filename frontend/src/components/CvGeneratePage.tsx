"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Download,
  Save,
  Trash2,
  Upload,
  Eye,
  Pencil,
  Plus,
  ImagePlus,
  Check,
  FileText,
  Languages,
} from "lucide-react";
import CvPreview from "./cv/CvPreview";
import {
  CV_LANG_KEY,
  CV_STORAGE_KEY,
  calcAgeFromBirthday,
  emptyCvData,
  newEducationRow,
  newWorkRow,
  type CvData,
  type CvEducationRow,
  type CvLangPref,
  type CvWorkRow,
} from "./cv/cvTypes";
import { getFormCopy } from "@/i18n/cvPage";
import { downloadCvPdf, waitForPreviewPaint } from "./cv/downloadCvPdf";

type Toast = { type: "ok" | "err"; message: string } | null;

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
      <div className="px-5 py-3 border-b border-neutral-100 bg-gradient-to-r from-[#F5C09A]/50 to-transparent">
        <h3 className="text-sm font-bold tracking-wide text-[#86101E] uppercase">
          {title}
        </h3>
      </div>
      <div className="p-5 space-y-4">{children}</div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-xs font-semibold text-neutral-600">{label}</span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-none border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-[#A71728] focus:ring-2 focus:ring-[#A71728]/15";

const JLPT = ["", "N1", "N2", "N3", "N4", "N5", "他"];

export default function CvGeneratePage() {
  const [langPref, setLangPref] = useState<CvLangPref>("en");
  const c = getFormCopy(langPref);
  const [data, setData] = useState<CvData>(() => emptyCvData());
  const [hydrated, setHydrated] = useState(false);
  const [mobileTab, setMobileTab] = useState<"edit" | "preview">("edit");
  const [saving, setSaving] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [toast, setToast] = useState<Toast>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const savedLang = window.localStorage.getItem(CV_LANG_KEY);
      if (savedLang === "en" || savedLang === "jp") setLangPref(savedLang);
      const raw = window.localStorage.getItem(CV_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<CvData>;
        const base = emptyCvData();
        const education = Array.isArray(parsed.education)
          ? parsed.education.map((row) => ({
              ...newEducationRow(),
              ...row,
              course: row.course ?? "",
            }))
          : base.education;
        const work = Array.isArray(parsed.work)
          ? parsed.work.map((row) => ({ ...newWorkRow(), ...row }))
          : base.work;
        setData({ ...base, ...parsed, education, work });
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  const changeLang = useCallback((next: CvLangPref) => {
    setLangPref(next);
    window.localStorage.setItem(CV_LANG_KEY, next);
  }, []);

  const showToast = useCallback((message: string, type: "ok" | "err" = "ok") => {
    setToast({ message, type });
    window.setTimeout(() => setToast(null), 2600);
  }, []);

  const update = useCallback(<K extends keyof CvData>(key: K, value: CvData[K]) => {
    setData((prev) => {
      const next = { ...prev, [key]: value };
      if (key === "birthday" && typeof value === "string") {
        const age = calcAgeFromBirthday(value);
        if (age) next.age = age;
      }
      return next;
    });
  }, []);

  const updateEdu = useCallback((id: string, patch: Partial<CvEducationRow>) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.map((row) =>
        row.id === id ? { ...row, ...patch } : row
      ),
    }));
  }, []);

  const updateWork = useCallback((id: string, patch: Partial<CvWorkRow>) => {
    setData((prev) => ({
      ...prev,
      work: prev.work.map((row) => (row.id === id ? { ...row, ...patch } : row)),
    }));
  }, []);

  const onPhoto = useCallback(
    (file: File | null) => {
      if (!file || !file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = () => update("photoDataUrl", String(reader.result || ""));
      reader.readAsDataURL(file);
    },
    [update]
  );

  const handleSave = useCallback(() => {
    setSaving(true);
    try {
      window.localStorage.setItem(CV_STORAGE_KEY, JSON.stringify(data));
      showToast(c.toast.saved);
    } finally {
      window.setTimeout(() => setSaving(false), 500);
    }
  }, [c.toast.saved, data, showToast]);

  const handleClear = useCallback(() => {
    if (!window.confirm(c.actions.clearConfirm)) return;
    window.localStorage.removeItem(CV_STORAGE_KEY);
    setData(emptyCvData());
    showToast(c.toast.cleared);
  }, [c.actions.clearConfirm, c.toast.cleared, showToast]);

  const handlePdf = useCallback(async () => {
    setDownloading(true);
    try {
      await waitForPreviewPaint(() => setMobileTab("preview"));

      const safeName = (data.name || "rirekisho")
        .trim()
        .replace(/[^\w\-]+/g, "_")
        .replace(/^_+|_+$/g, "")
        .slice(0, 40);
      await downloadCvPdf({
        fileName: `${safeName || "rirekisho"}_RESUME.pdf`,
      });
      showToast(c.toast.pdfReady);
    } catch (err) {
      console.error("[CV PDF]", err);
      showToast(c.toast.pdfError, "err");
    } finally {
      setDownloading(false);
    }
  }, [c.toast.pdfError, c.toast.pdfReady, data.name, showToast]);

  if (!hydrated) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center pt-28">
        <div className="h-8 w-8 border-2 border-[#A71728] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-28 pb-20">
      <div className="relative overflow-hidden border-b border-neutral-200 bg-gradient-to-br from-[#1a0a0c] via-[#3a0f16] to-[#A71728]">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,#fff,transparent_45%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold tracking-widest text-white/90 uppercase backdrop-blur">
            <FileText className="w-3.5 h-3.5" />
            {c.hero.eyebrow}
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight max-w-3xl">
            {c.hero.title}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/75 max-w-2xl leading-relaxed">
            {c.hero.subtitle}
          </p>
        </div>
      </div>

      {/* Sticky bar */}
      <div className="sticky top-[88px] z-30 border-b border-neutral-200 bg-white/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-2 justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-600">
              <Languages className="w-3.5 h-3.5" />
              {c.langPrefLabel}
            </div>
            <div className="flex rounded-none border border-neutral-200 overflow-hidden">
              {(["en", "jp"] as CvLangPref[]).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => changeLang(code)}
                  className={`px-3 py-2 text-xs font-bold ${
                    langPref === code
                      ? "bg-[#A71728] text-white"
                      : "bg-white text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  {code === "en" ? c.langEn : c.langJp}
                </button>
              ))}
            </div>

            <div className="flex lg:hidden rounded-none border border-neutral-200 overflow-hidden ml-1">
              <button
                type="button"
                onClick={() => setMobileTab("edit")}
                className={`px-3 py-2 text-xs font-bold inline-flex items-center gap-1.5 ${
                  mobileTab === "edit"
                    ? "bg-neutral-900 text-white"
                    : "bg-white text-neutral-700"
                }`}
              >
                <Pencil className="w-3.5 h-3.5" />
                {c.actions.edit}
              </button>
              <button
                type="button"
                onClick={() => setMobileTab("preview")}
                className={`px-3 py-2 text-xs font-bold inline-flex items-center gap-1.5 ${
                  mobileTab === "preview"
                    ? "bg-neutral-900 text-white"
                    : "bg-white text-neutral-700"
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                {c.actions.preview}
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleClear}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold border border-neutral-200 text-neutral-700 hover:bg-neutral-50"
            >
              <Trash2 className="w-3.5 h-3.5" />
              {c.actions.clear}
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold border border-[#A71728]/30 text-[#A71728] bg-[#A71728]/5 hover:bg-[#A71728]/10"
            >
              {saving ? <Check className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
              {saving ? c.actions.saved : c.actions.save}
            </button>
            <button
              type="button"
              onClick={handlePdf}
              disabled={downloading}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#A71728] hover:bg-[#86101E] disabled:opacity-60 shadow-md shadow-[#A71728]/25"
            >
              <Download className="w-3.5 h-3.5" />
              {downloading ? c.actions.downloading : c.actions.downloadPdf}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* FORM */}
        <div
          className={`space-y-5 ${mobileTab === "preview" ? "hidden lg:block" : "block"}`}
        >
          <SectionCard title={c.photo.title}>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="w-[120px] h-[120px] border-2 border-dashed border-neutral-300 bg-neutral-50 flex items-center justify-center overflow-hidden shrink-0">
                {data.photoDataUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={data.photoDataUrl}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ImagePlus className="w-8 h-8 text-neutral-300" />
                )}
              </div>
              <div className="space-y-3 flex-1">
                <p className="text-xs text-neutral-500 leading-relaxed">{c.photo.hint}</p>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => onPhoto(e.target.files?.[0] ?? null)}
                />
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold bg-neutral-900 text-white hover:bg-neutral-800"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    {data.photoDataUrl ? c.photo.change : c.photo.upload}
                  </button>
                  {data.photoDataUrl && (
                    <button
                      type="button"
                      onClick={() => update("photoDataUrl", "")}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold border border-neutral-200 text-neutral-600"
                    >
                      {c.photo.remove}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title={c.sections.personal}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label={c.fields.phoneticName}>
                <input
                  className={inputClass}
                  value={data.phoneticName}
                  onChange={(e) => update("phoneticName", e.target.value)}
                />
              </Field>
              <Field label={c.fields.name}>
                <input
                  className={inputClass}
                  value={data.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </Field>
              <Field label={c.fields.birthday}>
                <input
                  className={inputClass}
                  value={data.birthday}
                  onChange={(e) => update("birthday", e.target.value)}
                  placeholder="2004/01/20"
                />
              </Field>
              <Field label={c.fields.age}>
                <input
                  className={inputClass}
                  value={data.age}
                  onChange={(e) => update("age", e.target.value)}
                />
              </Field>
              <Field label={c.fields.sex}>
                <select
                  className={inputClass}
                  value={data.sex}
                  onChange={(e) => update("sex", e.target.value as CvData["sex"])}
                >
                  <option value="">{c.fields.sexBlank}</option>
                  <option value="male">{c.fields.sexMale}</option>
                  <option value="female">{c.fields.sexFemale}</option>
                  <option value="other">{c.fields.sexOther}</option>
                </select>
              </Field>
              <Field label={c.fields.tel}>
                <input
                  className={inputClass}
                  value={data.tel}
                  onChange={(e) => update("tel", e.target.value)}
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label={c.fields.email}>
                  <input
                    className={inputClass}
                    type="email"
                    value={data.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label={c.fields.currentAddress}>
                  <textarea
                    className={`${inputClass} min-h-[72px] resize-y`}
                    value={data.currentAddress}
                    onChange={(e) => update("currentAddress", e.target.value)}
                  />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label={c.fields.hometown}>
                  <textarea
                    className={`${inputClass} min-h-[72px] resize-y`}
                    value={data.hometown}
                    onChange={(e) => update("hometown", e.target.value)}
                  />
                </Field>
              </div>
            </div>
          </SectionCard>

          <SectionCard title={c.sections.education}>
            <div className="space-y-4">
              {data.education.map((row, idx) => (
                <div
                  key={row.id}
                  className="rounded-lg border border-neutral-150 border-neutral-200 p-3 space-y-2 bg-neutral-50/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-neutral-500">
                      #{idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setData((prev) => ({
                          ...prev,
                          education:
                            prev.education.length <= 1
                              ? prev.education
                              : prev.education.filter((r) => r.id !== row.id),
                        }))
                      }
                      className="text-xs text-neutral-500 hover:text-[#A71728]"
                    >
                      {c.actions.remove}
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      className={inputClass}
                      placeholder={c.fields.enterYear}
                      value={row.enterYear}
                      onChange={(e) => updateEdu(row.id, { enterYear: e.target.value })}
                    />
                    <input
                      className={inputClass}
                      placeholder={c.fields.graduateYear}
                      value={row.graduateYear}
                      onChange={(e) =>
                        updateEdu(row.id, { graduateYear: e.target.value })
                      }
                    />
                  </div>
                  <input
                    className={inputClass}
                    placeholder={c.fields.course}
                    value={row.course}
                    onChange={(e) => updateEdu(row.id, { course: e.target.value })}
                  />
                  <input
                    className={inputClass}
                    placeholder={c.fields.school}
                    value={row.school}
                    onChange={(e) => updateEdu(row.id, { school: e.target.value })}
                  />
                  <input
                    className={inputClass}
                    placeholder={c.fields.major}
                    value={row.major}
                    onChange={(e) => updateEdu(row.id, { major: e.target.value })}
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setData((prev) => ({
                    ...prev,
                    education: [...prev.education, newEducationRow()],
                  }))
                }
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A71728] hover:underline"
              >
                <Plus className="w-3.5 h-3.5" />
                {c.actions.addRow}
              </button>
            </div>
          </SectionCard>

          <SectionCard title={c.sections.work}>
            <div className="space-y-4">
              {data.work.map((row, idx) => (
                <div
                  key={row.id}
                  className="rounded-lg border border-neutral-200 p-3 space-y-2 bg-neutral-50/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-neutral-500">
                      #{idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setData((prev) => ({
                          ...prev,
                          work:
                            prev.work.length <= 1
                              ? prev.work
                              : prev.work.filter((r) => r.id !== row.id),
                        }))
                      }
                      className="text-xs text-neutral-500 hover:text-[#A71728]"
                    >
                      {c.actions.remove}
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      className={inputClass}
                      placeholder={c.fields.periodStart}
                      value={row.periodStart}
                      onChange={(e) =>
                        updateWork(row.id, { periodStart: e.target.value })
                      }
                    />
                    <input
                      className={inputClass}
                      placeholder={c.fields.periodEnd}
                      value={row.periodEnd}
                      onChange={(e) =>
                        updateWork(row.id, { periodEnd: e.target.value })
                      }
                    />
                  </div>
                  <input
                    className={inputClass}
                    placeholder={c.fields.company}
                    value={row.company}
                    onChange={(e) => updateWork(row.id, { company: e.target.value })}
                  />
                  <input
                    className={inputClass}
                    placeholder={c.fields.jobType}
                    value={row.jobType}
                    onChange={(e) => updateWork(row.id, { jobType: e.target.value })}
                  />
                  <textarea
                    className={`${inputClass} min-h-[64px] resize-y`}
                    placeholder={c.fields.duties}
                    value={row.duties}
                    onChange={(e) => updateWork(row.id, { duties: e.target.value })}
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setData((prev) => ({
                    ...prev,
                    work: [...prev.work, newWorkRow()],
                  }))
                }
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A71728] hover:underline"
              >
                <Plus className="w-3.5 h-3.5" />
                {c.actions.addRow}
              </button>
            </div>
          </SectionCard>

          <SectionCard title={c.sections.language}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label={c.fields.jpLevel}>
                <select
                  className={inputClass}
                  value={data.jpLevel}
                  onChange={(e) => update("jpLevel", e.target.value)}
                >
                  {JLPT.map((v) => (
                    <option key={`jp-${v || "blank"}`} value={v}>
                      {v || "—"}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={c.fields.enLevel}>
                <input
                  className={inputClass}
                  value={data.enLevel}
                  onChange={(e) => update("enLevel", e.target.value)}
                  placeholder="Beginner / Intermediate / Advanced"
                />
              </Field>
              <Field label={c.fields.jpReading}>
                <input
                  className={inputClass}
                  value={data.jpReading}
                  onChange={(e) => update("jpReading", e.target.value)}
                />
              </Field>
              <Field label={c.fields.enReading}>
                <input
                  className={inputClass}
                  value={data.enReading}
                  onChange={(e) => update("enReading", e.target.value)}
                />
              </Field>
              <Field label={c.fields.jpSpeaking}>
                <input
                  className={inputClass}
                  value={data.jpSpeaking}
                  onChange={(e) => update("jpSpeaking", e.target.value)}
                />
              </Field>
              <Field label={c.fields.enSpeaking}>
                <input
                  className={inputClass}
                  value={data.enSpeaking}
                  onChange={(e) => update("enSpeaking", e.target.value)}
                />
              </Field>
              <Field label={c.fields.jpWriting}>
                <input
                  className={inputClass}
                  value={data.jpWriting}
                  onChange={(e) => update("jpWriting", e.target.value)}
                />
              </Field>
              <Field label={c.fields.enWriting}>
                <input
                  className={inputClass}
                  value={data.enWriting}
                  onChange={(e) => update("enWriting", e.target.value)}
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label={c.fields.otherLanguages}>
                  <input
                    className={inputClass}
                    value={data.otherLanguages}
                    onChange={(e) => update("otherLanguages", e.target.value)}
                  />
                </Field>
              </div>
            </div>
          </SectionCard>

          <SectionCard title={c.sections.details}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label={c.fields.fatherName}>
                <input
                  className={inputClass}
                  value={data.fatherName}
                  onChange={(e) => update("fatherName", e.target.value)}
                />
              </Field>
              <Field label={c.fields.motherName}>
                <input
                  className={inputClass}
                  value={data.motherName}
                  onChange={(e) => update("motherName", e.target.value)}
                />
              </Field>
              <Field label={c.fields.nationality}>
                <input
                  className={inputClass}
                  value={data.nationality}
                  onChange={(e) => update("nationality", e.target.value)}
                />
              </Field>
              <Field label={c.fields.maritalStatus}>
                <input
                  className={inputClass}
                  value={data.maritalStatus}
                  onChange={(e) => update("maritalStatus", e.target.value)}
                />
              </Field>
              <Field label={c.fields.nationalId}>
                <input
                  className={inputClass}
                  value={data.nationalId}
                  onChange={(e) => update("nationalId", e.target.value)}
                />
              </Field>
              <Field label={c.fields.passportNo}>
                <input
                  className={inputClass}
                  value={data.passportNo}
                  onChange={(e) => update("passportNo", e.target.value)}
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label={c.fields.permanentAddress}>
                  <textarea
                    className={`${inputClass} min-h-[72px] resize-y`}
                    value={data.permanentAddress}
                    onChange={(e) => update("permanentAddress", e.target.value)}
                  />
                </Field>
              </div>
            </div>
          </SectionCard>

          <SectionCard title={c.sections.specialty}>
            <Field label={c.fields.specialties}>
              <textarea
                className={`${inputClass} min-h-[140px] resize-y`}
                value={data.specialties}
                onChange={(e) => update("specialties", e.target.value)}
              />
            </Field>
          </SectionCard>
        </div>

        {/* PREVIEW */}
        <div
          className={`lg:sticky lg:top-[150px] ${
            mobileTab === "edit" ? "hidden lg:block" : "block"
          }`}
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-bold text-neutral-700 tracking-wide uppercase">
              {c.actions.preview}
            </h2>
            <span className="text-[11px] text-neutral-400">履歴書 · A4 PDF</span>
          </div>
          <div className="overflow-auto max-h-[calc(100vh-180px)] rounded-xl border border-neutral-300 bg-neutral-200/60 p-2 sm:p-4 shadow-inner">
            <CvPreview data={data} />
          </div>
        </div>
      </div>

      {toast && (
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 text-sm font-semibold shadow-lg ${
            toast.type === "ok" ? "bg-neutral-900 text-white" : "bg-red-700 text-white"
          }`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
}
