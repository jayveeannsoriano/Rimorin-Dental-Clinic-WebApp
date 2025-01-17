import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable, { Alignment } from "react-data-table-component";
import styled, { keyframes } from "styled-components";
import ApptPatientDetails from "./modals/appt-patient-details";
import ReschedConfirmation from "./modals/reschedule-appointment";
import CancelAppointment from "./modals/cancel-appointment";
import ApptDetailsText from "./modals/appt-details-text";
import ApptDetailsResched from "./modals/appt-details-reschedule";
import ApptDetailsFollowUp from "./modals/appt-details-followup";

const UpcomingDashboardTable = () => {
  var userInfo = JSON.parse(window.localStorage.getItem("current-session"));
  const patientIDnumber = userInfo["patientIDnumber"];

  var getTodayDate = new Date();
  window.localStorage.setItem("getTodayDate", getTodayDate);
  const convertDate = getTodayDate.toString().substring(0, 15);

  const [search, setSearch] = useState("");
  const [appointment, setAppointment] = useState([]);
  const [filteredappointment, setFilteredAppointment] = useState([]);
  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState([]);
  const [selectRow, setSelectRowValues] = useState({ date: "", time: "" });
  const handleButtonClick = (state) => {
    console.log("clicked");
    console.log(state.target.id);
  };

  function getPreviousDay(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
  
    return previous.toString().substring(0,15);
  }

  //console.log("YESTERDAY DATE",getPreviousDay());

appointment.map(function (item) {
    if (item.date == getPreviousDay()) {
        axios.post("https://rimorin-dental-clinic.herokuapp.com/moveToAppointmentHistoryAsExpired", {
            patientIDnumber: item.patientIDnumber,
            appNum: item.appNum,
            pName: item.pName,
            dName: item.dName,
            date: item.date,
            time: item.time,
            procedures: item.procedures,
            objectID: item._id
          })
          console.log("Moving ", item.appNum, item.pName, " to Appointment History")
      }
 });

  const getAppointment = async () => {
    try {
      const response = await axios.get(
        "https://rimorin-dental-clinic.herokuapp.com/getUpcomingUserAppointmentDetails",
        {
          params: {
            patientIDnumber: patientIDnumber,
            date: convertDate,
          },
        }
      );
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
          {row.appStatus == "Pending" ? (
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
              procedures={row.procedures}
              />
            </>

          ) : row.appStatus == "Arrived" ? (
            <ApptPatientDetails
            dName={row.dName}
            pName={row.pName}
            appNum={row.appNum}
            date={row.date}
            time={row.time}
            appStats={row.appStatus}
            procedures={row.procedures}
           /> 

          ) : row.appStatus == "Rescheduled" ? (
            <ApptDetailsResched
            pName={row.pName}
            appNum={row.appNum}
            date={row.date}
            time={row.time}
            appStats={row.appStatus}
            />

          ) : row.appStatus == "Follow-Up" ? (
            <ApptDetailsFollowUp
            pName={row.pName}
            appNum={row.appNum}
            date={row.date}
            time={row.time}
            appStats={row.appStatus}
            procedures={row.procedures}
            />
          ) : (
            <ApptPatientDetails
            dName={row.dName}
            pName={row.pName}
            appNum={row.appNum}
            date={row.date}
            time={row.time}
            appStats={row.appStatus}
            procedures={row.procedures}
            /> 
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
    getPreviousDay();
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

export default UpcomingDashboardTable;
