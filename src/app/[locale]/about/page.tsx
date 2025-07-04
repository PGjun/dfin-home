"use client";
import { HeroSection } from "@/components/PC/AboutUs/HeroSection";
import { AboutSection } from "@/components/PC/AboutUs/AboutSection";
import { FeatureCards } from "@/components/PC/AboutUs/FeatureCards";

// 모바일 컴포넌트 import (헤더/푸터 제외)
import { HeroSection as MobileHeroSection } from "@/components/Mobile/AboutUs/HeroSection";
import { MainContentSection } from "@/components/Mobile/AboutUs/MainContentSection";
import { FeatureCardsSection } from "@/components/Mobile/AboutUs/FeatureCardsSection";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* PC 버전 - sm 이상에서만 표시 */}
      <div className="hidden sm:flex sm:flex-col sm:w-full">
        <HeroSection />
        <AboutSection />
        <FeatureCards />
      </div>

      {/* 모바일 버전 - sm 미만에서만 표시 */}
      <div className="block sm:hidden overflow-hidden mx-auto w-full bg-white">
        <main className="w-full">
          <MobileHeroSection />
          <MainContentSection />
          <FeatureCardsSection />
        </main>
      </div>
    </div>
  );
}
