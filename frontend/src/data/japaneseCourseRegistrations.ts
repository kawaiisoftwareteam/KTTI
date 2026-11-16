/**
 * Japanese language course packages + Google Form wiring.
 *
 * Form POST pattern matches narailSeminar / basicJapaneseCourse.
 * Google Forms must allow anonymous responses:
 *   Settings → Responses → OFF "Limit to 1 response"
 *   and OFF any "Restrict to users in …" / sign-in requirement.
 *
 * Shared entry IDs (forms were duplicated from one template):
 *   name / address / mobile / comments
 *
 * Comments field = only what the user typed (empty if blank).
 * Course is already known from which Form receives the row.
 * Email / prior Japanese / interest stay on the website form only
 * until matching questions exist on each Google Form.
 *
 * Catalog = only courses with a dedicated Google Form:
 *   afternoon  1Q_fx3jL7wNJPiAXDlC86Z1kY4-tWw44aWkI3bKZsvFk
 *   evening    19G6k0auLt_GjW6kOvapS8n3X0VxsXKO2-FjfVsCw1kU
 *   online     1Xn2__8LSYtngvEA1MGXyuC1P5Rnrtxj1QrscE9KR6f4
 *   intensive  1ToAtivvefBCImy28nFX55MM-nwJFZV14cyPNihfDAuQ
 */

export const JP_COURSE_FORM_ENTRIES = {
  name: "entry.2005620554",
  address: "entry.1045781291",
  mobile: "entry.1065046570",
  comments: "entry.839337160",
} as const;

export type JapaneseCourseId =
  | "afternoon"
  | "evening"
  | "online"
  | "intensive";

export type CourseInterest = "language" | "skill" | "both";

export const COURSE_INTEREST_OPTIONS: {
  value: CourseInterest;
  label: string;
}[] = [
  { value: "language", label: "ভাষা কোর্স" },
  { value: "skill", label: "Skill Development" },
  { value: "both", label: "দুটোই" },
];

export type FeeRow = { label: string; value: string };

export type JapaneseCoursePackage = {
  id: JapaneseCourseId;
  /** Short label for nav / jump links */
  shortTitle: string;
  title: string;
  intro: string;
  details: FeeRow[];
  skillBlock?: {
    title: string;
    rows: FeeRow[];
  };
  payment?: FeeRow[];
  cta: string;
  /** Show language / skill / both selector */
  showInterest: boolean;
  formAction: string;
  formViewUrl: string;
};

const AFTERNOON_ID = "1FAIpQLScqRSKzrKzkfEiCsX3L42uQK0b8W_llbDo0VzQfiE0dEdm46g";
const EVENING_ID = "1FAIpQLSezxO4GstYIV_VTy471IJNrUTtruFcbvU1-WHlfqhEEjVsvgQ";
const ONLINE_ID = "1FAIpQLSdFfvOnrJeeZ1hAIBqqpXc1EJIYHCUkKtOMiM9fanLFtstgEA";
const INTENSIVE_ID = "1FAIpQLSfMYoNBKTWgHS_Co6-0NmtuJVGp6EkjZoZ7MDKZlIqCUO2VAw";

const gFormAction = (id: string) =>
  `https://docs.google.com/forms/d/e/${id}/formResponse`;
const gFormView = (id: string) =>
  `https://docs.google.com/forms/d/e/${id}/viewform`;

const AFTERNOON_ACTION = gFormAction(AFTERNOON_ID);
const EVENING_ACTION = gFormAction(EVENING_ID);
const ONLINE_ACTION = gFormAction(ONLINE_ID);
const INTENSIVE_ACTION = gFormAction(INTENSIVE_ID);

