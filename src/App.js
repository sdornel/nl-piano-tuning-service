import React from 'react';
import './App.css';
import HomeContainer from './Containers/HomeContainer'
import TopLeftLogo from './Components/TopLeftLogo'
import NavBar from './Components/NavBar'
import PianoTuningContainer from './Containers/PianoTuningContainer'
import MusicLessonsContainer from './Containers/MusicLessonsContainer'
import ArtContainer from './Containers/ArtContainer'
import MusicContainer from './Containers/MusicContainer'
import ContactContainer from './Containers/ContactContainer'
import {Container, Row, Col} from 'react-bootstrap'
import { Route, Switch, withRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <img className="background-image" src="../../images/background-image.jpg"></img>
      <div id="padding-top-for-nav-and-logo">
      </div>
        <Container fluid>
          <Row>
            <Col>
              <TopLeftLogo />
            </Col>
            <Col>
              <NavBar />
            </Col>
          </Row>
        </Container>
        <Switch>
          <Route exact path="/piano-tuning" component={PianoTuningContainer} />
          <Route exact path="/music-lessons" component={MusicLessonsContainer} />
          <Route exact path="/art" component={ArtContainer} />
          <Route exact path="/music" component={MusicContainer} />
          <Route exact path="/contact" component={ContactContainer} />
          <Route path="/" component={HomeContainer} /> 
          {/* Home needs to come last */}
      </Switch>
    </div>
  );
}

export default withRouter(App);

{/* <Switch>
<Route path="/course-list/:courseId" component={Course}/>
<Route path="/course-list" component={CourseContainer}/>
<Route path="/profile" component={UserProfileContainer}/>
<Route path="/company-profile" component={CompanyProfileContainer}/>
<Route path="/cart" component={CartContainer}/>
<Route path="/account" component={AccountInformation}/>
<Route path="/login" component={LoginForm}/>
<Route path="/company-login" component={CompanyLoginForm}/>
<Route path="/create-new-course" component={CreateNewCourse}/>
<Route path="/company/:courseId/edit" component={EditCourse}/>

<Route path="/register" component={RegisterNew}/>
<Route path="/sign-up" component={RegisterNew}/>
<Route path="/checkout" component={CheckoutForm}/>
<Route path="/course/:courseId/lessons" component={LessonDashboard}/>

<Route path="/course/:courseId/lessons/:lessonId" component={LessonContainer}/>
<Route path="/about" component={About}/>
<Route path="/user-courses" component={UserCoursesContainer}/>
<Route path="/" component={Home}/>
</Switch> */}