import React from 'react'
import axios from "axios";
import '../../styles/dashboard.css';
import Button from 'react-bootstrap/Button';
import AdminTable from '../../components/admin-table';
import moment from 'moment'
import { useState, useEffect } from 'react';

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
