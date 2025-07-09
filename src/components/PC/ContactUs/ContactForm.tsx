"use client";
import { useTranslations } from "@/lib/hooks";
import { InputField } from "./InputField";
import { useContactForm } from "@/hooks/useContactForm";

export const ContactForm: React.FC = () => {
  const t = useTranslations("Contact");

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
      <div className="flex overflow-hidden flex-col items-center justify-center px-16 py-12 max-w-full bg-white w-[1040px] max-md:px-5">
        <div className="flex flex-col items-center text-center max-w-md">
          <div className="w-16 h-16 mb-6 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-600"
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
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            {t("thankYou")}
          </h2>
          <p className="text-slate-600 mb-6">{t("successMessage")}</p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors duration-200"
          >
            {t("sendAnother")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex overflow-hidden flex-col items-end px-16 py-8 max-w-full bg-white w-[1040px] max-md:px-5"
    >
      <div className=" max-w-full w-[670px]">
        <h1 className="self-stretch pb-8 max-w-full text-4xl font-semibold text-blue-600 w-[670px]">
          {t("title")}
        </h1>
        <div className="flex flex-wrap gap-2.5 items-start w-full text-sm tracking-tight max-md:max-w-full">
          <div className="flex-1 shrink basis-0 min-w-60">
            <InputField
              label={t("firstName")}
              placeholder={t("firstName")}
              required={true}
              name="firstName"
              value={values.firstName}
              onChange={handleChange("firstName")}
              error={errors.firstName}
            />
          </div>
          <div className="flex-1 shrink basis-0 min-w-60">
            <InputField
              label={t("lastName")}
              placeholder={t("lastName")}
              required={true}
              name="lastName"
              value={values.lastName}
              onChange={handleChange("lastName")}
              error={errors.lastName}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-2.5 items-start mt-4 w-full max-md:max-w-full">
          <div className="flex-1 shrink basis-0 min-w-60">
            <InputField
              label={t("corporateEmail")}
              placeholder={t("emailPlaceholder")}
              icon="/icon_mail.svg"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange("email")}
              error={errors.email}
              required={true}
            />
          </div>
          <div className="flex-1 shrink basis-0 min-w-60">
            <InputField
              label={t("phoneLabel")}
              placeholder={t("phonePlaceholder")}
              icon="/icon_phone.svg"
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange("phone")}
              error={errors.phone}
              required={true}
            />
          </div>
        </div>
        <div className="flex gap-2.5 items-start mt-4 w-full max-md:max-w-full">
          <div className="flex-1 shrink w-full basis-0 min-w-60 max-md:max-w-full">
            <InputField
              label={t("remarks")}
              placeholder={t("remarksPlaceholder")}
              icon="/icon_message.svg"
              type="textarea"
              className="min-h-[111px] max-md:max-w-full"
              name="remarks"
              value={values.message}
              onChange={handleChange("message")}
              error={errors.message}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start pt-8 max-w-full w-[670px]">
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            background: "linear-gradient(90deg, #2B64F8 0%, #8548D8 100%)",
          }}
          className="
        flex gap-4 justify-center items-center w-[108px] py-3 pr-4 pl-4 my-auto rounded-sm flex-1
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
                alt="Submit arrow"
              />
            )}
          </div>
        </button>
      </div>
    </form>
  );
};
