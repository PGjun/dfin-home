import { useTranslations } from "@/lib/hooks";

export const ContactInfo: React.FC = () => {
  const t = useTranslations("Contact");

  return (
    <aside className="flex overflow-hidden absolute left-0 top-2/4 z-0 flex-col justify-center items-center px-5 py-8 max-w-full bg-[#7BB8FF] -translate-y-2/4 translate-x-[0%] w-[455px]">
      <h2 className="gap-2.5 self-stretch w-full text-2xl font-medium tracking-tight text-white">
        {t("contactInfo")}
      </h2>
      <div className="flex flex-col justify-center pt-5 w-full">
        <div className="flex gap-1.5 items-start w-full text-base tracking-tight text-white">
          <img
            src="/icon_location_white.svg"
            className="object-contain shrink-0 w-5 mt-0.5 aspect-square"
            alt="Address icon"
          />
          <address className="flex-1 shrink text-white basis-0 not-italic">
            {t("address")}
          </address>
        </div>
        <div className="flex gap-1.5 items-start pt-5 w-full text-base tracking-tight text-white whitespace-nowrap">
          <img
            src="/icon_mail_white.svg"
            className="object-contain shrink-0 w-5 mt-0.5 aspect-square"
            alt="Email icon"
          />
          <a href={`mailto:${t("email")}`} className="text-white">
            {t("email")}
          </a>
        </div>
        <div className="flex gap-1.5 items-start pt-5 w-full text-base tracking-tight text-white whitespace-nowrap">
          <img
            src="/icon_phone_white.svg"
            className="object-contain shrink-0 w-5 mt-0.5 aspect-square"
            alt="Phone icon"
          />
          <a href={`tel:${t("phone")}`} className="text-white">
            {t("phone")}
          </a>
        </div>
        <div className="flex gap-1.5 items-start pt-24 w-full">
          <div className="flex gap-2.5 items-end">
            <a
              href="#"
              className="flex items-center w-5 h-5 bg-white rounded hover:bg-gray-200 transition-colors duration-200"
              aria-label="Social media link"
            >
              <img
                src="/icon_facebook_white.svg"
                className="object-contain self-stretch my-auto w-full aspect-square"
                alt="Social media icon"
              />
            </a>
            <a
              href="#"
              className="flex items-center w-5 h-5 bg-white rounded hover:bg-gray-200 transition-colors duration-200"
              aria-label="Social media link"
            >
              <img
                src="/icon_twitter_white.svg"
                className="object-contain self-stretch my-auto w-full aspect-square"
                alt="Social media icon"
              />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};
