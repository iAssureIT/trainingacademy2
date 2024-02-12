"use client"
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import * as XLSX from "xlsx";
import Swal from "sweetalert2";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const DataTable = ({ columns, data,tableObjects, getData}) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [editedRow, setEditedRow] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [sorting, setSorting] = useState({ column: null, direction: "asc" });
  const [tableData, setTableData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [editId, setEditId] = useState(null);
  const [hasMore, setHasMore] = useState(true); // Whether there are more items to load
  const [pageSize, setPageSize] = useState(10); // Number of items to load per page

  const [startRange, setStartRange] = useState(0);
  const [limitRange, setLimitRange] = useState(10);
  const [filteredData, setFilteredData] = useState([]);

  const reA = /[^a-zA-Z]/g;
  const reN = /[^0-9]/g;
  // const sort = true;
  const examMasterData2 = '';
  const paginationArray = [];
  const activeClass = 'activeCircle';
  const normalData = true;
  const printhideArray = [];
  const params = useParams();
  useEffect(() => {
    getData(startRange,limitRange)
    if(params?.id){
      setEditId(params?.id)
    }
    setSortedData(data)
  }, []);

  const setSortedData=(data)=> {
    var filteredData = data.filter((value) =>
        Object.entries(value).some(([key, value1]) => {
          const includesSearchTerm = value1.toString().toLowerCase().includes(searchTerm.toLowerCase());
          // Return 'includesSearchTerm' to the filter function
          return includesSearchTerm;
        })
      )
      .sort((a, b) => {
        const aValue = a.name ? a.name.toLowerCase() : '';
        const bValue = b.name ? b.name.toLowerCase() : '';
        if (aValue < bValue) return -1;
        if (aValue > bValue) return 1;
        return 0;
      });
      console.log("filteredData",filteredData)
    setFilteredData(filteredData)
  }
  const handleExportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "data.xlsx");
  };
  
  const convertToCSV = (data) => {
    const csvRows = [];
    const columns = Object.keys(data[0]);

    csvRows.push(columns.join(','));

    for (const row of data) {
      const values = columns.map(column => {
        const cellValue = row[column];
        return JSON.stringify(cellValue);
      });
      csvRows.push(values.join(','));
    }

    return csvRows.join('\n');
  };

  const handleExportCSV = () => {
    const csvContent = convertToCSV(filteredData);
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "data.csv";
    link.click();
  };
  //Below is the pagination code 
  // const itemsPerPage = 5;
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  
  const handleSort = (columnIndex) => {
    if (sorting.column === columnIndex) {
      setSorting({
        ...sorting,
        direction: sorting.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSorting({ column: columnIndex, direction: "asc" });
    }
  };
  
  const handleBulkDelete = () => {
    const updatedData = tableData.filter(
      (_, rowIndex) => !selectedRows.includes(rowIndex)
    );
    setTableData(updatedData); // Update the tableData state
    setSelectedRows([]);
  };

  const handleSave = (userId) => {
    onUpdate(userId, editedData);
    setEditedRow(null);
    setEditedData({});
  };

  const toggleAllRows = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((_, index) => index));
    }
  };

  const toggleRowSelection = (rowIndex) => {
    if (selectedRows.includes(rowIndex)) {
      setSelectedRows(selectedRows.filter((row) => row !== rowIndex));
    } else {
      setSelectedRows([...selectedRows, rowIndex]);
    }
  };

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  //pb start

  const sort=(event)=> {
    event.preventDefault();
    var key = event.target.getAttribute('id');
    var tableData = data;
    if (key === 'number') {
      this.sortNumber(key, tableData);
    } else {
      this.sortString(key, tableData);
    }
  }

  const handleEdit =(event) =>{
    event.preventDefault();
    // console.log("tableObjects",tableObjects)
    var id = event.target.id;
    window.location.href = tableObjects?.editUrl + "/" + id;
  }
  const handleDelete = (event) =>{
    let id = (event.target.id).replace(".", "/");

    Swal.fire({
      title: ' ',
      text: "Are you sure? You won't be able to revert this!",
      // icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        axios({
          method: tableObjects?.deleteMethod,
          url: tableObjects?.apiLink + '/delete/' + id
        }).then((response) => {
          // this.props.getData(startRange, limitRange);
          window.location.href = tableObjects?.editUrl;
          Swal.fire({
            title : " ",
            text  : "Record deleted successfully",
          });
        }).catch((error) => {
          Swal.fire("Something went wrong!",error.message,"error");
          console.log("error",error)
        });
       
      }
    })
  }

 const fetchData = async () => {
    try {
      const response = await axios.get(
        `${tableObjects.apiLink}/getdata/${currentPage}/${pageSize}`
      );
      const newData = response.data;
      setSortedData((prevData) => [...prevData, ...newData]); 
      setHasMore(newData.length === pageSize); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const loadMoreData = () => {
    setCurrentPage((prevPage) => prevPage + 1); // Increment the current page
  };

  useEffect(() => {
    fetchData(); 
  }, [currentPage]); 


  // const startIndex = (currentPage - 1) * pageSize;
  // const endIndex = startIndex + pageSize;

  // const loadMoreData = () => {
  //   console.log("loadMoreData",limitRange)
  //   // Simulate loading more data here
  //   // You can replace this with your actual API request for pagination
  //   // Adjust the data fetching logic as needed
  //   const newPageSize = pageSize + 10; // Increase the page size
  //   setPageSize(newPageSize);
  //   setHasMore(newPageSize < data.length);
  //   setStartRange(startRange+10)
  //   setLimitRange(limitRange+10)
  //   getData(startRange,limitRange)
  //   setSortedData(data)
  // };

  return (
    <div id="scrollableDiv" style={{ height: 550, overflow: "auto" }}>
 
   
    <div 
    > 
      <div className="flex justify-between bg-blue-200 p-4">
        <div className="flex items-center">
          {
            tableObjects?.DownloadExcelApply
            ?
              <button
                onClick={handleExportExcel}
                className="px-2 py-1 text-white bg-blue-500 rounded mr-2"
              >
                <i className="fas fa-file-excel "></i>
              </button>
            :
              null
          }
          {
            tableObjects?.DownloadCSVApply
            ?
              <button
                onClick={handleExportCSV}
                className="px-2 py-1 text-white bg-blue-500 rounded mr-2"
              >
                <i className="fas fa-file-csv "></i>
              </button>
            :
              null
          }
          {
            tableObjects?.DeleteAllApply
            ?
              <button
                onClick={() => handleBulkDelete(selectedRows)}
                className="px-2 py-1 text-white bg-blue-500 rounded"
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            :
              null
          }
        </div>
        {
          tableObjects?.searchApply
          ?
            <div className="flex items-center">
              <i className="fas fa-search mr-2 bor"></i>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border rounded p-1 outline-none"
              />
            </div>
          :
            null
        }
      </div>
      <InfiniteScroll
        dataLength={10} // This is important to prevent unnecessary calls
        next={loadMoreData} // Callback to load more data
        hasMore={hasMore} // A boolean to indicate if there's more data to load
        loader={<h4>Loading...</h4>} // A loading indicator while data is being fetched
        scrollableTarget="scrollableDiv" // ID of the scrollable container
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>No more data to load</b>
          </p>
        }
        // You can also set additional props for InfiniteScroll here
      >
        <div className="table-container">
          <table className="table-fixed w-full border-collapse  ">
            <thead style={{ backgroundColor: "#f0f0f0" }}>
              <tr className="">
                
                <th className="p-2 border w-12">
                  <input
                    type="checkbox"
                    className="h-5 w-5"
                    checked={selectedRows.length === data.length}
                    onChange={() => {
                      if (selectedRows.length === data.length) {
                        setSelectedRows([]);
                      } else {
                        setSelectedRows([...Array(data.length).keys()]);
                      }
                    }}
                  />
                </th>
                <th className="text-center">Sr. No.</th>
                {columns ?
                  Object.entries(columns).map(
                    ([key, value], i) => {
                      if (key === 'actions') {
                        return (
                          <th key={i} className="text-center p-2 border" id="ActionContent">{value}</th>
                        );
                      } else {
                        return (
                          <th key={i} className="text-left p-2 border">{value} <span onClick={sort} id={key} className="fa fa-sort tableSort"></span></th>
                        );
                      }

                    }
                  )
                  :
                  <th className="text-left p-2 border"></th>
                }
              </tr>
            </thead>
            <tbody 
              onScroll={handleScroll}
              style={{
                maxHeight: "450",
                overflowY: "scroll",
                overflowX: "scroll",
                background: "white",
                padding: "20px",
                fontSize: "small",
              }}
              className="drop-shadow-lg ">
              {console.log("filteredData",filteredData)}
                {filteredData && filteredData.length > 0 ?
                  filteredData.map(
                    (value, i) => {
                      return (
                        <tr key={i} className="">
                          
                          <td className="p-2 border text-center">
                            {" "}
                            {/* Add text-center class */}
                            <input
                              type="checkbox"
                              className="h-5 w-5"
                              checked={selectedRows.includes(i)}
                              onChange={() => toggleRowSelection(i)}
                            />
                          </td>
                          <td className="text-center p-2 border">{currentPage + i}</td>
                          {
                            Object.entries(value).map(
                              ([key, value1], i) => {
                                if (typeof (value1) === 'string') {
                                  var regex = new RegExp(/(<([^>]+)>)/ig);
                                  var value2 = value1 ? value1.replace(regex, '') : '';
                                  var aN = value2.replace(reA, "");
                                  if (aN && typeof (aN) === 'string') {
                                    var textAlign = 'text-left'
                                  } else {
                                    var bN = value1 ? parseInt(value1.replace(reN, ""), 10) : '';
                                    if (bN) {
                                      var textAlign = 'text-left';
                                    } else {
                                      var textAlign = 'text-left';
                                    }
                                  }
                                } else {
                                  var textAlign = 'text-left';
                                }
                                var found = Object.keys(columns).filter((k) => {
                                  return k === key;
                                });
                                if (found.length > 0) {
                                  if (key !== 'id') {
                                    return (<td className={textAlign+ " p-2 border"} key={i}><div className={textAlign} dangerouslySetInnerHTML={{ __html: value1 }}></div></td>);
                                  }
                                }

                              }
                            )
                          }

                          {columns && columns.actions ?
                            <td className="text-center p-2 border" id="ActionContent">
                              <span>
                                {tableObjects.editUrl 
                                  ?
                                    <i className="fa fa-pencil cursor-pointer text-blue-500" title="Edit" id={value._id} onClick={handleEdit}></i> 
                                  : null
                                }&nbsp; &nbsp;
                                {
                                  editId && editId === value._id 
                                  ? null 
                                  : <i className={"fa fa-trash text-red-500 cursor-pointer "} id={value._id} onClick={handleDelete}></i>
                                }
                              </span>
                            </td>
                            :
                            null
                          }
                        </tr>
                      );
                    }
                  )
                  :
                  <tr className="trAdmin"><td colSpan={columns ? Object.keys(columns).length + 1 : 1} className="text-center p-2 border">No Record Found!</td></tr>
                }
            </tbody>
          </table>
        </div>
      </InfiniteScroll>
    </div>
    </div>
      // {
      //   tableObjects?.paginationApply
      //   ?
      //     <div className="flex justify-center my-4">
      //       <button
      //         onClick={() => setCurrentPage(currentPage - 1)}
      //         disabled={currentPage === 1}
      //         className="px-2 py-1 mr-2 bg-gray-300 rounded"
      //       >
      //         Previous
      //       </button>
      //       <p className="text-lg mx-2">
      //         {currentPage} of {Math.ceil(data.length / itemsPerPage)}
      //       </p>
      //       <button
      //         onClick={() => setCurrentPage(currentPage + 1)}
      //         disabled={endIndex >= data.length}
      //         className="px-2 py-1 bg-gray-300 rounded"
      //       >
      //         Next
      //       </button>
      //     </div>
      //   :
      //     null
      //   }
  );
};

export default DataTable;

