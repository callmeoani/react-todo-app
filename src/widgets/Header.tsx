import { useClickAway } from "react-use";
import IconButton from "../components/common/IconButton";
import BellIcon from "../assets/images/bellIcon.svg";
import CalendarIcon from "../assets/images/calendarIcon.svg";

import { Link } from "react-router";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchInput from "../components/common/SearchInput";
import NavigationTabs from "../constants/navigation-tabs";

export default function Header({ isWide }: { isWide: boolean }) {
  const [showHamburger, setShowHamburger] = useState<boolean>(false);
  const ref = useRef(null);
  const hamburgerRef = useRef(null);

  useClickAway(ref, () => {
    setShowHamburger(false);
  });
  const handleHamClick = () => {
    setShowHamburger(!showHamburger);
  };

  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <header className="flex items-center px-4 md:px-8 lg:px-16 xl:px-[72px] pt-4 pb-3 md:pt-6 md:pb-5 xl:pt-[38px] xl:pb-[26px] shadow-md justify-between relative ">
      <div className="w-1/4">
        <Link to={"/"} className="text-2xl font-bold text-black">
          <span className="text-primary">To</span>-Do
        </Link>
      </div>
      {!isWide ? (
        <div className="flex gap-4 items-center">
          <div className="flex items-center">
            <AnimatePresence>
              {showSearchInput ? (
                <motion.div
                  initial={{ x: 30 }}
                  animate={{ x: 0 }}
                  exit={{ x: -30 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex items-center gap-2"
                >
                  <button
                    onClick={() => setShowSearchInput(false)}
                    className="font-bold hover:scale-125 transition transform duration-75"
                  >
                    X
                  </button>
                  <SearchInput />
                </motion.div>
              ) : (
                <motion.button
                  title="Search task"
                  onClick={() => setShowSearchInput(true)}
                  initial={{}}
                  whileTap={{ x: -40 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className=" flex flex-col items-center gap-0.5 group"
                >
                  <FaSearch size={18} />
                  <div className="w-4 h-0.5 bg-black hidden group-hover:block transform transition duration-500" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
          <div id="hamButton" className="flex items-center justify-center">
            <MotionConfig
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <button
                ref={hamburgerRef}
                onClick={handleHamClick}
                className="cursor-pointer"
              >
                <div className="flex flex-col gap-1 w-[24] h-[24px]">
                  <motion.div
                    initial={{ x: 0 }}
                    animate={{
                      rotate: showHamburger ? "45deg" : "0deg",
                      y: showHamburger ? 10 : 0,
                    }}
                    className="w-6 h-[6px] bg-black rounded-lg"
                  />
                  <motion.div
                    initial={{ x: 0 }}
                    animate={{
                      x: showHamburger ? -20 : 0,
                      opacity: showHamburger ? 0 : 1,
                    }}
                    className="w-6 h-[6px] bg-black rounded-lg"
                  />
                  <motion.div
                    initial={{ x: 0 }}
                    animate={{
                      rotate: showHamburger ? "-45deg" : "0deg",
                      y: showHamburger ? -10 : 0,
                    }}
                    className="w-6 h-[6px] bg-black rounded-lg"
                  />
                </div>
              </button>
            </MotionConfig>
            <AnimatePresence>
              {showHamburger && (
                <motion.div
                  initial={{
                    x: 200,
                  }}
                  animate={{
                    x: 0,
                    y: -60,
                  }}
                  exit={{
                    x: 250,
                  }}
                  ref={ref}
                  className="absolute top-[100%] z-50 bg-yellow-300 pl-[1rem] pr-[2rem] py-20 rounded-sm right-0 shadow-lg h-screen"
                >
                  <ul className="flex flex-col space-y-4">
                    {NavigationTabs.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.path}
                          onClick={() => setShowHamburger(false)}
                          className="grid grid-cols-3 items-center gap-2"
                        >
                          <div className="flex items-center justify-center">
                            <item.icon color="white" />
                          </div>
                          <span className="col-span-2">{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ) : (
        <div className="flex items-center flex-1 gap-3 ">
          <SearchInput />
          <div className="flex items-center space-x-4">
            <nav>
              <ul className="flex items-center gap-2">
                <li>
                  <IconButton
                    icon={BellIcon}
                    title="Notifications"
                    onClick={() => {}}
                  />
                </li>
                <li>
                  <IconButton
                    icon={CalendarIcon}
                    title="Calendar"
                    onClick={() => {}}
                  />
                </li>
              </ul>
            </nav>
            <div>
              <p className="text-[15px] ">Tuesday</p>
              <p className="text-[#3abeff] text-sm">20/06/2023</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
