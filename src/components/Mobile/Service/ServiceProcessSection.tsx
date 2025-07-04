"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { ServiceProcessCard } from "./ServiceProcessCard";

interface ServiceStep {
  title: string;
  desc: string;
}

export const ServiceProcessSection: React.FC = () => {
  const t = useTranslations("Service.ServiceProcess");
  const steps = t.raw("steps") as ServiceStep[];

  const processSteps = steps.map((step: ServiceStep, index: number) => ({
    title: step.title,
    description: step.desc,
    iconCount: index + 1,
    variant: index % 2 === 0 ? ("primary" as const) : ("secondary" as const),
  }));

  return (
    <section className="overflow-hidden px-4 pt-5 pb-10 w-full">
      <div className="flex flex-col justify-center w-full">
        {processSteps.map((step, index) => (
          <div key={step.title} className={index > 0 ? "mt-4" : ""}>
            <ServiceProcessCard
              title={step.title}
              description={step.description}
              iconCount={step.iconCount}
              variant={step.variant}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
