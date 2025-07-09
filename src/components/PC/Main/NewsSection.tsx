"use client";

import { useState } from "react";
import { useTranslations } from "@/lib/hooks";
import { NewsItem } from "./NewsItem";

interface NewsItemData {
  title: string;
  desc: string;
  date: string;
  imageSrc: string;
}

export const NewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations("Main.NewsSection");

  const newsItems = t.raw("items") as NewsItemData[];

  // 두 개씩 그룹으로 묶기 (2행)
  const newsGroups = [];
  for (let i = 0; i < newsItems.length; i += 2) {
    newsGroups.push(newsItems.slice(i, i + 2));
  }

  const totalSlides = newsGroups.length;

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="flex relative z-0 flex-col justify-center items-center pb-12 w-full bg-sky-50 max-md:max-w-full">
      <div className="flex overflow-hidden absolute right-0 z-0 flex-col pb-14 bottom-[-58px] h-[719px] w-[1920px] max-md:pr-5 max-md:max-w-full">
        <img
          src="/bg_main_news_pattern.svg"
          className="object-contain max-w-full aspect-[0.87] w-[579px]"
          alt="Background decoration"
        />
      </div>
      <div className="flex z-0 flex-col self-center py-10 max-w-full w-[1280px]">
        <div className="flex justify-between items-end pb-10 w-full text-3xl font-semibold tracking-tighter border-b border-solid border-b-[color:var(--Font-Basic,#000B20)] text-slate-950 max-md:max-w-full">
          <h2 className="text-slate-950 w-[163px]">{t("title")}</h2>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {newsGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="w-full items-center flex-shrink-0 flex flex-col gap-5"
              >
                {group.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <NewsItem
                      title={item.title}
                      description={item.desc}
                      date={item.date}
                      imageSrc={item.imageSrc}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-center items-end py-5 w-full text-xl tracking-tight text-center whitespace-nowrap text-slate-950 max-md:max-w-full">
          <button
            onClick={goToPrevious}
            className="transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 rounded"
            aria-label="Previous slide"
          >
            <img
              src="/icon_keyboard_arrow_left.svg"
              className="object-contain shrink-0 w-6 aspect-square"
              alt="Previous"
            />
          </button>
          <span className="text-slate-950">
            {currentSlide + 1}/{totalSlides}
          </span>
          <button
            onClick={goToNext}
            className="transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 rounded"
            aria-label="Next slide"
          >
            <img
              src="/icon_keyboard_arrow_right.svg"
              className="object-contain shrink-0 w-6 aspect-square"
              alt="Next"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
