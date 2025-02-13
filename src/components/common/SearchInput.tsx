import SearchIcon from "../../assets/images/searchIcon.svg";
export default function SearchInput() {
  return (
    <div className="flex-1 h-[36px] flex">
      <input
        type="text"
        placeholder="Search your task here..."
        className={`bg-[#F5F8FF] placeholder-[#A1A3AB] rounded-l-lg h-full text-xs shadow-md px-2 w-full `}
      />
      <button className="bg-primary-orange rounded-lg w-[36px] h-[36px] flex items-center justify-center hover:opacity-75 transition transform duration-500 cursor-pointer -left-4 relative">
        <img src={SearchIcon} alt="search" />
      </button>
    </div>
  );
}
