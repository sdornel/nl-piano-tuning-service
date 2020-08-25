import React from 'react'
import PianoTuningVideos from '../Components/PianoTuningVideos'
import PianoTuningText from '../Components/PianoTuningText'
import './PianoTuningContainer.css'

const PianoTuningContainer = (props) => {
    return(
        <div className="tuning-container">
            <PianoTuningVideos />
            <PianoTuningText />
        </div>
    )
}

export default PianoTuningContainer