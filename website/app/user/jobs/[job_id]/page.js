"use client";
import React from "react";
import axios from "axios";
import UpdateJob from "@/components/Job/updateJob";
export default function EditJob( props) {

    const job_id=props.params.job_id.split("-").pop();
    console.log("props.params.job_id ======",props.params.job_id);
    console.log("blog_id ======",job_id);
    return (
        <div className="bg-white border rounded-md">
            <UpdateJob  job_id={job_id} />
        </div>
    );
}