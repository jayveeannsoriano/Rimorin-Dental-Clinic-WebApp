import React, { useEffect, useState } from "react";
import "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Timeslot from "../../../components/timeslot.jsx";
import { Form } from "react-bootstrap";

//project imports
import "../../../styles/booking.css";
import "../../../styles/dental-record.css";
import AppointmentTerms from "../../../components/appointment-terms/appt-terms.jsx";

//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//Axios
import Axios from "axios";

//useNavigate (retains previous data)
import { useNavigate } from "react-router-dom";

const BookingInput = ({ nextStep, handleChange, values }) => {
  //user info
  try {
    var userInfo = JSON.parse(window.localStorage.getItem("current-session"));
    var getUserName = JSON.stringify(
      userInfo["fname"] + " " + userInfo["lname"]
    );
    const userNameApp = JSON.parse(getUserName);
  } catch (error) {
    console.error("Website error");
    console.error(error);
  }

  //calendar input
  const [startDate, setStartDate] = useState(new Date());
  var [totalApptTime, settotalApptTime] = useState(0);

  const [chosenDate, setChosenDate] = useState("");
  console.log("DENTIST ID NUMBER", values.doctor);

  const [timeCheck, setTimeCheck] = useState("");
  console.log("CURRENT TIME BOOKING", timeCheck);
  window.localStorage.setItem("time", timeCheck);

  const [takenAppointments, setTakenAppointments] = useState([]);

  console.log("CURRENT DATE BOOKING", startDate);
  window.localStorage.setItem("date", startDate);
  window.localStorage.setItem(
    "formattedDate",
    startDate != null
      ? startDate.getFullYear() +
          "-" +
          ("0" + (startDate.getMonth() + 1)).slice(-2) +
          "-" +
          ("0" + startDate.getDate()).slice(-2)
      : ""
  );

  //useNavigate
  const navigate = useNavigate();

  const dateValue = "" + startDate;
  const stringDateValue = dateValue.toString().substring(0, 10);

  //Get All appointments on date
  const getAppointmenstbyDate = async (date) => {
    try {
      setChosenDate(date);
      const response = await Axios.get(
        "https://rimorin-dental-clinic.herokuapp.com/getAppointmentsbyDate",
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

  //treatment procedure radio options
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

  //Radio handleChange
  const [selectedValue, setSelectedValue] = useState({});
  //const [selectedOption, setSelectedOption] = useState("");

  const handleChangeCheckbox = (input) => (event) => {
    var value = JSON.parse(event.target.value);
    var isChecked = event.target.checked;
    var tempVar = totalApptTime;
    if (isChecked) {
      tempVar = totalApptTime + parseInt(event.target.id);
      settotalApptTime(tempVar);
    } else {
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

  const [error, setError] = useState("");
  const [errorCheckBox, setCheckBoxError] = useState("");
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
    if (!selectedValue) {
      setCheckBoxError(
        <div>
          <Alert key={"danger"} variant={"danger"}>
            Please select one a treatment procedure.
          </Alert>
        </div>
      );
      return;
    }
    if (startDate && timeCheck && selectedValue) {
      nextStep();
      setError("");
      setCheckBoxError("");
    }
  };

  useEffect(() => {
    var initialDate = new Date();
    getAppointmenstbyDate(initialDate.toString().substring(0, 15));
  }, []);

  //Select Dentist
  const [dentistInfo, setDentistInfo] = useState([]);
  const [dentistIDnum, setDentistIDnumber] = useState("");

  const getDentistInfo = async () => {
    try {
      const responses = await Axios.get("https://rimorin-dental-clinic.herokuapp.com/getDentistInfo");
      console.log(responses.data);
      setDentistInfo(responses.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDentistInfo();
  }, []);

  return (
    <>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item" onClick={() => navigate(-1)}>
            Appointments
          </li>
          <li className="breadcrumb-item active">Request Appointment</li>
        </ol>
      </nav>

      <section className="section dashboard">
        <div className="row">
          {/* Card Title*/}
          <div className="card-body">
            <h5 className="appt-title">REQUEST APPOINTMENT</h5>

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

            <div className="appointment-info">
              <h1>CLINIC LOCATION</h1>
              <h3 id="clinic-location">
                Victoria Shoppesville, Upper Mabini Street, Baguio City,
                Philippines
              </h3>
            </div>

            <div className="divider"></div>

            <div className="appointment-info">
              <h1>APPOINTMENT INFORMATION</h1>
            </div>

            {/* Select Treatment Procedure */}
            <div className="container procedure-container">
              <div className="row procedure-row">
                <h6>
                  {" "}
                  <strong>Select Treatment Procedure</strong>{" "}
                  <span className="text-danger font-weight-bold">*</span>
                </h6>
                <div className="col-lg-4 col-xl-4 col-md-6">
                  <div className="procedure-label">
                    General Dentistry Services
                  </div>
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
                  <div className="procedure-label">
                    Orthodontic Dentistry Services
                  </div>
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

            {/* Booking deets */}
            <form onSubmit={Continue}>
              <div className="appointment-form mt-5 mb-5" id="appointment-form">
                <div className="col-md-3">
                  {/* Select a dentist */}
                  <label className="form-label">
                    Select a Dentist{" "}
                    <span className="text-danger font-weight-bold">*</span>
                  </label>
                  <Form.Select
                    value={values.doctor}
                    onChange={handleChange("doctor")}
                    required
                  >
                    <option value="" selected disabled>
                      --Dentist--
                    </option>
                    {dentistInfo.map((item, index) => (
                      <option value={item.dentistIDnumber}>
                        Dr. {item.fname} {item.mname} {item.lname}
                      </option>
                    ))}
                  </Form.Select>

                  <br />

                  {/* Select Appt Date */}
                  <label className="form-label">
                    Select Appointment Date{" "}
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

              <div className="divider"></div>
              {/* Terms n Conditions Checkbox */}
              <div className="appointment-info">
                <h1>TERMS AND CONDITIONS FOR APPOINTMENT REQUEST</h1>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <AppointmentTerms />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label className="form-check-label">
                    <strong>
                      By requesting an appointment, you agree to these terms and
                      conditions.
                    </strong>{" "}
                    <span className="text-danger font-weight-bold">*</span>
                  </label>
                </div>
                {errorCheckBox}
              </div>

              <div className="col-12">
                <div className="appt-bttns">
                  <button
                    className="btn btn-outline-secondary"
                    type="submit"
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </button>
                  <button className="btn btn-primary" type="submit">
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>{" "}
          {/* End of card-body */}
        </div>
      </section>
    </>
  );
};

export default BookingInput;
