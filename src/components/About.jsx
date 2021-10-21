import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap';
import {FaBabyCarriage} from 'react-icons/fa';

class About extends React.Component {
  render() {
    
    return <Row id="div-about" style={{height:"100vh"}}>
        <Col xs={12} className="py-5 px-5">
          <Row>
            <h1 className="sectionHeading text-center text-dark" style={{fontWeight:"600"}}>About me</h1>
          </Row>
          <Row className="justify-content-center">
            <Col xs ={11} md={6}>
              <div className="blue-line"></div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} className="pt-4">
              <p className="text-dark">I'm full stack software developer. My goal is to provide programming solutions for enhance my client's needs. I'm very good at graphic designing and UI UX designing also. But I'm not stop in there. I provide frontend development services and also full web creations with backend.</p>
            </Col>
            <Col sm={12} md={6} className="pt-4">
              <Row>
                <Col xs={12} className="d-flex text-center justify-content-start" style={{alignItems:"center"}}>
                  <FaBabyCarriage className="text-dark"/><h5 className="text-dark mx-2" style={{fontWeight:"600"}}>Bron on</h5>
                </Col>
              </Row>
              <Row></Row>
              <Row></Row>
              <Row></Row>
              <Row></Row>
              <Row></Row>
              <Row></Row>
            </Col>
          </Row>
        </Col>
      </Row>;
  }
}
 
export default About;