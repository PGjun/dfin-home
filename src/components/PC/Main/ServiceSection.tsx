"use client";

import { useRef } from "react";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { ServiceCard } from "./ServiceCard";

interface ServiceStep {
  title: string;
  desc: string[];
  iconCount: number;
  bgColor: "blue" | "gray";
}

export const ServiceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const locale = useLocale();
  const t = useTranslations("Main.ServiceSection");

  const services: ServiceStep[] = [
    {
      title: t("steps.0.title"),
      desc: t.raw("steps.0.desc") as string[],
      iconCount: 1,
      bgColor: "blue" as const,
    },
    {
      title: t("steps.1.title"),
      desc: t.raw("steps.1.desc") as string[],
      iconCount: 2,
      bgColor: "gray" as const,
    },
    {
      title: t("steps.2.title"),
      desc: t.raw("steps.2.desc") as string[],
      iconCount: 3,
      bgColor: "blue" as const,
    },
    {
      title: t("steps.3.title"),
      desc: t.raw("steps.3.desc") as string[],
      iconCount: 4,
      bgColor: "gray" as const,
    },
    {
      title: t("steps.4.title"),
      desc: t.raw("steps.4.desc") as string[],
      iconCount: 5,
      bgColor: "blue" as const,
    },
    {
      title: t("steps.5.title"),
      desc: t.raw("steps.5.desc") as string[],
      iconCount: 6,
      bgColor: "gray" as const,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="flex z-0 flex-col pt-10 justify-center w-full max-md:max-w-full relative"
    >
      <div className="flex overflow-hidden items-end left-[-200px] bottom-0 z-0 top-0 flex-col px-20 w-[1920px] absolute max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8416f9135b3a269539956f11193635059113b256?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0"
          className="object-contain mb-0 max-w-full aspect-[1.56] w-[428px] max-md:mb-2.5"
          alt="Background decoration"
        />
      </div>
      <div className="z-0 self-center pb-10 max-w-full w-[1280px]">
        <div
          className={`flex flex-col pb-10 w-full border-b border-solid border-b-[color:var(--Font-Basic,#000B20)] max-md:max-w-full`}
        >
          <div className="w-full max-md:max-w-full">
            <h2 className="text-3xl font-bold tracking-tighter max-md:max-w-full bg-gradient-to-r from-[#2B64F8] via-[#5C1799] to-[#5C1799] bg-clip-text text-transparent">
              {t("title")}
            </h2>
            <p className="mt-5 text-xl tracking-tight text-slate-950 max-md:max-w-full whitespace-pre-line">
              {t("desc")}
            </p>
          </div>
          <div className="flex gap-1 items-center self-start mt-12 border-b border-solid border-b-[color:var(--Font-Basic,#000B20)] max-md:mt-10 group transition-colors duration-200">
            <Link
              href="/service"
              locale={locale}
              className="flex gap-1 items-center"
            >
              <div className="flex gap-2.5 items-start self-stretch my-auto text-xl font-semibold tracking-tight whitespace-nowrap text-slate-950 transition-colors duration-200">
                <div className="flex items-center">
                  <span className="self-stretch my-auto">{t("more")}</span>
                </div>
              </div>
              <div className="flex items-center self-stretch my-auto w-5 group-hover:translate-x-1 transition-transform duration-200">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f5ba8d989289004e298ab44d76d1759d1b6eaed?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0"
                  className="object-contain self-stretch my-auto w-5 aspect-square"
                  alt="More icon"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="relative mt-10">
          <div className="overflow-auto">
            <div className={`flex gap-5`}>
              {services.map((service, index) => (
                <div key={index} className={`transition-all duration-1000`}>
                  <ServiceCard
                    title={service.title}
                    description={service.desc}
                    iconCount={service.iconCount}
                    bgColor={service.bgColor}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