export const JAPANESE_COURSE_BENEFITS = [
  {
    title: "Weekly Mock Test",
    body: "প্রতি সপ্তাহে পরীক্ষার মাধ্যমে নিজের প্রস্তুতি যাচাই।",
  },
  {
    title: "Mock Interview",
    body: "জাপানি ভাষায় ইন্টারভিউ দেওয়ার অনুশীলন।",
  },
  {
    title: "Japanese Culture",
    body: "জাপানের ভাষা, সংস্কৃতি ও নিয়মকানুন সম্পর্কে শেখার সুযোগ।",
  },
  {
    title: "SSW-Based Skill Development",
    body: "SSW ভিসাভিত্তিক দক্ষতা উন্নয়নের প্রস্তুতি।",
  },
  {
    title: "Weekly Conversation",
    body: "প্রতি সপ্তাহে একদিন জাপানিজ ভাষায় কথোপকথনের অনুশীলন।",
  },
] as const;

export const JAPANESE_COURSE_PACKAGES: JapaneseCoursePackage[] = [
  {
    id: "afternoon",
    shortTitle: "দুপুরের কোর্স",
    title: "অনাবাসিক দুপুরের কোর্স",
    intro:
      "দুপুরের সুবিধাজনক সময়ে জাপানিজ ভাষা শিখে জাপানে নিজের ভবিষ্যৎ গড়ুন।",
    details: [
      { label: "ক্লাসের সময়", value: "দুপুর ২:০০ থেকে ৪:৩০ পর্যন্ত" },
      { label: "মাসিক টিউশন ফি", value: "৮,০০০ টাকা" },
      { label: "ভর্তি ফি", value: "৩,০০০ টাকা" },
      {
        label: "ভাষা কোর্সের মেয়াদ",
        value: "৫ মাস (N5: ৩ মাস, N4: ২ মাস)",
      },
      { label: "ভাষা কোর্সের মোট খরচ", value: "৪০,০০০ টাকা" },
    ],
    skillBlock: {
      title: "Skill Development (SSW)",
      rows: [
        { label: "মেয়াদ", value: "২ মাস" },
        { label: "মোট খরচ", value: "১০,০০০ টাকা" },
        { label: "ভর্তি ফি", value: "৩,০০০ টাকা" },
        {
          label: "নোট",
          value:
            "যাঁরা অন্য জায়গা থেকে ভাষা কোর্স করেছেন, তাঁরাও এখানে Skill Development করতে পারবেন।",
        },
      ],
    },
    cta: "আপনি যদি অনাবাসিক দুপুরের কোর্সের মাধ্যমে জাপানিজ ভাষা শিখে জাপানে নিজের ভবিষ্যৎ গড়তে চান, তাহলে নিচের ফর্মটি পূরণ করে আপনার আগ্রহের কথা জানান। আমাদের প্রতিনিধি আপনার সঙ্গে যোগাযোগ করবেন।",
    showInterest: true,
    formAction: AFTERNOON_ACTION,
    formViewUrl: gFormView(AFTERNOON_ID),
  },
  {
    id: "evening",
    shortTitle: "সন্ধ্যার কোর্স",
    title: "অনাবাসিক সন্ধ্যার কোর্স",
    intro:
      "যাঁরা চাকরি করেন কিন্তু জাপানিজ ভাষা শিখতে চান, তাঁদের জন্য এই কোর্স।",
    details: [
      { label: "ক্লাসের সময়", value: "সন্ধ্যা ৭:০০ থেকে ৯:০০ পর্যন্ত" },
      { label: "মাসিক টিউশন ফি", value: "৫,০০০ টাকা" },
      { label: "ভর্তি ফি", value: "৩,০০০ টাকা" },
      {
        label: "ভাষা কোর্সের মেয়াদ",
        value: "৭ মাস (N5: ৪ মাস, N4: ৩ মাস)",
      },
      { label: "ভাষা কোর্সের মোট খরচ", value: "৩৫,০০০ টাকা" },
    ],
    skillBlock: {
      title: "Skill Development (SSW ও অন্যান্য সেক্টর)",
      rows: [
        { label: "মেয়াদ", value: "২ মাস" },
        { label: "মাসিক ফি", value: "৫,০০০ টাকা" },
        { label: "মোট খরচ", value: "১০,০০০ টাকা" },
        { label: "ভর্তি ফি", value: "৩,০০০ টাকা" },
      ],
    },
    cta: "আপনি যদি অনাবাসিক সন্ধ্যার কোর্সের মাধ্যমে জাপানিজ ভাষা শিখে জাপানে নিজের ভবিষ্যৎ গড়তে চান, তাহলে নিচের ফর্মটি পূরণ করে আপনার আগ্রহের কথা জানান। আমাদের প্রতিনিধি আপনার সঙ্গে যোগাযোগ করবেন।",
    showInterest: true,
    formAction: EVENING_ACTION,
    formViewUrl: gFormView(EVENING_ID),
  },
  {
    id: "online",
    shortTitle: "অনলাইন কোর্স",
    title: "অনলাইন কোর্স",
    intro:
      "বাসা থেকেই সন্ধ্যার ক্লাসে জাপানিজ ভাষা শিখে জাপানে নিজের ভবিষ্যৎ গড়ুন।",
    details: [
      { label: "ক্লাসের সময়", value: "সন্ধ্যা ৭:০০ থেকে ৯:০০ পর্যন্ত" },
      { label: "মাসিক ফি", value: "৪,০০০ টাকা" },
      { label: "ভর্তি ফি", value: "৩,০০০ টাকা" },
      {
        label: "ভাষা কোর্সের মেয়াদ",
        value: "৭ মাস (N5: ৪ মাস, N4: ৩ মাস)",
      },
      { label: "ভাষা কোর্সের মোট খরচ", value: "২৮,০০০ টাকা" },
    ],
    skillBlock: {
      title: "Skill Development",
      rows: [
        { label: "মেয়াদ", value: "২ মাস" },
        { label: "মাসিক ফি", value: "৪,০০০ টাকা" },
        { label: "মোট খরচ", value: "৮,০০০ টাকা" },
        { label: "ভর্তি ফি", value: "৩,০০০ টাকা" },
      ],
    },
    cta: "আপনি যদি অনলাইন কোর্সের মাধ্যমে জাপানিজ ভাষা শিখে জাপানে নিজের ভবিষ্যৎ গড়তে চান, তাহলে নিচের ফর্মটি পূরণ করে আপনার আগ্রহের কথা জানান। আমাদের প্রতিনিধি আপনার সঙ্গে যোগাযোগ করবেন।",
    showInterest: true,
    formAction: ONLINE_ACTION,
    formViewUrl: gFormView(ONLINE_ID),
  },
  {
    id: "intensive",
    shortTitle: "৫ ঘণ্টার কোর্স",
    title: "৫ ঘণ্টার ট্রেনিং কোর্স",
    intro:
      "যাঁরা আবাসিকভাবে থাকতে পারবেন না, কিন্তু খুব দ্রুত ভাষা কোর্স শেষ করতে চান, তাঁদের জন্য এই সুযোগ। আমাদের সঙ্গে প্রতিদিন ৫ ঘণ্টা করে ক্লাস করতে পারবেন।",
    details: [
      { label: "ক্লাসের সময়", value: "সকাল ১০:০০ থেকে বিকাল ৪:৩০ পর্যন্ত" },
      { label: "N5", value: "৩ মাস, মাসিক ফি ১০,০০০ টাকা" },
      { label: "N4", value: "২ মাস, মাসিক ফি ১০,০০০ টাকা" },
      { label: "ভাষা কোর্সের মোট খরচ", value: "৫০,০০০ টাকা" },
    ],
    skillBlock: {
      title: "৫ ঘণ্টার Skill Development",
      rows: [
        { label: "মেয়াদ", value: "২ মাস" },
        { label: "মাসিক ফি", value: "৫,০০০ টাকা" },
        { label: "মোট খরচ", value: "১০,০০০ টাকা" },
        { label: "ভর্তি ফি", value: "৩,০০০ টাকা" },
      ],
    },
    cta: "আপনি যদি ৫ ঘণ্টার কোর্সের মাধ্যমে জাপানিজ ভাষা শিখে জাপানে নিজের ভবিষ্যৎ গড়তে চান, তাহলে নিচের ফর্মটি পূরণ করে আপনার আগ্রহের কথা জানান। আমাদের প্রতিনিধি আপনার সঙ্গে যোগাযোগ করবেন।",
    showInterest: true,
    formAction: INTENSIVE_ACTION,
    formViewUrl: gFormView(INTENSIVE_ID),
  },
];

