// import DataTable from 'react-data-table-component';
// import style from "../styles/dashboard-test.css";
// import React, { Component } from "react"
// import { connect } from "react-redux"
// import { Table, Button, Container } from "reactstrap"

// class DashboardPageTest extends Component {
//     constructor(props) {
//       super(props)
//       this.renderTable = this.renderTable.bind(this)
//       this.renderTableBody = this.renderTableBody.bind(this)
//       state = {name, appt, datetime, status, action}
//     }
  
//     renderTableBody() {
//       const body = document.getElementById("table-body")
//       const length = this.props.users.length
//       for (var i = 0; i < this.props.users.length; i++) {
//         const row = document.createElement("tr") //row
//         row.id = this.props.users[i]._id
//         const col1 = document.createElement("td")
//         col1.innerText = this.props.users[i].name
//         const col2 = document.createElement("td")
//         col2.innerText = this.props.users[i].appt
//         const date = new Date(this.props.users[i].pay_date)
//         date.setMonth(date.getMonth() + 1)
//         const col3 = document.createElement("td")
//         col3.innerText = date.toLocaleDateString()
//         const col4 = document.createElement("td")
//         col4.innerText = this.props.users[i].status
//         const col5 = document.createElement("td")
//         col4.innerText = this.props.users[i].status
//         const col6 = document.createElement("td")  //end cell
//         col5.setAttribute("name", "button-column")
//         col5.style.display = "inline-block"
  
//         const button1 = document.createElement("Button")
//         const button2 = document.createElement("Button")
//         const button3 = document.createElement("Button")
//         //button1.style.alignSelf = "center"
//         button1.setAttribute("class", "btn-icon btn-simple btn btn-info btn-sm")
//         button2.setAttribute(
//           "class",
//           "btn-icon btn-simple btn btn-success btn-sm"
//         )
//         button3.setAttribute("class", "btn-icon btn-simple btn btn-danger btn-sm")
//         const button1icon = document.createElement("i")
//         const button2icon = document.createElement("i")
//         const button3icon = document.createElement("i")
//         button1icon.setAttribute("class", "fa fa-user")
//         button1icon.setAttribute("color", "info")
//         button1icon.setAttribute("size", "sm")
//         button2icon.setAttribute("class", "fa fa-edit")
//         button2icon.setAttribute("color", "success")
//         button2icon.setAttribute("size", "sm")
//         button3icon.setAttribute("class", "fa fa-times")
//         button3icon.setAttribute("color", "danger")
//         button3icon.setAttribute("size", "sm")
//         button1.appendChild(button1icon)
//         button2.appendChild(button2icon)
//         button3.appendChild(button3icon)
  
//         col5.appendChild(button1)
//         col5.appendChild(button2)
//         col5.appendChild(button3)
//         row.appendChild(col1)
//         row.appendChild(col2)
//         row.appendChild(col3)
//         row.appendChild(col4)
//         row.appendChild(col5)
//         body.appendChild(row)
//         if (length === i) {
//           break
//         }
//       }
//       // this.renderButtons()
//     }
//     renderTable() {
//       console.log(this.props.users)
//       return (
//         <Table responsive>
//           <thead>
//             <tr>
//               <th className="text-left">ID</th>
//               <th>Email</th>
//               <th>Next Payment</th>
//               <th className="text-left">Status</th>
//               <th className="text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody id="table-body">{this.renderTableBody()}</tbody>
//         </Table>
        
//         // Array.from(this.props.users).map(user => {
//         //     return (
//         //        `<tr key=${user.id} id=${user.id}>
//         //          <td>${user.name}</td> // or whatever info your trying to display 
//         //        </tr>`
//         //     )
//         //  })

//       )
//     }
//     render() {
//       return (
//         <div>
//           <h1 style={{ textAlign: "center" }}>WELCOME ADMIN!</h1>
//           <h4 style={{ textAlign: "center" }} S>
//             Users
//           </h4>
//           {this.renderTable()}
//         </div>
//       )
//     }
//   }
  
//   function mapStateToProps(state) {
//     return {
//       auth: state.auth,
//       card: state.card,
//       stock: state.stock,
//       users: state.users
//     }
//   }





// // function DashboardPageTest(){

// //     const columns = [
// //         {
// //             name: 'Patient Name',
// //             selector: row => row.name,
// //         },
// //         {
// //             name: 'Appt #',
// //             selector: row => row.appt,
// //         },
// //         {
// //             name: 'Date and Time',
// //             selector: row => row.datetime,
// //         },
// //         {
// //             name: 'Appt. Status',
// //             class: "btn-outline-warning btn-rounded",
// //             selector: row => row.status,
// //         },
// //         {
// //             name: 'Action',
// //             selector: row => row.action,
// //         },
// //     ];
    
// //     const data = [
// //         {
// //             id: 1,
// //             name: 'Test Name',
// //             appt: '19',
// //             datetime: 'May 12,2023 2:30PM',
// //             status: 'Ongoing',
// //             action: 'IDK'
// //         },
// //     ]

    

// //     return(
// //      <div>
// //            <DataTable
// //             columns={columns}
// //             data={data}
// //         />

// //     </div>
                    
// //     )
// // }

// // export default DashboardPageTest;