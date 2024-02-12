"use client";
import React, { Component } from 'react';
import CKEditor from "react-ckeditor-component";
import axios from "axios";
import Swal from 'sweetalert2';

class UpdateBlogForm extends Component {

   constructor(props) {
      super();
      this.state = {
         btnLoading: false,
         loggedIn: false,
         urls: {},
         fields: {
            blogTitle: '',
            blogCategory: '',
            blogSummary: '',
            blogHeaderImage: '',
            blogContent: '',
            categoryList: ["Taxation", "Finance", "Law", "Company Law", "Stock Markets", "Business", "Management", "Stamp Duty", "Mergers & Acquisitions", "Accounting", "Insurance", "Investment", "Income Tax", "GST", "Start-ups"],
         },
         errors: {},
      }
      this.removeImageURL = this.removeImageURL.bind(this);
      this.delImage = this.delImage.bind(this);
      this.handleChange = this.handleChange.bind(this);
   }

   componentDidMount() {

      if (process.browser) {
         var pageHeight = document.body.scrollHeight > 1780 ? document.body.scrollHeight : 1780;
         // console.log("pageHeight", pageHeight);
         // this.props.setPageHeight(pageHeight);
      }

      // console.log("UpdateBlogForm blogDetails = ", this.props.blogDetails);
      this.getCategoryList();
      const userDetails = localStorage.getItem("userDetails");
      // console.log("userDetails = ", userDetails);
      if (userDetails) {
         const userDetailsParse = JSON.parse(userDetails);
         this.setState({
            fields: { user_id: userDetailsParse.user_id },
            blog_id: this.props.blog_id,
            blogDetails: this.props.blogDetails,
         },
            () => {
               this.getBlogDetails();
               // console.log("blog_id", this.state.blog_id)
            })
      }
   }

   getBlogDetails = () => {

      if (this.state.blogDetails) {
         var fields = this.state.fields;
         var urls = this.state.urls;
         fields = {
            user_id: this.state.fields.user_id ? this.state.fields.user_id : "",
            blogTitle: this.state.blogDetails.blogTitle ? this.state.blogDetails.blogTitle : "-",
            blogCategory: this.state.blogDetails.blogCategory ? this.state.blogDetails.blogCategory : "-",
            blogSummary: this.state.blogDetails.blogSummary ? this.state.blogDetails.blogSummary : "-",
            blogHeaderImage: this.state.blogDetails.blogHeaderImage ? this.state.blogDetails.blogHeaderImage : "/images/generic/noImage.jpg",
            blogContent: this.state.blogDetails.blogContent ? this.state.blogDetails.blogContent : "-",
         };
        this.setState({
            fields: fields,
         },
            () => {
               // console.log("this.state => ", this.state)
            }
         );
      }
   }

   getCategoryList = () => {
      // axios.get("/api/website-data/get/block-data/by-block-name/BroadCategory")
      //       .then((response)=>{
      //          if(response.data){
      this.setState({
         categoryList: ["Taxation", "Finance", "Law", "Company Law", "Stock Markets", "Business", "Management", "Stamp Duty", "Mergers & Acquisitions", "Accounting", "Insurance", "Investment", "Income Tax", "GST", "Start-ups"]
      });
      //     }                  
      // })           
      // .catch(function(error){
      //console.log("error",error);
      // })
   }

   onlyAlphabets(event) {
      if ((event.which >= 65 && event.which <= 90) ||
         (event.which >= 97 && event.which <= 122) ||
         (event.which === 8 || event.which === 46 || event.which === 37 || event.which === 39 || event.which === 9)
      ) {
         return true;
      } else {
         event.preventDefault();
      }
   }

   alphaNumeric(event) {
      if ((event.which >= 65 && event.which <= 90) ||
         (event.which >= 97 && event.which <= 122) ||
         (event.which >= 48 && event.which <= 57) ||
         (event.which === 8 || event.which === 9 || event.which === 46 ||
            event.which === 37 || event.which === 39 || event.which === 32)
      ) {
         return true;
      } else {
         event.preventDefault();
      }
   }


