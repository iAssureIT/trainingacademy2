"use client";
import React, { Component } from "react";
import CKEditor from "react-ckeditor-component";
import axios from "axios";
import Swal from "sweetalert2";

class WriteBlogForm extends Component {
  constructor(props) {
    super();
    this.state = {
      btnLoading: false,
      loggedIn: false,
      urls: {},
      fields: {
        blogTitle: "",
        blogCategory: "",
        blogSummary: "",
        blogHeaderImage: "",
        blogContent: "",
        
      },
      maxSummaryLength: 100,

      errors: {},
      btnTxt: "Submit",
      submitted: false,
    };
    this.removeImageURL = this.removeImageURL.bind(this);
    this.delImage = this.delImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (process.browser) {
      var pageHeight =
        document.body.scrollHeight > 1780 ? document.body.scrollHeight : 1780;
      // this.props.setPageHeight(pageHeight);
    }

    // this.getCategoryList();
    const userDetails = localStorage.getItem("userDetails");
    if (userDetails) {
      const userDetailsParse = JSON.parse(userDetails);
      this.setState({
        fields: { user_id: userDetailsParse.user_id },
      });
    }
  }

  getCategoryList = () => {
    axios
      .get("/api/website-data/get/block-data/by-block-name/BroadCategory")
      .then((response) => {
        if (response.data) {
          this.setState({
          
          });
        }
      })
      .catch(function (error) {
        //console.log("error",error);
      });
  };

  onlyAlphabets(event) {
    if (
      (event.which >= 65 && event.which <= 90) ||
      (event.which >= 97 && event.which <= 122) ||
      event.which === 8 ||
      event.which === 46 ||
      event.which === 37 ||
      event.which === 39 ||
      event.which === 9
    ) {
      return true;
    } else {
      event.preventDefault();
    }
  }

