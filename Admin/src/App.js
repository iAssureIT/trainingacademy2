import React from 'react';
import './admin2.0/css/root.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './lib/router.js';
import Layout from './Layout.js';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
// axios.defaults.baseURL = "http://localhost:3065"
// console.log("NotificationEvents => ",NotificationEvents);


axios.defaults.headers.post['Content-Type'] = 'application/json';
// console.log("process.env.REACT_APP_BASE_URL = ", axios.defaults.baseURL);
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

//======== eAdvisor =========

function App() {
  return (
    <div>
      <Layout />
    </div>
  ); 
}

export default App;
