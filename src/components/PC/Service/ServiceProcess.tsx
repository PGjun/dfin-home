"use client";
import * as React from "react";
import { useTranslations } from "next-intl";
import ServiceCard from "./ServiceCard";

interface ServiceStep {
  title: string;
  desc: string[];
}

const ServiceProcess: React.FC = () => {
  const t = useTranslations("Service.ServiceProcess");
  const steps = t.raw("steps") as ServiceStep[];

  const serviceCards = steps.map((step: ServiceStep, index: number) => ({
    title: step.title,
    description: step.desc,
    iconCount: index + 1,
    backgroundColor: index % 2 === 0 ? ("sky" as const) : ("slate" as const),
  }));

  return (
    <section className="flex flex-col justify-center items-center py-8 w-full max-md:max-w-full">
      <div className="py-10 max-w-full w-[1280px]">
        <div className="flex flex-wrap gap-5 justify-center items-start py-2.5 w-full max-md:max-w-full">
          {serviceCards.slice(0, 3).map((card, index) => (
            <ServiceCard
              key={index}
              title={card.title}
              description={card.description}
              iconCount={card.iconCount}
              backgroundColor={card.backgroundColor}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-5 justify-center items-start py-2.5 w-full max-md:max-w-full">
          {serviceCards.slice(3, 6).map((card, index) => (
            <ServiceCard
              key={index + 3}
              title={card.title}
              description={card.description}
              iconCount={card.iconCount}
              backgroundColor={card.backgroundColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
