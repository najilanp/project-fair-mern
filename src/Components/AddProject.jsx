import React, { useState } from 'react'
import { Button,Modal } from 'react-bootstrap';



function AddProject() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Add Project
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size='lg' Centered>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='row'>
                 <div className='col-lg-6'>
                    <label className='text-center' htmlFor="projectpic">
                       <input id='projectpic' type="file"  style={{display:'none'}}/>
                        <img width={'100%'} height={'200px'} className='rounded-circle' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1698105600&semt=ais" alt="profile-pic" />
                    </label>
                 </div>
                 <div className='col-lg-6'>
                       <input type="text" className='form-control' placeholder='Project Name' />
                       <input type="text" className='form-control' placeholder='Language Used' />
                       <input type="text" className='form-control' placeholder='Github Link' />
                       <input type="text" className='form-control' placeholder='Website Link' />
                 </div>
            </div>
            <input type="text" className='form-control' placeholder='Project Overview' />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>

    
    </>
  )
}

export default AddProject