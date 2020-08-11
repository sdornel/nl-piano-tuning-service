import React from 'react'
import './PianoTuningVideos.css'

const PianoTuningVideos = (props) => {
    return(
        <div className="piano-tuning">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/O6998W0r5Zg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/aSXtXLAVgkE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div>
    )
}

export default PianoTuningVideos