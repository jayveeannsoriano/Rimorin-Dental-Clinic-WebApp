import axios from "axios";
import React, { useEffect, useState } from 'react';
import DataTable, { Alignment } from 'react-data-table-component';
import styled, { keyframes } from 'styled-components';
import PaymentStatusText from "./payment-status-text";
import { Button } from "react-bootstrap";
import PrintFile from "../../../components/modals/print";
import ExportFile from "../../../components/modals/export";

const SecTransactionDataTable = (patientIDNum) => {

    const StringAppNum = JSON.stringify(patientIDNum);
    const ConvertStringApp = JSON.parse(StringAppNum);
    const PatientIDNumber = JSON.stringify(ConvertStringApp.patientIDNum).replace(/"/g, "");

    const [patientValue, setPatientValue] = useState("");


    const [search, setSearch] = useState("");
    const [appointment, setAppointment] = useState([]);
    const [filteredappointment, setFilteredAppointment] = useState([]);
    const [pending, setPending] = useState(true);
    const [rows, setRows] = useState([]);
    const [patientList, setPatientList] = useState([]);

    const getAppointment = async() => {

        try{
            const response = await axios.get('https://rimorin-dental-clinic.herokuapp.com/getUserTransaction',{
                params: {
                    patientIDnumber: PatientIDNumber
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
          const response = await axios.get('https://rimorin-dental-clinic.herokuapp.com/getPatientInfo',{
            params:{
            patientIDnumber: PatientIDNumber}
          });
          console.log(response, "Responses");
          setPatientList(response.data);
      }catch (error){
          console.log(error)
      }
  }



    const columns = [
      {
        name: "Appt #",
        selector: (row) => row.appNum,
      },
      {
        name: "Date",
        selector: (row) => row.date,
        sortable: true,
      },
      {
        name: "Status",
        selector: (row) => (
            <PaymentStatusText payStats={row.payStatus} />
        ),
      },
      {
        name: "Action",
        selector: (row) => (
          <div className="action-buttons">
            {row.payStatus == "Pending" ? (
              <Button
                id="create-button"
                className="create-button"
                href={
                  "/secretary/payment-records/create-receipt?patientValue=" +
                  row.appNum.substring(1) +
                  "&patientID=" +
                  row.patientIDnumber.substring(3) +
                  "&dateValue=" +
                  row.date +
                  "&ObjectID=" +
                  row._id
                }
              >
                Create Receipt
              </Button>
            ) : (
              <>
                <ExportFile data={["download","receipt",row,patientList]} />
                <PrintFile data={["print","receipt",row,patientList]}/>
              </>
            )}
          </div>
        ),
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
        className="transaction-datatable"
        pagination
        subHeaderAlign={Alignment.LEFT}
        columns={columns}
        data={appointment}
        progressPending={pending}
        progressComponent={<CustomLoader />}
        fixedHeader
        highlightOnHover
    />

}

export default SecTransactionDataTable