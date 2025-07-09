"use client";
import React from "react";
import { useTranslations } from "@/lib/hooks";
import { FeatureCard } from "./FeatureCard";

export const FeatureCardsSection: React.FC = () => {
  const t = useTranslations("About.FeatureCards");

  const features = [
    {
      imageSrc:
        "/icon_m_aboutus1.svg",
      imageAlt: "Who we are icon",
      title: t("card1.title"),
      description: t("card1.desc"),
    },
    {
      imageSrc:
        "/icon_m_aboutus2.svg",
      imageAlt: "What we do icon",
      title: t("card2.title"),
      description: t("card2.desc"),
    },
    {
      imageSrc:
        "/icon_m_aboutus3.svg",
      imageAlt: "Beyond services icon",
      title: t("card3.title"),
      description: t("card3.desc"),
    },
  ];

  return (
    <section className="flex items-start px-4 w-full font-medium bg-sky-50">
      <div className="flex flex-col flex-1 shrink justify-center py-10 w-full basis-0 min-w-60">
        <div className="w-full max-w-[325px]">
          {features.map((feature, index) => (
            <div key={index} className={index > 0 ? "mt-2.5" : ""}>
              <FeatureCard
                imageSrc={feature.imageSrc}
                imageAlt={feature.imageAlt}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
