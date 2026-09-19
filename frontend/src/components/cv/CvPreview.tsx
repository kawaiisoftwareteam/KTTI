"use client";

import React from "react";
import type { CvData } from "./cvTypes";
import { formatBirthdayDisplay } from "./cvTypes";
import { previewLabels as L } from "@/i18n/cvPage";
import ScaleToWidth from "./ScaleToWidth";

const PEACH = "#F6C8A8";
const GREY = "#D9D9D9";
const LABEL_BG = "#EEEEEE";
const BORDER = "1px solid #111";
/** A4 width at 96dpi — keep layout fixed; ScaleToWidth handles mobile. */
const A4_WIDTH_PX = 794;

type Props = {
  data: CvData;
};

function genderText(sex: CvData["sex"]) {
  if (sex === "male") return L.male;
  if (sex === "female") return L.female;
  if (sex === "other") return L.other;
  return "";
}

function LabelCell({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <td
      className={`align-middle p-1 text-[10px] leading-tight text-black break-words [overflow-wrap:anywhere] ${className}`}
      style={{ border: BORDER, background: LABEL_BG, ...style }}
    >
      {children}
    </td>
  );
}

function DataCell({
  children,
  className = "",
  colSpan,
  rowSpan,
  style,
}: {
  children?: React.ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
  style?: React.CSSProperties;
}) {
  return (
    <td
      colSpan={colSpan}
      rowSpan={rowSpan}
      className={`align-middle p-1.5 break-words [overflow-wrap:anywhere] ${className}`}
      style={{ border: BORDER, ...style }}
    >
      {children}
    </td>
  );
}

const JLPT_LEVELS = ["N1", "N2", "N3", "N4", "N5", "他"];

function JlptPicker({ selected }: { selected: string }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 py-0.5">
      {JLPT_LEVELS.map((lv) => {
        const active = selected.toUpperCase() === lv || selected === lv;
        return (
          <span
            key={lv}
            className={`inline-flex items-center justify-center min-w-[28px] px-1 text-[11px] font-semibold ${
              active
                ? "rounded-full border-2 border-[#A71728] text-[#A71728]"
                : "text-neutral-700"
            }`}
          >
            {lv}
          </span>
        );
      })}
    </div>
  );
}

