import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../../styles/accounts.css';
import successful from '../../../assets/img/check.png';
import Axios from 'axios';


export default function AccountCreated() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    const InsertUser = async () => {

        await Axios.post("http://localhost:80/InsertNewUser", {
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
        handleShow();
    // setModalState("show-modal");
    }
    // const { fname, lname, mname, suffix, email, password, gender, mobile, bday, house, brgy, municipality, province, country, medications, allergies, conditions, tellphone, profession, zipcode, blood } = values;

    // const Continue = e => {
    //     // handleModal();
    //     Axios.post("http://localhost:80/RegisterUser", {
    //         fname: fname,
    //         mname: mname,
    //         suffix: suffix,
    //         lname: lname,
    //         email: email,
    //         password: password,
    //         gender: gender,
    //         mobile: mobile,
    //         tellphone: tellphone,
    //         profession: profession,
    //         bday: bday,
    //         house: house,
    //         brgy: brgy,
    //         municipality: municipality,
    //         province: province,
    //         zipcode: zipcode,
    //         country: country,
    //         medications: medications,
    //         allergies: allergies,
    //         blood: blood,
    //         conditions: conditions,
    //         user_role_id: 1
    //     })
        
    //     e.preventDefault();
    //     // nextStep();
    // }

    return (
        <>
            {/* <button type="button" class="btn btn-primary spc" onClick={handleShow}> <i class="bi bi-eye"></i> View Archived Accounts</button> */}
            <button
                                // onClick={()=> {Continue(); handleShow(); }}
                                type="submit"
                                className="btn btn-primary"
                                style={{ padding: "10px 30px" }}
                                onClick={() => InsertUser()}
                            >
                                Create Account
                            </button>
            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Account Created</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={successful} alt="success image" className='success-img'/>
                    <p className='modal-txt'>You have created your account.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" href='/auth/login'>
                        Ok!
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    );
}
