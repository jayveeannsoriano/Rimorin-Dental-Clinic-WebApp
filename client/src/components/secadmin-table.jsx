import axios from "axios";
import React, { useEffect, useState } from 'react';
import DataTable,{ Alignment } from 'react-data-table-component';
import styled, { keyframes } from 'styled-components';

//project imports
import ApptDetails from "./modals/appt-details";
import ReschedConfirmation from "./modals/reschedule-appointment";
import SecAdminRebook from "./modals/secadminrebook";
import FollowUp from "./modals/followUp"
import ApptDetailsText from "./modals/appt-details-text";

const SecAdminDashboardTable = () => {
  var userInfo = JSON.parse(window.localStorage.getItem("current-session"));

    const [search, setSearch] = useState("");
    const [appointment, setAppointment] = useState([]);
    const [filteredappointment, setFilteredAppointment] = useState([]);
    const [pending, setPending] = useState(true);
    const [rows, setRows] = useState([]);

    var getTodayDate = new Date();
    window.localStorage.setItem('getTodayDate', getTodayDate);
    var todayDate = window.localStorage.getItem('getTodayDate');
    console.log(todayDate, 'dateToday');

       //move user no show that day to app history as no show
       const convertDate = getTodayDate.toString().substring(0, 15);
       console.log(convertDate, "dateToday");
 
     appointment.map(function (item) {
         if (item.date != convertDate) {
             axios.post("https://rimorin-dental-clinic.herokuapp.com/moveToAppointmentHistoryAsNoShow", {
                 patientIDnumber: item.patientIDnumber,
                 appNum: item.appNum,
                 pName: item.pName,
                 dName: item.dName,
                 date: item.date,
                 time: item.time,
                 consultation: item.consultation,
               })
               console.log("Moving ", item.appNum, item.pName, " to Appointment History")
           } else {
             console.log("USER MAY PAG ASA PANG MAG SHOW SA APPOINTMENT");
           }
      });

    const getAppointment = async() => {
        try{
          const response = await axios.get('https://rimorin-dental-clinic.herokuapp.com/getTodayAppointmentDetails',{
            params: {
                
                date:convertDate
            }
        });
            console.log(response, "Responses");
            setAppointment(response.data);
            setFilteredAppointment(response.data);
        }catch (error){
            console.log(error)
        }
    }

    const columns = [
      {
        name: "Patient",
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
        selector: (row) => row.date.substring(0,10) + " | " + row.time,
        sortable: true,
      },
      {
        name: "Appt. Status",
        selector: (row) => <ApptDetailsText appStats={row.appStatus} />,
        sortable: true,
      },
      {
        name: "Action",
        selector: (row) => (
          <div className="action-buttons">
            {row.appStatus == "Arrived" || row.appStatus == "No Show" || row.appStatus == "Accepted"  ? (
                <>
                    <SecAdminRebook
                        patientIDnumber={row.patientIDnumber}
                        appNum={row.appNum}
                        pName={row.pName}
                        dName={row.dName}
                        date={row.date}
                        time={row.time}
                        consultation={row.consultation} />
                    <ReschedConfirmation
                        patientIDnumber={row.patientIDnumber}
                        pName={row.pName}
                        appNum={row.appNum} />
                </>
                ) 
                : (<FollowUp dentistIDnumber={row.dentistIDnumber} patientIDnumber={row.patientIDnumber} appNum={row.appNum} dName={row.dName}/>)
            }

            <ApptDetails
              pName={row.pName}
              appNum={row.appNum}
              date={row.date}
              time={row.time}
              appStats={row.appStatus}
              consultation={row.consultation}
            />
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

        console.log(result, "This is the result");
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
        placeholder="Search for Patient" 
        className="w-50 form-control datatable-search" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
    }
    />
  
}

export default SecAdminDashboardTable;