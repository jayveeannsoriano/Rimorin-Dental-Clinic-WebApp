import React from "react";
// import Footer from "../components/dashboard-footer";
import "../styles/dental-record.css"
import ProfileWidget from "../components/profile-widget";

export default function DentalRecord(){
    return(
        <div>
            <main id="main" className="main">
                <div class="pagetitle">
                    <h1>Dental Records</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
                            <li class="breadcrumb-item"><a href="/dashboard">Patient Records</a></li>
                            <li class="breadcrumb-item active">Dental Records</li>
                        </ol>
                    </nav>
                </div>
                <section class="section profile">
                    <div class="row">
                    <ProfileWidget/>

                        <div class="col-xl-8">
                            <div className="card patient-info">
                                <div className="card-body pt-3">
                                    <h5 className="card-title">Dental Records</h5>
                                    <div className="divider"></div>

                                    {/* Dental Record */}
                                    <div class="row">
                                        <img src="img/dentalchart1.png" alt="" />
                                    </div>

                                    <div className="divider"></div>

                                    {/* Record Table*/}
                                    <div class="row">
                                    <table className="table table-borderless datatable">
                                        <thead>
                                            <tr>
                                            <th scope="col">Date</th>
                                            <th scope="col">Tooth No.</th>
                                            <th scope="col">Treatment</th>
                                            <th scope="col">Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td><a href="#" class="text-secondary">22/04/2022</a></td>
                                                <td><a href="#" class="text-secondary">16</a></td>
                                                <td><a href="#" class="text-secondary">Tooth Decay</a></td>
                                                <td><span class="badge bg-primary"><i class="bi bi-eye"></i> View</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>

    );
}