export default function CvPreview({ data }: Props) {
  const eduRows = [...data.education];
  while (eduRows.length < 3) {
    eduRows.push({
      id: `pad-edu-${eduRows.length}`,
      enterYear: "",
      graduateYear: "",
      course: "",
      school: "",
      major: "",
    });
  }

  const workRows = [...data.work];
  while (workRows.length < 2) {
    workRows.push({
      id: `pad-work-${workRows.length}`,
      periodStart: "",
      periodEnd: "",
      company: "",
      jobType: "",
      duties: "",
    });
  }

  const specialtyLines = data.specialties
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  const detailRows: { label: string; value: string }[] = [
    { label: L.fatherName, value: data.fatherName },
    { label: L.motherName, value: data.motherName },
    { label: L.nationality, value: data.nationality },
    { label: L.maritalStatus, value: data.maritalStatus },
    { label: L.nationalId, value: data.nationalId },
    { label: L.passportNo, value: data.passportNo },
    { label: L.permanentAddress, value: data.permanentAddress },
  ];

  const sheetStyle: React.CSSProperties = {
    fontFamily: "var(--font-noto-jp), 'Noto Sans JP', Arial, sans-serif",
    fontSize: "12px",
    lineHeight: 1.35,
  };

  return (
    <ScaleToWidth width={A4_WIDTH_PX}>
    <div id="cv-preview-sheet" className="space-y-4" style={{ width: A4_WIDTH_PX }}>
      {/* ========== PAGE 1 ========== */}
      <div
        id="cv-page-1"
        className="bg-white text-black p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-neutral-200 box-border"
        style={{ ...sheetStyle, width: A4_WIDTH_PX }}
      >
        <h1
          className="font-black mb-2 tracking-[0.35em] sm:tracking-[0.5em]"
          style={{ fontSize: "30px", letterSpacing: "0.35em" }}
        >
          {L.title}
        </h1>

        {/* Personal Information */}
        <table className="w-full border-collapse mb-3" style={{ tableLayout: "fixed" }}>
          <colgroup>
            <col style={{ width: "12%" }} />
            <col style={{ width: "28%" }} />
            <col style={{ width: "14%" }} />
            <col style={{ width: "26%" }} />
            <col style={{ width: "20%" }} />
          </colgroup>
          <tbody>
            <tr>
              <td
                colSpan={5}
                className="text-center font-bold py-1.5"
                style={{ background: PEACH, border: BORDER, fontSize: "14px" }}
              >
                {L.personalInfo}
              </td>
            </tr>

            {/* Furigana + DOB + Photo */}
            <tr>
              <LabelCell>{L.furigana}</LabelCell>
              <DataCell className="font-medium tracking-wide">{data.phoneticName}</DataCell>
              <LabelCell>{L.dob}</LabelCell>
              <DataCell className="font-medium text-[11px]">
                {data.birthday ? formatBirthdayDisplay(data.birthday) : ""}
              </DataCell>
              <DataCell
                rowSpan={4}
                className="p-0 align-middle text-center"
                style={{ verticalAlign: "middle" }}
              >
                <div className="w-full aspect-square flex items-center justify-center overflow-hidden bg-neutral-50 min-h-[120px]">
                  {data.photoDataUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={data.photoDataUrl}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-neutral-400 text-xs">{L.emptyPhoto}</span>
                  )}
                </div>
              </DataCell>
            </tr>

            {/* Name + Gender + Age */}
            <tr>
              <td
                className="align-middle text-center font-bold p-1 text-black"
                style={{ border: BORDER, fontSize: "13px", background: LABEL_BG }}
              >
                {L.name}
              </td>
              <DataCell className="font-bold uppercase tracking-wide" style={{ fontSize: "16px" }}>
                {data.name}
              </DataCell>
              <LabelCell>{L.gender}</LabelCell>
              <DataCell className="p-0">
                <div className="grid grid-cols-2 h-full min-h-[40px]">
                  <div
                    className="flex items-center justify-center font-bold uppercase text-[12px] px-1 text-black"
                    style={{ borderRight: BORDER }}
                  >
                    {genderText(data.sex)}
                  </div>
                  <div className="flex flex-col items-center justify-center px-1 text-black leading-tight">
                    <span className="text-[11px] font-bold">{L.age}</span>
                    <span className="text-[13px] font-bold">
                      {L.ageUnit} {data.age || "—"}
                    </span>
                  </div>
                </div>
              </DataCell>
            </tr>

            {/* Addresses */}
            <tr>
              <LabelCell>{L.currentAddress}</LabelCell>
              <DataCell className="uppercase text-[10px] leading-snug">
                {data.currentAddress}
              </DataCell>
              <LabelCell>{L.hometown}</LabelCell>
              <DataCell className="uppercase text-[10px] leading-snug">
                {data.hometown}
              </DataCell>
            </tr>

            {/* Phone + Email */}
            <tr>
              <LabelCell>{L.phone}</LabelCell>
              <DataCell className="font-medium">{data.tel}</DataCell>
              <LabelCell>{L.email}</LabelCell>
              <DataCell className="break-all text-[11px]">{data.email}</DataCell>
            </tr>
          </tbody>
        </table>

        {/* Education */}
        <table className="w-full border-collapse mb-3" style={{ tableLayout: "fixed" }}>
          <colgroup>
            <col style={{ width: "34px" }} />
            <col style={{ width: "11%" }} />
            <col style={{ width: "11%" }} />
            <col style={{ width: "22%" }} />
            <col style={{ width: "34%" }} />
            <col style={{ width: "16%" }} />
          </colgroup>
          <tbody>
            <tr>
              <td
                rowSpan={eduRows.length + 1}
                className="text-center font-bold align-middle px-0.5"
                style={{
                  background: PEACH,
                  border: BORDER,
                  writingMode: "vertical-rl",
                  letterSpacing: "0.4em",
                  fontSize: "15px",
                }}
              >
                {L.education}
              </td>
              <td
                className="text-center font-semibold py-1.5 text-[11px]"
                style={{ background: GREY, border: BORDER }}
              >
                {L.enter}
              </td>
              <td
                className="text-center font-semibold py-1.5 text-[11px]"
                style={{ background: GREY, border: BORDER }}
              >
                {L.graduate}
              </td>
              <td
                className="text-center font-semibold py-1.5 text-[11px]"
                style={{ background: GREY, border: BORDER }}
              >
                {L.course}
              </td>
              <td
                className="text-center font-semibold py-1.5 text-[11px]"
                style={{ background: GREY, border: BORDER }}
              >
                {L.school}
              </td>
              <td
                className="text-center font-semibold py-1.5 text-[11px]"
                style={{ background: GREY, border: BORDER }}
              >
                {L.major}
              </td>
            </tr>
            {eduRows.map((row) => (
              <tr key={row.id}>
                <td
                  className="text-center p-1.5 min-h-[34px] text-[12px]"
                  style={{ border: BORDER }}
                >
                  {row.enterYear}
                </td>
                <td className="text-center p-1.5 text-[12px]" style={{ border: BORDER }}>
                  {row.graduateYear}
                </td>
                <td
                  className="p-1.5 uppercase font-semibold text-[10px] text-center"
                  style={{ border: BORDER }}
                >
                  {row.course}
                </td>
                <td
                  className="p-1.5 uppercase font-medium text-[10px]"
                  style={{ border: BORDER }}
                >
                  {row.school}
                </td>
                <td
                  className="p-1.5 uppercase text-center text-[10px] font-semibold"
                  style={{ border: BORDER }}
                >
                  {row.major}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Work History */}
        <table className="w-full border-collapse" style={{ tableLayout: "fixed" }}>
          <colgroup>
            <col style={{ width: "22%" }} />
            <col style={{ width: "78%" }} />
          </colgroup>
          <tbody>
            <tr>
              <td
                className="text-center font-semibold py-1.5 text-[12px]"
                style={{ background: GREY, border: BORDER }}
              >
                <div>{L.workPeriod}</div>
                <div className="text-[10px] font-normal mt-0.5 text-neutral-700">
                  {L.yearMonth}　~　{L.continue}
                </div>
              </td>
              <td
                className="text-center font-semibold py-1.5 text-[12px]"
                style={{ background: GREY, border: BORDER }}
              >
                {L.workHistory}
              </td>
            </tr>
            {workRows.map((row) => (
              <tr key={row.id}>
                <td
                  className="align-middle text-center p-2 text-[11px] leading-relaxed"
                  style={{ border: BORDER, minHeight: "72px" }}
                >
                  <div>{row.periodStart || "\u00A0"}</div>
                  <div className="my-0.5">~</div>
                  <div>{row.periodEnd || (row.periodStart ? L.continue : "\u00A0")}</div>
                </td>
                <td className="align-top p-2 text-[11px]" style={{ border: BORDER }}>
                  <div className="mb-1.5 border-b border-neutral-200 pb-1">
                    <span className="text-black mr-1">{L.company}:</span>
                    <span className="uppercase font-semibold">{row.company}</span>
                  </div>
                  <div className="mb-1.5 border-b border-neutral-200 pb-1">
                    <span className="text-black mr-1">{L.jobType}:</span>
                    <span className="uppercase">{row.jobType}</span>
                  </div>
                  <div>
                    <span className="text-black mr-1">{L.duties}:</span>
                    <span className="uppercase whitespace-pre-wrap">{row.duties}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ========== PAGE 2 ========== */}
      <div
        id="cv-page-2"
        className="bg-white text-black p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-neutral-200 box-border"
        style={{ ...sheetStyle, width: A4_WIDTH_PX }}
      >
        {/* Language Ability */}
        <table className="w-full border-collapse mb-3" style={{ tableLayout: "fixed" }}>
          <colgroup>
            <col style={{ width: "34px" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "14%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "14%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "14%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "14%" }} />
          </colgroup>
          <tbody>
            <tr>
              <td
                rowSpan={5}
                className="text-center font-bold align-middle px-0.5"
                style={{
                  background: PEACH,
                  border: BORDER,
                  writingMode: "vertical-rl",
                  letterSpacing: "0.3em",
                  fontSize: "14px",
                }}
              >
                {L.languageAbility}
              </td>
              <td
                colSpan={4}
                className="text-center font-semibold py-1.5 text-[12px]"
                style={{ background: PEACH, border: BORDER }}
              >
                {L.japanese}
              </td>
              <td
                colSpan={4}
                className="text-center font-semibold py-1.5 text-[12px]"
                style={{ background: PEACH, border: BORDER }}
              >
                {L.english}
              </td>
            </tr>
            <tr>
              <td
                className="text-center p-1 font-medium text-[11px] text-black"
                style={{ border: BORDER, background: LABEL_BG }}
              >
                {L.level}
              </td>
              <td colSpan={3} className="p-1" style={{ border: BORDER }}>
                <JlptPicker selected={data.jpLevel} />
              </td>
              <td
                className="text-center p-1 font-medium text-[11px] text-black"
                style={{ border: BORDER, background: LABEL_BG }}
              >
                {L.level}
              </td>
              <td
                colSpan={3}
                className="p-1.5 text-center font-bold uppercase"
                style={{ border: BORDER }}
              >
                {data.enLevel}
              </td>
            </tr>
            <tr>
              <td
                className="text-center p-1 text-[11px] text-black"
                style={{ border: BORDER, background: LABEL_BG }}
              >
                {L.reading}
              </td>
              <td className="text-center p-1.5 font-bold" style={{ border: BORDER }}>
                {data.jpReading}
              </td>
              <td
                className="text-center p-1 text-[11px] text-black"
                style={{ border: BORDER, background: LABEL_BG }}
              >
                {L.writing}
              </td>
              <td className="text-center p-1.5 font-bold" style={{ border: BORDER }}>
                {data.jpWriting}
              </td>
              <td
                className="text-center p-1 text-[11px] text-black"
                style={{ border: BORDER, background: LABEL_BG }}
              >
                {L.reading}
              </td>
              <td className="text-center p-1.5 font-bold" style={{ border: BORDER }}>
                {data.enReading}
              </td>
              <td
                className="text-center p-1 text-[11px] text-black"
                style={{ border: BORDER, background: LABEL_BG }}
              >
                {L.writing}
              </td>
              <td className="text-center p-1.5 font-bold" style={{ border: BORDER }}>
                {data.enWriting}
              </td>
            </tr>
            <tr>
              <td
                className="text-center p-1 text-[11px] text-black"
                style={{ border: BORDER, background: LABEL_BG }}
              >
                {L.speaking}
              </td>
              <td
                colSpan={3}
                className="text-center p-1.5 font-bold"
                style={{ border: BORDER }}
              >
                {data.jpSpeaking}
              </td>
              <td
                className="text-center p-1 text-[11px] text-black"
                style={{ border: BORDER, background: LABEL_BG }}
              >
                {L.speaking}
              </td>
              <td
                colSpan={3}
                className="text-center p-1.5 font-bold"
                style={{ border: BORDER }}
              >
                {data.enSpeaking}
              </td>
            </tr>
            <tr>
              <td
                colSpan={8}
                className="p-2 text-[11px]"
                style={{ border: BORDER }}
              >
                <span className="font-semibold mr-2">{L.otherLang}:</span>
                {data.otherLanguages}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Personal Details */}
        <table className="w-full border-collapse mb-3" style={{ tableLayout: "fixed" }}>
          <colgroup>
            <col style={{ width: "32%" }} />
            <col style={{ width: "68%" }} />
          </colgroup>
          <tbody>
            <tr>
              <td
                colSpan={2}
                className="font-bold py-1.5 px-2 text-[13px]"
                style={{ background: PEACH, border: BORDER }}
              >
                {L.personalDetails}
              </td>
            </tr>
            {detailRows.map((row) => (
              <tr key={row.label}>
                <td
                  className="p-1.5 font-bold uppercase text-[11px] text-black"
                  style={{ border: BORDER, background: LABEL_BG }}
                >
                  {row.label}
                </td>
                <td
                  className="p-1.5 uppercase text-[11px] leading-snug"
                  style={{ border: BORDER }}
                >
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Specialty */}
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td
                className="font-bold py-1.5 px-2 text-center text-[13px]"
                style={{ background: PEACH, border: BORDER }}
              >
                {L.specialty}
              </td>
            </tr>
            <tr>
              <td
                className="p-3 align-top"
                style={{ border: BORDER, minHeight: "120px" }}
              >
                {specialtyLines.length === 0 ? (
                  <span className="text-transparent">.</span>
                ) : (
                  <ul className="space-y-2.5">
                    {specialtyLines.map((line, i) => (
                      <li
                        key={i}
                        className="flex gap-2 uppercase text-[11px] leading-relaxed"
                      >
                        <span className="shrink-0 font-bold">❖</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </ScaleToWidth>
  );
}
