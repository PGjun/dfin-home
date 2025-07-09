"use client";
import * as React from "react";
import { useTranslations } from "@/lib/hooks";

interface AboutSectionProps {
  className?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  className = "",
}) => {
  const t = useTranslations("About");

  return (
    <section
      className={`flex flex-col items-center w-full max-md:max-w-full ${className}`}
    >
      <div className="flex flex-col justify-center py-10 max-w-full w-[1280px]">
        <div className="flex flex-wrap items-center py-8 w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink justify-center self-stretch pr-32 my-auto basis-0 min-w-60 max-md:max-w-full">
            <div className="self-start font-bold max-md:max-w-full">
              <h2 className="text-4xl tracking-tighter text-blue-600 max-md:max-w-full">
                {t("sectionTitle1")}{" "}
              </h2>
              <h3 className="mt-2.5 text-3xl tracking-tighter text-slate-950">
                {t("sectionTitle2")}
              </h3>
            </div>
            <p className="pt-6 mt-2.5 w-full text-base leading-6 text-slate-950 max-md:max-w-full">
              {t("sectionDesc")}
            </p>
          </div>
          <div className="self-stretch my-auto min-w-60 w-[410px]">
            <div className="max-w-full w-[410px]">
              <img
                src="/img_aboutus_people.png"
                className="object-contain w-full aspect-[1.36]"
                alt="Technology illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
