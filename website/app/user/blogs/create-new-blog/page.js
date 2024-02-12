"use client";
import React from "react";
import CreateBlog from "@/components/MyBlogs/CreateBlog";
import ComingSoon from "@/components/ComingSoon/ComingSoon";
const page = () => {
  return (
    <div className=" py-8 xl:py-5  bg-white">
      <CreateBlog />
      {/* <ComingSoon image="/images/generic/coming-soon2.gif" /> */}
    </div>
  );
};

export default page;
