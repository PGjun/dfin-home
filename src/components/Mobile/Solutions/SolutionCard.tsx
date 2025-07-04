"use client";
import * as React from "react";

interface SolutionCardProps {
  imageUrl: string;
  title: string;
  features: string[];
  tags: string[];
}

export const SolutionCard = ({
  imageUrl,
  title,
  features,
  tags,
}: SolutionCardProps) => {
  return (
    <article className="overflow-hidden p-4 w-full bg-white border border-solid border-[color:var(--Border-568FC5,#568FC5)]">
      <div className="overflow-hidden w-full">
        <img
          src={imageUrl}
          className="object-cover aspect-[3.5] w-full"
          alt={title}
        />
      </div>
      <h3 className="flex-1 shrink self-stretch pt-4 w-full text-base font-medium basis-0 text-slate-950">
        {title}
      </h3>
      <ul className="pt-2 w-full text-xs tracking-tight text-slate-600 list-disc pl-5 space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-slate-600">
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex gap-2.5 items-start pt-4 w-full text-sm font-medium leading-6 text-blue-600 whitespace-nowrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="gap-2.5 self-stretch px-4 py-0.5 text-blue-600 border-solid border-[1.5px] border-[color:var(--Primary-Basic,#2B64F8)] rounded-[100px]"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};
