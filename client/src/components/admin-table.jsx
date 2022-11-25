import axios from "axios";
import React, { useEffect, useState } from 'react';
import DataTable, { Alignment } from 'react-data-table-component';
import styled, { keyframes } from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import success from '../assets/img/check.png';
import warning from '../assets/img/warning.png';
import Modal from 'react-bootstrap/Modal';

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

    //modal
    // const [modalState, setModalState] = useState(false);
    // const handleClose = () => setModalState(false);
    // const handleModal1 = () => {
    //     setModalState("modal-1")
    // }
    // const handleModal2 = () => {
    //     setModalState("modal-2")
    // }


    const ArchiveUser = async (objectID) => {
        // handleModal1();
        console.log(objectID)
        await axios.post('http://localhost:3001/ArchiveUser', {
            UserObjectID: objectID
        })
    }

    const getUsers = async () => {
        try {
            const response = await axios.get('http://localhost:3001/getUserforAdmin');
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
                {/* <Button className="cancel-button" onClick={() => {ArchiveUser(row._id)}}><i class="bi bi-archive"></i> Archive</Button> */}
                <ViewAccount/>
                <ArchiveAccount/>
            </div>
        },
    ];


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

    // Archive Modal
    // return (
    //         <>
    //         <Modal
    //             show={modalState == 'modal-1'}
    //             onHide={handleClose}
    //             backdrop="static"
    //             keyboard={false}
    //             aria-labelledby="contained-modal-title-vcenter"
    //             centered
    //         >
    //             <Modal.Header>
    //                 <Modal.Title>Confirm</Modal.Title>
    //             </Modal.Header>

    //             <Modal.Body>
    //                 <Form>
    //                     <img src={warning} alt="warning image" className='warning-img' />
    //                     <Form.Label>Are you sure you want to archive INSERT_USER?</Form.Label>
    //                 </Form>
    //             </Modal.Body>

    //             <Modal.Footer>
    //                 <Button variant="secondary" onClick={handleClose}>
    //                     Cancel
    //                 </Button>
    //                 <Button variant="danger" onClick={() => { handleModal2()}} >
    //                     Yes. Continue
    //                 </Button>
    //             </Modal.Footer>
    //         </Modal>

    //         <Modal show={modalState == 'modal-2'} onHide={handleClose} backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter">

    //             <Modal.Header>
    //                 <Modal.Title>Confirm</Modal.Title>
    //             </Modal.Header>

    //             <Modal.Body>
    //                 <img src={success} alt="success image" className='success-img' />
    //                 <p className='modal-txt'>You have succesfully archived INSERT_USER.</p>
    //             </Modal.Body>

    //             <Modal.Footer>
    //                 <Button variant="secondary" onClick={handleClose}>
    //                     Close
    //                 </Button>
    //             </Modal.Footer>

    //         </Modal>
    //         </>

    //     );

}



export default AdminTable;