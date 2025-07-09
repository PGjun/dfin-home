"use client";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTranslations } from "@/lib/hooks";
import { FeatureCard } from "./FeatureCard";

export const AboutUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const t = useTranslations("Main.FeatureSection");

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
      id="features"
      ref={sectionRef}
      className="flex z-0 flex-col justify-center items-center w-full bg-sky-50 max-md:max-w-full"
    >
      <div className="py-10 max-w-full w-[1280px]">
        <div className="flex flex-col pb-10 w-full max-md:max-w-full">
          <div
            className={`w-full max-md:max-w-full transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-[#2B64F8] via-[#5C1799] to-[#5C1799] bg-clip-text text-transparent">
              {t("title")}
            </h2>
            <p className="mt-5 text-xl tracking-tight text-slate-950 max-md:max-w-full">
              {t("desc")}
            </p>
          </div>
          <div
            className={`self-start pt-12 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              href="/about"
              className="flex gap-1 items-center border-b border-solid border-b-[color:var(--Font-Basic,#000B20)] transition-colors duration-200 group"
            >
              <div className="flex gap-2.5 items-start self-stretch my-auto text-xl font-semibold tracking-tight whitespace-nowrap text-slate-950 transition-colors duration-200">
                <div className="flex items-center">
                  <span className="self-stretch my-auto">{t("more")}</span>
                </div>
              </div>
              <div className="flex items-center self-stretch my-auto w-5 group-hover:translate-x-1 transition-transform duration-200">
                <img
                  src="/icon_right_arrow.svg"
                  className="object-contain self-stretch my-auto w-5 aspect-square"
                  alt="More arrow"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 justify-between items-start pb-10 w-full max-md:max-w-full">
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <FeatureCard
              iconSrc="/icon_main_aboutus1.svg"
              title={t("card1.title")}
              description={t("card1.desc")}
            />
          </div>
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <FeatureCard
              iconSrc="/icon_main_aboutus2.svg"
              title={t("card2.title")}
              description={t("card2.desc")}
            />
          </div>
          <div
            className={`transition-all duration-1000 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <FeatureCard
              iconSrc="/icon_main_aboutus3.svg"
              title={t("card3.title")}
              description={t("card3.desc")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
