"use client";
import React from "react";
import DetailedBlogPage from "@/components/MyBlogs/DetailedBlogPage";
export default function BlogPage( props) {

    const blog_id=props.params.blogurl.split("-").pop();
    // console.log("props.params.blogurl ======",props.params.blogurl);
    // console.log("blog_id ======",blog_id);
    return (
        <div className="bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  h-auto sm:mt-32 container mx-auto p-10 my-10 border rounded-md">
            <DetailedBlogPage blogData={props.blogData} blog_id={blog_id} />
        </div>
    );
}
