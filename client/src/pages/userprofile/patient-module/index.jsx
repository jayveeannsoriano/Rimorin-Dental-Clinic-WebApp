import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import UserProfileWidget from "../../../components/patient-profilewidget";
import "../../../styles/patient-info-edit.css";
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from 'react-router-dom';
import error from '../../../assets/img/error.png';
import success from '../../../assets/img/check.png';

const UserProfile = () => {

    const [modalState, setModalState] = useState(false);
    const handleModalClose = () => setModalState(false);
    const navigate = useNavigate();
  
    var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
    const UserObjectID = userInfo['_id'];
    const patientIDnumber = userInfo['patientIDnumber'];
    console.log(patientIDnumber);
    
    const [userData, setUserData] = useState([]);
    console.log("These are all the data of the user",userData);
    const [firstName, setFirstValue] = useState('');
    const [lastName, setLastValue] = useState('');
    const [middleName, setMiddleValue] = useState('');
    const [suffix, setSuffix] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [ageValue, setAgeValue] = useState('');
    const [genderValue, setGenderValue] = useState('');
    const [professionValue, setProfessionValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [cellNumber, setCellValue] = useState('');
    const [tellNumber, setTellNumber] = useState('');
    const [bloodType, setBloodValue] = useState('');
    const [houseNum, setHouseValue] = useState('');
    const [cityValue, setCityValue] = useState('');
    const [countryValue, setCountryValue] = useState('');
    const [brgyValue, setBrgyValue] = useState('');
    const [provinceValue, setProvinceValue] = useState('');
    const [zipValue, setZipValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const bcrypt = require("bcryptjs");

    // change password
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [reEnterPassword, setReEnterPassword] = useState("");
    console.log("USER PASSWORD", passwordValue);
    console.log("USER CURRENT PASSWORD",currentPassword)

    const changePassword = async () => {

        if (await bcrypt.compare(currentPassword, passwordValue)){
            console.log("password works")
            if (newPassword == reEnterPassword){
                handleShow();
                await Axios.put("http://localhost:3001/changePassword",{
                    userEmail:emailValue,
                    newPass:newPassword,
                })
            }else{
                handleNotMatch();
            // alert("Password not match")
            }
        }else{
            handleIncorrect();
            // alert("Current Password incorrect")
        }

    }

    console.log(firstName, 'updated');
    const defaultUserInfo = async () => {
        try {

            const response = await Axios.get("http://localhost:3001/getCurrentUserInfo", {
                params: {
                    ObjectID: UserObjectID
                }
            });
            setUserData(response.data);
            setFirstValue(response.data[0].fname)
            setLastValue(response.data[0].lname)
            setMiddleValue(response.data[0].mname)
            setSuffix(response.data[0].suffix)
            setBirthDate(response.data[0].bday)
            setAgeValue(response.data[0].age)
            setGenderValue(response.data[0].gender)
            setProfessionValue(response.data[0].profession)
            setEmailValue(response.data[0].email)
            setCellValue(response.data[0].mobile)
            setTellNumber(response.data[0].tellphone)
            setBloodValue(response.data[0].blood)
            setHouseValue(response.data[0].house)
            setCityValue(response.data[0].municipality)
            setCountryValue(response.data[0].country)
            setBrgyValue(response.data[0].brgy)
            setProvinceValue(response.data[0].province)
            setZipValue(response.data[0].zipcode)
            setPasswordValue(response.data[0].password)

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        defaultUserInfo()
    }, []);


    const updatePatientInfo = async () => {
        await Axios.put("http://localhost:3001/updatePatientInfo", {

            ObjectID: UserObjectID,

            patientIDnumber: patientIDnumber,

            firstName: firstName,
            lastName: lastName,
            middleName: middleName,
            suffix: suffix,
            birthDate: birthDate,
            ageValue: ageValue,
            genderValue: genderValue,
            professionValue: professionValue,
            email: emailValue,
            cellNumber: cellNumber,
            tellNumber: tellNumber,
            bloodType: bloodType,
            houseNum: houseNum,
            cityValue: cityValue,
            countryValue: countryValue,
            brgyValue: brgyValue,
            provinceValue: provinceValue,
            zipValue: zipValue,
        });
        console.log("New info saved in DB");
        // setModalState('show-modal');
        
    }

    const handleShow= () => {
        setModalState('show-modal');
    }

    const handleNotMatch = () => {
        setModalState('pwd-notmatch');
    }

const handleIncorrect = () => {
        setModalState('pwd-incorrect');
    }

    return (
        <>
            <div class="pagetitle">
                <h1>My Profile</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/patient">Home</a></li>
                        <li class="breadcrumb-item active">My Profile</li>
                    </ol>
                </nav>
            </div>
            <section class="section profile">
                <div class="row">
                    <UserProfileWidget />

                    <div class="col-xl-8">
                        <div className="card">
                            <div className="card-body pt-3">
                                {/* <!-- Bordered Tabs --> */}
                                <ul class="nav nav-tabs nav-tabs-bordered">

                                    <li class="nav-item">
                                        <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                                    </li>

                                    <li class="nav-item">
                                        <button class="nav-link " data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                                    </li>

                                    <li class="nav-item">
                                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                                    </li>
                                </ul>

                                {userData.map((item, index) => (
                                <div class="tab-content pt-2">
                                    <div class="tab-pane fade show active profile-overview" id="profile-overview">

                                        <h5 class="form-section-title">Personal Information</h5>
                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label ">First Name</div>
                                            <div class="col-lg-9 col-md-8">{item['fname']} </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label ">Middle Name</div>
                                            <div class="col-lg-9 col-md-8">{item['mname']}</div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label ">Last Name</div>
                                            <div class="col-lg-9 col-md-8"> {item['lname']}</div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Date of Birth</div>
                                            <div class="col-lg-9 col-md-8">{item['bday']}</div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Gender</div>
                                            <div class="col-lg-9 col-md-8">{item['gender']}</div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Phone</div>
                                            <div class="col-lg-9 col-md-8">{item['mobile']}</div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Email</div>
                                            <div class="col-lg-9 col-md-8">{item['email']}</div>
                                        </div>

                                        <h5 class="form-section-title">Address Information</h5>
                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">House No. & Name of Street</div>
                                            <div class="col-lg-9 col-md-8">{item['house']}</div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">District/Barangay</div>
                                            <div class="col-lg-9 col-md-8">{item['brgy']}</div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Municipality/City</div>
                                            <div class="col-lg-9 col-md-8">{item['municipality']}</div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Province</div>
                                            <div class="col-lg-9 col-md-8">{item['province']}</div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Country</div>
                                            <div class="col-lg-9 col-md-8">{item['country']}</div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3 col-md-4 label">ZIP Code</div>
                                            <div class="col-lg-9 col-md-8">{item['zipcode']}</div>
                                        </div>

                                    </div>

                                    {/* Profile Edit */}
                                    <div class="tab-pane fade profile-edit pt-3" id="profile-edit">
                                        <div className="container form-container">

                                            <h5 class="form-section-title">Personal Information</h5>
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <label for='firstName'>First Name</label>
                                                    {userData.map((item, index) => (
                                                        <input name="firstName" type="text" className="form-control" id="firstName" placeholder={item.fname} defaultValue={item.fname} onChange={(e) => setFirstValue(e.target.value)} required />
                                                    ))}
                                                </div>

                                                <div className="col-lg-3">
                                                    <label for='middleName'>Middle Name</label>
                                                    {userData.map((item, index) => (
                                                        <input name="middleName" type="text" className="form-control" id="middleName" placeholder={item.mname} defaultValue={item.mname} onChange={(e) => setMiddleValue(e.target.value)} required />
                                                    ))}
                                                </div>

                                                <div className="col-lg-3">
                                                    <label for='lastName'>Last Name</label>
                                                    {userData.map((item, index) => (
                                                        <input name="lastName" type="text" className="form-control" id="lastName" placeholder={item.lname} defaultValue={item.lname} onChange={(e) => setLastValue(e.target.value)} required />
                                                    ))}
                                                </div>

                                                <div className="col-lg-2">
                                                    <label for='suffix'>Suffix</label>
                                                    {userData.map((item, index) => (
                                                        <input name="suffix" type="text" className="form-control" id="suffix" placeholder={item.suffix} defaultValue={item.suffix} onChange={(e) => setSuffix(e.target.value)} required />
                                                    ))}
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-lg-5">
                                                    <label for='bday'>Date of Birth</label>
                                                    {userData.map((item, index) => (
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            placeholder={item.bday} defaultValue={item.bday}
                                                            onChange={(e) => setBirthDate(e.target.value)}
                                                            required
                                                        />
                                                    ))}
                                                </div>

                                                {/*<div className="col-lg-3">
                                                    <label for='age'>Age</label>
                                                    {userData.map((item, index) => (
                                                        <input name="age" type="text" className="form-control" id="age" placeholder={AgeOut()} defaultValue={item.age} onChange={(e) => setAgeValue(e.target.value)} required />
                                                    ))}
                                                </div>*/}

                                                <div className="col-lg-5">
                                                    <Form.Label>Gender:</Form.Label>
                                                    {userData.map((item, index) => (
                                                        <div className="mb-3">
                                                        <Form.Check
                                                            inline
                                                            label="Male"
                                                            name="group1"
                                                            type="radio"
                                                            checked={item.gender === 'Male'}
                                                            onChange={(e) => setGenderValue(e.target.value)}
                                                        />
                                                        <Form.Check
                                                            inline
                                                            label="Female"
                                                            name="group1"
                                                            type="radio"
                                                            checked={item.gender === 'Female'}
                                                            onChange={(e) => setGenderValue(e.target.value)}
                                                        />
                                                        </div>
                                                        ))}
                                                    </div>
                                                </div>

                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6">
                                                    <label for='email'>Email Address</label>
                                                    {userData.map((item, index) => (
                                                        <input type="email" class="form-control" id="email" placeholder={item.email} defaulValue={item.email} onChange={(e) => setEmailValue(e.target.value)} required />
                                                    ))}
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6">
                                                    <label for='phoneNum'>Phone Number</label>
                                                    {userData.map((item, index) => (
                                                        <input type="tel" class="form-control" id="phoneNum" placeholder={item.mobile} defaultValue={item.mobile} onChange={(e) => { setCellValue(e.target.value) }} pattern="[0-9]{4} [0-9]{3} [0-9]{4}" />
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="row">
                                                <h5 class="form-section-title">Address Information</h5>
                                                <div className="col-lg-6">
                                                    <label for='houseStreet'>House No. & Name of Street</label>
                                                    {userData.map((item, index) => (
                                                        <input type="text" className="form-control" id="houseStreet" placeholder={item.house} defaultValue={item.house} onChange={(e) => setHouseValue(e.target.value)} required />
                                                    ))}
                                                </div>
                                                <div className="col-lg-6">
                                                    <label for='brgy'>District/Barangay</label>
                                                    {userData.map((item, index) => (
                                                        <input type="text" className="form-control" id="brgy" placeholder={item.brgy} defaultValue={item.brgy} onChange={(e) => setBrgyValue(e.target.value)} required />
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <label for='city'>Municipality/City</label>
                                                    {userData.map((item, index) => (
                                                        <input name="city" type="address-city" className="form-control" id="Address" placeholder={item.municipality} defaultValue={item.municipality} onChange={(e) => setCityValue(e.target.value)} required />
                                                    ))}
                                                </div>
                                                <div className="col-lg-6">
                                                    <label for='brgy'>Province</label>
                                                    {userData.map((item, index) => (
                                                        <input name="brgy" type="address" className="form-control" id="Address" placeholder={item.province} defaultValue={item.province} onChange={(e) => setProvinceValue(e.target.value)} required />
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <label for='country'>Country</label>
                                                    {userData.map((item, index) => (
                                                        <input name="country" type="address" className="form-control" id="Address" placeholder={item.country} defaultValue={item.country} onChange={(e) => setCountryValue(e.target.value)} required />
                                                    ))}
                                                </div>
                                                <div className="col-lg-6">
                                                    <label for='zip'>ZIP Code</label>
                                                    {userData.map((item, index) => (
                                                        <input type="zip" className="form-control" id="Address" placeholder={item.zipcode} defaultValue={item.zipcode} onChange={(e) => setZipValue(e.target.value)} required />
                                                    ))}
                                                </div>
                                            </div>
                                            {/* <Button className='edit-save text-right' onClick={() => { handleShow(); updatePatientInfo(); }}>Save Changes</Button> */}
                                            <Button className='edit-save text-right' onClick={() => { updatePatientInfo(); handleShow(); }}>Save Changes</Button>
                                        </div>
                                    </div>
                                    {/* Change Password */}
                                    <div class="tab-pane fade pt-3" id="profile-change-password">
                                        <form id='passwordForm' onSubmit={(e) => {e.preventDefault()}}>
                                            <div class="row mb-3">
                                                <label for="currentPassword" class="col-md-4 col-lg-3 col-form-label">Current Password</label>
                                                <div class="col-md-8 col-lg-9">
                                                    <input name="password" type="password" class="form-control" id="currentPassword" onChange={(e) => {setCurrentPassword(e.target.value)}} required />
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="newPassword" class="col-md-4 col-lg-3 col-form-label">New Password</label>
                                                <div class="col-md-8 col-lg-9">
                                                    <input name="newpassword" type="password" class="form-control" id="newPassword" onChange={(e) => {setNewPassword(e.target.value)}} required />
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <label for="renewPassword" class="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                                                <div class="col-md-8 col-lg-9">
                                                    <input name="renewpassword" type="password" class="form-control" id="renewPassword" onChange={(e) => {setReEnterPassword(e.target.value)}} required />
                                                </div>
                                            </div>

                                            <div class="text-right">
                                                <button type="submit" class="btn btn-primary" onClick={() => { changePassword()}} >Change Password</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Modal show={modalState == 'show-modal'} onHide={handleModalClose} backdrop="static" keyboard={false}>

                <Modal.Header closeButton>
                <Modal.Title>Profile Changes</Modal.Title>
                </Modal.Header>

                <Modal.Body >
                    <img src={success} alt="success image" className='success-img' />
                    <p className='modal-txt-cn'>You have succesfully updated your changes!</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleModalClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={modalState == 'pwd-notmatch'} onHide={handleModalClose} backdrop="static" keyboard={false}>

                <Modal.Header closeButton>
                    <Modal.Title>Password does not match</Modal.Title>
                </Modal.Header>

                <Modal.Body >
                <img src={error} alt="error image" className='error-img' />
                    <p className='modal-txt-cn'>The password you want to change does not match! Please try again.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleModalClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={modalState == 'pwd-incorrect'} onHide={handleModalClose} backdrop="static" keyboard={false}>

                <Modal.Header closeButton>
                    <Modal.Title>Current password incorrect</Modal.Title>
                </Modal.Header>

                <Modal.Body >
                    <img src={error} alt="error image" className='error-img' />
                    <p className='modal-txt-cn'>Your current password is incorrect.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleModalClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UserProfile;