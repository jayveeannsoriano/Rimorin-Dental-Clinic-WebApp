import React from "react";
import "../../styles/dental-record.css"
import PatientProfileWidget from "../../components/profile-widget";
import UserProfileWidget from "../../components/patient-profilewidget"
import EPrescriptionDataTable from "../../components/patient-dataTables/eprescription-datatable";

const Eprescription = () => {
    var userInfo = JSON.parse(window.localStorage.getItem("current-session"));
    const userRole = userInfo["user_role_id"];

    var HomeRoute = "";
    switch (userRole) {
      case 1:
        HomeRoute = "/patient";
        break;
      case 2:
        HomeRoute = "/secretary";
        break;
    }

    var ProfileWidget = "";
    switch (userRole) {
      case 1:
        ProfileWidget = <UserProfileWidget />;
        break;
      case 2:
        ProfileWidget = <PatientProfileWidget />;
        break;
    }

    return(
        <>
                <div class="pagetitle">
                    <h1>E-Prescription</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href={HomeRoute}>Home</a></li>
                            <li class="breadcrumb-item active">E-Prescription</li>
                        </ol>
                    </nav>
                </div>

                {/* Profile */}
                <section class="section profile">
                <div class="row">
                        {ProfileWidget}

                        <div class="col-xl">
                            <div className="card patient-info">
                                <div className="card-body pt-3">
                                    <h5 className="card-title">Prescriptions</h5>
                                    <div className="divider"></div>

                                    <EPrescriptionDataTable/>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}
export default Eprescription;