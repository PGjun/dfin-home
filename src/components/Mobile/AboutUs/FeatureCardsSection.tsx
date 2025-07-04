"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { FeatureCard } from "./FeatureCard";

export const FeatureCardsSection: React.FC = () => {
  const t = useTranslations("About.FeatureCards");

  const features = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e241794704264c44a5f84f376768f368c5f2e972?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0",
      imageAlt: "Who we are icon",
      title: t("card1.title"),
      description: t("card1.desc"),
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cfb2fc25a91a057c914a79141896db7f00de9da7?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0",
      imageAlt: "What we do icon",
      title: t("card2.title"),
      description: t("card2.desc"),
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0c87cf12ef12cfe889215107fa710295a02a1a06?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0",
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
