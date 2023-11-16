import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Img1 from '../Assets/landingpageimg.webp'
import HomeProjects from '../Components/HomeProjects'
import { Link } from 'react-router-dom'

function PFHome() {
  const[isLoggedIn,setLoggedIn]=useState(false)

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setLoggedIn(true)
    }else{
      setLoggedIn(false)
    }
  },[])

  return (
    <>
    {/* landing section */}
     <div className='container-fluid rounded'style={{width:'100%',height:'100vh',backgroundColor:'#90ee90'}}>
      <Row className='align-items-center p-5'>
        <Col sm={12} md={6}>
          <h1 style={{fontSize:'80px'}} className='text-light'><i className='fa-brands fa-stack-overflow fa-bounce'></i>Project Fair</h1>
          <p>One step destination for all software development projects....</p>
          {
          isLoggedIn?
          <Link to={'/dashboard'} className='btn btn-warning'>Manage your project <i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>
          :
          <Link to={'/login'} className='btn btn-warning'>START TO EXPLORE <i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>
          }
        </Col>
        <Col sm={12} md={6}>
          <img style={{marginTop:'100px'}} className='img-fluid w-75' src={Img1} alt=" project fair" />
        </Col>
      </Row>
     </div>
     {/* glimps of all projects */}
     <div className='all-projects mt-5'>
     <HomeProjects/>
     </div>
    </>
  )
}

export default PFHome