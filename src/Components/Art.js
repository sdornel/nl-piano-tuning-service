import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Art = (props) => {
    return(
        <div>
            <Container fluid>
                <Row>
                    <Col>
                    <div>
                        <img src="../../images/Placeholder.png" alt="art" fluid/>
                    </div>
                        {/* need something here to create blank space */}
                    <div>
                        <img src="../../images/Placeholder.png" alt="art" fluid/>
                    </div>
                        {/* need something here to create blank space */}
                    <div>
                        <img src="../../images/Placeholder.png" alt="art" fluid/>
                    </div>
                    </Col>
                    <Col>
                        <img src="../../images/Placeholder.png" alt="art" fluid/>
                    </Col>
                    <Col>
                        <img src="../../images/Placeholder.png" alt="art" fluid/>
                        <Col>
                        <div>
                            <img src="../../images/Placeholder.png" alt="art" fluid/>
                        </div>
                        <div>
                            <img src="../../images/Placeholder.png" alt="art" fluid/>
                        </div>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Art