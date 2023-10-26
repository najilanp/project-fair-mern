import React, { useState } from 'react'
import { Card,Col,Modal, Row } from 'react-bootstrap'
import PROJECT1IMG from "../Assets/project1.png"




function ProjectCard() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

  return (
    <>
    <Card className='shadow mb-5 btn' onClick={handleShow}>
      <Card.Img variant="top" src={PROJECT1IMG} />
      <Card.Body>
        <Card.Title>PROJECT TITLE</Card.Title>
      </Card.Body>
    </Card>
 
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           
              <Row>
                  <Col>
                  <img style={{height:'200px'}} className='img-fluid' src={PROJECT1IMG} alt="single project" />
                  </Col>
                  <Col>
                  <h2>Project Title</h2>
                  <p>Project Overview</p>
                  <p>Language Used: <span className='ms-2 fw-bolder'>HTML,CSS,REACT</span></p>
                  </Col>
              </Row> 
           
        <div className='mt-3'>  
        <a target='_blank' href="https://github.com/najilanp/media-player-frontend-react.git" className='btn me-5'><i className="fa-brands fa-github fa-2x"></i></a>
        <a  target="_blank" href="https://mediaplayer-react.netlify.app/"className='btn me-5'> <i class="fa-solid fa-link fa-2x"></i></a>
        </div> 
        </Modal.Body>   
      </Modal>
    </>
  )
}

export default ProjectCard