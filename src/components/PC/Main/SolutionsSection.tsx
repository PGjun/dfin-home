"use client";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTranslations } from "@/lib/hooks";
import { SolutionCard } from "./SolutionCard";

export const SolutionsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
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
        backgroundImage: "url('/bg_solutions_circle.svg')",
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
                  src="/icon_right_arrow_white.svg"
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
              imageSrc="/img_solutions1.png"
              title={t("card1.title")}
              details={t.raw("card1.features") as string[]}
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
              imageSrc="/img_solutions2.png"
              title={t("card2.title")}
              details={t.raw("card2.features") as string[]}
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
              <ul className="pt-2 w-full tracking-tight text-slate-600 list-disc pl-5 space-y-1">
                {(t.raw("card3.features") as string[]).map((detail, index) => (
                  <li key={index} className="text-slate-600">
                    {detail}
                  </li>
                ))}
             </ul>
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
