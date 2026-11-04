/** 15 DAY Basic Japanese Language Course — Google Form
 *  https://docs.google.com/forms/d/e/1FAIpQLSeFVw_2B9E__yRXv5TZ61MU88O44MnHJ1bsAk-ET-F_Arxd5Q/viewform
 *  Option strings must match the form exactly.
 */

export const BASIC_JP_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSeFVw_2B9E__yRXv5TZ61MU88O44MnHJ1bsAk-ET-F_Arxd5Q/formResponse";

export const BASIC_JP_ENTRIES = {
  name: "entry.1575055194",
  mobile: "entry.801073070",
  area: "entry.870329832",
  course: "entry.1496068859",
} as const;

export const BASIC_JP_COURSES = [
  {
    value: "আবাসিক : ৭,৫০০ | থাকা, খাওয়া ও শেখা",
    title: "আবাসিক",
    price: "৭,৫০০",
    detail: "থাকা, খাওয়া ও শেখা",
  },
  {
    value: "অনাবাসিক: ২,৫০০। শুধু কোর্স",
    title: "অনাবাসিক",
    price: "২,৫০০",
    detail: "শুধু কোর্স",
  },
] as const;

export const BASIC_JP_PHONES = ["01781647247", "01847275911"] as const;

export async function submitBasicJapaneseCourse(data: {
  name: string;
  mobile: string;
  area: string;
  course: string;
}): Promise<void> {
  const body = new FormData();
  body.set(BASIC_JP_ENTRIES.name, data.name);
  body.set(BASIC_JP_ENTRIES.mobile, data.mobile);
  body.set(BASIC_JP_ENTRIES.area, data.area);
  body.set(BASIC_JP_ENTRIES.course, data.course);

  await fetch(BASIC_JP_FORM_ACTION, {
    method: "POST",
    mode: "no-cors",
    body,
  });
}
