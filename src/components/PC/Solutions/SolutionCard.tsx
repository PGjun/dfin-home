"use client";
import * as React from "react";

interface Tag {
  label: string;
}

interface SolutionCardProps {
  imageUrl: string;
  title: string;
  details: string[];
  tags: Tag[];
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  imageUrl,
  title,
  details,
  tags,
}) => {
  return (
    <article className="flex overflow-hidden flex-col flex-1 shrink items-start p-5 border border-solid basis-0 border-[color:var(--Border-568FC5,#568FC5)] min-w-60">
      <div className="max-w-full">
        <img
          src={imageUrl}
          className="object-contain z-10 w-full aspect-[2.16]"
          alt={`${title} image`}
        />
      </div>
      <div className="flex-1 self-stretch pt-5 w-full font-medium">
        <h2 className="flex-1 shrink gap-2.5 w-full text-2xl tracking-tight basis-0 text-slate-950">
          {title}
        </h2>
        <ul className="pt-2 w-full tracking-tight text-slate-600 list-disc pl-5 space-y-1">
          {details.map((detail, index) => (
            <li key={index} className="text-slate-600">
              {detail}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2.5 items-start px-1 pt-5 text-sm font-medium leading-6 text-blue-600 whitespace-nowrap">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="gap-2.5 self-stretch px-4 py-0.5 text-blue-600 border-solid border-[1.5px] border-[color:var(--Primary-Basic,#2B64F8)] rounded-[100px]"
          >
            {tag.label}
          </div>
        ))}
      </div>
    </article>
  );
};
