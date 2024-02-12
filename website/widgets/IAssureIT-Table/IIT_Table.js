// import React, { Component } from 'react';

// export default class IIT_Table extends Component {
// 	constructor(props){
// 		super(props);
// 		console.log("Props => ",this.props)
// 	}
	

// 	render() {

// 		console.log("Props => ",this.props)
// 		return (
// 			<section className="drop-shadow-lg">
// 				<div className="bg-yellow-300 h-24 w-full">
// 					Filter comes here
// 				</div>
// 				<div className="bg-white p-6 h-screen w-full">
// 					<table className="table-auto">
// 					  	<thead>
// 					    	<tr>
// 								{
// 									this.props.tableData.tableHeading.map((item,index)=>{
// 										return(
// 											<th className="border py-3 px-10" key={index}>{item.label}</th>
// 										)
// 									})
// 								}					      	
// 					    	</tr>
// 					  </thead>
// 					 	<tbody>
// 					 		<tr>
// 								{
// 									this.props.tableData.tableContent.map((item,i)=>{
// 										item.map((value,j)=>{
// 										console.log("value =>", value)
// 											return (<td className="border py-3 px-10" key={j}>{value}</td>)
// 										})
// 									})
// 								}					 			
// 					 		</tr>
// 					 	</tbody>
// 					</table>
// 				</div>	
// 			</section>
// 		);
// 	}
// }



// IIT-Table.js
"use client"
// IIT-Table.js
import React, { Component } from 'react';

export default class IIT_Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      visibleRows: 10,
    };
  }

  handleScroll = () => {
    // ... rest of the handleScroll function ...
  };

  render() {
    const { tableData, onDelete } = this.props;
    const { searchTerm, visibleRows } = this.state;

    return (
      <section className="drop-shadow-lg">
        <div className="bg-yellow-300 h-24 w-full">Filter comes here</div>
        <div className="bg-white p-6 h-screen w-full" onScroll={this.handleScroll}>
          <table className="table-auto">
            <thead>
              <tr>
                {tableData && tableData.tableHeading && // Make sure tableData and tableHeading exist
                  tableData.tableHeading.map((item, index) => (
                    <th className="border py-3 px-10" key={index}>
                      {item.label}
                    </th>
                  ))}
              </tr>
            </thead>
			<tbody>
              {tableData &&
                tableData.tableContent &&
                tableData.tableContent
                  .filter(row =>
                    row.some(cell =>
                      cell.toString().toLowerCase().includes(searchTerm.toLowerCase())
                    )
                  )
                  .slice(0, visibleRows)
                  .map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td className="border py-3 px-10" key={cellIndex}>
                          {cell}
                        </td>
                      ))}
                      <td className="border py-3 px-10">
                        <button
                          onClick={() => onDelete(rowIndex)}
                          className="px-4 py-2 text-white bg-red-500 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}




