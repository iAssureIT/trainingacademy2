// import React, { useState, useEffect } from "react";
// import * as XLSX from "xlsx";

// const DataTable = ({ columns, data, onDelete, onUpdate , onRefresh}) => {
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [editedRow, setEditedRow] = useState(null);
//   const [editedData, setEditedData] = useState({});
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sorting, setSorting] = useState({ column: null, direction: "asc" });
//   const [tableData, setTableData] = useState(data);
//   const [currentPage, setCurrentPage] = useState(1);

  
//   const handleExportExcel = () => {
//     const worksheet = XLSX.utils.json_to_sheet(filteredData);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
//     XLSX.writeFile(workbook, "data.xlsx");
//   };
  
//   const convertToCSV = (data) => {
//     const csvRows = [];
//     const columns = Object.keys(data[0]);

//     csvRows.push(columns.join(','));

//     for (const row of data) {
//       const values = columns.map(column => {
//         const cellValue = row[column];
//         return JSON.stringify(cellValue);
//       });
//       csvRows.push(values.join(','));
//     }

//     return csvRows.join('\n');
//   };

//   const handleExportCSV = () => {
//     const csvContent = convertToCSV(filteredData);
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "data.csv";
//     link.click();
//   };
//  //Below is the pagination code 
// const itemsPerPage = 5;
// const startIndex = (currentPage - 1) * itemsPerPage;
// const endIndex = startIndex + itemsPerPage;
 

// const filteredData = data
//     .filter((row) =>
//       row.some((cellValue) =>
//         cellValue.toString().toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     )
//     .sort((a, b) => {
//         if (sorting.column === null) return 0;

//         const aValue = a[sorting.column];
//         const bValue = b[sorting.column];
  
//         if (aValue === bValue) return 0;
  
//         const comparison =
//           aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
  
//         return sorting.direction === "asc" ? comparison : -comparison;
//     })
//     .slice(startIndex, endIndex); // Apply pagination ----imp


// //   const filteredData = data
// //     .filter((row) =>
// //       row.some((cellValue) =>
// //         cellValue.toString().toLowerCase().includes(searchTerm.toLowerCase())
// //       )
// //     )
    
// //     .sort((a, b) => {
// //       if (sorting.column === null) return 0;

// //       const aValue = a[sorting.column];
// //       const bValue = b[sorting.column];

// //       if (aValue === bValue) return 0;

// //       const comparison =
// //         aValue > bValue ? 1 : aValue < bValue ? -1 : 0;

// //       return sorting.direction === "asc" ? comparison : -comparison;
// //     }
    
// //     );
    

//   const handleSort = (columnIndex) => {
//     if (sorting.column === columnIndex) {
//       setSorting({
//         ...sorting,
//         direction: sorting.direction === "asc" ? "desc" : "asc",
//       });
//     } else {
//       setSorting({ column: columnIndex, direction: "asc" });
//     }
//   };
  
//   const handleEdit = (rowIndex, rowData) => {
//     setEditedRow(rowIndex);
//     setEditedData(rowData);
//   };
//   const handleDelete = () => {
//     selectedRows.forEach((rowIndex) => onDelete(rowIndex));
//     setSelectedRows([]);
//   };

//   const handleBulkDelete = () => {
//     const updatedData = tableData.filter(
//       (_, rowIndex) => !selectedRows.includes(rowIndex)
//     );
//     setTableData(updatedData); // Update the tableData state
//     setSelectedRows([]);
//   };

//   const handleSave = (userId) => {
//     onUpdate(userId, editedData);
//     setEditedRow(null);
//     setEditedData({});
//   };

//   const toggleAllRows = () => {
//     if (selectedRows.length === data.length) {
//       setSelectedRows([]);
//     } else {
//       setSelectedRows(data.map((_, index) => index));
//     }
//   };

//   const toggleRowSelection = (rowIndex) => {
//     if (selectedRows.includes(rowIndex)) {
//       setSelectedRows(selectedRows.filter((row) => row !== rowIndex));
//     } else {
//       setSelectedRows([...selectedRows, rowIndex]);
//     }
//   };

