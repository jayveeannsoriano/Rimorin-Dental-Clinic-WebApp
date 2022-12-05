import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import '../../../styles/accounts.css';
import successful from '../../../assets/img/check.png';


export default function UserProfileSave() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [userData, setUserData] = useState([]);
    const [firstName, setFirstValue] = useState('');
    const [lastName, setLastValue] = useState('');
    const [middleName, setMiddleValue] = useState('');
    const [suffix, setSuffix] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [ageValue, setAgeValue] = useState('');
    const [genderValue, setGenderValue] = useState('');
    const [cellNumber, setCellValue] = useState('');
    const [houseNum, setHouseValue] = useState('');
    const [cityValue, setCityValue] = useState('');
    const [countryValue, setCountryValue] = useState('');
    const [brgyValue, setBrgyValue] = useState('');
    const [provinceValue, setProvinceValue] = useState('');
    const [zipValue, setZipValue] = useState('');
    const [ptrValue, setPtrValue] = useState('');
    const [licenceValue, setLicenceValue] = useState('');

    const handleShowModal = () => {
        updatePatientInfo();
        handleShow();
    }
    const updatePatientInfo = async () => {
        await Axios.put("http://localhost:80/updatePatientInfo", {

            firstName: firstName,
            lastName: lastName,
            middleName: middleName,
            suffix: suffix,
            birthDate: birthDate,
            ageValue: ageValue,
            genderValue: genderValue,
            cellNumber: cellNumber,
            houseNum: houseNum,
            cityValue: cityValue,
            countryValue: countryValue,
            brgyValue: brgyValue,
            provinceValue: provinceValue,
            zipValue: zipValue,
            ptrValue: ptrValue,
            licenceValue: licenceValue,
        });
        console.log("New info saved in DB")
    }

    // Get values

    return (
        <>
            <Button className='edit-save text-right' onClick={() => handleShowModal()}>Save Changes</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={successful} alt="success image" className='success-img' />
                    <p className='modal-txt'>Your changes have been saved!</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleClose()}>
                        Ok!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}