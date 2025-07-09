import { HeroSection } from "@/components/PC/Main/HeroSection";
import { AboutUsSection } from "@/components/PC/Main/AboutUsSection";
import { SolutionsSection } from "@/components/PC/Main/SolutionsSection";
import { ServiceSection } from "@/components/PC/Main/ServiceSection";
import { NewsSection } from "@/components/PC/Main/NewsSection";

// 모바일 컴포넌트 import
import { HeroSection as MobileHeroSection } from "@/components/Mobile/Main/HeroSection";
import { AboutUsSection as MobileAboutUsSection } from "@/components/Mobile/Main/AboutUsSection";
import { SolutionsSection as MobileSolutionsSection } from "@/components/Mobile/Main/SolutionsSection";
import { ServiceSection as MobileServiceSection } from "@/components/Mobile/Main/ServiceSection";
import { NewsSection as MobileNewsSection } from "@/components/Mobile/Main/NewsSection";

export default function Home() {
  return (
    <div className="w-full">
      {/* PC 버전 - sm 이상에서만 표시 */}
      <div className="hidden sm:block">
        <HeroSection />
        <AboutUsSection />
        <SolutionsSection />
        <ServiceSection />
        <NewsSection />
      </div>

      {/* 모바일 버전 - sm 미만에서만 표시 */}
      <div className="block sm:hidden mx-auto w-full">
        <MobileHeroSection />
        <MobileAboutUsSection />
        <MobileSolutionsSection />
        <MobileServiceSection />
        <MobileNewsSection />
      </div>
    </div>
  );
}
