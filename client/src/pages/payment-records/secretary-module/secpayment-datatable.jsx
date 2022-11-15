import axios from "axios";
import React, { useEffect, useState } from 'react';
import DataTable,{ Alignment } from 'react-data-table-component';
import styled, { keyframes } from 'styled-components';

const SecTransactionDataTable = (patientIDNum) => {

    const StringAppNum = JSON.stringify(patientIDNum);
    const ConvertStringApp = JSON.parse(StringAppNum);
    const PatientIDNumber = JSON.stringify(ConvertStringApp.patientIDNum).replace(/"/g,"");

    const [patientValue, setPatientValue] = useState("");

    
    const [search, setSearch] = useState("");
    const [appointment, setAppointment] = useState([]);
    // const [filteredappointment, setFilteredAppointment] = useState([]);
    const [pending, setPending] = useState(true);
    const [rows, setRows] = useState([]);

    const goToReceipt = () =>{
        console.log(patientValue)
        // <a href={"/secretary/payment-records/create-receipt?patientValue=" +  patientValue.substring(1)}>
        window.location.href="/secretary/payment-records/create-receipt?patientValue=" +  patientValue.substring(1);
    }
  

    const getAppointment = async() => {
  

        try{
            const response = await axios.get('http://localhost:3001/getUserTransaction',{
                params: {
                    patientIDnumber: PatientIDNumber
                }
            });
            console.log(response, "Responses");
            setAppointment(response.data);
            // setFilteredAppointment(response.data);
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
            name: 'Date',
            selector: (row) => row.date,
            sortable: true,
        },
        {
            name: 'Appt #',
            selector: (row) => row.appNum,
        },
        {
            name: 'Payment Status',
            selector: (row) => row.payStatus,
        },
        {
            name: "Action",
            selector: (row) => <div className="action-buttons" >
                <button value={row.appNum} onClick={(e) => {
                    setPatientValue(e.target.value);
                    goToReceipt();
                }}>Create Receipt</button>
                <button>View</button>
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

    // useEffect(() => {
    //     const result = appointment.filter((appointment) => {
    //         return appointment.pName.toLowerCase().match(search.toLowerCase());
    //     });

    //     console.log(result, "This is the result");
    //     setFilteredAppointment(result)
    // },[search])

    return <DataTable
    pagination
    subHeaderAlign={Alignment.LEFT}
    columns={columns}
    data={appointment}
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

export default SecTransactionDataTable