import { useTranslations } from "next-intl";

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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1ce866ac3b552509cecc16691b0a46a6cc1947b?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0"
            className="object-contain shrink-0 w-5 aspect-square"
          />
          <address className="flex-1 shrink text-white basis-0 not-italic">
            {t("address")}
          </address>
        </div>
        <div className="flex gap-1.5 items-start pt-5 w-full text-base tracking-tight text-white whitespace-nowrap">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bfd05a8bba89bfdab4dd42ec7690b24a7c2b880?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0"
            className="object-contain shrink-0 w-5 aspect-square"
          />
          <a href={`mailto:${t("email")}`} className="text-white">
            {t("email")}
          </a>
        </div>
        <div className="flex gap-1.5 items-start pt-5 w-full text-base tracking-tight text-white whitespace-nowrap">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/10fbb6c76118ce03464d700f08c0b491d2b9279f?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0"
            className="object-contain shrink-0 w-5 aspect-square"
          />
          <a href={`tel:${t("phone")}`} className="text-white">
            {t("phone")}
          </a>
        </div>
        <div className="flex gap-1.5 items-start pt-24 w-full">
          <div className="flex gap-2.5 items-end">
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
      </div>
    </aside>
  );
};
