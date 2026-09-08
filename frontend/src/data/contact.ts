export const CONTACT_EMAIL = "info@sswv.com";

export const CONTACT_PHONES = [
  "+8801817047247",
  "+8801617047247",
  "+8801847275911",
  "+8801781647247",
] as const;

/** WhatsApp digits only, no plus */
export const WHATSAPP_NUMBER = "8801817047247";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const MAILTO_URL = `mailto:${CONTACT_EMAIL}`;
