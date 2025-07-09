"use client";
import HeroSection from "@/components/PC/Service/HeroSection";
import ServiceProcess from "@/components/PC/Service/ServiceProcess";

// 모바일 컴포넌트 import (헤더/푸터 제외)
import { ServiceHero } from "@/components/Mobile/Service/ServiceHero";
import { ServiceProcessSection } from "@/components/Mobile/Service/ServiceProcessSection";

export default function ServicePage() {
  return (
    <div className="flex flex-col w-full">
      {/* PC 버전 - sm 이상에서만 표시 */}
      <div className="hidden sm:flex sm:flex-col sm:w-full">
        <HeroSection />
        <ServiceProcess />
      </div>

      {/* 모바일 버전 - sm 미만에서만 표시 */}
      <div className="block sm:hidden overflow-hidden mx-auto w-full bg-white">
        <main className="w-full">
          <ServiceHero />
          <ServiceProcessSection />
        </main>
      </div>
    </div>
  );
} 