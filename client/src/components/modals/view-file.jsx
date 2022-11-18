import React from 'react'
import Button from 'react-bootstrap/Button';

//View Functionalites since modal siya
import ViewPrescriptionFile from './preview-prescription';
import ViewReceiptFile from './preview-transaction';

const ViewFile = () => {
  return (
    <>
      <Button className="view-button" variant="primary">
        <i class="bi bi-eye-fill"></i>View
      </Button>
    </>
  )
}
export default ViewFile;
