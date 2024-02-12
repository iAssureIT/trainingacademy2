"use client";
import React, { Component } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import moment from "moment";
moment.suppressDeprecationWarnings = true;

// import LoginModal          from  '../../systemSecurity/LoginModal.js';
import Swal from "sweetalert2";
import { FacebookIcon, FacebookShareButton, TwitterShareButton, WhatsappShareButton, LinkedinShareButton } from "react-share";

class DetailedBlogPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			progressBarWidth: 0,
			pbPosition: "absolute",
			pbTop: 0,
			user_id: "",
			blogData: {},
			profileImg: "",
			numOfBlogs: "3"
		};
	}
	componentDidMount() {
		var url = window.location.href;
		this.getBlogList();
		const userDetails = localStorage.getItem("userDetails");
		const userDetailsParse = JSON.parse(userDetails);
		axios
			.get("/api/blogs2/get/single-blog/" + this.props.blog_id)
			.then((blogData) => {
				// console.log("blogData", blogData);
				this.setState(
					{
						isLoading: false,
						blogData: blogData,
						blogSummary: blogData?.data?.blogSummary,
						blogContent: blogData?.data?.blogContent,
						createdAt: blogData?.data?.createdAt,
						shareUrl: url,
						user_id: userDetailsParse?.user_id,
						profileImg:
							this.props?.blogData &&
								this.props?.blogData?.createdBy &&
								this.props?.blogData?.createdBy?.documents &&
								this.props?.blogData?.createdBy?.documents?.profilePhoto.length >
								0 &&
								this.props?.blogData?.createdBy?.documents?.profilePhoto[0].url
								? this.props?.blogData?.createdBy?.documents?.profilePhoto[0]
									?.url
								: "/images/generic/noImage.jpg",

					},
					() => {
						// console.log("1 this.state.blogData => ", this.state.blogData)
						// console.log("createdAt => ", this.state.user_id)
					}
				);
			})
			.catch((error) => {
				//console.log("error => ",error);
				this.setState({ isLoading: false });
				Swal.fire(
					"Blog could not be submitted successfully!",
					error.message,
					"error"
				);
			});
		if (userDetails) {
			const userDetailsParse = JSON.parse(userDetails);

			if (
				this.props?.blogData?.usersLiked &&
				this.props.blogData?.usersLiked?.indexOf(userDetailsParse.user_id) > -1
			) {
				this.setState(
					{
						blogData: { ...this.props.blogData, isUserLike: true },
						shareUrl: url,
						user_id: userDetailsParse.user_id,
						profileImg:
							this.props.blogData &&
								this.props.blogData.createdBy &&
								this.props.blogData.createdBy.documents &&
								this.props.blogData.createdBy.documents.profilePhoto.length > 0 &&
								this.props.blogData.createdBy.documents.profilePhoto[0].url
								? this.props.blogData.createdBy.documents.profilePhoto[0].url
								: "/images/generic/noImage.jpg",
					},
					() => {
						// console.log("1 this.state.blogData => ", this.state.blogData);
						// console.log("2 this.state.user_id => ", this.state.user_id);
					}
				);
			} else {
				this.setState(
					{
						blogData: { ...this.props.blogData, isUserLike: false },
						shareUrl: url,
						user_id: userDetailsParse.user_id,
						profileImg:
							this.props.blogData &&
								this.props.blogData.createdBy &&
								this.props.blogData.createdBy.documents &&
								this.props.blogData.createdBy.documents.profilePhoto.length > 0 &&
								this.props.blogData.createdBy.documents.profilePhoto[0].url
								? this.props.blogData.createdBy.documents.profilePhoto[0].url
								: "/images/generic/noImage.jpg",
					},
					() => {
						// console.log("2 this.state.blogData => ", this.state.blogData);
					}
				);
			}
		} else {
			this.setState(
				{
					blogData: { ...this.props.blogData, isUserLike: false },
					shareUrl: url,
					user_id: 0,
					profileImg:
						this.props.blogData &&
							this.props.blogData.createdBy &&
							this.props.blogData.createdBy.documents &&
							this.props.blogData.createdBy.documents.profilePhoto.length > 0 &&
							this.props.blogData.createdBy.documents.profilePhoto[0].url
							? this.props.blogData.createdBy.documents.profilePhoto[0].url
							: "/images/generic/noImage.jpg",
				},
				() => {
					// console.log("3 this.state.blogData => ", this.state.blogData)
				}
			);
		}
		window.addEventListener("scroll", this.handleScroll);

		// var url = window.location.hostname+"/blogs/"+this.props.blogData.blogURL

		// console.log("url => ", url);
	}
	getBlogList() {
		// console.log("test", this.state.user_id);
		// axios.get("/api/blogs2/get/list/by-user_id/" + this.state.user_id)
		axios
			.get("/api/blogs2/get/list/" + this.state.numOfBlogs)
			// /get/list/:numOfBlogs
			.then((response) => {
				console.log("response", response);
				if (response.data) {
					this.setState({
						recentBlogData: response.data.data,
					});
				}
			})
			.catch(function (error) {
				console.log("error", error);
			});
	}
	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	handleScroll = (event) => {
		let scrollHeight = event.srcElement.body.scrollHeight - 800;
		let scrollWidth = event.srcElement.body.scrollWidth;
		let scrollY = window.scrollY;
		let windowHeight = screen.height;
		let progressBarWidth = parseInt((scrollY / scrollHeight) * scrollWidth);
		if (scrollY >= 74) {
			this.setState({ pbPosition: "fixed", pbTop: 0 });
		}
		if (scrollY < 74) {
			this.setState({ pbPosition: "absolute", pbTop: 75 });
		}

		this.setState({ progressBarWidth: progressBarWidth });
	};

	saveBlog = (event) => {
		var blog_id = event.target.getAttribute("id").split("-");
		// console.log("blog_id", blog_id)
		if (blog_id[1]) {
			var formValues = {
				user_id: this.state.user_id,
				blog_id: blog_id[1],
			};
			axios
				.patch("/api/blogs2/patch/blog", formValues)
				.then((updateData) => {
					if (updateData.data.success) {
						if (
							updateData.data.blogDetails.usersLiked &&
							updateData.data.blogDetails.usersLiked.indexOf(
								this.state.user_id
							) > -1
						) {
							this.setState(
								{
									blogData: {
										...updateData.data.blogDetails,
										isUserLike: true,
									},
								},
								() => {
									// console.log("this.state.blogData => ", this.state.blogData)
								}
							);
						} else {
							this.setState(
								{
									blogData: { ...this.state.blogData, isUserLike: false },
								},
								() => {
									// console.log("this.state.blogData => ", this.state.blogData)
								}
							);
						}
						//console.log("blogData==",this.state.blogData);
					} else {
						Swal.fire(
							"Some issue while saving blog!",
							updateData.data.error,
							"error"
						);
					}
				})
				.catch((error) => {
					console.log("Error => ", error);
				});
		}
	};

	deleteBlog = (event) => {
		const blog_id = event.currentTarget.id;
		// console.log("blog_id", blog_id);

		Swal.fire({
			title: "Are you sure you want to delete this blog?",
			text: "Once deleted, you won't be able to revert this action!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#0d2342",
			cancelButtonColor: "#ffD700",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				if (blog_id) {
					// console.log('del res blog_id : ', blog_id);
					axios
						.delete("/api/blogs2/delete/delete-blog/" + blog_id)
						.then((response) => {
							// console.log('del res : ', response);
							if (response.data.message === "Blog deleted Successfully") {
								if (typeof window !== "undefined") {
									// window.location.href = "/consultant/my-blogs";
									// window.location.assign("/consultant/my-blogs");
									Swal.fire(
										"Deleted!",
										"Blog has been deleted successfully!",
										"success"
									);
									window.location.assign("/blogs");
									window.location.href("/blogs");
								}
							}
						})
						.catch((error) => {
							Swal.fire(
								"Some Error Occured During Delete",
								error.message,
								"error"
							);
						});
				}
			}
		});
	};
	render() {
		return (
			<section className=" bg-white mt-32 md:mt-48 lg:mt-52  mx-4 lg:mx-2 xl:mx-12 2xl:mx-20   p-10" id="mainblk">
				<div
					style={{
						width: this.state.progressBarWidth,
						position: this.state.pbPosition,
						top: this.state.pbTop,
					}}
				></div>
				{/* {console.log(
          "this.state.blogData?.user_id",
          this.state.blogData?.data?.user_id,
          this.state.user_id
        )} */}
				<div className={"  "}>
					{this.state.blogData?.data?.user_id === this.state.user_id &&
						typeof this.state.blogData?.data?.user_id != "undefined" &&
						typeof this.state.user_id != "undefined" ? (
						<div className={"w-full h-10 pull-right px-0 lg:px-4 mb-3 "}>
							<i
								title="Delete Blog"
								className={"fa fa-trash float-right  hover:cursor-pointer"}
								onClick={this.deleteBlog}
								id={this.state.blogData?.data?._id}
							></i>
							<a
								title="Edit Blog"
								href={
									"/user/blogs/update-blogs/" + this.state.blogData?.data?._id
								}
							>
								{" "}
								<i
									className={
										"fa fa-pencil float-right mr-3 right hover:cursor-pointer"
									}
									aria-hidden="true"
								></i>{" "}
							</a>
						</div>
					) : null}
					<div className="flex flex-center  place-content-center">

						{/* <div className="w-5 text-right"  >
                     {
                        this.state.user_id === 0
                           ?
                           <Image src="/images/generic/heart.png" className={"absolute"} title="Click to BookMark This Blog" width={40} height={40} data-toggle="modal" data-target="#loginFormModal" data-backdrop="true" id="loginModal" area-hidden="true" />
                           :
                           this.state.blo*-gData.isUserLike
                              ?
                              <Image src="/images/generic/heart_fill.png" className={""} id={"btn-" + this.state.blogData?.data?._id} width={40} height={40} title="Click to Remove BookMark" onClick={this.saveBlog.bind(this)} />
                              :
                              <Image src="/images/generic/heart.png" className={""} id={"btn-" + this.state.blogData?.data?._id} width={40} height={40} title="Click to Add Bookmark" onClick={this.saveBlog.bind(this)} />
                     }
                  </div> */}
					</div>
					<div className="flex  gap-4">
						{/* <div className="flex-none w-14 px-2">
                     {console.log(" this.state.profileImg", this.state.profileImg)}
                     <img className={"lg:ml-2 bg-red rounded"} src={this.state.profileImg && this.state.profileImg !== "" ? this.state.profileImg : "/images/userProfile.png"} />
                  </div> */}

					</div>
					<div className="md:grid md:grid-cols-3 gap-10">
						<div className="md:col-span-2 ">
							{this.state.isLoading ? ( // Render loader if isLoading is true
								<div className="mt-10 mx-auto loader text-center">
									{/* Add your loader content here */}
									<img src="/images/specific/loader5.gif" className="mx-auto" alt="loader" />
								</div>
							) : (
								<div className=" mt-10 mx-auto">
									<img
										className="mx-auto rounded-lg w-auto md:w-full h-[400px]"
										alt="blogHeaderImage"
										src={
											this.state.blogData?.data?.blogHeaderImage
												? `${process.env.NEXT_PUBLIC_BASE_URL}${this.state.blogData?.data?.blogHeaderImage}`
												: "/images/generic/noImage.webp"
										}
									/>
								</div>
							)
							}
							<div
								className={
									" flex grow flex-col text-left  text-lg md:text-xl lg:text-[30px] xl:text-[40px] !leading-[1.32] font-bold mb-3 mt-6"
								}
							>
								{this.state?.blogData?.data?.blogTitle}
							</div>
							<div className="flex grow flex-row items-left gap-3  mt-3 justify-left ">

								<div
									className={" text-gray-500 "}
									style={{ display: "flex" }}
								>
									<i className={"fa fa-user mr-2 "}></i>
									<div className={"text-blue-700"}>
										<b>
											{this.state.blogData?.data?.createdBy &&
												this.state.blogData?.data?.createdBy.profile
												? this.state.blogData?.data?.createdBy?.profile.fullName
												: ""}
										</b>
									</div>
								</div>
								<div className={"text-sm text-lightGray"}>
									{moment(this.state?.createdAt).format("MMMM DD,  YYYY")}
								</div>
								<div className={"text-sm text-lightGray "}>
									{this.state.blogData?.data?.readingInMin >= 2
										? parseInt(this.state.blogData?.data?.readingInMin) - 1
										: this.state.blogData?.data?.readingInMin}{" "}
									min read
								</div>
								{/* <div className={"text-gray-500 my-1"} style={{ display: "flex", alignItems: "center" }}>
                        <i className={"fa fa-th-large mr-2 "} aria-hidden="true" ></i>
                        <div className={""}>{this.state.blogData?.data?.blogCategory}</div>
                     </div> */}
							</div>
							{/* <div
            className={"w-full mt-4 "}
            dangerouslySetInnerHTML={{ __html: this.state.blogSummary }}
          ></div> */}
							{/* <hr /> */}
							<div
								className={"w-full mt-6 blogContent "}
								dangerouslySetInnerHTML={{ __html: this.state.blogContent }}
							></div>
							<div className="float-right z-0 relative -right-7 mt-3 mainShareBtn ">
								<button class="  right-0 z-10 absolute bg-blue-700 border rounded-full p-2 opacity-100 hover:opacity-100 focus:outline-none focus:border-blue-400" title="click to enable menu">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="relative h-4 w-6 my-1 text-white">
										<path fill="currentColor" d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z">
										</path>
									</svg>
								</button>
								<div className=" sharebtn-dropdown  float-right right-0  absolute bottom-12 hidden">
									<FacebookShareButton url={this.state.shareUrl}>
										<i class="fa-brands fa-facebook-f px-3 py-2 mx-auto w-10 h-10 rounded-full border-2  text-white  bg-blue-700 hover:bg-white  hover:text-blue-700"></i>

									</FacebookShareButton>
									<WhatsappShareButton url={this.state.shareUrl} >
										{/* <img className={"mr-2 "} src="/images/generic/1.webp" /> */}
										<i class="fa-brands fa-whatsapp p-3 mx-auto text-white  bg-blue-700 hover:bg-white  hover:text-blue-700 rounded-full border-2"></i>
									</WhatsappShareButton>
									<TwitterShareButton url={this.state.shareUrl}>
										<i class="fa-brands fa-twitter p-3 mx-auto text-white  bg-blue-700 hover:bg-white  hover:text-blue-700 rounded-full border-2"></i>

										{/* <img className={"mr-2 "} src="/images/generic/twitter.png" /> */}
									</TwitterShareButton>
									<LinkedinShareButton url={this.state.shareUrl}>
										<i class="fa-brands fa-linkedin   text-white  bg-blue-700 hover:bg-white  hover:text-blue-700 p-3 my-auto  mx-auto rounded-full border-2"></i>
										{/* <img className={"mr-2 w-auto"} src="/images/generic/linkedin.png" /> */}
									</LinkedinShareButton>
								</div>
							</div>
							<hr className=" mx-auto my-2" />
						</div>
						<div>
							<div className="w-full mb-4">
								<ul className="place-content-center flex flex-wrap">
									<li className={"dash1 border-blue-700 mb-5 mt-10 md:mt-1 w-[10px] mr-1"}></li>
									<li className={"dash2 border-blue-700 mb-5 mt-10 md:mt-1 w-[25px] mr-1"}></li>
									<li className={"dash3 border-blue-700 mb-5 mt-10 md:mt-1 w-[10px] "}></li>
								</ul>
								<div className="text-center font-bold text-xl mb-10">Recent Posts</div>
								{this.state.recentBlogData && this.state.recentBlogData.length > 0
									?
									this.state.recentBlogData.map((data, i) => {
										return (
											<div key={i} className="grid grid-cols-3 my-10 gap-x-5 gap-y-32">
												<div className=""><img className="h-40 xl:h-20 2xl:h-24 w-full rounded-lg" src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.blogHeaderImage}`} /></div>
												<div className="col-span-2">
													<div className="font-bold ">
														<a href={"/blogs/" + data.blogURL + "-" + data?._id}
															target="_blank"
														>{data.blogTitle}</a>
													</div>
													<div className="text-sm text-lightGray mt-2">{moment(data?.createdAt).format(" MMMM DD, YYYY")}</div>
												</div>
											</div>
										)
									})
									:
									""
								}
							</div>
							<div></div>
						</div>
					</div>

				</div>
				{/* <LoginModal /> */}

			</section>
		);
	}
}

export default DetailedBlogPage;
