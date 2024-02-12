"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from 'react-select';
import { useParams }                   from 'next/navigation'
// import DataTable from "@/widgets/IAssureIT-Table/DataTable";
import Swal                            from "sweetalert2";


const CreateUser = () => {
  const [options, setOptions] = useState([]);
  const [users, setusers] = useState([]);
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({ 
    role: '', 
    firstname: '',
    lastname: '', 
    mobNumber: '', 
    email: '', 
  });
  const params = useParams()

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      // color: state.isSelected ? 'gray' : 'black',
    }),
    singleValue: (provided) => ({
      ...provided,
      // color: 'gray',
    }),
    control: (provided, state) => ({
      ...provided,
      // width: 250, // Set the width
      borderRadius: 4, // Set the border radius
      // borderColor: state.isFocused ? 'gray' : provided.borderColor,

      padding:1,
      // color:"gray-700",
      boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
      // borderWidth:"1px"
    }),
  };
  
  const fetchRoles = async () => {
    try {
      const response = await axios.get(
        `/api/roles/get/list`
      );
      const rolesData = response?.data;
      const formattedOptions = rolesData.map(role => ({
        value: role._id,
        label: role.role
      }));
      setOptions(formattedOptions);
      console.log("options",options)
    } catch (error) {
      console.error("Error while fetching:", error);
    }
  };

  useEffect(() => {
    fetchRoles();
    if (params?._id) {
      // console.log("params", params);
      axios
        .get("/api/users/get/" + params._id)
        .then((res) => {
          console.log("res.data one", res.data);
          setFormData({
            role: res.data.roles?.map((role)=> ({
              value: role._id,
              label: role.role
            })), 
            firstname: res.data.firstname,
            lastname: res.data.lastname, 
            mobNumber: res.data.mobile, 
            email: res.data.email, 
          });

        })
        .catch((error) => {
          console.log("Getting error", error);
          Swal.fire("Something went wrong!",error.message,"error");
        });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.username="EMAIL";
    formData.role=role.label;
    formData.pwd="Welcome@123";
    formData.status= "active",

    console.log("formData",formData)
    try {
      
      var  response =[]
      if(params._id){
        response = await axios.patch("/api/users/patch/"+params._id, formData);
        if(response.data.message==="USER_UPDATED"){
          Swal.fire(" ","User updated successfully");
        }else{
          Swal.fire(" ",response.data.message);
        }
        window.location.href = "/user/user-management/users-list";
      }else{
        response = await axios.post("/api/auth/post/signup/user", formData);
        console.log("response",response)
        if (response.data.message === 'Email Id already exits.') {
          Swal.fire({
            title: "Please enter mandatory fields",
            text: response.data.message,
          });
        } else {
          Swal.fire(" ", "User added successfully! \n Email Id: "+formData.email+"\n Default Password: "+"Welcome@123");

        }
      }
      setFormData({ 
        role: '', 
        firstname: '',
        lastname: '', 
        mobNumber: '', 
        email: '', 
      });
    } catch (error) {
      console.log("error = ", error);
      Swal.fire(
        "Something went wrong",
        error.message,
        "error"
      );
    }
  };

  return (
    <section className="px-5 w-full max-w-8xl sm:px-6 lg:px-0 bg-white h-auto py-5 pb-24 shadow-xl shadow-black-500/50">
      <div className="w-full h-auto pb-5 border-b border-gray-500 text-xl font-bold text-gray-800">
        <span className="mx-5">Add New User</span>
      </div>
      <div className="my-10 pb-10 w-4/6 mx-auto border">
        <form className="mx-auto my-10 w-full" onSubmit={handleSubmit}>
          <div className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0 w-full">
            <div className="my-2 mx-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                First Name
              </label>    
              <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                  placeholder="First Name"
                  onChange={handleChange}
                  value={formData.firstname}
              />
              <div id="nameError1" className={"errorMsg "}></div>
            </div>
            <div className="my-2 mx-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={formData.lastname}
              />
              <div id="nameError2" className={"errorMsg "}></div>
            </div>
            <div className="my-2 mx-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Mobile
              </label>
              <input
                  type="text"
                  id="mobNumber"
                  name="mobNumber"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                  placeholder="Mobile Number"
                  onChange={handleChange}
                  value={formData.mobNumber}
              />
              <div id="mobileError1" className={"errorMsg "}></div>
            </div>
            <div className="my-2 mx-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                  placeholder="Email ID"
                  onChange={handleChange}
                  value={formData.email}
              />
              <div id="emailError1" className={"errorMsg "}></div>
            </div>

            <div className="py-4 mx-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Role Name
              </label>
              <Select options={options} 
                value={role}
                onChange={setRole}
                styles={customStyles}/>
            </div>
          </div>
          <div className="my-2 mx-3 w-full float-right">
            <button
              type="submit"
              className="float-right mt-5 font-semibold px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
            >
              Create User Account
            </button>
          </div>
        </form>
      </div>

    </section>
  );
};

export default CreateUser;
