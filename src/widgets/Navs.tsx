import NavigationTabs from "../constants/navigation-tabs";
import { Link, useLocation } from "react-router";

export default function Navs() {
  const currentPathname = useLocation().pathname;

  return (
    <ul className="flex flex-col">
      {NavigationTabs.map((item, index) => (
        <li key={index} className="">
          <Link
            to={item.path}
            className={`grid grid-cols-3 items-center gap-2 py-4 rounded-lg ${
              item.path === currentPathname
                ? "bg-white"
                : " hover:bg-red-500/50 transition transform hover:scale-105 duration-75"
            }`}
          >
            <div className="flex items-center justify-center">
              <item.icon
                color={item.path === currentPathname ? "#FF6767" : "#fff"}
              />
            </div>
            <span
              className={`col-span-2 font-medium ${
                item.path === currentPathname ? "text-primary" : "text-white"
              }`}
            >
              {item.name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
