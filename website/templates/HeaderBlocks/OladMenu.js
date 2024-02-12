 <nav className="flex my-auto h-auto justify-between flex-wrap px-6 md:px-6 py-5 bg-skyBlue">
                
                <div className="block  items-center h-14 flex-shrink-0 text-white mr-6 object-fit">
                    <a href="/">
                        <img
                            src={props.inputData.smallLogo}
                            className={props.inputData?.classForLogo}
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className="block  lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                    >
                        <svg
                            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                        <svg
                            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                        </svg>
                    </button>
                </div>
                <div
                    className={`w-full block h-8 py-4 flex-wrap lg:flex lg:items-right float-right z-10
                        lg:w-auto ${isOpen ? "block" : "hidden"}`}
                >
                    <div className="text-sm lg:flex lg:flex-wrap h-8">

                        <ul id="navBar" className=" text-xs sm:text-lg xxl:text-lg font-semibold flex flex-col p-4 md:p-0 mt-4 border float-right border-gray-100 rounded-lg bg-white lg:bg-red-700 sm:bg-skyBlue md:bg-skyBlue lg:text-light md:flex-row md:space-x-8 md:mt-0 md:border-0 "
                        >
                            {props.inputData.menuItemsList.map((data, index) => {
                                return (
                                    <div >
                                        {
                                            data?.showSubMenu ?
                                                <details> 
                                                <summary>
                                                    <a
                                                    key={index}
                                                    href={data.link}
                                                    className="menuText"
                                                    aria-current="page"
                                                    id={data?.label} data-dropdown-toggle={data?.id}
                                                    onClick={handleDropDown}
                                                >
                                                    {data.label}
                                                </a>
                                                </summary>
                                                {console.log("data?.subMenu",data?.subMenu)}
                                              <ul className="p-5 rounded border  bg-gray-50" >
                                                
                                                    {data?.subMenu?.map((val,index)=>{
                                                        return(
                                                        
                                                                <li className="p-5 rounded   bg-gray-50" key={index}>
                                                                    <details>
                                                                        <summary>{val.submenutiltle}</summary>
                                                                        <div className={props?.inputData?.gridCss ? props?.inputData?.gridCss : "grid grid-cols-1 lg:grid-cols-2 gap-10"}>
                                                                            <div className=''>
                                                                                        {val?.NestedMenu?.map((data, index) => (
                                                                                            <div className={props.inputData?.repeatedBlkCss?props.inputData?.repeatedBlkCss:' my-10 flex shadow-xl sm:h-36 md:h-32 py-5'}>
                                                                                                <div className={props.inputData?.imgCss?props.inputData?.imgCss:' border-gray-500 px-5 md:px-6 my-auto '}>
                                                                                                    <img
                                                                                                        src={data.imageSrc}
                                                                                                        alt={`Image ${index}`}
                                                                                                        className=""
                                                                                                    />
                                                                                                </div>
                                                                                                <div className='text-left my-auto'>
                                                                                                    <h2 className={props?.inputData?.titleCss ? props?.inputData?.titleCss : "font-bold text-base sm:text-lg mb-2"}>
                                                                                                        {data?.title}
                                                                                                    </h2>
                                                                                                    {data?.description
                                                                                                    ?
                                                                                                    <h3 className={props?.inputData?.desCss ? props?.inputData?.desCss : "text-gray-700 text-xs sm:text-base overflow-hidden "}>
                                                                                                        {data?.description}
                                                                                                    </h3>
                                                                                                    :
                                                                                                    ""
                                                                                                    }
                                                                                                    {props?.readMore
                                                                                                    ?
                                                                                                    <div className={props?.inputData?.linkCss ? props?.inputData?.linkCss : 'float-right px-4'}><a className=' text-sky-800'>Read More<i className="fa-solid fa-angle-right"></i></a></div>
                                                                                                    :
                                                                                                    null
                                                                                                    }
                                                                                                    </div>
                                                                    
                                                                                            </div>
                                                                                        )
                                                                                        )
                                                                                        }
                                                                            </div>
                                                                            <div className="w-full h-auto relative my-auto">
                                                                                <img
                                                                                    src={val?.bigImg}
                                                                                    alt="Big Image"
                                                                                    className={props?.inputData?.bgImageCss ? props?.inputData?.bgImageCss : "w-full h-auto object-cover "}
                                                                                />
                                                                            </div> 
                                                                        </div>                                                                       
                                                                    </details>
                                                                </li>
                                                        )
                                                    })
                                                     
                                                    } 
                                                </ul>



                                                </details>
                                    
                                                :
                                                <li>
                                                    <a
                                                        key={index}
                                                        href={data.link}
                                                        className="menuText"
                                                        aria-current="page"
                                                    >
                                                        {data.label}
                                                    </a>
                                                </li>
                                        }</div>

                                );
                            })}

                        </ul>

                    </div>
                </div>
            </nav>