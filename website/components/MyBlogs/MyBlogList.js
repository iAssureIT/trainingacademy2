"use client";
import React, { Component } from "react";
import moment from "moment";
moment.suppressDeprecationWarnings = true;

import axios from "axios";

class MyBlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfBlogs: 10,
      pageNum: 1,
      sendItems: 8,
      mainTitle: this.props.mainTitle,
      writeBtn: this.props.writeBtn,
      categoryList: [
        "Taxation",
        "Finance",
        "Law",
        "Company Law",
        "Stock Markets",
        "Business",
        "Management",
        "Stamp Duty",
        "Mergers & Acquisitions",
        "Accounting",
        "Insurance",
        "Investment",
        "Income Tax",
        "GST",
        "Start-ups",
      ],
      showMore: false,
      isLoading: true,
    };
  }
  componentDidMount() {
    var userDetails = JSON.parse(localStorage.getItem("userDetails"));
    // console.log("userDetails", userDetails);
    this.getBlogList();
    if (userDetails) {
      this.setState(
        {
          user_id: userDetails.user_id,
        },
        () => {
          this.getBlogList();
        }
      );
    }
    // var pageHeight = document.body.scrollHeight > 500 ? document.body.scrollHeight : 500;
    //     console.log("pageHeight 29=> ", pageHeight);
  }
  onloadHeight = () => {
    if (process.browser) {
      var pageHeight =
        document.body.scrollHeight > 500 ? document.body.scrollHeight : 500;
      // console.log("pageHeight 33 => ", pageHeight);
      this?.props?.setPageHeight(pageHeight);
    } else {
      var le = document.getElementById("leftblk");
      var leftblk = window.getComputedStyle(le, null).height;
      var leftblkHeight = leftblk.substring(0, leftblk.length - 2);

      var re = document.getElementById("rightblk");
      var rightblk = window.getComputedStyle(re, null).height;
      var rightblkHeight = rightblk.substring(0, rightblk.length - 2);

      //console.log("leftblkHeight => ",leftblkHeight,"  | rightblkHeight => ",rightblkHeight);

      this.setState({ blkHeight: Math.max(leftblkHeight, rightblkHeight) });

      var pageHeight = Math.max(leftblkHeight, rightblkHeight) + 300;
      this.props.setPageHeight(pageHeight);
    }
  };

  getBlogList() {
    // console.log("test", this.state.user_id);
    // axios.get("/api/blogs2/get/list/by-user_id/" + this.state.user_id)
    axios
      .get("/api/blogs2/get/list/" + this.state.numOfBlogs)
      // /get/list/:numOfBlogs
      .then((response) => {
        // console.log("response", response);
        if (response.data) {
          this.setState({
            isLoading: false,
            blogData: response.data.data,
          });
        }
      })
      .catch(function (error) {
        this.setState({ isLoading: false });
        console.log("error", error);
      });
  }
  handleChange(event) {
    var value = event.currentTarget.value;
    var id = event.currentTarget.id;
    this.setState({ searchTxt: value });
  }
  handleSearchbyFilter(event) {
    // console.log("*** handleSearchbyFilter ***");

    if (process.browser) {
      var blogCategory = document.getElementById("category").value;
      var searchPhrase = document.getElementById("blogSearchBox").value;

      // console.log(
      //   "blogCategory => ",
      //   blogCategory,
      //   " | searchPhrase => ",
      //   searchPhrase
      // );

      if (searchPhrase === "") {
        searchPhrase = "*";
      }
      this.setState(
        {
          blogCategory: blogCategory,
          searchPhrase: searchPhrase,
          showMore: false,
          pageNum: 1,
        },
        () => {
          // console.log("this.state => ", this.state)
          this.getSearchData();
        }
      );
      // window.location.href = "/blogs/search-blogs/"+blogCategory+"/"+searchPhrase;
      // window.location.assign("/blogs/search-blogs/"+blogCategory+"/"+searchPhrase);
    }
  }

  getSearchData() {
    if (this.state.blogCategory !== "" && this.state.searchPhrase !== "") {
      var formValues = {
        category: this.state.blogCategory,
        searchPhrase: this.state.searchPhrase,
        pageNum: this.state.pageNum,
        sendItems: this.state.sendItems,
      };

      // console.log("formValues => ", formValues);

      if (this.state.blogCategory === "type") {
        var apiURL =
          "/api/blogs2/get/list/" +
          this.state.searchPhrase +
          "/" +
          this.state.sendItems +
          "/" +
          this.state.pageNum;
        var axiosSelector = {
          method: "get",
          url: apiURL,
        };
        // console.log("getSearchData axiosSelector => ", axiosSelector);
      } else {
        var apiURL = "/api/blogs2/search-blogs";
        var axiosSelector = {
          method: "post",
          url: apiURL,
          data: formValues,
        };
      }

      axios(axiosSelector)
        .then((blogData) => {
          // console.log("trending blogData => ", blogData);

          if (blogData.data.success) {
            if (this.state.showMore) {
              this.setState({
                noData: false,
                blogCount: blogData.data.blogCount,
                blogData: this.state.blogData.concat(blogData.data.blogList),
              });
            } else {
              this.setState({
                noData: false,
                blogCount: blogData.data.blogCount,
                blogData: blogData.data.blogList ? blogData.data.blogList : [],
              });
            }
          } else {
            if (this.state.showMore) {
              this.setState({
                blogCount: blogData.data.blogCount,
                blogData: blogData.data.blogList ? blogData.data.blogList : [],
                noData: false,
              });
            } else {
              this.setState({
                blogCount: blogData.data.blogCount,
                blogData: [],
                noData: true,
              });
            }
          }
        })
        .catch((error) => {
          console.log("searchBlogsCategory error => ", error);
          Swal.fire("Something went wrong", error.message, "error");
        });
    }
  }
  showMoreData = (event) => {
    this.setState(
      {
        showMore: true,
        pageNum: this.state.pageNum + 1,
      },
      () => {
        this.getData();
      }
    );
  };
  render() {
    return (
      <section>
        {
          <div>
            {this.props?.inputData?.dash ? (
              <div className="w-full mb-4">
                <ul className="place-content-center flex flex-wrap">
                  <li className={"dash1 " + this.props.inputData.dash}></li>
                  <li className={"dash2 " + this.props.inputData.dash}></li>
                  <li className={"dash3 " + this.props.inputData.dash}></li>
                </ul>
              </div>
            ) : null}
            {this.props?.inputData?.blockTitle ? (
              <div
                className={
                  this.props?.inputData?.classForblockTitle
                    ? this.props?.inputData?.classForblockTitle
                    : "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"
                }
                dangerouslySetInnerHTML={{ __html: this.props?.inputData?.blockTitle }}
              ></div>
            ) : null}
          </div>
        }
        {this.state.isLoading ? ( // Render loader if isLoading is true
								<div className="mt-10 mx-auto loader text-center">
									{/* Add your loader content here */}
									<img src="/images/specific/loader5.gif" className="mx-auto" />
								</div>
							) : (
        <div className={this?.props?.inputData?.mainCss?this?.props?.inputData?.mainCss:"main pt-20 lg:px-10 xl:px-16 2xl:px-12 bg-white"} id="mainblk">
          <div className={" grid grid-cols-2 md:grid-cols-5"}>
            <div className="block text-center mb-10 text-2xl text-lightBlue sm:text-2xl lg:text-3xl xxl:text-4xls lg:leading-tight font-extrabold ">
              {this.state.mainTitle}
            </div>
            {this.state.writeBtn ? (
              <button className="my-10 pull-right">
                <a
                  href="/user/blogs/create-new-blog"
                  className={"btn stdBtn mt-20"}
                >
                  <i className="fa fa-clock mr-2 " aria-hidden="true"></i>
                  {this.state.writeBtn}
                </a>
              </button>
            ) : null}
          </div>
          <div
          // className={
          //   "shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-5 lg:p-20  h-auto"
          // }
          >
            {/* <div className=" grid grid-cols-1 lg:grid-cols-3 mb-10">
                            <div className="lg:col-start-3 h-auto">
                                <label className="w-full text-left" forhtml="category">Search</label>
                                <div className="flex gap-5">
                                    <select className={"select flex-5 w-full "} id="category" name="category" placeholder="" autoComplete="off" onChange={this.handleSearchbyFilter.bind(this)}>
                                        <option value="*">-- All Categories --</option>
                                        {
                                            this.state.categoryList && this.state.categoryList.length > 0
                                                ?
                                                this.state.categoryList.map((data, i) => {
                                                    return (
                                                        <option key={i} value={data}>{data}</option>
                                                    );
                                                })
                                                :
                                                null
                                        }
                                    </select>
                                    <input type="text" maxLength="25" className={"formInput flex-10 searchplaceholder"}
                                            id="blogSearchBox" ref="blogSearchBox" name="blogSearchBox"
                                            placeholder="Author, Title, Article etc..." value={this.state.searchTxt} onChange={this.handleChange.bind(this)} />
                                    <div className="w-12">
                                        <button className={"bg-lightBlue rounded-md h-full text-gray-200 btn py-auto px-3 "} onClick={this.handleSearchbyFilter.bind(this)}><i className={"fa fa-search text-xl"} aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
            {/* {console.log("this.state.blogData", this.state.blogData)} */}
            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
              {this.state.blogData && this.state.blogData.length > 0 ? (
                this.state.blogData.map((data, index) => {
                  const words = data.blogSummary.split(" ");
                  const truncatedChar = words.slice(0, 100);
                  return (
                    <div className={" rounded-lg "} key={index}>
                      {console.log("Data 240===", data.blogURL)}
                      <div className={"px-0 shadow-lg rounded-xl pb-10 "}>
                        <div className={" mb-4 blogHImg relative hover:rounded-t-lg "}>
                          <a
                            className={"text-sm"}
                            href={"/blogs/" + data.blogURL + "-" + data?._id}
                            target="_blank"
                          >
                            <img
                              className={"  mb-2 mt-1 w-full h-60 rounded-t-lg"}
                              alt="blogHeaderImage"
                              src={
                                data?.blogHeaderImage
                                  ? `${process.env.NEXT_PUBLIC_BASE_URL}${data?.blogHeaderImage}`
                                  : "/images/generic/noImage.jpg"
                              }
                            />
                          </a>
                        </div>
                        <div className=" px-8 xl:px-8">
                          
                          <div className=" mt-2">
                            <h2
                              className={
                                "md:h-28 lg:h-44 xl:h-48 2xl:h-32  text-left mb-2 md:mb-5 md:mt-5 text-lg md:text-lg lg:text-xl xl:text-2xl tracking-normal text-gray-900 dark:text-white font-[500] hover:text-blue-600 cursor-pointer"
                              }
                            >
                              <a href={"/blogs/" + data.blogURL + "-" + data?._id}
                              target="_blank"
                            ><b>{data.blogTitle}</b></a>
                            </h2>
                          </div>
                          <p
                            className={
                              " text-left mb-6   leading-loose text-lightGray line-clamp-4 2xl:line-clamp-3"
                            }

                            dangerouslySetInnerHTML={{ __html: data.blogSummary }}
                          ></p>
                          {/* <p class="truncate w-96 bg-yellow-200 text-md p-4">{data.blogSummary }</p> */}
                          <hr className=" mx-auto" />
                          <div className={" mb-3 mt-3 text-left text-blue-600 font-[500] "}>
                              {data.userFullName}                          
                          </div>
                          <div className={"grid grid-cols-1"}>
                            <div className={"text-left text-lightGray "}>
                              {/* <i
                                className="fa fa-clock mr-2"
                                aria-hidden="true"
                              ></i> */}
                              {moment(data.createdAt).format(" LL")}
                            </div>
                            <div className={" text-right "}>
                              {data.duration ? data.duration : null}
                            </div>
                          </div>
                          
                          <div className={"text-right  mt-10"}>
                            <a
                              className={
                                "font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              }
                              href={"/blogs/" + data.blogURL + "-" + data?._id}
                              target="_blank"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div> No blogs added yet</div>
              )}
            </div>
          </div>
        </div>
              )
  }
      </section>
    );
  }
}
export default MyBlogList;
