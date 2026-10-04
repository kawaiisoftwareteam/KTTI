/** 15 DAY Basic Japanese Language Course — Google Form
 *  https://docs.google.com/forms/d/e/1FAIpQLSeFVw_2B9E__yRXv5TZ61MU88O44MnHJ1bsAk-ET-F_Arxd5Q/viewform
 *  Option strings must match the form exactly.
 */

export const BASIC_JP_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSeFVw_2B9E__yRXv5TZ61MU88O44MnHJ1bsAk-ET-F_Arxd5Q/formResponse";

export const BASIC_JP_ENTRIES = {
  name: "entry.214797096",
  mobile: "entry.1674191636",
  area: "entry.1939487401",
  course: "entry.1524168832",
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

export function submitBasicJapaneseCourse(data: {
  name: string;
  mobile: string;
  area: string;
  course: string;
}): Promise<void> {
  return new Promise((resolve) => {
    const iframeName = "ktti_basic_jp_sink";
    let iframe = document.querySelector<HTMLIFrameElement>(
      `iframe[name="${iframeName}"]`
    );
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.name = iframeName;
      iframe.title = "Form submission";
      iframe.setAttribute("aria-hidden", "true");
      iframe.tabIndex = -1;
      iframe.style.cssText =
        "position:fixed;width:0;height:0;border:0;left:0;top:0;opacity:0;pointer-events:none;";
      document.body.appendChild(iframe);
    }

    const form = document.createElement("form");
    form.action = BASIC_JP_FORM_ACTION;
    form.method = "POST";
    form.target = iframeName;
    form.style.cssText = "position:fixed;left:0;top:0;width:0;height:0;opacity:0;";

    const payload: Record<string, string> = {
      [BASIC_JP_ENTRIES.name]: data.name,
      [BASIC_JP_ENTRIES.mobile]: data.mobile,
      [BASIC_JP_ENTRIES.area]: data.area,
      [BASIC_JP_ENTRIES.course]: data.course,
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
    window.setTimeout(resolve, 600);
  });
}
