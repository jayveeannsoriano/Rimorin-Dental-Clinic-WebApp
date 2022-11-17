import React from "react";
import { useState, useMemo } from "react";
import Form from 'react-bootstrap/Form';
import Axios from 'axios';
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";

//project imports
import DropFileInput from "../../../components/dragNdrop";
import '../../../styles/dental-record.css'
import ProfileWidgetTwo from "../../../components/profile-widget2";
import DentalChart from "../../../components/dental-teeth-chart";

//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateDentalRecord = () => {

  const location = useLocation()
  const paramsID = new URLSearchParams(location.search)
  const getPatientIDNumber = paramsID.get('patientIDNum');
  const StringfyIDnumber = useMemo(() => JSON.stringify(getPatientIDNumber).replace(/"/g, ""));
  console.log(StringfyIDnumber, 'create dental record');
  //calendar input
  const [startDate, setStartDate] = useState(new Date());

  const [chartedTeeth, setchartedTeeth] = useState([]);
  //procedure checkbox options 
  const [checked, setChecked] = useState([
    { option: 'Others',
      chosen: [],
    },
    { option: 'Cosmetic',
      chosen: [],
    },
    { option: 'Cementation',
      chosen: [],
    },
    { option: 'Endodontic',
      chosen: [],
    },
    { option: 'Prosthetic',
      chosen: [],
    },
    { option: 'Surgical',
      chosen: [],
    },
  ]);
  const othersOptions = ['ORAL PROPHYLAXIS', 'TOOTH RESTORATION', 'TOOTH EXTRACTION', 'DEEP SCALING', 'PTS AND FISSURES SEALANT', 'FLOURIDE TREATMENT', 'INTERMEDIATE RESTORATION', 'ORTHODONTICS'];
  const cosmeticOptions = ['DIRECT COMPOSITE VENEER', 'DIRECT COMPOSITE CLASS IV', 'DIASTEMA CLOSURE (BONDING)', 'CERAMIC/PORCELAIN VENEER'];
  const cementationOptions = ['GLASS IONOMER', 'DIRECT COMPOSITE CLASS IV', 'DIASTEMA CLOSURE (BONDING)', 'CERAMIC/PORCELAIN VENEER'];
  const endodonticOptions = ['ROOT CANAL THERAPY', 'PULPOTOMY', 'POST AND CORE'];
  const prostheticOptions = ['DENTAL REPAIR', 'DENTURE RELINE (LABORATORY MADE)', 'DENTURE RELINE (DIRECT)', 'SOFT RELINE', 'DENTURE REPLACEMENT'];
  const surgicalOptions = ['ODONTECTOMY', 'OPERCULECTOMY', 'FRENECTOMY', 'ALVEOLECTOMY', 'GINGIVECTOMY OR CONTOURING', 'APICOECTOMY'];
  

  const [treatDesc, getTreatDesc] = useState("");
  const [CheckboxIndex, getBoxIndex] = useState([]);


  //drag n drop
  const [getFile, setGetFile] = useState("");
  const onFileChange = (files) => {
    setGetFile(files);
  }

  const uploadDentalRecords = () => {
    console.log(StringfyIDnumber);
    console.log(startDate);
    console.log(treatDesc);
    console.log(chartedTeeth);
    console.log(getFile);

    Axios.post("http://localhost:3001/createDentalRecord", {
      patientIDNum: StringfyIDnumber,
      dateValue: startDate,
      descValue: treatDesc,
      imgValue: getFile[0],
      procedures: checked,
      chartedTeeth: chartedTeeth
    }, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });

  }

  const handleClickTeeth = event => {

    event.currentTarget.classList.toggle('unmarked');
    event.currentTarget.classList.toggle('marked');

    var chosenTeeth = event.currentTarget.id;
    console.log(chosenTeeth);

    var index = chartedTeeth.indexOf(chosenTeeth);

    console.log(index);

    if (index > -1) {
      chartedTeeth.splice(index, 1); // 2nd parameter means remove one item only
      console.log(chartedTeeth)

    } else {
      setchartedTeeth(chartedTeeth => [...chartedTeeth, chosenTeeth]);
      console.log(chartedTeeth)
    }


  }

  const handleChangeCheckbox = input => event => {
    var value = event.target.value;
    var isChecked = event.target.checked;
    setChecked(current =>
      current.map(obj => {
        if (obj.option === input) {
          if(isChecked){
          return {...obj, chosen:  [...obj.chosen, value ] };
          }else{
            var newArr = obj.chosen;
            var index = newArr.indexOf(event.target.value);
            newArr.splice(index, 1); // 2nd parameter means remove one item only
            return {...obj, chosen: newArr};
          }
        }
        return obj;
      }),
    );
    console.log(checked);
  }

  const navigate = useNavigate();
  return (
    <>
      <div class="pagetitle">
        <h1>Create Dental Record</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/dentist">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="/dentist/patient-records/dental-record">Patients</a>
            </li>
            <li class="breadcrumb-item" onClick = {() => navigate(-1)}>
              {/* <a href="/dentist/patient-records/dental-record"> */}
                Dental Records
              {/* </a> */}
            </li>
            <li class="breadcrumb-item active">
              <a href="/dentist/patient-records/dental-record/create-dental-record">
                Create Dental Record
              </a>
            </li>
          </ol>
        </nav>
      </div>

      <div class="col-xl-auto col-lg-auto col-sm-auto col-md-auto">
        <div className="card dental-record-form">
          <div className="card-body pt-3">
            <h5 className="card-title">Create Dental Record</h5>
            <div className="divider"></div>

            <div className="container profile-widget-container">
              <ProfileWidgetTwo />
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
                  <Form >
                    {othersOptions.map((item, index) => (
                      <div key={index} className="mb-3">
                        <Form.Check
                          input value={[item]}
                          id={[item]}
                          type="checkbox"
                          label={`${item}`}
                          onClick={handleChangeCheckbox('Others')}
                          
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
                          input value={[item]}
                          id={[item]}
                          type="checkbox"
                          label={`${item}`}
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
                          input value={[item]}
                          id={[item]}
                          type="checkbox"
                          label={`${item}`}
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
                          input value={[item]}
                          id={[item]}
                          type="checkbox"
                          label={`${item}`}
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
                          input value={[item]}
                          id={[item]}
                          type="checkbox"
                          label={`${item}`}
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
                          input value={[item]}
                          id={[item]}
                          type="checkbox"
                          label={`${item}`}
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
                <button type="submit" class="btn btn-primary" onClick={() => uploadDentalRecords()}>Create</button>
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