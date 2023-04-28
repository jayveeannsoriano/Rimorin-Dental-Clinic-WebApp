import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import "../../../styles/create-rx.css";
import ProfileWidget from "../../../components/profile-widget";
import "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

const createEprescription = () => {
  var userInfo = JSON.parse(window.localStorage.getItem("current-session"));
  const dentistLicense = userInfo["license"];
  var dentistLicenseDisplay;
  if (dentistLicense == null || " ") {
    dentistLicenseDisplay = "12345678";
  } else {
    dentistLicenseDisplay = userInfo["license"];
  }

  const dentistPTR = userInfo["ptr"];
  var dentistPTRDisplay;
  if (dentistPTR == null || " ") {
    dentistPTRDisplay = "12345678";
  } else {
    dentistPTRDisplay = userInfo["ptr"];
  }

  const dentistFullName = `${userInfo["fname"]} ${userInfo["mname"]} ${userInfo["lname"]}`;
  const location = useLocation();

  const paramsID = new URLSearchParams(location.search);
  const getPatientIDNumber = paramsID.get("patientIDNum");
  const getPatientAppNum = paramsID.get("appNum");
  const StringfyIDnumber = useMemo(() =>
    JSON.stringify(getPatientIDNumber).replace(/"/g, "")
  );
  const StringfyAppNumber = useMemo(() =>
    JSON.stringify(getPatientAppNum).replace(/"/g, "")
  );
  console.log(StringfyIDnumber, "create e-prescription");

  //calendar input
  const [startDate, setStartDate] = useState(new Date());
  //input variables
  const [notesValue, setNotesValue] = useState("");

  //breadcrumb href ref
  var patientsRoute = "/dentist/patients/view-patient?patientIDNum=";

  const [modalState, setModalState] = useState(false);
  const navigate = useNavigate();
  const handleModalClose = () => {
    setModalState(false);
    navigate("/dentist/patients/view-patient?patientIDNum=" + StringfyIDnumber);
    window.location.reload();
  };

  const handleModal = () => {
    setModalState("show-modal");
  };

  const [getFile, setGetFile] = useState("");
  console.log(getFile, "this is the img value");
  const onFileChange = (files) => {
    setGetFile(files);
  };

  // Add item function
  const [prescriptionItem, setPrescriptionList] = useState([
    {
      generic: "",
      brand: "",
      dosage: "",
      form: "",
      frequency: "",
      duration: "",
    },
  ]);

  const handleItemAdd = () => {
    setPrescriptionList([
      ...prescriptionItem,
      {
        generic: "",
        brand: "",
        dosage: "",
        form: "",
        frequency: "",
        duration: "",
      },
    ]);
  };
  //Remove item function
  const handleItemRemove = (index) => {
    const list = [...prescriptionItem];
    list.splice(index, 1);
    setPrescriptionList(list);
  };
  //get values from list function
  const getFormValues = (e, index) => {
    const { name, value } = e.target;
    const list = [...prescriptionItem];
    list[index][name] = value;
    setPrescriptionList(list);
  };

  const createEPrescription = () => {
    console.log(prescriptionItem);
    console.log(notesValue);
    console.log(startDate);

    Axios.post(
      "http://localhost:3001/createEprescription",
      {
        patientIDNum: StringfyIDnumber,
        dentistName: dentistFullName,
        dateValue:
          startDate.getFullYear() +
          "-" +
          ("0" + (startDate.getMonth() + 1)).slice(-2) +
          "-" +
          ("0" + startDate.getDate()).slice(-2),
        presDetails: prescriptionItem,
        notesValue: notesValue,
        imgFile: getFile[0],
      },
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    handleModal();
  };
  
  //form validation state
  const [isFormValid, setIsFormValid] = useState(true);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } 
    setIsFormValid(true);
    createEPrescription();
  };

  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        <div className="pagetitle">
          <h1>Create Prescription</h1>
          {/* Breadcrumb */}
          <div className="breadcrumb-bar">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-12 col-12">
                  <nav>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/dentist">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href={patientsRoute + StringfyIDnumber}>
                          View Patient Records
                        </a>
                      </li>
                      <li className="breadcrumb-item active">
                        Create E-Prescription
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Widget */}
        <section class="section profile">
          <div className="row">
            <ProfileWidget />

            {/* E-prescription */}
            <div class="col-xl-8">
              <div className="card patient-info">
                <div className="card-body pt-3">
                  <h5 className="card-title">Create E-Prescription</h5>
                  <div className="divider"></div>

                  {/* Professional information */}
                  <div className="biller-info">
                    <h5 className="rx-pr"> Professional Information </h5>
                    <p> PTR Number: {dentistPTRDisplay}</p>
                    <p> Licence Number: {dentistLicenseDisplay}</p>
                  </div>

                  {/* <Form> */}
                  <form onSubmit={handleSubmit} isFormValid={isFormValid}>
                    <div className="biller-info">
                      <br />
                      <h5 className="rx-pr"> Prescription Information </h5>
                      <div class="col-12 col-md-6 col-lg-4">
                        <label>
                          Date of Prescription{" "}
                          <span class="text-danger">*</span>
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
                            console.log(
                              "This is the calendar data:",
                              date.toString().slice(3, 15)
                            );
                            console.log("set Start: ", startDate.toString());
                            window.localStorage.setItem("date", date);
                          }}
                          required
                          placeholderText="Choose a date"
                          minDate={new Date()}
                          shouldCloseOnSelect={false}
                          dateFormat="MMMM d, yyyy"
                        />
                      </div>
                    </div>

                    <div className="add-more-item text-left">
                      <button
                        className="btn btn-primary rx-btn"
                        onClick={handleItemAdd}
                      >
                        <i className="fas fa-plus" /> Add Item
                      </button>
                    </div>

                    <div className="card-form">
                      <div className="card-body-form">
                        <div className="col-12 col-md-10 col-lg-12">
                          {prescriptionItem.map((singleItem, index) => (
                            <div key={index}>
                              <div className="row form row">
                                <div className="row">
                                  <div className="col-12 col-md-6 col-lg-4">
                                    <div className="form-group">
                                      <label>
                                        Generic{" "}
                                        <span class="text-danger">*</span>
                                      </label>
                                      <input
                                        name="generic"
                                        id="item"
                                        type="text"
                                        class="form-control"
                                        placeholder="Mefenamic"
                                        value={singleItem.generic}
                                        onChange={(e) =>
                                          getFormValues(e, index)
                                        }
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6 col-lg-3">
                                    <div className="form-group">
                                      <label>
                                        Brand <span class="text-danger">*</span>
                                      </label>
                                      <input
                                        name="brand"
                                        id="item"
                                        type="text"
                                        class="form-control"
                                        placeholder="Ponstan"
                                        value={singleItem.brand}
                                        onChange={(e) =>
                                          getFormValues(e, index)
                                        }
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6 col-lg-3">
                                    <div className="form-group">
                                      <label>
                                        Dosage{" "}
                                        <span class="text-danger">*</span>
                                      </label>
                                      <input
                                        name="dosage"
                                        id="item"
                                        type="text"
                                        class="form-control"
                                        placeholder="500mg"
                                        value={singleItem.dosage}
                                        onChange={(e) =>
                                          getFormValues(e, index)
                                        }
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-12 col-md-6 col-lg-4">
                                    <div className="form-group">
                                      <label>
                                        Form <span class="text-danger">*</span>
                                      </label>
                                      <input
                                        name="form"
                                        id="item"
                                        type="text"
                                        class="form-control"
                                        placeholder="Capsule"
                                        value={singleItem.form}
                                        onChange={(e) =>
                                          getFormValues(e, index)
                                        }
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6 col-lg-3">
                                    <div className="form-group">
                                      <label>
                                        Frequency{" "}
                                        <span class="text-danger">*</span>
                                      </label>
                                      <input
                                        name="frequency"
                                        id="item"
                                        type="text"
                                        class="form-control"
                                        placeholder="3 caps a day"
                                        value={singleItem.frequency}
                                        onChange={(e) =>
                                          getFormValues(e, index)
                                        }
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6 col-lg-3">
                                    <div className="form-group">
                                      <label>
                                        Duration{" "}
                                        <span class="text-danger">*</span>
                                      </label>
                                      <input
                                        name="duration"
                                        id="item"
                                        type="text"
                                        class="form-control"
                                        placeholder="3 days - 1 week"
                                        value={singleItem.duration}
                                        onChange={(e) =>
                                          getFormValues(e, index)
                                        }
                                        required
                                      />
                                    </div>
                                  </div>

                                  <div className="col-12 col-md-6 col-lg-2">
                                    {prescriptionItem.length !== 1 && (
                                      <button
                                        type="button"
                                        onClick={() => handleItemRemove(index)}
                                        className="remove-btn btn bg-danger-light trash"
                                      >
                                        <i className="far fa-trash-alt" />
                                      </button>
                                    )}
                                  </div>
                                  <br />
                                </div>
                              </div>
                            </div>
                          ))}
                          <br />
                        </div>
                      </div>
                      {/* general row  */}
                      <div className="form-row">
                        <label>
                          Instructions/Notes <span class="text-danger">*</span>
                        </label>
                        <textarea
                          class="form-control"
                          rows="5"
                          value={notesValue}
                          onChange={(e) => setNotesValue(e.target.value)}
                          onBlur={function (e) {
                            validateBlankspace(e.target.value, "notesValue");
                            validateSpecialCharacters(
                              e.target.value,
                              "notesValue"
                            );
                          }}
                          required
                        ></textarea>
                        {blankInputError.notesValue}
                        {specialCharacterError.notesValue}
                      </div>
                      <br />
                      {/* Signature */}
                      <div className="col-6">
                        <Form.Group controlId="formFile" className="mb-3">
                          <Form.Label>
                            Upload Signature <span class="text-danger">*</span>
                          </Form.Label>
                          <Form.Control type="file" required />
                        </Form.Group>

                        <div className="sign-name">
                          <p className="mb-0">( Dr. {dentistFullName} )</p>
                          <span className="text-muted">Signature</span>
                        </div>
                      </div>

                      <div className="row rx-btn">
                        <div className="submit-section">
                          <Button
                            type="submit"
                            className="btn btn-primary submit-btn rx-btn"
                          >
                            Create Prescription
                          </Button>
                          <button
                            className="btn btn-outline-danger rx-btn"
                            onClick={() => navigate(-1)}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Modal
        show={modalState == "show-modal"}
        onHide={handleModalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Prescription Created</Modal.Title>
        </Modal.Header>

        <Modal.Body closeButton>
          <p className="modal-txt">You have created a prescription!</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default createEprescription;
