/** Japan Education & Career Roadmap Seminar — Narail
 *  https://docs.google.com/forms/d/e/1FAIpQLSfPLSlbDHHlY7gEFR3h7bH-pwahGzyK_fKL5LJXKYbFDE9kGA/viewform
 *
 *  Google Form must allow anonymous responses:
 *  Settings → Responses → turn OFF "Limit to 1 response"
 *  and OFF any "Restrict to users in …" option.
 *  (Otherwise formResponse returns 401 and rows never appear in the sheet.)
 */

export const NARAIL_SEMINAR_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfPLSlbDHHlY7gEFR3h7bH-pwahGzyK_fKL5LJXKYbFDE9kGA/viewform";

export const NARAIL_SEMINAR_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfPLSlbDHHlY7gEFR3h7bH-pwahGzyK_fKL5LJXKYbFDE9kGA/formResponse";

export const NARAIL_SEMINAR_ENTRIES = {
  fullName: "entry.877086558",
  mobile: "entry.1498135098",
  district: "entry.1424661284",
} as const;

/** Exact multiple-choice values from the Google Form */
export const NARAIL_DISTRICTS = [
  "নড়াইল",
  "যশোর",
  "মাগুরা",
  "খুলনা",
] as const;

export type NarailDistrict = (typeof NARAIL_DISTRICTS)[number];

export type NarailSeminarPayload = {
  fullName: string;
  mobile: string;
  /** One of NARAIL_DISTRICTS, or custom text for "Other" */
  district: string;
  isOtherDistrict?: boolean;
};

function buildFields(data: NarailSeminarPayload): Record<string, string> {
  const fields: Record<string, string> = {
    [NARAIL_SEMINAR_ENTRIES.fullName]: data.fullName.trim(),
    [NARAIL_SEMINAR_ENTRIES.mobile]: data.mobile.trim(),
  };

  if (data.isOtherDistrict) {
    fields[NARAIL_SEMINAR_ENTRIES.district] = "__other_option__";
    fields[`${NARAIL_SEMINAR_ENTRIES.district}.other_option_response`] =
      data.district.trim();
  } else {
    fields[NARAIL_SEMINAR_ENTRIES.district] = data.district;
  }

  return fields;
}

/** Classic browser form POST into a hidden iframe — same path Google's own form uses. */
function submitViaHiddenIframe(fields: Record<string, string>): Promise<void> {
  return new Promise((resolve, reject) => {
    const iframeName = `gform_${Date.now()}`;
    const iframe = document.createElement("iframe");
    iframe.name = iframeName;
    iframe.title = "Hidden Google Form target";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const form = document.createElement("form");
    form.method = "POST";
    form.action = NARAIL_SEMINAR_FORM_ACTION;
    form.target = iframeName;
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
      // Some browsers never fire load on opaque/cross-origin iframe — still resolve.
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

async function submitViaFetch(fields: Record<string, string>): Promise<void> {
  const body = new FormData();
  Object.entries(fields).forEach(([k, v]) => body.set(k, v));
  await fetch(NARAIL_SEMINAR_FORM_ACTION, {
    method: "POST",
    mode: "no-cors",
    body,
  });
}

export async function submitNarailSeminarRegistration(
  data: NarailSeminarPayload
): Promise<void> {
  const fields = buildFields(data);
  // Iframe first (most reliable for Google Forms); fetch as backup.
  try {
    await submitViaHiddenIframe(fields);
  } catch {
    await submitViaFetch(fields);
  }
}

/** Prefill URL — opens Google's own form if site POST is blocked by Form settings. */
export function buildNarailSeminarPrefillUrl(data: NarailSeminarPayload): string {
  const params = new URLSearchParams();
  params.set("usp", "pp_url");
  params.set(NARAIL_SEMINAR_ENTRIES.fullName, data.fullName.trim());
  params.set(NARAIL_SEMINAR_ENTRIES.mobile, data.mobile.trim());
  if (!data.isOtherDistrict) {
    params.set(NARAIL_SEMINAR_ENTRIES.district, data.district);
  }
  return `${NARAIL_SEMINAR_FORM_URL}?${params.toString()}`;
}
