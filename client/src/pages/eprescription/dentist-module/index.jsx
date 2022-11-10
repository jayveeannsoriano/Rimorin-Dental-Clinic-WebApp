import React from "react";
// import Footer from "../components/dashboard-footer";
import "../../styles/dental-record.css"
import ProfileWidget from "../../components/profile-widget";

const Eprescription = () => {
    return(
        <>
                <div class="pagetitle">
                    <h1>E-Prescription</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
                            <li class="breadcrumb-item"><a href="/dashboard">E-Prescription</a></li>
                            <li class="breadcrumb-item active">View Prescriptions</li>
                        </ol>
                    </nav>
                </div>

                {/* Profile */}
                <button type="button" class="btn btn-primary rx-pr btn-link"><i class="bi bi-plus-lg"> </i> <a href='../pages/eprescription/dentist-module/create-eprescription'> Create E-Prescription </a></button>
                <section class="section profile">
                <div class="row">
                        <ProfileWidget/>
                        {/* end of profile widget */}

                        <div class="col-xl">
                            <div className="card patient-info">
                                <div className="card-body pt-3">
                                    <h5 className="card-title">Prescriptions</h5>
                                    <div className="divider"></div>

                                    {/* Table*/}
                                    <div class="row">
                                    <table className="table table-borderless datatable">
                                        <thead>
                                            <tr>
                                            <th scope="col">Prescription #</th>
                                            <th scope="col">Date Issued</th>
                                            <th scope="col">Issued By</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td><a href="#" class="text-primary">101289</a></td>
                                                <td><a href="#" class="text-secondary">22/04/2022</a></td>
                                                <td><a href="#" class="text-secondary">Dr. Pamela Concepcion</a></td>
                                                <td><a href="#" class="text-secondary">Extraction</a></td>
                                                <td><span class="badge bg-primary"><i class="bi bi-printer"></i> Print</span> <span class="badge bg-primary"><i class="bi bi-eye"></i> View</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}
export default Eprescription;