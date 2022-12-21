import React, { useState, useMemo } from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import "../../../styles/create-rx.css";
import ProfileWidget from "../../../components/profile-widget";
import "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from "axios";
import PrescriptionDetails from "../../../components/modals/preview-prescription";
import DropFileInput from "../../../components/signature";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import success from '../../../assets/img/check.png';

const createEprescription = () => {
    var userInfo = JSON.parse(window.localStorage.getItem("current-session"));
    const dentistFullName = userInfo["fname"] + " " + userInfo["lname"];
    const location = useLocation();

    const paramsID = new URLSearchParams(location.search);
    const getPatientIDNumber = paramsID.get("patientIDNum");
    const StringfyIDnumber = useMemo(() =>
        JSON.stringify(getPatientIDNumber).replace(/"/g, "")
    );
    console.log(StringfyIDnumber, "create e-prescription");

    //calendar input
    const [startDate, setStartDate] = useState(new Date());
    //input variables
    const [notesValue, setNotesValue] = useState("");

    const [modalState, setModalState] = useState(false);
    const navigate = useNavigate();
    const handleModalClose = () => {
        setModalState(false)
        navigate(-1)
    };

    const handleModal = () => {
        setModalState('show-modal')
      }

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
            "https://rimorin-dental-clinic.herokuapp.com/createEprescription",
            {
                patientIDNum: StringfyIDnumber,
                dentistName: dentistFullName,
                dateValue: startDate.getFullYear()+"-"+('0'+(startDate.getMonth()+1)).slice(-2)+"-"+('0' + startDate.getDate()).slice(-2),
                presDetails: prescriptionItem,
                notesValue: notesValue,
                imgFile: getFile[0],
            },
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
    };

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     const url = 'https://rimorin-dental-clinic.herokuapp.com/uploadFile';
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
                                                <a href="/dentist/eprescription">Patients</a>
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
                                        <p> PTR Number: 12345678</p>
                                        <p> Licence Number: 12345678</p>
                                    </div>

                                    <form>
                                        <div className="biller-info">
                                            <br />
                                            <h5 className="rx-pr"> Prescription Information </h5>
                                            <div class="col-12 col-md-6 col-lg-4">
                                                <label>Date of Prescription <span class="text-danger">*</span></label>
                                                <DatePicker
                                                    selected={startDate}
                                                    onChange={(date) => {
                                                        setStartDate(date);
                                                        console.log("This is the calendar data:", date.toString().slice(3,15));
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
                                        </div>

                                        {/* Add Item */}
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
                                                    {/* row for prescription fields */}
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
                                                <label>Instructions/Notes</label>
                                                <textarea
                                                    class="form-control"
                                                    rows="5"
                                                    onChange={(e) => {
                                                        setNotesValue(e.target.value);
                                                    }}
                                                    required
                                                ></textarea>
                                            </div>
                                            <br />
                                            {/* Signature */}
                                            <div className="col-6">
                                                {/*<DropFileInput
                                                    onFileChange={(files) => onFileChange(files)}
                                                />*/}

                                            <Form.Group controlId="formFile" className="mb-3">
                                                    <Form.Label>Upload Signature</Form.Label>
                                                    <Form.Control type="file" />
                                            </Form.Group>

                                                <div className="sign-name">
                                                    <p className="mb-0">
                                                        ( Dr. Pamela Rimorin Concepcion )
                                                    </p>
                                                    <span className="text-muted">Signature</span>
                                                </div>
                                            </div>
                                            {/* Submit Section */}
                                            <div className="row rx-btn">
                                                <div className="submit-section">
                                                    <Button
                                                        type="submit"
                                                        className="btn btn-primary submit-btn rx-btn"
                                                        onClick={() => {
                                                            createEPrescription();
                                                            handleModal();           
                                                        }}
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
                        {/* end of prescription */}
                    </div>
                    {/* end of row */}
                </section>
            </div>
            {/* /Main Wrapper */}

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
                    <Button
                        variant="primary"
                        onClick={handleModalClose}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default createEprescription;
