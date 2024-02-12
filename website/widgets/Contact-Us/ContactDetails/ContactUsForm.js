"use client";

import React, { Component } from "react";
import axios from "axios";
import Image from "next/image";
import swal from "sweetalert2";

export default class ContactUsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            subject: "",
            message: "",
            mobile: "",
            subject: ""
        };
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,


        }, () => {
            console.log("this.refs.name.value,0", this.state.fullName);
        })
    }
    validateForm = () => {
        var status = true;
        var regSpaceName = /[a-zA-Z_]+$/;
        var tempEmail = this.state.email.trim(); // value of field with whitespace trimmed off
        var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
        var illegalChars = /[()<>,;:\\"[\]]/;
        var phoneno = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;

        if (this.state.fullName.length <= 0) {
            document.getElementById("nameError1").innerHTML =
                "Please enter your Name";
            status = false;
        }
        if (!this.state.fullName.match(regSpaceName)) {
            document.getElementById("nameError1").innerHTML =
                "Please enter correct Name ";
            status = false;
        }
        if (!this.state.mobile.match(phoneno)) {
            document.getElementById("mobileError1").innerHTML =
                "Please enter valid Mobile Number";
            status = false;
        }
        if (this.state.email.length <= 0) {
            document.getElementById("emailError1").innerHTML =
                "Please enter your Email";
            status = false;
        } else if (!emailFilter.test(tempEmail)) {
            //test email for illegal characters
            document.getElementById("emailError1").innerHTML =
                "Please enter a valid email address.";
            status = false;
        } else if (this.state.email.match(illegalChars)) {
            document.getElementById("emailError1").innerHTML =
                "Email contains invalid characters.";
            status = false;
        }

        return status;
    };
    Submit(event) {
        event.preventDefault();
        // var adminEmail = this.getAdminEmail(); // Get email id from company settings. Write API for that.
        var adminEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
        
        if (this.validateForm()) {
            // console.log("in submit===>");
            this.setState({ btnLoading: true });
            const formValues1 = {
                toEmail: this.state.email,
                subject: "Your enquiry submitted to  website Admin.",
                text: this.state.message,
                mail:
                    "Dear " +
                    this.state.fullName +
                    ", <br/><br/>" +
                    "<b>Your Email: </b>" +
                    this.state.email +
                    "<br/><br/>" +
                    "Your following message has been successfully delivered to the admin! We will get back to you shortly. <br/> <br/> " +
                    "===============================  <br/> <br/> " +
                    "<pre> " +
                    this.state.message +
                    "</pre>" +
                    " <br/> <br/> =============================== " +
                    "<br/><br/> Thank You, <br/> Support Team, <br/> iAssureIT website Admin.",
            };
            console.log("notification", formValues1);
            axios
                .post("/send-email", formValues1)
                .then((res) => {
                    if (res.status === 200) {
                        swal.fire({
                            html: "<span className='mt-5'><span>Thank you for contacting us.<span></br><span>We will get back to you shortly.</span></span>",
                            showCloseButton: true,
                        });
                       
                        this.setState({
                            fullName: "",
                            email: "",
                            message: "",
                            mobile: "",
                            subject: "",
                        });
                    }
                })
                .catch((error) => {
                    console.log("error = ", error);
                });
            const formValues2 = {
                toEmail: adminEmail,
                subject: "Inquiry from Contact Us Page",
                text: this.state.message,
                mail:
                    "Dear Admin, <br/>" +
                    "Following new inquiry came from website contact form! <br/> <br/> " +
                    "============================  <br/> <br/> " +
                    "<b>Name: </b>" +
                    this.state.fullName +
                    "<br/>" +
                    "<b>Email: </b>" +
                    this.state.email +
                    "<br/>" +
                    "<b>Phone: </b>" +
                    this.state.mobile +
                    "<br/><br/>" +
                    "<pre> " +
                    this.state.message +
                    "</pre>" +
                    "<br/> ============================ " +
                    "<br/><br/> This is a system generated email! ",
            };
            // console.log("notification", formValues2);
            axios
                .post("/send-email", formValues2)
                .then((res) => {
                    if (res.status === 200) {
                        console.log("Mail Sent TO ADMIN successfully!");
                        swal.fire({
                            html: "<span className='mt-5 p-5'><span>Thank you for contacting us.<span></br><span>We will get back to you shortly.</span></span>",
                            showCloseButton: true,
                        });
                        
                        this.setState({
                            btnLoading: false,
                            fullName: "",
                            email: "",
                            Subject: "",
                            message: "",
                            mobile: "",
                        });
                    }
                })
                .catch((error) => {
                    console.log("error = ", error);
                });
        }
    }

    render() {
        return (
            <section id="contactUsForm" className={this.props?.inputData?.sectionCss ? this.props?.inputData?.sectionCss : "lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]"}
                // style={{ backgroundImage: `url(${this.props.inputData.bgImage})`, backgroundSize: "100% 100%" }}
                style={{
                    '--largeImage-url': `url(${this.props.inputData.bgImage})`,
                    // '--smallImage-url': `url(${this.props.inputData.smallBGImage ? this.props.inputData.smallBGImage  : ""})`,
                    'backgroundSize': "100% 100%"
                }} >
                {/* <div className="hidden xl:block absolute">
                    <img src="/images/specific/Contact_Us/Contact_Us_Form_Bg/6.webp" className="" alt="Form Image1"/>
                </div>
                <div className=" hidden lg:block absolute -top-32 left-[60px] lg:-left-[50px] xl:left-[60px] 2xl:left-[120px] ">
                    <img src="/images/specific/Contact_Us/Contact_Us_Form_Bg/11.webp" className=" " alt="Form Image1"/>
                </div>
                <div className=" hidden lg:block absolute bottom-0  left-[3px] xl:left-[112px] 2xl:left-[172px]">
                    <img src="/images/specific/Contact_Us/Contact_Us_Form_Bg/9.webp" className=" " alt="Form Image1"/>
                </div>
                <div className=" hidden xl:block absolute -top-[140px] 2xl:-top-[144px] left-72 2xl:left-[357px] ">
                    <img src="/images/specific/Contact_Us/Contact_Us_Form_Bg/12.webp" className=" " alt="Form Image1"/>
                </div>
                <div className=" hidden lg:block absolute -top-[90px] lg:left-60 xl:left-80 2xl:left-[500px] ">
                    <img src="/images/specific/Contact_Us/Contact_Us_Form_Bg/10.webp" className=" " alt="Form Image1"/>
                </div>
                <div className=" hidden lg:block absolute -top-[100px] lg:right-32 xl:right-64 2xl:-top-[100px]  2xl:right-80">
                    <img src="/images/specific/Contact_Us/Contact_Us_Form_Bg/8.webp" className=" w-36 h-40" alt="Form Image1"/>
                </div>
                <div className=" hidden lg:block absolute  bottom-0 lg:-bottom-4 2xl:top-[48px] lg:-left-5 xl:left-[63px]  2xl:left-[123px]">
                    <img src="/images/specific/Contact_Us/Contact_Us_Form_Bg/7.webp" className="lg:h-96 xl:h-auto " alt="Form Image1"/>
                </div>
                <div className=" hidden lg:block absolute lg:-top-[110px] xl:-top-[80px] lg:right-0 xl:right-24 2xl:-top-[90px]  2xl:right-40">
                    <img src="/images/specific/Contact_Us/Contact_Us_Form_Bg/5.webp" className=" " alt="Form Image1"/>
                </div>
                <div className=" hidden lg:block absolute bottom-0  lg:-right-20 xl:right-6 2xl:right-[85px]">
                    <img src="/images/specific/Contact_Us/Contact_Us_Form_Bg/3.webp" className=" " alt="Form Image1"/>
                </div>
                <div className=" hidden lg:block absolute -bottom-4 z-10 lg:-right-12 xl:right-16 2xl:right-28">
                    <img src="/images/specific/Contact_Us/Contact_Us_Form_Bg/2.webp" className=" " alt="Form Image1"/>
                </div>
                <div className=" hidden lg:block absolute -bottom-16 lg:right-32  xl:right-64     2xl:right-96 ">
                    <img src="/images/specific/Contact_Us/Contact_Us_Form_Bg/4.webp" className=" " alt="Form Image1"/>
                </div> */}
                <div className="pt-0 md:pt-32 md:pb-32 lg:pt-32 lg:pb-32 z-0"
                // className={
                //     this.props?.inputData?.bgImgCss
                //         ?
                //         this.props?.inputData?.bgImgCss
                //         :
                //         "relative bg-cover p-12 block  shadow-lg  bg-no-repeat  max-w-full  sm:bg-cover bg-center lazyload lg:bg-[image:var(--largeImage-url)]  bg-[image:var(--smallImage-url)]"
                // }
                // style={{
                //     '--largeImage-url': `url(${largeImageURL})`,
                //     '--smallImage-url': `url(${smallImageURL ? smallImageURL : largeImageURL})`,
                //     'backgroundSize': "100% 100%"
                // }}

                >
                    <div className={this.props?.inputData?.formcss ? this.props?.inputData?.formcss : "my-2 xl:my-1 xxl:my-0 mx-auto max-w-screen-xxl py-12  px-4 sm:px-6 xl:w-5/6  md:py-20 lg:py-10 md:px-8  bg-skyBlue rounded-xl "}>
                        <h2 className={this.props?.inputData?.formTitleCss ? this.props?.inputData?.formTitleCss : ""}>{this.props?.inputData?.formTitle ? this.props?.inputData?.formTitle : null}</h2>
                        <form>
                            {/* <label >First Name</label> */}
                            <div className="mb-4 relative">
                                <label htmlFor="fullName" className="formLabel"><span className="sr-only">First name</span></label>
                                {/* <div className="formIcon border border-r-2">
                                <i className="fa-regular fa-user w-5 h-5 mr-2 "></i>
                            </div> */}
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    className="formInput "
                                    placeholder="Your Name"
                                    onChange={this.handleChange.bind(this)}
                                    value={this.state.fullName}
                                />
                                <div id="nameError1" className={"errorMsg "}></div>
                            </div>


                            {/* <label >Mobile Number</label> */}
                            <div className="mb-4 relative">
                                <label className="formLabel"></label>
                                {/* <div className="formIcon">
                                <i className="fa-solid fa-phone w-5 h-5 mr-2   mt-2"></i>
                            </div> */}
                                <input
                                    type="text"
                                    id="mobile"
                                    name="mobile"
                                    className="formInput "
                                    placeholder="Mobile"
                                    onChange={this.handleChange.bind(this)}
                                    value={this.state.mobile}
                                />
                                <div id="mobileError1" className={"errorMsg "}></div>
                            </div>
                            {/* <label >Email ID</label> */}
                            <div className="mb-4 relative">
                                <label htmlFor="email" className="formLabel"><span className="sr-only">Email</span></label>
                                {/* <div className="formIcon">
                                <i className="fa-regular fa-envelope w-5 h-5 mr-2   mt-1"></i>
                            </div> */}
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="formInput "
                                    placeholder="Your Email Address"
                                    onChange={this.handleChange.bind(this)}
                                    value={this.state.email}
                                />
                                <div id="emailError1" className={"errorMsg "}></div>
                            </div>

                            <div className="mb-4 relative">
                                <label htmlFor="hs-hero-message-2" className="formLabel"><span className="sr-only">Subject</span></label>
                                {/* <div className="formIcon">
                                <i className="fa-regular fa-pen-to-square w-5 h-8 mr-2  mt-4"></i>
                            </div> */}
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="formInput"
                                    placeholder="Subject"
                                    onChange={this.handleChange.bind(this)}
                                    value={this.state.subject} />
                            </div>
                            {/* <label >Message</label> */}
                            <div className="mb-4 relative">
                                <label htmlFor="hs-hero-message-2" className="formLabel"><span className="sr-only">Message</span></label>
                                {/* <div className="formIcon">
                                <i className="fa-regular fa-pen-to-square w-5 h-8 mr-2  mt-4"></i>
                            </div> */}
                                <textarea
                                    type="text"
                                    id="message"
                                    name="message"
                                    className="formInput h-28 md:h-auto"
                                    placeholder="Your Message"
                                    onChange={this.handleChange.bind(this)}
                                    value={this.state.message} >
                                </textarea>
                            </div>

                            <div className="flex justify-center md:justify-start ">
                                {this.state.btnLoading ?
                                    (
                                        <button type="button" className={this.props?.inputData?.btnCss ? this.props?.inputData?.btnCss : "submitBtnForm px-10 py-2"}>
                                            Sending Message &nbsp;
                                            <span>
                                                <i className="fa fa-spin fa-spinner"></i>
                                            </span>
                                        </button>
                                    )
                                    :
                                    (
                                        <button type="button" className={this.props?.inputData?.btnCss ? this.props?.inputData?.btnCss : "submitBtnForm px-10 py-2"} onClick={this.Submit.bind(this)}>

                                            <span className="my-auto">{this.props?.inputData?.btnName}</span><i className="fa-2x   fa-solid fa-circle-arrow-right"></i></button>
                                    )
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}
