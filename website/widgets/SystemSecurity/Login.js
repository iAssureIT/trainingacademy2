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

class Login extends Component {
  constructor() {
    super();
    this.state = {
      btnLoading: false,
      loggedIn: false,
      auth: {
        email: "",
        pwd: "",
      },
      email: "",
      password: "",
      fields: {},
      errors: {},
    };
  }

  onlyEmail = (event) => {
    // Allow A-Z, a-z, 0-9, !@#$%^&*()_ .
    if (
      (event.which >= 33 && event.which <= 57) ||
      (event.which >= 64 && event.which <= 90) ||
      (event.which >= 95 && event.which <= 122) ||
      event.which === 8 ||
      event.which === 9 ||
      event.which === 46 ||
      event.which === 189 ||
      event.which === 190 ||
      event.which === 37 ||
      event.which === 39
    ) {
      return true;
    } else {
      event.preventDefault();
    }
  };
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  togglePassword(event) {
    event.preventDefault();
    var id = event.currentTarget.id;
    var idArr = id.split("-");
    var inputId = idArr[1];

    if (document.getElementById(id).classList.contains("fa-eye-slash")) {
      document.getElementById(id).classList.remove("fa-eye-slash");
      document.getElementById(id).classList.add("fa-eye");
    } else {
      document.getElementById(id).classList.remove("fa-eye");
      document.getElementById(id).classList.add("fa-eye-slash");
    }

    var input = document.getElementById(inputId);
    if (input.getAttribute("type") === "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  }
  validateForm() {
    let fields = this.state;
    let errors = {};
    let formIsValid = true;

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Email can't be empty.";
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Password can't be empty.";
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }
  userlogin(event) {
    event.preventDefault();
    var formValues = {
      email: this.state.email,
      password: this.state.password,
      role: "user",
    };
    console.log("formValues", formValues);
    if (this.validateForm()) {
      Axios.post("/api/auth/post/login", formValues)
        .then(async (response) => {
          console.log("response", response);
          // alert("login response => ", JSON.stringify(response));
          if (response.data.message === "Login Auth Successful") {
            if (response.data.userDetails) {
              var userDetails = {
                firstName: response.data.userDetails.firstName
                  ? response.data.userDetails.firstName
                  : "-NA-",
                lastName: response.data.userDetails.lastName
                  ? response.data.userDetails.lastName
                  : "-NA-",
                company_id: response.data.userDetails.company_id
                  ? response.data.userDetails.company_id
                  : "-",
                email: response.data.userDetails.email,
                mobile: response.data.userDetails.mobile,
                pincode: response.data.userDetails.pincode,
                user_id: response.data.userDetails.user_id,
                roles: response.data.userDetails.roles,
                token: response.data.userDetails.token,
                authService: "",
              };
              localStorage.setItem("userDetails", JSON.stringify(userDetails));
              // this.props.SetUserLoggedIn();
              new Swal("Login successful", "", "success");
              window.location.replace("/admin/dashboard");

              this.setState(
                {
                  loggedIn: true,
                },
                () => {
                  console.log(
                    "response.data.userDetails => ",
                    response.data.userDetails
                  );
                }
              );
            }
          } else {
            if (response.data.message === "INVALID_PASSWORD") {
              new Swal("Your password is wrong", "", "error");
            } else if (response.data.message === "NOT_REGISTER") {
              new Swal(
                "Not a User Already!",
                "Please fill in correct Email Address/Mobile Number or Proceed to Sign Up",
                "error"
              );
            } else if (response.data.message === "USER_UNVERIFIED") {
              new Swal(
                "This email is not yet verified",
                "Please click on 'Verify Email' link on Login form to verify your account",
                "error"
              );
            } else {
              new Swal(response.data.message);
            }
          }
        })
        .catch((error) => {
          console.log("error while login user=", error);
          Swal.fire(error.message, "", "error");
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
        <div className={"formWrapper " + this.props.style}>
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            {/* <img className="w-46 h-14  mr-2 xxl:w-46 xxl:h-16" src={this.props.logo} alt="logo" /> */}
          </a>
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight text-center">
              Log in to your account
            </h1>
            <form className="mt-6" action="#" method="POST">
              {/* <div>
                                <label className="block text-gray-700">Email Address</label>
                                <input type="email" name="" id="email" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required/>
                            </div> */}
              <div className="space-y-2 md:space-y-2 mb-4">
                <label className="label">Email ID:</label>
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
                    onChange={this.handleChange.bind(this)}
                    value={this.state.email}
                    onKeyDown={this.onlyEmail.bind(this)}
                    autoFocus
                    autoComplete
                    required
                  />
                </div>
                <div className=" text-left pl-0 errorMsg mt-1">
                  {this.state.errors.email}
                </div>
              </div>
              <div className="">
                <label className="label">Password:</label>
                <div className="mb-4 relative">
                  <label
                    for="Password"
                    className="block text-sm font-medium dark:text-white"
                  >
                    <span className="sr-only">Password</span>
                  </label>
                  <div className="insideIcon">
                    <i className="fa fa-lock w-5 h-5 mr-16"></i>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="stdInput2"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.password}
                    autoFocus
                    autoComplete
                    required
                  />
                  <span
                    id="id-password"
                    onClick={this.togglePassword.bind(this)}
                    className={"fa fa-eye-slash toggleEye top-4 right-4"}
                  ></span>
                </div>
                <div className=" text-left pl-0 errorMsg mt-1">
                  {this.state.errors.password}
                </div>
              </div>
              {/* <div className="mt-4">
                                <label className="block text-gray-700">Password</label>
                                <input type="password" name="" id="password" placeholder="Enter Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                                        focus:bg-white focus:outline-none" required />
                            </div> */}
              <div className="text-right mt-2">
                <a
                  href="/auth/forgot-password"
                  className="text-sm font-semibold text-[#007bff] hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="stdBtn bg-blue-600 mt-4"
                onClick={this.userlogin.bind(this)}
              >
                Log In
              </button>
            </form>
            {/* <hr className="my-6 border-gray-300 w-full" />
                        <p className="mt-3">Need an account?
                            <a href="/auth/signup" className="text-blue-500 hover:text-blue-700 font-semibold">
                                Create an account
                            </a>
                        </p> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
