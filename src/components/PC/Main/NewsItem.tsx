import * as React from "react";

interface NewsItemProps {
  title: string;
  description: string;
  date: string;
  imageSrc: string;
}

export const NewsItem = ({
  title,
  description,
  date,
  imageSrc,
}: NewsItemProps) => {
  return (
    <article className="self-center pt-5 max-w-full border-b border-solid border-b-[color:var(--Border-C7C7C7,#C7C7C7)] w-[1065px]">
      <div className="flex flex-wrap items-start py-2.5 w-full max-md:max-w-full">
        <div className="flex-1 shrink pr-2.5 basis-0 min-w-60 max-md:max-w-full">
          <h3 className="gap-2.5 self-stretch w-full text-xl font-medium tracking-tight text-slate-950 max-md:max-w-full">
            {title}
          </h3>
          <div className="mt-2.5 w-full max-md:max-w-full">
            <p className="text-sm tracking-tight text-slate-600 max-md:max-w-full">
              {description}
            </p>
            <time className="mt-2.5 text-base tracking-tight text-slate-950 max-md:max-w-full">
              {date}
            </time>
          </div>
        </div>
        <div className="w-[197px]">
          <img
            src={imageSrc}
            className="object-contain aspect-[1.28] w-[197px]"
          />
        </div>
      </div>
    </article>
  );
};
