"use client";
import React from "react";
import { useTranslations } from "@/lib/hooks";

export const ContactInfo: React.FC = () => {
  const t = useTranslations("Contact");

  return (
    <section className="flex overflow-hidden flex-col justify-center px-5 py-8 mt-4 w-full bg-[#7BB8FF]">
      <h2 className="gap-2.5 self-stretch w-full text-2xl font-medium tracking-tight text-white">
        {t("contactInfo")}
      </h2>
      <div className="flex flex-col justify-center pt-5 w-full text-base tracking-tight text-white">
        <div className="flex gap-1.5 items-start w-full">
          <img
            src="/icon_location_white.svg"
            className="object-contain shrink-0 w-5 mt-0.5 aspect-square"
            alt="Address"
          />
          <address className="flex-1 shrink text-white basis-0 not-italic">
            {t("address")}
          </address>
        </div>
        <div className="flex gap-1.5 items-start pt-5 w-full whitespace-nowrap">
          <img
            src="/icon_mail_white.svg"
            className="object-contain shrink-0 w-5 mt-0.5 aspect-square"
            alt="Email"
          />
          <a href={`mailto:${t("email")}`} className="text-white">
            {t("email")}
          </a>
        </div>
        <div className="flex gap-1.5 items-start pt-5 w-full whitespace-nowrap">
          <img
            src="/icon_phone_white.svg"
            className="object-contain shrink-0 w-5 mt-0.5 aspect-square"
            alt="Phone"
          />
          <a href={`tel:${t("phone")}`} className="text-white">
            {t("phone")}
          </a>
        </div>
      </div>
      <div className="flex gap-1.5 items-start pt-24 w-full">
        <div className="flex gap-2.5 items-end">
          <div className="flex items-center w-5 h-5 bg-white rounded min-h-5">
            <img
              src="/icon_facebook_white.svg"
              className="object-contain flex-1 shrink w-full aspect-square basis-0"
              alt="Social media"
            />
          </div>
          <div className="flex items-center w-5 h-5 bg-white rounded min-h-5">
            <img
              src="/icon_twitter_white.svg"
              className="object-contain flex-1 shrink w-full aspect-square basis-0"
              alt="Social media"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
