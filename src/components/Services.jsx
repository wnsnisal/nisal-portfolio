import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap';
import servicesBackground from '../img/services-background.jpg';
import computer from '../img/computer.png';
import responsive from '../img/responsive.png';
import webDesign from '../img/web-design.png';
import '../styles/services.css';

class Services extends React.Component {
  render() { 
    const serviceImg={
      width:"50%",
    }

    return <div id="div-services" style={{backgroundImage:`url(${servicesBackground})`,height:"100vh",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Col xs={12} className="py-5 px-5">
        <Row>
          <h1 className="sectionHeading text-center text-light" style={{fontWeight:"600"}}>Services</h1>
        </Row>
        <Row className="justify-content-center">
          <Col xs ={11} md={6}>
            <div className="blue-line"></div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={4} className="p-4">
            <Row className="serviceBox p-4">
              <Col xs={12} className="text-center">
                <img src={computer} style={serviceImg} alt="desktop"/>
              </Col>
              <Col xs={12} className="text-center">
                <h4 style={{fontWeight:"600"}}>Desktop Applications</h4>
              </Col>
              <Col xs={12} className="text-center text-secondary">
                <p>Develop desktop applications using C#</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} lg={4} className="p-4">
            <Row className="serviceBox p-4">
              <Col xs={12} className="text-center">
                <img src={responsive} style={serviceImg} alt="desktop"/>
              </Col>
              <Col xs={12} className="text-center">
                <h4 style={{fontWeight:"600"}}>Web Development</h4>
              </Col>
              <Col xs={12} className="text-center text-secondary">
                <p>Responsive web design, Ecommerce web applications, Business websites creations.</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} lg={4} className="p-4">
            <Row className="serviceBox p-4">
              <Col xs={12} className="text-center">
                <img src={webDesign} style={serviceImg} alt="desktop"/>
              </Col>
              <Col xs={12} className="text-center">
                <h4 style={{fontWeight:"600"}}>Desktop Applications</h4>
              </Col>
              <Col xs={12} className="text-center text-secondary">
                <p>Develop desktop applications using C#</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
  </div>;
  }
}
 
export default Services;