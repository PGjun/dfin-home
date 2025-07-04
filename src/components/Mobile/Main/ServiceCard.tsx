import React from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  features: string[];
  tags: string[];
  imageAlt?: string;
}

export const ServiceCard = ({
  image,
  title,
  features,
  tags,
  imageAlt,
}: ServiceCardProps) => {
  return (
    <article className="overflow-hidden p-4 w-full bg-white">
      <div className="overflow-hidden w-full bg-red-800">
        <img
          src={image}
          className="object-contain w-full aspect-[2.04]"
          alt={imageAlt || title}
        />
      </div>
      <h3 className="flex-1 shrink self-stretch pt-4 w-full text-base font-medium tracking-tight basis-0 text-slate-950">
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
          <div
            key={index}
            className="gap-2.5 self-stretch px-4 py-0.5 text-blue-600 border-solid border-[1.5px] border-[color:var(--Primary-Basic,#2B64F8)] rounded-[100px]"
          >
            {tag}
          </div>
        ))}
      </div>
    </article>
  );
};
