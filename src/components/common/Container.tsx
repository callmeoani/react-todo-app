import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="border rounded-2xl border-[#A1A3ABA1] w-full flex-1 flex flex-col shadow-lg py-[12px] lg:py-[20px] xl:py-[22px] px-[12px] lg:px-[20px] xl:px-[26px] ">
      {children}
    </div>
  );
}
