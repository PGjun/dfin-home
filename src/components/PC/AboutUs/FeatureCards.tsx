"use client";
import * as React from "react";
import { useTranslations } from "next-intl";

interface FeatureCard {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  borderStyle: "solid" | "dashed";
}

interface FeatureCardsProps {
  className?: string;
}

export const FeatureCards: React.FC<FeatureCardsProps> = ({
  className = "",
}) => {
  const t = useTranslations("About.FeatureCards");

  const cards: FeatureCard[] = [
    {
      icon: "/aboutus_icon1.svg",
      title: t("card1.title"),
      subtitle: t("card1.subtitle"),
      description: t("card1.desc"),
      borderStyle: "solid",
    },
    {
      icon: "/aboutus_icon2.svg",
      title: t("card2.title"),
      subtitle: t("card2.subtitle"),
      description: t("card2.desc"),
      borderStyle: "dashed",
    },
    {
      icon: "/aboutus_icon3.svg",
      title: t("card3.title"),
      subtitle: t("card3.subtitle"),
      description: t("card3.desc"),
      borderStyle: "solid",
    },
  ];

  return (
    <section
      style={{
        backgroundImage: "url('/feature_card_bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={`flex relative flex-col items-center py-8 w-full bg-slate-400 max-md:max-w-full ${className}`}
    >
      <div className="flex z-0 flex-col justify-center self-center py-10 max-w-full w-[1280px]">
        <div className="flex flex-wrap gap-7 py-8 w-full max-md:max-w-full">
          {cards.map((card, index) => (
            <article
              key={index}
              className={`overflow-hidden flex-1 shrink p-5 my-auto border ${
                card.borderStyle === "dashed" ? "border-dashed" : "border-solid"
              } basis-0 border-[color:var(--Primary-White,#FFF)] min-w-60`}
            >
              <img
                src={card.icon}
                className="object-contain max-w-full aspect-square w-[100px]"
                alt={`${card.title} icon`}
              />
              <div className="w-full font-bold text-white">
                <h3 className="text-2xl tracking-tight text-white">
                  {card.title}
                </h3>
                <h4 className="mt-2.5 text-base tracking-tight text-white">
                  {card.subtitle}
                </h4>
              </div>
              <p className="flex-1 shrink self-stretch pt-8 w-full text-base text-gray-200 basis-0">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
