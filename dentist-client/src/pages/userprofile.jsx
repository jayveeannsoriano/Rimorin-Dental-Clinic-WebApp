import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/dashboard-header.jsx";
import Sidebar from "../components/sidebar.jsx";
// import Footer from "../components/footer.jsx";
// import '../styles/userprofile.css';

export default function UserProfile() {  
    return(
        <div>
            <main id="main" className="main">
                <div class="pagetitle">
                    <h1>Profile</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active">Profile</li>
                        </ol>
                    </nav>
                </div>
                <section class="section profile">
                    <div class="row">
                        <div class="col-xl-4">
                            <div class="card">
                                <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                    <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle" />
                                    <h2 id="">Pamela Rimorin Concepcion</h2>
                                    <h3>Doctor ID: <span id="">DR0001</span></h3>
                                    <div class="patient-info">
                                        <ul>
                                            <li>Phone <span>+1 952 001 8563</span></li>
                                            <li>Age <span>38 Years, Male</span></li>
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
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                                        </li>

                                        <li class="nav-item">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings">Settings</button>
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
                                                <div class="col-lg-9 col-md-8">Pamela Rimorin Concepcion</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Date of Birth</div>
                                                <div class="col-lg-9 col-md-8">May 04, 1997</div>
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
                                                <div class="col-lg-9 col-md-8">pameilaconcepcion@email.com</div>
                                            </div>

                                            <h5 class="card-title">Professional Information</h5>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">PTR Number</div>
                                                <div class="col-lg-9 col-md-8">1234567</div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-3 col-md-4 label">Licence Number</div>
                                                <div class="col-lg-9 col-md-8">1234567</div>
                                            </div>
                                        </div>

                                        {/* Profile Edit */}
                                        {/* <div class="tab-pane fade profile-edit pt-3" id="profile-edit">        
                                                <form>
                                                    <div class="row mb-3">
                                                    <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <img src="assets/img/profile-img.jpg" alt="Profile"/>
                                                        <div class="pt-2">
                                                        <a href="#" class="btn btn-primary btn-sm" title="Upload new profile image"><i class="bi bi-upload"></i></a>
                                                        <a href="#" class="btn btn-danger btn-sm" title="Remove my profile image"><i class="bi bi-trash"></i></a>
                                                        </div>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Full Name</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="fullName" type="text" class="form-control" id="fullName" value="Kevin Anderson"/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="about" class="col-md-4 col-lg-3 col-form-label">About</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <textarea name="about" class="form-control" id="about" style="height: 100px">Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</textarea>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="company" class="col-md-4 col-lg-3 col-form-label">Company</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="company" type="text" class="form-control" id="company" value="Lueilwitz, Wisoky and Leuschke"/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Job" class="col-md-4 col-lg-3 col-form-label">Job</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="job" type="text" class="form-control" id="Job" value="Web Designer"/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Country" class="col-md-4 col-lg-3 col-form-label">Country</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="country" type="text" class="form-control" id="Country" value="USA"/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Address" class="col-md-4 col-lg-3 col-form-label">Address</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="address" type="text" class="form-control" id="Address" value="A108 Adam Street, New York, NY 535022"/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Phone" class="col-md-4 col-lg-3 col-form-label">Phone</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="phone" type="text" class="form-control" id="Phone" value="(436) 486-3538 x29071"/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="email" type="email" class="form-control" id="Email" value="k.anderson@example.com"/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Twitter" class="col-md-4 col-lg-3 col-form-label">Twitter Profile</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="twitter" type="text" class="form-control" id="Twitter" value="https://twitter.com/#"/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Facebook" class="col-md-4 col-lg-3 col-form-label">Facebook Profile</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="facebook" type="text" class="form-control" id="Facebook" value="https://facebook.com/#"/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Instagram" class="col-md-4 col-lg-3 col-form-label">Instagram Profile</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="instagram" type="text" class="form-control" id="Instagram" value="https://instagram.com/#"/>
                                                    </div>
                                                    </div>

                                                    <div class="row mb-3">
                                                    <label for="Linkedin" class="col-md-4 col-lg-3 col-form-label">Linkedin Profile</label>
                                                    <div class="col-md-8 col-lg-9">
                                                        <input name="linkedin" type="text" class="form-control" id="Linkedin" value="https://linkedin.com/#"/>
                                                    </div>
                                                    </div>

                                                    <div class="text-center">
                                                    <button type="submit" class="btn btn-primary">Save Changes</button>
                                                    </div>
                                                </form>
                                            </div> */}
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