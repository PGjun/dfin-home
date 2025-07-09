"use client";
import React from "react";
import { useTranslations } from "@/lib/hooks";

export const ServiceHero: React.FC = () => {
  const t = useTranslations("Service");

  return (
    <section className="flex flex-col justify-center px-4 py-10 w-full text-xl font-semibold text-blue-600 whitespace-nowrap bg-sky-50 min-h-[100px]">
      <h1 className="w-full text-blue-600">{t("heroTitle")}</h1>
    </section>
  );
};
