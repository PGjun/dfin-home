"use client";
import { useState, useEffect } from "react";
import { useTranslations, useLocale, useSetLocale } from "@/lib/hooks";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Header = () => {
  const t = useTranslations();
  const locale = useLocale();
  const setLocale = useSetLocale();
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 뒤로가기로 드롭다운 닫기 처리
  useEffect(() => {
    const handlePopState = () => {
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
        // 히스토리를 다시 추가해서 실제 뒤로가기 방지
        window.history.pushState(null, "", window.location.href);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [isDropdownOpen]);

  const isActive = (href: string) => {
    if (!isMounted) return false; // 서버 렌더링 시에는 항상 false 반환
    const currentPath = pathname || "/";
    const targetPath = href;
    return (
      currentPath === targetPath ||
      (targetPath !== "/" && currentPath.startsWith(targetPath))
    );
  };

  const switchLanguage = (newLocale: "ko" | "en") => {
    setLocale(newLocale);
    setIsDropdownOpen(false);
  };

  const handleDropdownClick = () => {
    if (!isDropdownOpen) {
      // 드롭다운 열 때 히스토리에 상태 추가
      window.history.pushState(
        { dropdownOpen: true },
        "",
        window.location.href
      );
    }
    setIsDropdownOpen(!isDropdownOpen);
  };

  const currentLang = locale === "ko" ? "한국어" : "English";

  // 메인페이지인지 확인하는 함수
  const isMainPage = () => {
    if (!isMounted) return false; // 서버 렌더링 시에는 항상 false 반환
    const currentPath = pathname || "/";
    return currentPath === "/";
  };

  return (
    <header className="flex flex-col items-center w-full text-sm tracking-tight min-h-14 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 items-center max-w-full h-full w-[1280px]">
        {/* 로고 */}
        <Link
          href="/"
          className="flex shrink-0 self-stretch my-auto h-7 w-[126px] items-center justify-center hover:opacity-80 transition-opacity duration-200 cursor-pointer"
        >
          <img
            src="/logo_dfin_header.svg"
            alt="DFIN"
            width={126}
            height={28}
          />
        </Link>

        {/* 네비게이션 */}
        <div className="flex flex-col flex-1 shrink justify-center self-stretch pl-20 my-auto basis-0 min-w-60 text-slate-950 max-md:max-w-full">
          <nav className="flex flex-wrap items-center w-full max-md:max-w-full">
            <Link
              href="/about"
              className="block gap-1 self-stretch px-5 py-3 my-auto transition-all duration-200 hover:text-blue-600 cursor-pointer text-slate-950 relative z-10"
            >
              <span
                className={`whitespace-nowrap ${
                  isActive("/about")
                    ? "font-bold border-b-2 border-solid border-b-blue-600 text-blue-600"
                    : ""
                }`}
              >
                {t("Navigation.about")}
              </span>
            </Link>
            <Link
              href="/solutions"
              className="block gap-1 self-stretch px-5 py-3 my-auto transition-all duration-200 hover:text-blue-600 cursor-pointer text-slate-950 relative z-10"
            >
              <span
                className={`whitespace-nowrap ${
                  isActive("/solutions")
                    ? "font-bold border-b-2 border-solid border-b-blue-600 text-blue-600"
                    : ""
                }`}
              >
                {t("Navigation.solutions")}
              </span>
            </Link>
            <Link
              href="/service"
              className="block gap-1 self-stretch px-5 py-3 my-auto transition-all duration-200 hover:text-blue-600 cursor-pointer text-slate-950 relative z-10"
            >
              <span
                className={`whitespace-nowrap ${
                  isActive("/service")
                    ? "font-bold border-b-2 border-solid border-b-blue-600 text-blue-600"
                    : ""
                }`}
              >
                {t("Navigation.service")}
              </span>
            </Link>
            <Link
              href="/contact"
              className="block gap-1 self-stretch px-5 py-3 my-auto transition-all duration-200 hover:text-blue-600 cursor-pointer text-slate-950 relative z-10"
            >
              <span
                className={`${
                  isActive("/contact")
                    ? "font-bold border-b-2 border-solid border-b-blue-600 text-blue-600"
                    : ""
                }`}
              >
                {t("Navigation.contact")}
              </span>
            </Link>
          </nav>
        </div>

        {/* 언어 선택 드롭다운 */}
        <div className="relative z-50">
          <button
            type="button"
            onClick={handleDropdownClick}
            className={`flex gap-1 justify-center items-center self-stretch px-5 py-3 my-auto whitespace-nowrap transition-all duration-200 rounded-lg cursor-pointer ${
              isMainPage() ? "text-white" : "text-blue-600"
            }`}
          >
            <img
              src={isMainPage() ? "/icon_language_white.svg" : "/icon_language_blue.svg"}
              alt="Language icon"
              width={24}
              height={24}
              className="object-contain shrink-0 self-stretch my-auto aspect-square"
            />
            <span
              className={`self-stretch my-auto ${
                isMainPage() ? "text-white" : "text-blue-600"
              }`}
            >
              {currentLang}
            </span>
            <img
              src={
                isMainPage() ? "/icon_arrow_down_white.svg" : "/icon_arrow_down_blue.svg"
              }
              alt="Dropdown arrow"
              width={12}
              height={12}
              className={`object-contain shrink-0 self-stretch my-auto aspect-square transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* 드롭다운 메뉴 - 조건부 렌더링 */}
          {isDropdownOpen && (
            <div
              className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl min-w-32"
              style={{
                zIndex: 9999,
                position: "absolute",
                top: "100%",
                right: 0,
                marginTop: "4px",
              }}
            >
              <button
                type="button"
                onClick={() => switchLanguage("en")}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-blue-50 rounded-t-lg transition-colors duration-200 cursor-pointer ${
                  locale === "en"
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-950"
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => switchLanguage("ko")}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-blue-50 rounded-b-lg transition-colors duration-200 cursor-pointer ${
                  locale === "ko"
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-950"
                }`}
              >
                한국어
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
