"use client";
import React from "react";
import axios from "axios";
import DetailedBlogPage from "@/components/MyBlogs/DetailedBlogPage";
import CustomHead from "@/templates/CustomHead/CustomHead";

export default function BlogPage( props) {

    const blog_id=props.params.blogurl.split("-").pop();
    // console.log("props.params.blogurl ======",props.params.blogurl);
    // console.log("blog_id ======",blog_id);
    return (
        <div className="bg-white   border rounded-md">
            
            {/* PB added metatags */}
            {props.data && (
                <CustomHead
                title={props.data?props.data.metaTagTitle:""}
                description={props.data?props.data.metaDescription:""}
                keywords={props.data?props.data.keywords:""}
                canonicalUrl={props.data?props.data.canonicalUrl:""}
                />
            )}
            <DetailedBlogPage blogData={props.blogData} blog_id={blog_id} />
        </div>
    );
}

BlogPage.getInitialProps = async (ctx)=>{
    var blogUrl = encodeURIComponent(ctx.query.blogurl);
 
    console.log("blogUrl => |"+blogUrl+"|",ctx.query.blogurl);
    var url = "/blogs/"+blogUrl
    const encodedURL = encodeURIComponent(url);
    try {
        {/* PB added metatags */}
        const seoresponse = await axios.get('/api/seodetails/get/url/' + encodedURL);
        // console.log("seoresponse []",seoresponse)
            //    const res = await axios.get("/api/blogs2/get/"+blogUrl);
        // console.log("res []",res)
        var returnData = { 
            //   blogData : res?.data,
            blogUrl:blogUrl,
            data : seoresponse.data
        };
        return returnData;
    } catch (error) {
        console.error('Error fetching:', error.message);
        return { data: null };
    }
}
