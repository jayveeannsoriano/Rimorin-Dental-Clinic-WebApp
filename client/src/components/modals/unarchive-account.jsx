import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import '../../styles/accounts.css';
import successful from '../../assets/img/check.png';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import success from '../../assets/img/check.png';
import warning from '../../assets/img/warning.png';

function UnarchiveAccount(ObjectID) {
    
    const StringfyValues = JSON.stringify(ObjectID);
    const ConvertStringfyValues = JSON.parse(StringfyValues);
    const objectID = JSON.stringify(ConvertStringfyValues.ObjectID).replace(/"/g, "");

    const [modalState, setModalState] = useState(false);


    const handleClose = () => {
        setModalState(false)
        window.location.reload();
    };

    const handleModal1 =() => {
        
        setModalState("modal-1")
    }

    const handleModal2 = () => {
               
       Axios.post('http://localhost:80/UnArchiveUser', {
        UserObjectID: objectID
    })
        setModalState("modal-2")
    }

    

    return (
        <>

        
            <Button className="cancel-button" onClick={() => {handleModal1();}}>
            <i class="bi bi-box-arrow-in-up"></i> Unarchive
            </Button>

            <Modal
                show={modalState == 'modal-1'}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                            <img src={warning} alt="warning image" className='warning-img' /> <br/>
                            <p className='modal-txt-cn'>You are about to unarchive an account. Would you like to proceed?.</p>
                            
                            </Modal.Body>
                    
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleModal2}>
                        Yes. Continue
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={modalState == 'modal-2'}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Success!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <img src={success} alt="success image" className='success-img' /> <br/>
                <p className='modal-txt-cn'>You have successfully unarchived the account.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UnarchiveAccount;