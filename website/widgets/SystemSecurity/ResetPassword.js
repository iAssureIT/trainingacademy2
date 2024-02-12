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

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnLoading: false,
      email: "",
      newPassword: "",
      confirmPassword: "",
      showMessage: false,
      errors: {},
      fields: {},
    };
  }

  togglePassword(event) {
    event.preventDefault();
    var id = event.currentTarget.id;
    var idArr = id.split("-");
    var inputId = idArr[1];
    //console.log("inputId", inputId, event.currentTarget.id);
    if (document.getElementById(id).classList.contains("fa-eye-slash")) {
      document.getElementById(id).classList.remove("fa-eye-slash");
      document.getElementById(id).classList.add("fa-eye");
    } else {
      document.getElementById(id).classList.remove("fa-eye");
      document.getElementById(id).classList.add("fa-eye-slash");
    }

    var input = document.getElementById(inputId);
    //console.log("input", input);
    if (input.getAttribute("type") === "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "This field is required.";
    }
    if (!fields["newPassword"]) {
      formIsValid = false;
      errors["newPassword"] = "This field is required.";
    }

    if (typeof fields["newPassword"] !== "undefined") {
      if (fields["newPassword"].length >= 6) {
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (re.test(fields["newPassword"])) {
          errors["newPassword"] = "";
        } else {
          errors["newPassword"] =
            "Must have min 1 Upper & 1 Lower Case letter, 1 Number & 1 Symbol";
        }
      } else {
        formIsValid = false;
        errors["newPassword"] = "Min 6 characters required";
      }
    }

    if (!fields["confirmPassword"]) {
      formIsValid = false;
      errors["confirmPassword"] = "This field is required.";
    }

    if (typeof fields["confirmPassword"] !== "undefined") {
      if (fields["newPassword"] !== fields["confirmPassword"]) {
        formIsValid = false;
        errors["confirmPassword"] = "Password does not match";
      } else {
        errors["confirmPassword"] = "";
      }
    }
    this.setState(
      {
        errors: errors,
      },
      () => {
        console.log("this.state.errors = ", this.state.errors);
      }
    );

    return formIsValid;
  }
  resetPassword(event) {
    event.preventDefault();

    // if (this.validateForm()) {
    var formValues = {
      userName: this.state.email,
      pwd: this.state.fields["newPassword"],
    };
    console.log("formValues", formValues);
    this.setState({ btnLoading: true });
    Axios.patch("/api/auth/patch/change-password-using-username", formValues)
      .then((response) => {
        this.setState({ btnLoading: false });
        console.log("change_password_using_otp => ", response);
        if (response.data.message === "Password Changed successfully!") {
          this.setState({
            showMessage: true,
          });
          new Swal(
            "Password changed successfully",
            "Use new password to Login!",
            "success"
          );
          window.location.href = "/auth/login";
          window.location.assign("/auth/login");
        } else {
          new Swal(response.data.message, "", "error");
        }
      })
      .catch((error) => {
        this.setState({ btnLoading: false });
        console.log("reset Password error=", error);
      });

    // }
  }

  handleChange(event) {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({
      fields: fields,
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return (
      <section
        className={
          " w-full md:flex-row h-auto items-center  my-10 " + this.props.bgColor
        }
      >
        <div className={"formWrapper " + this.props.style}>
          {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"> */}
          {/* <img className="w-46 h-14  mr-2 xxl:w-46 xxl:h-16 mb-6" src={this.props.logo} alt="logo" /> */}
          {/* </a> */}
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight text-center">
              {" "}
              Reset Password
            </h1>
            <form className="mt-6" action="#" method="POST">
              <div className="space-y-2 md:space-y-2 mb-4">
                <label className="label">Email :</label>
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
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email ID"
                    className="stdInput2"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this)}
                    autoFocus
                    autoComplete
                    required
                  />
                </div>
              </div>
              <div className="space-y-2 md:space-y-2 mb-4">
                <label className="label">New Password :</label>
                <div className="mb-4 relative">
                  <label
                    for="newPassword"
                    className="block text-sm font-medium dark:text-white"
                  >
                    <span className="sr-only">New Password</span>
                  </label>
                  <div className="insideIcon">
                    <i className="fa fa-lock w-5 h-5 mr-16"></i>
                  </div>
                  <input
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    placeholder="Password"
                    className="stdInput2"
                    value={this.state.newPassword}
                    onChange={this.handleChange.bind(this)}
                    autoFocus
                    autoComplete
                    required
                  />
                  <span
                    id="id-newPassword"
                    onClick={this.togglePassword.bind(this)}
                    className={"fa fa-eye-slash toggleEye right-5 top-3"}
                  ></span>
                </div>
              </div>
              <div className="space-y-2 md:space-y-2 mb-4">
                <label className="label">Confirm Password :</label>
                <div className="mb-4 relative">
                  <label
                    for="confirmPassword"
                    className="block text-sm font-medium dark:text-white"
                  >
                    <span className="sr-only">Confirm Password</span>
                  </label>
                  <div className="insideIcon">
                    <i className="fa fa-lock w-5 h-5 mr-16"></i>
                  </div>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Password"
                    className="stdInput2"
                    autoFocus
                    value={this.state.confirmPassword}
                    onChange={this.handleChange.bind(this)}
                    autoComplete
                    required
                  />
                  <span
                    id="id-confirmPassword"
                    onClick={this.togglePassword.bind(this)}
                    className={"fa fa-eye-slash toggleEye right-5 top-3"}
                  ></span>
                </div>
              </div>
              {/* <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="newsletter"
                    aria-describedby="newsletter"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    for="newsletter"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div> */}
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
                  onClick={this.resetPassword.bind(this)}
                >
                  Reset password
                </button>
              )}
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default ResetPassword;
