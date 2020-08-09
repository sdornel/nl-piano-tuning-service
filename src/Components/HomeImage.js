import React from 'react'
// import {Image} from 'react-bootstrap'
import './HomeImage.css'

const HomeImage = (props) => {
    return(
        <div>
            <div>
                <img className="home-image" src="../../Images/Placeholder.png" alt="home" fluid/>
                <div className="home-image-text-div">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi ante, blandit 
                        et mattis quis, semper et ipsum. Suspendisse facilisis hendrerit tincidunt. Mauris 
                        quis mi sem.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeImage