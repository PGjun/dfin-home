import React from "react";

interface FeatureCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <article className="flex items-start pt-5 pb-7 w-full">
      <img
        src={imageSrc}
        className="object-contain shrink-0 aspect-[1.32] w-[79px]"
        alt={imageAlt}
      />
      <div className="flex-1 shrink pl-5 basis-0 min-w-60">
        <h3 className="text-base tracking-tight text-slate-950">{title}</h3>
        <p className="mt-4 text-sm tracking-tight text-slate-600">
          {description}
        </p>
      </div>
    </article>
  );
};
