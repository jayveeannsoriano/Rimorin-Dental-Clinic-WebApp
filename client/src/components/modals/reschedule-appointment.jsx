import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from "axios";
import Timeslot from "../timeslot";
//project imports
import "../../styles/modals.css";
import "../../styles/booking.css";

function RescheduleAppointment(
  dName,
  pName,
  appNum,
  patientIDnumber,
  procedures
) {
  const [modalState, setModalState] = useState("close");

  const handleClose = () => {
    setModalState(false);
    window.location.reload();
  };
  const handleModal1 = () => {
    setModalState("modal-1");
  };

  //calendar input
  const [selectedApptDate, setSelectedApptDate] = useState("");
  const stringDate = selectedApptDate.toString();

  const [newFormattedDate, setFormattedDate] = useState(
    new Date().toISOString()
  );
  console.log("THIS IS THE dsa DATE", selectedApptDate);
  console.log("THIS IS THE FORMATTED DATE", newFormattedDate);

  var date = window.localStorage.getItem("date");
  window.localStorage.setItem("date", selectedApptDate);

  //reasonforconsultation input
  const [reschedReason, setReschedReason] = useState("");

  //time input
  const [timeCheck, setTimeCheck] = useState("");

  //retrieve app number
  const StringAppNum = JSON.stringify(
    dName,
    pName,
    appNum,
    patientIDnumber,
    procedures
  );
  const ConvertStringApp = JSON.parse(StringAppNum);
  const AppNumber = JSON.stringify(ConvertStringApp.appNum).replace(/"/g, "");
  const PatientName = JSON.stringify(ConvertStringApp.pName).replace(/"/g, "");
  const DoctorName = JSON.stringify(ConvertStringApp.dName).replace(/"/g, "");
  const PatientIDnum = JSON.stringify(ConvertStringApp.patientIDnumber).replace(
    /"/g,
    ""
  );
  const proceduresValue = ConvertStringApp.procedures;

  const [procValue, setProcedure] = useState([]);
  useEffect(() => {
    proceduresValue.map((item) =>
      item.chosen != null
        ? item.chosen.map((proc) =>
            setProcedure((current) => [...current, proc])
          )
        : null
    );
  }, [1]);

  const [takenAppointments, setTakenAppointments] = useState([]);
  const [chosenDate, setChosenDate] = useState("");
  const [userDetails, setUserDetails] = useState([]);

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
  useEffect(() => {
    var initialDate = new Date();
    getAppointmenstbyDate(initialDate.toString().substring(0, 10));
  }, []);

  var [totalApptTime, settotalApptTime] = useState(0);
  useEffect(() => {});

  const getAppDetails = async () => {
    try {
      const response = await Axios.get(
        "https://rimorin-dental-clinic.herokuapp.com/getDetailsforReceipt",
        {
          params: {
            patientIDNum: PatientIDnum,
            appNumber: AppNumber,
          },
        }
      );
      setUserDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppDetails();
  }, []);

  //Special Characters input validation
  const [specialCharacterError, setSpecialCharacterError] = useState(true);
  function validateSpecialCharacters(input, field) {
    const hasSpecialCharacters = /[^A-Za-z0-9\sÑñ]/.test(input);

    if (hasSpecialCharacters) {
      setSpecialCharacterError((prevErrors) => ({
        ...prevErrors,
        [field]: (
          <div style={{ fontSize: "12px" }}>
            <a class="text-danger">
              <strong>Please do not use special characters.</strong>
            </a>
          </div>
        ),
      }));
      setIsFormValid(true);
    } else {
      setSpecialCharacterError((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));
      setIsFormValid(false);
    }
  }

  //Blank input validator
  const [blankInputError, setBlankInputError] = useState(true);
  function validateBlankspace(input, field) {
    const trimmedInput = input.trim();
    const hasBlankspace = input !== trimmedInput;

    if (hasBlankspace) {
      setBlankInputError((prevErrors) => ({
        ...prevErrors,
        [field]: (
          <div style={{ fontSize: "12px" }}>
            <a class="text-danger">
              <strong>Blank spaces are not allowed.</strong>
            </a>
          </div>
        ),
      }));
      setIsFormValid(true);
    } else {
      setBlankInputError((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));
      setIsFormValid(false);
    }
  }

  //form validation error message
  const [isFormValid, setIsFormValid] = useState(true);
  const [errorDate, setErrorDate] = useState("");
  const [errorReason, setErrorReason] = useState("");
  const [error, setError] = useState("");

  const Continue = (e) => {
    e.preventDefault();
    if (!timeCheck) {
      setError(
        <div style={{ fontSize: "12px" }}>
          <a class="text-danger">
            <strong>Please select a time for the appointment.</strong>
          </a>
        </div>
      );
    } else {
      setError("");
    }
    if (!reschedReason) {
      setErrorReason(
        <div style={{ fontSize: "12px" }}>
          <a class="text-danger">
            <strong>
              Please provide a reason for rescheduling the appointment.
            </strong>
          </a>
        </div>
      );
    } else {
      setErrorReason("");
    }
    if (!selectedApptDate) {
      setErrorDate(
        <div style={{ fontSize: "12px" }}>
          <a class="text-danger">
            <strong>Please select a date for the appointment.</strong>
          </a>
        </div>
      );
    } else {
      setErrorDate("");
    }
    if (selectedApptDate && timeCheck && reschedReason) {
      newDateTime();
      setError("");
      setErrorDate("");
      setErrorReason("");
    }
  };

  //update date and time
  const newDateTime = async () => {
    const response = await Axios.get(
      "https://rimorin-dental-clinic.herokuapp.com/getUserInfo",
      {
        params: {
          PatientIDnumber: "PT#" + PatientIDnum,
        },
      }
    );
    Axios.put(
      "https://rimorin-dental-clinic.herokuapp.com/rescheduleAppointment",
      {
        patientIDNum: PatientIDnum,
        appNum: AppNumber,
        pName: PatientName,
        dName: DoctorName,
        newDate: stringDate,
        newFormattedDate: newFormattedDate,
        newTime: timeCheck,
        procedures: proceduresValue,
      }
    );
    setModalState("modal-2");
    Axios.post("https://rimorin-dental-clinic.herokuapp.com/sendSMS", {
      phone: "0" + response["data"][0]["mobile"],
      message:
        "Hi " +
        PatientName +
        "! This is from Rimorin Dental Clinic notifying you that your requested Appointment at " +
        date +
        " " +
        stringDate +
        " due to '" +
        reschedReason +
        "' has been rescheduled to " +
        stringDate +
        ". See you there!",
    });
  };

  return (
    <>
      <Button className="resched-button" onClick={handleModal1}>
        <i class="bi bi-calendar2-event"></i>Reschedule
      </Button>

      <Modal
        show={modalState == "modal-1"}
        size="xl"
        // show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Reschedule Appointment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* Appointment Details  */}
          <div className="appointment-details-modal">
            <h4>Appointment Details</h4>
            {userDetails.map((item) => (
              <div class="row">
                <div class="col modal-label">Patient Name:</div>
                <div class="col modal-values">{item.pName}</div>
              </div>
            ))}
            {userDetails.map((item) => (
              <div class="row">
                <div class="col modal-label">Appt #:</div>
                <div class="col modal-values">{item.appNum}</div>
              </div>
            ))}
            {userDetails.map((item) => (
              <div class="row">
                <div class="col modal-label">Date & Time:</div>
                <div class="col modal-values">
                  {item.date} | {item.time}
                </div>
              </div>
            ))}
            {userDetails.map((item) => (
              <div class="row">
                <div class="col modal-label">Chosen Procedure:</div>
                <div class="col modal-values">
                  {procValue.map((item, index) => (
                    <tr key={index}>
                      <td>{item.procedure}</td>
                    </tr>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="divider"></div>

          <form isFormValid={isFormValid}>
            {/* Date Selection */}
            <div className="modal-date-selection" id="modal-date-selection">
              <div className="col-md-4">
                <label className="form-label">
                  Select Appointment Date{" "}
                  <span className="text-danger font-weight-bold">*</span>
                </label>
                <DatePicker
                  selected={selectedApptDate}
                  required
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #ced4da",
                    borderRadius: "5px",
                    color: "#495057",
                    width: "300px",
                  }}
                  onChange={(date) => {
                    setSelectedApptDate(date);
                    setFormattedDate(date);
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
                    console.log("Rescheduled date", selectedApptDate);
                    setTakenAppointments([]);
                    getAppointmenstbyDate(date.toString().substring(0, 15));
                  }}
                  placeholderText="Choose a date"
                  minDate={new Date()}
                  shouldCloseOnSelect={false}
                  filterDate={(date) =>
                    date.getDay() !== 7 && date.getDay() !== 0
                  }
                />
                {errorDate}
              </div>

              <div className="col-md-6">
                <label htmlFor="validationCustom01" className="form-label">
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

            {/* Reason for Reschedule */}
            <div className="col-12 reason-form">
              <label className="form-label">
                Reason for Reschedule{" "}
                <span className="text-danger font-weight-bold">*</span>
              </label>
              <textarea
                className="form-control"
                id="reason"
                rows="5"
                placeholder="Write reason here..."
                value={reschedReason}
                onChange={(e) => setReschedReason(e.target.value)}
                onBlur={function (e) {
                  validateBlankspace(e.target.value, "reschedReason")
                  validateSpecialCharacters(e.target.value, "reschedReason");
                }}
                required
              ></textarea>
              {errorReason}
              {blankInputError.reschedReason}
              {specialCharacterError.reschedReason}
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={Continue}>
            Reschedule
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={modalState == "modal-2"}
        size="lg"
        // show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Reschedule Appointment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          You have successfully re-scheduled your appointment. Your re-schedule
          request is now pending.
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RescheduleAppointment;