export const JAPANESE_COURSE_IDS = JAPANESE_COURSE_PACKAGES.map(
  (p) => p.id
) as JapaneseCourseId[];

export function getJapaneseCourseById(
  id: string
): JapaneseCoursePackage | undefined {
  return JAPANESE_COURSE_PACKAGES.find((p) => p.id === id);
}

export function japaneseCoursePath(id: JapaneseCourseId): string {
  return `/courses/japanese-language-courses/${id}/`;
}

export type JapaneseCourseRegistrationPayload = {
  courseId: JapaneseCourseId;
  fullName: string;
  mobile: string;
  email?: string;
  address: string;
  priorJapanese: "yes" | "no";
  interest?: CourseInterest;
  comments?: string;
};

function buildFields(
  data: JapaneseCourseRegistrationPayload
): Record<string, string> {
  return {
    [JP_COURSE_FORM_ENTRIES.name]: data.fullName.trim(),
    [JP_COURSE_FORM_ENTRIES.address]: data.address.trim(),
    [JP_COURSE_FORM_ENTRIES.mobile]: data.mobile.trim(),
    [JP_COURSE_FORM_ENTRIES.comments]: data.comments?.trim() ?? "",
  };
}

function submitViaHiddenIframe(
  formAction: string,
  fields: Record<string, string>
): Promise<void> {
  return new Promise((resolve, reject) => {
    const iframeName = `gform_jp_${Date.now()}`;
    const iframe = document.createElement("iframe");
    iframe.name = iframeName;
    iframe.title = "Hidden Google Form target";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const form = document.createElement("form");
    form.method = "POST";
    form.action = formAction;
    form.target = iframeName;
    form.enctype = "application/x-www-form-urlencoded";
    form.acceptCharset = "UTF-8";
    form.style.display = "none";

    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);

    const cleanup = () => {
      window.setTimeout(() => {
        form.remove();
        iframe.remove();
      }, 4000);
    };

    iframe.addEventListener(
      "load",
      () => {
        cleanup();
        resolve();
      },
      { once: true }
    );

    try {
      form.submit();
      window.setTimeout(() => {
        cleanup();
        resolve();
      }, 1800);
    } catch (err) {
      cleanup();
      reject(err);
    }
  });
}

