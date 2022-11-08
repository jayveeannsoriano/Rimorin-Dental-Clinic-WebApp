import axios from "axios";
import React, { useEffect, useState } from 'react';
import DataTable,{ Alignment } from 'react-data-table-component';
import styled, { keyframes } from 'styled-components';
import ApptDetails from "./modals/appt-details";
import AcceptDental from "./modals/accept-dental";
import CancelDental from "./modals/cancel-dental";

const AcceptCancel = () => {

    const [search, setSearch] = useState("");
    const [appointment, setAppointment] = useState([]);
    const [filteredappointment, setFilteredAppointment] = useState([]);
    const [pending, setPending] = useState(true);
    const [rows, setRows] = useState([]);

    const getAppointment = async() => {
        try{
            const responses = await axios.get('http://localhost:3001/getAppointmentDetails');
            console.log(responses);
            setAppointment(responses.data);
            setFilteredAppointment(responses.data);
        }catch (error){
            console.log(error)
        }
    }

    const onRowClick = (state, rowInfo, column, instance) => {
        console.log(rowInfo);
        return {
            onClick: e => {
                console.log('A Td Element was clicked!')
                console.log('it produced this event:', e)
                console.log('It was in this column:', column)
                console.log('It was in this row:', rowInfo)
                console.log('It was in this table instance:', instance)
            }
        }
    }

    const columns = [
        {
            name: 'Patient',
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
            selector: (row) => row.date + " | " + row.time,
            sortable: true,
        },
        {
            name: "Action",
            selector: row => 
            <div className="action-buttons">
                <AcceptDental pName = {row.pName} dName = {row.dName} appNum = {row.appNum} date = {row.date} time ={row.time} consultation = {row.consultation}/>
                <CancelDental appNum = {row.appNum}/>
                <ApptDetails appNum = {row.appNum} date = {row.date} time ={row.time} appStats = {row.appStatus}/>
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

export default AcceptCancel;