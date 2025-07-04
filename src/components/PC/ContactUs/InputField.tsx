"use client";
import React from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  required?: boolean;
  icon?: string;
  type?: "text" | "email" | "tel" | "textarea";
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  name?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  required = false,
  icon,
  type = "text",
  className = "",
  value,
  onChange,
  error,
  name,
}) => {
  const inputClasses = `flex gap-2 items-center px-4 py-3 mt-1.5 w-full bg-white rounded-sm border border-solid ${
    error
      ? "border-red-500 focus-within:border-red-500"
      : "border-[color:var(--Border-EBEBEA,#EBEBEA)] focus-within:border-blue-600"
  } text-neutral-300 transition-colors duration-200`;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-start max-w-full w-[300px]">
        <div className="flex flex-1 shrink gap-2 items-center w-full basis-0">
          {required && (
            <div className="self-stretch my-auto w-2 whitespace-nowrap">*</div>
          )}
          {icon && (
            <div className="flex items-center self-stretch my-auto w-4">
              <img
                src={icon}
                className="object-contain self-stretch my-auto w-4 aspect-square"
                alt={`${label} icon`}
              />
            </div>
          )}
          <div className="flex flex-1 shrink gap-2.5 items-center self-stretch my-auto w-full basis-0">
            <div className="flex items-center self-stretch my-auto">
              <div className="self-stretch my-auto text-slate-950 text-sm tracking-tight">
                {label}
              </div>
            </div>
          </div>
        </div>
      </div>
      {type === "textarea" ? (
        <div className={inputClasses}>
          <textarea
            name={name}
            placeholder={placeholder}
            value={value || ""}
            onChange={handleInputChange}
            required={required}
            className="flex-1 bg-transparent outline-none resize-none min-h-[80px] text-slate-950 placeholder:text-neutral-300"
            rows={4}
          />
        </div>
      ) : (
        <div className={inputClasses}>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value || ""}
            onChange={handleInputChange}
            required={required}
            className="flex-1 bg-transparent outline-none text-slate-950 placeholder:text-neutral-300"
          />
        </div>
      )}
      {error && <div className="mt-1 text-sm text-red-500">{error}</div>}
    </div>
  );
};
