import React from 'react'
import PianoTuningVideos from '../Components/PianoTuningVideos'
import PianoTuningTextgi from '../Components/PianoTuningText'

const PianoTuningContainer = (props) => {
    return(
        <div>
            Tuning
            <PianoTuningVideos />
            <PianoTuningText />
        </div>
    )
}

export default PianoTuningContainer