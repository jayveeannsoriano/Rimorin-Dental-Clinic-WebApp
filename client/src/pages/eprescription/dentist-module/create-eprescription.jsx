import React, { useState, useMemo } from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import '../../../styles/create-rx.css';
import ProfileWidget from "../../../components/profile-widget";
import "react-bootstrap";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';
import PrescriptionDetails from "../../../components/modals/preview-prescription";
import DropFileInput from "../../../components/signature";


const createEprescription = () => {

    const location = useLocation()
    const paramsID = new URLSearchParams(location.search)
    const getPatientIDNumber = paramsID.get('patientIDNum');
    const StringfyIDnumber = useMemo(() => JSON.stringify(getPatientIDNumber).replace(/"/g, ""));
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

    const [getFile, setGetFile] = useState("");
    console.log(getFile, "this is the img value");
    const onFileChange = (files) => {
        setGetFile(files);
    }


    // Add item function
    const [prescriptionItem, setPrescriptionList] = useState([{
        generic: "",
        brand: "",
        dosage: "",
        form: "",
        frequency: "",
        duration: "",
    }]);


    const handleItemAdd = () => {
        setPrescriptionList([...prescriptionItem, {
            generic: "",
            brand: "",
            dosage: "",
            form: "",
            frequency: "",
            duration: "",

        }]);
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
    }

    const createEPrescription = () => {

        console.log(prescriptionItem);
        console.log(notesValue);


        Axios.post("http://localhost:3001/createEprescription", {
            patientIDNum: StringfyIDnumber,
            dateValue: startDate,
            presDetails: prescriptionItem,
            notesValue: notesValue,
            imgFile: getFile[0],
        }, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    }

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     const url = 'http://localhost:3001/uploadFile';
    //     const formData = new FormData();
    //     formData.append('file', imgFile);
    //     formData.append('fileName', imgFile.name);
    //     const config = {
    //         headers: {
    //             'content-type': 'multipart/form-data',
    //         },
    //     };
    //     axios.post(url, formData, config).then((response) => {
    //         console.log(response.data);
    //     });

    // }

    const navigate = useNavigate();

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
                                            <a href="/dentist">Home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="/dentist/eprescription">Patients</a>
                                        </li>
                                        <li className="breadcrumb-item" onClick={() => navigate(-1)}>
                                            View Prescriptions
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
                        <ProfileWidget />

                        {/* E-prescription */}
                        <div class="col-xl-8">
                            <div className="card patient-info">
                                <div className="card-body pt-3">
                                    <h5 className="card-title">Create Prescription</h5>
                                    <div className="divider"></div>

                                    {/* Professional information */}

                                    <div className="biller-info">
                                        <h5 className="rx-pr"> Professional Information </h5>
                                        <p> PTR Number: 12345678</p>
                                        <p> Licence Number: 12345678</p>
                                    </div>

                                    <div className="biller-info"> <br />
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
                                        <button
                                            className="btn btn-primary rx-btn"
                                            onClick={handleItemAdd}>
                                            <i className="fas fa-plus" /> Add Item
                                        </button>
                                    </div>

                                    <div className="card-form">
                                        <div className="card-body-form">
                                            <div className="col-12 col-md-10 col-lg-12">
                                                {/* row for prescription fields */}
                                                {prescriptionItem.map((singleItem, index) => (
                                                    <div key={index}>
                                                        <div className="row form row">
                                                            <div className="row">
                                                                <div className="col-12 col-md-6 col-lg-4">
                                                                    <div className="form-group">
                                                                        <label>Generic <span class="text-danger">*</span></label>
                                                                        <input name="generic" id="item" type="text" class="form-control" placeholder="Mefenamic"
                                                                            value={singleItem.generic}
                                                                            onChange={(e) => getFormValues(e, index)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-md-6 col-lg-3">
                                                                    <div className="form-group">
                                                                        <label>Brand <span class="text-danger">*</span></label>
                                                                        <input name="brand" id="item" type="text" class="form-control" placeholder="Ponstan"
                                                                            value={singleItem.brand}
                                                                            onChange={(e) => getFormValues(e, index)} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-md-6 col-lg-3">
                                                                    <div className="form-group">
                                                                        <label>Dosage <span class="text-danger">*</span></label>
                                                                        <input name="dosage" id="item" type="text" class="form-control" placeholder="500mg"
                                                                            value={singleItem.dosage}
                                                                            onChange={(e) => getFormValues(e, index)} />
                                                                    </div>
                                                                </div>

                                                            </div>

                                                            <div className="row">
                                                                <div className="col-12 col-md-6 col-lg-3">
                                                                    <div className="form-group">
                                                                        <label>Form <span class="text-danger">*</span></label>
                                                                        <input name="form" id="item" type="text" class="form-control" placeholder="Capsule"
                                                                            value={singleItem.form}
                                                                            onChange={(e) => getFormValues(e, index)} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-md-6 col-lg-3">
                                                                    <div className="form-group">
                                                                        <label>Frequency <span class="text-danger">*</span></label>
                                                                        <input name="frequency" id="item" type="text" class="form-control" placeholder="3 caps a day"
                                                                            value={singleItem.frequency}
                                                                            onChange={(e) => getFormValues(e, index)} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-md-6 col-lg-4">
                                                                    <div className="form-group">
                                                                        <label>Duration <span class="text-danger">*</span></label>
                                                                        <input name="duration" id="item" type="text" class="form-control" placeholder="3 days - 1 week"
                                                                            value={singleItem.duration}
                                                                            onChange={(e) => getFormValues(e, index)} />
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
                                                                <br/>
                                                            </div>
                                                            
                                                            <div className="divider2"></div>
                                                            <br/> 
                                                        </div>
                                                        <br/>
                                                    </div>
                                                    
                                                ))}
                                                <br/>
                                            </div>
                                            <br/> 
                                        </div> {/* general row  */}

                                        <div className="form-row">
                                            <label>Notes</label>
                                            <textarea class="form-control" rows="5" onChange={(e) => { setNotesValue(e.target.value) }}></textarea>
                                        </div>
                                        <br />

                                        {/* Signature */}
                                        <div className="col-6">

                                            <form>
                                                <DropFileInput
                                                    onFileChange={(files) => onFileChange(files)}
                                                />
                                            </form>
                                            <div className="sign-name">
                                                <p className="mb-0">( Dr. Pamela Rimorin Concepcion )</p>
                                                <span className="text-muted">Signature</span>
                                            </div>

                                        </div>

                                        {/* Submit Section */}
                                        <div className="row rx-btn">
                                            <div className="submit-section">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary submit-btn rx-btn"
                                                    onClick={() => createEPrescription()}
                                                >
                                                    Create
                                                </button>

                                                <PrescriptionDetails />


                                                <button
                                                    type="reset"
                                                    className="btn btn-secondary submit-btn rx-btn"
                                                >
                                                    Clear
                                                </button>
                                            </div>
                                        </div>
                                    </div>
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