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
                                    <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle"/>
                                    <h2>Kevin Anderson</h2>
                                    <h3>Dentist</h3>
                                    <div class="social-links mt-2">
                                        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                                        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                                        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                                        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
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