import React, { useState } from 'react'
// import '../../styles/dashboard.css';
// import '../../styles/accounts.css';
// import '../../styles/login-signup.css';
import "../../styles/patient-info-edit.css";
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import AccountCreated from '../../components/modals/account-successful';
import successful from '../../assets/img/check.png';
import Modal from "react-bootstrap/Modal";
import { Button } from 'react-bootstrap';
import Axios from 'axios';

const CreateAccount = () => {

    const [getAccountValue, setAccountValue] = useState([]);
    const [getFNameValue, setFNameValue] = useState("");
    const [getMNameValue, setMNameValue] = useState("");
    const [getLNameValue, setLNameValue] = useState("");
    const [getSuffixValue, setSuffixValue] = useState("");
    const [getEmailValue, setEmailValue] = useState("");
    const [getPassValue, setPassValue] = useState("");
    const [getGenderValue, setGenderValue] = useState("");
    const [getPhoneValue, setPhoneValue] = useState("");
    const [getBDAYValue, setBDAYValue] = useState("");
    //professional info
    const [getptrValue, setPtrValue] = useState('');
    const [getlicenceValue, setLicenceValue] = useState('');

    const [modalState, setModalState] = useState(false);
    const handleModalClose = () => {
        setModalState(false);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const InsertUser = async () => {

        await Axios.post("http://localhost:3001/InsertNewUser", {
            accountType: getAccountValue,
            fname: getFNameValue,
            mname: getMNameValue,
            lname: getLNameValue,
            suffix: getSuffixValue,
            email: getEmailValue,
            password: getPassValue,
            gender: getGenderValue,
            mobile: getPhoneValue,
            bday: getBDAYValue,
            ptr: getptrValue,
            licence: getlicenceValue,
        })

        setModalState("show-modal");
    }



    const navigate = useNavigate();

    // const [getFile, setGetFile] = useState("");
    // console.log(getFile, "this is the img value");
    // const onFileChange = (files) => {
    //     setGetFile(files);
    // }

    return (
        <>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/admin">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="/admin/accounts">Accounts</a>
                    </li>
                    <li className="breadcrumb-item active">Create Account</li>
                </ol>
            </nav>

            <section className="section profile">
                <div className="row">

                    <div class="col-lg-12">
                        <div class="card overflow-auto">
                            <div class="card-body pt-3">
                                <h5 className="card-title">Create Account</h5>

                                <div className="divider"></div>

                                <div className="container form-container">
                                    <h5 class="form-section-title">Account Information</h5>
                                    <div className="col-lg-5">
                                        <div className="mb-3">
                                            <Form.Label>Type of User:</Form.Label>
                                            <Form.Select onChange={(e) => setAccountValue(e.target.value)}>
                                                <option value="" selected disabled>--Select Type--</option>
                                                <option value="patient">Patient</option>
                                                <option value="secretary">Secretary</option>
                                                <option value="dentist">Dentist</option>
                                                <option value="admin">Admin</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="mb-3">
                                                <label>First Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="First name"
                                                    onChange={(e) => { setFNameValue(e.target.value) }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="mb-3">
                                                <label>Middle Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Middle Name"
                                                    onChange={(e) => { setMNameValue(e.target.value) }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="mb-3">
                                                <label>Last name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Last name"
                                                    onChange={(e) => { setLNameValue(e.target.value) }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="mb-3 suffix">
                                                <label>Suffix</label>
                                                <input
                                                    type="text"
                                                    className="form-control suffix"
                                                    placeholder="(e.g. Jr. , Sr., II)"
                                                    onChange={(e) => { setSuffixValue(e.target.value) }}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <label>Date of Birth</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    placeholder="Enter birthday"
                                                    onChange={(e) => { setBDAYValue(e.target.value) }}
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-4">
                                                <Form.Label>Gender:</Form.Label>
                                                <div className="mb-3">
                                                    <Form.Check
                                                        inline
                                                        label="Male"
                                                        name="group1"
                                                        type="radio"
                                                        value='Male'
                                                        onChange={(e) => setGenderValue(e.target.value)}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Female"
                                                        name="group1"
                                                        type="radio"
                                                        value='Female'
                                                        onChange={(e) => setGenderValue(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label>Email Address</label>
                                                <input
                                                    type='email'
                                                    className="form-control"
                                                    placeholder="example@email.com"
                                                    onChange={(e) => { setEmailValue(e.target.value) }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mb-3">
                                                <label>Mobile Number</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="09XXXXXXXXX"
                                                    maxLength="10"
                                                    onChange={(e) => { setPhoneValue(e.target.value) }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {}
                                    <div className="row">
                                    <h5 class="form-section-title">Professional Information</h5>
                                        <div className="col">
                                            <label for='ptr'>PTR Number</label>
                                            <input 
                                            name="ptr" 
                                            type="text" 
                                            className="form-control" 
                                            id="ptr"
                                            maxLength={7} 
                                            placeholder="0123456" 
                                            onChange={(e) => {setPtrValue(e.target.value)}} required />
                                        </div>

                                        <div className="col">
                                            <label for='licence'>Licence Number</label>
                                            <input 
                                            name="licence" 
                                            type="text" 
                                            className="form-control" 
                                            id="licence"
                                            maxLength={6}
                                            placeholder="012345"
                                            onChange={(e) => {setLicenceValue(e.target.value)}} required />
                                        </div>

                                        <div className="row">
                                            <h5 class="form-section-title">Account Password</h5>
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label>Password</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Enter password"
                                                        onChange={(e) => { setPassValue(e.target.value) }}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <label>Re-enter Password</label>
                                                <input 
                                                    name="reEnterpassword"
                                                    type="password"
                                                    class="form-control"
                                                    id="reEnterPassword"
                                                // onChange={(e) => { setReEnterPassword(e.target.value) }} required 
                                                />
                                            </div>
                                        </div>
                                    </div>{/* end of container */}
                                    <Button
                                        className="btn btn-outline-danger text-right"
                                        onClick={() => navigate(-1)}>
                                        Cancel
                                    </Button>
                                    <Button
                                    type='submit'
                                    className="edit-save text-right"
                                    onClick={() => InsertUser()}>
                                    Create Account
                                </Button>
                                    {/* <AccountCreated /> */}
                                </div>{/* end of card-body */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Modal
                show={modalState == "show-modal"}
                onHide={handleModalClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={successful} alt="success image" className='success-img' />
                    <p className='modal-txt'>You have succesfully created an account!</p>
                </Modal.Body>


                <Modal.Footer>
                    <Button
                        variant="primary"
                        href={
                            "/admin/accounts"
                        }
                        onClick={handleModalClose}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
export default CreateAccount;
