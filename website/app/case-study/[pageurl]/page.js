"use client";
import React from "react";
import CaseStudyViewPage from "@/components/CaseStudy/CaseStudyView.js";
export default function BlogPage( props) {

    const page_id=props.params.pageurl.split("-").pop();
    console.log("props.params.pageurl ======",props.params.pageurl);
    console.log("page_id ======",page_id);
    console.log("props",props)
    return (
        // <div className="bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  h-auto sm:mt-32 container mx-auto p-10 my-10 border rounded-md">
            <CaseStudyViewPage pageData={props.pageData} page_id={page_id} />
        // </div>
    );
}
