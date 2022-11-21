import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import successful from '../../../assets/img/check.png';
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';

export default function ProfileInfoEditSaved() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
    const patientIDnumber = userInfo['patientIDnumber'];
    console.log(patientIDnumber);
    console.log(userInfo, "this are all the data of the user");

    const [userData, setUserData] = useState([]);

    //calendar input
    const [startDate, setStartDate] = useState(new Date());

    const conditions = ['HEART DISEASE', 'HIGH BLOOD PRESSURE', 'RHEUMATIC', 'BLOOD DISORDERS', 'DIABETES', 'SEIZURES', 'TUBERCOLOSIS', 'BLOOD TUMORS / GROWTHS', 'ASTHMA', 'HEPATITIS', 'SEXUALLY TRANSMITTED DISEASES', 'STROKE']

    const [modalState, setModalState] = useState('close');
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
    const [medValue, setMedValue] = useState('');
    const [allergiesValue, setAllergiesValue] = useState('');
    const [condValue, setCondValue] = useState('');
    const [precautionValue, setPrecautionValue] = useState('');

    console.log(firstName, 'updated');
    const defaultUserInfo = async () => {
        try {

            const response = await Axios.get("http://localhost:3001/getUserInfo", {
                params: {
                    patientIDnumber: patientIDnumber
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
            setEmailValue(response.data[0].mobile)
            setCellValue(response.data[0].mobile)
            setTellNumber(response.data[0].tellphone)
            setBloodValue(response.data[0].blood)
            setHouseValue(response.data[0].house)
            setCityValue(response.data[0].municipality)
            setCountryValue(response.data[0].country)
            setBrgyValue(response.data[0].brgy)
            setProvinceValue(response.data[0].province)
            setZipValue(response.data[0].zipcode)
            setMedValue(response.data[0].medications)
            setAllergiesValue(response.data[0].allergies)
            setCondValue(response.data[0].conditions)
            setPrecautionValue(response.data[0].precautions)


        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        defaultUserInfo()
    }, []);


    const updatePatientInfo = async () => {
        handleShow();
        await Axios.put("http://localhost:3001/updatePatientInfo", {

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
            medValue: medValue,
            allergiesValue: allergiesValue,
            condValue: condValue,
            precautionValue: precautionValue
        });

        console.log("New info saved in DB")
    }

    return (
        <>
            <Button className='edit-save text-right' onClick={() => updatePatientInfo()}>Save Changes</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={successful} alt="success image" className='success-img' />
                    <p className='modal-txt'>Your changes have been saved!</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleClose()}>
                        OK
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    );
}