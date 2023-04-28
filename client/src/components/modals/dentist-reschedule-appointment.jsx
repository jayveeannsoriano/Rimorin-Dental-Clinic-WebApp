import React, { useState, useEffect } from "react";
import "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from "axios";
import Timeslot from "../timeslot";
//project imports
import "../../styles/modals.css";
import "../../styles/booking.css";

function DentistRescheduleAppointment(
  dentistIDnumber,
  patientIDnumber,
  appNum,
  pName,
  dName, 
  procedures,
  procedureTime,
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

  const newFormattedDate = window.localStorage.getItem("formattedDate");
  window.localStorage.setItem("date", selectedApptDate);

  //reason for reschedule input
  const [reschedReason, setReschedReason] = useState("");

  //time input
  const [timeCheck, setTimeCheck] = useState("");

  //retrieve app number
  const StringAppNum = JSON.stringify(
    dentistIDnumber,
    patientIDnumber,
    appNum,
    pName,
    dName,
    procedures,
    procedureTime
  );
  const ConvertStringApp = JSON.parse(StringAppNum);
  const DentistIDNumber = JSON.stringify(ConvertStringApp.dentistIDnumber).replace(/"/g, "");
  const PatientIDnum = JSON.stringify(ConvertStringApp.patientIDnumber).replace(/"/g,"");
  const AppNumber = JSON.stringify(ConvertStringApp.appNum).replace(/"/g, "");
  const PatientName = JSON.stringify(ConvertStringApp.pName).replace(/"/g, "");
  const DentistName = JSON.stringify(ConvertStringApp.dName).replace(/"/g, "");
  const procedureTimeValue = JSON.stringify(ConvertStringApp.procedureTime).replace(/"/g, "");
  const proceduresValue = ConvertStringApp.procedures;

  console.log("Procedures: ", proceduresValue);

  const [totalApptTime, setTotalApptTime] = useState(0);


  const [procValue, setProcedure] = useState([]);
  useEffect(() => {
    proceduresValue.map((item) =>
      item.chosen != null
        ? item.chosen.map(
            (proc) => (
              setProcedure((current) => [...current, proc])
            )
          )
        : null
    );
    const parsedProcedureTimeValue = parseInt(procedureTimeValue);
    setTotalApptTime(parsedProcedureTimeValue);
  }, [1]);

  const [takenAppointments, setTakenAppointments] = useState([]);
  const [chosenDate, setChosenDate] = useState("");
  const [userDetails, setUserDetails] = useState([]);

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
  useEffect(() => {
    var initialDate = new Date();
    getAppointmenstbyDate(initialDate.toString().substring(0, 10));
  }, []);


  const getAppDetails = async () => {
    try {
      const response = await Axios.get(
        "http://localhost:3001/getDetailsforReceipt",
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

  //update date and time
  const rescheduleAppt = async () => {
    const response = await Axios.get("http://localhost:3001/getUserInfo", {
      params: {
        PatientIDnumber: "PT#" + PatientIDnum,
      },
    });
    Axios.put(
      "http://localhost:3001/rescheduleDentistAppointment",
      {
        patientIDNum: PatientIDnum,
        dentistIDnumber: DentistIDNumber,
        appNum: AppNumber,
        pName: PatientName,
        dName: DentistName,
        newDate: stringDate,
        newFormattedDate: newFormattedDate,
        newTime: timeCheck,
        procedures: proceduresValue,
        reasontext: reschedReason,
      });

    const procedureNames = [];
    proceduresValue.forEach((item) => {
      if (item.chosen.length > 0) {
        item.chosen.forEach((chosenProcedure) => {
          procedureNames.push(chosenProcedure.procedure);
        });
      }
    });

    const message =
    "Hi " +
    PatientName +
    "! This is from Rimorin Dental Clinic notifying you of your rescheduled appointment request on " +
    stringDate +
    " at " +
    timeCheck +
    " with Dr. " +
    DentistName +
    " for the following procedure/s:\n" +
    procedureNames.join("\n") +
    " \nPlease wait for the clinic's approval of your rescheduled appointment request. Thank you!";

    setModalState("modal-2");
    
    Axios.post("http://localhost:3001/sendSMS", {
      phone: "0" + response["data"][0]["mobile"],
      message:message
      });
  };

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
    if(!reschedReason){
      setErrorReason(
        <div style={{ fontSize: "12px" }}>
          <a class="text-danger">
            <strong>Please provide a reason for rescheduling the appointment.</strong>
          </a>
        </div>
      );
    } else {
      setErrorReason("");
    }
    if(!selectedApptDate){
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
      rescheduleAppt();
      setError("");
      setErrorDate("");
      setErrorReason("");
    }
  };

  return (
    <>
      <Button className="resched-button" onClick={handleModal1}>
        <i class="bi bi-calendar2-event"></i>Reschedule
      </Button>

      {/* Main Modal */}
      <Modal
        show={modalState == "modal-1"}
        onHide={handleClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Reschedule Appointment</Modal.Title>
        </Modal.Header>

        <Modal.Body>

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
                <div class="col modal-label">Chosen Procedures:</div>
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

          <form isFormValid={isFormValid}>
          <div className="divider"></div>
          {/* Select New Appt Date */}
            <div className="modal-date-selection" id="modal-date-selection">
              <div className="col-md-4">
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
                    console.log("Rescheduled date", selectedApptDate);
                    setTakenAppointments([]);
                    getAppointmenstbyDate(date.toString().substring(0, 15));
                  }}
                  placeholderText="Choose a date"
                  minDate={new Date()}
                  shouldCloseOnSelect={false}
                />
                {errorDate}
              </div>

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

      {/* Success Modal */}
      <Modal
        show={modalState == "modal-2"}
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Rescheduled Appointment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          You have successfully re-scheduled the appointment!
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

export default DentistRescheduleAppointment;
