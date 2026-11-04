/** Bangladesh districts — used by category UI / other pages */
export const BD_DISTRICTS = [
  "Dhaka",
  "Bandarban",
  "Bagerhat",
  "Barguna",
  "Barishal",
  "Bhola",
  "Bogra",
  "Brahmanbaria",
  "Chandpur",
  "Chattogram",
  "Chuadanga",
  "Cox's Bazar",
  "Cumilla",
  "Dhamrai",
  "Dinajpur",
  "Faridpur",
  "Feni",
  "Gaibandha",
  "Gazipur",
  "Gopalganj",
  "Habiganj",
  "Jamalpur",
  "Jashore",
  "Jhalokathi",
  "Jhenaidah",
  "Joypurhat",
  "Khagrachhari",
  "Khulna",
  "Kishoreganj",
  "Kurigram",
  "Kushtia",
  "Lakshmipur",
  "Lalmonirhat",
  "Madaripur",
  "Magura",
  "Manikganj",
  "Meherpur",
  "Moulvibazar",
  "Munshiganj",
  "Mymensingh",
  "Naogaon",
  "Narail",
  "Narayanganj",
  "Narsingdi",
  "Natore",
  "Nawabganj",
  "Netrokona",
  "Nilphamari",
  "Noakhali",
  "Pabna",
  "Panchagarh",
  "Patuakhali",
  "Pirojpur",
  "Rajbari",
  "Rajshahi",
  "Rangamati",
  "Rangpur",
  "Satkhira",
  "Shariatpur",
  "Sherpur",
  "Sirajganj",
  "Sunamganj",
  "Sylhet",
  "Tangail",
  "Thakurgaon",
] as const;

/** https://forms.gle/hc59V2kAdaZ4HosM8 */
export const RECRUITMENT_FORM_URL =
  "https://forms.gle/hc59V2kAdaZ4HosM8";

export const RECRUITMENT_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdpwdcYfzCH0ozqczKK0NzvuF3akOEtQb_j2L_k_KxM5XoF2w/formResponse";

export const RECRUITMENT_ENTRIES = {
  fullName: "entry.127653719",
  mobile: "entry.648325870",
  whatsapp: "entry.1138225617",
  jpCourse: "entry.113003442",
  jpLevel: "entry.322069157",
  skillAssessment: "entry.835121160",
  interviewInterest: "entry.546532078",
  practicalReady: "entry.683037630",
} as const;

/** Exact option strings expected by the Google Form (must stay English) */
export const FORM_OPTIONS = {
  yesNoStudy: ["Yes", "Currently studying", "No"] as const,
  levels: ["JLPT N5", "JLPT N4", "JFT A1", "JFT A2", "Other"] as const,
  interviewInterest: ["Yes", "Need more information"] as const,
  categories: [
    "Building Cleaning",
    "Construction",
    "Caregiver",
    "Aviation",
    "Others",
  ] as const,
  practical: ["Yes, I'm interested", "I want to know more"] as const,
};

export type CareerCategoryId =
  | "building-cleaning"
  | "construction"
  | "nursing-care"
  | "aviation"
  | "others";

export async function submitRecruitmentToGoogleForm(data: {
  fullName: string;
  mobile: string;
  whatsapp: string;
  jpCourse: string;
  jpLevel: string;
  skillAssessment: string;
  interviewInterest: string;
  practicalReady: string;
}): Promise<void> {
  const body = new FormData();
  body.set(RECRUITMENT_ENTRIES.fullName, data.fullName);
  body.set(RECRUITMENT_ENTRIES.mobile, data.mobile);
  body.set(RECRUITMENT_ENTRIES.whatsapp, data.whatsapp);
  body.set(RECRUITMENT_ENTRIES.jpCourse, data.jpCourse);
  body.set(RECRUITMENT_ENTRIES.jpLevel, data.jpLevel);
  body.set(RECRUITMENT_ENTRIES.skillAssessment, data.skillAssessment);
  body.set(RECRUITMENT_ENTRIES.interviewInterest, data.interviewInterest);
  body.set(RECRUITMENT_ENTRIES.practicalReady, data.practicalReady);

  // no-cors: Google Forms blocks reading the response; request still lands in the sheet.
  await fetch(RECRUITMENT_FORM_ACTION, {
    method: "POST",
    mode: "no-cors",
    body,
  });
}
