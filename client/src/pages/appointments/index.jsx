import React from "react";
import { Button } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import Alert from "react-bootstrap/Alert";
import Axios from "axios";
import "../../styles/dashboard.css";
import "../../styles/modals.css";
import FollowupTable from "../../components/follow-up-dashboard";
import OnGoingTable from "../../components/ongoing-appointment-table";
import DashboardTableAppHistory from "../../components/dashboardAppHistory";


export default function AppointmentPage() {
  var userInfo = JSON.parse(window.localStorage.getItem("current-session"));
  const patientIDnumber = userInfo["patientIDnumber"];
  const [userAppointment, setUserAppointment] = useState([]);
  const [buttonMessage, setButtonMessage] = useState(true);

  const getAppInfo = async () => {
    try {
      const responses = await Axios.get(
        "https://rimorin-dental-clinic.herokuapp.com/getUserAppointmentDetailsforDuplicate",
        {
          params: {
            patientIDnum: patientIDnumber,
          },
        }
      );
      console.log(responses, "ashjdgashjdgahsgdjhasgdhj");
      setUserAppointment(responses.data);
    } catch (error) {
      console.log(error);
    }
  };

  const appointmentStatus = userAppointment.map(function (item) {
    return item.appStatus;
  });

  const [validated, setValidateValue] = useState(false);
  const ValidateButton = () => {
    console.log(appointmentStatus);
    if (
      appointmentStatus.includes("Pending") ||
      appointmentStatus.includes("Rescheduled") ||
      appointmentStatus.includes("Follow-Up")
    ) {
      console.log("nope");
      setValidateValue(true);
      setButtonMessage(
        <div style={{ fontSize: "12px" }}>
          <Alert key={"primary"} variant={"primary"}>
            You can only request another appointment if your current appointment
            is <strong>Finished</strong>.
          </Alert>
        </div>
      );
    } else {
      console.log("yup");
      setValidateValue(false);
      setButtonMessage(
        <div style={{ fontSize: "12px" }}>
          <a class="text-success">
            <strong> </strong>
          </a>
        </div>
      );
    }
  };
  console.log(validated, "final value of validated");

  useEffect(() => {
    getAppInfo();
  }, []);

  return (
    <div>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/patient">Home</a>
          </li>
          <li className="breadcrumb-item active">Appointments</li>
        </ol>
      </nav>

      <div className="col-6 col-md-4">
        <Button
          href="/patient/appointments/request-appointment"
          disabled={validated}
        >
          Request Appointment
        </Button>
        <ValidateButton />
      </div>

      <div className="col-6 mt-2">{buttonMessage}</div>

      <section className="section dashboard">
        <div className="row">
          <div className="col-12">
            <div className="card overflow-auto">
              <div className="card-body">
                <h5 className="card-title">ONGOING APPOINTMENTS</h5>
                <OnGoingTable />
              </div>

              <div className="card-body">
                <h5 className="card-title">FOLLOW-UP APPOINTMENTS</h5>
                <FollowupTable />
              </div>

              <div className="card-body">
                <h5 className="card-title">APPOINTMENT HISTORY</h5>
                <DashboardTableAppHistory />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
