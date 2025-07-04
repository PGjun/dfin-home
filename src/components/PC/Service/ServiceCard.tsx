interface ServiceCardProps {
  title: string;
  description: string[];
  iconCount: number;
  backgroundColor: "sky" | "slate";
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconCount,
  backgroundColor,
}) => {
  const bgClass = backgroundColor === "sky" ? "bg-sky-50" : "bg-slate-100";

  const renderIcons = () => {
    return Array.from({ length: iconCount }, (_, index) => (
      <div
        key={index}
        className={`w-3 h-3 rounded-full shrink-0 self-stretch my-auto ${
          iconCount % 2 === 1 ? "bg-[#2B64F8]" : "bg-[#8B5CF6]"
        }`}
      />
    ));
  };

  return (
    <article
      className={`flex flex-col flex-1 shrink justify-between p-10 rounded-sm basis-0 ${bgClass} min-h-[404px] min-w-60 max-md:px-5`}
    >
      <h3 className="pb-5 w-full text-2xl font-medium tracking-tight text-slate-950">
        {title}
      </h3>
      <div className="flex-1 w-full text-base tracking-tight text-slate-950">
        {description}
      </div>
      <div className="flex gap-1 items-center self-start">{renderIcons()}</div>
    </article>
  );
};

export default ServiceCard;
