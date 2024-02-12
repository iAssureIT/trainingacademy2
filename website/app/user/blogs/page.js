import React from "react";
import MyBlogList from "@/components/MyBlogs/MyBlogList";
import SmallBanner from "@/templates/BannerBlocks/SmallBanner/SmallBanner.js";

const content_SmallBanner_1 = {
  //currentPage: "Blogs",
  bgImage: "/images/specific/about_us/banner.webp",
  smallBGImage: "/images/specific/about_us/banner.webp",
  className: "h-full w-full",
  title: "Blogs",
  titleClass:
    " my-auto mx-auto text-white w-full text-center font-bold text-xl md:text-3xl lg:text-7xl xl:text-7xl xl:py-5 py-5 ",
  subHeadingCss:
    " text-white w-full text-center  text-xl md:text-xl lg:text-xl xl:text-xl xl:py-2 py-2 ",
  btnClass: "mx-auto",
};
const content_blogList={
  mainCss:"main p-5 lg:px-20 xl:px-32 2xl:px-52 bg-white"
}
const page = () => {
  return (
    <div className="">
      <SmallBanner inputData={content_SmallBanner_1} />
      <MyBlogList mainTitle=""  inputData={content_blogList}/>
    </div>
  );
};

export default page;
