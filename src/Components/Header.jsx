import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <Navbar style={{backgroundColor:'#90ee90',zIndex:'1'}} className="w-100 position-fixed top-0">
        <Container>
          <Navbar.Brand >
           <Link to={'/'} style={{textDecoration:'none'}} ><i className='fa-brands fa-stack-overflow fa-bounce'></i>project fair</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header