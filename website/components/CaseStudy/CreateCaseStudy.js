"use client";
import React, { Component } from "react";
import CKEditor from "react-ckeditor-component";
import axios from "axios";
import Swal from "sweetalert2";
import Select from 'react-select';

class CreateCaseStudy extends Component {

	constructor(props) {
		super();
		this.state = {
			btnLoading: false,
			loggedIn: false,
			urls: {},
			fields: {
				projectName: "",
				service: "",
				projectDescription: "",
				bannerImage: "",
				smallBannerImage:"",
				bannerImageRILC1: "",
				smallBannerImageRILC1: "",
				leftContent1: "",
				rightImg1: "",
				bannerImg2: "",
				leftImg1: "",
				rightContent1: "",
				bannerImg3: "",
				leftImg2: "",
				rightContent2: "",
				leftContent2: "",
				rightImg2: "",
				leftImg4: "",
				rightContent3: "",
				bannerImg4: "",
				componentName: ""
			},
			componentList: [
				"leftImg1", "leftImg2", "rightImg1", "rightImg2", "banner2"
			],
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
		const userDetails = localStorage.getItem("userDetails");
		if (userDetails) {
			const userDetailsParse = JSON.parse(userDetails);
			this.setState({
				fields: { user_id: userDetailsParse.user_id },
			});
		}
	}


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

	handleImageChange = (stateKey, e) => {
		const file = e.target.files[0];
		console.log(stateKey, file);

		this.setState({ [stateKey]: file || null });
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


		if (!fields["projectName"]) {
			formIsValid = false;
			errors["projectName"] = "This field is required.";
		}
		if (!fields["projectDescription"]) {
			formIsValid = false;
			errors["projectDescription"] = "This field is required.";
		}

		// if (!fields["bannerImage"] || fields.bannerImage.length === 0) {
		//     formIsValid = false;
		//     errors["bannerImage"] = "This field is required.";
		// }
		this.setState(
			{
				errors: errors,
			},
			() => {
				if (Object.keys(errors).length !== 0) {
					Swal.fire(
						" ",
						"One of the field needs some correction!",
						// "error"
					);
				}
				console.log("this.state.errors = ", this.state.errors);
			}
		);

		return formIsValid;
	}
	handleSubmit = async (event) => {
		event.preventDefault();

		if (this.validateForm()) {
			const string = this.state?.fields?.projectName.replace(
				/[^a-zA-Z0-9 ]/g,
				""
			);
			const url = string.replace(/\s+/g, "-").toLowerCase();
			const formData = new FormData();
			formData.append("user_id", this.state.fields.user_id);
			formData.append("projectName", this.state.fields.projectName);
			formData.append("service", this.state.fields.service);
			formData.append("pageURL", url);
			formData.append("projectDescription", this.state.fields.projectDescription);
			formData.append("bannerImage", this.state.bannerImage);
			formData.append("smallBannerImage", this.state.smallBannerImage);
			formData.append("bannerImageRILC1", this.state.bannerImageRILC1);
			formData.append("smallBannerImageRILC1", this.state.smallBannerImageRILC1);
			formData.append("leftContent1", this.state.leftContent1);
			formData.append("rightImg1", this.state.rightImg1);
			formData.append("bannerImg2", this.state.bannerImg2);
			formData.append("smallBannerImg2", this.state.smallBannerImg2);
			formData.append("bannerImageLIRC1", this.state.bannerImageLIRC1);
			formData.append("smallBannerImageLIRC1", this.state.smallBannerImageLIRC1);
			formData.append("rightContent1", this.state.rightContent1);
			formData.append("leftImg1", this.state.leftImg1);
			formData.append("bannerImg3", this.state.bannerImg3);
			formData.append("smallBannerImg3", this.state.smallBannerImg3);
			formData.append("bannerImageLIRC2", this.state.bannerImageLIRC2);
			formData.append("smallBannerImageLIRC2", this.state.smallBannerImageLIRC2);
			formData.append("rightContent2", this.state.rightContent2);
			formData.append("leftImg2", this.state.leftImg2);
			formData.append("bannerImageRILC2", this.state.bannerImageRILC2);
			formData.append("smallBannerImageRILC2", this.state.smallBannerImageRILC2);
			formData.append("leftContent2", this.state.leftContent2);
			formData.append("rightImg2", this.state.rightImg2);

			formData.append("bannerImageLIRC3", this.state.bannerImageLIRC3);
			formData.append("smallBannerImageLIRC3", this.state.smallBannerImageLIRC3);
			formData.append("rightContent3", this.state.rightContent3);
			formData.append("leftImg4", this.state.leftImg4);
			formData.append("bannerImg4", this.state.bannerImg4);
			formData.append("smallBannerImg4", this.state.smallBannerImg4);

			this.setState({ submitted: true });
			const postUrl = "/api/casestudy/post";

			// Define the method based on the condition
			const method = "post";

			try {
				const response = await axios({
					url: "/api/casestudy/post",
					method: "post",
					data: formData,
					headers: {
						"Content-Type": "multipart/form-data", // Set the Content-Type header
					},
				});

				if (typeof window !== "undefined") {
					const pageURL = response.data.feedback.pageURL;
					const pageID = response.data.feedback._id;
					window.location.href = `/case-study/${pageURL}-${pageID}`;
					// window.location.href=`/case-study`

				}
			} catch (error) {

				console.error("Error while submitting the case study:", error);
				Swal.fire(
					"Case study could not be submitted successfully!",
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

	// delImage(event) {
	//   let fields = this.state.fields;
	//   this.setState({ blogHeaderImage: "" }, () => {

	//   });
	// }
	delImage = (fieldName) => {
		this.setState({ [fieldName]: "" }, () => {
		});
	}
	onDescriptionChange(event) {
		var newContent = event.editor.getData();

		let fields = this.state.fields;
		fields["projectDescription"] = newContent;
		if (fields) {
			this.setState({ fields }, () => {
				let errors = this.state.errors;
				if (this.state.fields.blogSummary) {
					errors["projectDescription"] = "";
				} else {
					errors["projectDescription"] = "This field is required";
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
		// console.log("this.state",this.state)
		return (
			<section
				className="xl:w-2/3  mx-auto md:flex-row  items-center my-12  md:my-10 "
				id="mainblk"
			>
				<div className={"w-full"}>
					<div className="text-center md:text-left block mt-10 mb-10 text-2xl text-lightBlue sm:text-2xl lg:text-3xl xxl:text-4xls lg:leading-tight font-extrabold">
						Insert Case Study
					</div>
				</div>

				<div
					className={
						"w-full mx-auto h-100 border border-exlightGray bg-white rounded xl:p-10 "
					}
				>
					<form id="caseStudyForm" className="my-6 px-5 ">
						<div className="flex flex-row ">
							<div className="mr-3 w-full">
								<label className="label">
									Project Name
									<span className="asterik">*</span>
								</label>
								<div className=" relative">
									<input
										type="text"
										maxLength=""
										className=" stdInput2"
										id="projectName"
										name="projectName"
										placeholder="Project Name"
										onChange={this.handleChange.bind(this)}
										value={this.state.fields.projectName}
									/>
									<div className="errorMsg col-12 text-left pl-0 mt-2">
										{this.state.errors.projectName}
									</div>
								</div>
							</div>
						</div>
						<div className="my-7  w-full ">
							<label htmlFor="projectDescription" className="label ">
								Services
							</label>
							<div className="px-0">
								<select
									id="service"
									name="service"
									className=" stdInput2"
									value={this.state.service}
									onChange={this.handleChange.bind(this)}
									required
								>
									<option value="">-- Select -- </option>
									<option value="Application Development">Application Development</option>
									<option value="Digital Transformation">Digital Transformation</option>
									<option value="Robotic Process Automation">Robotic Process Automation</option>
									<option value="IT Infrastructure Management">IT Infrastructure Management</option>
									<option value="Cyber Security">Cyber Security</option>
									<option value="Software Testing & QA">Software Testing & QA</option>
									<option value="Scalable Application">Scalable Application</option>
								</select>
								
							</div>
						</div>
						<div className="my-7  w-full">
							<label htmlFor="projectDescription" className="label ">
								Project Description
							</label>
							<div className="px-0">
								<input
									type="text"
									maxLength="200"
									className=" stdInput2"
									id="projectDescription"
									name="projectDescription"
									placeholder="Project Description "
									onChange={this.handleChange.bind(this)}
									value={this.state.fields.projectDescription}
								/>
								<CKEditor
									activeclassName="p15"
									id="projectDescription"
									name="projectDescription"
									className=""
									content={this.state.fields.projectDescription}
									events={{ change: this.onDescriptionChange.bind(this) }}
								/>
								
							</div>
						</div>

						<div className="w-full my-7">
							<div className="text-lg font-bold" htmlFor="projectDescription" >
								Banner - 1
							</div>
							<label htmlFor="BannerImage" className="label">
								Banner Image <span className="asterik">*</span>
							</label>

							{this.state.bannerImage ? (
								<div className={" pl-0 mx-auto  "}>
									{/* <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${this.state.blogHeaderImage}`} className={"w-full"} /> */}
									<div className="w-32 right-0 ml-32">
										<i
											className={"fa fa-times  delImgIcon "}
											id={"del"}
											onClick={() => this.delImage("bannerImage")}
										></i>
									</div>
									<img
										src={URL.createObjectURL(this.state.bannerImage)}
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
								<div className={""}>
									<input
										type="file"
										className="form-control"
										name="bannerImage"
										onChange={(e) => this.handleImageChange('bannerImage', e)}
										style={{ width: "300px", height: "35px" }}
									/>
									<div
										id="bannerImagePH"
										className={" mt-2  fileplaceholder"}
									>
										Upload your files
									</div>
									<div className="errorMsg text-left pl-0 mt-2">
										<big>{this.state.errors.bannerImage}</big>
									</div>
								</div>
							)}

							<label htmlFor="SmallBannerImage" className="label">
								Small Banner Image <span className="asterik">*</span>
							</label>

							{
								this.state.smallBannerImage ? (
									<div className={" pl-0 mx-auto  "}>
										{/* <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${this.state.blogHeaderImage}`} className={"w-full"} /> */}
										<div className="w-32 right-0 ml-32">
											<i
												className={"fa fa-times  delImgIcon "}
												id={"del"}
												onClick={() => this.delImage("smallBannerImage")}
											></i>
										</div>
										<img
											src={URL.createObjectURL(this.state.smallBannerImage)}
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
									<div className={""}>
										<input
											type="file"
											className="form-control"
											name="smallBannerImage"
											onChange={(e) => this.handleImageChange('smallBannerImage', e)}
											style={{ width: "300px", height: "35px" }}
										/>
										<div
											id="smallBannerImagePH"
											className={" mt-2  fileplaceholder"}
										>
											Upload your files
										</div>
										<div className="errorMsg text-left pl-0 mt-2">
											<big>{this.state.errors.smallBannerImage}</big>
										</div>
									</div>
								)
							}
						</div>
						<div className="w-full my-7">
							<div className="text-lg font-bold" htmlFor="projectDescription" >
								Right image left Content
							</div>
							
							<label htmlFor="BannerImage" className="label">
								Banner Image <span className="asterik">*</span>
							</label>
							{this.state.bannerImageRILC1 ? (
								<div className={" pl-0 mx-auto  "}>
									{/* <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${this.state.blogHeaderImage}`} className={"w-full"} /> */}
									<div className="w-32 right-0 ml-32">
										<i
											className={"fa fa-times  delImgIcon "}
											id={"del"}
											onClick={() => this.delImage("bannerImageRILC1")}
										></i>
									</div>
									<img
										src={URL.createObjectURL(this.state.bannerImageRILC1)}
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
								<div className={""}>
									<input
										type="file"
										className="form-control"
										name="bannerImageRILC1"
										onChange={(e) => this.handleImageChange('bannerImageRILC1', e)}
										style={{ width: "300px", height: "35px" }}
									/>
									<div
										id="bannerImageRILC1PH"
										className={" mt-2  fileplaceholder"}
									>
										Upload your files
									</div>
									<div className="errorMsg text-left pl-0 mt-2">
										<big>{this.state.errors.bannerImageRILC1}</big>
									</div>
								</div>
							)}
							<label htmlFor="SmallBannerImage" className="label">
								Small Banner Image <span className="asterik">*</span>
							</label>
							{
								this.state.smallBannerImageRILC1 ? (
									<div className={" pl-0 mx-auto  "}>
										{/* <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${this.state.blogHeaderImage}`} className={"w-full"} /> */}
										<div className="w-32 right-0 ml-32">
											<i
												className={"fa fa-times  delImgIcon "}
												id={"del"}
												onClick={() => this.delImage("smallBannerImageRILC1")}
											></i>
										</div>
										<img
											src={URL.createObjectURL(this.state.smallBannerImageRILC1)}
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
										</small> c
									</div>
								) : (
									<div className={""}>
										<input
											type="file"
											className="form-control"
											name="smallBannerImageRILC1"
											onChange={(e) => this.handleImageChange('smallBannerImageRILC1', e)}
											style={{ width: "300px", height: "35px" }}
										/>
										<div
											id="smallBannerImageRILC1PH"
											className={" mt-2  fileplaceholder"}
										>
											Upload your files
										</div>
										<div className="errorMsg text-left pl-0 mt-2">
											<big>{this.state.errors.smallBannerImageRILC1}</big>
										</div>
									</div>
								)
							}
							<label htmlFor="leftContent1" className="label ">
								Left Content
							</label>
							<input
								type="text"
								maxLength="200"
								className=" stdInput2"
								id="leftContent1"
								name="leftContent1"
								placeholder="leftContent1 "
								onChange={this.handleChange.bind(this)}
								value={this.state.fields.leftContent1}
							/>
							<label htmlFor="rightImg1" className="label">
								Right Image<span className="asterik">*</span>
							</label>
							{this.state.rightImg1 ? (
								<div className={" pl-0 mx-auto  "}>
									{/* <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${this.state.blogHeaderImage}`} className={"w-full"} /> */}
									<div className="w-32 right-0 ml-32">
										<i
											className={"fa fa-times  delImgIcon "}
											id={"del"}
											onClick={() => this.delImage("rightImg1")}
										></i>
									</div>
									<img
										src={URL.createObjectURL(this.state.rightImg1)}
										alt="Selected Image"
										className="h-32 w-32"
									/>
								</div>
							) : (

								<div className={""}>
									<input
										type="file"
										className="form-control"
										name="rightImg1"
										onChange={(e) => this.handleImageChange('rightImg1', e)}
										style={{ width: "300px", height: "35px" }}
									/>
									<div
										id="rightImg1PH"
										className={" mt-2  fileplaceholder"}
									>
										Upload your files
									</div>
								</div>
							)}
						</div>

						<div className="w-full my-7">
							<div className="text-lg font-bold"  >
								Banner - 2
							</div>
							<label htmlFor="bannerImg2" className="label">
								Banner Image<span className="asterik">*</span>
							</label>

							{this.state.bannerImg2 ? (
								<div className={" pl-0 mx-auto  "}>
									{/* <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${this.state.blogHeaderImage}`} className={"w-full"} /> */}
									<div className="w-32 right-0 ml-32">
										<i
											className={"fa fa-times  delImgIcon "}
											id={"del"}
											onClick={() => this.delImage("bannerImg2")}
										></i>
									</div>
									<img
										src={URL.createObjectURL(this.state.bannerImg2)}
										alt="Selected Image"
										className="h-32 w-32"
									/>
								</div>
							) : (
								<div className={""}>
									<input
										type="file"
										className="form-control"
										name="bannerImg2"
										onChange={(e) => this.handleImageChange('bannerImg2', e)}
										style={{ width: "300px", height: "35px" }}
									/>
									<div
										id="bannerImg2PH"
										className={" mt-2  fileplaceholder"}
									>
										Upload your files
									</div>
								</div>
							)}
							
							<label htmlFor="smallBannerImg2" className="label">
								Small Banner Image <span className="asterik">*</span>
							</label>
							{this.state.smallBannerImg2 ? (
								<div className={" pl-0 mx-auto  "}>
									{/* <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${this.state.blogHeaderImage}`} className={"w-full"} /> */}
									<div className="w-32 right-0 ml-32">
										<i
											className={"fa fa-times  delImgIcon "}
											id={"del"}
											onClick={() => this.delImage("smallBannerImg2")}
										></i>
									</div>
									<img
										src={URL.createObjectURL(this.state.smallBannerImg2)}
										alt="Selected Image"
										className="h-32 w-32"
									/>
								</div>
							) : (
								<div className={""}>
									<input
										type="file"
										className="form-control"
										name="smallBannerImg2"
										onChange={(e) => this.handleImageChange('smallBannerImg2', e)}
										style={{ width: "300px", height: "35px" }}
									/>
									<div
										id="smallBannerImg2PH"
										className={" mt-2  fileplaceholder"}
									>
										Upload your files
									</div>
								</div>
							)}
						</div>
						<div className="w-full my-7">
							<div className="text-lg font-bold" htmlFor="projectDescription" >
								Left image Right Content
							</div>
							<label htmlFor="BannerImageLIRC1" className="label">
								Banner Image <span className="asterik">*</span>
							</label>
							{this.state.bannerImageLIRC1 ? (
								<div className={" pl-0 mx-auto  "}>
									{/* <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${this.state.blogHeaderImage}`} className={"w-full"} /> */}
									<div className="w-32 right-0 ml-32">
										<i
											className={"fa fa-times  delImgIcon "}
											id={"del"}
											onClick={() => this.delImage("bannerImageLIRC1")}
										></i>
									</div>
									<img
										src={URL.createObjectURL(this.state.bannerImageLIRC1)}
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
								<div className={""}>
									<input
										type="file"
										className="form-control"
										name="bannerImageLIRC1"
										onChange={(e) => this.handleImageChange('bannerImageLIRC1', e)}
										style={{ width: "300px", height: "35px" }}
									/>
									<div
										id="bannerImageLIRC1PH"
										className={" mt-2  fileplaceholder"}
									>
										Upload your files
									</div>
									<div className="errorMsg text-left pl-0 mt-2">
										<big>{this.state.errors.bannerImageLIRC1}</big>
									</div>
								</div>
							)}
							<label htmlFor="SmallBannerImage" className="label">
								Small Banner Image <span className="asterik">*</span>
							</label>
							{
								this.state.smallBannerImageLIRC1 ? (
									<div className={" pl-0 mx-auto  "}>
										{/* <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${this.state.blogHeaderImage}`} className={"w-full"} /> */}
										<div className="w-32 right-0 ml-32">
											<i
												className={"fa fa-times  delImgIcon "}
												id={"del"}
												onClick={() => this.delImage("smallBannerImageLIRC1")}
											></i>
										</div>
										<img
											src={URL.createObjectURL(this.state.smallBannerImageLIRC1)}
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
										</small> c
									</div>
								) : (
									<div className={""}>
										<input
											type="file"
											className="form-control"
											name="smallBannerImageLIRC1"
											onChange={(e) => this.handleImageChange('smallBannerImageLIRC1', e)}
											style={{ width: "300px", height: "35px" }}
										/>
										<div
											id="smallBannerImageLIRC1PH"
											className={" mt-2  fileplaceholder"}
										>
											Upload your files
										</div>
										<div className="errorMsg text-left pl-0 mt-2">
											<big>{this.state.errors.smallBannerImageLIRC1}</big>
										</div>
									</div>
								)
							}

							<label htmlFor="rightContent1" className="label ">
								Right Content1
							</label>
							<input
								type="text"
								maxLength="200"
								className=" stdInput2"
								id="rightContent1"
								name="rightContent1"
								placeholder="rightContent1 "
								onChange={this.handleChange.bind(this)}
								value={this.state.fields.rightContent1}
							/>
							<label htmlFor="leftImg1" className="label">
								Left Image1<span className="asterik">*</span>
							</label>

							{this.state.leftImg1 ? (
								<div className={" pl-0 mx-auto  "}>
									{/* <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${this.state.blogHeaderImage}`} className={"w-full"} /> */}
									<div className="w-32 right-0 ml-32">
										<i
											className={"fa fa-times  delImgIcon "}
											id={"del"}
											onClick={() => this.delImage("leftImg1")}
										></i>
									</div>
									<img
										src={URL.createObjectURL(this.state.leftImg1)}
										alt="Selected Image"
										className="h-32 w-32"
									/>
								</div>
							) : (
								<div className={""}>
									<input
										type="file"
										className="form-control"
										name="leftImg1"
										onChange={(e) => this.handleImageChange('leftImg1', e)}
										style={{ width: "300px", height: "35px" }}
									/>
									<div
										id="leftImg1PH"
										className={" mt-2  fileplaceholder"}
									>
										Upload your files
									</div>
								</div>
							)}
						</div>
						<div className="w-full my-7">
							<div className="text-lg font-bold"  >
								Banner - 3
							</div>
							<label htmlFor="bannerImg3" className="label">
								Banner Image<span className="asterik">*</span>
							</label>

							{this.state.bannerImg3 ? (
								<div className={" pl-0 mx-auto  "}>
									{/* <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${this.state.blogHeaderImage}`} className={"w-full"} /> */}
									<div className="w-32 right-0 ml-32">
										<i
											className={"fa fa-times  delImgIcon "}
											id={"del"}
											onClick={() => this.delImage("bannerImg3")}
										></i>
									</div>
									<img
										src={URL.createObjectURL(this.state.bannerImg3)}
										alt="Selected Image"
										className="h-32 w-32"
									/>
								</div>
							) : (
								<div className={""}>
									<input
										type="file"
										className="form-control"
										name="bannerImg3"
										onChange={(e) => this.handleImageChange('bannerImg3', e)}
										style={{ width: "300px", height: "35px" }}
									/>
									<div
										id="bannerImg3PH"
										className={" mt-2  fileplaceholder"}
									>
										Upload your files
									</div>
								</div>
							)}
							
							<label htmlFor="smallBannerImg3" className="label">
								Small Banner Image<span className="asterik">*</span>
							</label>

							{this.state.smallBannerImg3 ? (
								<div className={" pl-0 mx-auto  "}>
									{/* <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${this.state.blogHeaderImage}`} className={"w-full"} /> */}
									<div className="w-32 right-0 ml-32">
										<i
											className={"fa fa-times  delImgIcon "}
											id={"del"}
											onClick={() => this.delImage("smallBannerImg3")}
										></i>
									</div>
									<img
										src={URL.createObjectURL(this.state.smallBannerImg3)}
										alt="Selected Image"
										className="h-32 w-32"
									/>
								</div>
							) : (
								<div className={""}>
									<input
										type="file"
										className="form-control"
										name="smallBannerImg3"
										onChange={(e) => this.handleImageChange('smallBannerImg3', e)}
										style={{ width: "300px", height: "35px" }}
									/>
									<div
										id="smallBannerImg3PH"
										className={" mt-2  fileplaceholder"}
									>
										Upload your files
									</div>
								</div>
							)}
						</div>
						<div className="w-full my-7">
							<div className="text-lg font-bold" >
								Left image Right Content2
							</div>
							<label htmlFor="bannerImageLIRC2" className="label">
								Banner Image <span className="asterik">*</span>
							</label>
							{this.state.bannerImageLIRC2 ? (
								<div className={" pl-0 mx-auto  "}>
									{/* <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${this.state.blogHeaderImage}`} className={"w-full"} /> */}
									<div className="w-32 right-0 ml-32">
										<i
											className={"fa fa-times  delImgIcon "}
											id={"del"}
											onClick={() => this.delImage("bannerImageLIRC2")}
										></i>
									</div>
									<img
										src={URL.createObjectURL(this.state.bannerImageLIRC2)}
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
								<div className={""}>
									<input
										type="file"
										className="form-control"
										name="bannerImageLIRC2"
										onChange={(e) => this.handleImageChange('bannerImageLIRC2', e)}
										style={{ width: "300px", height: "35px" }}
									/>
									<div
										id="bannerImageLIRC2PH"
										className={" mt-2  fileplaceholder"}
									>
										Upload your files
									</div>
									<div className="errorMsg text-left pl-0 mt-2">
										<big>{this.state.errors.bannerImageLIRC2}</big>
									</div>
								</div>
							)}
							<label htmlFor="SmallBannerImageLIRC2" className="label">
								Small Banner Image <span className="asterik">*</span>
							</label>
							{
								this.state.smallBannerImageLIRC2 ? (
									<div className={" pl-0 mx-auto  "}>
										{/* <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${this.state.blogHeaderImage}`} className={"w-full"} /> */}
										<div className="w-32 right-0 ml-32">
											<i
												className={"fa fa-times  delImgIcon "}
												id={"del"}
												onClick={() => this.delImage("smallBannerImageLIRC2")}
											></i>
										</div>
										<img
											src={URL.createObjectURL(this.state.smallBannerImageLIRC2)}
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
										</small> c
									</div>
								) : (
									<div className={""}>
										<input
											type="file"
											className="form-control"
											name="smallBannerImageLIRC2"
											onChange={(e) => this.handleImageChange('smallBannerImageLIRC2', e)}
											style={{ width: "300px", height: "35px" }}
										/>
										<div
											id="smallBannerImageLIRC2PH"
											className={" mt-2  fileplaceholder"}
										>
											Upload your files
										</div>
										<div className="errorMsg text-left pl-0 mt-2">
											<big>{this.state.errors.smallBannerImageLIRC2}</big>
										</div>
									</div>
								)
							}

							<label htmlFor="rightContent2" className="label ">
								Right Content2
							</label>
							<input
								type="text"
								maxLength="200"
								className=" stdInput2"
								id="rightContent2"
								name="rightContent2"
								placeholder="rightContent2 "
								onChange={this.handleChange.bind(this)}
								value={this.state.fields.rightContent2}
							/>
							<label htmlFor="leftImg2" className="label">
								Left Image2<span className="asterik">*</span>
							</label>

							{this.state.leftImg2 ? (
								<div className={" pl-0 mx-auto  "}>
									<div className="w-32 right-0 ml-32">
										<i
											className={"fa fa-times  delImgIcon "}
											id={"del"}
											onClick={() => this.delImage("leftImg2")}
										></i>
									</div>
									<img
										src={URL.createObjectURL(this.state.leftImg2)}
										alt="Selected Image"
										className="h-32 w-32"
									/>
								</div>
							) : (

								<div className={""}>
									<input
										type="file"
										className="form-control"
										name="leftImg2"
										onChange={(e) => this.handleImageChange('leftImg2', e)}
										style={{ width: "300px", height: "35px" }}
									/>
									<div
										id="leftImg2PH"
										className={" mt-2  fileplaceholder"}
									>
										Upload your files
									</div>
								</div>
							)}
						</div>
						<div className="w-full my-7">
							<div className="text-lg font-bold"  >
								Right Image Left Content 2
							</div> 
							<label htmlFor="BannerImageRILC2" className="label">
								Banner Image <span className="asterik">*</span>
							</label>
							{this.state.bannerImageRILC2 ? (
								<div className={" pl-0 mx-auto  "}>
									{/* <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${this.state.blogHeaderImage}`} className={"w-full"} /> */}
									<div className="w-32 right-0 ml-32">
										<i
											className={"fa fa-times  delImgIcon "}
											id={"del"}
											onClick={() => this.delImage("bannerImageRILC2")}
										></i>
									</div>
									<img
										src={URL.createObjectURL(this.state.bannerImageRILC2)}
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
								<div className={""}>
									<input
										type="file"
										className="form-control"
										name="bannerImageRILC2"
										onChange={(e) => this.handleImageChange('bannerImageRILC2', e)}
										style={{ width: "300px", height: "35px" }}
									/>
									<div
										id="bannerImageRILC2PH"
										className={" mt-2  fileplaceholder"}
									>
										Upload your files
									</div>
									<div className="errorMsg text-left pl-0 mt-2">
										<big>{this.state.errors.bannerImageRILC2}</big>
									</div>
								</div>
							)}
							<label htmlFor="SmallBannerImage" className="label">
								Small Banner Image <span className="asterik">*</span>
							</label>
							{
								this.state.smallBannerImageRILC2 ? (
									<div className={" pl-0 mx-auto  "}>
										{/* <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${this.state.blogHeaderImage}`} className={"w-full"} /> */}
										<div className="w-32 right-0 ml-32">
											<i
												className={"fa fa-times  delImgIcon "}
												id={"del"}
												onClick={() => this.delImage("smallBannerImageRILC2")}
											></i>
										</div>
										<img
											src={URL.createObjectURL(this.state.smallBannerImageRILC2)}
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
										</small> c
									</div>
								) : (
									<div className={""}>
										<input
											type="file"
											className="form-control"
											name="smallBannerImageRILC2"
											onChange={(e) => this.handleImageChange('smallBannerImageRILC2', e)}
											style={{ width: "300px", height: "35px" }}
										/>
										<div
											id="smallBannerImageRILC2PH"
											className={" mt-2  fileplaceholder"}
										>
											Upload your files
										</div>
										<div className="errorMsg text-left pl-0 mt-2">
											<big>{this.state.errors.smallBannerImageRILC2}</big>
										</div>
									</div>
								)
							}
							<label htmlFor="leftContent2" className="label ">
								Left Content2
							</label>
							<input
								type="text"
								maxLength="200"
								className=" stdInput2"
								id="leftContent2"
								name="leftContent2"
								placeholder="leftContent2 "
								onChange={this.handleChange.bind(this)}
								value={this.state.fields.leftContent2}
							/>
							<label htmlFor="rightImg2" className="label">
								Right Image2<span className="asterik">*</span>
							</label>

							{this.state.rightImg2 ? (
								<div className={" pl-0 mx-auto  "}>
									<div className="w-32 right-0 ml-32">
										<i
											className={"fa fa-times  delImgIcon "}
											id={"del"}
											onClick={() => this.delImage("rightImg2")}
										></i>
									</div>
									<img
										src={URL.createObjectURL(this.state.rightImg2)}
										alt="Selected Image"
										className="h-32 w-32"
									/>
								</div>
							) : (

								<div className={""}>
									<input
										type="file"
										className="form-control"
										name="rightImg2"
										onChange={(e) => this.handleImageChange('rightImg2', e)}
										style={{ width: "300px", height: "35px" }}
									/>
									<div
										id="rightImg2PH"
										className={" mt-2  fileplaceholder"}
									>
										Upload your files
									</div>
								</div>
							)}
						</div>
						<div className="w-full my-7">
							<div className="text-lg font-bold" htmlFor="projectDescription" >
								Left Image Right Content 3
							</div>
							
							<label htmlFor="BannerImageLIRC3" className="label">
								Banner Image <span className="asterik">*</span>
							</label>
							{this.state.bannerImageLIRC3 ? (
								<div className={" pl-0 mx-auto  "}>
									{/* <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${this.state.blogHeaderImage}`} className={"w-full"} /> */}
									<div className="w-32 right-0 ml-32">
										<i
											className={"fa fa-times  delImgIcon "}
											id={"del"}
											onClick={() => this.delImage("bannerImageLIRC3")}
										></i>
									</div>
									<img
										src={URL.createObjectURL(this.state.bannerImageLIRC3)}
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
								<div className={""}>
									<input
										type="file"
										className="form-control"
										name="bannerImageLIRC3"
										onChange={(e) => this.handleImageChange('bannerImageLIRC3', e)}
										style={{ width: "300px", height: "35px" }}
									/>
									<div
										id="bannerImageLIRC3PH"
										className={" mt-2  fileplaceholder"}
									>
										Upload your files
									</div>
									<div className="errorMsg text-left pl-0 mt-2">
										<big>{this.state.errors.bannerImageLIRC3}</big>
									</div>
								</div>
							)}
							<label htmlFor="SmallBannerImage" className="label">
								Small Banner Image <span className="asterik">*</span>
							</label>
							{
								this.state.smallBannerImageLIRC3 ? (
									<div className={" pl-0 mx-auto  "}>
										{/* <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${this.state.blogHeaderImage}`} className={"w-full"} /> */}
										<div className="w-32 right-0 ml-32">
											<i
												className={"fa fa-times  delImgIcon "}
												id={"del"}
												onClick={() => this.delImage("smallBannerImageLIRC3")}
											></i>
										</div>
										<img
											src={URL.createObjectURL(this.state.smallBannerImageLIRC3)}
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
										</small> c
									</div>
								) : (
									<div className={""}>
										<input
											type="file"
											className="form-control"
											name="smallBannerImageLIRC3"
											onChange={(e) => this.handleImageChange('smallBannerImageLIRC3', e)}
											style={{ width: "300px", height: "35px" }}
										/>
										<div
											id="smallBannerImageLIRC3PH"
											className={" mt-2  fileplaceholder"}
										>
											Upload your files
										</div>
										<div className="errorMsg text-left pl-0 mt-2">
											<big>{this.state.errors.smallBannerImageLIRC3}</big>
										</div>
									</div>
								)
							}
							<label htmlFor="rightContent3" className="label ">
								Right Content
							</label>
							<input
								type="text"
								maxLength="200"
								className=" stdInput2"
								id="rightContent3"
								name="rightContent3"
								placeholder="rightContent3 "
								onChange={this.handleChange.bind(this)}
								value={this.state.fields.rightContent3}
							/>
							<label htmlFor="leftImg4" className="label">
								Left Image
							</label>
							{this.state.leftImg4 ? (
								<div className={" pl-0 mx-auto  "}>
									<div className="w-32 right-0 ml-32">
										<i
											className={"fa fa-times  delImgIcon "}
											id={"del"}
											onClick={() => this.delImage("leftImg4")}
										></i>
									</div>
									<img
										src={URL.createObjectURL(this.state.leftImg4)}
										alt="Selected Image"
										className="h-32 w-32"
									/>
								</div>
							) : (
								<div className={""}>
									<input
										type="file"
										className="form-control"
										name="leftImg4"
										onChange={(e) => this.handleImageChange('leftImg4', e)}
										style={{ width: "300px", height: "35px" }}
									/>
									<div
										id="leftImg4PH"
										className={" mt-2  fileplaceholder"}
									>
										Upload your files
									</div>
								</div>
							)}
						</div>
						<div className="w-full my-7">
							<div className="text-lg font-bold"  >
								Banner - 4
							</div>
							<label htmlFor="bannerImg4" className="label">
								Banner Image
							</label>

							{this.state.bannerImg4 ? (
								<div className={" pl-0 mx-auto  "}>
									<div className="w-32 right-0 ml-32">
										<i
											className={"fa fa-times  delImgIcon "}
											id={"del"}
											onClick={() => this.delImage("bannerImg4")}
										></i>
									</div>
									<img
										src={URL.createObjectURL(this.state.bannerImg4)}
										alt="Selected Image"
										className="h-32 w-32"
									/>
								</div>
							) : (
								<div className={""}>
									<input
										type="file"
										className="form-control"
										name="bannerImg4"
										onChange={(e) => this.handleImageChange('bannerImg4', e)}
										style={{ width: "300px", height: "35px" }}
									/>
									<div
										id="bannerImg4PH"
										className={" mt-2  fileplaceholder"}
									>
										Upload your files
									</div>
								</div>
							)}
							<label htmlFor="smallBannerImg4" className="label">
								Small Banner Image
							</label>

							{this.state.smallBannerImg4 ? (
								<div className={" pl-0 mx-auto  "}>
									<div className="w-32 right-0 ml-32">
										<i
											className={"fa fa-times  delImgIcon "}
											id={"del"}
											onClick={() => this.delImage("smallBannerImg4")}
										></i>
									</div>
									<img
										src={URL.createObjectURL(this.state.smallBannerImg4)}
										alt="Selected Image"
										className="h-32 w-32"
									/>
								</div>
							) : (
								<div className={""}>
									<input
										type="file"
										className="form-control"
										name="smallBannerImg4"
										onChange={(e) => this.handleImageChange('smallBannerImg4', e)}
										style={{ width: "300px", height: "35px" }}
									/>
									<div
										id="smallBannerImg4PH"
										className={" mt-2  fileplaceholder"}
									>
										Upload your files
									</div>
								</div>
							)}
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
					</form>
				</div>
			</section>
		);
	}
}
export default CreateCaseStudy;
{/* <div className="w-1/2">
                <label
                  className="label "
                  htmlFor="componentName"
                >
                  Select Component <span className="asterik">*</span>
                </label>
                <select
                  className="w-full bg-gray-50 border border-exlightGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="componentName"
                  name="componentName"
                  onChange={this.handleChange.bind(this)}
                  autoComplete="off"
                  value={
                    this.state.fields.componentName
                      ? this.state.fields.componentName
                      : ""
                  }
                >
                  <option value="">--Select Component--</option>
                  {this.state.componentList && this.state.componentList.length > 0
                    ? this.state.componentList.map((data, i) => {
                      return (
                        <option key={i} value={data}>
                          {data}
                        </option>
                      );
                    })
                    : "null"}
                </select>
              </div> */}