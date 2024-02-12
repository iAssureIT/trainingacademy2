/*==========================================================
  Developer  :  Prachi Kadam
  Date       :  1st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/
"use client";
import React, { Component } from "react";
import OtpInput from "react-otp-input";
import Axios from "axios";
import Swal from "sweetalert2";
import Countdown from "react-countdown";

export default class ForgotPasswordConfirmOtp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: "",
      otp: "",
      OTPresent: false,
      countdown: 0,
    };
  }

  handleChange = (otp) => this.setState({ otp });

  componentDidMount() {
    var url = window.location.href.split("="); // return segment1/segment2/segment3/segment4
    var DecodedUrl = decodeURIComponent(url[1]);
    // console.log(decodeURIComponent(url));
    this.setState({
      userName: DecodedUrl,
    });
  }
  renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      this.setState({ OTPresent: false });
      return <span>You are good to go!</span>;
    } else {
      return (
        <span>
          {" "}
          <span className="text-primary">Resent OTP</span> after{" "}
          <span className="text-primary">{seconds}</span> seconds
        </span>
      );
    }
  };

  resendOTP(event) {
    event.preventDefault();
    if (this.state.userName) {
      console.log("this.props.userName => ", this.state.userName);
      var formValues = {
        userName: this.state.userName,
        role: "user",
      };

      Axios.post("/api/auth/post/send-otp-forgot-password", formValues)
        .then((otpResponse) => {
          if (otpResponse) {
            this.setState({ otp: "", OTPresent: true });
            new Swal(
              "OTP resent to your registered email address!",
              "Please Enter your new OTP",
              "success"
            );
          }
        })
        .catch((error) => {
          console.log("error while resending otp==", error);
        });
    }
  }

  verifyOTP(event) {
    event.preventDefault();
    console.log("this.state.userName => ", this.state.userName);

    var formValues = {
      userName: this.state.userName,
      OTP: this.state.otp,
      role: "user",
    };

    Axios.post("/api/auth/post/verify-otp-for-signup", formValues)
      .then((verifyOtpResponse) => {
        if (verifyOtpResponse) {
          if (verifyOtpResponse.data.message === "OTP Verified Successfully!") {
            new Swal(
              "OTP Verified Successfully!",
              "Now you can reset your Password.",
              "success"
            );
            // this.props.SetModalForm("resetPassword");
            window.location.replace("/auth/reset-password");
          } else {
            new Swal(verifyOtpResponse.data.message, "Try Again!", "error");
          }
        }
      })
      .catch((error) => {
        console.log("error while verifying otp==", error);
      });
  }

  render() {
    return (
      <section
        className={
          " w-full mx-auto md:flex-row h-auto items-center  my-10 " +
          this.props.bgColor
        }
      >
        <div className={"formWrapper " + this.props.style}>
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          ></a>
          <div className="w-full h-100">
            <h2 className="mb-1 text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Verify OTP
            </h2>
            {/* <p className='text-sm text-center px-5'>Please enter your registered email address below to receive an OTP.</p> */}
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div className="w-64 mx-auto justify-content-center otpInputBox">
                <OtpInput
                  id=""
                  className="w-10 "
                  value={this.state.otp}
                  onChange={this.handleChange}
                  numInputs={4}
                  name="otp"
                  // separator={<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
                  // renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                />
              </div>
              <div className="flex justify-center text-center mt-5">
                <span className="text-dark">
                  {this.state.OTPresent ? (
                    <Countdown
                      date={Date.now() + 30000}
                      renderer={this.renderer}
                    />
                  ) : (
                    <a
                      href=""
                      className={
                        "flex items-center text-blue-700 hover:text-blue-900 cursor-pointer"
                      }
                      onClick={this.resendOTP.bind(this)}
                    >
                      <span>Resend OTP</span>
                      <i className="bx bx-caret-right ml-1"></i>
                    </a>
                  )}
                </span>
              </div>
              <div className="w-full justify-center text-center mx-auto">
                <button
                  type="submit"
                  className="otpBtn bg-blue-800"
                  onClick={this.verifyOTP.bind(this)}
                >
                  Verify OTP & Login
                </button>
              </div>
              <div className="text-left mx-2">
                <a
                  href="/auth/login"
                  className="font-light text-xs justify-left"
                >
                  Back to Login
                </a>
              </div>
            </form>
          </div>
          {/* </div> */}
        </div>
      </section>
    );
  }
}
