import * as React from "react";

interface ServiceProcessCardProps {
  title: string;
  description: string;
  iconCount: number;
  variant: "primary" | "secondary";
}

export const ServiceProcessCard: React.FC<ServiceProcessCardProps> = ({
  title,
  description,
  iconCount,
  variant,
}) => {
  const bgColor = variant === "primary" ? "bg-sky-50" : "bg-slate-100";
  const titleColor = variant === "primary" ? "text-blue-600" : "text-slate-950";

  const renderIcons = () => {
    return Array.from({ length: iconCount }, (_, index) => (
      <div
        key={index}
        className={`w-2.5 h-2.5 rounded-full shrink-0 self-stretch my-auto ${
          iconCount % 2 === 1 ? "bg-[#2B64F8]" : "bg-[#8B5CF6]"
        }`}
      />
    ));
  };

  return (
    <article className={`flex flex-col px-4 py-6 w-full rounded-sm ${bgColor}`}>
      <h3
        className={`pb-5 w-full text-base font-semibold tracking-tight ${titleColor}`}
      >
        {title}
      </h3>
      <p className="pb-10 w-full text-sm font-medium tracking-tight text-slate-600">
        {description}
      </p>
      <div className="flex gap-1 items-center self-start">{renderIcons()}</div>
    </article>
  );
};
