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
  value = "",
  onChange,
  error,
  name,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const inputClasses = `
    w-full px-4 py-2.5 mt-1.5 text-sm tracking-tight bg-white rounded-sm border border-solid 
    ${error ? "border-red-500" : "border-[color:var(--Border-EBEBEA,#EBEBEA)]"}
    focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500
    text-slate-950 placeholder-neutral-400
  `;

  const textareaClasses = `
    w-full px-4 py-3 mt-1.5 text-sm tracking-tight bg-white rounded-sm border border-solid 
    ${error ? "border-red-500" : "border-[color:var(--Border-EBEBEA,#EBEBEA)]"}
    focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500
    text-slate-950 placeholder-neutral-400 resize-none
  `;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-start w-full text-sm tracking-tight text-slate-950">
        <div className="flex flex-1 shrink gap-2 items-center w-full basis-0">
          {required && (
            <div className="self-stretch my-auto w-2 whitespace-nowrap">*</div>
          )}
          {icon && (
            <div className="flex items-center self-stretch my-auto w-4">
              <img
                src={icon}
                className="object-contain self-stretch my-auto w-4 aspect-square"
                alt=""
              />
            </div>
          )}
          <div className="flex flex-1 shrink gap-2.5 items-center self-stretch my-auto w-full basis-0">
            <div className="flex items-center self-stretch my-auto">
              <div className="self-stretch my-auto text-slate-950">{label}</div>
            </div>
          </div>
        </div>
      </div>

      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`${textareaClasses} ${className}`}
          rows={4}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={inputClasses}
        />
      )}

      {error && <div className="mt-1 text-xs text-red-500">{error}</div>}
    </div>
  );
};
