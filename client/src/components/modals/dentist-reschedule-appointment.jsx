import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from "axios";
import Timeslot2 from "../timeslot2";
//project imports
import "../../styles/modals.css";
import "../../styles/booking.css";

function DentistRescheduleAppointment(
  dentistIDnumber,
  patientIDnumber,
  appNum,
  pName,
  dName,
  date,
  time,
  consultation
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
  const [newStartDate, setStartDate] = useState(new Date());
  const stringDate = newStartDate.toString();

  const [newFormattedDate, setFormattedDate] = useState(
    new Date().toISOString()
  );

  var date = window.localStorage.getItem("date");
  window.localStorage.setItem("date", newStartDate);

  //reasonforconsultation input
  const [newConsulInput, setConsulInput] = useState("");

  //time input
  const [timeCheck, setTimeCheck] = useState("");

  //retrieve app number
  const StringAppNum = JSON.stringify(
    dentistIDnumber,
    patientIDnumber,
    appNum,
    pName,
    dName
  );
  const ConvertStringApp = JSON.parse(StringAppNum);
  const DentistIDNumber = JSON.stringify(
    ConvertStringApp.dentistIDnumber
  ).replace(/"/g, "");
  const PatientIDnum = JSON.stringify(ConvertStringApp.patientIDnumber).replace(
    /"/g,
    ""
  );
  const AppNumber = JSON.stringify(ConvertStringApp.appNum).replace(/"/g, "");
  const PatientName = JSON.stringify(ConvertStringApp.pName).replace(/"/g, "");
  const DentistName = JSON.stringify(ConvertStringApp.dName).replace(/"/g, "");

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

  //form validation error message
  const [error, setError] = useState("");
  const [errorReason, setErrorReason] = useState("");
  //update date and time
  const newDateTime = () => {
    console.log("Updating " + AppNumber);
    console.log(
      "Update values: " + newStartDate + " " + timeCheck + " " + newConsulInput
    );
    Axios.put(
      "https://rimorin-dental-clinic.herokuapp.com/rescheduleDentistAppointment",
      {
        patientIDNum: PatientIDnum,
        dentistIDnumber: DentistIDNumber,
        appNum: AppNumber,
        pName: PatientName,
        dName: DentistName,
        newDate: stringDate,
        newFormattedDate: newFormattedDate,
        newTime: timeCheck,
        newConsultation: newConsulInput,
      }
    );
    //time slot validation
    if (!timeCheck) {
      setError(
        <div style={{ fontSize: "12px" }}>
          <a class="text-danger">
            <strong>Please select a new time for the appointment.</strong>
          </a>
        </div>
      );
    }
    //resched validation
    if (!newConsulInput || !newConsulInput.trim().length) {
      setErrorReason(
        <div style={{ fontSize: "12px" }}>
          <a class="text-danger">
            <strong>
              Please provide a reason for rescheduling the appointment.
            </strong>
          </a>
        </div>
      );
    }
    if (
      newStartDate &&
      timeCheck &&
      newConsulInput &&
      newConsulInput.trim().length
    ) {
      setError("");
      setErrorReason("");
      setModalState("modal-2");
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
                <div class="col modal-label">Reason for Consultation:</div>
                <div class="col modal-values">{item.consultation}</div>
              </div>
            ))}
          </div>

          <div className="divider"></div>

          {/* Select New Appt Date */}
          <div className="modal-date-selection" id="modal-date-selection">
            <form className="row g-3 needs-validation" noValidate />
            <div className="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">
                Select Appointment Date{" "}
                <span className="text-danger font-weight-bold">*</span>
              </label>
              <DatePicker
                selected={newStartDate}
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
                  setFormattedDate(date);
                  getAppointmenstbyDate(date.toString().substring(0, 15));
                  console.log("This is the calendar data:", date);
                  setTakenAppointments([]);
                }}
                placeholderText="Choose a date"
                minDate={new Date()}
                shouldCloseOnSelect={false}
                filterDate={(date) =>
                  date.getDay() !== 7 && date.getDay() !== 0
                }
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">
                Select Time for Appointment{" "}
                <span className="text-danger font-weight-bold">*</span>
              </label>
              <p> Available Times </p>
              <Timeslot2
                GetTimeCheck={setTimeCheck}
                takenAppointments={takenAppointments}
                chosenDate={chosenDate}
              />
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
              value={newConsulInput}
              placeholder="Write reason here..."
              onChange={(e) => setConsulInput(e.target.value)}
              required
            ></textarea>
            {errorReason}
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={newDateTime}>
            Reschedule
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Success Modal */}
      <Modal
        show={modalState == "modal-2"}
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
