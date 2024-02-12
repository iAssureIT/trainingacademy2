/*==========================================================
  Developer  :  Prachi Kadam
  Date       :  1st Sept 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/
"use client";
import React, { Component } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnLoading: false,
      userName: "",
      fields: {},
      errors: {},
    };
  }
  validateForm = () => {
    let fields = this.state;
    let errors = {};
    let formIsValid = true;
    console.log("forgot password sendOTP userName = ", this.state.userName);
    if (!fields["userName"]) {
      formIsValid = false;
      errors["userName"] = "Please enter your Email ID";
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  };
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  sendOTP(event) {
    event.preventDefault();
    var userName = this.state.userName;
    console.log("forgot password sendOTP userName = ", userName);

    var formValues = {
      userName: userName,
      role: "user",
    };

    if (this.validateForm()) {
      this.setState({ btnLoading: true });
      console.log("formValues==", userName);

      Axios.post(
        "/api/auth/post/send-otp-forgot-password-without-notification",
        formValues
      )
        .then((forgotPassResponse) => {
          console.log("forgotPassResponse.data.ID===", forgotPassResponse.data);
          this.setState({ btnLoading: false });
          var msg = forgotPassResponse.data.message;

          if (forgotPassResponse.data.message === "OTP__SENT") {
            new Swal(
              forgotPassResponse.data.message,
              "Use this OTP to verify your account!",
              "success"
            );
            window.location.replace(
              "/auth/forgot-password-confirm-otp?username=" +
                this.state.userName
            );
          } else {
            this.setState({ btnLoading: false });
            new Swal(
              "Something went wrong",
              forgotPassResponse.data.message,
              "error"
            );
          }
        })
        .catch((error) => {
          this.setState({ btnLoading: false });
          console.log("error post send-otp-using-username ==> ", error);
        });
    }
  }
  render() {
    return (
      <section
        className={
          " w-full md:flex-row h-auto items-center  my-10 " + this.props.bgColor
        }
      >
        <div className={"formWrapper py-24 " + this.props.style}>
          {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"> */}
          {/* <img className="w-46 h-14  mr-2 xxl:w-46 xxl:h-16 mb-6" src={this.props.logo} alt="logo" /> */}
          {/* </a> */}
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight text-center">
              {" "}
              Forgot Password
            </h1>
            <p className="text-sm text-center px-5 mt-3">
              Please enter your registered email address below to receive an
              OTP.
            </p>

            <form className="mt-6">
              <div className="space-y-2 md:space-y-2 mb-4">
                <label className="label">Email:</label>
                <div className="mb-4 relative">
                  <label
                    for="Email ID"
                    className="block text-sm font-medium dark:text-white"
                  >
                    <span className="sr-only">Email ID</span>
                  </label>
                  <div className="insideIcon">
                    <i className="fa-regular fa-envelope w-5 h-5 mr-16"></i>
                  </div>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    value={this.state.userName}
                    placeholder="Enter your email address"
                    className="stdInput2"
                    autoFocus
                    autoComplete
                    required
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className=" text-left pl-0 errorMsg mt-1">
                  {this.state.errors.userName}
                </div>
              </div>
              {this.state.btnLoading ? (
                <button type="submit" className="stdBtn1 mt-4">
                  <img
                    className="w-12 h-10 mx-auto"
                    src="/images/generic/loading.gif"
                  />
                </button>
              ) : (
                <button
                  type="submit"
                  className="stdBtn bg-blue-600 mt-4"
                  onClick={this.sendOTP.bind(this)}
                >
                  Send OTP
                </button>
              )}
              <br />
              <br />
              <a
                href="/auth/login"
                className="text-lightBlue hover:text-skyBlue font-medium"
              >
                {"<< Back to Login"}
              </a>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
export default ForgotPassword;
