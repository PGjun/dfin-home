"use client";
import * as React from "react";
import { useTranslations } from "@/lib/hooks";

export const Footer = () => {
  const t = useTranslations("Main.Footer");

  return (
    <footer className="flex z-0 flex-col justify-center items-center self-center py-10 w-full bg-slate-900 max-md:max-w-full">
      <div className="flex flex-wrap max-w-full w-[1280px]">
        <div className="flex flex-col flex-1 shrink items-start basis-0 min-w-60 max-md:max-w-full">
          <div className="flex max-w-full min-h-7 w-[126px]">
            <img
              src="/logo_dfin_footer.svg"
              alt="DFIN"
              width={126}
              height={28}
            />
            {/* <div className="text-2xl font-bold text-blue-600">DFIN</div> */}
          </div>
          <div className="flex gap-2.5 items-end pt-10">
            <a
              href="#"
              className="flex items-center p-1 w-5 h-5 bg-white rounded hover:bg-gray-200 transition-colors duration-200"
              aria-label="Social media link"
            >
              <img
                src="/icon_facebook.svg"
                className="object-contain self-stretch my-auto w-3 aspect-square"
                alt="Social media icon"
              />
            </a>
            <a
              href="#"
              className="flex items-center p-1 w-5 h-5 bg-white rounded hover:bg-gray-200 transition-colors duration-200"
              aria-label="Social media link"
            >
              <img
                src="/icon_twitter.svg"
                className="object-contain self-stretch my-auto w-3 aspect-square"
                alt="Social media icon"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-1 shrink items-end my-auto text-sm tracking-tight text-right text-white basis-0 min-w-60 max-md:max-w-full">
          <address className="self-stretch text-white max-md:max-w-full not-italic">
            {t("companyInfo")}
            <br />
            {t("address")}
          </address>
          <div className="self-stretch pt-10 text-white">{t("copyright")}</div>
        </div>
      </div>
    </footer>
  );
};
