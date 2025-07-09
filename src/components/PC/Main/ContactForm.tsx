"use client";
import * as React from "react";
import { useTranslations } from "@/lib/hooks";

export const ContactForm = () => {
  const t = useTranslations("Main.ContactForm");

  return (
    <div className="max-w-full bg-white rounded-sm border border-solid shadow-sm border-[color:var(--Border-F0F0F0,#F0F0F0)] w-[330px]">
      <div className="px-5 py-8 w-full">
        <h3 className="self-stretch w-full text-base font-bold tracking-tight text-blue-600">
          {t("title")}
        </h3>
        <div className="mt-8 w-full">
          <div className="flex items-start w-full text-sm tracking-tight">
            <div className="flex-1 shrink pr-2.5 basis-0">
              <div className="w-full">
                <div className="flex items-start w-full max-w-[180px] text-slate-950">
                  <div className="flex flex-1 shrink gap-2 items-center w-full basis-0">
                    <div className="self-stretch my-auto w-2 whitespace-nowrap text-slate-950">
                      *
                    </div>
                    <div className="flex flex-1 shrink gap-2.5 items-center self-stretch my-auto w-full basis-0">
                      <div className="flex items-center self-stretch my-auto">
                        <label className="self-stretch my-auto text-slate-950">
                          {t("firstName")}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder={t("firstName")}
                  className="flex gap-2 items-center px-4 py-3 mt-1.5 w-full bg-white rounded-sm border border-solid border-[color:var(--Border-EBEBEA,#EBEBEA)] text-neutral-300"
                />
              </div>
            </div>
            <div className="flex-1 shrink pl-2.5 basis-0">
              <div className="w-full">
                <div className="flex items-start w-full max-w-[180px] text-slate-950">
                  <div className="flex flex-1 shrink gap-2 items-center w-full basis-0">
                    <div className="self-stretch my-auto w-2 whitespace-nowrap text-slate-950">
                      *
                    </div>
                    <div className="flex flex-1 shrink gap-2.5 items-center self-stretch my-auto w-full basis-0">
                      <div className="flex items-center self-stretch my-auto">
                        <label className="self-stretch my-auto text-slate-950">
                          {t("lastName")}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder={t("lastName")}
                  className="flex gap-2 items-center px-4 py-3 mt-1.5 w-full bg-white rounded-sm border border-solid border-[color:var(--Border-EBEBEA,#EBEBEA)] text-neutral-300"
                />
              </div>
            </div>
          </div>
          <div className="flex items-start mt-4 w-full">
            <div className="flex-1 shrink w-full basis-0 min-w-60">
              <div className="flex items-start max-w-full w-[180px]">
                <div className="flex flex-1 shrink gap-2 items-center w-full basis-0">
                  <div className="flex items-center self-stretch my-auto w-4">
                    <img
                      src="/icon_mail.svg"
                      className="object-contain self-stretch my-auto w-4 aspect-square"
                      alt="Corporate email icon"
                    />
                  </div>
                  <div className="flex flex-1 shrink gap-2.5 items-center self-stretch my-auto text-sm tracking-tight basis-0 text-slate-950">
                    <div className="flex items-center self-stretch my-auto">
                      <label className="self-stretch my-auto text-slate-950">
                        {t("corporateEmail")}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="flex gap-2 items-center px-4 py-3 mt-1.5 w-full text-sm tracking-tight bg-white rounded-sm border border-solid border-[color:var(--Border-EBEBEA,#EBEBEA)] text-neutral-300"
              />
            </div>
          </div>
          <div className="flex items-start mt-4 w-full">
            <div className="flex-1 shrink w-full basis-0 min-w-60">
              <div className="flex items-start max-w-full w-[180px]">
                <div className="flex flex-1 shrink gap-2 items-center w-full basis-0">
                  <div className="flex items-center self-stretch my-auto w-4">
                    <img
                      src="/icon_phone.svg"
                      className="object-contain self-stretch my-auto w-4 aspect-square"
                      alt="Phone icon"
                    />
                  </div>
                  <div className="flex flex-1 shrink gap-2.5 items-center self-stretch my-auto text-sm tracking-tight whitespace-nowrap basis-0 text-slate-950">
                    <div className="flex items-center self-stretch my-auto">
                      <label className="self-stretch my-auto text-slate-950">
                        {t("phone")}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <input
                type="tel"
                className="flex gap-2 py-3 mt-1.5 w-full bg-white rounded-sm border border-solid border-[color:var(--Border-EBEBEA,#EBEBEA)] min-h-[42px]"
              />
            </div>
          </div>
          <div className="flex mt-4 w-full">
            <div className="flex-1 shrink w-full basis-0 min-w-60">
              <div className="flex items-start max-w-full w-[180px]">
                <div className="flex flex-1 shrink gap-2 items-center w-full basis-0">
                  <div className="flex items-center self-stretch my-auto w-4">
                    <img
                      src="/icon_message.svg"
                      className="object-contain self-stretch my-auto w-4 aspect-square"
                      alt="Remarks icon"
                    />
                  </div>
                  <div className="flex flex-1 shrink gap-2.5 items-center self-stretch my-auto text-sm tracking-tight whitespace-nowrap basis-0 text-slate-950">
                    <div className="flex items-center self-stretch my-auto">
                      <label className="self-stretch my-auto text-slate-950">
                        {t("remarks")}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <textarea
                placeholder={t("remarksPlaceholder")}
                className="flex flex-1 gap-2 items-start px-4 py-3 mt-1.5 text-sm tracking-tight bg-white rounded-sm border border-solid border-[color:var(--Border-EBEBEA,#EBEBEA)] size-full text-neutral-300"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 w-full">
          <div className="flex justify-center items-center w-full rounded">
            <button className="flex gap-4 justify-center items-center self-stretch py-3 pr-4 pl-4 my-auto rounded-sm w-[108px]">
              <div className="flex gap-2.5 items-start self-stretch my-auto text-sm tracking-tight text-white whitespace-nowrap">
                <div className="flex items-center">
                  <span className="self-stretch my-auto text-white">
                    {t("submit")}
                  </span>
                </div>
              </div>
              <div className="flex items-center self-stretch my-auto w-3.5">
                <img
                  src="/icon_arrow_chevron_right.svg"
                  className="object-contain self-stretch my-auto w-3.5 aspect-square"
                  alt="Submit icon"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
