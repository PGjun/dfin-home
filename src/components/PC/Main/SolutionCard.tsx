import * as React from "react";

interface SolutionCardProps {
  imageSrc: string;
  title: string;
  details: string[];
  tags: string[];
  className?: string;
}

export const SolutionCard = ({
  imageSrc,
  title,
  details,
  tags,
  className = "",
}: SolutionCardProps) => {
  return (
    <article
      className={`flex flex-wrap flex-1 shrink gap-5 items-start p-5 bg-white basis-0 min-w-60 max-md:max-w-full ${className}`}
    >
      <div className="overflow-hidden w-[197px]">
        <img
          src={imageSrc}
          className="object-cover aspect-[2.18] w-[196px]"
          alt={`${title} image`}
        />
      </div>
      <div className="flex flex-col font-medium min-w-60 w-[411px]">
        <h3 className="flex-1 shrink gap-2.5 self-stretch w-full text-2xl tracking-tight basis-0 text-slate-950">
          {title}
        </h3>
        <ul className="pt-2 w-full tracking-tight text-slate-600 list-disc pl-5 space-y-1">
          {details.map((detail, index) => (
            <li key={index} className="text-slate-600">
              {detail}
            </li>
          ))}
        </ul>
        <div className="flex gap-2.5 items-start self-start px-1 mt-5 text-sm tracking-tight text-blue-600 whitespace-nowrap">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="gap-2.5 self-stretch px-6 py-2 text-blue-600 border-solid border-[1.5px] border-[color:var(--Primary-Basic,#2B64F8)] rounded-[100px] max-md:px-5"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