  alphaNumeric(event) {
    if (
      (event.which >= 65 && event.which <= 90) ||
      (event.which >= 97 && event.which <= 122) ||
      (event.which >= 48 && event.which <= 57) ||
      event.which === 8 ||
      event.which === 9 ||
      event.which === 46 ||
      event.which === 37 ||
      event.which === 39 ||
      event.which === 32
    ) {
      return true;
    } else {
      event.preventDefault();
    }
  }
  handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      this.setState({ blogHeaderImage: file }); // Store the selected file in the component's state
    } else {
      this.setState({ blogHeaderImage: null }); // Reset the selected file if no file is chosen
    }
  };
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });

    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({
      fields,
    });
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;


    if (!fields["blogTitle"]) {
      formIsValid = false;
      errors["blogTitle"] = "This field is required.";
    }

    // if (!fields["blogCategory"]) {
    // 	formIsValid = false;
    // 	errors["blogCategory"] = "This field is required.";
    // }

    if (!fields["blogSummary"]) {
      formIsValid = false;
      errors["blogSummary"] = "This field is required.";
    }
    //  if(this.state.fields?.blogSummary.length > this.state.maxSummaryLength){
    //   errors["blogSummary"] = "Please enter less than 100 character";
    // }

    // if (!fields["blogHeaderImage"] || fields.blogHeaderImage.length === 0) {
    //     formIsValid = false;
    //     errors["blogHeaderImage"] = "This field is required.";
    // }

    if (!fields["blogContent"]) {
      formIsValid = false;
      errors["blogContent"] = "This field is required.";
    }
    console.log("this.state.fields.blogContent",this.state.fields.blogContent)

    this.setState(
      {
        errors: errors,
      },
      () => {
        if (Object.keys(errors).length !== 0) {
          Swal.fire(
            "Validation Error",
            "One of the field needs some correction!",
            "error"
          );
        }
        console.log("this.state.errors =	187 ", this.state.errors);
      }
    );

    return formIsValid;
  }
  handleSubmit = async (event) => {
    event.preventDefault();

    if (this.validateForm()) {
      const string = this.state?.fields?.blogTitle.replace(
        /[^a-zA-Z0-9 ]/g,
        ""
      );
      const url = encodeURIComponent(string.replace(/\s+/g, "-")).toLowerCase();
        // console.log("this.state.fields.blogContent",this.state.fields.blogContent)
      const formData = new FormData();
      formData.append("user_id", this.state.fields.user_id);
      formData.append("blogTitle", this.state.fields.blogTitle);
      formData.append("blogURL", url);
      // formData.append("blogCategory", this.state.fields.blogCategory);
      formData.append("blogSummary", this.state.fields.blogSummary);
      formData.append("blogHeaderImage", this.state.blogHeaderImage);
      formData.append("blogContent", this.state.fields.blogContent);

      this.setState({ submitted: true });
      const postUrl = "/api/blogs2/post";

      // Define the method based on the condition
      const method = "post";

      try {

        const response = await axios({
          url: "/api/blogs2/post",
          method: "post",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data", // Set the Content-Type header
          },
        });

        if (typeof window !== "undefined") {
          const blogURL = response.data.feedback.blogURL;
          const blogID = response.data.feedback._id;
          window.location.href = `/user/blogs/${blogURL}-${blogID}`;
        }
      } catch (error) {
       
        console.error("Error while submitting the blog:", error);
        Swal.fire(
          "Blog could not be submitted successfully!",
          error.message || "An error occurred.",
          "error"
        );
      }
    } else {
      Swal.fire(
        "Validation Issue",
        "Please correct the errors in the form fields.",
        "error"
      );
    }
  };

  handleFileChange(event) {
    var id = event.target.id;
    var valid = false;

    for (var i = 0; i < event.target.files.length; i++) {
      var file = event.target.files[i];
      // console.log("file = ",file);
      if (
        file.type !== "image/png" &&
        file.type !== "image/jpg" &&
        file.type !== "image/jpeg"
      ) {
        valid = false;
        Swal.fire(
          "Upload either PNG or JPE/JPEG types only",
          "Make sure size of image is appropriate",
          "error"
        );
      } else if (file.size > 5000000) {
        valid = false;
        Swal.fire(
          "Image size can't be greater than 5 MB",
          "Upload an image or a pdf having size less than 5 MB",
          "error"
        );
      } else {
        valid = true;
      }
    }

    if (valid === true) {
      document.getElementById(id + "PH").style.display = "none";
      var name = event.target.name;
      let fields = this.state.fields;
      fields[event.target.name] = event.target.value;
      this.setState({ fields }, () => {
        // console.log("1 this.state.fields => ", this.state.fields);
      });
      this.uploadFile(event);
    }
  }

  async uploadFile(event) {
    const id = event.currentTarget.id;
    this.setState({ uploading: true });

    for (var i = 0; i < event.target.files.length; i++) {
      var file = event.target.files[i];
      var fn = encodeURIComponent(file.name);
      var filename = this.state.fields.user_id + "--" + fn;

      const res = await fetch(`/api/upload-url?file=${filename}`, {
        headers: {
          "Content-Type": file.type,
          Accept: "application/json",
        },
      });

      const { url, fields } = await res.json();
      const formData = new FormData();
      Object.entries({ ...fields, file }).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const upload = await fetch(url, {
        method: "POST",
        body: formData,
      });
      // console.log("upload = ",upload);

      if (upload.ok) {
        var newUrl = upload.url + "/" + filename;
        // console.log("this.state.urls => ", this.state.urls);

        if (this.state.urls[id] && this.state.urls[id].length > 0) {
          var docArr = this.state.urls[id];
        } else {
          var docArr = [];
        }

        docArr.push({ url: newUrl, fileName: fn });
        this.setState(
          {
            urls: { ...this.state.urls, [id]: docArr },
            uploading: false,
          },
          () => {
            // console.log("*** this.state.urls => ",this.state.urls)
          }
        );
      } else {
        // console.error('Upload failed.',upload);
      }
    }

    if (i >= event.target.files.length) {
      this.setState({ uploading: false });
    }
  }

  delImage(event) {
    let fields = this.state.fields;
    this.setState({ blogHeaderImage: "" }, () => {

    });
  }

  onContentChange(event) {
      var newContent = event.editor.getData();

      let fields = this.state.fields;
      fields["blogContent"] = newContent;
      if (fields) {
        this.setState({ fields }, () => {
          let errors = this.state.errors;
          if (this.state.fields.blogContent) {
            errors["blogContent"] = "";
          } else {
            errors["blogContent"] = "This field is required";
          }
          this.setState({ errors });
          // console.log("this.state => ",this.state);
        });
      }
  }

  onSummaryChange(event) {
      var newContent = event.editor.getData();
    // console.log("this.state.fields?.blogSummary.length",this.state.fields?.blogSummary.length)
      let fields = this.state.fields;
      fields["blogSummary"] = newContent;
      if (fields) {
        this.setState({ fields }, () => {
          let errors = this.state.errors;
          if (this.state.fields.blogSummary) {
            errors["blogSummary"] = "";
          }
          // else if(this.state.fields?.blogSummary && this.state.fields?.blogSummary.length > this.state.maxSummaryLength){
          //   errors["blogSummary"] = "Please enter less than 100 character";
          // } 
          else {
            errors["blogSummary"] = "This field is required";
          }
          this.setState({ errors });
          // console.log("this.state => ",this.state);
        });
      }
  }

  removeImageURL(event) {
    var id = event.currentTarget.id;
    // console.log("id = ",id);

    var urls = this.state.urls;
    urls.blogContentImage.splice(id, 1);
    // console.log("urls = ",urls);
    this.setState({ urls: urls });
  }

  render() {
    return (
      <section
        className="xl:w-2/3  mx-auto md:flex-row h-auto items-center my-12  md:my-10 "
        id="mainblk"
      >
        <div className={"w-full"}>
          <div className="text-center md:text-left block mt-10 mb-10 text-2xl text-lightBlue sm:text-2xl lg:text-3xl xxl:text-4xls lg:leading-tight font-extrabold">
            Blog Form
          </div>
        </div>

        <div
          className={
            "w-full mx-auto h-100 border border-exlightGray bg-white rounded xl:p-10 "
          }
        >
          <form id="blogForm" className="my-6 px-5 ">
            <div className="flex flex-row ">
              <div className="mr-3 w-full">
                <label className="label">
                  Blog Title
                  <span className="asterik">*</span>
                </label>
                <div className=" relative">
                  <input
                    type="text"
                    maxLength=""
                    className=" stdInput2"
                    id="blogTitle"
                    name="blogTitle"
                    placeholder="Blog Title"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.fields.blogTitle}
                  />
                  <div className="errorMsg col-12 text-left pl-0 mt-2">
                    {this.state.errors.blogTitle}
                  </div>
                </div>
              </div>
              {/* <div className="w-1/2">
								<label
									className="label "
									htmlFor="blogCategory"
								>
									Blog Category <span className="asterik">*</span>
								</label>
								<select
									className="w-full bg-gray-50 border border-exlightGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									id="blogCategory"
									name="blogCategory"
									onChange={this.handleChange.bind(this)}
									autoComplete="off"
									value={
										this.state.fields.blogCategory
											? this.state.fields.blogCategory
											: ""
									}
								>
									<option value="">--Select Blog Category--</option>
									{this.state.categoryList && this.state.categoryList.length > 0
										? this.state.categoryList.map((data, i) => {
											return (
												<option key={i} value={data}>
													{data}
												</option>
											);
										})
										: "null"}
								</select>
								<div className="errorMsg text-left pl-0 mt-2">
									{this.state.errors.blogCategory}
								</div>
							</div> */}
            </div>
            <div className="my-7 w-full">
              <label htmlFor="blogContent" className="label ">
                Blog Summary<span className="asterik">*</span>
              </label>
              <div className="px-0">
                {/* <input
                  type="text"
                  maxLength="200"
                  className=" stdInput2"
                  id="blogSummary"
                  name="blogSummary"
                  placeholder="Blog Title - max 200 characters"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.fields.blogSummary}
                /> */}
                <CKEditor
                  activeclassName="p15"
                  id="blogSummary"
                  name="blogSummary"
                  className=""
                  content={this.state.fields.blogSummary}
                  events={{ change: this.onSummaryChange.bind(this) }}
                />
                <div className="errorMsg col-12 text-left pl-0 mt-2">
                  {this.state.errors.blogSummary}
                </div>
              </div>
            </div>

            <div className="w-full my-7">
              <label htmlFor="blogHeaderImage" className="label">
                Blog Header Image <span className="asterik">*</span>
              </label>

              {this.state.blogHeaderImage ? (
                <div className={" pl-0 mx-auto  "}>
                  {/* <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${this.state.blogHeaderImage}`} className={"w-full"} /> */}
                  <div className="w-32 right-0 ml-32">
                    <i
                      className={"fa fa-times  delImgIcon "}
                      id={"del"}
                      onClick={this.delImage.bind(this)}
                    ></i>
                  </div>
                  <img
                    src={URL.createObjectURL(this.state.blogHeaderImage)}
                    alt="Selected Image"
                    className="h-32 w-32"
                  />
                </div>
              ) : this.state.uploading ? (
                <div className={"col-2 ml-3 uploadImgLoader"}>
                  <i
                    className={"fa fa-spinner fa-spin fa-2x "}
                    aria-hidden="true"
                  ></i>
                  <small className="mt-5 text-muted absolute">
                    {" "}
                    Image Loading...
                  </small>
                </div>
              ) : (
                // <div className="">
                // 	<label>Image Upload</label>
                // 	<input
                // 		type="file"
                // 		className="form-control"
                // 		name="blogHeaderImage"
                // 		onChange={this.handleImageChange}
                // 		style={{ width: "300px", height: "35px" }}
                // 	// required
                // 	/>
                // </div>
                <div className={""}>
                  {/* <i	className={"fa fa-plus border border-dashed cursor-pointer bg-gray-100  p-32"}
										></i> */}
                  <input
                    type="file"
                    className="form-control"
                    name="blogHeaderImage"
                    onChange={this.handleImageChange}
                    style={{ width: "300px", height: "35px" }}
                  />
                  <div
                    id="blogHeaderImagePH"
                    className={" mt-2  fileplaceholder"}
                  >
                    Upload your files
                  </div>
                  <div className="errorMsg text-left pl-0 mt-2">
                    <big>{this.state.errors.blogHeaderImage}</big>
                  </div>
                </div>
              )}
            </div>
            <div className="my-7 ">
              {/* <label className="label" htmlFor="blogSummary">
								Image to insert in blog content
							</label> */}
              <div className={" pl-0 "}>
                {/* <div className="">
									<i className={" ml-3 fa fa-plus "}></i>
									<input
										type="file"
										id="blogContentImage"
										name="blogContentImage"
										className={"w-full h-full"}
										accept=".png, .jpg, .jpeg"
										onChange={this.handleFileChange.bind(this)}
									/>
									<div
										id="blogContentImagePH"
										className={"col-12 mt-1 text-center "}
									>
										Upload your image to generate its URL
									</div>
								</div> */}
                {/*<div className={"col-2"}>
                                <button onClick={this.Upload.bind(this)}  className={"col-12 btn btn-default "+Style.uploadBtn}>Upload</button>
                                </div>*/}
                {/* <div className={""}>
									{this.state.urls.blogContentImage &&
										this.state.urls.blogContentImage.length > 0 ? (
										<>
											{this.state.urls.blogContentImage.map((elem, index) => {
												return (
													<div className="col-12" key={index}>
														<small>{elem.url}</small> &nbsp;&nbsp;{" "}
														<span
															className="text-danger"
															role="button"
															id={index}
															onClick={this.removeImageURL.bind(this)}
														>
															<big>&times;</big>
														</span>
													</div>
												);
											})}
											<div className=" mt-3 text-danger">
												<small>
													{" "}
													Copy this generated URL, click the image icon in
													content text area header and Paste the URL in that
													form.{" "}
												</small>
											</div>
										</>
									) : (
										<div className="mt-2 ml-4">
											<small className="text-justify">
												If you want to use any image in blog content, upload
												it here and then copy the URL generated!
											</small>
										</div>
									)}
								</div> */}
              </div>
            </div>
            <div className="my-7">
              <label className=" label" htmlFor="blogContent">
                Blog Content<span className="redFont">*</span>
              </label>
              <div className=" px-0">
                {/* <input
                  type="text"
                  maxLength="200"
                  className=" stdInput2"
                  id="blogContent"
                  name="blogContent"
                  placeholder="Blog Title - max 200 characters"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.fields.blogContent}
                /> */}
                <CKEditor
                  activeclassName="p15"
                  id="blogContent"
                  className=""
                content={this.state.fields.blogContent}
                events={{ change: this.onContentChange.bind(this) }}                
                />
                <div className="errorMsg col-12 text-left pl-0 mt-2">
                  {this.state.errors.blogContent}
                </div>
              </div>
            </div>
            <div className=" my-12 mb-10 xl:my-7">
              {/*{console.log("this.state.submitted",this.state.submitted)}*/}
              {this.state.submitted ? (
                <button className="stdBtn pull-right  w-1/4">
                  Submit &nbsp; <i className="fa fa-spinner fa-pulse"></i>{" "}
                </button>
              ) : (
                <button
                  onClick={this.handleSubmit.bind(this)}
                  className="mx-auto float-right  w-2/3 xl:w-1/4 stdBtn"
                >
                  Submit
                </button>
              )}
            </div>
            <div className=" mt-32 xl:mt-28 border border-exlightGray bg-exlightGray p-5 text-lg bg-light">
              <small>
                <b> Disclaimer : </b>
                The views expressed in this Article / Blog / Write up are the
                matters of opinion and shall not be construed as an advice
                issued. The views expressed are based on the understanding of
                law and regulations prevailing at the date of writing this
                Article and on the past experience of the Author. There can be
                no assurance that the regulators may not take a position
                contrary to the views expressed herein.
              </small>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
export default WriteBlogForm;
