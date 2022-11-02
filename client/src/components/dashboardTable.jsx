import axios from "axios";
import React, { useEffect, useState } from 'react';
import DataTable,{ Alignment } from 'react-data-table-component';
import styled, { keyframes } from 'styled-components';
import ApptDetails from "./modals/appt-details";
import ReschedConfirmation from "./modals/reschedule-appointment";
import ApptStatus from "./modals/appt-status";
import CancelAppointment from "./modals/cancel-appointment";

const DashboardTable = () => {

    const [search, setSearch] = useState("");
    const [appointment, setAppointment] = useState([]);
    const [filteredappointment, setFilteredAppointment] = useState([]);
    const [pending, setPending] = useState(true);
    const [rows, setRows] = useState([]);

    const getAppointment = async() => {
        try{
            const response = await axios.get('https://rimorin-dental-clinic.herokuapp.com/getAppointmentDetails');
            console.log(response);
            setAppointment(response.data);
            setFilteredAppointment(response.data);
        }catch (error){
            console.log(error)
        }
    }

    const columns = [
        {
            name: 'Doctor',
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
            selector: (row) => row.date + " |  " + row.time,
            sortable: true,
        },
        {
            name: "Appt. Status",
            //cell: row => <button className="eugene" onClick={() => alert(row._id + " SHEEEEEEEEEESH")}>Update</button>
            selector: row => <div>
                <span id="appointment_status"> Accepted </span> 
                </div>,
        },
        {
            name: "Action",
            selector: row => <div>
                < ReschedConfirmation/>
                <CancelAppointment/>
                < ApptDetails/>
                </div>
        },
    ];

    
    // Loading effect
    const rotate360 = keyframes` 
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    `;

    const Spinner = styled.div`
        margin: 16px;
        animation: ${rotate360} 1s linear infinite;
        transform: translateZ(0);
        border-top: 2px solid #7879f1;
        border-right: 2px solid #7879f1;
        border-bottom: 2px solid #7879f1;
        border-left: 3px solid #7879f1;
        background: transparent;
        width: 80px;
        height: 80px;
        border-radius: 50%;
    `;

    const CustomLoader = () => (
        <div style={{ padding: '24px', textAlign: "center"}}>
            <Spinner />
            <div>Loading...</div>
        </div>
    );

   useEffect(() => {
		const timeout = setTimeout(() => {
			setRows(appointment);
			setPending(false);
		}, 1000);
		return () => clearTimeout(timeout);
	}, []);

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
    subHeaderAlign={Alignment.LEFT}
    columns={columns}
    data={filteredappointment}
    progressPending={pending}
    progressComponent={<CustomLoader />}
    fixedHeader
    highlightOnHover
    subHeader
    subHeaderComponent={
        <input 
        type="text" 
        placeholder="Search" 
        className="w-50 form-control datatable-search" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
    }
    />
  
}

export default DashboardTable