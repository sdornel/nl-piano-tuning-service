import React from 'react'
import './PianoTuningVideos.css'
// import {Container, Row, Col} from 'react-bootstrap'

const PianoTuningVideos = (props) => {
    return(
        <div className="piano-tuning">
            {/* <Container>
                <Row>
                    <Col> */}
                        {/* <div className="video-left"> */}
                            <iframe title="video 1" width="560" height="315" src="https://www.youtube.com/embed/O6998W0r5Zg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        {/* </div> */}
                    {/* </Col>
                    <Col> */}
                        {/* <div className="video-right"> */}
                            <iframe title="video 2" width="560" height="315" src="https://www.youtube.com/embed/aSXtXLAVgkE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        {/* </div> */}
                    {/* </Col>
                </Row>
            </Container> */}
        </div>
    )
}

export default PianoTuningVideos