"use client";
import React from "react";
import { useTranslations } from "@/lib/hooks";
import { ServiceCard } from "./ServiceCard";
import Link from "next/link";

export const SolutionsSection = () => {
  const t = useTranslations("Main.SolutionsSection");

  return (
    <section className="relative flex overflow-hidden items-start px-4 w-full bg-[#82A3C9]">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="/bg_m_solutions_circle.svg"
          className="object-contain max-w-full"
          alt="Background pattern"
        />
      </div>
      <div className="flex-1 shrink py-10 w-full basis-0 min-w-60 relative z-10">
        <div className="flex flex-col w-full">
          <h2 className="flex-1 whitespace-pre-line shrink gap-2.5 w-full text-xl font-semibold tracking-tight text-white basis-0">
            {t("title")}
          </h2>
          <p className="pt-2.5 w-full whitespace-pre-line text-sm tracking-tight text-white">
            {t("desc")}
          </p>
          <div className="self-start pt-5">
            <Link
              href="/solutions"
              className="flex gap-1 items-center border-b border-solid border-b-[color:var(--Font-Basic,#FFF)]"
            >
              <div className="flex gap-2.5 items-start self-stretch my-auto text-sm font-semibold tracking-tight whitespace-nowrap text-white">
                <div className="flex items-center">
                  <span className="self-stretch my-auto">{t("more")}</span>
                </div>
              </div>
              <div className="flex items-center self-stretch my-auto w-4">
                <img
                  src="/icon_right_arrow_white.svg"
                  className="object-contain self-stretch my-auto w-4 aspect-square"
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="pt-10 w-full">
          <ServiceCard
            image="/img_m_main_solutions1.png"
            title={t("card1.title")}
            features={t.raw("card1.features") as string[]}
            tags={t.raw("card1.tags") as string[]}
          />

          <div className="mt-4">
            <ServiceCard
              image="/img_m_main_solutions2.png"
              title={t("card2.title")}
              features={t.raw("card2.features") as string[]}
              tags={t.raw("card2.tags") as string[]}
            />
          </div>

          <div className="mt-4">
            <ServiceCard
              title={t("card3.title")}
              features={t.raw("card3.features") as string[]}
              tags={t.raw("card3.tags") as string[]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
