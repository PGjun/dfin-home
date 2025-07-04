import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Header } from "@/components/PC/layout/Header";
import { Footer } from "@/components/PC/layout/Footer";
import { MobileHeader } from "@/components/Mobile/layout/MobileHeader";
import { Footer as MobileFooter } from "@/components/Mobile/layout/Footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
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
    </NextIntlClientProvider>
  );
}
