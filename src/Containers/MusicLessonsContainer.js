import React from 'react'
import MusicLessonsPhoto from '../Components/MusicLessonsPhoto'
import MusicLessonsRightParagraph from '../Components/MusicLessonsRightParagraph'
// import MusicLessonsBottomParagraph from '../Components/MusicLessonsBottomParagraph'
import './MusicLessonsContainer.css'

const MusicLessonsContainer = (props) => {
    return(
        <div className="music-lessons-container">
            Lessons
            <br/><br/>
            <MusicLessonsPhoto />
            {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
            <br/><br/><br/><br/>
            <MusicLessonsRightParagraph />
            {/* <MusicLessonsBottomParagraph /> */}
        </div>
    )
}

export default MusicLessonsContainer