async function submitViaFetch(
  formAction: string,
  fields: Record<string, string>
): Promise<void> {
  const body = new URLSearchParams();
  Object.entries(fields).forEach(([k, v]) => body.set(k, v));
  await fetch(formAction, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
}

/** Prefill Google Form URL — works even when formResponse returns 401. */
export function buildJapaneseCoursePrefillUrl(
  data: JapaneseCourseRegistrationPayload
): string {
  const pkg = JAPANESE_COURSE_PACKAGES.find((c) => c.id === data.courseId);
  if (!pkg) throw new Error("Unknown course");

  const fields = buildFields(data);
  const params = new URLSearchParams();
  params.set("usp", "pp_url");
  Object.entries(fields).forEach(([k, v]) => params.set(k, v));
  return `${pkg.formViewUrl}?${params.toString()}`;
}

/**
 * Silent submit only (no redirect / new tab).
 * One POST only — iframe path (same as narailSeminar). Do not also fetch,
 * or Google Sheet gets duplicate rows.
 *
 * Google Form must allow anonymous responses:
 *   Settings → Responses → OFF "Restrict to users in …"
 *   and OFF "Limit to 1 response" / required sign-in.
 */
export async function submitJapaneseCourseRegistration(
  data: JapaneseCourseRegistrationPayload
): Promise<void> {
  const pkg = JAPANESE_COURSE_PACKAGES.find((c) => c.id === data.courseId);
  if (!pkg?.formAction) throw new Error("Unknown course");

  const fields = buildFields(data);

  try {
    await submitViaHiddenIframe(pkg.formAction, fields);
  } catch {
    await submitViaFetch(pkg.formAction, fields);
  }
}
