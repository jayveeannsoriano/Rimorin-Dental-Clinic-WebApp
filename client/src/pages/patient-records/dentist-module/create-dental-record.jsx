import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Axios from 'axios';

//project imports
import DropFileInput from "../../../components/dragNdrop";
import '../../../styles/dental-record.css'
import ProfileWidgetTwo from "../../../components/profile-widget2";

//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateDentalRecord = () => {
  //calendar input
  const [startDate, setStartDate] = useState(new Date());

  //procedure checkbox options 
  const [checked, setChecked] = useState([]);  
  const othersOptions =['ORAL PROPHYLAXIS', 'TOOTH RESTORATION', 'TOOTH EXTRACTION', 'DEEP SCALING', 'PTS AND FISSURES SEALANT', 'FLOURIDE TREATMENT', 'INTERMEDIATE RESTORATION'];
  const cosmeticOptions =['DIRECT COMPOSITE VENEER', 'DIRECT COMPOSITE CLASS IV', 'DIASTEMA CLOSURE (BONDING)', 'CERAMIC/PORCELAIN VENEER'];
  const cementationOptions =['GLASS IONOMER', 'DIRECT COMPOSITE CLASS IV', 'DIASTEMA CLOSURE (BONDING)', 'CERAMIC/PORCELAIN VENEER'];
  const endodonticOptions=['ROOT CANAL THERAPY', 'PULPOTOMY', 'POST AND CORE'];
  const prostheticOptions=['DENTAL REPAIR', 'DENTURE RELINE (LABORATORY MADE)', 'DENTURE RELINE (DIRECT)', 'SOFT RELINE', 'DENTURE REPLACEMENT'];
  const surgicalOptions=['ODONTECTOMY', 'OPERCULECTOMY', 'FRENECTOMY', 'ALVEOLECTOMY', 'GINGIVECTOMY OR CONTOURING', 'APICOECTOMY'];

  const [treatDesc, getTreatDesc] = useState("");
  const [CheckboxIndex, getBoxIndex] = useState([]);


  //drag n drop
  const [getFile, setGetFile] = useState("");
  const onFileChange = (files) => {
    setGetFile(files);
    console.log(files);}
  
  const uploadDentalRecords = () => {

    // Axios.put("https://localhost:3001/uploadDentalRecord",{
    //   dateValue: startDate,
    //   descValue: treatDesc,
    //   imgValue: getFile,
    // });
    console.log(startDate);
    console.log(treatDesc);
    console.log(getFile);
  }

  return (
    <>
      <div class="pagetitle">
        <h1>Create Dental Record</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/dashboard">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="/dashboard/patient-records">Patient Records</a>
            </li>
            <li class="breadcrumb-item">
              <a href="/dashboard/patient-records/dental-record">
                Dental Record
              </a>
            </li>
            <li class="breadcrumb-item">
              <a href="/dashboard/patient-records/dental-record/create-dental-record">
                Create Dental Record
              </a>
            </li>
          </ol>
        </nav>
      </div>

      <div class="col-xl">
        <div className="card dental-record-form">
          <div className="card-body pt-3">
            <h5 className="card-title">Create Dental Record</h5>
            <div className="divider"></div>

            <div>
              <ProfileWidgetTwo/>
            </div>
            
            <div className="divider"></div>

            <div className="row treatment-details">
              <h4>Treatment Details</h4>
              <div className="col-5">
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
                  onChange={(e) => {getTreatDesc(e.target.value)}}
                ></textarea>
                </div>
              </div>

              <div className="col-7 treatment-files">
                <h6>Treatment File Attatchments (Xrays, etc)</h6>
                <DropFileInput 
                onFileChange={(files) => onFileChange(files)}
                />
                </div>
            </div>

            <div className="row">
                <h4>Dental Record</h4>
            </div>

            {/* Procedure */}
            <div className="procedure-container">
              <div className="row procedure-row">
              <h6>Procedure</h6>
                  <div className="col-4">
                      <div className="procedure-label">Others</div>
                      
                      <div className="divider procedure-div"></div>
                      <Form >
                          {othersOptions.map((item, index) => (
                              <div key={index} className="mb-3">
                              <Form.Check 
                                  input value={[index]}
                                  type="checkbox"
                                  label={`${item}`} 
                                  onChange={(e) => {getBoxIndex(e.target.value)}}
                              />
                              </div>
                          ))}
                          </Form>
                  </div>
                  <div className="col-4">
                    <div className="procedure-label">Cosmetic Restoration</div>
                      <div className="divider procedure-div"></div>
                      <Form>
                          {cosmeticOptions.map((item, index) => (
                              <div key={index} className="mb-3">
                              <Form.Check 
                                  input value={index}
                                  type="checkbox"
                                  label={`${item}`}
                              />
                              </div>
                          ))}
                          </Form>
                  </div>
                  <div className="col-4">
                      <div className="procedure-label">Cementation</div>
                      <div className="divider procedure-div"></div>
                      <Form>
                          {cementationOptions.map((item, index) => (
                              <div key={index} className="mb-3">
                              <Form.Check 
                                  input value={index}
                                  type="checkbox"
                                  label={`${item}`}
                              />
                              </div>
                          ))}
                          </Form>
                  </div>
              </div>
              <div className="row procedure-row">
                  <div className="col-4">
                    <div className="procedure-label">Endodontic Treatment</div>
                      <div className="divider procedure-div"></div>
                      <Form>
                          {endodonticOptions.map((item, index) => (
                              <div key={index} className="mb-3">
                              <Form.Check 
                                  input value={index}
                                  type="checkbox"
                                  label={`${item}`}
                              />
                              </div>
                          ))}
                          </Form>
                  </div>
                  <div className="col-4">
                  <div className="procedure-label">Prosthetic Procedures</div>
                      <div className="divider procedure-div"></div>
                      <Form>
                          {prostheticOptions.map((item, index) => (
                              <div key={index} className="mb-3">
                              <Form.Check 
                                  input value={index}
                                  type="checkbox"
                                  label={`${item}`}
                              />
                              </div>
                          ))}
                          </Form>
                  </div>
                  <div className="col-4">
                  <div className="procedure-label">Surgical Procedure</div>
                      <div className="divider procedure-div"></div>
                      <Form>
                          {surgicalOptions.map((item, index) => (
                              <div key={index} className="mb-3">
                              <Form.Check 
                                  input value={index}
                                  type="checkbox"
                                  label={`${item}`}
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

      <div class="col-xl">
        <div className="card dental-record-form">
          <div className="card-body pt-3">
          <h5 className="card-title">Summary of Treatment</h5>
            <div className="divider"></div>
            <div class="row">
              <div className="col-3">
                <h6>Selected Tooth/Teeth</h6>
                <p>16</p>
              </div>
              <div className="col-3">
                <h6>Date of Treatment</h6>
                <p>November 6, 2022</p>
              </div>
              <div className="col-3">
                <h6>Treatment Description</h6>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
              <div className="col-3">
                <h6>Procedure/s</h6>
                <p>Root Canal Therapy</p>
              </div>
              <div class="dental-form-buttons">
                  <button type="submit" class="btn btn-primary" onClick={uploadDentalRecords}>Create</button>
                  <button class="btn btn-outline-secondary">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateDentalRecord;