import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import '../../styles/accounts.css';
import successful from '../../assets/img/check.png';

function CancelDental(patientIDnumber, pName, dName, appNum, date, time) {
    const [modalState, setModalState] = useState(false);
    const [reasonInput, setReasonInput] = useState("");

    const handleClose = () => {
        setModalState(false)
        window.location.reload();
    };
    const handleModal1 = () => {
        setModalState("modal-1")
    }

    const handleModal2 = () => {
        CancelAppointment();
        setModalState("modal-2")
       
    }
    //retrieve app number
    const StringfyValues = JSON.stringify(patientIDnumber, pName, dName, appNum, date, time);
    const ConvertStringfyValues = JSON.parse(StringfyValues);
    //values
    const PatientIDnumber = JSON.stringify(ConvertStringfyValues.patientIDnumber).replace(/"/g, "");
    const AppNumber = JSON.stringify(ConvertStringfyValues.appNum).replace(/"/g, "");
    const PatientValue = JSON.stringify(ConvertStringfyValues.pName).replace(/"/g, "");
    const DentistValue = JSON.stringify(ConvertStringfyValues.dName).replace(/"/g, "");
    const DateValue = JSON.stringify(ConvertStringfyValues.date).replace(/"/g, "");
    const TimeValue = JSON.stringify(ConvertStringfyValues.time).replace(/"/g, "");

    const CancelAppointment = async () => {

        console.log("Deleting " + AppNumber);
        const response = await Axios.get('https://rimorin-dental-clinic.herokuapp.com/getUserInfo',{
            params: {
                PatientIDnumber:PatientIDnumber
            }
        })
        await Axios.post("https://rimorin-dental-clinic.herokuapp.com/moveToAppointmentHistoryAsCancelled", {
            patientIDnumber: PatientIDnumber, 
            userNameApp: PatientValue, 
            appNumber: AppNumber, 
            dentistValue: DentistValue, 
            dateValue: DateValue, 

            getTime: TimeValue 
        })
        Axios.post("https://rimorin-dental-clinic.herokuapp.com/sendSMS", {phone: "0" + response['data'][0]['mobile'] ,message:"Hi "+PatientValue+"! This is from Rimorin Dental Clinic notifying you that your requested Appointment at "+DateValue+" "+TimeValue+" due to '" + "' has been cancelled."})
        //add reason for cancellation
    }
    

    return (
        <>
            <Button className="cancel-button" onClick={handleModal1}>
                <i class="bi bi-x-lg"></i>Cancel
            </Button>

            <Modal 
            show={modalState == 'modal-1'} 
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Cancel Appointment</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="cancelValidation"
                        >
                        <Form.Label>Are you sure you want to cancel Appointment {AppNumber}?</Form.Label>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleModal2}>
                        Yes. Continue
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={modalState == 'modal-2'} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Appointment Cancelled</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={successful} alt="success image" className='success-img' />
                    <p className='modal-txt'>You have succesfully cancelled Appointment {AppNumber}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    );
}

export default CancelDental;