"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Axios from "axios";
import Swal from "sweetalert2";
import Image from "next/image";
import TopHeader from "../TopHeader/TopHeader";

function MenuBar(props) {

   const [isOpen, setIsOpen] = useState(false);
   const [isOpen1, setIsOpen1] = useState(false);
   const [menuItems, setmenuItems] = useState([]);
   const [menuItemsAfterLogin, setmenuItemsAfterLogin] = useState([]);
   const [userData, setUserData] = useState("");
   const pathname = usePathname();

   useEffect(() => {
      setmenuItems(props.inputData.menuItemsList);
      setmenuItemsAfterLogin(props.inputData.menuItemsAfterLoginList);
      const userDetails = localStorage.getItem("userDetails");
      if (userDetails) {
         const userDetailsParse = JSON.parse(userDetails);
         const parseUser_id = userDetailsParse.user_id;
         setUserData(userDetailsParse);
      }
      let userExists = pathname.includes("/admin/");
      if (userExists && !userDetails) {
         Swal.fire("Please login first!", "", "warning");
         window.location.href = "/auth/login";
      }
   }, []);
   const loginPage = () => {
      window.location.href = "/auth/login";
   };
   const customUrl = () => {
      // window.location.href = "/bike-booking";
   }
   const signOut = (event) => {
      event.preventDefault();
      var formValues = {
         user_id: userData.user_id,
         token: userData.token,
      };
      // console.log("signOut formValues = ",formValues);

      Axios.post("/api/auth/post/logout", formValues)
         .then((logoutResp) => {
            // console.log("logoutResp => ", logoutResp.data.data.nModified);
            if (logoutResp.data.data.nModified === 1) {
               var token = localStorage.removeItem("userDetails");
               Swal.fire({
                  title: "Thank You.",
                  text: "You have been logged out Successfully!",
                  icon: "success",
                  showCancelButton: false,
                  allowOutsideClick: false,
                  allowEscapeKey: false,
                  confirmButtonColor: "#0d2342",
                  confirmButtonText: "Ok!",
               });
               console.log("token", token);
               if (token === "undefined") {
                  // this.setState({ loggedIn: false })
               }
               window.location.href = "/";
               window.location.assign("/");
            }
         })
         .catch((error) => {
            console.log("error", error);
            var token = localStorage.removeItem("userDetails");
            Swal.fire({
               title: "Thank You.",
               text: "You have been logged out Successfully!",
               icon: "success",
               showCancelButton: false,
               allowOutsideClick: false,
               allowEscapeKey: false,
               confirmButtonColor: "#0d2342",
               confirmButtonText: "Ok!",
            });
            if (token === "undefined") {
            }
            window.location.href = "/";
            window.location.assign("/");
         });
   };
   const imageURL = ""

   if (typeof window !== 'undefined') {
      var nav1 = document.querySelector(".menubar");


      window.addEventListener('scroll', () => {
         // var shouldAddClass = window.scrollY > nav1.clientHeight;
         var shouldAddClass = window.scrollY;
         var menuItemElements = document.querySelectorAll(".menuText");
         var crossIcon = document.querySelectorAll(".crossIcon");
         nav1?.classList.toggle("bg-white", shouldAddClass);
         nav1?.classList.toggle("bg-transparent", !shouldAddClass);
         var imageElement = document.querySelector("#navLogo");
         var imageElement2 = document.querySelector("#navLogo1");
         var smMenuIcon = document.querySelector(".smMenu");
         smMenuIcon?.classList.toggle("text-black", shouldAddClass);
         smMenuIcon?.classList.toggle("text-white", !shouldAddClass);
         crossIcon.forEach(icon => {
            icon.classList.toggle("text-black", shouldAddClass);
            icon.classList.toggle("text-white", !shouldAddClass);
         });
         menuItemElements.forEach((menuItem) => {
            menuItem.classList.toggle("md:!text-black", shouldAddClass);
         });
         if(pathname === "/lp-workshop" || pathname === "/lp-thank-you-page"){
            null
         } else {
               if (shouldAddClass) {
                  // Change to the image source you want when scrolling down
                  imageElement.src = "/images/specific/trainingAcademy/Logo-2.png";
                  imageElement2.src = "/images/specific/trainingAcademy/Logo-2.png";
               } else {
                  // Change to the image source you want when scrolling up
                  imageElement.src = "/images/specific/trainingAcademy/White-Logo.png";
                  imageElement2.src = "/images/specific/trainingAcademy/White-Logo.png";
               }
         }
      });
   }
   return (
      <div className="">
         {/* <nav 
            className={" flex justify-between flex-wrap px-6 md:px-20 py-3 bg-cover  bg-no-repeat sm:bg-cover lg:h-20 xl:h-20 h-20 bg-right "} 
            style={{ backgroundImage: `url(${imageURL})`, backgroundSize: "100% 100%" }}> */}
         <nav
            className={pathname !== "/" ? "bg-cover  bg-no-repeat sm:bg-cover  bg-[image:var(--largeImage-url)]  flex justify-between  w-full  md:flex-wrap px-6 lg:px-20 lg:py-0 lg:h-24  xl:h-24 h-12 bg-blue-500  " : " fixed z-20  w-full  flex md:justify-between md:flex-wrap px-6 lg:px-20 lg:py-0 lg:h-28 xl:h-28 pt-5 h-20 bg-[image:var(--largeImage-url)] lg:bg-none menubar"}
            style={{
               '--largeImage-url': `url(${imageURL})`,
               backgroundSize: "100% 100%"
            }}
         >
            <div className="hidden md:hidden lg:block items-center h-20 md:h-16 flex-shrink-0 text-white mr-6 object-fit md:mt-7">
               <a href="/">
                  <img
                     id="navLogo"
                     src={props.inputData.logo}
                     className={props.inputData?.classForLogo}
                     alt="Logo"
                     draggable="false"
                  />
               </a>
            </div>
            <div className="block lg:hidden  items-center h-12  lg:h-14 flex-shrink-0 text-white mr-6 object-fit w-auto">
               <a href="/">
                  <img
                     id="navLogo1"
                     src={props.inputData.smallLogo}
                     className={props.inputData?.classForLogo}
                     alt="Logo"
                     draggable="false"
                  />
               </a>
            </div>

            {
               props?.inputData?.showLoginbutton && pathname.includes("/admin")
                  ?
                  userData
                     ?
                     (
                        <div className=" lg:block flex flex-wrap items-center md:order-2 px-8">
                           <button
                              onClick={() => setIsOpen1(!isOpen1)}
                              type="button"
                              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                              id="user-menu-button"
                              aria-expanded="false"
                              data-dropdown-toggle="user-dropdown"
                              data-dropdown-placement="bottom"
                           >
                              <img
                                 className="w-8 h-8 rounded-full"
                                 src="/images/generic/userProfile.webp"
                                 alt="user photo"
                                 draggable="false"
                              />
                           </button>

                           <div
                              className={`${isOpen1 ? "block" : "hidden"
                                 } z-50 absolute  top-32 right-4 `}
                              id="user-dropdown"
                           >
                              <div
                                 className="w-0 h-0 mx-auto"
                              // border-l-[20px] border-l-transparent
                              // border-b-[20px] border-b-white-500
                              // border-r-[20px] border-r-transparent"

                              // shadow-2xl shadow-black-500/50"
                              ></div>

                              <div className="w-60 p-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg  dark:bg-gray-700 border shadow-lg">
                                 <div className="flex flex-wrap">
                                    <div className=" mx-auto flex p-2 ">
                                       <img
                                          className="w-12 h-12 rounded-full mx-auto"
                                          src="/images/generic/userProfile.webp"
                                          alt="user photo"
                                          draggable="false"
                                       />
                                    </div>
                                    <div className=" px-1 py-3">
                                       <div className="block text-sm text-gray-900 dark:text-white">
                                          {userData.firstName}&nbsp;{userData.lastName}
                                       </div>

                                       <div className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                                          {userData.email}
                                       </div>
                                    </div>
                                 </div>
                                 <ul className="py-2" aria-labelledby="user-menu-button">
                                    <li>
                                       <button
                                          className="block mx-auto px-4 py-2 text-sm text-gray-300  bg-blue-600 hover:text-gray-100 hover:bg-blue-900 dark:hover:bg-blue-600 dark:text-gray-200 dark:hover:text-white"
                                          onClick={signOut}
                                       >
                                          Sign out
                                       </button>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     )
                     :
                     (
                        <div className=" lg:block flex flex-wrap items-center md:order-2 mx-2 ">
                           <button
                              onClick={loginPage}
                              className=" text-white bg-blue hover:bg-blue font-bold uppercase  focus:ring-4 focus:ring-blue-300 font-sm rounded text-smpx-5 py-2 px-5 dark:bg-blue-600 float-right dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                           >
                              LOGIN
                           </button>
                        </div>
                     )
                  :
                  null
            }
            {
               props.inputData.customButton
                  ?
                  <div className="flex flex-wrap items-center md:order-2 ">
                     <button
                        onClick={customUrl}
                        className={props.inputData.customButtonClass}
                     >
                        <img src={props.inputData.customButtonIcon} className="object-fit h-5" alt="img" draggable="false" />
                        <div className={props.inputData.customButtonTitleClass}>{props.inputData.customButtonTitle}</div>
                     </button>
                  </div>
                  :
                  null
            }
            {
               !pathname.includes("/admin")
                  ?
                  <>
                     <div className="  w-full  md:w-auto block  md:hidden  relative right-0 sm:right-12  ">
                        <button
                           id="btn-mob-menubar"
                           aria-label="mobileDropdownBtn"
                           onClick={() => setIsOpen(!isOpen)}
                           className="flex float-right items-center px-3 mt-3 lg:mt-6 pl-6 rounded text-white hover:text-white smMenu"
                        >
                           <svg
                              className={`fill-current h-4 w-4 ${isOpen ? "hidden" : "block"}`}
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                           </svg>
                           <i className={`fa fa-times text-white crossIcon ${isOpen ? "block" : "hidden"}`} aria-hidden="true"></i>
                           {/* <svg
                     className={`fill-current h-3 w-3 crossIcon ${isOpen ? "block" : "hidden"}`}
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                  </svg> */}
                        </button>
                     </div>
                     <div className="z-40 absolute right-12"><TopHeader />
                        <div className={`w-full block  flex-wrap md:flex md:items-right float-right
                           md:w-auto z-20 ${isOpen ? "block" : "hidden"}`}
                        >

                           <div className="text-sm md:flex md:flex-wrap h-8 md:my-4 lg:my-auto ">
                              {userData ? (
                                 <ul
                                    id="navBar"
                                    className="rounded-lg text-xs xxl:text-lg font-semibold flex flex-col p-4 md:p-0 mt-4 float-right  md:flex-row md:space-x-8 md:mt-0 text-black md:text-white bg-white md:bg-transparent shadow-xl md:shadow-none "
                                 >
                                    {
                                       menuItemsAfterLogin.map((data, index) => {
                                          return (
                                             <li key={"li-" + index}>
                                                <a
                                                   key={index}
                                                   href={data.link}
                                                   className="menuText text-black md:text-white text-sm font-bold "
                                                   aria-current="page"
                                                >
                                                   {data.label}
                                                </a>
                                             </li>
                                          );
                                       })
                                    }
                                 </ul>
                              ) : (
                                 <ul
                                    id="navBar"
                                    className=" text-xs xl:text-lg font-semibold flex flex-col p-4 md:p-0 mt-4  float-right  rounded-lg  md:flex-row md:space-x-8 md:mt-0 text-black lg:text-white bg-white lg:bg-transparent shadow-xl lg:shadow-none"
                                 >
                                    {menuItems.map((data, index) => {
                                       return (
                                          <li key={"id-" + index}>
                                             <a
                                                key={index}
                                                href={data.link}
                                                className="menuText text-black lg:text-white"
                                                aria-current="page"
                                             >
                                                {data.label}
                                             </a>
                                          </li>
                                       );
                                    })}
                                 </ul>
                              )}
                           </div>
                        </div>
                     </div>
                  </>
                  :
                  null
            }
         </nav>
      </div>
   );
}
export default MenuBar;
