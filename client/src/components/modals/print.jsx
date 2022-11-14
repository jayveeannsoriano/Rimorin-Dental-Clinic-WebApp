import React from 'react'
import Button from 'react-bootstrap/Button';

const PrintFile = () => {
  return (
    <>
        <Button className="export-button" variant="primary">
            <i class="bi bi-printer"></i>Print
        </Button>
    </>
  )
}
export default PrintFile;
