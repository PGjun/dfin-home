"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

export const CompanyInfoSection = () => {
  const t = useTranslations("Main.FeatureSection");
  const locale = useLocale();
  return (
    <section className="flex items-start px-4 w-full bg-sky-50">
      <div className="flex-1 shrink py-10 w-full basis-0 min-w-60">
        <div className="flex flex-col w-full">
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
              href="/about"
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

        <div className="w-full font-medium max-w-[325px]">
          <article className="flex items-start pt-5 pb-7 w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e241794704264c44a5f84f376768f368c5f2e972?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0"
              className="object-contain shrink-0 aspect-[1.32] w-[79px]"
              alt="Who We Are"
            />
            <div className="flex-1 shrink pl-5 basis-0 min-w-60">
              <h3 className="text-base tracking-tight text-slate-950">
                {t("card1.title")}
              </h3>
              <p className="mt-4 text-sm tracking-tight text-slate-600">
                {t("card1.desc")}
              </p>
            </div>
          </article>

          <article className="flex items-start pt-5 pb-7 mt-2.5 w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1294bf22f0f061d0c6add67084d486e3de7e672e?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0"
              className="object-contain shrink-0 aspect-[1.3] min-h-[60px] w-[78px]"
              alt="What We Do"
            />
            <div className="flex-1 shrink pl-5 basis-0 min-w-60">
              <h3 className="text-base tracking-tight text-slate-950">
                {t("card2.title")}
              </h3>
              <p className="mt-4 text-sm tracking-tight text-slate-600">
                {t("card2.desc")}
              </p>
            </div>
          </article>

          <article className="flex items-start pt-5 pb-7 mt-2.5 w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8aaceef66a8ceb72b0df291ede111a194fe29fd9?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0"
              className="object-contain shrink-0 aspect-[1.3] w-[78px]"
              alt="Beyond Services"
            />
            <div className="flex-1 shrink pl-5 basis-0 min-w-60">
              <h3 className="text-base tracking-tight text-slate-950">
                {t("card3.title")}
              </h3>
              <p className="mt-4 text-sm tracking-tight text-slate-600">
                {t("card3.desc")}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
