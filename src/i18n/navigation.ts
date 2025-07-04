import { createNavigation } from "next-intl/navigation";

export const locales = ["en", "ko"] as const;
export const localePrefix = "always"; // 모든 언어에 prefix 사용

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  localePrefix,
  defaultLocale: "en",
});
