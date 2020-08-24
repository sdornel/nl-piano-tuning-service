import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './Art.css'

const Art = (props) => {
    return(
        <div>
            <Container fluid>
                <Row>
                    <Col>
                    <div className="column-one">
                        <img className="column-one-images" src="../../images/Placeholder.png" alt="art" fluid/>
                    </div>
                        {/* need something here to create blank space */}
                    <div className="column-one">
                        <img className="column-one-images" src="../../images/Placeholder.png" alt="art" fluid/>
                    </div>
                        {/* need something here to create blank space */}
                    <div className="column-one">
                        <img className="column-one-images" src="../../images/Placeholder.png" alt="art" fluid/>
                    </div>
                    </Col>
                    <Col>
                        <div className="column-two">
                            <img className="column-two-image" src="../../images/Placeholder.png" alt="art" fluid/>
                        </div>
                    </Col>
                    <Col>
                        <div className="column-three">
                            <img className="column-three-image" src="../../images/Placeholder.png" alt="art" fluid/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Art