import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'

function HomeProjects() {
  return (
    <>
    <Row>
        <h1 className='text-center mb-5'>Explore Our Projects</h1>
        <Col  sm={12} md={6} lg={4} >
            <ProjectCard/>
        </Col>
    </Row>
<div className='text-center mt-5'><Link to={'/projects'}>View More Projects</Link></div>  
  </>
  )
}

export default HomeProjects