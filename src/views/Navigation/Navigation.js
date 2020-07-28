import React from 'react'
import { Navbar, Brand, Nav, Link, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Logo from '../../images/kittenlogo.png'

const Navigation = () => {
    return (
        <Container className='Navigation'>
            <Navbar bg='light' className='Navigation'>
                <Navbar.Brand href='#home'>
                    <img
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand href='/'>
                    Kitten Bizness - Porch Cat Rescue
                </Navbar.Brand>
                <Nav className='navLinks'>
                    <Container fluid>
                        <NavLink to='/TNRd'>TNR'd</NavLink>
                        <NavLink to='/Adopted'>Adopted</NavLink>
                        <NavLink to='/Available'>Available</NavLink>
                        <NavLink to='/About'>About Us</NavLink>
                        <NavLink to='/Donate'>Donate</NavLink>
                    </Container>

                </Nav>
            </Navbar>
        </Container>
    )
}

export default Navigation