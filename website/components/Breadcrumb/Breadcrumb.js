import React from 'react'

const Breadcrumb = (props) => {
    return (
 
        <nav className=" px-5 py-2 w-auto inline-block rounded-lg text-white " aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <a href="/" className="inline-flex items-centertext-base md:text-xl lg:text-xl xl:text-xl text-white hover:cursor-default">
                        {/* <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                        </svg> */}
                        Home  .
                    </a>
                </li>
                {
                    props.url1 
                    ? 
                        <li>
                            <div className="flex items-center dddd">
                                {/* <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                </svg> */}
                                <a href={props.url1} className="-ml-3 text-sm font-medium  text-gray-700 hover:text-blue-600 ">{props.urlTitle1}</a>
                            </div>
                        </li>
                    :null    
                }
                <li aria-current="page">
                    <div className="flex items-center ff">
                        {/* <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg> */}
                        <span className="-ml-2 text-base md:text-xl lg:text-xl xl:text-xl hover:cursor-default  text-white ">{props.currentPage}</span>
                    </div>
                </li>
            </ol>
        </nav>
    )
}
export default Breadcrumb
