import React, { useState, useMemo } from "react";
import { useSearchParams,useLocation} from "react-router-dom";
import '../../../styles/create-rx.css';
import ProfileWidget from "../../../components/profile-widget";
import "react-bootstrap";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';

const createEprescription = () => {

    const location = useLocation()
    const paramsID = new URLSearchParams(location.search)
    const getPatientIDNumber = paramsID.get('patientIDNum');
    const StringfyIDnumber = useMemo(()=>JSON.stringify(getPatientIDNumber).replace(/"/g,""));
    console.log(StringfyIDnumber, 'create e-prescription');

   
   //calendar input
  const [startDate, setStartDate] = useState(new Date());
  //input variables
  const [genericValue, setGenericValue] = useState("");
  const [brandValue, setBrandValue] = useState("");
  const [dosageValue, setDosageValue] = useState("");
  const [formValue, setFormValue] = useState("");
  const [frequencyValue, setFrequencyValue] = useState("");
  const [durationValue, setDurationValue] = useState("");
  const [notesValue, setNotesValue] = useState("");

  const createEPrescription = () => {

    console.log(genericValue);
    console.log(brandValue);
    console.log(dosageValue);
    console.log(formValue);
    console.log(frequencyValue);
    console.log(durationValue);
    console.log(notesValue);
    console.log(imgFile);

    Axios.post("http://localhost:3001/createEprescription",{
        patientIDNum: StringfyIDnumber,
        dateValue: startDate,
        genericValue: genericValue,
        brandValue: brandValue,
        dosageValue: dosageValue,
        formValue: formValue,
        frequencyValue: frequencyValue,
        durationValue: durationValue,
        notesValue: notesValue,
        imgFile: imgFile,
      });
  }




    const [imgFile, setFile] = useState();
    function handleChange(event) {
        setFile(event.target.files[0])
    }
    function handleSubmit(event) {
        event.preventDefault()
        const url = 'http://localhost:3001/uploadFile';
        const formData = new FormData();
        formData.append('file', imgFile);
        formData.append('fileName', imgFile.name);
        const config = {
        headers: {
            'content-type': 'multipart/form-data',
        },
        };
        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
        });
    
    }


    return (
        <>
            {/* Main Wrapper */}
            <div className="main-wrapper">

                {/* Breadcrumb */}
                <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-12">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="/dashboardpage">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Add Prescription
                                        </li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Add Prescription</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Profile Widget */}
                <section class="section profile">
                <div className="row">
                    <ProfileWidget/>

                {/* E-prescription */}
                <div class="col-xl-8">
                    <div className="card patient-info">
                        <div className="card-body pt-3">
                            <h4 className="card-title">Create Prescription</h4>
                            <div className="divider"></div>

                            {/* Professional information */}
                            <div className="biller-info"> <br/>
                                    <h5 className="rx-pr"> Prescription Information </h5> 
                                        <div class="col-12 col-md-6 col-lg-4">
                                                <label>Date of Prescription</label>
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
                            </div>

                            {/* Add Item */}
                            <div className="add-more-item text-left">
                                <a href="javascript:void(0);">
                                    <button type="submit" className="btn btn-primary rx-btn">
                                        <i className="fas fa-plus" /> Add Item
                                    </button>
                                </a>
                            </div>

                            {/* Forms */}
                            <div class="card-form">
                                <div class="card-body-form">
                                    <div class="experience-info">
                                            <div class="row form-row experience-cont">
                                                    <div class="col-12 col-md-10 col-lg-12">
                                                        <div class="row form-row">

                                                            <div class="col-12 col-md-6 col-lg-4">
                                                                <div class="form-group">
                                                                    <label>Generic <span class="text-danger">*</span></label>
                                                                    <input type="text" class="form-control" placeholder="Mefenamic Acid" onChange={(e) => {setGenericValue(e.target.value)}}/>
                                                                </div>
                                                            </div>

                                                            <div class="col-12 col-md-6 col-lg-3">
                                                                <div class="form-group">
                                                                    <label>Brand <span class="text-danger">*</span></label>
                                                                    <input type="text" class="form-control" placeholder="Ponstan" onChange={(e) => {setBrandValue(e.target.value)}}/>
                                                                </div>
                                                            </div>

                                                            <div class="col-12 col-md-6 col-lg-3">
                                                                <div class="form-group">
                                                                    <label>Dosage <span class="text-danger">*</span></label>
                                                                    <input type="text" class="form-control" placeholder="500mg" onChange={(e) => {setDosageValue(e.target.value)}}/>
                                                                </div>
                                                            </div>

                                                            <div class=" col-12 col-md-6 col-lg-2">
                                                                <div class="add-more">
                                                                    <br />
                                                                    <a href="#" className="btn bg-danger-light trash">
                                                                    <i className="far fa-trash-alt" /></a>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div class="col-12 col-md-10 col-lg-12">
                                                        <div class="row form-row">
                                                            <div class="col-12 col-md-6 col-lg-4">
                                                                <div class="form-group">
                                                                    <label>Form <span class="text-danger">*</span></label>
                                                                    <input type="text" class="form-control" placeholder="Capsule" onChange={(e) => {setFormValue(e.target.value)}}/>
                                                                </div>
                                                            </div>

                                                            <div class="col-12 col-md-6 col-lg-3">
                                                                <div class="form-group">
                                                                    <label>Frequency <span class="text-danger">*</span></label>
                                                                    <input type="text" class="form-control" placeholder="3 caps a day" onChange={(e) => {setFrequencyValue(e.target.value)}}/>
                                                                </div>
                                                            </div>

                                                            <div class="col-12 col-md-6 col-lg-3">
                                                                <div class="form-group">
                                                                    <label>Duration <span class="text-danger">*</span></label>
                                                                    <input type="text" class="form-control" placeholder="3 days - 1 week" onChange={(e) => {setDurationValue(e.target.value)}}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* notes */}
                                                    <div class="col-12 col-md-10 col-lg-7 rx-notes">
                                                        <div class="row form-row">
                                                            <div class="form-group mb-0">
                                                                <label>Notes</label>
                                                                <textarea class="form-control" rows="5" onChange={(e) => {setNotesValue(e.target.value)}}></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                            </div> {/* end of forms */}
                            
                            {/* Signature */}
                            <div className="col-12 col-md-6 col-lg-4">
                                            <div className="signature-wrap">
                                            {/* <div className="signature"> */}
                                                <span>Upload a file or drag and drop</span>
                                                    <form>
                                                        <input
                                                            type="file"
                                                            className="signature sgn-file"
                                                            onChange={handleChange}
                                                        />
                                                    </form>
                                                {/* </div> */}
                                                {/* <input type="file" className="signature"><span>Upload a file or drag and drop</span></input> */}

                                                <div className="sign-name">
                                                    <p className="mb-0">( Dr. Pamela Rimorin Concepcion )</p>
                                                    <span className="text-muted">Signature</span>
                                                </div>
                                            </div>
                            </div>{/* end of Signature */}

                            {/* Submit Section */}
                            <div className="col-md-12 rx-btn">
                                            <div className="submit-section">
                                                <button
                                                    type="reset"
                                                    className="btn btn-secondary submit-btn rx-btn"
                                                >
                                                    Clear
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary submit-btn rx-btn"
                                                >
                                                    Preview
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary submit-btn rx-btn" 
                                                    onClick={()=> {createEPrescription()}}
                                                >
                                                    Create
                                                </button>
                                            </div>
                            </div> {/* /Submit Section */}

                        </div>
                    </div>
                </div> {/* end of prescription */}
                
                </div> {/* end of row */} 
                
                </section>
            </div> {/* /Main Wrapper */}
        </>
    );
}
export default createEprescription;