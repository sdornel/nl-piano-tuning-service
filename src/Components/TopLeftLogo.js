import React from 'react'
import {Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './TopLeftLogo.css'

const TopLeftLogo = (props) => {
    return (
        <div className="logo">
            <Link to="/"><Image className="logo" src="../../Images/Logo.png" alt="logo" fluid/></Link>
        </div>
    )
}

export default TopLeftLogo