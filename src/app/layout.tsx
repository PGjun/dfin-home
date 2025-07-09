import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { Header } from "@/components/PC/layout/Header";
import { Footer } from "@/components/PC/layout/Footer";
import { MobileHeader } from "@/components/Mobile/layout/MobileHeader";
import { Footer as MobileFooter } from "@/components/Mobile/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DFIN - Digital Finance Solutions",
  description: "Innovative digital finance solutions for your business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <LanguageProvider>
          <div className="bg-white">
            {/* PC 헤더 - sm 이상에서만 표시 */}
            <div className="hidden sm:block">
              <Header />
            </div>

            {/* 모바일 헤더 - sm 미만에서만 표시 */}
            <div className="block sm:hidden sticky top-0 z-50">
              <MobileHeader />
            </div>

            <main>{children}</main>

            {/* PC 푸터 - sm 이상에서만 표시 */}
            <div className="hidden sm:block">
              <Footer />
            </div>

            {/* 모바일 푸터 - sm 미만에서만 표시 */}
            <div className="block sm:hidden">
              <MobileFooter />
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
