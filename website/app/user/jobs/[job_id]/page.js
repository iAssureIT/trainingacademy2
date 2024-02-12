"use client";
import React from "react";
import axios from "axios";
import UpdateJob from "@/components/Job/updateJob";
export default function EditJob( props) {

    const job_id=props.params.job_id.split("-").pop();
    console.log("props.params.job_id ======",props.params.job_id);
    console.log("blog_id ======",job_id);
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
            <UpdateJob  job_id={job_id} />
        </div>
    );
}

EditJob.getInitialProps = async (ctx)=>{
    var job_id = encodeURIComponent(ctx.query.blogurl);
 
    // console.log("job_id => |"+job_id+"|",ctx.query.job_id);
    var url = "/jobs/"+job_id
    const encodedURL = encodeURIComponent(url);
    try {
        const seoresponse = await axios.get('/api/seodetails/get/url/' + encodedURL);
       var returnData = { 
        job_id:job_id,
            data : seoresponse.data
        };
        return returnData;
    } catch (error) {
        console.error('Error fetching:', error.message);
        return { data: null };
    }
}
