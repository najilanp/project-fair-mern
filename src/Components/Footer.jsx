import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center' style={{width:'100%',height:'400px'}}>
      <div className='footer d-flex justify-content-evenly w-100'>
        <div style={{width:'400px'}} className='website'>
          <h4>
          <i className="fa-solid fa-cloud-arrow-up "></i>{' '}
          Project Fair
          </h4>
          <h5>Designed and build with all the love in the world by the Bootstrap team with the help of our contributors</h5>
          <h6>Code licensed MIT</h6>
          <p>Currently v5.3.2</p>
        </div>
        <div className='link d-flex flex-column '> 
         <h4>Links</h4>
         <Link to={'/' } style={{textDecoration:'none',color:'#444'}}>PFHome page</Link>
         <Link to={'/login' } style={{textDecoration:'none',color:'#444'}}>Login page</Link>
         <Link to={'/register' } style={{textDecoration:'none',color:'#444'}}>Register page </Link>
         <Link to={'/dashboard' } style={{textDecoration:'none',color:'#444'}}>Dashboard </Link>
         <Link to={'/projects' } style={{textDecoration:'none',color:'#444'}}>projects page</Link>



        </div>
        <div className='guide d-flex flex-column '> 
         <h4>Guides</h4>
         <Link to={'https://react.dev/' } style={{textDecoration:'none',color:'#444'}}>React</Link>
         <Link to={'https://react-bootstrap.netlify.app/' } style={{textDecoration:'none',color:'#444'}}>React Bootstrap</Link>
         <Link to={'https://www.w3schools.com/react/react_router.asp' } style={{textDecoration:'none',color:'#444'}}>Routing </Link>
         <Link to={'https://redux-toolkit.js.org/' } style={{textDecoration:'none',color:'#444'}}>Redux-Toolkit </Link>

        </div>
        <div>
        <h4>Contact Us</h4> 
        <input className='p-1 rounded' type="email"placeholder='enter your email id' />
        <button className='btn btn-primary p-1 ms-3 '>Subscribe</button>
        <div className='m-4 icons '>
        <i className="fa-regular fa-envelope fa-xl p-3" style={{color: ''}}></i>
        <i className="fa-brands fa-instagram fa-xl p-3" style={{color: ''}}></i>
        <i className="fa-brands fa-twitter fa-xl p-3" style={{color: ''}}></i>
        <i className="fa-brands fa-facebook fa-xl p-3" style={{color: ''}}></i>
        <i className="fa-brands fa-linkedin-in fa-xl p-3" style={{color: ''}}></i>
        </div>
        </div>
      </div>
      <p>Copyright © 2023 Project Fair. Build with React.  </p>
    </div>
  )
}

export default Footer