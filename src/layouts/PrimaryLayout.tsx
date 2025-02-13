import { Outlet } from "react-router";
import Header from "../widgets/Header";
import Sidebar from "../widgets/Sidebar";
import { useMedia } from "react-use";

export default function PrimaryLayout() {
  const isWide = useMedia("(min-width: 768px)");
  return (
    <div className="flex flex-col overflow-hidden relative h-screen">
      <div className="w-full sticky top-0">
        <Header isWide={isWide} />
      </div>
      <div className="flex-1 bg-green-300 flex">
        {/* <div className="bg-purple-500 flex flex-col w-[30%] max-w-[365px]"> */}
          <Sidebar isWide={isWide} />
        {/* </div> */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
