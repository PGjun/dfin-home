"use client";
import * as React from "react";
import { useTranslations } from "next-intl";
import { SolutionCard } from "./SolutionCard";

interface Solution {
  title: string;
  details: string[];
  tags: string[];
}

export const SolutionsGrid: React.FC = () => {
  const t = useTranslations("Solutions.SolutionsGrid");
  const solutions = t.raw("solutions") as Solution[];

  const solutionsData = solutions.map((solution: Solution, index: number) => ({
    imageUrl: [
      "/solutions_img1.svg",
      "/solutions_img2.svg",
      "/solutions_img3.svg",
    ][index],
    title: solution.title,
    details: solution.details,
    tags: solution.tags.map((tag: string) => ({ label: tag })),
  }));

  return (
    <section className="flex flex-col items-center w-full max-md:max-w-full">
      <div className="flex flex-col justify-center py-10 max-w-full w-[1280px]">
        <div className="flex flex-wrap gap-5 py-8 w-full max-md:max-w-full">
          {solutionsData.map((solution, index) => (
            <SolutionCard
              key={index}
              imageUrl={solution.imageUrl}
              title={solution.title}
              details={solution.details}
              tags={solution.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
