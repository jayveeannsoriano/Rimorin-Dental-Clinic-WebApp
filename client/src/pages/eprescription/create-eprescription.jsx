import React from "react";
import '../../styles/create-rx.css';

const createEprescription = () => {
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
                {/* /Breadcrumb */}

                {/* Page Content */}
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                                {/* Profile Widget */}
                            </div>

                            {/* Prescription Draft */}
                            <div className="col-md-7 col-lg-8 col-xl-9">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Create Prescription</h4>
                                    </div>
                                    {/* Professional Information */}
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="biller-info">
                                                    <h5> Professional Information </h5>
                                                    <p> PTR Number: </p>
                                                    <p> Licence Number: </p>
                                                </div>
                                            </div>
                                            {/* End Profession Information */}

                                            {/* Prescription Information */}
                                            <div className="biller-info">
                                                <h5> Prescription Information </h5>
                                                <div class="col-12 col-md-6 col-lg-4">
                                                    <label>Date of Prescription</label>
                                                    <input type="date" className="form-control" placeholder="Date" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Prescription Information */}

                                        {/* Add Item */}
                                        <div className="add-more-item text-left">
                                            <a href="javascript:void(0);">
                                                <button type="submit" className="btn btn-primary rx-btn">
                                                    <i className="fas fa-plus" /> Add Item
                                                </button>
                                                {/* <i className="fas fa-plus-circle" /> Add Item */}
                                            </a>
                                        </div>
                                        {/* /Add Item */}

                                        {/* Forms */}
                                        <div class="card-form">
                                            <div class="card-body-form">
                                                {/* <h4 class="card-title">Experience</h4> */}
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

                                                        <div class="col-12 col-md-10 col-lg-7">
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
                                        </div>
                                        {/* Prescription Draft */}

                                        {/* Signature */}
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="signature-wrap">
                                                <div className="signature"><span>Upload a file or drag and drop</span></div>

                                                <div className="sign-name">
                                                    <p className="mb-0">( Dr. Pamela Rimorin Concepcion )</p>
                                                    <span className="text-muted">Signature</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /Signature */}

                                        {/* Submit Section */}
                                        <div className="col-md-12">
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
                                        </div>
                                        {/* /Submit Section */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Page Content */}
            </div>
            {/* /Main Wrapper */}
        </>
    );
}
export default createEprescription;