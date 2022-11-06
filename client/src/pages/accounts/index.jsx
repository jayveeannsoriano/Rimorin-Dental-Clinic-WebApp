import React from 'react'
import axios from "axios";
import '../../styles/dashboard.css';
import '../../styles/accounts.css';
import Button from 'react-bootstrap/Button';
import AdminTable from '../../components/admin-table';
import moment from 'moment'
import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const accountspage = () => {
  return (
    <>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active">Dashboard</li>
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
                          <DropdownButton id="dropdown-basic-button" title="Select Account Type">
                            <Dropdown.Item href="#">Patient</Dropdown.Item>
                            <Dropdown.Item href="#">Secretary</Dropdown.Item>
                            <Dropdown.Item href="#">Dentist</Dropdown.Item>
                            <Dropdown.Item href="#">Admin</Dropdown.Item>
                          </DropdownButton>
                        </div>

                        <div className="col-6 ad-right">
                        <button type="button" class="btn btn-primary"><i class="bi bi-plus-lg"></i>Add Account</button>&nbsp;
                        <button type="button" class="btn btn-primary"> <i class="bi bi-eye"></i>View Archived Accounts</button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <AdminTable/>
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
