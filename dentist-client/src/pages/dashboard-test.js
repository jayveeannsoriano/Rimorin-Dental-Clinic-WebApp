import React from "react";
import DataTable from 'react-data-table-component';
import style from "../styles/dashboard-test.css";

function DashboardPageTest(){

    const columns = [
        {
            name: 'Patient Name',
            selector: row => row.name,
        },
        {
            name: 'Appt #',
            selector: row => row.appt,
        },
        {
            name: 'Date and Time',
            selector: row => row.datetime,
        },
        {
            name: 'Appt. Status',
            class: "btn-outline-warning btn-rounded",
            selector: row => row.status,
        },
        {
            name: 'Action',
            selector: row => row.action,
        },
    ];
    
    const data = [
        {
            id: 1,
            name: 'Test Name',
            appt: '19',
            datetime: 'May 12,2023 2:30PM',
            status: 'Ongoing',
            action: 'IDK'
        },
    ]

    

    return(
     <div>
           <DataTable
            columns={columns}
            data={data}
        />

    </div>
                    
    )
}

export default DashboardPageTest;