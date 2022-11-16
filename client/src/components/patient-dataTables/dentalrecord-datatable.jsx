import Axios from "axios";
import React, { useEffect, useState } from 'react';
import DataTable,{ Alignment } from 'react-data-table-component';
import styled, { keyframes } from 'styled-components';
import Button from 'react-bootstrap/Button';

const DentalRecordDataTable = (response) => {

    const [search, setSearch] = useState("");
    const [appointment, setAppointment] = useState([response.response]);
    // const [filteredappointment, setFilteredAppointment] = useState([]);
    const [pending, setPending] = useState(true);
    const [rows, setRows] = useState([]);
    var url = require('url');
    var url_parts = url.parse(window.location.href, true);
    var query = url_parts.query;
    
    useEffect(() => {

      
    
		const timeout = setTimeout(() => {
			setRows(appointment);
			setPending(false);
		}, 1000);
		return () => clearTimeout(timeout);
	}, []);


    // const getAppointment = async() => {
    //     try{
    //         const response = await axios.get('http://localhost:3001/getUserDentalRecord',{
    //             params: {
    //                 patientIDnumber: query.patientIDNum,
    //             }
    //         });
    //         console.log(response, "Responses");
    //         setAppointment(response.data);
    //         // setFilteredAppointment(response.data);
    //     }catch (error){
    //         console.log(error)
    //     }
    // }

    const columns = [
        {
            name: 'Date',
            selector: (row) => row.dentalDate,
            sortable: true,
        },
        {
            name: 'Tooth No.',
            selector: (row) => row.chartedTeeth,
        },
        {
            name: 'Treatment',
            selector: (row) => row.dentalDesc,
        },
        {
            name: "Action",
            selector: (row) => <div className="action-buttons">
                    <Button className="view-button" href={"/dentist/patient-records/dental-record/view-dental-records/specific-record?patientIDNum="+ query.patientIDNum+"&date="+row.dentalDate}>
                        <i class="bi bi-eye-fill"></i>View
                    </Button>
                 </div>
        }
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

    return <DataTable
    className="transaction-datatable"
    pagination
    subHeaderAlign={Alignment.LEFT}
    columns={columns}
    data={response.response}
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

export default DentalRecordDataTable;