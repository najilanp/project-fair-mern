import React from 'react'
import {  Link } from 'react-router-dom'
import {Button, Form }from 'react-bootstrap'


function Auth({register}) {

    const registerForm = register? true:false

  return (
<div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
   <div className='container w-75'>
      <Link to={'/'} style={{textDecoration:'none'}} className='d-flex align-items-center'> <i className='fa-solid fa-arrow-left me-2'></i><h5>Back to Home</h5></Link>
      <div className='card shadow p-5 bg-success'>
        <div className='row align-items-center'>
           <div className='col-lg-6'>
              <img src="https://th.bing.com/th/id/R.1b409996f6a597430a11711de7ff965b?rik=fQfKCDItUUqT1Q&pid=ImgRaw&r=0" className='rounded-start w-100' alt="" />
           </div>
           <div className='col-lg-6'>
              <div className='d-flex flex-column align-items-center'>
                 <div className='d-flex mt-2 text-light'>
                       <i className='fa-brands fa-stack-overflow fa-bounce fa-3x me-1'></i>
                       <span className='h1 fw-bolder mb-0'>Project Fair</span>
                 </div>
                 <h5 className='fw-normal mt-4 pb-3 text-light'>
                 {
                    registerForm?'Sign up to your account': 'Sign in to your account'
                 }
                 </h5>
                 <Form className="text-light">
                  {
                     registerForm&&
                     <Form.Group className="mb-3" controlId="formBasicUsername">
                      <Form.Control type="text" placeholder="Enter your name" />
                 </Form.Group>
                 }
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter your Email ID" />
                 </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Enter password" />
                 </Form.Group>
                 {
                  registerForm?
                  <div>
                  <Button variant='light'type='submit' size='lg'>Register</Button>
                  <p className='mt-3 text-light'>Already have an account?<Link to={'/login'} className='btn-link text-light' >Login Here</Link></p>
                  </div>
                  :
                  <div>
                   <Button variant='light'type='submit' size='lg'>Login</Button>
                  <p className='mt-3 text-light'>New User?<Link to={'/register'} className='btn-link text-light'>Register Here</Link></p>
                  </div>
                 }
              </Form>

              </div>
           </div>
        </div>
      </div>
   </div>
</div>
  )
}

export default Auth