import React from "react";
//import ResetPassword from "@/templates/SystemSecurity/ResetPassword";
import FormBgimage from "@/components/ImageSection/FormBgimage";
import ResetPassword from "@/widgets/SystemSecurity/ResetPassword";
const page = () => {
  return (
    <div className=" flex bg-white pt-24">
      <FormBgimage image="/images/generic/Sign_Up_image.jpg" />
      <ResetPassword
        logo="/images/Logo.jpg"
        style="sm:w-3/4 md:w-1/2 xl:w-2/3 bg-white-100 px-5 shadow-xl border rounded-lg mx-auto my-10 py-10 xxl:py-20"
        bgColor="bg-white"
      />
    </div>
  );
};

export default page;
