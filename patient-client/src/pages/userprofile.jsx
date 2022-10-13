import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/dashboard-header.jsx";
import Sidebar from "../components/sidebar.jsx";

export default function UserProfile() {  
    return(
        <div>
            <main id="main" className="main">
                <div class="pagetitle">
                    <h1>My Profile</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
                            <li class="breadcrumb-item active">My Profile</li>
                        </ol>
                    </nav>
                </div>
                <section class="section profile">
                    <div class="row">
                        <div class="col-xl-4">
                            <div class="card">
                                <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                    <img src="assets/img/messages-1.jpg" alt="Profile" class="rounded-circle" />
                                    <h2 id="">Jessica McBell</h2>
                                    <h3>Patient ID: <span id="">PT0001</span></h3>
                                    <div className="divider"></div>
                                    <div class="patient-info">
                                        <ul>
                                            <li>Phone <span>(+63) 956 793 5590</span></li>
                                            <li>Age <span>22 Years, Female</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end of profile widget */}

                        <div class="col-xl-8">
                            <div className="card">
                                <div className="card-body pt-3">
                                    {/* <!-- Bordered Tabs --> */}
                                    <ul class="nav nav-tabs nav-tabs-bordered">

                                        <li class="nav-item">
                                            <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                                        </li>

                                        <li class="nav-item">
                                            <button class="nav-link " data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                                        </li>

                                        <li class="nav-item">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                                        </li>
                                    </ul>

                                    <div class="tab-content pt-2">
                                        <div class="tab-pane fade show active profile-overview" id="profile-overview">
                                        
                                            <h5 class="card-title">Profile Details</h5>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label ">Full Name</div>
                                                <div class="col-lg-9 col-md-8">Jessica McBell</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Date of Birth</div>
                                                <div class="col-lg-9 col-md-8">June 01, 2000</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Gender</div>
                                                <div class="col-lg-9 col-md-8">Female</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Address</div>
                                                <div class="col-lg-9 col-md-8">A108 Adam Street, New York, NY 535022</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Phone</div>
                                                <div class="col-lg-9 col-md-8">(+63) 956 793 5590</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Email</div>
                                                <div class="col-lg-9 col-md-8">jessica.mcbell@email.com</div>
                                            </div>

                                            <h5 class="card-title">Basic Medical Information</h5>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label ">Medications or maintenance</div>
                                                <div class="col-lg-9 col-md-8">Metformin</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label ">Allergies</div>
                                                <div class="col-lg-9 col-md-8">Hives</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label ">Conditions</div>
                                                <div class="col-lg-9 col-md-8">Diabetes</div>
                                            </div>

                                        </div>

                                        {/* Profile Edit */}
                                        <div class="tab-pane fade profile-edit pt-3" id="profile-edit">        
                                                <form>
                                                    <div class="row mb-3">
                                                    <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <img src="assets/img/messages-1.jpg" alt="Profile"/>
                                                        <div class="pt-2">
                                                        <a href="#" class="btn btn-primary btn-sm" title="Upload new profile image"><i class="fa-solid fa-upload"></i></a>
                                                        <a href="#" class="btn btn-danger btn-sm" title="Remove my profile image"><i class="fa-solid fa-trash"></i></a>
                                                        </div>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Full Name</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="fullName" type="text" class="form-control" id="fullName" value="Jessica McBell"/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Date of Birth" class="col-md-4 col-lg-3 col-form-label">Date of Birth</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="country" type="text" class="form-control" id="Birthday" value="June 01, 2000"/>
                                                    </div>
                                                    </div>
                                                    {/*                                                     
                                                    <div class="row mb-3">
                                                    <label for="Gender" class="col-md-4 col-lg-3 col-form-label">Gender</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="address" type="text" class="form-control" id="Address" value="A108 Adam Street, New York, NY 535022"/>
                                                    </div>
                                                    </div> */}

                                                    <div class="row mb-3">
                                                    <label for="Address" class="col-md-4 col-lg-3 col-form-label">Address</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="address" type="text" class="form-control" id="Address" value="A108 Adam Street, New York, NY 535022"/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Phone" class="col-md-4 col-lg-3 col-form-label">Phone</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="phone" type="text" class="form-control" id="Phone" value="(+63) 956 793 5590"/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="email" type="email" class="form-control" id="Email" value="jessica.mcbell@email.com"/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Medications" class="col-md-4 col-lg-3 col-form-label">Medications</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="phone" type="text" class="form-control" id="Phone" value=""/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Allergies" class="col-md-4 col-lg-3 col-form-label">Allergies</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="phone" type="text" class="form-control" id="Phone" value=""/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Conditions" class="col-md-4 col-lg-3 col-form-label">Conditions</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="phone" type="text" class="form-control" id="Phone" value=""/>
                                                    </div>
                                                    </div>



                                                    <div class="text-right">
                                                    <button type="submit" class="btn btn-outline-secondary">Cancel</button>
                                                    <button type="submit" class="btn btn-primary">Save Changes</button>
                                                    </div>
                                                </form>
                                            </div>

                                            {/* Change Password */}
                                            <div class="tab-pane fade pt-3" id="profile-change-password">
                                                <form>
                                                    <div class="row mb-3">
                                                    <label for="currentPassword" class="col-md-4 col-lg-3 col-form-label">Current Password</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="password" type="password" class="form-control" id="currentPassword"/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="newPassword" class="col-md-4 col-lg-3 col-form-label">New Password</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="newpassword" type="password" class="form-control" id="newPassword"/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="renewPassword" class="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="renewpassword" type="password" class="form-control" id="renewPassword"/>
                                                    </div>
                                                    </div>

                                                    <div class="text-right">
                                                    <button type="submit" class="btn btn-primary">Change Password</button>
                                                    </div>
                                                </form>
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