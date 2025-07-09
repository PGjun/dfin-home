"use client";
import { HeroSection } from "@/components/PC/Solutions/HeroSection";
import { SolutionsGrid } from "@/components/PC/Solutions/SolutionsGrid";
import { useTranslations } from "@/lib/hooks";

// 모바일 컴포넌트 import
import { SolutionCard } from "@/components/Mobile/Solutions/SolutionCard";

export default function SolutionsPage() {
  const t = useTranslations("Solutions");

  const solutionsData = [
    {
      imageUrl: "/img_solutions1.png",
      title: t("SolutionsGrid.solutions.0.title"),
      features: [
        t("SolutionsGrid.solutions.0.details.0"),
        t("SolutionsGrid.solutions.0.details.1"),
        t("SolutionsGrid.solutions.0.details.2"),
        t("SolutionsGrid.solutions.0.details.3"),
      ],
      tags: [
        t("SolutionsGrid.solutions.0.tags.0"),
        t("SolutionsGrid.solutions.0.tags.1"),
        t("SolutionsGrid.solutions.0.tags.2"),
      ],
    },
    {
      imageUrl: "/img_solutions2.png",
      title: t("SolutionsGrid.solutions.1.title"),
      features: [
        t("SolutionsGrid.solutions.1.details.0"),
        t("SolutionsGrid.solutions.1.details.1"),
        t("SolutionsGrid.solutions.1.details.2"),
        t("SolutionsGrid.solutions.1.details.3"),
      ],
      tags: [
        t("SolutionsGrid.solutions.1.tags.0"),
        t("SolutionsGrid.solutions.1.tags.1"),
        t("SolutionsGrid.solutions.1.tags.2"),
      ],
    },
    {
      imageUrl: "/img_solutions3.png",
      title: t("SolutionsGrid.solutions.2.title"),
      features: [
        t("SolutionsGrid.solutions.2.details.0"),
        t("SolutionsGrid.solutions.2.details.1"),
        t("SolutionsGrid.solutions.2.details.2"),
        t("SolutionsGrid.solutions.2.details.3"),
        t("SolutionsGrid.solutions.2.details.4"),
        t("SolutionsGrid.solutions.2.details.5"),
        t("SolutionsGrid.solutions.2.details.6"),
      ],
      tags: [
        t("SolutionsGrid.solutions.2.tags.0"),
        t("SolutionsGrid.solutions.2.tags.1"),
        t("SolutionsGrid.solutions.2.tags.2"),
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* PC 버전 - sm 이상에서만 표시 */}
      <div className="hidden sm:flex sm:flex-col sm:w-full">
        <HeroSection />
        <SolutionsGrid />
      </div>

      {/* 모바일 버전 - sm 미만에서만 표시 */}
      <div className="block sm:hidden overflow-hidden mx-auto w-full bg-white">
        <main className="w-full">
          <section className="flex flex-col justify-center px-4 py-10 w-full text-xl font-semibold text-white whitespace-nowrap bg-[#82A3C9] min-h-[100px]">
            <h1 className="w-full text-white">{t("heroTitle")}</h1>
          </section>
          <section className="overflow-hidden px-4 pt-5 pb-10 w-full">
            <div className="w-full">
              {solutionsData.map((solution, index) => (
                <div key={index} className={index > 0 ? "mt-4" : ""}>
                  <SolutionCard
                    imageUrl={solution.imageUrl}
                    title={solution.title}
                    features={solution.features}
                    tags={solution.tags}
                  />
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
} 