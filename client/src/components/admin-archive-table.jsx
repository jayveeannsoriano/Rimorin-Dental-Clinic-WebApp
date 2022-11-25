import axios from "axios";
import React, { useEffect, useState } from 'react';
import DataTable, { Alignment } from 'react-data-table-component';
import styled, { keyframes } from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

// Modals
import ViewAccount from "./modals/view-account";
import UnarchiveAccount from "./modals/unarchive-account";


const AdminArchiveTable = () => {

    const [search, setSearch] = useState("");
    const [accountType, setAccountType] = useState([]);
    const [filterAccountType, setFilterAccountType] = useState([]);
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [pending, setPending] = useState(true);
    const [rows, setRows] = useState([]);



    const ArchiveUser = async (objectID) => {
        console.log(objectID)

        await axios.post('http://localhost:3001/UnArchiveUser', {
            UserObjectID: objectID
        })
    }

    const getUsers = async () => {
        try {
            const response = await axios.get('http://localhost:3001/getArchiveUserforAdmin');
            console.log(response);
            setUsers(response.data);
            setFilteredUsers(response.data);
        } catch (error) {
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
            selector: (row) => row.accountType,
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
                <Button className="view-button" variant="primary"><i class="bi bi-eye-fill"></i> View</Button>
                {/* <Button className="cancel-button" onClick={() => {ArchiveUser(row._id)}}><i class="bi bi-archive"></i> Unarchive</Button> */}
                <ViewAccount/>
                <UnarchiveAccount/>
            </div>
        },
    ];


    // const archiveModal = () => {
    //     return (
    //         <>
    //             {/* Archive Modal */}
    //             <Modal
    //                 show={modalState == 'archive-1'}
    //                 onHide={handleClose}
    //                 backdrop="static"
    //                 keyboard={false}
    //                 aria-labelledby="contained-modal-title-vcenter"
    //                 centered
    //             >
    //                 <Modal.Header>
    //                     <Modal.Title>Confirm</Modal.Title>
    //                 </Modal.Header>

    //                 <Modal.Body>
    //                     <Form>
    //                         <img src={warning} alt="warning image" className='warning-img' />
    //                         <Form.Label>Are you sure you want to archive INSERT_USER?</Form.Label>
    //                     </Form>
    //                 </Modal.Body>

    //                 <Modal.Footer>
    //                     <Button variant="secondary" onClick={handleClose}>
    //                         Cancel
    //                     </Button>
    //                     <Button variant="danger" onClick={handleArchive2}>
    //                         Yes. Continue
    //                     </Button>
    //                 </Modal.Footer>
    //             </Modal>

    //             <Modal show={modalState == 'archive-2'} onHide={handleClose} backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter">

    //                 <Modal.Header>
    //                     <Modal.Title>Confirm</Modal.Title>
    //                 </Modal.Header>

    //                 <Modal.Body>
    //                     <img src={success} alt="success image" className='success-img' />
    //                     <p className='modal-txt'>You have succesfully archived INSERT_USER.</p>
    //                 </Modal.Body>

    //                 <Modal.Footer>
    //                     <Button variant="secondary" onClick={handleClose}>
    //                         Close
    //                     </Button>
    //                 </Modal.Footer>

    //             </Modal>
    //         </>
    //     );
    // };

    const subHeaderComponent = () => {
        return (
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
        return (
            { searchBar }
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
        <div style={{ padding: '24px', textAlign: "center" }}>
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
    }, [search])

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

export default AdminArchiveTable;