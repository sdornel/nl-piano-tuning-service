import React from 'react'
import MusicLessonsPhoto from '../Components/MusicLessonsPhoto'
import MusicLessonsRightParagraph from '../Components/MusicLessonsRightParagraph'
import MusicLessonsBottomParagraph from '../Components/MusicLessonsBottomParagraph'

const MusicLessonsContainer = (props) => {
    return(
        <div>
            <br/><br/>
            <MusicLessonsPhoto />
            <MusicLessonsRightParagraph />
            <MusicLessonsBottomParagraph />
        </div>
    )
}

export default MusicLessonsContainer