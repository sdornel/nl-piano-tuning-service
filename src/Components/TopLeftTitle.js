import React from 'react'
import {Image} from 'react-bootstrap'
import './TopLeftTitle.css'

const TopLeftTitle = (props) => {
    return (
        <div className="logo">
            <Image className="logo" src="../../Images/Logo.png" alt="logo" fluid/>
        </div>
    )
}

export default TopLeftTitle