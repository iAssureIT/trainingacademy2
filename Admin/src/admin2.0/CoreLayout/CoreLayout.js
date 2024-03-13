import React, { Component } from 'react';
import { connect }          from 'react-redux';
import withRouter           from '../common/withRouter.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import CenterwiseBarChart from '../dashboard/chart1/CenterwiseBarChart1.js'
import SourcewiseBarChart from '../dashboard/chart1/SourcewiseBarChart1.js'
import Chart1 from '../dashboard/chart1/chart1.js'
import Chart from '../dashboard/chart1/chart.js'
import CenterwiseBudget from '../dashboard/chart1/CenterwiseBudget.js'
import monthwiseCharts from '../dashboard/chart1/monthwiseCharts.js'

import Header from '../common/header/Header.js'
import ViewAllNotification from '../common/header/ViewAllNotifications.js'
import Footer from '../common/footer/Footer.js'
import Dashboard from '../dashboard/Dashboard.js'
import ComingSoon       from '../dashboard/ComingSoon.js'
import DashboardNew     from '../dashboard/DashboardNew.js'
import Leftsidebar      from '../common/leftSidebar/Leftsidebar.js';
import UMListOfUsers    from '../userManagement/UM/UMListOfUsers.js';
import DeletedUsers     from '../userManagement/UM/DeletedUsers.js';


import EditUserProfile  from '../userManagement/UM/EditUserProfile.js';
import UserProfile      from '../userManagement/UM/UserProfile.js';
import UMRolesList      from '../userManagement/Roles/Roles.js';
import UMRolesEntity    from '../userManagement/Roles/RolesEntity.js';
// import GlobalMasters    from '../companysetting/Components/GlobalMasters.js';
// import TechnicalMaster  from '../companysetting/Components/TechnicalMasters.js';
// import Preferences      from '../companysetting/Components/Preferences.js';
import ViewTemplates    from '../NotificationManagement/ViewTemplates.jsx';
// import EventMapping     from '../NotificationManagement/EventMapping.js';
import NotificationVariableList from '../NotificationManagement/NotificationVariableList.js';
import EventToken from '../NotificationManagement/EventToken.js';

class CoreLayout extends Component {
    render() {

        return (
            <Routes >
               
                <Route path="/CenterwiseBarChart" element={<CenterwiseBarChart/>} exact />
                <Route path="/SourcewiseBarChart" element={<SourcewiseBarChart/>} exact />
                <Route path="/Chart" element={<Chart/>} exact />
                <Route path="/monthwiseCharts" element={<monthwiseCharts/>} exact />
                <Route path="/CenterwiseBudget" element={<CenterwiseBudget/>} exact />
                <Route path="/Chart1" element={<Chart1/>} exact />
                <Route path="/" element={<Dashboard/>} exact />
                <Route path="/DashboardNew" element={<DashboardNew/>} exact />
                <Route path="/dashboard" element={<Dashboard/>} exact />
                <Route path="/coming_soon" element={<ComingSoon/>} exact />
                <Route path="/umlistofusers" element={<UMListOfUsers/>} exact />
                 <Route path="/DeletedUsers" element={<DeletedUsers/>} exact />
                <Route path="/umroleslist" element={<UMRolesList/>}strict exact />
                <Route path="/umroleslist/:fieldID" exact strict element={<UMRolesList/>} />
                <Route path="/umroleslist/oneField/:fieldID" exact strict element={<UMRolesList/>} /> 
              
                {/* <Route path="/edituserprofile/:id" element={<EditUserProfile/>} exact /> */}
                {/* <Route path="/profile/:id" element={<UserProfile/>} exact /> */}
                <Route path="/ViewTemplates" element={<ViewTemplates/>} exact />
                                
                <Route path="/NotificationVariableList" element={<NotificationVariableList/>} exact />
                <Route path="/ViewAllNotification" element={<ViewAllNotification/>} exact />
                <Route path="/EventToken" element={<EventToken/>} exact />


                
            </Routes>
        );
    }
}




const mapStateToProps = (state)=>{
    // console.log(" state on Dashboard corporate==> ",state)
    return {
      userDetails   : state.userDetails,
    }
  };
  
  
  const mapDispatchToProps = (dispatch)=>{
    return {
    }
  };
  
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CoreLayout));

