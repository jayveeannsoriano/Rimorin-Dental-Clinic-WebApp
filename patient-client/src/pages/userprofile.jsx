import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/header.jsx";
import Sidebar from "../components/sidebar.jsx";
import Dashboard from "../components/dashboard-header.jsx";

export default function UserProfile() {  
    return(
        <div>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Profile</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active">Profile</li>
                        </ol>
                    </nav>
                </div>
                <section className="section profile">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                    <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                    <h2 id="">Pamela Rimorin Concepcion</h2>
                                    <h3>Doctor ID: <span id="">DR0001</span></h3>
                                    <div className="patient-info">
                                        <ul>
                                            <li>Phone <span>+1 952 001 8563</span></li>
                                            <li>Age <span>38 Years, Male</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end of profile widget */}

                        <div className="col-xl-8">
                            <div className="card">
                                <div className="card-body pt-3">
                                    {/* <!-- Bordered Tabs --> */}
                                    <ul className="nav nav-tabs nav-tabs-bordered">

                                        <li className="nav-item">
                                            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                                        </li>

                                        <li className="nav-item">
                                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                                        </li>

                                        <li className="nav-item">
                                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings">Settings</button>
                                        </li>

                                        <li className="nav-item">
                                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                                        </li>
                                    </ul>

                                    <div className="tab-content pt-2">
                                        <div className="tab-pane fade show active profile-overview" id="profile-overview">
                                        
                                            <h5 className="card-title">Profile Details</h5>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label ">Full Name</div>
                                                <div className="col-lg-9 col-md-8">Pamela Rimorin Concepcion</div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Date of Birth</div>
                                                <div className="col-lg-9 col-md-8">May 04, 1997</div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Gender</div>
                                                <div className="col-lg-9 col-md-8">Female</div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Address</div>
                                                <div className="col-lg-9 col-md-8">A108 Adam Street, New York, NY 535022</div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Phone</div>
                                                <div className="col-lg-9 col-md-8">(+63) 956 793 5590</div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Email</div>
                                                <div className="col-lg-9 col-md-8">pameilaconcepcion@email.com</div>
                                            </div>

                                            <h5 className="card-title">Professional Information</h5>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">PTR Number</div>
                                                <div className="col-lg-9 col-md-8">1234567</div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 label">Licence Number</div>
                                                <div className="col-lg-9 col-md-8">1234567</div>
                                            </div>
                                        </div>

                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Header />
            <Sidebar />
        </div>

    );
}