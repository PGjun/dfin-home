import * as React from "react";

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

export const FeatureCard = ({
  iconSrc,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <article className="min-w-60 w-[325px]">
      <div className="flex flex-col items-start pb-8 w-full border-b border-solid border-b-[color:var(--Font-Basic,#000B20)]">
        <img
          src={iconSrc}
          className="object-contain max-w-full aspect-square w-[100px]"
        />
      </div>
      <div className="pt-8 w-full font-medium">
        <h3 className="text-2xl tracking-tight text-slate-950">{title}</h3>
        <p className="mt-4 text-base tracking-tight text-slate-600">
          {description}
        </p>
      </div>
    </article>
  );
};
