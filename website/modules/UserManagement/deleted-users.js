"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "@/widgets/IAssureIT-Table/DataTable";
import { useParams } from "next/navigation";
import Swal from "sweetalert2";

const RoleForm = () => {
  const params = useParams();

  const [tableData, setTableData] = useState([]);
  // const [data, setTableData] = useState([]);
  const [startRange, setStartRange] = useState(0);
  const [limitRange, setLimitRange] = useState(10);

  // const columns = ["role","roleDescription"]
  const columns = {
    role:"Role", 
    roleDescription:"Role Description",
    actions:"Action"
  }
  const tableObjects = {
    paginationApply:true,
    searchApply:true,
    DownloadExcelApply:true,
    DownloadCSVApply:true,
    DeleteAllApply:true,
    RefreshApply:true,
    editUrl:"/user/user-management/create-role",
    apiLink:"/api/roles",
    deleteMethod:"delete",

  }

  // const fetchRoles = async (startRange, limitRange) => {
  //   try {
  //     var  formData ={
  //       limitRange : limitRange,
  //       startRange : startRange,
  //     }
  //     console.log("formData",startRange,limitRange)
  //     const response = await axios.post("/api/roles/post/list",formData);
  //     // const response = await axios.get("/api/roles/getdata/0/10");
  //     const rolesData = response?.data;
  //     console.log("data 1",data)
  //     console.log("rolesData 1",rolesData)
  //     // if(data.length>0){
  //     //   rolesData.push(...data)
  //     // }
  //     console.log("rolesData 2",rolesData)
  //   //   .map((role)=>{
  //   //   return([role.role, role.roleDescription])
  //   //  } )
  //     // setTableData(rolesData?rolesData:[]);
  //     // const combined = [...data, ...rolesData];

  //     // setTableData(rolesData);
  //     if (data.length > 0) {
  //       setTableData([...data, ...rolesData]); // Use spread operator to merge arrays
  //     } else {
  //       // setTableData(rolesData);
  //       setTableData(rolesData, () => {
  //         // Code that relies on the updated state should go here
  //         console.log("data 2", data);
  //       });
  //     }
  //     console.log("response?.data",response?.data)
  //     console.log("data 2",data)
  //   } catch (error) {
  //     console.error("Error while fetching:", error);
  //     Swal.fire("Something went wrong!",error.message,"error");
  //   }
  // };

  // const fetchRoles = async (startRange, limitRange) => {
  //   try {
  //     var formData = {
  //       limitRange: limitRange,
  //       startRange: startRange,
  //     };
  //     console.log("formData", startRange, limitRange);
  //     const response = await axios.post("/api/roles/post/list", formData);
  //     const rolesData = response?.data;
  //       setTableData(rolesData)

  //     // console.log("tableData 1", tableData);
  //     // console.log("rolesData 1", rolesData);
  
  //     // // if (tableData.length > 0) {
  //     // //   setTableData([...tableData, ...rolesData]); // Use spread operator to merge arrays
  //     // // } else {
  //     //   setTableData(rolesData, () => {
  //     //     // Code that relies on the updated state should go here
  //     //     console.log("tableData 2", tableData);
  //     //   });
  //     // // }
  
  //     // console.log("response?.data", response?.data);
  //     console.log("tableData 2", tableData);
  //   } catch (error) {
  //     console.error("Error while fetching:", error);
  //     Swal.fire("Something went wrong!", error.message, "error");
  //   }
  // };
  const fetchRoles = async (startRange, limitRange,setTableData) => {
    try {
      const formData = {
        limitRange: limitRange,
        startRange: startRange,
      };
      console.log("formData===============", startRange, limitRange);
      const response = await axios.post("/api/roles/post/list", formData);
      const rolesData = response?.data;
      // console.log("rolesData 1", rolesData);
  
      if (setTableData) {
        setTableData(prevData => [...prevData, ...rolesData]);
      }
  
      // console.log("response?.data", response?.data);
      console.log("tableData 2", tableData);
    } catch (error) {
      console.error("Error while fetching:", error);
      Swal.fire("Something went wrong!", error.message, "error");
    }
  };
  useEffect(() => {
    fetchRoles(startRange,limitRange,setTableData);
    if (params?._id) {
      // console.log("params", params);
      axios
        .get("/api/roles/get/one/" + params._id)
        .then((res) => {
          console.log("res.data one", res.data);
          setFormData({ 
            role: res.data.role, 
            roleDescription: res.data.roleDescription 
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
    if (!formData.role || !formData.roleDescription) {
      alert('Both fields are required.');
      return;
    }
    setTableData([...data, formData]);
  
    if(params._id){
      formData.fieldID = params._id
    }
    console.log("formData",formData)
    try {
      var  response =[]
      if(params._id){
        response = await axios.patch("/api/roles/patch", formData);
        if(response.data.updated){
          Swal.fire(" ","Roles updated successfully");
        }else{
          Swal.fire(" ",response.data.message);
        }
        window.location.href = tableObjects?.editUrl;

      }else{
        response = await axios.post("/api/roles/post", formData);
         if(response.data.created){
          Swal.fire(" ","Roles created successfully");
        }else{
          Swal.fire(" ",response.data.message);
        }
      }
      console.log("response",response)
      setFormData({ role: '', roleDescription: '' });
      fetchRoles()
    } catch (error) {
      console.log("error = ", error);
      Swal.fire("Something went wrong!",error.message,"error");
    }
  };


  // const searchItems = async (searchT erm) => {
  //   try {
  //     const response = await axios.get(`/api/search?term=${searchTerm}`); // Replace with your actual search API endpoint
  //     return response.data;
  //   } catch (error) {
  //     console.error('Error searching data:', error);
  //     return [];
  //   }
  // };

  return (
    <section className="px-5 w-full max-w-8xl sm:px-6 lg:px-0 bg-white h-auto py-5 pb-24 shadow-xl shadow-black-500/50">
        <div className="w-full h-auto pb-5 border-b border-gray-500 text-xl font-bold text-gray-800">
            <span className="mx-5">Role List</span>
        </div>
        <div className="my-10 p-5 w-2/3 mx-auto border">
            <DataTable 
            columns={columns} 
            tableData={tableData?tableData:[]} 
            tableObjects={tableObjects}
            getData={fetchRoles}
            startRange={startRange}
            limitRange={limitRange}
            />
        </div>
    </section>
  );
};

export default RoleForm;
