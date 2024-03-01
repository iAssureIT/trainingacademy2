/*==========================================================
  Developer  :  Sarika Ghanwat
  Date       :  5 Oct 2023
  ------------------------------------
  Reviewed By:  
  Review Date: 
==========================================================*/
"use client"
import React from 'react'
import axios from "axios";
import swal from "sweetalert2"; 
import Image from 'next/image'

export default class VideoBannerWithForm  extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
			btnLoading: false,
			"fullName": "",
			"email": "",
			"message": "",
			"mobile": "",
			blocks: {
				"blockTitle": this.props.blockTitle,
				"blockSubTitle": "",
				"blockDescription": "",
				"blockComponentName": "",
				"blockType": "",
				"bgImage": this.props.bgImage,
				"fgImage": this.props.fgImage,

				"repeatedBlocks": [

					{
						Title: "Sample 5",
						SubTitle: "",
						Image: "/images/4.png",
						Link: "",
						Description: ""
					}
				],

				"bgVideo": "",
				"fgVideo": "",
				"blockGroup": "",
				"blockAppearOnPage": ""
			},
			blockID: "",
			fgImage1: "/images/StaffAgum2.png",
			block_id: ""
		};
		this.handleChange = this.handleChange.bind(this);
		// console.log("Props => ", this.props)
	}
	handleChange(event) {
		event.preventDefault();
		// var name = event.target.name;
		// console.log("this.refs.name.value,0",this.refs.name.value);
		this.setState({
			[event.target.name]: event.target.value,
		}, () => {
			console.log("this.refs.name.value,0", this.state.name);
			console.log("this.refs.name.value,0", this.state.mobile);
			console.log("this.refs.name.value,0", this.state.email);
			console.log("this.refs.name.value,0", this.state.message);

		})

	}

    validateForm2 = () => {
		console.log("data=================");
		var status = true;
		var regSpaceName = /[a-zA-Z_]+$/;
		var tempEmail = this.state.email.trim(); // value of field with whitespace trimmed off
		var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
		var illegalChars = /[()<>,;:\\"[\]]/;
		var phoneno = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
		console.log("this.state.fullName",this.state)
		if (this.state.fullName.length <= 0) {
			console.log("this.state.name.length ", this.state.fullName.length)
			document.getElementById(nameError).innerHTML =
				"Please enter your Name";
			status = false;
		}
		if (!this.state.mobile.match(phoneno)) {
			document.getElementById(mobileError).innerHTML =
				"Please enter valid Mobile Number";
			status = false;
		}
		if (this.state.email.length <= 0) {
			document.getElementById(emailError).innerHTML =
				"Please enter your Email";
			status = false;
		} else if (!emailFilter.test(tempEmail)) {
			//test email for illegal characters
			document.getElementById(emailError).innerHTML =
				"Please enter a valid email address.";
			status = false;
		} else if (this.state.email.match(illegalChars)) {
			document.getElementById(emailError).innerHTML =
				"Email contains invalid characters.";
			status = false;
		}

		return status;
	}

	submit = (event) => {
		event.preventDefault();
		var adminEmail = "iassureitmail@gmail.com";
		if (this.validateForm2()) {
			if (
				(this.state.fullName != "") &&
				(this.state.email != "") &&
				(this.state.mobile != "")
			) {

				this.setState({ btnLoading: true });

				//============================================
				//  	Send Email to User
				//============================================
				const formValues1 = {
					"toEmail": this.state.email,
					"subject": "Your enquiry submitted to iAssure International Technologies Pvt Ltd",
					"message": "",
					"mail": 'Dear ' + this.state.fullName + ', <br/><br/>' +
						"<b>Your Email: </b>" + this.state.email + '<br/><br/>' +
						"Your following message has been successfully delivered to the admin! We will get back to you shortly. <br/> <br/> " +
						"===============================  <br/> <br/> " +
						"<pre> " + this.state.message + "</pre>" +
						" <br/> <br/> =============================== " +
						"<br/><br/> Thank You, <br/> Support Team, <br/> iAssure International Technologies Private Limited. ",
				};

				axios
					.post('/send-email', formValues1)
					.then((res) => {
						if (res) {
							console.log("notification1 => ", formValues1);
							console.log("response 1 => ", res.data);
							// Swal.fire({
							// 	html: "<span className='mt-5'><span>Thank you for contacting us.<span></br><span>We will get back to you shortly.</span></span>",
							// 	showCloseButton: true
							// })
						}
					})
					.catch((error) => {
						console.log("error =110 ", error);

					});




				//============================================
				//  	Send Email to Admin
				//============================================

				const formValues2 = {
					"toEmail": adminEmail,
					"subject": this.props.subject,
					"message": "",
					"mail": 'Dear Admin, <br/>' +
						"Following new lead came from website! <br/> <br/> " +
						"============================  <br/> <br/> " +
						"<b>Client Name: </b>" + this.state.fullName + '<br/>' +

						"<b>Client Email: </b>" + this.state.email + '<br/><br/>' +
						
						"<b>Client Phone: </b>" + this.state.mobile + '<br/><br/>' +
						
						"<pre> " + this.state.message + "</pre>" +
						"<br/><br/> ============================ " +
						"<br/><br/> This is a system generated email! ",

				};
				console.log("formValues2 => ", formValues2);
				axios
					.post('/send-email', formValues2)
					.then((res) => {
						console.log("res ", res);
						if (res.status === 200) {
							console.log("Mail Sent TO ADMIN successfully!")
							Swal.fire({
								html: "<span className='mt-5'><span>Thank you for contacting us.<span><br/><span>We will get back to you shortly.</span></span>",
								showCloseButton: true
							})

							this.setState({
								btnLoading: false,
								fullName: "",
								email: "",
								message: "",
								mobile: "",
							});
						}
					})
					.catch((error) => {
						console.log("error = ", error);
					});

			} else {
				Swal.fire("Please fill all fields correctly");
			}
		}
	}

    render(){
    return (
        <section className=' mb-[630px] xs:mb-[600px] sm:mb-[450px] md:mb-[330px] lg:mb-[100px] xl:mb-0' >
            <video id={this.props.inputData?.id} className={this.props.inputData?.class + ""} autoPlay loop muted>
                <source src={this.props.inputData?.videoUrl} type="video/mp4" />
            </video>
            {/* <div className='absolute top-0 right-0 mx-12 lg:right-32 xxl:p-20 md:w-1/3 lg:w-1/4 xl:w-1/3'> */}
			<div className='absolute top-0 w-full h-auto my-auto sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/4 sm:right-48 lg:right-32 xl:right-36 sm:mb-96'>
				<div className='mx-5 sm:mx-auto '>
				<img src={this.props.inputData.fgImage1} className={"mx-auto relative top-80 sm:top-48 md:top-56 lg:top-28 xl:top-32 2xl:top-60"} height={80}></img>
                        
                <div className='bg-white p-5 md:p-10 lg:p-4  xl:p-8 my-40 mt-64 sm:mt-32 md:mt-40 lg:mt-12 xl:mt-16 2xl:mt-44 rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                    <form>
                        <div className='mt-10 text-center'>
                            <h1 className='mb-3 text-xl font-bold lg:text-3xl ' >Request a Free Quote</h1>
                            <h6 className='mb-10 lg:text-sm xl:mb-5'>Guaranteed response within one business day!</h6>
                        </div>
                        <div className="relative mb-3">
                            <label htmlFor="fullName" className="block text-sm font-medium "><span className="sr-only">Full name</span></label>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                                <i className="w-5 h-5 mr-16 fa-regular fa-user"></i>
                            </div>
                            <input type="text" ref="fullName" id="fullName" value={this.state.fullName} name="fullName" placeholder="Name" className="formInput"  onChange={this.handleChange.bind(this)}/>
                            <div id="nameError" className={"errorMsg text-red-600"}></div>
                        </div>                    
                        

                        <div className="relative mb-3">
                            <label htmlFor="mobile" className="block text-sm font-medium " ><span className="sr-only">Email</span></label>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                                <i className="w-5 h-5 mr-16 fa fa-mobile"></i>
                            </div>
                            <input type="phone" id="mobile" name="mobile" className="formInput " placeholder="Mobile" value={this.state.mobile} onChange={this.handleChange.bind(this)}/>
                            <div id={"mobileError" } className={"errorMsg text-red-600"}></div>
                        </div>
                        <div className="relative mb-3">
                            <label htmlFor="hs-hero-email-2" className="block text-sm font-medium " ><span className="sr-only">Email</span></label>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                                <i className="w-5 h-5 mr-16 fa-regular fa-envelope"></i>
                            </div>
                            <input type="email" id="email"  name="email" className="formInput " placeholder="Email address" value={this.state.email} onChange={this.handleChange.bind(this)}/>
                            <div id={"emailError" } className={"errorMsg text-red-600"}></div>
                        </div>
                        <div className="relative mb-3">
                            <label htmlFor="hs-hero-message-2" className="block text-sm font-medium "><span className="sr-only">subject</span></label>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                                <i className="w-5 h-8 mr-16 fa-regular fa-pen-to-square"></i>
                            </div>
                            <textarea type="text" rows="4" cols="35" id="message" name="message" 
                                        refs="message" placeholder="Message"  value={this.state.message} 
                                    className="px-12 py-5 formInput "
                                     onChange={this.handleChange.bind(this)}>                            
                             </textarea>
                        </div>

                        <div className="grid">
                        {
                            this.state.btnLoading
                                ?
                                <button className="submitBtnForm ">Sending Message &nbsp;
                                <span><i className="fa fa-spin fa-spinner"></i></span></button>
                                :
                            <button type="button" className="text-white bg-blue-800 submitBtnForm" onClick={this.submit.bind(this)}>SUBMIT</button>
                        }</div>
                    </form>
                </div>
            	</div>
			</div>
        </section>
    )
    }
}
