import React from 'react'
import {Nav, Navbar, NavItem, NavLink} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div className="navbar">
            <Navbar bg="light" expand="lg" className="ml-auto">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <div className="navbar-item">
                        <Nav.Link as={Link} to="/piano-tuning"><strong>Tuning</strong></Nav.Link>
                    </div>
                    <div className="navbar-item">
                        <Nav.Link as={Link} to="/music-lessons"><strong>Lessons</strong></Nav.Link>
                    </div>
                    <div className="navbar-item">
                        <Nav.Link as={Link} to="/art"><strong><span className="">Art</span></strong></Nav.Link>
                    </div>
                    <div className="navbar-item">
                        <Nav.Link as={Link} to="/music"><strong><span className="">Music</span></strong></Nav.Link>
                    </div>
                    <div className="navbar-item">
                        <Nav.Link as={Link} to="/contact"><strong><span className="">Contact</span></strong></Nav.Link>
                    </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar