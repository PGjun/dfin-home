"use client";
import * as React from "react";
import { useTranslations } from "next-intl";

interface HeroSectionProps {
  title?: string;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  className = "",
}) => {
  const t = useTranslations("About");
  const displayTitle = title || t("heroTitle");

  return (
    <section
      style={{
        backgroundImage: "url('/aboutus_bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={`flex overflow-hidden relative gap-10 justify-center items-start w-full text-3xl font-semibold tracking-tighter text-blue-600 bg-sky-50 min-h-[270px] max-md:max-w-full ${className}`}
    >
      <div className="overflow-hidden z-0 self-stretch my-auto text-blue-600 min-w-60 w-[1280px] max-md:max-w-full">
        <h1>{displayTitle}</h1>
      </div>
    </section>
  );
};
