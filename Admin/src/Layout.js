import React, { Component }                       from 'react';
import { connect }                                from 'react-redux';
import withRouter                                 from './admin2.0/common/withRouter.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// Section: 1 - SystemSecurity ******************************************************
import Login            from './admin2.0/systemSecurity/Login.js';
import ConfirmOtp       from './admin2.0/systemSecurity/ConfirmOtp.js';
import ForgotPassword   from './admin2.0/systemSecurity/ForgotPassword.js';
import ResetPassword    from './admin2.0/systemSecurity/ResetPassword.js';
import SignUp           from './admin2.0/systemSecurity/SignUp.js';
// Section: 2 - Common ******************************************************
import Header           from './admin2.0/common/header/Header.js'; 
import Footer           from './admin2.0/common/footer/Footer.js';
import Leftsidebar      from './admin2.0/common/leftSidebar/Leftsidebar.js';
import CoreLayout       from './admin2.0/CoreLayout/CoreLayout.js';
// Section: 3 - SEOPanel ******************************************************
import SEOPanel         from "./admin2.0/SEOPanel/SEOPanel.js";
import Dashboard         from "./admin2.0/dashboard/Dashboard.js";
class Layout extends Component  {

    constructor(props) {
        super();
        this.state = {
            loggedIn: false,
        }
    }

    componentDidMount() {
        const token = localStorage.getItem("token");
        const roles = localStorage.getItem("roles");
        if (token !== null && token !== "undefined") {
            this.setState({
                loggedIn: true,
                roles:roles
            })
        } else { }
    }

    logout() {
        var token = localStorage.removeItem("token");
        if (token !== null && token !== "undefined") {
            this.setState({
                loggedIn: false
            })
        }
    }

    render() {
        console.log("this.state.roles",this.state.roles)
        if(this.state.loggedIn) {
            return (
                <Router>
                {
                    this.state.roles!=='digitalmarketing'
                ?
                    <div className="hold-transition skin-blue fixed sidebar-mini">
                        <div className="content-wrapper">
                            <div className="wrapper">
                                <Header />
                                <div className="">
                                    <div className="row">
                                        <Leftsidebar/>
                                        <div className="container-fluid main-container">
                                            <div className="row">
                                                <div className="dashboardWrapper" >
                                                    <div className="backColor col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                                                    <CoreLayout />
                                                        <Routes >
                                                            <Route path="/dashboard"                                     element={<Dashboard /> } exact />
                                                            <Route path="/seo-panel"                            element={<SEOPanel /> } exact />
                                                            <Route path="/seo-panel/:editId"                    element={<SEOPanel /> } exact />
                                                        </Routes>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                :
                    <div className=" skin-blue sidebar-mini">
                        <div className="">
                            <Header />
                            <Routes >
                                <Route path="/"                                     element={<SEOPanel /> } exact />
                                <Route path="/seo-panel"                            element={<SEOPanel /> } exact />
                                <Route path="/seo-panel/:editId"                    element={<SEOPanel /> } exact />
                            </Routes >
                        </div>
                        <Footer />
                    </div>
                }
                </Router>
            );
        } else {
            return (
                <div>
                    <Router >
                        <Routes>
                            <Route path="/" exact strict element={<Login/>} />
                            <Route path="/login" exact strict element={<Login/>} />
                            <Route path="/signup" exact strict element={<SignUp/>} />
                            <Route path="/forgotpassword" exact strict element={<ForgotPassword/>} />
                            <Route path="/reset-pwd/:user_ID" exact strict element={<ResetPassword/>} />
                            <Route path="/confirm-otp/:userID" exact strict element={<ConfirmOtp/>} />
                        </Routes>
                    </Router>
                </div>
            );
        }
    }
}
export default Layout;