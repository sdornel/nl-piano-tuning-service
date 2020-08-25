import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './Music.css'

const Music = (props) => {
    return (
        <div className="music">
            <Container fluid>
                <Row>
                    <Col>
                        <iframe className="video-1" title="video 1" width="560" height="315" src="https://www.youtube.com/embed/O6998W0r5Zg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                        <div className="left-paragraph">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                                veniam, quis nos- trud exercitation ullamco laboris nisi ut aliquip Lorem 
                                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ulla- mco laboris nisi ut aliquip Lorem ipsum dolor 
                                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <iframe className="video-2" title="video 2" width="560" height="315" src="https://www.youtube.com/embed/aSXtXLAVgkE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Music