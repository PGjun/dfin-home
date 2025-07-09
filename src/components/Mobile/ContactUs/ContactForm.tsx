"use client";
import { useTranslations } from "@/lib/hooks";
import { InputField } from "./InputField";
import { useContactForm } from "@/hooks/useContactForm";
import { usePathname } from "next/navigation";

export const ContactForm: React.FC = () => {
  const t = useTranslations("Contact");

  const pathname = usePathname();

  const {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
    reset,
  } = useContactForm();

  if (isSubmitted) {
    return (
      <section className="overflow-hidden px-4 py-5 w-full">
        <div className="flex flex-col justify-center w-full">
          <div className="overflow-hidden p-4 w-full bg-white shadow-md">
            <div className="flex flex-col items-center text-center py-8">
              <div className="w-12 h-12 mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-blue-600 mb-3">
                {t("thankYou")}
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                {t("successMessage")}
              </p>
              <button
                onClick={() => reset()}
                style={{
                  background:
                    "linear-gradient(90deg, #2B64F8 0%, #8548D8 100%)",
                }}
                className="
              flex gap-4 justify-center items-center self-stretch text-white text-sm py-3 pr-4 pl-4 my-auto rounded-sm flex-1
              transition-all duration-200
              hover:scale-101 hover:brightness-110
              active:scale-100
            "
              >
                {t("sendAnother")}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden px-4 py-5 w-full">
      <div className="flex flex-col justify-center w-full">
        <div className="overflow-hidden p-4 w-full bg-white shadow-md">
          <h2 className="self-stretch w-full text-base font-bold text-blue-600">
            {pathname.includes("/contact") ? t("title") : "Try Now!"}
          </h2>
          <form onSubmit={handleSubmit} className="pt-6 w-full">
            <div className="flex items-start w-full text-sm tracking-tight">
              <div className="flex-1 shrink pr-2.5 basis-0">
                <InputField
                  label={t("firstName")}
                  placeholder={t("firstName")}
                  required
                  value={values.firstName}
                  onChange={handleChange("firstName")}
                  error={errors.firstName}
                />
              </div>
              <div className="flex-1 shrink pl-2.5 basis-0">
                <InputField
                  label={t("lastName")}
                  placeholder={t("lastName")}
                  required
                  value={values.lastName}
                  onChange={handleChange("lastName")}
                  error={errors.lastName}
                />
              </div>
            </div>
            <div className="flex items-start mt-4 w-full">
              <div className="flex-1 shrink w-full basis-0 min-w-60">
                <InputField
                  label={t("corporateEmail")}
                  placeholder={t("emailPlaceholder")}
                  icon="/icon_mail.svg"
                  type="email"
                  required
                  value={values.email}
                  onChange={handleChange("email")}
                  error={errors.email}
                />
              </div>
            </div>
            <div className="flex items-start mt-4 w-full">
              <div className="flex-1 shrink w-full basis-0 min-w-60">
                <InputField
                  label={t("phoneLabel")}
                  placeholder={t("phonePlaceholder")}
                  icon="/icon_phone.svg"
                  type="tel"
                  required
                  value={values.phone}
                  onChange={handleChange("phone")}
                  error={errors.phone}
                />
              </div>
            </div>
            <div className="flex items-start mt-4 w-full">
              <div className="flex-1 shrink w-full basis-0 min-w-60">
                <InputField
                  label={t("remarks")}
                  placeholder={t("remarksPlaceholder")}
                  icon="/icon_message.svg"
                  type="textarea"
                  className="min-h-[110px]"
                  value={values.message}
                  onChange={handleChange("message")}
                  error={errors.message}
                />
              </div>
            </div>
            <div className="flex flex-col items-start pt-8 w-full">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex justify-center items-center max-w-full rounded min-h-[42px] w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, #2B64F8 0%, #8548D8 100%)",
                  }}
                  className="
                flex gap-4 justify-center items-center self-stretch py-3 pr-4 pl-4 my-auto rounded-sm flex-1
                transition-all duration-200
                hover:scale-101 hover:brightness-110
                active:scale-100
              "
                >
                  <div className="flex gap-2.5 items-start self-stretch my-auto text-sm tracking-tight text-white whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="self-stretch my-auto text-white">
                        {isSubmitting ? t("sending") : t("submit")}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center self-stretch my-auto w-3.5">
                    {isSubmitting ? (
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <img
                        src="/icon_arrow_chevron_right.svg"
                        className="object-contain self-stretch my-auto w-3.5 aspect-square"
                        alt=""
                      />
                    )}
                  </div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
