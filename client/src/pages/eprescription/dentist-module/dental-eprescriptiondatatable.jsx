import axios from "axios";
import React, { useEffect, useState, useMemo } from 'react';
import DataTable, { Alignment } from 'react-data-table-component';
import styled, { keyframes } from 'styled-components';
import { useSearchParams, useLocation } from "react-router-dom";
import ExportFile from "../../../components/modals/export";
import PrintFile from "../../../components/modals/print";

const DentistEPrescriptionDataTable = () => { 
  const location = useLocation()
  const paramsID = new URLSearchParams(location.search)
  const getPatientIDNumber = paramsID.get('patientIDNum');
  const StringfyIDnumber = useMemo(() => JSON.stringify(getPatientIDNumber).replace(/"/g, ""));
  console.log(StringfyIDnumber, 'epres id num');

    const [search, setSearch] = useState("");
    const [appointment, setAppointment] = useState([]);
    // const [filteredappointment, setFilteredAppointment] = useState([]);
    const [pending, setPending] = useState(true);
    const [rows, setRows] = useState([]);
    const [patientList, setPatientList] = useState([]);

    const getAppointment = async () => {
        try {
            const response = await axios.get('http://localhost:3001/getUserEPresRecord', {
                params: {
                    patientIDnumber: StringfyIDnumber,
                }
            });
            console.log(response, "Responses");
            setAppointment(response.data);
            // setFilteredAppointment(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    const getPatientDetails = async() => {
        try{
            const response = await axios.get('http://localhost:3001/getPatientInfo',{
              params:{
              patientIDnumber: StringfyIDnumber}
            });
            console.log(response, "Responses");
            setPatientList(response.data);
        }catch (error){
            console.log(error)
        }
    }

    const columns = [
        {
            name: 'Date Created',
            selector: (row) => row.presDate,
            sortable: true,
        },
        {
            name: 'Created By',
            selector: (row) => row.dentistName,
        },
        {
            name: "Action",
            selector: (row) => <div className="action-buttons">
                <ExportFile data={["download","prescription",row,patientList]}/>
                <PrintFile data={["print","prescription",row,patientList]}/>
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
        <div style={{ padding: '24px', textAlign: "center" }}>
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
        getPatientDetails();
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
        className="prescription-datatable"
        subHeaderAlign={Alignment.LEFT}
        columns={columns}
        data={appointment}
        progressPending={pending}
        progressComponent={<CustomLoader />}
        fixedHeader
        highlightOnHover
    />

}

export default DentistEPrescriptionDataTable