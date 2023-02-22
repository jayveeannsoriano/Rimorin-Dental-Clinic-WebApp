import React from "react";
import "../../styles/dashboard.css";
import Button from "react-bootstrap/Button";
import DashboardTable from "../../components/dashboardTable";
import UpcomingDashboardTable from "../../components/dashboardUpcomingTable";
import moment from "moment";
import Alert from "react-bootstrap/Alert";
import { useState, useEffect, useRef } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
  var userInfo = JSON.parse(window.localStorage.getItem("current-session"));
  const patientIDnumber = userInfo["patientIDnumber"];
  const [buttonMessage, setButtonMessage] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [userAppointment, setUserAppointment] = useState([]);
  const [currDate, setCurrDate] = useState();
  const navigate = useNavigate();

  const getAppInfo = async () => {
    try {
      const responses = await Axios.get(
        "http://localhost:3001/getUserAppointmentDetailsforDuplicate",
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

  function redirectUnauth() {
    if (userInfo["user_role_id"] == 2) {
      navigate("/secretary", { replace: true });
      return true;
    } else if (userInfo["user_role_id"] == 3) {
      navigate("/dentist", { replace: true });
      return true;
    } else if (userInfo["user_role_id"] == 4) {
      navigate("/admin", { replace: true });
      return true;
    }
  }

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

  function compostieRender() {
    if (!redirectUnauth()) {
      return (
        <>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/patient">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>

          {/* Page Title */}
          <div className="pagetitle">
            <h1>Welcome, {userInfo["fname"]}!</h1>
            <h2>{moment(new Date()).format("MMMM Do YYYY")}</h2>
            <h2>{time}</h2>
          </div>

          <section className="section dashboard">
            <div className="row">
              {/* <!-- Appointments --> */}
              <div className="col-12">
                <div className="card overflow-auto">
                  <div class="card-body datatable">
                    <div class="nav nav-bar">
                      <Button
                        className="table-button active"
                        data-bs-toggle="tab"
                        data-bs-target="#today-appt"
                      >
                        TODAY
                      </Button>
                      <Button
                        className="table-button"
                        data-bs-toggle="tab"
                        data-bs-target="#upcoming-appt"
                      >
                        UPCOMING
                      </Button>
                      <Button
                        className="table-button reqdash-btn"
                        href="/patient/appointments/request-appointment"
                        disabled={validated}
                      >
                        <i class="bi bi-plus-lg"></i> REQUEST APPOINTMENT
                      </Button>
                      <ValidateButton />
                    </div>

                    <div className="col-6 mt-2">{buttonMessage}</div>

                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active today-appt"
                        id="today-appt"
                      >
                        <h5 className="card-title">
                          TODAY&apos;S APPOINTMENTS
                        </h5>
                        <DashboardTable />
                      </div>

                      <div
                        className="tab-pane fade today-appt"
                        id="upcoming-appt"
                      >
                        <h5 className="card-title">UPCOMING APPOINTMENTS</h5>
                        <UpcomingDashboardTable />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End of Appointments --> */}
            </div>
          </section>
        </>
      );
    }
  }
  const [userInformation, setUserInfo] = useState([]);

  const getAppointment = async () => {
    try {
      const response = await Axios.get("http://localhost:3001/getUserInfo", {
        params: {
          patientIDnumber: patientIDnumber,
        },
      });
      setUserInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointment();
  }, []);

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return compostieRender();
};

export default PatientDashboard;
