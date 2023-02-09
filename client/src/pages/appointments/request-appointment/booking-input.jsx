import React, { useEffect, useState } from "react";
import "react-bootstrap";
import Timeslot from "../../../components/timeslot.jsx";
import { Form } from "react-bootstrap";

//project imports
import "../../../styles/booking.css";
import AppointmentTerms from "../../../components/appointment-terms/appt-terms.jsx";

//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//Axios
import Axios from "axios";

//useNavigate (retains previous data)
import { useNavigate } from "react-router-dom";

const BookingInput = ({
  nextStep,
  handleChange,
  values,
}) => {
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

  const [error, setError] = useState("");
  const [errorReason, setErrorReason] = useState("");
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
    //consultation validation
    if (!values.consultation || !values.consultation.trim().length) {
      setErrorReason(
        <div style={{ fontSize: "12px" }}>
          <a class="text-danger">
            <strong>Please provide a reason for your appointment.</strong>
          </a>
        </div>
      );
    }

    if (startDate && timeCheck && values.consultation && values.consultation.trim().length) {
      nextStep();
      setError("");
      setErrorReason("");
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
      const responses = await Axios.get(
        "http://localhost:3001/getDentistInfo"
      );
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

            {/* Booking deets */}
            <form onSubmit={Continue}>
              <div className="appointment-form" id="appointment-form">
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
                  />
                  {error}
                </div>
              </div>

              {/* Reason for Consultation */}
              <div className="col-12 reason-form">
                <label className="form-label">
                  Reason for Consultation{" "}
                  <span className="text-danger font-weight-bold">*</span>
                </label>
                <textarea
                  className="form-control"
                  value={values.consultation}
                  onChange={handleChange("consultation")}
                  id="reason"
                  rows="5"
                  placeholder="Write reason here..."
                  required
                ></textarea>
                {errorReason}
              </div>

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
