import React from 'react';
import './App.css';
import HomeContainer from './Containers/HomeContainer'
import TopLeftTitle from './Components/TopLeftTitle'
import NavBar from './Components/NavBar'
import {Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <div id="padding-top-for-nav-and-logo">
      </div>
      <Container fluid>
        <Row>
          <Col>
            <TopLeftTitle />
          </Col>
          <Col>
            <NavBar />
          </Col>
        </Row>
      </Container>
      <HomeContainer />
    </div>
  );
}

export default App;
