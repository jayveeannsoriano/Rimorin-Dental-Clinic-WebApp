import React, { useEffect, useState, useMemo } from "react";
import "react-bootstrap";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
//project imports
import Timeslot from "../../../components/timeslot.jsx";
import "../../../styles/booking.css";
import "../../../styles/dental-record.css";
//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//Axios
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const FollowUpInput = ({ nextStep, handleChange, values }) => {
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
        "http://localhost:3001/getUserInfoFollowUp",
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

  //calendar input
  const [startDate, setStartDate] = useState(new Date());
  window.localStorage.setItem(
    "formattedDate",
    startDate != null ? startDate.toISOString().substring(0, 10) : ""
  );

  //time input
  const [time, setGetTime] = useState("");

  const [chosenDate, setChosenDate] = useState("");
  var [totalApptTime, settotalApptTime] = useState(0);

  const [timeCheck, setTimeCheck] = useState("");
  window.localStorage.setItem("time", timeCheck);

  const [takenAppointments, setTakenAppointments] = useState([]);

  window.localStorage.setItem("date", startDate);

  const navigate = useNavigate();

  //Get All appointments on date
  const getAppointmenstbyDate = async (date) => {
    try {
      setChosenDate(date);
      const response = await axios.get(
        "http://localhost:3001/getAppointmentsbyDate",
        {
          params: {
            date: date,
          },
        }
      );

      var data = response.data;
      var tempArr = [];
      data.forEach((appt) => {
        tempArr.push(appt.time);
      });
      setTakenAppointments(tempArr);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    var initialDate = new Date();
    getAppointmenstbyDate(initialDate.toString().substring(0, 10));
  }, []);

  //treatment procedure checkbox options
  const [checked, setChecked] = useState([
    {
      option: "General",
      chosen: [],
    },
    {
      option: "Cosmetic",
      chosen: [],
    },
    {
      option: "Orthodontics",
      chosen: [],
    },
    {
      option: "Endodontic",
      chosen: [],
    },
    {
      option: "Prosthetic",
      chosen: [],
    },
    {
      option: "Surgical",
      chosen: [],
    },
  ]);
  const [dentalItem, setDentalItem] = useState([]);
  useEffect(() => {
    checked.map((item) =>
      item.chosen != null
        ? item.chosen.map((proc) =>
            setDentalItem((current) => [...current, proc])
          )
        : null
    );
    console.log(totalApptTime);


  }, [checked]);
  //time is in minutes
  const generalOptions = [
    { procedure: "CONSULTATION", time: 30 },
    { procedure: "COMPOSITE FILLING", time: 60 },
    { procedure: "ORAL PROPHYLAXIS", time: 60 },
    { procedure: "TOOTH EXTRACTION", time: 90 },
    { procedure: "TOOTH RESTORATION", time: 90 },
    { procedure: "PTS AND FISSURES SEALANT", time: 60 },
    { procedure: "FLOURIDE TREATMENT", time: 90 },
    { procedure: "INTERMEDIATE RESTORATION", time: 120 },
  ];
  const cosmeticOptions = [
    { procedure: "GLASS IONOMER", time: 60 },
    { procedure: "DIRECT COMPOSITE VENEER", time: 60 },
    { procedure: "DIRECT COMPOSITE CLASS IV", time: 60 },
    { procedure: "DIASTEMA CLOSURE (BONDING)", time: 90 },
    { procedure: "CERAMIC/PORCELAIN VENEER", time: 180 },
  ];
  const orthodonticOptions = [
    { procedure: "ORTHODONTICS- UPPER BRACES", time: 90 },
    { procedure: "ORTHODONTICS- LOWER BRACES", time: 90 },
    { procedure: "ORTHODONTICS- UPPER AND LOWER BRACES", time: 180 },
    { procedure: "RETAINER (BOTH ARCH'S)", time: 90 },
  ];
  const endodonticOptions = [
    { procedure: "ROOT CANAL THERAPY", time: 90 },
    { procedure: "PULPOTOMY", time: 60 },
    { procedure: "POST AND CORE", time: 60 },
    { procedure: "DEEP SCALING", time: 120 },
  ];
  const prostheticOptions = [
    { procedure: "DENTAL REPAIR", time: 60 },
    { procedure: "DENTURE RELINE (LABORATORY MADE)", time: 60 },
    { procedure: "DENTURE RELINE (DIRECT)", time: 60 },
    { procedure: "SOFT RELINE", time: 60 },
    { procedure: "DENTURE REPLACEMENT", time: 90 },
    { procedure: "FULL DENTURE PLASTIC", time: 90 },
    { procedure: "FULL DENTURE PORCELAIN", time: 90 },
  ];
  const surgicalOptions = [
    { procedure: "ODONTECTOMY", time: 60 },
    { procedure: "OPERCULECTOMY", time: 90 },
    { procedure: "FRENECTOMY", time: 60 },
    { procedure: "ALVEOLECTOMY", time: 60 },
    { procedure: "GINGIVECTOMY OR CONTOURING", time: 60 },
    { procedure: "APICOECTOMY", time: 90 },
  ];
  //const [checked, setChecked] = useState([{ option: "Others", chosen: [] }]);
  const handleChangeCheckbox = (input) => (event) => {
    var value = JSON.parse(event.target.value);
    var isChecked = event.target.checked;
    var tempVar = totalApptTime;
    if (isChecked) {
      tempVar = totalApptTime + parseInt(event.target.id);
      settotalApptTime(tempVar);
    }else{
      tempVar = totalApptTime - parseInt(event.target.id);
      settotalApptTime(tempVar);
    }
    var tempArr = { procedure: value[0].procedure, time: value[0].time };
    setChecked((current) =>
      current.map((obj) => {
        if (obj.option === input) {
          if (isChecked) {
            return { ...obj, chosen: [...obj.chosen, tempArr] };
            
          } else {
            var newArr = obj.chosen;
            var index = newArr.indexOf(event.target.value);
            newArr.splice(index, 1); // 2nd parameter means remove one item only
            return { ...obj, chosen: newArr };
          }
          
        }
        return obj;
      })
    );
  };

  //form validations
  const [error, setError] = useState("");
  const [errorCheckbox, setErrorCheckbox] = useState("");
  const Continue = (e) => {
    e.preventDefault();
    //time slot validation
    if (!timeCheck) {
      setError(
        <div style={{ fontSize: "12px" }}>
          <a class="text-danger">
            <strong>Please select a time for your appointment.</strong>
          </a>
        </div>
      );
    }
    //checkbox validation
    if (checked.length === 0 ||!checked) {
      setErrorCheckbox(
        <div>
          <Alert key={"danger"} variant={"danger"}>
            Please select at least one treatment procedure.
          </Alert>
        </div>
      );
    }

    if (
      startDate &&
      timeCheck &&
      checked.length > 0
    ) {
      setError("");
      setErrorCheckbox("");
      nextStep();
    }
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
          <li className="breadcrumb-item active">Follow-Up Appointment</li>
        </ol>
      </nav>

      <section className="section dashboard">
        <div className="row">
          {/* Card Title*/}
          <div className="card-body">
            <h5 className="appt-title">FOLLOW-UP APPOINTMENT</h5>

            {/* Stepper */}
            <div className="md-stepper-horizontal orange">
              <div className="md-step active">
                <div className="md-step-circle">
                  <span>1</span>
                </div>
                <div className="md-step-title">Fill-up</div>
                <div className="md-step-bar-left"></div>
                <div className="md-step-bar-right"></div>
              </div>
              <div className="md-step">
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
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="appointment-info">
                    <h1>PATIENT DETAILS</h1>
                    <h2>Patient Name:</h2>
                    <h3>{patientUser}</h3>

                    <h2>Patient ID:</h2>
                    <h3>PT#{StringfyPatientID}</h3>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="appointment-info">
                    <h1>DOCTOR INFORMATION</h1>
                    <h2>Doctor Name:</h2>
                    <h3>Dr. {getDocName}</h3>

                    <h2>Clinic Location:</h2>
                    <h3>
                      Victoria Shoppesville, Upper Mabini Street, Baguio City,
                      Philippines
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            {/* Select Treatment Procedure */}
            <div className="container procedure-container">
              <div className="row procedure-row">
                <h6>
                  {" "}
                  <strong>Select Treatment Procedure</strong>{" "}
                  <span className="text-danger font-weight-bold">*</span>
                </h6>
                <div className="col-lg-4 col-xl-4 col-md-6">
                  <div className="procedure-label">General Dentistry Services</div>
                  <div className="divider procedure-div"></div>

                  {generalOptions.map((item, index) => (
                    <div key={index} className="mb-3">
                      <Form.Check
                        value={JSON.stringify([item])}
                        id={item.time}
                        type="checkbox"
                        label={`${item.procedure}`}
                        onClick={handleChangeCheckbox("General")}
                        required
                      />
                    </div>
                  ))}
                </div>
                <div className="col-lg-4 col-xl-4 col-md-6">
                  <div className="procedure-label">Cosmetic Restoration</div>
                  <div className="divider procedure-div"></div>

                  {cosmeticOptions.map((item, index) => (
                    <div key={index} className="mb-3">
                      <Form.Check
                       value={JSON.stringify([item])}
                        id={item.time}
                        type="checkbox"
                        label={`${item.procedure}`}
                        onClick={handleChangeCheckbox("Cosmetic")}
                      />
                    </div>
                  ))}
                </div>
                <div className="col-lg-4 col-xl-4 col-md-6">
                  <div className="procedure-label">Orthodontic Dentistry Services</div>
                  <div className="divider procedure-div"></div>

                  {orthodonticOptions.map((item, index) => (
                    <div key={index} className="mb-3">
                      <Form.Check
                       value={JSON.stringify([item])}
                        id={item.time}
                        type="checkbox"
                        label={`${item.procedure}`}
                        onClick={handleChangeCheckbox("Orthodontic")}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="row procedure-row">
                <div className="col-lg-4 col-xl-4 col-md-6">
                  <div className="procedure-label">Endodontic Treatment</div>
                  <div className="divider procedure-div"></div>

                  {endodonticOptions.map((item, index) => (
                    <div key={index} className="mb-3">
                      <Form.Check
                       value={JSON.stringify([item])}
                        id={item.time}
                        type="checkbox"
                        label={`${item.procedure}`}
                        onClick={handleChangeCheckbox("Endodontic")}
                      />
                    </div>
                  ))}
                </div>
                <div className="col-lg-4 col-xl-4 col-md-6">
                  <div className="procedure-label">Prosthetic Procedures</div>
                  <div className="divider procedure-div"></div>

                  {prostheticOptions.map((item, index) => (
                    <div key={index} className="mb-3">
                      <Form.Check
                       value={JSON.stringify([item])}
                        id={item.time}
                        type="checkbox"
                        label={`${item.procedure}`}
                        onClick={handleChangeCheckbox("Prosthetic")}
                      />
                    </div>
                  ))}
                </div>
                <div className="col-lg-4 col-xl-4 col-md-6">
                  <div className="procedure-label">Surgical Procedure</div>
                  <div className="divider procedure-div"></div>

                  {surgicalOptions.map((item, index) => (
                    <div key={index} className="mb-3">
                      <Form.Check
                       value={JSON.stringify([item])}
                        id={item.time}
                        type="checkbox"
                        label={`${item.procedure}`}
                        onClick={handleChangeCheckbox("Surgical")}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Select Appt Date */}
            <div className="appointment-form" id="appointment-form">
              <form className="row g-3" />
              <div className="col-md-4">
                <label className="form-label">
                  Select Follow-Up Appointment Date{" "}
                  <span className="text-danger font-weight-bold">*</span>
                </label>
                <DatePicker
                  selected={startDate}
                  className="form-control col-md-3"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #ced4da",
                    borderRadius: "5px",
                    color: "#495057",
                    width: "300px",
                  }}
                  onChange={(date) => {
                    setStartDate(date);
                    getAppointmenstbyDate(date.toString().substring(0, 15));
                  }}
                  placeholderText="Choose a date"
                  minDate={new Date()}
                  shouldCloseOnSelect={false}
                  filterDate={(date) =>
                    date.getDay() !== 7 && date.getDay() !== 0
                  }
                />
              </div>

              {/* Select Time for Appt */}
              <div className="col-md-6">
                <label className="form-label">
                  Select Time for Appointment{" "}
                  <span className="text-danger font-weight-bold">*</span>
                </label>
                <p> Available Times </p>
                <Timeslot
                  GetTimeCheck={setTimeCheck}
                  takenAppointments={takenAppointments}
                  chosenDate={chosenDate}
                  totalApptTime={totalApptTime}
                />
                {error}
              </div>
            </div>

            {errorCheckbox}

            <div className="col-12">
              <div className="appt-bttns">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => navigate(-1)}
                  type="submit"
                >
                  Cancel
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

export default FollowUpInput;
