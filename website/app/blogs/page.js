import React from "react";
import axios from "axios";
import MyBlogList from "@/components/MyBlogs/MyBlogList";
import BgImgLeftContentRtImg from "@/templates/ContentBlocks/BgImgLeftContent/BgImgLeftContentRtImg";
import CustomHead from "@/templates/CustomHead/CustomHead";

const content_leftContentBgImg = {
  id: "FastTrack_Framework",
  bgImage: "/images/specific/Blog/iAssureIT-blogs-background.webp",
  smallBGImage: "/images/specific/Blog/iAssureIT-blogs-background-responsive.webp",
  logo: "",
  h1Txt: "BLOGS",
  h1TxtCss: " mt-20 mb-20 md:mt-0 md:mb-0 text-5xl md:text-4xl xl:text-7xl 2xl:text-8xl font-extrabold text-center md:text-left content-center  place-content-left  justify-center content-left ",
  bgImgCss:"  py-32 md:py-10  2xl:py-20 xl:h-auto lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
  // bgImgCss: "h-screen lazyload object-fit bg-cover bg-no-repeat relative  lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)] ",
  gridCss: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  md:grid-cols-2     3xl:h-auto px-2 md:px-1 lg:px-20 2xl:px-32  md:py-20 md:py-auto xl:py-24",
  gridSubDivCss: " my-auto text-white  md:pl-6 md:pl-16 lg:pl-20 xl:pl-24 xxl:pl-40",
  image: "/images/specific/Blog/iAssureIT-blogs-image.webp",
  imageCss: ' order-first md:order-last w-3/4 md:w-auto mx-auto my-auto object-fit lazyload place-content-bottom object-bottom ' ,
  imgTagcss:"lazyload      ",
  borderColor: "border-darkBlue",
  }
  const content_blogList={
    mainCss:"main p-5 lg:px-20 xl:px-32 2xl:px-52 bg-white"
  }
const BlogsPage = ({data}) => {
  return (
    <div className="">
      {/* PB added metaData */}
      <CustomHead
        title={data?data.metaTagTitle:""}
        description={data?data.metaDescription:""}
        keywords={data?data.keywords:""}
        canonicalUrl={data?data.canonicalUrl:""}
      />
      <BgImgLeftContentRtImg inputData={content_leftContentBgImg} />
      <MyBlogList mainTitle="" inputData={content_blogList} />
    </div>
  );
};

//PB added metaData
BlogsPage.getInitialProps = async () => {
  // Perform data fetching here (e.g., making API requests)
  var url ='/blogs'
  const encodedURL = encodeURIComponent(url);

  try {
    const response = await axios.get('/api/seodetails/get/url/' + encodedURL);
    const data = response.data; // Access the response data directly
    return { data };
  } catch (error) {
    console.error("Error fetching:", error.message);
    return { data: null, error: error.message }; // Handle the error gracefully
  }
};
export default BlogsPage;
