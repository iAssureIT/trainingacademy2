import React, { useState } from "react";

const LeftSideBar = () => {
  const accordionItems = [
    { id: 1, label: "Dashboard" },
    // {
    //   id: 2, label: "Blogs", submenu: [{ subLabel: "Create New Blog", url: "/user/blogs/create-new-blog" },
    //   { subLabel: "List of Blogs", url: "/user/blogs/my-blogs" }]
    // },
    // {
    //   id: 3, label: "User Management", submenu: [{ subLabel: "Create New User", url: "/user/user-management/create-user" },
    //   { subLabel: "Users List", url: "/user/user-management/users-list" }]
    // },
    {
      id: 4, label: "Student Management", submenu: [{ subLabel: "Add Student", url: "/user/student/add-new-stud" },
      { subLabel: "Student List", url: "/user/student-management/student-list" },
      { subLabel: "Deleted Students", url: "/user/student-management/deleted-student-list" }]
    },
    // {
    //   id: 5, label: "Case Study Management", submenu: [{ subLabel: "Add Case Study", url: "/user/case-study/create-new-case-study" },]
    // },

  ];

  const [openItems, setOpenItems] = useState([]);

  const handleAccordionToggle = (itemId) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(itemId)
        ? prevOpenItems.filter((id) => id !== itemId)
        : [...prevOpenItems, itemId]
    );
  };

  return (
    <div className={"h-full w-full  pb-4 overflow-y-auto "} id="drawer">
      <ul className="w-64 font-medium text-sm">
        {accordionItems.map((item) => (
          <li key={item.id}>
            <button
              className={`w-full flex container text-leftWhite transition duration-75 ${openItems.includes(item.id)
                ? "bg-leftBlue dark:text-gray-400 group-hover:text-leftWhite dark:group-hover:text-leftWhite"
                : "bg-leftGray dark:text-gray-400 group-hover:text-leftWhite dark:group-hover:text-leftWhite"
                } border-y border-leftLightGray px-2 py-4 text-leftWhite dark:text-white hover:bg-leftBlue dark:hover:bg-leftBlue`}
              onClick={() => handleAccordionToggle(item.id)}
            >
              <i className="w-4 fa-solid fa-file text-xl text-left float-left "></i>
              <span className="w-48 pl-4 text-left float-left">{item.label}</span>
              <span className="w-4 text-sm font-semibold float-right">
                {openItems.includes(item.id) ? " - " : " + "}
              </span>
            </button>
            {openItems.includes(item.id) && item.submenu && (
              <ul className="bg-leftBlack text-xs">
                {item.submenu.map((subItem, index) => (
                  <li key={index}>
                    <a
                      href={subItem.url}
                      className="flex items-center bg-leftBlack p-2 pl-5 text-leftWhite dark:text-white hover:bg-leftBlue dark:hover:bg-leftBlue group"
                    >
                      <span className="flex-1 ml-5 whitespace-nowrap">{subItem.subLabel}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
