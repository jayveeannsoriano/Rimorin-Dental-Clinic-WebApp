import React from "react";
import Header from "../components/dashboard-header";
import Sidebar from "../components/sidebar";
import Footer from "../components/dashboard-footer";
import "../styles/payments.css"
import ProfileWidget from "../components/profile-widget";

export default function Payments(){
    return(
        <div>
            <main id="main" className="main">
                <div class="pagetitle">
                    <h1>E-Prescription</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
                            <li class="breadcrumb-item active">Payment Records</li>
                        </ol>
                    </nav>
                </div>

                {/* Profile */}
                <section class="section profile">
                <div class="row">
                        <ProfileWidget/>
                        {/* end of profile widget */}
                
                        <div class="col-xl">
                            <div className="card patient-info">
                                <div className="card-body pt-3">
                                    <h5 className="card-title">Transactions</h5>
                                    <div className="divider"></div>

                                    {/* Table*/}
                                    <div class="row">
                                    <table className="table table-borderless datatable">
                                        <thead>
                                            <tr>
                                            <th scope="col">Transaction #</th>
                                            <th scope="col">Issued By</th>
                                            <th scope="col">Payment Status</th>
                                            <th scope="col">Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td><a href="#" class="text-primary">101289</a></td>
                                                <td><a href="#" class="text-secondary">Dr. Pamela Concepcion</a></td>
                                                <td><span class="badge bg-success">Paid</span></td>
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
            </main>

            <Header />
            <Sidebar />
            {/* <Footer /> */}
        </div>

    );
}