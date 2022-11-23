import axios from "axios";
import React, { useEffect, useState } from 'react';
import DataTable,{ Alignment } from 'react-data-table-component';
import styled, { keyframes } from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

// Modals
import ViewAccount from "./modals/view-account";
import ArchiveAccount from "./modals/archive-account";

const AdminTable = () => {

    const [search, setSearch] = useState("");
    const [accountType, setAccountType] = useState([]);
    const [filterAccountType, setFilterAccountType] = useState([]);
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [pending, setPending] = useState(true);
    const [rows, setRows] = useState([]);

    const getUsers = async() => {
        try{
            const response = await axios.get('http://localhost:3001/getUserforAdmin');
            console.log(response);
            setUsers(response.data);
            setFilteredUsers(response.data);
        }catch (error){
            console.log(error)
        }
    }

    const columns = [
        {
            name: "Account Name",
            selector: (row) => row.fname + " " + row.lname,
            sortable: true,
        },
        {
            name: "Account Type",
            selector: (row) => row.user_role_id,
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: "Action",
            selector: row => <div className="action-buttons" >
                <Button className="cancel-button"><i class="bi bi-archive"></i> Archive</Button>
            </div>
        },
    ];

    const subHeaderComponent = () => {
        return(
            <>
            </>
        )
    }

    const subHeaderComponentMemo = () => {
      const searchBar = () => (
        <input
          type="text"
          placeholder="Search"
          className="w-50 form-control datatable-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      );
      return(
        {searchBar}
      )
    };

    //const searchBar = () => (
    //  return (
    //    <>
    //      <input
    //        type="text"
    //        placeholder="Search"
    //        className="w-50 form-control datatable-search"
    //        value={search}
    //        onChange={(e) => setSearch(e.target.value)}
    //      />
    //    </>
    //  );
    //);

    //const filterSelect = () => {
    //  return (
    //    <>
    //      <select
    //        option={userRole}
    //        placeholder="Account Type"
    //        onChange={(values) => {
    //          setFilterAccountType(new Set(values.map(e)));
    //        }}
    //      />
    //    </>
    //  );
    //};

    
    // Loading effect
    const rotate360 = keyframes` 
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    `;

    const Spinner = styled.div`
        margin: 16px;
        animation: ${rotate360} 1s linear infinite;
        transform: translateZ(0);
        border-top: 2px solid #7879f1;
        border-right: 2px solid #7879f1;
        border-bottom: 2px solid #7879f1;
        border-left: 3px solid #7879f1;
        background: transparent;
        width: 80px;
        height: 80px;
        border-radius: 50%;
    `;

    const CustomLoader = () => (
        <div style={{ padding: '24px', textAlign: "center"}}>
            <Spinner />
            <div>Loading...</div>
        </div>
    );

   useEffect(() => {
		const timeout = setTimeout(() => {
			setRows(users);
			setPending(false);
		}, 1000);
		return () => clearTimeout(timeout);
	}, []);

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        const result = users.filter((users) => {
            return users.fname.toLowerCase().match(search.toLowerCase());
        });

        setFilteredUsers(result)
    },[search])

    //useEffect(() => {
    //    const filterResult = accountType.filter((accountType) => {
    //        return accountType.user_role_id
    //    });

    //    setFilterAccountType(filterResult)
    //},[filter])

    return <DataTable
    // className="account-datatable"
    pagination
    subHeaderAlign={Alignment.LEFT}
    columns={columns}
    data={filteredUsers}
    progressPending={pending}
    progressComponent={<CustomLoader />}
    fixedHeader
    highlightOnHover
    subHeader
    subHeaderComponent={subHeaderComponentMemo}
    />
}

export default AdminTable;