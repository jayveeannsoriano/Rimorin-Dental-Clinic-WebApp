import React, { useEffect } from "react";
import { useState, useMemo } from "react";
import Form from 'react-bootstrap/Form';
import Axios from 'axios';
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

//project imports
import DropFileInput from "../../../components/dragNdrop";
import '../../../styles/dental-record.css'
import ProfileWidgetTwo from "../../../components/profile-widget2";
import DentalChart from "../../../components/dental-teeth-chart";

//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditDentalRecord = () => {

  const location = useLocation();
  const paramsID = new URLSearchParams(location.search);
  const getPatientAppNum = paramsID.get("appNum");
  const StringfyAppnumber = useMemo(() =>
    JSON.stringify(getPatientAppNum).replace(/"/g, "")
  );
  console.log(StringfyAppnumber, "create dental record");
  const [patientIDNumber, setPatientIDNumber] = useState([]);
  console.log(patientIDNumber);

  const [modalState, setModalState] = useState(false);
  const navigate = useNavigate();
  const handleModalClose = () => {
      setModalState(false)
      navigate(-1)
  };

  const handleModal = () => {
      setModalState('show-modal')
    }


  const getPatientIDnumber = async () => {

    try {
      const response = await Axios.get(
        "http://localhost:80/getPatientAppNumforDental",
        {
          params: {
            appNumber: StringfyAppnumber,
          },
        }
      );
      console.log(response.data);
      setPatientIDNumber(response.data[0].patientIDnumber);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPatientIDnumber();
  }, []);

  //calendar input
  const [startDate, setStartDate] = useState(new Date());

  const [chartedTeeth, setchartedTeeth] = useState([]);
  //procedure checkbox options
  const [checked, setChecked] = useState([
    {
      option: "Others",
      chosen: [],
    },
    {
      option: "Cosmetic",
      chosen: [],
    },
    {
      option: "Cementation",
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
  console.log(checked, "values");
  const [dentalItem, setDentalItem] = useState([]);
  useEffect(() => {
    checked.map((item) => (
      item.chosen != null
        ? item.chosen.map(
          (proc) => (
            setDentalItem((current) => [...current, proc])
          )
        )
        : null
    ))
  }, [checked]);
  const othersOptions = [
    { procedure: "ORAL PROPHYLAXIS", price: 1000 },
    { procedure: "TOOTH RESTORATION", price: 1200 },
    { procedure: "TOOTH EXTRACTION", price: 800 },
    { procedure: "DEEP SCALING", price: 10200 },
    { procedure: "PTS AND FISSURES SEALANT", price: 700 },
    { procedure: "FLOURIDE TREATMENT", price: 5500 },
    { procedure: "INTERMEDIATE RESTORATION", price: 7000 },
    { procedure: "ORTHODONTICS", price: 48000 },
  ];
  const cosmeticOptions = [
    { procedure: "DIRECT COMPOSITE VENEER", price: 3000 },
    { procedure: "DIRECT COMPOSITE CLASS IV", price: 2000 },
    { procedure: "DIASTEMA CLOSURE (BONDING)", price: 1000 },
    { procedure: "CERAMIC/PORCELAIN VENEER", price: 20000 },
  ];
  const cementationOptions = [
    { procedure: "GLASS IONOMER", price: 11000 },
    { procedure: "DIRECT COMPOSITE CLASS IV", price: 2000 },
    { procedure: "DIASTEMA CLOSURE (BONDING)", price: 1000 },
    { procedure: "CERAMIC/PORCELAIN VENEER", price: 20000 },
  ];
  const endodonticOptions = [
    { procedure: "ROOT CANAL THERAPY", price: 4400 },
    { procedure: "PULPOTOMY", price: 5300 },
    { procedure: "POST AND CORE", price: 6200 },
  ];
  const prostheticOptions = [
    { procedure: "DENTAL REPAIR", price: 12000 },
    { procedure: "DENTURE RELINE (LABORATORY MADE)", price: 35000 },
    { procedure: "DENTURE RELINE (DIRECT)", price: 30000 },
    { procedure: "SOFT RELINE", price: 16000 },
    { procedure: "DENTURE REPLACEMENT", price: 15000 },
  ];
  const surgicalOptions = [
    { procedure: "ODONTECTOMY", price: 5000 },
    { procedure: "OPERCULECTOMY", price: 5000 },
    { procedure: "FRENECTOMY", price: 5200 },
    { procedure: "ALVEOLECTOMY", price: 8300 },
    { procedure: "GINGIVECTOMY OR CONTOURING", price: 5000 },
    { procedure: "APICOECTOMY", price: 8500 },
  ];
  //const [checked, setChecked] = useState([{ option: "Others", chosen: [] }]);
  const handleChangeCheckbox = (input) => (event) => {
    var value = JSON.parse(event.target.value);
    var isChecked = event.target.checked;
    console.log("value is:", value[0].procedure);
    var tempArr = { procedure: value[0].procedure, price: value[0].price };
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
  const [treatDesc, getTreatDesc] = useState("");
  const [CheckboxIndex, getBoxIndex] = useState([]);
  //drag n drop
  const [getFile, setGetFile] = useState("");
  // console.log(getFile, "this is the img value");
  const onFileChange = (files) => {
    setGetFile(files);
  };
  const uploadDentalRecords = () => {
    console.log(patientIDNumber);
    console.log(StringfyAppnumber);
    console.log(startDate);
    console.log(treatDesc);
    console.log(chartedTeeth);
    console.log(getFile);


    Axios.post("http://localhost:80/createDentalRecord", {
      patientIDNum: patientIDNumber,
      appNum: StringfyAppnumber,
      dateValue: startDate,
      descValue: treatDesc,
      imgValue: getFile[0],
      procedures: checked,
      chartedTeeth: chartedTeeth
    }, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });

    Axios.post("http://localhost:80/createReceipt", {
      patientIDnumber: patientIDNumber,
      appNum: StringfyAppnumber,
      date: startDate,
    });
    console.log("Receipt Created with ", patientIDNumber, StringfyAppnumber);
    // setModalState('show-modal');
    handleShow();
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
  return (
    <>
      <div class="pagetitle">
        <h1>Edit Dental Record</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/dentist">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="/dentist/patient-records/dental-record">Patients</a>
            </li>
            <li class="breadcrumb-item" onClick={() => navigate(-1)}>
              {/* <a href="/dentist/patient-records/dental-record"> */}
              Dental Records
              {/* </a> */}
            </li>
            <li class="breadcrumb-item active">
              <a href="/dentist/patient-records/dental-record/edit-dental-record">
                Edit Dental Record
              </a>
            </li>
          </ol>
        </nav>
      </div>

      <form onSubmit={(e) => e.preventDefault}>
        <div class="col-xl-auto col-lg-auto col-sm-auto col-md-auto">
          <div className="card dental-record-form">
            <div className="card-body pt-3">
              <h5 className="card-title">Edit Dental Record</h5>
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
                          console.log("This is the calendar data:", date);
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
                      <label htmlFor="validationCustom01" className="form-label">
                        <h6>Treatment Description <span className="text-danger font-weight-bold">*</span></h6>
                      </label>
                      <textarea
                        className="form-control"
                        id="reason"
                        rows="5"
                        placeholder="Write treatment details"
                        onChange={(e) => { getTreatDesc(e.target.value) }}
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

              {/* Dental Teeth Chart */}

              <div className="container dental-chart-container">
                <div className="row">
                  <h4>Dental Record</h4>
                  <DentalChart handleClickTeeth={handleClickTeeth} />
                </div>
              </div>

              {/* Procedure */}
              <div className="container procedure-container">
                <div className="row procedure-row">
                  <h6>Procedure</h6>
                  <div className="col-lg-4 col-xl-4 col-md-6">
                    <div className="procedure-label">Others</div>

                    <div className="divider procedure-div"></div>
                    <Form>
                      {othersOptions.map((item, index) => (
                        <div key={index} className="mb-3">
                          <Form.Check
                            value={JSON.stringify([item])}
                            id={[item]}
                            type="checkbox"
                            label={`${item.procedure}`}
                            onClick={handleChangeCheckbox("Others")}
                            required
                          />
                        </div>
                      ))}
                    </Form>
                  </div>
                  <div className="col-lg-4 col-xl-4 col-md-6">
                    <div className="procedure-label">Cosmetic Restoration</div>
                    <div className="divider procedure-div"></div>
                    <Form>
                      {cosmeticOptions.map((item, index) => (
                        <div key={index} className="mb-3">
                          <Form.Check
                            value={JSON.stringify([item])}
                            id={[item]}
                            type="checkbox"
                            label={`${item.procedure}`}
                            onClick={handleChangeCheckbox('Cosmetic')}
                          />
                        </div>
                      ))}
                    </Form>
                  </div>
                  <div className="col-lg-4 col-xl-4 col-md-6">
                    <div className="procedure-label">Cementation</div>
                    <div className="divider procedure-div"></div>
                    <Form>
                      {cementationOptions.map((item, index) => (
                        <div key={index} className="mb-3">
                          <Form.Check
                            value={JSON.stringify([item])}
                            id={[item]}
                            type="checkbox"
                            label={`${item.procedure}`}
                            onClick={handleChangeCheckbox('Cementation')}
                          />
                        </div>
                      ))}
                    </Form>
                  </div>
                </div>
                <div className="row procedure-row">
                  <div className="col-lg-4 col-xl-4 col-md-6">
                    <div className="procedure-label">Endodontic Treatment</div>
                    <div className="divider procedure-div"></div>
                    <Form>
                      {endodonticOptions.map((item, index) => (
                        <div key={index} className="mb-3">
                          <Form.Check
                            value={JSON.stringify([item])}
                            id={[item]}
                            type="checkbox"
                            label={`${item.procedure}`}
                            onClick={handleChangeCheckbox('Endodontic')}
                          />
                        </div>
                      ))}
                    </Form>
                  </div>
                  <div className="col-lg-4 col-xl-4 col-md-6">
                    <div className="procedure-label">Prosthetic Procedures</div>
                    <div className="divider procedure-div"></div>
                    <Form>
                      {prostheticOptions.map((item, index) => (
                        <div key={index} className="mb-3">
                          <Form.Check
                            value={JSON.stringify([item])}
                            id={[item]}
                            type="checkbox"
                            label={`${item.procedure}`}
                            onClick={handleChangeCheckbox('Prosthetic')}
                          />
                        </div>
                      ))}
                    </Form>
                  </div>
                  <div className="col-lg-4 col-xl-4 col-md-6">
                    <div className="procedure-label">Surgical Procedure</div>
                    <div className="divider procedure-div"></div>
                    <Form>
                      {surgicalOptions.map((item, index) => (
                        <div key={index} className="mb-3">
                          <Form.Check
                            value={JSON.stringify([item])}
                            id={[item]}
                            type="checkbox"
                            label={`${item.procedure}`}
                            onClick={handleChangeCheckbox('Surgical')}
                          />
                        </div>
                      ))}
                    </Form>
                  </div>
                </div>
              </div>

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
                  {chartedTeeth.map((item) => 
                  <p>{item}</p>
                  )}
                </div>
                <div className="col-3">
                  <h6>Date of Treatment</h6>
                  <p>{JSON.stringify(startDate).replace(/"/g, "").substring(0,10)}</p>
                </div>
                <div className="col-3">
                  <h6>Treatment Description</h6>
                  <p>{JSON.stringify(treatDesc).replace(/"/g, "")}</p>
                </div>
            
                <div className="col-3">
                  <h6>Procedure/s</h6>
                  {checked.map((item) => 
                     item.chosen != null
                     ? item.chosen.map((proc) => (
                  <p>{proc.procedure}</p>
                  )): null
                   )}
                </div>
                <div class="dental-form-buttons">
                  <Button 
                  type="submit" 
                  class="btn btn-primary" 
                  onClick={() =>{
                    uploadDentalRecords();
                    handleModal();
                    }}
                  >
                    Save Changes</Button>
                  <button 
                    class="btn btn-outline-secondary"
                    onClick={() => navigate(-1)}
                  >Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      
      <Modal show={modalState == 'show-modal'} onHide={handleModalClose} backdrop="static" keyboard={false}>

        <Modal.Header closeButton>
          <Modal.Title>Dental Record</Modal.Title>
        </Modal.Header>

        <Modal.Body closeButton>
          {/* <img src={successful} alt="success image" className='success-img' /> */}
          <p className='modal-txt'>You have created a dental record!</p>
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
export default EditDentalRecord;