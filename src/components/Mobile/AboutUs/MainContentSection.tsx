"use client";
import React from "react";
import { useTranslations } from "@/lib/hooks";

export const MainContentSection: React.FC = () => {
  const t = useTranslations("About");

  return (
    <section className="overflow-hidden px-4 pt-5 pb-10 w-full">
      <div className="overflow-hidden w-full">
        <img
          src="/img_aboutus_people.png"
          className="object-contain w-full aspect-[1.37]"
          alt="Technology solutions"
        />
      </div>
      <div className="flex flex-col justify-center pt-4 w-full text-base font-bold tracking-tight">
        <h2 className="text-blue-600">{t("sectionTitle1")}</h2>
        <p className="text-slate-950">{t("sectionTitle2")}</p>
      </div>
      <p className="whitespace-pre-line flex-1 shrink gap-2.5 self-stretch pt-2 w-full text-sm basis-0 text-slate-600">
        {t("sectionDesc")}
      </p>
    </section>
  );
};
