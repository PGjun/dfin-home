"use client";
import * as React from "react";
import { useState, useEffect } from "react";
// import { Link } from "@/i18n/navigation";
import { useTranslations } from "@/lib/hooks";
import { ContactForm } from "@/components/Mobile/ContactUs/ContactForm";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  // const locale = useLocale();
  const t = useTranslations("Main.HeroSection");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // const scrollToNextSection = () => {
  //   const nextSection = document.querySelector("#features");
  //   if (nextSection) {
  //     nextSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <section className="flex relative flex-col w-full max-md:max-w-full">
      <div className="overflow-hidden absolute right-0 -top-14 z-0 h-[647px] w-[1920px] max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:">
          <div className="w-[50%] max-md:ml-0 max-md:w-full">
            <img
              src="/bg_main_pattern_left.svg"
              className="object-contain grow mt-20 w-full aspect-[1.5] max-md:mt-10 max-md:max-w-full"
              alt="Hero background left"
            />
          </div>
          <div className="ml-5 w-[50%] max-md:ml-0 max-md:w-full">
            <img
              src="/bg_main_pattern_right.svg"
              className="object-contain w-full aspect-[1.59] max-md:mt-10 max-md:max-w-full"
              alt="Hero background right"
            />
          </div>
        </div>
      </div>
      <div className="flex z-0 flex-col justify-center self-center max-w-full min-h-[590px] w-[1280px]">
        <div className="flex flex-wrap w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-60 max-md:max-w-full">
            <h1
              className={`text-[48px] leading-[58px] font-semibold tracking-tighter text-slate-950 max-md:max-w-full transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span style={{ color: "rgba(41,41,204,1)" }}>{t("title1")}</span>
              <span style={{ color: "rgba(41,41,204,1)" }}> {t("title2")}</span>
              <br />
              <span style={{ color: "rgba(0,11,32,1)" }}>{t("title3")}</span>
            </h1>
            <p
              className={`mt-7 text-base font-medium tracking-tight text-slate-900 whitespace-pre-line transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {t("desc")}
            </p>
          </div>
          <div className="flex flex-col flex-1 items-end self-start basis-0 max-w-[362px] max-md:max-w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
