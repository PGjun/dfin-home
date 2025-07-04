"use client";

import { useTranslations } from "next-intl";
import { ContactForm } from "@/components/Mobile/ContactUs/ContactForm";

export const HeroSection = () => {
  const t = useTranslations("Main.HeroSection");

  return (
    <section className="w-full pb-[450px]">
      <div
        className="mt-0 w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/main_background.svg')",
          minHeight: "613px",
        }}
      >
        <div className="w-full">
          <div className="px-4 pt-16 w-full min-h-[450px]">
            <h1 className="flex-1 shrink self-stretch w-full text-[32px] leading-[38px] basis-0 text-slate-950">
              <div style={{ fontWeight: 600, color: "rgba(41,41,204,1)" }}>
                {t("title1")}
              </div>
              <div style={{ fontWeight: 600, color: "rgba(41,41,204,1)" }}>
                {t("title2")}
              </div>
              <div style={{ fontWeight: 600 }}>{t("title3")}</div>
            </h1>
            <p className="flex-1 shrink self-stretch pt-6 w-full text-[14px] basis-0 text-slate-900 whitespace-pre-line">
              {t("desc")}
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
