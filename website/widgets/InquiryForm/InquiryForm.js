"use client";

import React, { Component } from "react";
import axios from "axios";
import Image from "next/image";
import swal from "sweetalert2";

export default class InquiryForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      // Subject: "",
      message: "",
      mobile: "",
    };
  }

  componentDidMount() {
    // console.log("==>", this.props.block_id);
    // {
    //   axios
    //     .get("/api/blocks/get/" + this.props.block_id)
    //     .then((response) => {
    //       if (response.data) {
    //         console.log("ListofServices =", response.data);
    //         this.setState({
    //           blocks: response.data,
    //         });
    //       }
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }
    // this.setState({
    //   block_id: this.props.block_id,
    // });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      name: this.refs.name.value,
      email: this.refs.email.value,
      // Subject: this.refs.subject.value,
      message: this.refs.message.value,
      mobile: this.refs.mobile.value,
    });
  }
  validateForm = () => {
    var status = true;
    var regSpaceName = /[a-zA-Z_]+$/;
    var tempEmail = this.state.email.trim(); // value of field with whitespace trimmed off
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    var illegalChars = /[()<>,;:\\"[\]]/;
    var phoneno = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;

    if (this.state.name.length <= 0) {
      document.getElementById("nameError1").innerHTML =
        "Please enter your Name";
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
    var adminEmail = "iassureitmail@gmail.com";

    if (this.validateForm()) {
      this.setState({ btnLoading: true });
      const formValues1 = {
        toEmail: this.state.email,
        subject:
          "Your enquiry submitted to  iAssure International Technologies Pvt Ltd.",
        text: this.state.message,
        mail:
          "Dear " +
          this.state.name +
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
          "<br/><br/> Thank You, <br/> Support Team, <br/>  iAssure International Technologies Pvt Ltd",
      };
      console.log("notification", formValues1);
      axios
        .post("/send-email", formValues1)
        .then((res) => {
          console.log("res 117", res);
          if (res.status === 200) {
            swal.fire({
              html: "<span className='mt-10 pt-10'><span>Thank you for contacting us.<span></br><span>We will get back to you shortly.</span></span>",
              showCloseButton: true,
            });
            window.location.href = `https://calendly.com/iassureit`
            this.setState({
              name: "",
              email: "",
              message: "",
              mobile: "",
              // Subject: "",
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
          this.state.name +
          "<br/>" +
          "<b>Email: </b>" +
          this.state.email +
          "<br/><br/>" +
          "<b>Phone: </b>" +
          this.state.mobile +
          "<br/><br/>" +
          "<pre> " +
          this.state.message +
          "</pre>" +
          "<br/><br/> ============================ " +
          "<br/><br/> This is a system generated email! ",
      };
      console.log("notification", formValues2);
      axios
        .post("/send-email", formValues2)
        .then((res) => {
          if (res.status === 200) {
            console.log("Mail Sent TO ADMIN successfully!");
            swal.fire({
              html: "<span className='mt-5 p-5'><span>Thank you for contacting us.<span></br><span>We will get back to you shortly.</span></span>",
              showCloseButton: true,
            });
            window.location.href = `https://calendly.com/iassureit`
            this.setState({
              btnLoading: false,
              name: "",
              email: "",
              // Subject: "",
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
      <section>
        {/* <video id={this.props.inputData?.id} className={this.props.inputData?.class + "absolute"} autoPlay loop muted>
                <source src={this.props.inputData?.videoUrl} type="video/mp4" />
            </video>
            <div className='absolute right-0 p-20 md:w-1/3'>*/}
        <img
          src="/images/specific/Services/StaffAgum2.webp"
          alt="formImg"
          className={"mx-auto relative xl:top-4"}
          height={80}
        ></img>

        <div
          className={
            this.props?.formCss +
            "p-6 -mt-16 md:-mt-16 lg:-mt-12 bg-white p-5 md:p-10 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          }
        >

          <form>
            <div className="text-center">
              <h2 className="text-xl lg:text-2xl xl:3xl font-bold mb-1 mt-10 md:mt-5">
                Request a Free Quote
              </h2>
              <h2 className="mb-5 text-base lg:text-base xl:text-base 2xl:text-base">
                Guaranteed response within one business day!
              </h2>
            </div>
            <div className="mb-4 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                <i className="fa-regular fa-user w-5 h-5 mr-16"></i>
              </div>
              <input
                className="py-5 px-12 formInput2 "
                type="text"
                name="name"
                id="name"
                ref="name"
                placeholder="Your Name"
                value={this.state.name}
                onChange={this.handleChange.bind(this)}
              />
              <div id="nameError1" className={"errorMsg "}></div>
            </div>

            <div className="mb-4 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                <i className="fa fa-phone w-5 h-5 mr-16"></i>
              </div>
              <input
                className="py-2 px-12 formInput2"
                type="text"
                name="mobile"
                id="mobile"
                ref="mobile"
                placeholder="Mobile"
                value={this.state.mobile}
                onChange={this.handleChange.bind(this)}
              />
              <div id="mobileError1" className={"errorMsg "}></div>
            </div>
            <div className="mb-4 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                <i className="fa-regular fa-envelope w-5 h-5 mr-16"></i>
              </div>
              <input
                className="py-2 px-12 formInput2 "
                type="text"
                name="email"
                id="email"
                ref="email"
                placeholder="Your Email Address"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
              />
              <div id="emailError1" className={"errorMsg "}></div>
            </div>

            {/* <div className="mb-4 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                <i className="fa-solid fa-pencil w-5 h-5 mr-16"></i>
              </div>
              <input
                className="py-3 px-12 formInput2"
                type="text"
                name="from"
                id="from"
                ref="subject"
                placeholder="Subject"
                value={this.state.Subject}
                onChange={this.handleChange.bind(this)}
              />
            </div> */}
            <div className="mb-4 relative">
              <div className="absolute top-5 left-0 flex items-center pl-5 pointer-events-none">
                <i className="fa-regular fa-pen-to-square w-5 h-8 mr-16"></i>
              </div>
              <textarea
                className="py-2 px-12 formInput2 "
                name="message"
                id="message"
                ref="message"
                placeholder="Your Message"
                rows="4"
                value={this.state.message}
                onChange={this.handleChange.bind(this)}
              ></textarea>
            </div>
            <div className={"col-lg-12 col-md-12 col-sm-12 col-xs-12 formRow "}>
              {this.state.btnLoading ? (
                <button
                  type="button"
                  className="w-full submitBtn py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-purple text-white hover:border-white hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm xxl:text-xl dark:focus:ring-offset-gray-800 sm:p-4 "
                >
                  Sending Message &nbsp;
                  <span>
                    <i className="fa fa-spin fa-spinner"></i>
                  </span>
                </button>
              ) : (
                <button
                  type="button"
                  className="w-full py-3 md:py-2 px-4 submitBtn inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-purple text-white hover:border-white hover:text-white  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm xxl:text-xl sm:p-4"
                  onClick={this.Submit.bind(this)}
                >
                  SUBMIT
                </button>
              )}
            </div>
          </form>
        </div>
        {/* </div> */}
      </section>
    );
  }
}
