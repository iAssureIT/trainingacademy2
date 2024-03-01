"use client";
import LeftSideBar from "@/components/common/LeftSideBar/LeftSideBar";

export default function UserLayout({ children }) {
  const toggleSidebar = (event) => {
    event.preventDefault();

    const wrapperClassList = document.querySelector("#logo-sidebar").classList;
    const drawerClassList = document.querySelector("#drawer").classList;
    const arrowClassList = document.querySelector("#arrow").classList;
    const iconClassList = document.querySelector("#icon").classList;

    console.log("arrowClassList => ", arrowClassList);

    if (wrapperClassList.contains("w-0")) {
      wrapperClassList.remove("w-0");

      arrowClassList.remove("left-4");
      iconClassList.remove("fa-caret-right");
      arrowClassList.add("left-64");

      iconClassList.add("fa-caret-left");

      wrapperClassList.add("w-64");
      wrapperClassList.add("grid-cols-2");

      arrowClassList.add("left-64");
    } else {
      wrapperClassList.remove("w-64");

      arrowClassList.remove("left-64");

      wrapperClassList.add("w-0");
      arrowClassList.remove("left-64");
      iconClassList.remove("fa-caret-left");
      arrowClassList.add("left-4");

      iconClassList.add("fa-caret-right");
    }
  };

  return (
    <div className="relative flex">
      <div
        className="absolute  duration-300  top-20 left-64  z-40 h-10 w-10 "
        id="arrow"
      >
        <i
          id="icon"
          className="fa fa-caret-right text-xl 	border border-1 border-leftLightGray text-leftWhite z-50  pl-2 font-l rounded-full shadow-xl shadow-black-500/50 duration-300 bg-leftGray absolute h-7 w-7 -left-4 "
          onClick={toggleSidebar}
        >
          {" "}
        </i>
      </div>
      <div
        id="logo-sidebar"
        className={"  w-64   h-full pb-24  bg-leftGray  duration-300  "}
        aria-label="Sidebar"
      >
        <LeftSideBar />
      </div>

      <div className=" overflow-x-scroll relative w-full bg-gray-200 p-4">
        {children}
      </div>
    </div>
  );
}
