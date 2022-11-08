import React, { useState } from "react";
import '../../../styles/create-rx.css';
import ProfileWidget from "../../../components/profile-widget";
import "react-bootstrap";
import axios from "axios";

const createEprescription = () => {

    const [file, setFile] = useState();
    function handleChange(event) {
        setFile(event.target.files[0])
    }
    function handleSubmit(event) {
        event.preventDefault()
        const url = 'http://localhost:3001/uploadFile';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
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
                                                <input type="date" className="form-control" placeholder="Date" />
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
                                                                    <input type="text" class="form-control" placeholder="Mefenamic Acid" />
                                                                </div>
                                                            </div>

                                                            <div class="col-12 col-md-6 col-lg-3">
                                                                <div class="form-group">
                                                                    <label>Brand <span class="text-danger">*</span></label>
                                                                    <input type="text" class="form-control" placeholder="Ponstan" />
                                                                </div>
                                                            </div>

                                                            <div class="col-12 col-md-6 col-lg-3">
                                                                <div class="form-group">
                                                                    <label>Dosage <span class="text-danger">*</span></label>
                                                                    <input type="text" class="form-control" placeholder="500mg" />
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
                                                                    <input type="text" class="form-control" placeholder="Capsule" />
                                                                </div>
                                                            </div>

                                                            <div class="col-12 col-md-6 col-lg-3">
                                                                <div class="form-group">
                                                                    <label>Frequency <span class="text-danger">*</span></label>
                                                                    <input type="text" class="form-control" placeholder="3 caps a day" />
                                                                </div>
                                                            </div>

                                                            <div class="col-12 col-md-6 col-lg-3">
                                                                <div class="form-group">
                                                                    <label>Duration <span class="text-danger">*</span></label>
                                                                    <input type="text" class="form-control" placeholder="3 days - 1 week" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* notes */}
                                                    <div class="col-12 col-md-10 col-lg-7 rx-notes">
                                                        <div class="row form-row">
                                                            <div class="form-group mb-0">
                                                                <label>Notes</label>
                                                                <textarea class="form-control" rows="5"></textarea>
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