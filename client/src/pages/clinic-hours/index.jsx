import React from "react";
import Form from "react-bootstrap/Form";

const clinichourspage = () => {
  return (
    <>
      <div class="pagetitle">
        <h1>Clinic Hours</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/dashboard">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="/admin/clinic-hours">Clinic Hours</a>
            </li>
          </ol>
        </nav>
      </div>

      <div class="col-xl">
        <div className="card patient-info">
          <div className="card-body pt-3">
            <h5 className="card-title">Clinic Hours</h5>
            <div className="divider"></div>
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Check this switch"
              />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default clinichourspage;
