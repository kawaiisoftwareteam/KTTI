export type CvEducationRow = {
  id: string;
  enterYear: string;
  graduateYear: string;
  course: string;
  school: string;
  major: string;
};

export type CvWorkRow = {
  id: string;
  periodStart: string;
  periodEnd: string;
  company: string;
  jobType: string;
  duties: string;
};

export type CvData = {
  phoneticName: string;
  name: string;
  birthday: string;
  age: string;
  sex: "" | "male" | "female" | "other";
  currentAddress: string;
  hometown: string;
  tel: string;
  email: string;
  photoDataUrl: string;
  education: CvEducationRow[];
  work: CvWorkRow[];
  jpLevel: string;
  jpReading: string;
  jpSpeaking: string;
  jpWriting: string;
  enLevel: string;
  enReading: string;
  enSpeaking: string;
  enWriting: string;
  otherLanguages: string;
  fatherName: string;
  motherName: string;
  nationality: string;
  maritalStatus: string;
  nationalId: string;
  passportNo: string;
  permanentAddress: string;
  specialties: string;
};

export type CvLangPref = "en" | "jp";

export const CV_STORAGE_KEY = "ktti-cv-draft-v3";
export const CV_LANG_KEY = "ktti-cv-lang-pref";

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function newEducationRow(): CvEducationRow {
  return {
    id: uid(),
    enterYear: "",
    graduateYear: "",
    course: "",
    school: "",
    major: "",
  };
}

export function newWorkRow(): CvWorkRow {
  return {
    id: uid(),
    periodStart: "",
    periodEnd: "",
    company: "",
    jobType: "",
    duties: "",
  };
}

export function emptyCvData(): CvData {
  return {
    phoneticName: "",
    name: "",
    birthday: "",
    age: "",
    sex: "",
    currentAddress: "",
    hometown: "",
    tel: "",
    email: "",
    photoDataUrl: "",
    education: [newEducationRow(), newEducationRow(), newEducationRow()],
    work: [newWorkRow(), newWorkRow()],
    jpLevel: "",
    jpReading: "",
    jpSpeaking: "",
    jpWriting: "",
    enLevel: "",
    enReading: "",
    enSpeaking: "",
    enWriting: "",
    otherLanguages: "",
    fatherName: "",
    motherName: "",
    nationality: "",
    maritalStatus: "",
    nationalId: "",
    passportNo: "",
    permanentAddress: "",
    specialties: "",
  };
}

export function calcAgeFromBirthday(birthday: string): string {
  const normalized = birthday.trim().replace(/[-.]/g, "/");
  const parts = normalized
    .split(/[/年月日\s]+/)
    .filter(Boolean)
    .map((p) => Number(p));
  if (parts.length < 3 || parts.some((n) => Number.isNaN(n))) return "";
  const [y, m, d] = parts;
  if (!y || !m || !d) return "";
  const birth = new Date(y, m - 1, d);
  if (Number.isNaN(birth.getTime())) return "";
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const beforeBirthday =
    now.getMonth() < birth.getMonth() ||
    (now.getMonth() === birth.getMonth() && now.getDate() < birth.getDate());
  if (beforeBirthday) age -= 1;
  return age >= 0 && age < 120 ? String(age) : "";
}

export function formatBirthdayDisplay(birthday: string): string {
  const normalized = birthday.trim().replace(/[-.]/g, "/");
  const parts = normalized.split(/[/年月日\s]+/).filter(Boolean);
  if (parts.length < 3) return birthday;
  const [y, m, d] = parts;
  return `${y}年 ${m.padStart(2, "0")}月 ${d.padStart(2, "0")}日`;
}
