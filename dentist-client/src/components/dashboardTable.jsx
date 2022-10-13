import axios from "axios";
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';


const DashboardTable = () => {

    const[search, setSearch] = useState("");
    const[appointment, setAppointment] = useState([]);
    const[filteredappointment, setFilteredAppointment] = useState([]);

    const getAppointment = async() => {

        try{
            const response = await axios.get('http://localhost:5000/getAppointmentDetails')
            setAppointment(response.data);
            setFilteredAppointment(response.data);
        }catch (error){
            console.log(error)
        }
    }

    const columns = [
        {
            name: 'Patient Name',
            selector: (row) => row.pName,
            sortable: true,
        },
        {
            name: "Appt #",
            selector: (row) => row.appNum,
            sortable: true,
        },
        {
            name: "Date & Time",
            selector: (row) => row.datetime,
            sortable: true,
        },
        {
            name: "Appt. Status",
            //cell: row => <button className="eugene" onClick={() => alert(row._id + " SHEEEEEEEEEESH")}>Update</button>
            selector: row => <div>Accepted <button className="eugene" onClick={() => alert("SHEEEEEEEEEESH")}>Update</button></div>,
        },
        {
            name: "Action",
            selector: row => <div><button className="eugene" onClick={() => alert("SHEEEEEEEEEESH")}>Reschedule</button> <button className="eugene" onClick={() => alert("SHEEEEEEEEEESH")}>View</button></div>
        },
    ];


    useEffect(() => {
        getAppointment();
    }, []);

    useEffect(() => {
        const result = appointment.filter((appointment) => {
            return appointment.pName.toLowerCase().match(search.toLowerCase());
        });

        setFilteredAppointment(result)
    },[search])

  return <DataTable
    pagination
    columns={columns}
    data={filteredappointment}
    fixedHeader
    highlightOnHover
    subHeader
    subHeaderComponent={
    <input 
    type="text" 
    placeholder="Search here" 
    className="w-25 form-control" 
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    />}
    />
  
}

export default DashboardTable