   handleChange(event) {

      this.setState({
         [event.target.name]: event.target.value,
      });

      let fields = this.state.fields;
      // console.log("fields===",fields);
      fields[event.target.name] = event.target.value;
      this.setState({
         fields
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
      if (!fields["blogSummary"]) {
         formIsValid = false;
         errors["blogSummary"] = "This field is required.";
      }
      // console.log("fields.blogHeaderImage.length",this.state.blogHeaderImage )
      if (!fields["blogContent"]) {
         formIsValid = false;
         errors["blogContent"] = "This field is required.";
      }
      // if (!fields["blogHeaderImage"]) {
      //    formIsValid = false;
      //    errors["blogHeaderImage"] = "This field is required.";
      // }

      this.setState({
         errors: errors
      }, () => {
         if (Object.keys(errors).length !== 0) {
            Swal.fire("Validation Error", "One of the field needs some correction!", "error");
         }
         console.log("this.state.errors =187 ", this.state.errors);
      });

      return formIsValid;
   }


   handleUpdate = async (event) => {
      event.preventDefault();
      //console.log("this.state.urls",this.state.urls)
      if (this.validateForm()) {

         const string = this.state?.fields?.blogTitle.replace(/[^a-zA-Z0-9 ]/g, "");
         const url = encodeURIComponent(string.replace(/\s+/g, "-")).toLowerCase();
         
         const formData = new FormData();
         formData.append("user_id", this.state.fields.user_id);
         formData.append("blogTitle", this.state.fields.blogTitle);
         formData.append("blogURL", url);
         formData.append("blogSummary", this.state.fields.blogSummary);
         formData.append("blogHeaderImage", this.state.blogHeaderImage ? this.state.blogHeaderImage : this.state.fields.blogHeaderImage);
         formData.append("blogContent", this.state.fields.blogContent);
         formData.append("blog_id", this.state.blog_id,);

         const config = {
            headers: {
               'content-type': 'multipart/form-data'
            }
         };
         
         if(this.state?.blogHeaderImage){            
            try {
               const response = await axios({
                  url: "/api/blogs2/patch/update/blog1",
                  method: "post",
                  data: formData,
                  headers: {
                     "Content-Type": "multipart/form-data", // Set the Content-Type header
                  },
               });
               // console.log("response", response, response?.data?.blogDoc?.blogURL);
               if (typeof window !== "undefined") {
                  const blogURL = response?.data?.blogDoc?.blogURL;
                  const blogID = response?.data?.blogDoc?._id;
                  window.location.href = `/blogs/${blogURL}-${blogID}`;
               }
            } catch (error) {
               
               console.error("Error while submitting the blog:", error);
               Swal.fire(
                  "Blog could not be submitted successfully!",
                  error.message || "An error occurred.",
                  "error"
               );
            }
         }
         else{        
            if (this.props.blogDetails) {
               
               var formValues = {
                  user_id: this.state.fields.user_id,
                  blogTitle: this.state.fields.blogTitle,
                  blogSummary: this.state.fields.blogSummary,
                  blogContent: this.state.fields.blogContent,
                  blogURL: url,
                  blogHeaderImage: this.state.blogHeaderImage,
                  blog_id: this.state.blog_id,
               }
               // console.log("s.blogHeaderImage", this.state.blogHeaderImage)
               axios.patch("/api/blogs2/patch/update/blog", formValues)            
                  .then(res => {
                     // console.log("blog update res => ", res);
                     Swal.fire("Blog updated successfully", res.message, "success");
                     if (typeof window !== "undefined") {
                        window.location.href = "/blogs/" + res.data.blogDoc.blogURL + "-" + res.data.blogDoc._id;
                        window.location.assign("/blogs/" + res.data.blogDoc.blogURL + "-" + res.data.blogDoc._id);
                     }
                  })
                  .catch(error => {
                     //console.log("error => ",error);
                     Swal.fire("Blog could not be updated!", error.message, "error");
                  })
            }
         }

      } else {
         Swal.fire("Seems some validation issue", "Please correct the errors shown in below fields!", "error");
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

   handleFileChange(event) {
      var id = event.target.id;
      var valid = false;

      // console.log("id = ",id);

      for (var i = 0; i < event.target.files.length; i++) {
         var file = event.target.files[i];
         // console.log("file = ",file);
         if (file.type !== "image/png" && file.type !== "image/jpg" && file.type !== "image/jpeg") {
            valid = false;
            Swal.fire("Upload either PNG or JPE/JPEG types only", "Make sure size of image is appropriate", "error");
         } else if (file.size > 5000000) {
            valid = false;
            Swal.fire("Image size can't be greater than 5 MB", "Upload an image or a pdf having size less than 5 MB", "error");
         } else { valid = true; }
      }


      if (valid === true) {
         document.getElementById(id + "PH").style.display = 'none';
         var name = event.target.name;
         let fields = this.state.fields;
         fields[event.target.name] = event.target.value;
         this.setState({ fields },
            () => {
               // console.log("1 this.state.fields => ",this.state.fields)
            }
         );
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
         // console.log("filename = ",filename);

         const res = await fetch(`/api/upload-url?file=${filename}`, {
            headers: {
               'Content-Type': file.type,
               'Accept': 'application/json'
            }
         });
         // console.log("res = ",res);

         const { url, fields } = await res.json();
         const formData = new FormData();
         Object.entries({ ...fields, file }).forEach(([key, value]) => {
            formData.append(key, value);
         });

         const upload = await fetch(url, {
            method: 'POST',
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
            this.setState({
               urls: { ...this.state.urls, [id]: docArr },
               uploading: false
            }, () => {
               // console.log("*** this.state.urls => ",this.state.urls)
            })
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
      // console.log('event.target.name', event.target.name);
      fields['blogHeaderImage'] = '';
      this.setState({ fields }, () => {
         // console.log("1 this.state.fields => ", this.state.fields)
      });

   }

   onContentChange(event) {
      var newContent = event.editor.getData();

      let fields = this.state.fields;
      fields["blogContent"] = newContent;
      if (fields) {
         this.setState({ fields },
            () => {
               let errors = this.state.errors;
               if (this.state.fields.blogContent) {
                  errors["blogContent"] = "";
               } else {
                  errors["blogContent"] = 'This field is required';
               }
               this.setState({ errors });
               // console.log("this.state => ",this.state);
            }
         );
      }
   }

   onSummaryChange(event) {
      var newContent = event.editor.getData();

      let fields = this.state.fields;
      fields["blogSummary"] = newContent;
      if (fields) {
         this.setState({ fields },
            () => {
               let errors = this.state.errors;
               if (this.state.fields.blogSummary) {
                  errors["blogSummary"] = "";
               } else {
                  errors["blogSummary"] = 'This field is required';
               }
               this.setState({ errors });
               // console.log("this.state => ",this.state);
            }
         );
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
         <section className="xl:w-2/3 mt-20 lg:mt-32 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded lg:p-12 bg-white mx-auto md:flex-row h-auto items-center  my-10 " id="mainblk">
            <div className="block py-10 text-center text-2xl text-lightBlue sm:text-2xl lg:text-3xl xxl:text-4xls lg:leading-tight font-extrabold">Update Blog</div>
            <div className={"w-full mx-auto h-100 border bg-white"}>
               <form id="blogForm" className={"my-6 px-5  "}>
                  <div className="flex flex-row ">
                     <div className="lg:mr-3  w-full lg:w-1/2">
                        <label className="label">
                           Blog Title
                           <span className="asterik">*</span>
                        </label>
                        <div className=" relative">
                           {/* <label
                           htmlFor="hs-hero-name-2"
                           className="block text-sm font-medium dark:text-white"
                           >
                           <span className="sr-only">Blog Title</span>
                           </label> */}
                           <div className="insideIcon">
                              <i className="fa-regular fa-user w-5 h-5 mr-16"></i>
                           </div>
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
                           className="label block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                           htmlFor="blogCategory"
                        >
                           Blog Category <span className="asterik">*</span>
                        </label>
                        <select
                           className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  <div className=" w-full">
                     <label htmlFor="blogContent" className="label ">
                        Blog Summary<span className="asterik">*</span>
                     </label>
                     <div className="px-0">

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
                  <div className=" mt-4 ">
                     <label htmlFor="blogHeaderImage">Blog Header Image <span className="asterik">*</span></label>
                     <div className="">
                        {/* {console.log("this.state.fields.blogHeaderImage", this.state.fields)} */}
                        {
                           this.state.fields.blogHeaderImage
                              ?
                              <div className={" pl-0 mx-auto "}>
                                 <i className={"fa fa-times float-right "} id={"del"} onClick={this.delImage.bind(this)}></i>
                                 <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${this.state.fields.blogHeaderImage}`} className={"object-cover "} alt="blogHeaderImage" />
                              </div>

                              :
                              this.state.uploading
                                 ?
                                 <div className={" ml-3 uploadImgLoader "}>
                                    <i className={"fa fa-spinner fa-spin fa-2x "} aria-hidden="true"></i>
                                    <small className="mt-5 text-muted" style={{ position: "absolute" }}> Image Loading...</small>
                                 </div>
                                 :
                                 <div className={""}>
                                    <i className={" fa fa-plus uploadImgStyle"} ></i>
                                    <input
                                       type="file"
                                       // id="blogHeaderImage"
                                       name="blogHeaderImage"
                                       className={" "}
                                       accept=".png, .jpg, .jpeg"
                                       style={{ width: "300px", height: "35px" }}
                                       onChange={this.handleImageChange}
                                    />
                                    <div id="blogHeaderImagePH" className={" mt-2 "}>Upload your files</div>
                                    <div className="errorMsg w-full text-left pl-0 mt-2"><big>{this.state.errors.blogHeaderImage}</big></div>
                                 </div>
                        }
                     </div>
                  </div>
                  <div className=" mt-4 ">
                     {/* <label htmlFor="blogSummary">Image to insert in blog content</label> */}
                     <div className={" pl-0 imgBlock"}>
                        <div className="row">
                           {/* <div className="">
                              <i className={" "} ></i>
                              <input type="file" id="blogContentImage" name="blogContentImage" className={""}
                                 accept=".png, .jpg, .jpeg" onChange={this.handleFileChange.bind(this)} />
                              <div id="blogContentImagePH" className={"col-12 mt-1 text-center "}>Upload your image to generate its URL</div>
                           </div> */}
                           {/*<div className={"col-2"}>
                              <button onClick={this.Upload.bind(this)}  className={"col-12 btn btn-default "+Style.uploadBtn}>Upload</button>
                              </div>*/}
                           <div className={""}>
                              {
                                 this.state.urls.blogContentImage && this.state.urls.blogContentImage.length > 0
                                    ?
                                    <div>
                                       {
                                          this.state.urls.blogContentImage.map((elem, index) => {
                                             return (
                                                <div key={index} className="w-full"><small>{elem.url}</small> &nbsp;&nbsp; <span className="text-danger" role="button" id={index} onClick={this.removeImageURL.bind(this)}><big>&times;</big></span></div>
                                             )
                                          })
                                       }
                                       <div className="w-full mt-3 text-danger"><small> Copy this generated URL, click the image icon in content text area header and Paste the URL in that form. </small></div>
                                    </div>
                                    :
                                    <div></div>
                                 // <div className="mt-2"><small>If you want to use any image in blog content, upload it here and then copy the URL generated!</small></div>
                              }
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className=" mt-5">
                     <label htmlFor="blogContent">Blog Content<span className="redFont">*</span></label>
                     <div className="col-12 px-0">
                        <CKEditor activeclassName="p15" id="blogContent" className="" content={this.state.fields.blogContent} events={{ "change": this.onContentChange.bind(this) }} />
                        <div className="errorMsg col-12 text-left pl-0 mt-2">{this.state.errors.blogContent}</div>
                     </div>
                  </div>
                  <div className=" mt-10 mb-32">
                     <button onClick={this.handleUpdate.bind(this)} className="float-right  w-2/3 xl:w-1/4 stdBtn mb-10">Update</button>
                  </div>
                  <div className=" mt-20 border p-5 bg-light">
                     <small>
                        <b> Disclaimer : </b>
                        The views expressed in this Article / Blog / Write up are the matters of opinion
                        and shall not be construed as an advice issued. The views expressed are based on
                        the understanding of law and regulations prevailing at the date of writing this
                        Article and on the past experience of the Author. There can be no assurance that
                        the regulators may not take a position contrary to the views expressed herein.
                     </small>
                  </div>
               </form>
            </div>
         </section>
      );
   }
}


export default UpdateBlogForm;