// import React, { Component } from 'react';
// import OneFieldForm         from '../../Master/OneFieldForm/OneFieldForm.js';
// class RolesEntity extends Component{
//    constructor(props) {
//     super(props);
//     this.state = {
//       fields : {
//         placeholder : "Enter the name of entity",
//         title       : "Roles Entity",
//         attributeName : "rolesentity"
//       },
//       "tableHeading": {
//                 rolesentity: "Roles Entity",
//                 actions: 'Action',
//             },
//             "tableObjects": {
//                 deleteMethod: 'delete',
//                 apiLink: '/api/rolesentitymaster/',
//                 paginationApply: false,
//                 searchApply: false,
//                 editUrl: '/umroleslist'
//             },
//             "startRange": 0,
//             "limitRange": 10,
//             "editId": this.props.match.params ? this.props.match.params.fieldID : ''
//       };
//   }
//   componentDidMount() {
//         var editId = this.props.match.params.fieldID;
       
//         this.setState({
//             editId: editId
//         })
//         var editId = this.props.match.params.fieldID;
//         window.scrollTo(0, 0);
//     }
//      componentWillReceiveProps(nextProps) {
//         var editId = nextProps.match.params.fieldID;
//         if (nextProps.match.params.fieldID) {
//             this.setState({
//                 editId: editId
//             })
//         }
//     }

//     render() {
//         return (
//             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
//                 <OneFieldForm fields={this.state.fields}
//                               tableHeading={this.state.tableHeading}
//                               tableObjects={this.state.tableObjects}
//                               editId ={this.props.match.params.fieldID}
//                               history={this.props.history} />
//             </div>

//         );
//     }
// }

//  export default RolesEntity;







// // import React, { Component } from 'react';
// // import { render }           from 'react-dom';
// // import TimePicker           from 'rc-time-picker';
// // import moment               from 'moment';
// // import jQuery               from 'jquery';
// // import $                    from 'jquery';
// // // import OneFieldForm         from '../../coreadmin/Master/OneFieldForm/OneFieldForm.js';
// // import OneFieldForm         from '../../Master/OneFieldForm/OneFieldForm.js';
// // import                           'rc-time-picker/assets/index.css';

// // const format = "h:mm a";
// // class DocumentEntityMaster extends Component{
// //    constructor(props) {
// //     super(props);
// //     this.state = {
// //       fields : {
// //         placeholder : "Enter the name of entity",
// //         title       : "Roles Entity",
// //         attributeName : "rolesentity"
// //       },
// //       "tableHeading": {
// //                 rolesentity: "Roles Entity",
// //                 actions: 'Action',
// //             },
// //             "tableObjects": {
// //                 deleteMethod: 'delete',
// //                 apiLink: '/api/rolesentitymaster/',
// //                 paginationApply: false,
// //                 searchApply: false,
// //                 editUrl: '/api/rolesentitymaster',
// //             },
// //             "startRange": 0,
// //             "limitRange": 10,
// //             "editId": ''


// //       };
// //   }
// //   componentDidMount() {
// //     console.log("In Document Entity = ", this.props);
// //     }

// //     render() {
// //         return (
// //             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
// //                 <OneFieldForm fields={this.state.fields}
// //                               tableHeading={this.state.tableHeading}
// //                               tableObjects={this.state.tableObjects}
// //                               editId ={this.props.editId}
// //                               masterFieldForm = {true}                              
// //                               history={this.props.history} />
// //             </div>

// //         );
// //     }
// // }

// //  export default DocumentEntityMaster;


