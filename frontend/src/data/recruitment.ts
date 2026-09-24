/** Bangladesh districts for recruitment registration */
export const BD_DISTRICTS = [
  "Bagerhat",
  "Bandarban",
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

export const RECRUITMENT_FORM_URL =
  "https://forms.gle/EW5o5QzyCw1XW6Jn7";

/** Direct formResponse endpoint — submissions land in the linked Google Sheet/Form */
export const RECRUITMENT_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfzy2R8vU7Wpr20qewAdhhD30TkCmLIrLDQbUJ__U3c07wxwQ/formResponse";

export const RECRUITMENT_ENTRIES = {
  fullName: "entry.523340852",
  mobile: "entry.455679199",
  district: "entry.622208344",
  jpCourse: "entry.535277445",
  jpLevel: "entry.548108420",
  skillAssessment: "entry.203016419",
  interviewInterest: "entry.511776863",
  category: "entry.1126159593",
  practicalReady: "entry.817581516",
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

export function submitRecruitmentToGoogleForm(data: {
  fullName: string;
  mobile: string;
  district: string;
  jpCourse: string;
  jpLevel: string;
  skillAssessment: string;
  interviewInterest: string;
  category: string;
  practicalReady: string;
}): Promise<void> {
  return new Promise((resolve) => {
    const iframeName = "ktti_recruitment_sink";
    let iframe = document.querySelector<HTMLIFrameElement>(
      `iframe[name="${iframeName}"]`
    );
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.name = iframeName;
      iframe.title = "Form submission";
      iframe.setAttribute("aria-hidden", "true");
      iframe.tabIndex = -1;
      // Fixed + zero size — avoids display:none focus/scroll jumps
      iframe.style.cssText =
        "position:fixed;width:0;height:0;border:0;left:0;top:0;opacity:0;pointer-events:none;";
      document.body.appendChild(iframe);
    }

    const form = document.createElement("form");
    form.action = RECRUITMENT_FORM_ACTION;
    form.method = "POST";
    form.target = iframeName;
    form.style.cssText = "position:fixed;left:0;top:0;width:0;height:0;opacity:0;";

    const payload: Record<string, string> = {
      [RECRUITMENT_ENTRIES.fullName]: data.fullName,
      [RECRUITMENT_ENTRIES.mobile]: data.mobile,
      [RECRUITMENT_ENTRIES.district]: data.district,
      [RECRUITMENT_ENTRIES.jpCourse]: data.jpCourse,
      [RECRUITMENT_ENTRIES.jpLevel]: data.jpLevel,
      [RECRUITMENT_ENTRIES.skillAssessment]: data.skillAssessment,
      [RECRUITMENT_ENTRIES.interviewInterest]: data.interviewInterest,
      [RECRUITMENT_ENTRIES.category]: data.category,
      [RECRUITMENT_ENTRIES.practicalReady]: data.practicalReady,
    };

    for (const [name, value] of Object.entries(payload)) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
    form.remove();

    // Google Forms does not return CORS; treat fire-and-forget as success.
    window.setTimeout(resolve, 600);
  });
}
