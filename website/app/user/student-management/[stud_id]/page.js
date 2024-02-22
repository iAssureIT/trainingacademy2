"use client";
import React from "react";
import axios from "axios";
import UpdateStudent from "@/components/StudentManagement/updateStudent";
export default function EditStudent( props) {

    const stud_id=props.params.stud_id.split("-").pop();
    console.log("props.params.job_id ======",props.params.job_id);
    console.log("blog_id ======",stud_id);
    return (
        <div className="bg-white border rounded-md">
            <UpdateStudent  stud_id={stud_id} />
        </div>
    );
}