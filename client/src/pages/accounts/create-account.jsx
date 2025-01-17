import React, { useState } from 'react'
import "../../styles/patient-info-edit.css";
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
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
    const [getlicenseValue, setLicenseValue] = useState('');

    const [modalState, setModalState] = useState(false);
    const handleModalClose = () => {
        setModalState(false);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const InsertUser = async () => {

        await Axios.post("https://rimorin-dental-clinic.herokuapp.com/InsertNewUser", {
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
            license: getlicenseValue,
        })

        setModalState("show-modal");
    }



    const navigate = useNavigate();

    // const [getFile, setGetFile] = useState("");
    // console.log(getFile, "this is the img value");
    // const onFileChange = (files) => {
    //     setGetFile(files);
    // }

    function validatePassword() {
        let newPassword = document.getElementById("newPassword");
        let renewPassword = document.getElementById("renewPassword");
        if (!(newPassword == null || newPassword.value == '' || renewPassword == null || renewPassword.value == '')) {
            if (newPassword.value != renewPassword.value) {
                renewPassword.setCustomValidity("Passwords Does Not Match");
            } else {
                renewPassword.setCustomValidity('');
                document.getElementById('passwordForm').nextStep();
                
            }
        }
      }

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

            <form id="passwordForm" onSubmit={() => InsertUser()}>
            <section className="section profile">
                <div className="row">

                    <div class="col-lg-12">
                        <div class="card overflow-auto">
                            {/* <form id="passwordForm" onSubmit={() => InsertUser()}> */}
                            <div class="card-body create-account pt-3">
                                <h5 className="card-title">Create Account</h5>

                                <div className="divider"></div>

                                <div className="container form-container">
                                    <h5 class="form-section-title">Account Information</h5>
                                    <div className="col-lg-5">
                                        <div className="mb-3">
                                            <Form.Label>Type of User: <span className="text-danger font-weight-bold">*</span></Form.Label>
                                            <Form.Select required
                                                value={getAccountValue}
                                                onChange={(e) => setAccountValue(e.target.value)}>
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
                                                <label>First Name <span className="text-danger font-weight-bold">*</span></label>
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
                                                <label>Middle Name <span className="text-danger font-weight-bold">*</span></label>
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
                                                <label>Last Name <span className="text-danger font-weight-bold">*</span></label>
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
                                                <label>Suffix <span className="text-danger font-weight-bold">*</span></label>
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
                                                <label>Date of Birth <span className="text-danger font-weight-bold">*</span></label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    placeholder="Enter birthday"
                                                    onChange={(e) => { setBDAYValue(e.target.value) }}
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-4">
                                                <Form.Label>Gender: <span className="text-danger font-weight-bold">*</span></Form.Label>
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
                                                <label>Email Address <span className="text-danger font-weight-bold">*</span></label>
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
                                                <label>Mobile Number <span className="text-danger font-weight-bold">*</span></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="9XXXXXXXXX"
                                                    maxLength="10"
                                                    onChange={(e) => { setPhoneValue(e.target.value) }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {getAccountValue == "dentist" ? (
                                            <>
                                                <div className="row">
                                                <h5 class="form-section-title">Professional Information</h5>
                                                    <div className="col-lg-4">
                                                        <label for='ptr'>PTR Number <span className="text-danger font-weight-bold">*</span></label>
                                                        <input 
                                                        name="ptr" 
                                                        type="text" 
                                                        className="form-control" 
                                                        id="ptr"
                                                        maxLength={7} 
                                                        placeholder="0123456" 
                                                        onChange={(e) => {setPtrValue(e.target.value)}} required />
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <label for='license'>Licence Number <span className="text-danger font-weight-bold">*</span></label>
                                                        <input 
                                                        name="license" 
                                                        type="text" 
                                                        className="form-control" 
                                                        id="license"
                                                        maxLength={6}
                                                        placeholder="012345"
                                                        onChange={(e) => {setLicenseValue(e.target.value)}} required />
                                                    </div>
                                                </div>
                                            </>
                                            ) : null }
                                            

                                            <div className="row">
                                                <h5 class="form-section-title">Account Password</h5>
                                                <div className="col-lg-4">
                                                    <div className="mb-3">
                                                        <label>Password <span className="text-danger font-weight-bold">*</span></label>
                                                        <input
                                                            id="newPassword"
                                                            type="password"
                                                            className="form-control"
                                                            onChange={(e) => { setPassValue(e.target.value) }}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <label>Re-enter Password<span className="text-danger font-weight-bold">*</span></label>
                                                    <input 
                                                        id="renewPassword"
                                                        name="reEnterpassword"
                                                        type="password"
                                                        class="form-control"
                                                        required
                                                    // onChange={(e) => { setReEnterPassword(e.target.value) }} required 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <Button
                                            type='submit'
                                            className="edit-save text-right"
                                            onSubmit={() => InsertUser()}
                                            onClick={() => {validatePassword(); }}>
                                            Create Account
                                        </Button>
                                        <Button
                                            variant="outline-danger"
                                            className="text-right"
                                            onClick={() => navigate(-1)}>
                                            Cancel
                                        </Button>

                                    </div> {/*end of card-body*/}
                                    {/* </form> */}
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
            </form>
        </>
    )
}
export default CreateAccount;
