"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLocale, useTranslations, useSetLocale } from "@/lib/hooks";

export const MobileHeader = () => {
  const t = useTranslations();
  const locale = useLocale();
  const setLocale = useSetLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 뒤로가기로 메뉴 닫기 처리
  useEffect(() => {
    const handlePopState = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
        // 히스토리를 다시 추가해서 실제 뒤로가기 방지
        window.history.pushState(null, "", window.location.href);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [isMenuOpen]);

  const isActive = (href: string) => {
    if (!isMounted) return false;
    const currentPath = pathname || "/";
    const targetPath = href;
    return (
      currentPath === targetPath ||
      (targetPath !== "/" && currentPath.startsWith(targetPath))
    );
  };

  const switchLanguage = (newLocale: "ko" | "en") => {
    setLocale(newLocale);
    setIsMenuOpen(false);
  };

  const handleMenuClick = () => {
    // 메뉴 열 때 히스토리에 상태 추가
    window.history.pushState({ menuOpen: true }, "", window.location.href);
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="flex items-center justify-between px-4 w-full bg-white min-h-14 shadow-[0px_2px_4px_rgba(0,0,0,0.08)]">
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity duration-200 cursor-pointer"
        >
          <img
            src="/logo_dfin_header.svg"
            alt="DFIN"
            width={126}
            height={28}
          />
        </Link>

        <button
          type="button"
          onClick={handleMenuClick}
          className="flex items-center justify-center w-8 h-8"
        >
          <div className="flex flex-col gap-1">
            <div className="w-5 h-0.5 bg-[#ADADAD]"></div>
            <div className="w-5 h-0.5 bg-[#ADADAD]"></div>
            <div className="w-5 h-0.5 bg-[#ADADAD]"></div>
          </div>
        </button>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-blue-600">
          <div className="flex flex-col h-full w-full">
            <div className="flex items-center justify-between px-4 py-4">
              <div className="text-2xl font-bold text-white">DFIN</div>

              <button
                type="button"
                onClick={handleMenuClose}
                className="flex items-center justify-center w-8 h-8 text-white"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5L5 15M5 5L15 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex-1 flex flex-col px-8">
              <div className="space-y-12 mt-8">
                <Link
                  href="/about"
                  className={`block text-[24px] font-normal text-white transition-colors duration-200 hover:opacity-80 cursor-pointer ${
                    isActive("/about") ? "font-semibold" : ""
                  }`}
                  onClick={handleMenuItemClick}
                >
                  {isMounted ? t("Navigation.about") : "About us"}
                </Link>
                <Link
                  href="/solutions"
                  className={`block text-[24px] font-normal text-white transition-colors duration-200 hover:opacity-80 cursor-pointer ${
                    isActive("/solutions") ? "font-semibold" : ""
                  }`}
                  onClick={handleMenuItemClick}
                >
                  {isMounted ? t("Navigation.solutions") : "Solutions"}
                </Link>
                <Link
                  href="/service"
                  className={`block text-[24px] font-normal text-white transition-colors duration-200 hover:opacity-80 cursor-pointer ${
                    isActive("/service") ? "font-semibold" : ""
                  }`}
                  onClick={handleMenuItemClick}
                >
                  {isMounted ? t("Navigation.service") : "Service"}
                </Link>
                <Link
                  href="/contact"
                  className={`block text-[24px] font-normal text-white transition-colors duration-200 hover:opacity-80 cursor-pointer ${
                    isActive("/contact") ? "font-semibold" : ""
                  }`}
                  onClick={handleMenuItemClick}
                >
                  {isMounted ? t("Navigation.contact") : "Contact us"}
                </Link>
              </div>
            </nav>

            <div className="px-8 pb-8">
              <div className="flex rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => switchLanguage("en")}
                  className={`flex-1 py-3 px-6 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    locale === "en"
                      ? "bg-white text-blue-600"
                      : "bg-blue-500 text-white hover:bg-blue-400"
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => switchLanguage("ko")}
                  className={`flex-1 py-3 px-6 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    locale === "ko"
                      ? "bg-white text-blue-600"
                      : "bg-blue-500 text-white hover:bg-blue-400"
                  }`}
                >
                  한국어
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
