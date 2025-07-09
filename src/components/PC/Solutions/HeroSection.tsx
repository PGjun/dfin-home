"use client";
import * as React from "react";
import { useTranslations } from "@/lib/hooks";

export const HeroSection: React.FC = () => {
  const t = useTranslations("Solutions");

  return (
    <section
      style={{
        backgroundImage: "url('/bg_top_pattern.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex overflow-hidden relative gap-10 justify-center items-start w-full text-3xl font-semibold tracking-tighter text-white whitespace-nowrap bg-[#82A3C9] min-h-[270px] max-md:max-w-full"
    >
      <div className="overflow-hidden z-0 self-stretch my-auto text-white min-w-60 w-[1280px] max-md:max-w-full">
        <h1>{t("heroTitle")}</h1>
      </div>
    </section>
  );
};
