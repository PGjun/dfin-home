"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

interface ServiceStep {
  title: string;
  desc: string[];
}

export const ServiceSection = () => {
  const t = useTranslations("Main.ServiceSection");
  const locale = useLocale();
  const steps = t.raw("steps") as ServiceStep[];

  return (
    <section className="flex overflow-hidden relative gap-4 items-start px-4 w-full">
      <div className="flex absolute right-0 top-0 z-0 flex-col pb-96 h-[529px]">
        <img
          src="/mobile_service_pattern.svg"
          className="object-contain max-w-full"
          alt="Background pattern"
        />
      </div>
      <div className="z-0 flex-1 shrink py-10 w-full basis-36 min-w-60">
        <div className="flex flex-col pb-5 w-full border-b border-solid border-b-[color:var(--Font-Basic,#000B20)]">
          <div className="flex gap-2.5 items-center w-full text-xl font-semibold tracking-tight">
            <h2 className="self-stretch my-auto whitespace-pre-line bg-gradient-to-r from-[#2B64F8] via-[#5C1799] to-[#5C1799] bg-clip-text text-transparent">
              {t("title")}
            </h2>
          </div>
          <p className="pt-2.5 w-full whitespace-pre-line text-sm tracking-tight text-slate-950">
            {t("desc")}
          </p>
          <div className="self-start pt-5">
            <Link
              href="/service"
              locale={locale}
              className="flex gap-1 items-center border-b border-solid border-b-[color:var(--Font-Basic,#000B20)]"
            >
              <div className="flex gap-2.5 items-start self-stretch my-auto text-sm font-semibold tracking-tight whitespace-nowrap text-slate-950">
                <div className="flex items-center">
                  <span className="self-stretch my-auto">{t("more")}</span>
                </div>
              </div>
              <div className="flex items-center self-stretch my-auto w-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d5c07f17293124d5b8cacbfea7e8a49b885099b?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0"
                  className="object-contain self-stretch my-auto w-4 aspect-square"
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="pt-10 w-full">
          <div className="overflow-x-auto">
            <div
              className="flex gap-4 pb-2"
              style={{ width: `${steps.length * 208}px` }}
            >
              {steps.map((step, index) => (
                <article
                  key={index}
                  className={`flex-shrink-0 px-4 py-6 rounded-sm min-h-[260px] w-[200px] ${
                    index % 2 === 0 ? "bg-sky-50" : "bg-slate-100"
                  }`}
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex-1 w-full">
                      <h3
                        className={`pb-5 w-full text-base font-semibold tracking-tight ${
                          index % 2 === 0 ? "text-blue-600" : "text-slate-950"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="w-full text-sm tracking-tight text-slate-600">
                        {step.desc}
                      </p>
                    </div>
                    <div className="flex gap-1 items-center mt-4">
                      {Array.from({ length: index + 1 }, (_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`w-2.5 h-2.5 rounded-full shrink-0 self-stretch my-auto ${
                            index % 2 === 1 ? "bg-[#2B64F8]" : "bg-[#8B5CF6]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
