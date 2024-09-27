import React from 'react'
import { Button,Container,Form,Nav,Navbar,NavDropdown } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


function Header() {
  return (
    <div>
        <Navbar expand="lg" variant='dark' className="bg-dark">
        <Container fluid>
          <LinkContainer to='/'>
            <Navbar.Brand >2am_9086</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <LinkContainer to='/'>
                <Nav.Link ><i className='fas fa-home'></i> Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/Cart'>
                <Nav.Link ><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/login'>
                <Nav.Link ><i className='fas fa-user'></i> Login</Nav.Link>
              </LinkContainer>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </div>
  )
}

export default Header