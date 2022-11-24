import React, { useState } from 'react'
import '../../styles/dashboard.css';
import '../../styles/accounts.css';
import '../../styles/login-signup.css';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import AccountCreated from '../../components/modals/account-successful';
import DropFileInput from "../../components/signature";
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

    const [modalState, setModalState] = useState(false);
    const handleModalClose = () => {
      setModalState(false);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const InsertUser = async () => {

        await Axios.post("http://localhost:3001/InsertNewUser", {
            accountType:getAccountValue,
            fname:getFNameValue,
            mname:getMNameValue,
            lname:getLNameValue,
            suffix: getSuffixValue,
            email: getEmailValue,
            password: getPassValue,
            gender: getGenderValue,
            mobile: getPhoneValue,
            bday: getBDAYValue,
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

            <section className="section dashboard">
                <div className="row">
                    <div class="col-12">
                        <div class="card overflow-auto">
                            <div class="card-body datatable">
                                <div className="container">
                                    <h5 className="card-title">Create Account</h5>
                                    <div className="divider"></div>
                                    <br />
                                    <div className="row">
                                        {/* profile image */}
                                        <div className="col">
                                            {/* <form>
                                            <span>Profile Picture</span>
                                                <DropFileInput
                                                    onFileChange={(files) => onFileChange(files)}
                                                />
                                            </form> */}
                                            {/* <div className="signature-wrap">
                                                <span>Profile Picture</span>

                                                <input
                                                    type="file"
                                                    className="signature sgn-file"
                                                // onChange={handleChange}
                                                />
                                                <span className="text-muted">Upload profile picture</span>

                                            </div> */}
                                        </div>
                                        {/* sign up form */}
                                        <div className="col-md-8">
                                            <form>
                                                <div className="mb-3">
                                                    <Form.Label>Type of user:</Form.Label>
                                                    <Form.Select onChange={(e) => setAccountValue(e.target.value)}>
                                                        <option value="" selected disabled>--Select Type--</option>
                                                        <option value="patient">Patient</option>
                                                        <option value="secretary">Secretary</option>
                                                        <option value="dentist">Dentist</option>
                                                        <option value="admin">Admin</option>
                                                    </Form.Select>
                                                </div>
                                                <div className="row">
                                                    <div className="col-8">
                                                        <div className="mb-3">
                                                            <label>First name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="First name"
                                                                onChange={(e) => {setFNameValue(e.target.value)}}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="mb-3">
                                                            <label>Middle Name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Middle Initial"
                                                                onChange={(e) => {setMNameValue(e.target.value)}}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-8">
                                                        <div className="mb-3">
                                                            <label>Last name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Last name"
                                                                onChange={(e) => {setLNameValue(e.target.value)}}
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-4">
                                                        <div className="mb-3 suffix">
                                                            <label>Suffix</label>
                                                            <input
                                                                type="text"
                                                                className="form-control suffix"
                                                                placeholder="(e.g. Jr. , Sr., II)"
                                                                onChange={(e) => {setSuffixValue(e.target.value)}}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mb-3">
                                                    <label>Email address</label>
                                                    <input
                                                        type='email'
                                                        className="form-control"
                                                        placeholder="Enter email"
                                                        onChange={(e) => {setEmailValue(e.target.value)}}
                                                        required
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label>Password</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Enter password"
                                                        onChange={(e) => {setPassValue(e.target.value)}}
                                                        required
                                                    />
                                                </div>

                                                <div className="row mb-3">
                                                    <label>Gender</label>
                                                    <div className="col-4">
                                                        <div className="form-check">
                                                            <label>
                                                                <input
                                                                    type="radio"
                                                                    // onChange={handleChange('gender')}
                                                                    // defaultValue={values.gender}
                                                                    className="form-check-input"
                                                                    value="Female"
                                                                    name="gender"
                                                                    onChange={(e) => {setGenderValue(e.target.value)}}
                                                                    required
                                                                />
                                                                <span>Female</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="form-check">
                                                            <input
                                                                type="radio"
                                                                className="form-check-input"
                                                                name="gender"
                                                                value="Male"
                                                                onChange={(e) => {setGenderValue(e.target.value)}}
                                                                required
                                                            />
                                                            Male
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-7">
                                                        <div className="mb-3">
                                                            <label>Mobile Number</label>
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                placeholder="09XXXXXXXXX"
                                                                maxLength="11"
                                                                onChange={(e) => {setPhoneValue(e.target.value)}}
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-5">
                                                        <div className="mb-3">
                                                            <label>Date of Birth</label>
                                                            <input
                                                                type="date"
                                                                className="form-control"
                                                                placeholder="Enter birthday"
                                                                onChange={(e) => {setBDAYValue(e.target.value)}}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                            </form>
                                            <div className="d-grid ad-btn">
                                                <div className='col-md-auto '>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-outline-primary ad-btn-space"
                                                        onClick={() => navigate(-1)}
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary submit-btn rx-btn"
                                                        onClick={() => InsertUser()}
                                                    >
                                                        Create Account
                                                    </button>
                                                    
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
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
