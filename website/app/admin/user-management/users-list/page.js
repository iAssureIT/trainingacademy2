"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from 'react-select';
import { useParams }                   from 'next/navigation'
import DataTable from "@/widgets/IAssureIT-Table/DataTable";
import Swal                            from "sweetalert2";


const UsersList = () => {
    const [options, setOptions] = useState([]);
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState("");
    const [role, setRole] = useState("");
    const [status, setstatus] = useState("all");
    const [allrolesList,getAllrolesList] = useState([]);
    const [startRange, setStartRange] = useState(0);
    const [limitRange, setLimitRange] = useState(10);
    const params = useParams()
  
    // const columns =["First Name","Last Name","Mobile","Email","Role"]
    const columns ={
      fullName:"Full Name",
      lastname:"Last Name",
      mobNumber:"Mobile",
      status:"Status",
      email:"Email",
      role:"Role",
      actions:"Action"
    }
    const tableObjects = {
      paginationApply:true,
      searchApply:true,
      DownloadExcelApply:true,
      DownloadCSVApply:true,
      DeleteAllApply:true,
      RefreshApply:true,
      editUrl:"/user/user-management/create-user",
      apiLink:"/api/users",
      deleteMethod:"delete",

    }
    useEffect(() => {
        fetchRoles();
        fetchusers();
    }, []);
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
        getAllrolesList(rolesData)
        setOptions(formattedOptions);
        console.log("options",options)
      } catch (error) {
        console.error("Error while fetching:", error);
      }
    };
    
    const fetchusers = async () => {
      try {
        const formData={
            startRange:0,
            limitRange:100,
            companyID:1
        }
        const response = await axios.post(
          `/api/users/post/list`,formData
        );
        console.log("response",response)
        const usersData = response?.data
        // ?.map((data)=>{
        //   return([
        //     data.firstname,
        //     data.lastname,
        //     data.mobNumber,
        //     data.email,
        //     data.role[0]
        //   ])
        // })
        setUsers(usersData?usersData:[]);
        console.log("usersData",usersData)
      } catch (error) {
        console.error("Error while fetching:", error);
      }
    };
  
  
	const adminUserActions=(event)=> {

  }

  return (
    <section className="px-5 w-full max-w-8xl sm:px-6 lg:px-0 bg-white h-auto py-5 pb-24 shadow-xl shadow-black-500/50">
      <div className="w-full h-auto pb-5 border-b border-gray-500 text-xl font-bold text-gray-800">
          <span className="mx-5">Users List</span>
      </div>
      <div className="mx-auto flex p-5">
        
      <div className="w-1/4 py-4 mx-3">
        <label className="block text-gray-700 text-sm font-bold mb-2">Select Action</label>
        <select 
          className="w-full px-4 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="userListDropdownId" name="userListDropdown" onChange={adminUserActions}>
          <option className="" data-limit='37' value="-" name="userListDDOption" disabled="disabled" selected="true">-- Select --</option>

          <optgroup className="optgrpunderline" label="Active, Block, Delete">
            <option className="" data-limit='37' value="block_selected" name="userListDDOption">Block Selected</option>
            <option className="" data-limit='37' value="active_selected" name="userListDDOption">Active Selected</option>
            <option className="" data-limit='37' value="cancel_selected" name="userListDDOption">Delete Selected Acccounts</option>
          </optgroup>
          <optgroup className="optgrpunderline" label="Add Roles">
            {
              allrolesList.map((rolesData, index) => {
                return (
                  <option   key={index} value={`add$${rolesData.role}`} name="userListDDOption">Add {rolesData.role} Role to Selected </option>
                );
              })
            }
          </optgroup>
          <optgroup className="optgrpunderline" label="Remove Roles">
            {allrolesList.map((rolesData, index) => {
              return (
                <option key={index} value={`remove$${rolesData.role}`} name="userListDDOption">Remove {rolesData.role} Role to Selected </option>
              );
            })
            }
          </optgroup>
        </select>
      </div>
        <div className="w-1/4 py-4 mx-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Role Name
          </label>
          <Select options={options} 
            value={role}
            onChange={setRole}
            styles={customStyles}/>
        </div>
        
        <div className="w-1/4 py-4 mx-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Status
          </label>
													
          <select
            id="status"
            name="status"
            className="w-full px-4 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={status}
            onChange={(e) => selectedStatus(e.target.value)}
            required
          >
            <option value="" disabled="disabled" selected="true">-- Select --</option>
            <option value="all" >Show All</option>
            <option value="blocked">Blocked</option>
            <option value="active">Active </option>
          </select>
        </div>
      </div>

        {        console.log("users",users)}            
        <DataTable
          columns={columns} 
          tableData={users?users:[]} 
          tableObjects={tableObjects}
          getData={fetchusers}
          startRange={startRange}
          limitRange={limitRange}
        />
    </section>
  );
};

export default UsersList;
