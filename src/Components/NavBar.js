import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div className="navbar">
            <Navbar bg="light" expand="lg" className="ml-auto">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <div className="navbar-item">
                        <Nav.Link href="#piano-tuning"><strong>Piano Tuning</strong></Nav.Link>
                    </div>
                    <div className="navbar-item">
                        <Nav.Link href="#music-lessons"><strong>Music Lessons</strong></Nav.Link>
                    </div>
                    <div className="navbar-item">
                        <Nav.Link href="#art"><strong>Art</strong></Nav.Link>
                    </div>
                    <div className="navbar-item">
                        <Nav.Link href="#music"><strong>Music</strong></Nav.Link>
                    </div>
                    <div className="navbar-item">
                        <Nav.Link href="#contact"><strong>Contact</strong></Nav.Link>
                    </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar