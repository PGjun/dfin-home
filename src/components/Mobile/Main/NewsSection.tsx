"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { NewsCard } from "./NewsCard";

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
    <section className="flex overflow-hidden relative gap-4 items-start px-4 w-full bg-sky-50">
      <div className="flex absolute top-0 left-0 z-0 flex-col">
        <img
          src="/mobile_news_pattern.svg"
          className="object-contain z-10 w-full"
          alt="Background pattern"
        />
      </div>
      <div className="z-0 flex-1 shrink py-10 w-full text-xl basis-0 min-w-60 text-slate-950">
        <div className="pb-5 w-full font-semibold border-b border-solid border-b-[color:var(--Font-Basic,#000B20)]">
          <h2 className="flex-1 shrink gap-2.5 self-stretch w-full basis-0 text-slate-950">
            DFIN News
          </h2>
        </div>

        <div className="overflow-hidden text-xs">
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
                    <NewsCard
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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0ac86e967f59b4304c7f3b87be5bd6b040814c3?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0"
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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/67fc52c68cbccd8b6c909f7f3caa156ae61508a3?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0"
              className="object-contain shrink-0 w-6 aspect-square"
              alt="Next"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
