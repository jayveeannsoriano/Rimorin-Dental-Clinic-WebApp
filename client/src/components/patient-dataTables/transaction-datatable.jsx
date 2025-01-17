import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import DataTable, { Alignment } from "react-data-table-component";
import styled, { keyframes } from "styled-components";
import PaymentStatusText from "./payment-status-text";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import { createReceiptPatientRef } from "../../pages/payment-records/secretary-module/secpayment-datatable";

// Action Buttons
import ExportFile from "../modals/export";
import PrintFile from "../modals/print";

const TransactionDataTable = () => {
  const location = useLocation();
  const paramsID = new URLSearchParams(location.search);
  const getPatientIDNumber = paramsID.get("patientIDNum");
  const StringfyIDnumber = useMemo(() =>
    JSON.stringify(getPatientIDNumber).replace(/"/g, "")
  );
  console.log(StringfyIDnumber, "dent create receipt");

  const patientIDnumber = StringfyIDnumber;

  console.log(patientIDnumber, "PATIENT REASDASD");

  const [appointment, setAppointment] = useState([]);
  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState([]);
  const [patientList, setPatientList] = useState([]);

  const getAppointment = async () => {
    try {
      const response = await axios.get(
        "https://rimorin-dental-clinic.herokuapp.com/getUserTransaction",
        {
          params: {
            patientIDnumber: patientIDnumber,
          },
        }
      );
      console.log(response, "Responses");
      setAppointment(response.data);
      // setFilteredAppointment(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPatientDetails = async () => {
    try {
      const response = await axios.get(
        "https://rimorin-dental-clinic.herokuapp.com/getPatientInfo",
        {
          params: {
            patientIDnumber: StringfyIDnumber,
          },
        }
      );
      console.log(response, "Responses");
      setPatientList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
      name: "Payment Status",
      selector: (row) => (
        <div className="payment-details">
          <PaymentStatusText payStats={row.payStatus} />
        </div>
      ),
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="action-buttons">
          {row.payStatus == "Paid" ? (
            <>
              <PrintFile data={["print", "receipt", row, patientList]} />
              <ExportFile data={["download", "receipt", row, patientList]} />
            </>
          ) : null}
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
    <div style={{ padding: "24px", textAlign: "center" }}>
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

  return (
    <DataTable
      className="patient-transaction-datatable"
      pagination
      subHeaderAlign={Alignment.LEFT}
      columns={columns}
      data={appointment}
      progressPending={pending}
      progressComponent={<CustomLoader />}
      fixedHeader
      highlightOnHover
    />
  );
};

export default TransactionDataTable;
