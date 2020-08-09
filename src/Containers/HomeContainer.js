import React from 'react'
import './HomeContainer.css'
import HomeImage from '../Components/HomeImage.js'
import HomeParagraph from '../Components/HomeParagraph.js'

const HomeContainer = (props) => {
    return (
        <div>
            <div className="home-container">
                Home
            </div>
            <HomeImage />
            <HomeParagraph/>
        </div>
    )
}

export default HomeContainer