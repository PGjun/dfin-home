"use client";

import { InputField } from "./InputField";

export const ContactForm = () => {
  return (
    <section className="px-4 absolute top-0 left-0 right-0">
      <form className="flex flex-col flex-1 shrink justify-center px-4 py-8 w-full bg-white border border-solid shadow-md basis-0 border-[color:var(--Border-F0F0F0,#F0F0F0)] min-w-60">
        <h2 className="self-stretch w-full text-base font-bold tracking-tight text-blue-600">
          Try Now !
        </h2>

        <div className="pt-8 w-full">
          <div className="flex items-start w-full text-sm tracking-tight">
            <div className="flex-1 shrink pr-2.5 basis-0">
              <InputField
                name="first_name"
                label="First Name"
                placeholder="First"
                required={true}
              />
            </div>
            <div className="flex-1 shrink pl-2.5 basis-0">
              <InputField
                name="last_name"
                label="Last Name"
                placeholder="Last"
                required={true}
              />
            </div>
          </div>

          <div className="flex items-start mt-4 w-full">
            <div className="flex-1 shrink w-full basis-0 min-w-60">
              <InputField
                name="email"
                label="Corporate Email Address"
                placeholder="Please fill-in a work email address"
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2bcafd216a536a7765f6eb268300752851ed5b94?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0"
                type="email"
              />
            </div>
          </div>

          <div className="flex items-start mt-4 w-full">
            <div className="flex-1 shrink w-full basis-0 min-w-60">
              <InputField
                name="phone"
                label="Phone"
                placeholder="Please fill-in a phone number"
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b0ea8563f059ae45954c2758a34df8d9c3afdfe6?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0"
                type="tel"
              />
            </div>
          </div>

          <div className="flex items-start mt-4 w-full">
            <div className="flex-1 shrink w-full basis-0 min-w-60">
              <InputField
                name="message"
                label="Remarks"
                placeholder="Please fill-in a work email address"
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/89955d07c1e921d291cdcfcdbb4474bcd446e9ce?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0"
                type="textarea"
                className="min-h-[110px]"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 w-full">
          <div className="flex justify-center items-center w-full rounded min-h-[42px]">
            <button
              type="submit"
              style={{
                background: "linear-gradient(90deg, #2B64F8 0%, #8548D8 100%)",
              }}
              className="
              flex gap-4 justify-center items-center self-stretch py-3 pr-4 pl-4 my-auto rounded-sm flex-1
              transition-all duration-200
              hover:scale-101 hover:brightness-110
              active:scale-100
            "
            >
              <div className="flex gap-2.5 items-start self-stretch my-auto text-sm tracking-tight text-white whitespace-nowrap">
                <div className="flex items-center">
                  <span className="self-stretch my-auto text-white">
                    Submit
                  </span>
                </div>
              </div>
              <div className="flex items-center self-stretch my-auto w-3.5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b5e5188fc2f19a29567566a85b825faf16de2d6?placeholderIfAbsent=true&apiKey=09fb25ef0f6d4b55af4d364cfb6714d0"
                  className="object-contain self-stretch my-auto w-3.5 aspect-square"
                  alt=""
                />
              </div>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
