import Navs from "./Navs";

export default function Sidebar({ isWide }: { isWide: boolean }) {
  return (
    <>
      {isWide && (
        <div className="bg-blue-500 flex-col flex pt-[56px] w-[30%] max-w-[365px]">
          <div className="relative bg-primary flex-1 rounded-r-lg px-[8px] lg:px-[21px] pt-[109px] flex flex-col">
            <div className="absolute -top-10 left-[50%] transform -translate-x-[50%] flex-col flex items-center ">
              <div className="w-[86px] h-[86px] rounded-full border-solid border-white border-1px flex items-center justify-center bg-yellow-500">
                Img
              </div>
              <div className="text-center">
                <p>Abdulhameed&nbsp;Muhammed</p>
                <p className="text-xs">callmeoani@gmail.com</p>
              </div>
            </div>
            <div className="flex-1 py-8 ">
              <Navs />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
