import React, { useEffect } from "react";
import { useState, useMemo } from "react";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";

//project imports
import DropFileInput from "../../../components/dragNdrop";
import "../../../styles/dental-record.css";
import ProfileWidgetTwo from "../../../components/profile-widget2";
import DentalChart from "../../../components/dental-teeth-chart";
import { createReceiptPatientRef } from "../../payment-records/secretary-module/secpayment-datatable";

//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateDentalRecord = () => {
  const location = useLocation();
  const paramsID = new URLSearchParams(location.search);
  const getPatientAppNum = paramsID.get("appNum");
  const StringfyAppNumber = useMemo(() =>
    JSON.stringify(getPatientAppNum).replace(/"/g, "")
  );
  console.log(StringfyAppNumber, "create dental record");
  const [patientIDNumber, setPatientIDNumber] = useState("");

  //breadcrumb href ref
  var patientsRoute = "/dentist/patients/view-patient?patientIDNum=";

  const [modalState, setModalState] = useState(false);
  const navigate = useNavigate();
  const handleModalClose = () => {
    setModalState(false);
    navigate(
      "/dentist/patients/view-patient?patientIDNum=" +
        patientIDNumber.substring(3, patientIDNumber.length)
    );
    window.location.reload();
  };

  const handleModal = () => {
    setModalState("show-modal");
  };

  const getPatientIDnumber = async () => {
    try {
      const response = await Axios.get(
        "https://rimorin-dental-clinic.herokuapp.com/getPatientAppNumforDental",
        {
          params: {
            appNumber: StringfyAppNumber,
          },
        }
      );
      console.log(response.data);
      setPatientIDNumber(response.data[0].patientIDnumber);
      setPatientObjID(response.data[0]._id);
      setPatientProcedures(response.data[0].procedures);

      console.log(response.data[0]._id);
    } catch (error) {
      console.log(error);
    }
  };

  const [patientProcedures, setPatientProcedures] = useState([]);
  const [patientObjID, setPatientObjID] = useState("");
  console.log("Procedures Value", patientProcedures);

  const [procValue, setProcedure] = useState([]);

  console.log("Procedures Mapped:", procValue);

  useEffect(() => {
    getPatientIDnumber();
    patientProcedures.map((item) =>
      item.chosen != null
        ? item.chosen.map((proc) =>
            setProcedure((current) => [...current, proc])
          )
        : null
    );
  }, [patientProcedures.length]);

  //patient reference for receipt creation
  const getPatientReference = {
    getAppNumber: StringfyAppNumber,
    getpatientID: patientIDNumber,
    getDateValue: startDate,
    getObjectID: patientObjID,
  };
  console.log(getPatientReference);

  //calendar input
  const [startDate, setStartDate] = useState(new Date());

  const [chartedTeeth, setchartedTeeth] = useState([]);

  const [treatDesc, getTreatDesc] = useState("");
  //drag n drop
  const [getFile, setGetFile] = useState("");
  // console.log(getFile, "this is the img value");
  const onFileChange = (files) => {
    setGetFile(files);
  };

  const handleShow = () => {
    setModalState("show-modal");
  };
  const handleClickTeeth = (event) => {
    event.currentTarget.classList.toggle("unmarked");
    event.currentTarget.classList.toggle("marked");
    var chosenTeeth = event.currentTarget.id;
    // console.log(chosenTeeth);
    var index = chartedTeeth.indexOf(chosenTeeth);
    // console.log(index);
    if (index > -1) {
      const shallowChartedTeeth = [...chartedTeeth];
      shallowChartedTeeth.splice(index, 1); // 2nd parameter means remove one item only
      setchartedTeeth(shallowChartedTeeth);
      console.log(chartedTeeth);
    } else {
      setchartedTeeth((chartedTeeth) => [...chartedTeeth, chosenTeeth]);
      console.log(chartedTeeth);
    }
  };

  const uploadDentalRecords = () => {
    console.log(patientIDNumber);
    console.log(StringfyAppNumber);
    console.log(startDate);
    console.log(treatDesc);
    console.log(chartedTeeth);
    console.log(getFile);

    Axios.post(
      "https://rimorin-dental-clinic.herokuapp.com/createDentalRecord",
      {
        patientIDNum: patientIDNumber,
        appNum: StringfyAppNumber,
        dateValue:
          startDate.getFullYear() +
          "-" +
          ("0" + (startDate.getMonth() + 1)).slice(-2) +
          "-" +
          ("0" + startDate.getDate()).slice(-2),
        descValue: treatDesc,
        imgValue: getFile[0],
        chartedTeeth: chartedTeeth,
        procedures: patientProcedures,
      },
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    Axios.post("https://rimorin-dental-clinic.herokuapp.com/createReceipt", {
      patientIDnumber: patientIDNumber,
      appNum: StringfyAppNumber,
      dateValue:
        startDate.getFullYear() +
        "-" +
        ("0" + (startDate.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + startDate.getDate()).slice(-2),
    });
    console.log("Receipt Created with ", patientIDNumber, StringfyAppNumber);
  };

  return (
    <>
      <div class="pagetitle">
        <h1>Create Dental Record</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/dentist">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/dentist/patients">Patients</a>
            </li>
            <li className="breadcrumb-item">
              <a
                href={
                  patientsRoute +
                  patientIDNumber.substring(3, patientIDNumber.length)
                }
              >
                View Patient Records
              </a>
            </li>
            <li class="breadcrumb-item active">Create Dental Record</li>
          </ol>
        </nav>
      </div>
      <div class="col-xl-auto col-lg-auto col-sm-auto col-md-auto">
        <div className="card dental-record-form">
          <div className="card-body pt-3">
            <h5 className="card-title">Create Dental Record</h5>
            <div className="divider"></div>
            <div className="container profile-widget-container">
              <ProfileWidgetTwo patientID={patientIDNumber} />
            </div>
            <div className="divider"></div>
            {/* Treatment Details */}
            <div className="container treatment-details-container">
              <div className="row treatment-details">
                <h4>Treatment Details</h4>
                <div className="col-lg-6 col-xl-6 col-md-6">
                  {/* Date of Treatment*/}
                  <div className="treatment-date">
                    <h6>Date of Treatment</h6>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => {
                        setStartDate(date);
                        console.log(
                          "This is the calendar data:",
                          date.toString().slice(3, 15)
                        );
                        console.log("set Start: ", startDate.toString());
                        window.localStorage.setItem("date", date);
                      }}
                      isClearable
                      placeholderText="Choose a date"
                      minDate={new Date()}
                      shouldCloseOnSelect={false}
                      dateFormat="MMMM d, yyyy"
                      //exclude sundays
                      filterDate={(date) =>
                        date.getDay() !== 7 && date.getDay() !== 0
                      }
                    />
                  </div>
                  <div className="treatment-desc">
                    {/* Treatment Description*/}
                    <label className="form-label">
                      <h6>
                        Treatment Description{" "}
                        <span className="text-danger font-weight-bold">*</span>
                      </h6>
                    </label>
                    <textarea
                      className="form-control"
                      id="reason"
                      rows="5"
                      placeholder="Write treatment details"
                      onChange={(e) => {
                        getTreatDesc(e.target.value);
                      }}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-6 col-md-6 treatment-files">
                  <h6>Treatment File Attatchments (Xrays, etc)</h6>
                  <DropFileInput
                    onFileChange={(files) => onFileChange(files)}
                  />
                </div>
              </div>
            </div>
            <div class="row">
              {/* <div class="col modal-label">Procedure/s Selected:</div>
              <div class="col modal-values"> 
              {procValue.map((item, index) => (
                      <tr key={index}>
                        <td>{item.procedure}</td>
                      </tr>
                    ))}
              </div>
            </div> */}
              {/* Dental Teeth Chart */}
              <div className="container dental-chart-container">
                <div className="row">
                  <h4>Dental Record</h4>
                  <DentalChart handleClickTeeth={handleClickTeeth} />
                </div>
              </div>
              {/* Procedure */}
            </div>
          </div>
        </div>
        {/* summary of treatment */}
        <div class="col-xl-auto col-md-auto col-lg-auto">
          <div className="card dental-record-form">
            <div className="card-body pt-3">
              <h5 className="card-title">Summary of Treatment</h5>
              <div className="divider"></div>
              <div class="row">
                <div className="col-3">
                  <h6>Selected Tooth/Teeth</h6>
                  {chartedTeeth.map((item) => (
                    <p>{item}</p>
                  ))}
                </div>
                <div className="col-3">
                  <h6>Date of Treatment</h6>
                  <p>
                    {JSON.stringify(startDate)
                      .replace(/"/g, "")
                      .substring(0, 10)}
                  </p>
                </div>
                <div className="col-3">
                  <h6>Treatment Description</h6>
                  <p>{JSON.stringify(treatDesc).replace(/"/g, "")}</p>
                </div>

                <div className="col-3">
                  <h6>Procedure/s</h6>
                  {/* {checked.map((item) =>
                  item.chosen != null
                    ? item.chosen.map((proc) => <p>{proc.procedure}</p>)
                    : null
                )} */}

                  {procValue.map((item) => (
                    <p>{item.procedure}</p>
                  ))}
                </div>

                <div class="dental-form-buttons">
                  <Button
                    type="submit"
                    class="btn btn-primary"
                    onClick={() => {
                      uploadDentalRecords();
                      handleModal();
                    }}
                  >
                    Create
                  </Button>
                  <button
                    class="btn btn-outline-secondary"
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal
          show={modalState == "show-modal"}
          onHide={handleModalClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Dental Record Created!</Modal.Title>
          </Modal.Header>
          <Modal.Body closeButton>
            <p className="modal-txt">You have created a dental record!</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
            {/*<Button
            variant="primary"
            href={createReceiptPatientRef(getPatientReference)}
          >
            Proceed to Payment
          </Button>*/}
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default CreateDentalRecord;
