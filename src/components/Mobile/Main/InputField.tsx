"use client";

import React from "react";

interface InputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  icon?: string;
  type?: "text" | "email" | "tel" | "textarea";
  className?: string;
}

export const InputField = ({
  name,
  label,
  placeholder,
  required = false,
  icon,
  type = "text",
  className = "",
}: InputFieldProps) => {
  const isTextarea = type === "textarea";

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-start w-full max-w-[250px] text-slate-950">
        <div className="flex flex-1 shrink gap-2 items-center w-full basis-0">
          {required && (
            <div className="self-stretch my-auto w-2 whitespace-nowrap text-slate-950">
              *
            </div>
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
              <label className="self-stretch my-auto text-slate-950 text-sm tracking-tight">
                {label}
              </label>
            </div>
          </div>
        </div>
      </div>

      {isTextarea ? (
        <textarea
          required={required}
          name={name}
          placeholder={placeholder}
          className="flex flex-1 gap-2 items-start px-4 py-3 mt-1.5 text-sm tracking-tight bg-white rounded-sm border border-solid border-[color:var(--Border-EBEBEA,#EBEBEA)] size-full text-neutral-500 resize-none min-h-[68px]"
        />
      ) : (
        <input
          required={required}
          name={name}
          type={type}
          placeholder={placeholder}
          className="flex gap-2 items-center px-4 py-2.5 mt-1.5 w-full text-sm tracking-tight bg-white rounded-sm border border-solid border-[color:var(--Border-EBEBEA,#EBEBEA)] text-neutral-500"
        />
      )}
    </div>
  );
};
