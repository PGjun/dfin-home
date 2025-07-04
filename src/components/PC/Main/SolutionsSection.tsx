"use client";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { SolutionCard } from "./SolutionCard";

export const SolutionsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const locale = useLocale();
  const t = useTranslations("Main.SolutionsSection");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" bg-cover bg-center bg-no-repeat flex relative z-0 flex-col justify-center items-center w-full bg-[#82A3C9] max-md:max-w-full"
      style={{
        backgroundImage: "url('/blue_circle.svg')",
      }}
    >
      <div className="flex absolute right-0 z-0 bottom-[-78px] h-[833px] min-h-[833px] w-[1920px] max-md:max-w-full" />
      <div className="z-0 self-center py-10 max-w-full w-[1280px]">
        <div className="flex flex-wrap gap-2.5 items-start w-full max-md:max-w-full">
          <div
            className={`flex flex-col text-white min-w-60 w-[522px] max-md:max-w-full transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="max-w-full min-h-[170px] w-[522px]">
              <h2 className="text-3xl font-semibold tracking-tighter text-white max-md:max-w-full whitespace-pre-line">
                {t("title")}
              </h2>
              <p className="mt-5 text-xl tracking-tight text-white max-md:max-w-full whitespace-pre-line">
                {t("desc")}
              </p>
            </div>
            <div className="self-start pt-12 mt-2.5 text-xl font-semibold tracking-tight whitespace-nowrap">
              <Link
                href="/solutions"
                locale={locale}
                className="flex gap-1 items-center border-b border-solid border-b-[color:var(--Primary-White,#FFF)] transition-colors duration-200 group"
              >
                <div className="flex gap-2.5 items-start self-stretch my-auto">
                  <div className="flex items-center">
                    <span className="self-stretch my-auto text-white  transition-colors duration-200">
                      {t("more")}
                    </span>
                  </div>
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cff1d0cebfcf2447aba64a981f27f5052507f64?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square group-hover:translate-x-1 transition-transform duration-200"
                  alt="More arrow"
                />
              </Link>
            </div>
          </div>
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <SolutionCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/47982d56f36f5a7612990d0b05c576b57fe118d7?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0"
              title={t("card1.title")}
              features={t.raw("card1.features") as string[]}
              tags={t.raw("card1.tags") as string[]}
              className="min-h-[322px] "
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-5 mt-8 w-full max-md:max-w-full">
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <SolutionCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5f334ffe2d557cd3c71e3c2f3f06e363ae3b3864?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0"
              title={t("card2.title")}
              features={t.raw("card2.features") as string[]}
              tags={t.raw("card2.tags") as string[]}
              className="h-full "
            />
          </div>
          <div
            className={`flex gap-5 self-start p-5 font-medium bg-sky-50 min-w-60 w-[522px] max-md:max-w-full`}
          >
            <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-60 max-md:max-w-full">
              <h3 className="text-2xl tracking-tight text-slate-950 max-md:max-w-full">
                {t("card3.title")}
              </h3>
              <div className="flex flex-col justify-center mt-5 w-full text-base tracking-tight text-slate-600 max-md:max-w-full">
                {(t.raw("card3.features") as string[]).map((feature, index) => (
                  <div
                    key={index}
                    className={`text-slate-600 max-md:max-w-full ${
                      index > 0 ? "mt-2" : ""
                    }`}
                  >
                    {feature}
                  </div>
                ))}
              </div>
              <div className="flex gap-2.5 items-start self-start px-1 mt-5 text-sm tracking-tight text-blue-600 whitespace-nowrap">
                {(t.raw("card3.tags") as string[]).map((tag, index) => (
                  <button
                    key={index}
                    className="gap-2.5 self-stretch px-6 py-2 text-blue-600 border-solid border-[1.5px] border-[color:var(--Primary-Basic,#2B64F8)] rounded-[100px] max-md:px-5"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
