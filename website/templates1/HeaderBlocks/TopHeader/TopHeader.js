import React, { useState, useEffect } from "react";

const TopHeader = () => {

  useEffect(() => {
    const handleScroll = () => {
      const listElements1 = document.querySelectorAll(".listItem1");
      const listElements2 = document.querySelectorAll(".listItem2");
      const shouldAddClass = window.scrollY > 0; // Adjust this condition as needed
      
      listElements1.forEach(element => {
        element.classList.toggle("text-darkGray", shouldAddClass);
        element.classList.toggle("text-white", !shouldAddClass);
      });

      listElements2.forEach(element => {
        element.classList.toggle("text-darkGray", shouldAddClass);
        element.classList.toggle("text-white", !shouldAddClass);
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section>
      <nav className="bg-gray-200  flex justify-end bg-transparent border-gray-200 ">
        {/* <div className="text-lg font-bold py-2 px-5  text-white  lg:ml-16 my-auto">
          District 3131 - Pune, Raigad
        </div> */}
        <ul className="px-1  py-3 md:flex  lg:flex xl:flex  space-x-5 justify-end text-sm font-semibold hidden">
          <li className="text-white text-sm font-normal listItem1 ">
            <i className="mr-1 fa fa-phone " aria-hidden="true"></i>
            +91 7770003690
          </li>
          <li className="text-white text-sm font-normal listItem2 ">
            <i className="fa-regular fa-envelope mr-1"></i>
            <a href="https://mail.google.com/">
            info@iaspireit.com
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};
export default TopHeader;
