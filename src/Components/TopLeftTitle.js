import React from 'react'
import {Navbar, Container, Image} from 'react-bootstrap'
import './TopLeftTitle.css'

const TopLeftTitle = (props) => {
    return (
        <div className="logo">
            {/* <Container fluid> */}
                {/* <Navbar expand="lg" > */}
                    {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                        {/* <img className="logo" src="../../Images/Logo.png" alt="logo"/> */}
                        <Image className="logo" src="../../Images/Logo.png" alt="logo" fluid/>
                    {/* </Navbar.Collapse> */}
                {/* </Navbar> */}
            {/* </Container> */}
        </div>
    )
}

export default TopLeftTitle