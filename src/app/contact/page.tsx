"use client";
import { ContactForm } from "@/components/PC/ContactUs/ContactForm";
import { ContactInfo } from "@/components/PC/ContactUs/ContactInfo";
import { useTranslations } from "@/lib/hooks";

// 모바일 컴포넌트 import (헤더/푸터 제외)
import { ContactForm as MobileContactForm } from "@/components/Mobile/ContactUs/ContactForm";
import { ContactInfo as MobileContactInfo } from "@/components/Mobile/ContactUs/ContactInfo";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <div className="flex relative flex-col w-full">
      {/* PC 버전 - sm 이상에서만 표시 */}
      <div className="hidden sm:flex sm:relative sm:flex-col sm:w-full">
        <div className="flex overflow-hidden absolute top-0 right-0 z-0 justify-center items-center text-3xl font-semibold tracking-tighter text-center text-blue-600 whitespace-nowrap bg-sky-50 h-[360px] w-[1920px] max-md:max-w-full"></div>
        <div className="flex overflow-hidden absolute right-0 z-0 justify-center items-center text-3xl font-semibold tracking-tighter text-center text-blue-600 whitespace-nowrap bg-slate-900 bottom-0 h-[340px] w-[1920px] max-md:max-w-full"></div>
        <section className="flex z-0 flex-col py-8 w-full max-md:max-w-full">
          <div className="relative flex z-0 flex-col justify-center items-end self-center py-10 max-w-full w-[1280px]">
            <ContactForm />
            <ContactInfo />
          </div>
        </section>
      </div>

      {/* 모바일 버전 - sm 미만에서만 표시 */}
      <div className="block sm:hidden overflow-hidden mx-auto w-full">
        <main className="w-full">
          <section className="flex flex-col justify-center px-4 py-10 w-full text-xl font-semibold text-blue-600 bg-sky-50 min-h-[100px]">
            <h1 className="w-full text-blue-600">{t("title")}</h1>
          </section>
          <MobileContactForm />
          <div className="pb-10 px-4">
            <MobileContactInfo />
          </div>
        </main>
      </div>
    </div>
  );
} 