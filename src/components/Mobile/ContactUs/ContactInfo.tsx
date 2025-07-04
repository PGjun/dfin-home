"use client";
import React from "react";
import { useTranslations } from "next-intl";

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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/79002842489d78e2c9cc0174b3c73fb198a24743?placeholderIfAbsent=true&apiKey=185be5d8cbb446c398eca441ffa5fb2f"
            className="object-contain shrink-0 w-5 aspect-square"
            alt="Address"
          />
          <address className="flex-1 shrink text-white basis-0 not-italic">
            {t("address")}
          </address>
        </div>
        <div className="flex gap-1.5 items-start pt-5 w-full whitespace-nowrap">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ec2e10c8fdb38d49b4b79bc433ceb149023bff9?placeholderIfAbsent=true&apiKey=185be5d8cbb446c398eca441ffa5fb2f"
            className="object-contain shrink-0 w-5 aspect-square"
            alt="Email"
          />
          <a href={`mailto:${t("email")}`} className="text-white">
            {t("email")}
          </a>
        </div>
        <div className="flex gap-1.5 items-start pt-5 w-full whitespace-nowrap">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/10fbb6c76118ce03464d700f08c0b491d2b9279f?placeholderIfAbsent=true&apiKey=185be5d8cbb446c398eca441ffa5fb2f"
            className="object-contain shrink-0 w-5 aspect-square"
            alt="Phone"
          />
          <a href={`tel:${t("phone")}`} className="text-white">
            {t("phone")}
          </a>
        </div>
      </div>
      <div className="flex gap-1.5 items-start pt-24 w-full">
        <div className="flex gap-2.5 items-end">
          <div className="flex items-center p-1 w-5 h-5 bg-white rounded min-h-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/846aed22bda6844133dee5ac9138cb53e3edc9bd?placeholderIfAbsent=true&apiKey=185be5d8cbb446c398eca441ffa5fb2f"
              className="object-contain flex-1 shrink w-3 aspect-square basis-0"
              alt="Social media"
            />
          </div>
          <div className="flex items-center p-1 w-5 h-5 bg-white rounded min-h-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e71eba460a6e4dccd7df7c0b54bfc617c1560b0?placeholderIfAbsent=true&apiKey=185be5d8cbb446c398eca441ffa5fb2f"
              className="object-contain flex-1 shrink w-3 aspect-square basis-0"
              alt="Social media"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