//   const handleScroll = (e) => {
//     const bottom =
//       e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
//     if (bottom) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   return (
//     <div 
//       onScroll={handleScroll}
//       style={{
//         maxHeight: "400px",
//         overflowY: "scroll",
//         overflowX: "scroll",
//         background: "white",
//         padding: "20px",
//         fontSize: "small",
//       }}
//       className="drop-shadow-lg "
//     >
//       <div class="flex justify-between bg-blue-200 p-4">
//   <div class="flex items-center">
//     <i class="fas fa-search mr-2 bor"></i>
//     <input
//       type="text"
//       placeholder="Search..."
//       value={searchTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//       class="border rounded p-1 outline-none"
//     />
//   </div>
//   <div class="flex items-center">
//     <button
//       onClick={handleExportExcel}
//       class="px-2 py-1 text-white bg-green-500 rounded mr-2"
//     >
//       <i class="fas fa-file-excel "></i>
//     </button>
//     <button
//       onClick={handleExportCSV}
//       class="px-2 py-1 text-white bg-orange-500 rounded mr-2"
//     >
//       <i class="fas fa-file-csv "></i>
//     </button>
//     <button
//       onClick={onRefresh}
//       class="px-2 py-1 text-white bg-blue-500 rounded mr-2"
//     >
//       <i class="fas fa-sync-alt"></i>
//     </button>
//     <button
//       onClick={() => handleBulkDelete(selectedRows)}
//       class="px-2 py-1 text-white bg-red-500 rounded"
//     >
//       <i class="fas fa-trash-alt"></i>
//     </button>
//   </div>
// </div>
//       <table className="table-fixed w-full border-collaps  ">
//         <thead style={{ backgroundColor: "#f0f0f0" }}>
//           <tr>
//             <th className="p-2 border w-12">
//               <input
//                 type="checkbox"
//                 className="h-5 w-5"
//                 // style={{marginRight:"10px"}}
//                 checked={selectedRows.length === data.length}
//                 onChange={() => {
//                   if (selectedRows.length === data.length) {
//                     setSelectedRows([]);
//                   } else {
//                     setSelectedRows([...Array(data.length).keys()]);
//                   }
//                 }}
//               />
//             </th>

//             {columns.map((column, index) => (
//               <th
//               key={index}
//               className="p-2 border"
//               onClick={() => handleSort(index)}
//             >
//               {column}
//               {sorting.column === index && (
//                 <i
//                   className={`fas ${
//                     sorting.direction === "asc"
//                       ? "fa-caret-up"
//                       : "fa-caret-down"
//                   } ml-1`}
//                 ></i>
//               )}
//             </th>
//             ))}
//             <th className="p-2 border">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="">
//           {filteredData.map((row, rowIndex) => (
//             <tr key={rowIndex} className="border">
//               <td className="p-2 border text-center">
//                 {" "}
//                 {/* Add text-center class */}
//                 <input
//                   type="checkbox"
//                   className="h-5 w-5"
//                   checked={selectedRows.includes(rowIndex)}
//                   onChange={() => toggleRowSelection(rowIndex)}
//                 />
//               </td>
//               {columns.map((_, cellIndex) => {
//                 const cellValue = row[cellIndex] || "";
//                 return (
//                   <td key={cellIndex} className="p-2 border text-center">
//                     {" "}
//                     {/* Add text-center class */}
//                     {editedRow === rowIndex ? (
//                       <input
//                         type="text"
//                         value={editedData[cellIndex] || cellValue}
//                         onChange={(e) =>
//                           setEditedData({
//                             ...editedData,
//                             [cellIndex]: e.target.value,
//                           })
//                         }
//                         className="w-full"
//                       />
//                     ) : (
//                       cellValue
//                     )}
//                   </td>
//                 );
//               })}
//               <td className="text-center flex justify-center mt-1.5">
//                 {editedRow === rowIndex ? (
//                   <div>
//                     <button
//                       onClick={() => handleSave(row[0])}
//                       className="mr-2 px-2 py-2 text-white bg-green-500 rounded flex items-center"
//                     >
//                       <i className="fas fa-check text-xxs"></i>
//                     </button>
//                   </div>
//                 ) : (
//                   <div>
//                     <button
//                       onClick={() => handleEdit(rowIndex, row)}
//                       className="mr-2 px-2 py-2 text-white bg-blue-500 rounded flex items-center"
//                     >
//                       <i className="fas fa-pencil-alt text-xxs"></i>
//                     </button>
//                   </div>
//                 )}
//                 <div>
//                   <button
//                     onClick={() => onDelete(row[0])}
//                     className="mr-2 px-2 py-1 text-white bg-red-500 rounded"
//                   >
//                     <i className="fas fa-trash-alt text-xxs"></i>
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="flex justify-center my-4">
//   <button
//     onClick={() => setCurrentPage(currentPage - 1)}
//     disabled={currentPage === 1}
//     className="px-2 py-1 mr-2 bg-gray-300 rounded"
//   >
//     Previous
//   </button>
//   <p className="text-lg mx-2">
//     {currentPage} of {Math.ceil(data.length / itemsPerPage)}
//   </p>
//   <button
//     onClick={() => setCurrentPage(currentPage + 1)}
//     disabled={endIndex >= data.length}
//     className="px-2 py-1 bg-gray-300 rounded"
//   >
//     Next
//   </button>
// </div>
//     </div>
//   );
// };

