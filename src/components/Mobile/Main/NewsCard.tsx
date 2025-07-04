import React from "react";

interface NewsCardProps {
  title: string;
  description: string;
  date: string;
  imageSrc: string;
}

export const NewsCard = ({
  title,
  description,
  date,
  imageSrc,
}: NewsCardProps) => {
  return (
    <article className="flex overflow-hidden items-start py-2 w-full border-b border-solid border-b-[color:var(--Border-C7C7C7,#C7C7C7)]">
      <div className="flex-1 shrink pr-4 basis-0">
        <h3 className="flex-1 shrink gap-2.5 self-stretch w-full font-medium basis-0 text-slate-950">
          {title}
        </h3>
        <p className="flex-1 shrink gap-2.5 self-stretch py-1.5 w-full basis-0 text-slate-600">
          {description}
        </p>
        <time className="flex-1 shrink gap-2.5 self-stretch py-1.5 w-full whitespace-nowrap basis-0 min-h-[25px] text-slate-950">
          {date}
        </time>
      </div>
      <img
        src={imageSrc}
        className="object-contain shrink-0 aspect-[1.33] w-[100px]"
        alt={title}
      />
    </article>
  );
};
