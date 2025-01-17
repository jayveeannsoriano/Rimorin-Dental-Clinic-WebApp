import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable, { Alignment } from "react-data-table-component";
import styled, { keyframes } from "styled-components";

//project imports
import "../styles/dashboard.css";
import "../styles/modals.css";
import ApptPatientDetails from "./modals/appt-patient-details";
import ReschedConfirmation from "./modals/reschedule-appointment";
import CancelAppointment from "./modals/cancel-appointment";
import ApptDetailsText from "./modals/appt-details-text";
import ApptDetailsResched from "./modals/appt-details-reschedule";
import ApptDetailsFollowUp from "./modals/appt-details-followup";

const OnGoingTable = () => {
  var userInfo = JSON.parse(window.localStorage.getItem("current-session"));
  const patientIDnumber = userInfo["patientIDnumber"];

  const [search, setSearch] = useState("");
  const [appointment, setAppointment] = useState([]);
  const [filteredappointment, setFilteredAppointment] = useState([]);
  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState([]);

  
   //move user no show that day to app history as no show
      const getTodayDate = new Date();
      const convertDate = getTodayDate.toString().substring(0, 15);
      //console.log(convertDate, "dateToday");
      
  const getAppointment = async () => {
    try {
      const response = await axios.get(
        "https://rimorin-dental-clinic.herokuapp.com/getOngoingUserAppointment",
        {
          params: {
            patientIDnumber: patientIDnumber,
          },
        }
      );
      console.log("ongoing " + response.data);
      setAppointment(response.data);
      setFilteredAppointment(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "Doctor",
      selector: (row) => row.dName,
      sortable: true,
    },
    {
      name: "Appt#",
      selector: (row) => row.appNum,
      sortable: true,
    },
    {
      name: "Date & Time",
      selector: (row) => row.date.substring(0, 10) + " |  " + row.time,
      sortable: true,
    },
    {
      name: "Appt. Status",
      selector: (row) => (
        <div className="appt-details">
          <ApptDetailsText appStats={row.appStatus} />
        </div>
      ),
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="action-buttons">
          {row.appStatus == "Accepted" ? (
            <>
            <ApptPatientDetails
            dName={row.dName}
            pName={row.pName}
            appNum={row.appNum}
            date={row.date}
            time={row.time}
            appStats={row.appStatus}
            procedures={row.procedures}
            />
          </>
          ) : (
            <>
            <ReschedConfirmation
              patientIDnumber={row.patientIDnumber}
              pName={row.pName}
              dName={row.dName}
              appNum={row.appNum}
              procedures={row.procedures}
              />
            <CancelAppointment appNum={row.appNum} />
            <ApptPatientDetails
            dName={row.dName}
            pName={row.pName}
            appNum={row.appNum}
            date={row.date}
            time={row.time}
            appStats={row.appStatus}
            procedures={row.procedures}/>
            </>
            )
          }
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
  }, []);

  useEffect(() => {
    const result = appointment.filter((appointment) => {
      return appointment.appNum.toLowerCase().match(search.toLowerCase());
    });

    setFilteredAppointment(result);
  }, [search]);

  return (
    <DataTable
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
  );
};

export default OnGoingTable;
