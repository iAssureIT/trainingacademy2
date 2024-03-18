"use client";
import React from "react";
import axios from "axios";
import StudEnrollmentList from "@/components/StudentEnrollment/EnrollmentList";
import CustomHead from "@/templates/CustomHead/CustomHead";

const StudEnrollList = ({ data }) => {
    return (
        <main className="flex flex-col justify-between min-h-screen bg-white font-TerminaTest">
            {/* PB added metaData */}
            <CustomHead
                title={data ? data.metaTagTitle : ""}
                description={data ? data.metaDescription : ""}
                keywords={data ? data.keywords : ""}
                canonicalUrl={data ? data.canonicalUrl : ""}
            />
            <StudEnrollmentList />
        </main>
    )

}
StudEnrollList.getInitialProps = async () => {
    // Perform data fetching here (e.g., making API requests)
    var url = '/stude-enrollment-list'
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
export default StudEnrollList;