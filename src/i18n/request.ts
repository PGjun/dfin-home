import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "ko"] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that the incoming locale is valid
  if (!locale || !locales.includes(locale as (typeof locales)[number])) {
    locale = "en"; // fallback to default locale
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
