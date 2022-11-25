import React, { useState } from "react";
import "../../styles/dashboard.css";
import "../../styles/accounts.css";
import AdminTable from "../../components/admin-table";
import AdminArchiveTable from "../../components/admin-archive-table";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import success from '../../assets/img/check.png';
import warning from '../../assets/img/warning.png';

const accountspage = () => {
  const [value, setValue] = useState();
  const handleSelect = (e) => {
    console.log(e);
    setValue(e.target.value);
  };

  





  return (
    <>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/admin">Home</a>
          </li>
          <li className="breadcrumb-item active">Accounts</li>
        </ol>
      </nav>

      <section className="section dashboard">
        <div className="row">

          {/* <!-- Accounts Datatable --> */}
          <div class="col-12">
            <div class="card overflow-auto">

              <div class="card-body datatable">
                <div className="nav nav-bar">
                  <Button className="table-button active" data-bs-toggle="tab" data-bs-target="#active-accounts">ACTIVE ACCOUNTS</Button>
                  <Button className="table-button" data-bs-toggle="tab" data-bs-target="#archived-accounts">ARCHIVED ACCOUNTS</Button>
                  <Button className="table-button" href="/admin/accounts/create-account"><i class="fa-solid fa-plus"></i>ADD NEW ACCOUNT</Button>
                </div>

                <div className="tab-content">
                  <div className="tab-pane fade show active" id="active-accounts">
                    <h5 className="card-title">ACTIVE ACCOUNTS</h5>
                    <AdminTable />
                  </div>

                  <div className="tab-pane fade" id="archived-accounts">
                    <h5 className="card-title">ARCHIVED ACCOUNTS</h5>
                    <AdminArchiveTable />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default accountspage;
