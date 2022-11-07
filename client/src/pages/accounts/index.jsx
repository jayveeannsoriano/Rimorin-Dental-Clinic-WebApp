import React , { useState } from 'react'
import '../../styles/dashboard.css';
import '../../styles/accounts.css';
import AdminTable from '../../components/admin-table';
import Form from 'react-bootstrap/Form';


const accountspage = () => {

  const [value, setValue] = useState();
  const handleSelect = (e) => {
        console.log(e);
        setValue(e.target.value);
  }
  

  return (
    <>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active">Accounts</li>
        </ol>
      </nav>

      <section className="section dashboard">
        <div className="row">

          {/* <!-- Today's Appointment --> */}
          <div class="col-12">
            <div class="card overflow-auto">

              <div class="card-body datatable">
                <div className="container">
                  <div className="row">
                    <div className="col-6 ad-left">
                      <Form.Label>Type of user:</Form.Label>
                      <Form.Select value={value} onChange={handleSelect}>
                        <option value="" selected disabled>--Select Type--</option>
                        <option value="patient">Patient</option>
                        <option value="secretary">Secretary</option>
                        <option value="dentist">Dentist</option>
                        <option value="admin">Admin</option>
                      </Form.Select>
                    </div>

                    <div className="col-6 ad-right btn-link">
                      <button type="button" class="btn btn-primary spc"><i class="bi bi-plus-lg"></i> <a href='/admin/accounts/create-account'>Add Account</a></button>
                      <button type="button" class="btn btn-primary spc"> <i class="bi bi-eye"></i> View Archived Accounts</button>
                    </div>
                  </div>
                </div>
                <div>
                  <AdminTable />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
export default accountspage;
