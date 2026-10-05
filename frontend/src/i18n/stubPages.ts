import type { Lang } from "./translations";

export type StubKey =
  | "interview"
  | "n4"
  | "n5"
  | "onlineMock"
  | "ssw"
  | "studentVisa"
  | "weeklyMock"
  | "nonResidential"
  | "teachers"
  | "residential"
  | "success"
  | "admission"
  | "japanJobs";

type Stub = { title: string; body: string; card?: string };

const en: Record<StubKey, Stub> = {
  interview: {
    title: "Japan Visa Interview Preparation",
    body: "Course details will be updated by the content team.",
  },
  n4: {
    title: "JLPT N4 Preparation in Bangladesh",
    body: "Course details will be updated by the content team.",
  },
  n5: {
    title: "JLPT N5 Course in Bangladesh",
    body: "Course details will be updated by the content team.",
  },
  onlineMock: {
    title: "Japan Mock Interview From Bangladesh",
    body: "Course details will be updated by the content team.",
  },
  ssw: {
    title: "SSW Visa Training in Bangladesh",
    body: "Course details will be updated by the content team.",
  },
  studentVisa: {
    title: "Japan Student Visa From Bangladesh",
    body: "Course details will be updated by the content team.",
  },
  weeklyMock: {
    title: "Japanese Mock Test in Bangladesh",
    body: "Course details will be updated by the content team.",
  },
  nonResidential: {
    title: "Non-Residential Japanese Language Course in Dhaka",
    body: "Course details will be updated by the content team.",
  },
  teachers: {
    title: "Our Japanese Language Teachers in Dhaka",
    body: "Teacher details will be updated by the content team.",
  },
  residential: {
    title: "Residential Japanese Language Course in Dhaka",
    body: "Facility details will be updated by the content team.",
  },
  success: {
    title: "KTTI Success Stories & Reviews",
    body: "Stories will be updated by the content team.",
  },
  admission: {
    title: "Japanese Language Course Admission",
    body: "",
    card: "Admission form details will be updated by the content team.",
  },
  japanJobs: {
    title: "Japan Job Placement From Bangladesh",
    body: "Explore the previous career opportunities below.",
  },
};

const bn: Record<StubKey, Stub> = {
  interview: {
    title: "জাপান ভিসা ইন্টারভিউ প্রস্তুতি",
    body: "কোর্সের বিস্তারিত কনটেন্ট টিম হালনাগাদ করবে।",
  },
  n4: {
    title: "বাংলাদেশে JLPT N4 প্রস্তুতি",
    body: "কোর্সের বিস্তারিত কনটেন্ট টিম হালনাগাদ করবে।",
  },
  n5: {
    title: "বাংলাদেশে JLPT N5 কোর্স",
    body: "কোর্সের বিস্তারিত কনটেন্ট টিম হালনাগাদ করবে।",
  },
  onlineMock: {
    title: "বাংলাদেশ থেকে জাপান মক ইন্টারভিউ",
    body: "কোর্সের বিস্তারিত কনটেন্ট টিম হালনাগাদ করবে।",
  },
  ssw: {
    title: "বাংলাদেশে SSW ভিসা প্রশিক্ষণ",
    body: "কোর্সের বিস্তারিত কনটেন্ট টিম হালনাগাদ করবে।",
  },
  studentVisa: {
    title: "বাংলাদেশ থেকে জাপান স্টুডেন্ট ভিসা",
    body: "কোর্সের বিস্তারিত কনটেন্ট টিম হালনাগাদ করবে।",
  },
  weeklyMock: {
    title: "বাংলাদেশে জাপানি মক টেস্ট",
    body: "কোর্সের বিস্তারিত কনটেন্ট টিম হালনাগাদ করবে।",
  },
  nonResidential: {
    title: "ঢাকায় নন-রেসিডেন্সিয়াল জাপানি ভাষা কোর্স",
    body: "কোর্সের বিস্তারিত কনটেন্ট টিম হালনাগাদ করবে।",
  },
  teachers: {
    title: "ঢাকায় আমাদের জাপানি ভাষার শিক্ষক",
    body: "শিক্ষকদের বিস্তারিত কনটেন্ট টিম হালনাগাদ করবে।",
  },
  residential: {
    title: "ঢাকায় আবাসিক জাপানি ভাষা কোর্স",
    body: "সুবিধার বিস্তারিত কনটেন্ট টিম হালনাগাদ করবে।",
  },
  success: {
    title: "KTTI-এর সফলতার গল্প ও রিভিউ",
    body: "গল্পগুলো কনটেন্ট টিম হালনাগাদ করবে।",
  },
  admission: {
    title: "জাপানি ভাষা কোর্সে ভর্তি",
    body: "",
    card: "ভর্তি ফর্মের বিস্তারিত কনটেন্ট টিম হালনাগাদ করবে।",
  },
  japanJobs: {
    title: "বাংলাদেশ থেকে জাপান জব প্লেসমেন্ট",
    body: "নিচের আগের ক্যারিয়ার সুযোগগুলো দেখুন।",
  },
};

const jp: Record<StubKey, Stub> = {
  interview: {
    title: "日本ビザ面接対策",
    body: "コースの詳細はコンテンツチームが更新します。",
  },
  n4: { title: "バングラデシュのJLPT N4対策", body: "コースの詳細はコンテンツチームが更新します。" },
  n5: { title: "バングラデシュのJLPT N5コース", body: "コースの詳細はコンテンツチームが更新します。" },
  onlineMock: { title: "バングラデシュからの日本模擬面接", body: "コースの詳細はコンテンツチームが更新します。" },
  ssw: { title: "バングラデシュの特定技能ビザ訓練", body: "コースの詳細はコンテンツチームが更新します。" },
  studentVisa: { title: "バングラデシュからの日本留学ビザ", body: "コースの詳細はコンテンツチームが更新します。" },
  weeklyMock: { title: "バングラデシュの日本語模擬試験", body: "コースの詳細はコンテンツチームが更新します。" },
  nonResidential: { title: "ダッカの通学日本語コース", body: "コースの詳細はコンテンツチームが更新します。" },
  teachers: {
    title: "ダッカの日本語講師",
    body: "講師の詳細はコンテンツチームが更新します。",
  },
  residential: {
    title: "ダッカの寮付き日本語コース",
    body: "施設の詳細はコンテンツチームが更新します。",
  },
  success: {
    title: "KTTIの成功事例とレビュー",
    body: "事例はコンテンツチームが更新します。",
  },
  admission: {
    title: "日本語コース入学",
    body: "",
    card: "入学フォームの詳細はコンテンツチームが更新します。",
  },
  japanJobs: {
    title: "バングラデシュからの日本就職",
    body: "下のこれまでのキャリア機会をご覧ください。",
  },
};

export function getStub(lang: Lang, key: StubKey): Stub {
  if (lang === "bn") return bn[key];
  if (lang === "jp") return jp[key];
  return en[key];
}