// export default DataTable;




import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

const DataTable = ({ columns, data, onDelete, onUpdate , onRefresh}) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [editedRow, setEditedRow] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [sorting, setSorting] = useState({ column: null, direction: "asc" });
  const [tableData, setTableData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);

  
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
const itemsPerPage = 5;
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
 

const filteredData = data
    .filter((row) =>
      row.some((cellValue) =>
        cellValue.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .sort((a, b) => {
        if (sorting.column === null) return 0;

        const aValue = a[sorting.column];
        const bValue = b[sorting.column];
  
        if (aValue === bValue) return 0;
  
        const comparison =
          aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
  
        return sorting.direction === "asc" ? comparison : -comparison;
    })
    .slice(startIndex, endIndex); // Apply pagination ----imp


//   const filteredData = data
//     .filter((row) =>
//       row.some((cellValue) =>
//         cellValue.toString().toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     )
    
//     .sort((a, b) => {
//       if (sorting.column === null) return 0;

//       const aValue = a[sorting.column];
//       const bValue = b[sorting.column];

//       if (aValue === bValue) return 0;

//       const comparison =
//         aValue > bValue ? 1 : aValue < bValue ? -1 : 0;

//       return sorting.direction === "asc" ? comparison : -comparison;
//     }
    
//     );
    

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
  
  const handleEdit = (rowIndex, rowData) => {
    setEditedRow(rowIndex);
    setEditedData(rowData);
  };
  const handleDelete = () => {
    selectedRows.forEach((rowIndex) => onDelete(rowIndex));
    setSelectedRows([]);
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

  return (
    <div 
      onScroll={handleScroll}
      style={{
        maxHeight: "400px",
        overflowY: "scroll",
        overflowX: "scroll",
        background: "white",
        padding: "20px",
        fontSize: "small",
      }}
      className="drop-shadow-lg "
    >
      <div class="flex justify-between bg-blue-200 p-4">
  <div class="flex items-center">
    <i class="fas fa-search mr-2 bor"></i>
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      class="border rounded p-1 outline-none"
    />
  </div>
  <div class="flex items-center">
    <button
      onClick={handleExportExcel}
      class="px-2 py-1 text-white bg-green-500 rounded mr-2"
    >
      <i class="fas fa-file-excel "></i>
    </button>
    <button
      onClick={handleExportCSV}
      class="px-2 py-1 text-white bg-orange-500 rounded mr-2"
    >
      <i class="fas fa-file-csv "></i>
    </button>
    <button
      onClick={onRefresh}
      class="px-2 py-1 text-white bg-blue-500 rounded mr-2"
    >
      <i class="fas fa-sync-alt"></i>
    </button>
    <button
      onClick={() => handleBulkDelete(selectedRows)}
      class="px-2 py-1 text-white bg-red-500 rounded"
    >
      <i class="fas fa-trash-alt"></i>
    </button>
  </div>
</div>
      <table className="table-fixed w-full border-collaps  ">
        <thead style={{ backgroundColor: "#f0f0f0" }}>
          <tr>
            <th className="p-2 border w-12">
              <input
                type="checkbox"
                className="h-5 w-5"
                // style={{marginRight:"10px"}}
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

            {columns.map((column, index) => (
              <th
              key={index}
              className="p-2 border"
              onClick={() => handleSort(index)}
            >
              {column}
              {sorting.column === index && (
                <i
                  className={`fas ${
                    sorting.direction === "asc"
                      ? "fa-caret-up"
                      : "fa-caret-down"
                  } ml-1`}
                ></i>
              )}
            </th>
            ))}
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {filteredData.map((row, rowIndex) => (
            <tr key={rowIndex} className="border">
              <td className="p-2 border text-center">
                {" "}
                {/* Add text-center class */}
                <input
                  type="checkbox"
                  className="h-5 w-5"
                  checked={selectedRows.includes(rowIndex)}
                  onChange={() => toggleRowSelection(rowIndex)}
                />
              </td>
              {columns.map((_, cellIndex) => {
                const cellValue = row[cellIndex] || "";
                return (
                  <td key={cellIndex} className="p-2 border text-center">
                    {" "}
                    {/* Add text-center class */}
                    {editedRow === rowIndex ? (
                      <input
                        type="text"
                        value={editedData[cellIndex] || cellValue}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            [cellIndex]: e.target.value,
                          })
                        }
                        className="w-full"
                      />
                    ) : (
                      cellValue
                    )}
                  </td>
                );
              })}
              <td className="text-center flex justify-center mt-1.5">
                {editedRow === rowIndex ? (
                  <div>
                    <button
                      onClick={() => handleSave(row[0])}
                      className="mr-2 px-2 py-2 text-white bg-green-500 rounded flex items-center"
                    >
                      <i className="fas fa-check text-xxs"></i>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => handleEdit(rowIndex, row)}
                      className="mr-2 px-2 py-2 text-white bg-blue-500 rounded flex items-center"
                    >
                      <i className="fas fa-pencil-alt text-xxs"></i>
                    </button>
                  </div>
                )}
                <div>
                  <button
                    onClick={() => onDelete(row[0])}
                    className="mr-2 px-2 py-1 text-white bg-red-500 rounded"
                  >
                    <i className="fas fa-trash-alt text-xxs"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center my-4">
  <button
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
    className="px-2 py-1 mr-2 bg-gray-300 rounded"
  >
    Previous
  </button>
  <p className="text-lg mx-2">
    {currentPage} of {Math.ceil(data.length / itemsPerPage)}
  </p>
  <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={endIndex >= data.length}
    className="px-2 py-1 bg-gray-300 rounded"
  >
    Next
  </button>
</div>
    </div>
  );
};

export default DataTable;



// serchthrough api

import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import InfiniteScroll from 'react-infinite-scroll-component';

const DataTable = ({ columns, data, onDelete, onUpdate , onRefresh, onSearch }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [editedRow, setEditedRow] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [sorting, setSorting] = useState({ column: null, direction: "asc" });
  const [tableData, setTableData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // Whether there are more items to load
  const [pageSize, setPageSize] = useState(10); // Number of items to load per page
  
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

 

const filteredData = data
    .filter((row) =>
      row.some((cellValue) =>
        cellValue.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .sort((a, b) => {
        if (sorting.column === null) return 0;

        const aValue = a[sorting.column];
        const bValue = b[sorting.column];
  
        if (aValue === bValue) return 0;
  
        const comparison =
          aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
  
        return sorting.direction === "asc" ? comparison : -comparison;
    })
    // .slice(startIndex, endIndex); // Apply pagination ----imp



    

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
  
  const handleEdit = (rowIndex, rowData) => {
    setEditedRow(rowIndex);
    setEditedData(rowData);
  };
  const handleDelete = () => {
    selectedRows.forEach((rowIndex) => onDelete(rowIndex));
    setSelectedRows([]);
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

  const loadMoreData = () => {
    // Simulate loading more data here
    // You can replace this with your actual API request for pagination
    // Adjust the data fetching logic as needed
    const newPageSize = pageSize + 10; // Increase the page size
    setPageSize(newPageSize);
    setHasMore(newPageSize < data.length);
  };

  return (
    <InfiniteScroll 
    dataLength={pageSize}
        next={loadMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      // onScroll={handleScroll}
      style={{
        maxHeight: "400px",
        overflowY: "scroll",
        overflowX: "scroll",
        background: "white",
        padding: "20px",
        fontSize: "small",
      }}
      className="drop-shadow-lg "
    >
      <div class="flex justify-between bg-blue-200 p-4">
  <div class="flex items-center">
    <i class="fas fa-search mr-2 bor"></i>
    {/* <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      class="border rounded p-1 outline-none"
    /> */}

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          onSearch(e.target.value); // Invoke the search callback with the entered search term
        }}
        className="border rounded p-1 outline-none"
      />
  </div>
  <div class="flex items-center">
    <button
      onClick={handleExportExcel}
      class="px-2 py-1 text-white bg-green-500 rounded mr-2"
    >
      <i class="fas fa-file-excel "></i>
    </button>
    <button
      onClick={handleExportCSV}
      class="px-2 py-1 text-white bg-orange-500 rounded mr-2"
    >
      <i class="fas fa-file-csv "></i>
    </button>
    <button
      onClick={onRefresh}
      class="px-2 py-1 text-white bg-blue-500 rounded mr-2"
    >
      <i class="fas fa-sync-alt"></i>
    </button>
    <button
      onClick={() => handleBulkDelete(selectedRows)}
      class="px-2 py-1 text-white bg-red-500 rounded"
    >
      <i class="fas fa-trash-alt"></i>
    </button>
  </div>
      </div>

      {/* <InfiniteScroll
        dataLength={pageSize}
        next={loadMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>} // Display a loading indicator while loading more data
        style={{ overflow: 'hidden' }} // Hide the default scrollbar
      ></InfiniteScroll> */}
      <table className="table-fixed w-full border-collaps  ">
        <thead style={{ backgroundColor: "#f0f0f0" }}>
          <tr>
            <th className="p-2 border w-12">
              <input
                type="checkbox"
                className="h-5 w-5"
                // style={{marginRight:"10px"}}
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

            {columns.map((column, index) => (
              <th
              key={index}
              className="p-2 border"
              onClick={() => handleSort(index)}
            >
              {column}
              {sorting.column === index && (
                <i
                  className={`fas ${
                    sorting.direction === "asc"
                      ? "fa-caret-up"
                      : "fa-caret-down"
                  } ml-1`}
                ></i>
              )}
            </th>
            ))}
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {filteredData.map((row, rowIndex) => (
            <tr key={rowIndex} className="border">
              <td className="p-2 border text-center">
                {" "}
                {/* Add text-center class */}
                <input
                  type="checkbox"
                  className="h-5 w-5"
                  checked={selectedRows.includes(rowIndex)}
                  onChange={() => toggleRowSelection(rowIndex)}
                />
              </td>
              {columns.map((_, cellIndex) => {
                const cellValue = row[cellIndex] || "";
                return (
                  <td key={cellIndex} className="p-2 border text-center">
                    {" "}
                    {/* Add text-center class */}
                    {editedRow === rowIndex ? (
                      <input
                        type="text"
                        value={editedData[cellIndex] || cellValue}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            [cellIndex]: e.target.value,
                          })
                        }
                        className="w-full"
                      />
                    ) : (
                      cellValue
                    )}
                  </td>
                );
              })}
              <td className="text-center flex justify-center mt-1.5">
                {editedRow === rowIndex ? (
                  <div>
                    <button
                      onClick={() => handleSave(row[0])}
                      className="mr-2 px-2 py-2 text-white bg-green-500 rounded flex items-center"
                    >
                      <i className="fas fa-check text-xxs"></i>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => handleEdit(rowIndex, row)}
                      className="mr-2 px-2 py-2 text-white bg-blue-500 rounded flex items-center"
                    >
                      <i className="fas fa-pencil-alt text-xxs"></i>
                    </button>
                  </div>
                )}
                <div>
                  <button
                    onClick={() => onDelete(row[0])}
                    className="mr-2 px-2 py-1 text-white bg-red-500 rounded"
                  >
                    <i className="fas fa-trash-alt text-xxs"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </InfiniteScroll>
  );
};

export default DataTable;

