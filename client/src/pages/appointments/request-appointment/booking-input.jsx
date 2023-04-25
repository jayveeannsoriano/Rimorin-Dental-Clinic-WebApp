import React, { useEffect, useState } from "react";
import "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Timeslot from "../../../components/timeslot.jsx";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

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
    var patientIDnumber = userInfo["patientIDnumber"];
    var getUserName = JSON.stringify(
      userInfo["fname"] + " " + userInfo["lname"]
    );
    const userNameApp = JSON.parse(getUserName);
  } catch (error) {
    console.error("Website error");
    console.error(error);
  }

  //calendar input
  const [selectedApptDate, setSelectedApptDate] = useState("");
  const [buttonMessage, setButtonMessage] = useState(true);

  const [chosenDate, setChosenDate] = useState("");

  const [timeCheck, setTimeCheck] = useState("");
  window.localStorage.setItem("time", timeCheck);

  const [takenAppointments, setTakenAppointments] = useState([]);
  const [userAppointments, setUserAppointments] = useState([]);

  //useNavigate
  const navigate = useNavigate();

  const dateValue = "" + selectedApptDate;
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
      console.log("TAKEN APPOINTMENTS:",takenAppointments)
    } catch (error) {
      console.log(error);
    }
  };
  

  // const getAppointmenstToDisableDate = async () => {
  //   try {
  //     const response = await Axios.get(
  //       "http://localhost:3001/getAppointmenstToDisableDate",
  //       {
  //         params: {
  //           patientIDnumber:patientIDnumber,
  //         },
  //       }
  //     );
  //     setUserAppointments(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const appointmentStatus = userAppointments.map(function (item) {
  //   return item.date;
  // });

  // const [validated, setValidateValue] = useState(false)
  // const ValidateButton = () => {
  //   console.log(appointmentStatus)
  //   if (appointmentStatus.includes(selectedApptDate.toString().substring(0, 15))) {
  //     console.log("nope");
  //     // setValidateValue(true)
  //     // setButtonMessage(
  //     //   <div style={{ fontSize: "12px" }}>
  //     //     <a class="text-error">
  //     //       <strong>
  //     //         You already have an appointment on the choosen date. Please select another day.
  //     //       </strong>
  //     //     </a>
  //     //   </div>
  //     // );
  //   } else {
  //     console.log("yup");
  //     // setValidateValue(false)
  //     // setButtonMessage(
  //     //   <div style={{ fontSize: "12px" }}>
  //     //     <a class="text-success">
  //     //       <strong> </strong>
  //     //     </a>
  //     //   </div>
  //     // );
  //   }
  // };
  // console.log(validated, "final value of validated");

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
  }, [checked]);

  localStorage.setItem("totalProcedure", JSON.stringify(checked));
  console.log("yes sir", checked);

  //time is in minutes
  const generalOptions = [
    { procedure: "CONSULTATION", time: 30, price: 300 },
    { procedure: "COMPOSITE FILLING", time: 60, price: 700 },
    { procedure: "ORAL PROPHYLAXIS", time: 60, price: 1000 },
    { procedure: "TOOTH EXTRACTION", time: 90, price: 800 },
    { procedure: "TOOTH RESTORATION", time: 90, price: 1200 },
    { procedure: "PTS AND FISSURES SEALANT", time: 60, price: 700 },
    { procedure: "FLOURIDE TREATMENT", time: 90, price: 5500 },
    { procedure: "INTERMEDIATE RESTORATION", time: 120, price: 7000 },
  ];
  const cosmeticOptions = [
    { procedure: "GLASS IONOMER", time: 60, price: 11000 },
    { procedure: "DIRECT COMPOSITE VENEER", time: 60, price: 3000 },
    { procedure: "DIRECT COMPOSITE CLASS IV", time: 60, price: 2000 },
    { procedure: "DIASTEMA CLOSURE (BONDING)", time: 90, price: 1000 },
    { procedure: "CERAMIC/PORCELAIN VENEER", time: 180, price: 20000 },
  ];
  const orthodonticOptions = [
    { procedure: "ORTHODONTICS - UPPER BRACES", time: 90, price: 45000 },
    { procedure: "ORTHODONTICS - LOWER BRACES", time: 90, price: 52000 },
    { procedure: "ORTHODONTICS - UPPER AND LOWER BRACES", time: 180, price: 95000},
    { procedure: "RETAINER (BOTH ARCH'S)", time: 90, price: 8000 },
  ];
  const endodonticOptions = [
    { procedure: "ROOT CANAL THERAPY", time: 90, price: 4400 },
    { procedure: "PULPOTOMY", time: 60, price: 5300 },
    { procedure: "POST AND CORE", time: 60, price: 6200 },
    { procedure: "DEEP SCALING", time: 120, price: 10200 },
  ];
  const prostheticOptions = [
    { procedure: "DENTAL REPAIR", time: 60, price: 12000 },
    { procedure: "DENTURE RELINE (LABORATORY MADE)", time: 60, price: 35000 },
    { procedure: "DENTURE RELINE (DIRECT)", time: 60, price: 30000 },
    { procedure: "SOFT RELINE", time: 60, price: 16000 },
    { procedure: "DENTURE REPLACEMENT", time: 90, price: 15000 },
    { procedure: "FULL DENTURE PLASTIC", time: 90, price: 7500 },
    { procedure: "FULL DENTURE PORCELAIN", time: 90, price: 15000 },
  ];
  const surgicalOptions = [
    { procedure: "ODONTECTOMY", time: 60, price: 5000 },
    { procedure: "OPERCULECTOMY", time: 90, price: 5000 },
    { procedure: "FRENECTOMY", time: 60, price: 5200 },
    { procedure: "ALVEOLECTOMY", time: 60, price: 8300 },
    { procedure: "GINGIVECTOMY OR CONTOURING", time: 60, price: 5000 },
    { procedure: "APICOECTOMY", time: 90, price: 8500 },
  ];

  //Checkbox handleChange
  const [isSelected, setIsSelected] = useState([]);
  var [totalApptTime, settotalApptTime] = useState(0);

  const handleChangeCheckbox = (input) => (event) => {
    var value = JSON.parse(event.target.value);
    var isChecked = event.target.checked;
    var tempVar = totalApptTime;

    if (isChecked) {
      tempVar = totalApptTime + parseInt(event.target.id);
      settotalApptTime(tempVar);
      setIsSelected([...isSelected, value[0].procedure]);
    } else {
      tempVar = totalApptTime - parseInt(event.target.id);
      setIsSelected(isSelected.filter((procedure) => procedure !== value[0].procedure));
      settotalApptTime(tempVar);
    }
    var tempArr = {
      procedure: value[0].procedure,
      time: value[0].time,
      price: value[0].price,
    };
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
    if (!timeCheck) {
      setError(
        <div style={{ fontSize: "12px" }}>
          <a class="text-danger">
            <strong>Please select a time for your appointment.</strong>
          </a>
        </div>
      );
    }
    if (!isSelected) {
      setCheckBoxError(
        <div>
          <Alert key={"danger"} variant={"danger"}>
            Please select at least one treatment procedure.
          </Alert>
        </div>
      );
      return;
    }
    if (selectedApptDate && timeCheck && isSelected) {
      //e.preventDefault();
      //e.stopPropagation();
      nextStep();
      setError("");
      setCheckBoxError("");
    }
  };

  useEffect(() => {
    var initialDate = new Date();
    getAppointmenstbyDate(initialDate.toString().substring(0, 15));
  }, []);

  useEffect(() => {
    getAppointmenstbyDate(selectedApptDate.toString().substring(0, 10) + " 2023");
  }, [selectedApptDate]);

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

            {/* Select a dentist */}
              <form onSubmit={Continue}>
                  <div className="col-md-3 ms-5">
                    <label className="form-label">
                      <strong>
                      Select a Dentist{" "}
                      <span className="text-danger font-weight-bold">*</span>
                      </strong>
                    </label>
                    <Form.Select
                      value={values.doctor}
                      onChange={handleChange("doctor")}
                      className="form-select"
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
                  </div>

            {/* Select Treatment Procedure */}
            <div className="container procedure-container">
              <div className="row procedure-row">
                <h6>
                  {" "}
                  <strong>Select Treatment Procedure (maximum of 180 mins/appointment)</strong>{" "}
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
                        key={item.procedure}
                        name={item.procedure}
                        type="checkbox"
                        label={`${item.procedure} | ${item.time}mins`}
                        disabled={!isSelected.includes(item.procedure) && totalApptTime + item.time > 180}
                        onClick={handleChangeCheckbox("General")}
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
                        key={item.procedure}
                        name={item.procedure}
                        disabled={!isSelected.includes(item.procedure) && totalApptTime + item.time > 180}
                        type="checkbox"
                        label={`${item.procedure} | ${item.time}mins`}
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
                        key={item.procedure}
                        name={item.procedure}
                        disabled={!isSelected.includes(item.procedure) && totalApptTime + item.time > 180}
                        type="checkbox"
                        label={`${item.procedure} | ${item.time}mins`}
                        onClick={handleChangeCheckbox("Orthodontics")}
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
                        key={item.procedure}
                        name={item.procedure}
                        disabled={!isSelected.includes(item.procedure) && totalApptTime + item.time > 180}
                        type="checkbox"
                        label={`${item.procedure} | ${item.time}mins`}
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
                        key={item.procedure}
                        name={item.procedure}
                        disabled={!isSelected.includes(item.procedure) && totalApptTime + item.time > 180}
                        type="checkbox"
                        label={`${item.procedure} | ${item.time}mins`}
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
                        key={item.procedure}
                        name={item.procedure}
                        disabled={!isSelected.includes(item.procedure) && totalApptTime + item.time > 180}
                        type="checkbox"
                        label={`${item.procedure} | ${item.time}mins`}
                        onClick={handleChangeCheckbox("Surgical")}
                      />
                    </div>
                  ))}
                </div>
              </div>
              {errorCheckBox}
            </div>

            {/* Booking deets */}
              <div className="appointment-form mt-5 mb-5" id="appointment-form">
                <div className="col-md-3">

                  {/* Select Appt Date */}
                  <label className="form-label">
                    Select Appointment Date{" "}
                    <span className="text-danger font-weight-bold">*</span>
                  </label>

                  <DatePicker
                    selected={selectedApptDate}
                    className="form-control col-md-3"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #ced4da",
                      borderRadius: "5px",
                      color: "#495057",
                      width: "300px",
                    }}
                    required
                    onChange={(date) => {
                      setSelectedApptDate(date);
                      window.localStorage.setItem("date", date);
                      window.localStorage.setItem(
                        "formattedDate",
                        date != null
                          ? date.getFullYear() +
                              "-" +
                              ("0" + (date.getMonth() + 1)).slice(-2) +
                              "-" +
                              ("0" + date.getDate()).slice(-2)
                          : ""
                      );
                      console.log("CURRENT DATE BOOKING", selectedApptDate);
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
                  {selectedApptDate && (
                    <Timeslot
                      GetTimeCheck={setTimeCheck}
                      takenAppointments={takenAppointments}
                      chosenDate={chosenDate}
                      totalApptTime={totalApptTime}
                    />
                  )}
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
                  {/* <ValidateButton/> */}
                  <Button className="btn btn-primary" type="submit">
                    Next
                  </Button>
                  {/* {buttonMessage} */}
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
