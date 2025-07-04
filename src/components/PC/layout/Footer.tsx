"use client";
import * as React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Footer = () => {
  const t = useTranslations("Main.Footer");

  return (
    <footer className="flex z-0 flex-col justify-center items-center self-center py-10 w-full bg-slate-900 max-md:max-w-full">
      <div className="flex flex-wrap max-w-full w-[1280px]">
        <div className="flex flex-col flex-1 shrink items-start basis-0 min-w-60 max-md:max-w-full">
          <div className="flex max-w-full min-h-7 w-[126px]">
            <Image
              src="/dfin_footer_logo.svg"
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b7dbe5524698cd3718042fafec23411756aea30?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0"
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/239e62c44b09d149d9d21d59d7e410a3895c977d?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0"
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
