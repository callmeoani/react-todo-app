import { Outlet } from "react-router";
import Header from "../widgets/Header";
import Sidebar from "../widgets/Sidebar";
import { useMedia } from "react-use";
import { Suspense } from "react";

export default function PrimaryLayout() {
  const isWide = useMedia("(min-width: 768px)");
  return (
    <div className="flex flex-col overflow-hidden relative h-screen">
      <div className="w-full sticky top-0">
        <Header isWide={isWide} />
      </div>
      <div className="flex-1 bg-[#F5F8FF] flex pt-[24px] md:pt-[56px] ">
        <Sidebar isWide={isWide} />
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex-1 flex flex-col px-[24px] lg:px-[48px] xl:px-[72px] pb-[15px] xl:pb-[30px] ">
            <Outlet />
          </div>
        </Suspense>
      </div>
    </div>
  );
}
