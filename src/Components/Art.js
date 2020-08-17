import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Art = (props) => {
    return(
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <img src="../../images/Placeholder.png" alt="art" fluid/>
                        {/* need something here to create blank space */}
                        <img src="../../images/Placeholder.png" alt="art" fluid/>
                        {/* need something here to create blank space */}
                        <img src="../../images/Placeholder.png" alt="art" fluid/>
                    </Col>
                    <Col>
                        <img src="../../images/Placeholder.png" alt="art" fluid/>
                    </Col>
                    <Col>
                        <img src="../../images/Placeholder.png" alt="art" fluid/>
                        <Col>
                            <img src="../../images/Placeholder.png" alt="art" fluid/>
                            <img src="../../images/Placeholder.png" alt="art" fluid/>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Art