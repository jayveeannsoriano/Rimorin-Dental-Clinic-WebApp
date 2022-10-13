// import DataTable from 'react-data-table-component';
// import style from "../styles/dashboard-test.css";
// import React, { Component } from "react"
// // import { connect } from "react-redux"
// import { Table, Button, Container } from "reactstrap"

// export default class DashboardPageTest extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//           userData: "",
//         };
//         this.componentDidMount = this.componentDidMount.bind(this)
//         this.renderTable = this.renderTable.bind(this)
//         this.renderTableBody = this.renderTableBody.bind(this)
//       }


//       componentDidMount() {
//         fetch("http://localhost:5000/userData", {
//           method: "POST",
//           crossDomain: true,
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//             "Access-Control-Allow-Origin": "*",
//           },
//           body: JSON.stringify({
//             token: window.localStorage.getItem("token"),
//           }),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data, "userData");
//             this.setState({ userData: data.data });
//           });
//       }

//       renderTableBody() {
//         const body = document.getElementById("table-body")
//         const length = this.props.users.length
//         for (var i = 0; i < this.props.users.length; i++) {
//         const row = document.createElement("tr")
//         row.id = this.props.userData[i]._id
//         const col1 = document.createElement("td")
//         col1.innerText = this.props.userData[i].fname
//       }

//     }

//     renderTable() {
//         console.log(this.props.users)
//         return (
//           <Table responsive>
//             <thead>
//               <tr>
//                 <th className="text-left">ID</th>
//                 <th>Email</th>
//                 <th>Next Payment</th>
//                 <th className="text-left">Status</th>
//                 <th className="text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody id="table-body">{this.renderTableBody()}</tbody>
//           </Table>
//         )
//       }


//     render(){
//         return(
//             <div>
//                   {this.renderTable()}
//             </div>
//         )
//     }
// }