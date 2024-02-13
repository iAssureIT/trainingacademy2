"use client";
import React, { useState, useEffect, useRef } from "react";

function MenuBar2(props) {

	const [isMenuOpen, setMenuOpen] = useState(false);
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const [isDoubleDropdownOpen, setDoubleDropdownOpen] = useState(false);

	const [isOpen, setIsOpen] = useState(false);

	const [currentLink, setCurrentLink] = useState();

	const handleAccordionToggle = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};
	const menuRef = useRef();
	useEffect(() => {
		setCurrentLink('/' + window.location.pathname.split("/")[1]);
		// const menuItems=document.getElementsByClassName("mainMenu");
		// for (var i = 0; i < menuItems.length; i++) {
		// menuItems[i].addEventListener("click", (e)=> {
		// console.log(e.target.id)
		// var current = document.getElementsByClassName("MainMenuActive");
		// current[0].className = current[0].className.replace(" MainMenuActive", "");
		// this.className += " MainMenuActive";
		// });
		// }

		// console.log("menuItems",menuItems)
		// console.log(window.location)
		if (window.location.pathname === '/') {
			menuRef.current.classList.add('bg-black');
			menuRef.current.classList.add('bg-opacity-20');

		}
		if (window.location.pathname.includes('/blogs/')) {
			menuRef.current.classList.remove('absolute');
			menuRef.current.classList.add('bg-slate-700');
			// menuRef.current.classList.add('bg-opacity-20');
		}
		const button = document.getElementById('navbar-toggle');
		const menu = document.getElementById('navbar-dropdown');

		const dropdownButton = document.getElementById('dropdownNavbarLink');
		const dropdownMenu = document.getElementById('dropdownNavbar');

		dropdownButton.addEventListener('click', (e) => {
			if (!e.disabled) {
				e.disabled = true;
				dropdownMenu.classList.toggle('hidden');
				setTimeout(function () {
					e.disabled = false;
				}, 500);
			}
		});

		var doubleDropdownButton1 = document.getElementsByClassName("doubleDropdownButton");
		const doubleDropdown = document.getElementById('doubleDropdown');


		for (var i = 0; i < doubleDropdownButton1.length; i++) {
			doubleDropdownButton1[i].addEventListener('click', (e) => {
				if (!e.disabled) {
					e.disabled = true;
					let id = e.target.getAttribute('data-parent');
					let doubleDropdown = document.getElementById('doubleDropdown' + id);
					var divsToHide = document.getElementsByClassName("dd");
					var display = doubleDropdown.style.display;
					for (var i = 0; i < divsToHide.length; i++) {
						divsToHide[i].style.display = "none"; // depending on what you're doing
						document.getElementById(i + 1).classList.remove("activeMenu");
					}

					var iconToRotate = document.getElementsByClassName('svgImg');
					for (var i = 0; i < iconToRotate.length; i++) {
						iconToRotate[i].classList.remove("-rotate-90"); // depending on what you're doing
					}
					var targetDiv = document.getElementById(id).getElementsByClassName("svgImg")[0];;
					if (display == 'block') {
						doubleDropdown.style.display = "none";
					} else {
						doubleDropdown.style.display = "block";
						targetDiv.classList.add("-rotate-90");
						document.getElementById(id).classList.add("activeMenu")
					}

					var iconToRotate = document.getElementsByClassName('menu-img');
					for (var i = 0; i < iconToRotate.length; i++) {
						iconToRotate[i].classList.remove("activeMenuImg");
					}
					document.getElementById('menu-img-' + id).classList.add("activeMenuImg");

					setTimeout(function () {
						e.disabled = false;
					}, 500);
				}
			});
		}

		button.addEventListener('click', function (e) {
			if (!e.disabled) {
				e.disabled = true;
				menu.classList.toggle('hidden');
				setTimeout(function () {
					e.disabled = false;
				}, 500);
			}
		});

		// Code for submenu set active class
		var links = document.getElementsByTagName('a'), hrefs = [];
		for (var i = 0; i < links.length; i++) {
			if (window.location.href == links[i].href) {
				var pId = links[i].parentNode.getAttribute('servicepage_id');
				// console.log("pID", pId)
				if (!isNaN(pId) && pId != null) {
					//var targetDiv = document.getElementById(pId).getElementsByClassName("svgImg")[0];;
					let doubleDropdown = document.getElementById('doubleDropdown' + pId);
					doubleDropdown.style.display = "none";
					document.getElementById(pId).click();
					links[i].parentNode.classList.add("activeSubMenu")
					// targetDiv.classList.add("-rotate-90");
					// document.getElementById(pId).classList.add("activeMenu")
				}
			}
		}
		// Code en dfor submenu set active class

		var l = window.location.href;
		if (l.indexOf('services') < 0) {
			let doubleDropdown = document.getElementById('doubleDropdown1');
			doubleDropdown.style.display = "none";
			document.getElementById('1').click();
		}

		// Clean up event listeners when the component unmounts
		return () => {
			dropdownButton.removeEventListener('click', () => {
				dropdownMenu.classList.toggle('hidden');
			});

			// doubleDropdownButton.removeEventListener('click', () => {
			// doubleDropdown.classList.toggle('hidden');
			// });

			button.removeEventListener('click', function () {
				menu.classList.toggle('hidden');
			});
		};
	}, []);

	if (typeof window !== 'undefined') {
		var nav1 = document.querySelector(".navBar1");
		var menuItemElements = document.querySelectorAll(".menuItemC");
		var dropdownNav = document.querySelector("#dropdownNavbarLink");
		var topHeadElements = document.querySelectorAll(".topHead")
		var imageElement = document.querySelector("#navLogo");
		var triangleElement = document.querySelector("#triangle");
		console.log("nav1", nav1);
		window.addEventListener('scroll', () => {
			// var shouldAddClass = window.scrollY > nav1.clientHeight;
			var shouldAddClass = window.scrollY;
			nav1.classList.toggle("bg-white", shouldAddClass);
			nav1.classList.toggle("bg-transparent", !shouldAddClass);

			dropdownNav.classList.toggle("md:text-darkGray", shouldAddClass);
			dropdownNav.classList.toggle("md:text-white", !shouldAddClass);

			triangleElement.classList.toggle("border-b-gray-400", shouldAddClass);
			triangleElement.classList.toggle("border-b-white", !shouldAddClass);

			menuItemElements.forEach((menuItem) => {
				menuItem.classList.toggle("md:!text-darkGray", shouldAddClass);
			});

			topHeadElements.forEach((menuItem) => {
				menuItem.classList.toggle("md:!text-darkGray", shouldAddClass);
			});
			if (shouldAddClass) {
				// Change to the image source you want when scrolling down
				imageElement.src = "/images/specific/iAssureIT_Logo/iAssureIT_Logo.png";
			} else {
				// Change to the image source you want when scrolling up
				imageElement.src = "/images/specific/iAssureIT_Logo/iAssureIT_White_Logo.webp";
			}
			if (shouldAddClass) {
				nav1.classList.add("shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]");
			} else {
				nav1.classList.remove("shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]");
			}
		});
	}
	// const [isOpen, setIsOpen] = useState(false);

	// const [isOpen2, setIsOpen2] = useState(false);
	// const [isOpen1, setOpen] = useState(false);
	// const [isMenuOpen1, setIsMenuOpen1] = useState(false);
	// const handleDropDown = () => {
	// setOpen(!isOpen1);
	// };
	// const [menuItems, setmenuItems] = useState([]);
	// const [menuItemsAfterLogin, setmenuItemsAfterLogin] = useState([]);
	// const [userData, setUserData] = useState("");
	// const pathname = usePathname();

	// useEffect(() => {
	// setmenuItems(props.menuItemsList);
	// setmenuItemsAfterLogin(props.menuItemsAfterLoginList);
	// const userDetails = localStorage.getItem("userDetails");
	// if (userDetails) {
	// const userDetailsParse = JSON.parse(userDetails);
	// const parseUser_id = userDetailsParse.user_id;
	// setUserData(userDetailsParse);
	// }
	// // console.log("pathname",pathname);

	// }, []);


	return (
		<>
			<div id={"Menubar"} ref={menuRef} className=" fixed z-10 w-full ">
				<nav className="navBar1 bg-transparent border-gray-200 dark:bg-gray-900 dark:border-gray-700 ">
					<div className={props?.inputData?.navCss ? props?.inputData?.navCss : "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"}>
						<a className={props?.inputData?.classForLogoLink} href="/">
							<img
								id="navLogo"
								src={props.inputData.smallLogo}
								className={props.inputData?.classForLogo + " lazyload"}
								alt="Logo"

							/>
						</a>
						<button id="navbar-toggle" data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
							<span className="sr-only">Open main menu</span>
							<svg className="w-5 h-5 mt-[6px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
							</svg>
						</button>
						<div className="lg:grid lg:grid-cols-1 w-full md:w-auto">
							<ul className="px-1 py-3 hidden md:flex lg:flex xl:flex space-x-5 justify-end text-sm font-semibold ">
								<li className="topHead text-white text-md font-normal ">
									<i className="fa fa-phone mr-1 " aria-hidden="true"></i>
									+91 8459748828
								</li>
								<li className="topHead text-white text-md font-normal ">
									<i className="fa-regular fa-envelope mr-1"></i>
									<a href="https://mail.google.com/">
										info@iassureit.com
									</a>
								</li>
							</ul>
							<div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
								<ul className="flex flex-col font-medium md:py-4 md:p-0 mt-4 border border-gray-100 md:rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 text-black md:text-white dark:bg-gray-800 bg-white md:bg-transparent md:dark:bg-gray-900 dark:border-gray-700">

									{
										props.inputData.menuItemsList.map((data, index) => {
											//const link = '/' + window.location.pathname.split("/")[1];

											return (
												// <div >
												// {
												data?.showSubMenu ?
													<li key={index} >
														{
															currentLink == data.link
																?
																<button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="mainMenuActive  relative flex items-center justify-between w-full py-2 pl-3 pr-4 text-sm md:text-lg font-bold text-gray-700 md:text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
																	{data.label}
																	<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
																		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
																	</svg>
																</button>
																:
																<button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex relative items-center justify-between w-full py-2 pl-3 pr-4 text-sm md:text-lg font-bold text-gray-700 md:text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
																	{data.label}
																	<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
																		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
																	</svg>
																</button>
														}

														{/* <!-- Dropdown menu --> */}

														<div id="dropdownNavbar" className="absolute z-10 md:left-0 w-auto xs:w-44 sm:w-32 md:w-full lg:w-full hidden font-normal md:mt-7 bg-white divide-y text-lg divide-gray-100 md:rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:bg-gray-700 dark:divide-gray-600">
															<div className=" hidden md:block w-full absolute right-[19rem] 2xl:right-[22rem] -top-5">
																<div id="triangle" className="float-right  w-0 h-0 border-l-[15px] border-l-transparent border-b-[20px] border-b-white border-r-[15px] border-r-transparent">
																</div>
															</div>
															<div className="w-0 h-0 border-l-[50px] border-l-transparent border-t-[75px] border-t-red-500 border-r-[50px] border-r-transparent">
															</div> <ul className="py-4 text-sm text-gray-700 dark:text-gray-400 w-[280px] sm:w-44 md:w-52 lg:w-44 " >

																{data?.subMenu?.map((val, index) => {
																	return (
																		// <li>
																		// <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{val.submenutitle}</a>
																		// </li>

																		<li key={index} className="w-full sm:w-32 md:w-full lg:w-32" >
																			<button id={val.id} data-parent={val.id} data-dropdown-placement="right-start" type="button" className=" flex flex-row lg:text-[14px] w-full md:w-full lg:w-80 2xl:w-[26rem] md:my-2 text-left font-bold text-sm py-2 items-center justify-between md:justify-start px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white doubleDropdownButton">
																				<div data-parent={val.id} className=" bg-gray-200 rounded mr-4">
																					<img id={'menu-img-' + val.id} data-parent={val.id} src={val.img} className='menu-img' />
																				</div>
																				<div data-parent={val.id} >{val.submenutitle}</div>
																				<div data-parent={val.id} className="ml-auto">
																					<svg data-parent={val.id} className="w-2.5 float-right h-2.5 ml-2.5 mt-[8px] svgImg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
																						<path data-parent={val.id} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
																					</svg>
																				</div>
																			</button>

																			<div id={"doubleDropdown" + val.id} className="z-10 absolute hidden md:top-5 -left-44 sm:-left-32 md:left-10 lg:left-40 2xl:left-72 w-full px-2 sm:w-[30rem] md:w-[34rem] lg:w-[45rem] xl:w-3/4 xxl:w-4/5 bg-white divide-y divide-gray-100 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:bg-gray-700 transform translate-x-44 dd ">
																				<div className={props?.inputData?.gridCss ? props?.inputData?.gridCss : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"}>
																					<ul className="py-2 md:py-0 text-sm text-gray-700 dark:text-gray-200 lg:col-span-2 xl:col-span-2 xxl:!col-span-1">
																						{val?.NestedMenu?.map((data, ind) => {
																							return (
																								<li key={ind}>
																									{/* <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">{data.title}</a> */}
																									<div className={props.inputData?.repeatedBlkCss ? props.inputData?.repeatedBlkCss : ' my-10 flex shadow-xl sm:h-36 md:h-32 py-5'}>
																										<div className={props.inputData?.imgCss ? props.inputData?.imgCss : ' border-gray-500 px-5 md:px-6 my-auto '}>
																											<img
																												src={data.imageSrc}
																												alt={`Image ${index}`}
																												className="lazyload"

																											/>
																										</div>
																										<div className='text-left my-auto w-full'>
																											<div servicepage_id={val.id} className={props?.inputData?.titleCss ? props?.inputData?.titleCss : "font-bold text-base sm:text-lg mb-2"}>
																												<a href={data?.link} className="" > {data?.title}</a>
																											</div>
																											<ul className=" w-full md:grid md:grid-cols-2 list-disc hidden md:block ">{
																												data?.subTypes?.map((subType, index) => {
																													return (
																														<li key={index} className=" w-full mx-5">{subType}</li>
																													)
																												})
																											}</ul>
																											{data?.description ?
																												<h3 className={props?.inputData?.desCss ? props?.inputData?.desCss : "text-gray-700 text-xs sm:text-base overflow-hidden "}>
																													{data?.description}
																												</h3>
																												:
																												null
																											}

																										</div>
																									</div>
																								</li>
																							)
																						})}

																					</ul>
																					<div className="w-full h-auto relative my-auto hidden lg:block">
																						<img
																							src={val?.bigImg}
																							alt="Big Image"
																							className={props?.inputData?.bgImageCss ? props?.inputData?.bgImageCss + " lazyload" : "w-full h-auto object-cover lazyload "}

																						/>
																					</div>
																				</div>
																			</div>

																		</li>
																	)
																})
																}
															</ul>

														</div>
													</li>
													:

													<li key={index} title={data?.title} >
														{

															currentLink == data.link
																?
																<a href={data.link} className=" menuItemC mainMenuActive block py-2 pl-3 pr-4 text-black md:text-white text-sm md:text-lg rounded md:bg-transparent font-bold md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">{data.label}</a>
																:
																<a href={data.link} className=" menuItemC block py-2 pl-3 pr-4 text-black md:text-white text-sm md:text-lg rounded md:bg-transparent font-bold md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">{data.label}</a>

														}
													</li>
												// }
												// </div>

											)
										})
									}
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
}
export default MenuBar2;