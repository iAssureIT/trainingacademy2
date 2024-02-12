
import React from 'react'

const Search = props => {
    return (
        <section id={"Search"} className=''>
            {props?.inputData?.dash ?
                <div className="w-full mb-0 md:mb-4">
                    <ul className="place-content-center flex flex-wrap">
                        <li className={"dash1 " + props?.inputData?.dash}></li>
                        <li className={"dash2 " + props?.inputData?.dash}></li>
                        <li className={"dash3 " + props?.inputData?.dash}></li>
                    </ul>
                </div>
                :
                null
            }
            {
                props?.inputData?.blockTitle
                    ?
                    <h2 className={props?.inputData?.classForblockTitle ? props?.inputData?.classForblockTitle : 'blockTitle '}
                        dangerouslySetInnerHTML={{
                            __html: props?.inputData?.blockTitle,
                        }}
                    >
                    </h2>
                    :
                    null
            }
            {
                props?.inputData?.blockContent
                    ?
                    <div className={props?.inputData?.classForblockContent ? props?.inputData?.classForblockContent : 'content-wrapper'}
                        dangerouslySetInnerHTML={{
                            __html: props?.inputData?.blockContent,
                        }}>
                    </div>
                    :
                    null
            }

            <div class=" mt-5 mb-16">
                <div class="relative mb-4 flex flex-wrap items-stretch px-4 md:px-4 w-full md:w-1/2 lg:w-2/5 xl:w-2/5 2xl:w-1/3 xxl:!w-1/4 mx-auto ">
                    <input
                        type="search"
                        class="relative block flex-auto rounded-l border border-solid bg-transparent px-3 py-2 text-base font-normal leading-[1.6] text-neutral-700 transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary border-gray-500"
                        placeholder="Search for jobs by skill or keyword"
                        aria-label="Search"
                        aria-describedby="button-addon1" />
                    <button
                        class="relative z-[2] flex items-center md:text-[1.2rem] rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg bg-blue-700"
                        type="button"
                        id="button-addon1"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        <i className='fa fa-search '></i>
                    </button>
                </div>
            </div>

        </section>
    )
}

export default Search

