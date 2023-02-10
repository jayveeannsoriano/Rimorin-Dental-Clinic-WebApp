import React, { useEffect, useState, useMemo } from "react";
import "react-bootstrap";

//Axios
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const FollowUpDetail = ({ nextStep, prevStep, handleChange, values }) => {
  const location = useLocation();
  const paramsID = new URLSearchParams(location.search);
  const getPatientID = paramsID.get("patientIDValue");
  const getPrevID = paramsID.get("patientAppNum");
  const getDocName = paramsID.get("dentistName");
  const getDocID = paramsID.get("dentistIDnumber");
  const [patientUser, setPatientUser] = useState([]);
  const [patientMobile, setPatientNumber] = useState([]);
  const [patientEmail, setPatientEmail] = useState([]);
  const StringfyPatientID = useMemo(() =>
    JSON.stringify(getPatientID).replace(/"/g, "")
  );
  const StringfygetPrevID = useMemo(() =>
    JSON.stringify(getPrevID).replace(/"/g, "")
  );
  const StringfyDocName = useMemo(() =>
    JSON.stringify(getDocName).replace(/"/g, "")
  );
  const StringfyDocID = useMemo(() =>
    JSON.stringify(getDocID).replace(/"/g, "")
  );
  console.log(StringfyPatientID, "FOLLOW UP ID");
  window.localStorage.setItem("patientIDNum", "PT#" + StringfyPatientID);
  window.localStorage.setItem("userName", patientUser);
  window.localStorage.setItem("userPhone", patientMobile);
  window.localStorage.setItem("userEmail", patientEmail);
  window.localStorage.setItem("prevAppNum", "#" + StringfygetPrevID);
  window.localStorage.setItem("docName", StringfyDocName);
  window.localStorage.setItem("docID", "DT#" + StringfyDocID);

  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://rimorin-dental-clinic.herokuapp.com/getUserInfoFollowUp",
        {
          params: {
            patientIDNum: "PT#" + StringfyPatientID,
          },
        }
      );
      setPatientUser(response.data[0].fname + " " + response.data[0].lname);
      setPatientNumber(response.data[0].mobile);
      setPatientEmail(response.data[0].email);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/appointments">Appointments</a>
          </li>
          <li className="breadcrumb-item active">Follow-UpAppointment</li>
        </ol>
      </nav>

      <section className="section dashboard">
        <div className="row">
          {/* Card Title*/}
          <div className="card-body">
            <h5 className="appt-title">FOLLOW-UP APPOINTMENT</h5>

            {/* Stepper */}
            <div className="md-stepper-horizontal orange">
              <div className="md-step">
                <div className="md-step-circle">
                  <span>1</span>
                </div>
                <div className="md-step-title">Fill-up</div>
                <div className="md-step-bar-left"></div>
                <div className="md-step-bar-right"></div>
              </div>
              <div className="md-step active">
                <div className="md-step-circle">
                  <span>2</span>
                </div>
                <div className="md-step-title">Review Appointment Details</div>
                <div className="md-step-bar-left"></div>
                <div className="md-step-bar-right"></div>
              </div>
              <div className="md-step">
                <div className="md-step-circle">
                  <span>3</span>
                </div>
                <div className="md-step-title">Done</div>
                <div className="md-step-bar-left"></div>
                <div className="md-step-bar-right"></div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="container previous-appointment-details-container">
              <div className="row">
                <div className="col-4">
                  <div className="appointment-info">
                    <h1>PATIENT DETAILS</h1>
                    <h2>Patient Name:</h2>
                    <h3>{patientUser}</h3>

                    <h2>Patient ID:</h2>
                    <h3>PT#{StringfyPatientID}</h3>
                  </div>
                </div>

                <div className="col-4">
                  <div className="appointment-info">
                    <h1>DOCTOR INFORMATION</h1>
                    <h2>Doctor Name:</h2>
                    <h3 id="doctor-name">Dr. {getDocName}</h3>
                    <h2>Clinic Location:</h2>
                    <h3 id="clinic-location">
                      Victoria Shoppesville, Upper Mabini Street, Baguio City,
                      Philippines
                    </h3>
                  </div>
                </div>

                <div className="col-4">
                  <div className="appointment-info">
                    <h1>APPOINTMENT DETAILS</h1>
                    <h2>Date of Appoinment</h2>
                    {JSON.stringify(window.localStorage.getItem("date"))
                      .replace(/"/g, "")
                      .substring(0, 15) +
                      " | " +
                      window.localStorage.getItem("time")}
                    <h2>Treatment Procedures</h2>
                    {/* map selected treatment procedures */}
                    <h3>{values.consulation}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>
          <div className="appointment-info">
            <div className="col-12">
              <div className="appt-bttns">
                <button
                  onClick={Previous}
                  className="btn btn-outline-secondary"
                  type="submit"
                >
                  Previous
                </button>
                <button
                  onClick={Continue}
                  className="btn btn-primary"
                  type="submit"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FollowUpDetail;
