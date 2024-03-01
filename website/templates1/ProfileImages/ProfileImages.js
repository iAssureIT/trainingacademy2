import React from "react";

const ProfileImages = (props) => {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 bg-white ">
      <div className="container px-5 py-20 mx-auto">
        {props?.inputData?.dash ?
          <div className="w-full mb-4">
            <ul className="place-content-center flex flex-wrap">
              <li className={"dash1 " + props.inputData.dash}></li>
              <li className={"dash2 " + props.inputData.dash}></li>
              <li className={"dash3 " + props.inputData.dash}></li>
            </ul>
          </div>
          :
          null
        }
        {
          props?.inputData?.pageTitle ?
            <h1 className={props?.inputData?.pageTitleCss ? props?.inputData?.pageTitleCss : "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"}
              dangerouslySetInnerHTML={{ __html: props?.inputData?.pageTitle }} >
            </h1>
            :
            null
        }
        {props?.inputData?.para ?
          <p className={props?.inputData?.paraCss}>{props?.inputData?.para}</p>
          :
          null}
        <div className="flex flex-wrap -m-4">
          {props?.inputData?.profiles?.map((profile, index) => {
            return (
              <div
                className="p-4 lg:w-1/4 xxl:w-1/4 md:w-1/4 w-1/4"
                key={index}
              >
                <div className="h-full flex flex-col items-center text-center rounded-lg bg-white shadow-lg">
                  <div className="w-full">
                    <img
                      alt="profile"
                      className=" w-full h-48 object-cover rounded-lg object-center mb-4"
                      src={profile.profileImage}
                    />
                  </div>
                  <div className="w-full">
                    <h2 className="title-font font-semibold text-lg text-gray-900">
                      {profile.name}
                    </h2>
                    <h3 className="text-gray-500 font-normal text-md mb-3">
                      {profile.role}
                    </h3>
                    {/* <span className="inline-flex">
                                            <a href="https://www.facebook.com/"   target="_blank">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-5 h-5 text-fbColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500"  href="https://twitter.com/"   target="_blank">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-5 h-5 text-twitterColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a className="ml-2 text-gray-500"  href="https://web.whatsapp.com/"   target="_blank">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-5 h-5 text-whatsappColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                            </span> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ProfileImages;
