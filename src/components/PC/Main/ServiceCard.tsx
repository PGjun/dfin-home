import * as React from "react";

interface ServiceCardProps {
  title: string;
  description: string[];
  iconCount?: number;
  bgColor: "blue" | "gray";
}

export const ServiceCard = ({
  title,
  description,
  iconCount = 1,
  bgColor,
}: ServiceCardProps) => {
  const bgClass = bgColor === "blue" ? "bg-sky-50" : "bg-slate-100";
  const titleColor = bgColor === "blue" ? "text-blue-600" : "text-slate-950";

  return (
    <article
      className={`self-stretch p-10 my-auto ${bgClass} h-[404px] min-w-60 w-[306px] max-md:px-5`}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex-1 w-full">
          <h3 className={`text-2xl font-semibold tracking-tight ${titleColor}`}>
            {title}
          </h3>
          <div className="mt-5 w-full text-base tracking-tight text-slate-950">
            {description}
          </div>
        </div>
        <div className="flex gap-1 items-center self-start mt-4">
          {Array.from({ length: iconCount }, (_, dotIndex) => (
            <div
              key={dotIndex}
              className={`w-2.5 h-2.5 rounded-full shrink-0 self-stretch my-auto ${
                iconCount % 2 === 1 ? "bg-[#2B64F8]" : "bg-[#8B5CF6]"
              }`}
            />
          ))}
        </div>
      </div>
    </article>
  );
};
