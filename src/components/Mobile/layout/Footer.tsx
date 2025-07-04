"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Footer = () => {
  const t = useTranslations("Main.Footer");

  return (
    <footer className="flex flex-col justify-center px-4 py-5 w-full bg-slate-900">
      <div className="flex flex-col justify-center w-full">
        <div className="flex flex-col items-start w-full">
          <div className="flex max-w-full min-h-7 w-[126px]">
            <Image
              src="/dfin_footer_logo.svg"
              alt="DFIN"
              width={126}
              height={28}
            />
          </div>
          <div className="flex gap-2.5 items-end pt-5">
            <div className="flex items-center p-1 w-5 h-5 bg-white rounded">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/db050d302839e1456fa728e55f22c54f6f103688?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0"
                className="object-contain self-stretch my-auto w-3 aspect-square"
                alt="Social media"
              />
            </div>
            <div className="flex items-center p-1 w-5 h-5 bg-white rounded">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd17d78ca487356c44bd2eea6dc106986655dea2?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0"
                className="object-contain self-stretch my-auto w-3 aspect-square"
                alt="Social media"
              />
            </div>
          </div>
        </div>

        <div className="pt-10 w-full text-sm tracking-tight text-right text-white">
          <address className="flex-1 shrink self-stretch w-full text-white basis-0 not-italic">
            {t("companyInfo")}
            <br />
            {t("address")}
          </address>
          <p className="self-stretch pt-10 w-full text-white">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};
