import React, { Component } from 'react';
import {Row,Col,Form} from 'react-bootstrap';
import {FaBabyCarriage,FaCircle,FaGraduationCap,FaEnvelope} from 'react-icons/fa';

class Contact extends React.Component {
  
  render() { 
    return <Row id="div-contact" style={{height:"100vh",display:"flex",flexDirection:"row",alignItems:"center"}}>
    <Col xs={12} className="py-5 px-5">
      <Row>
        <h1 className="sectionHeading text-center text-dark" style={{fontWeight:"600"}}>Contact me</h1>
      </Row>
      <Row className="justify-content-center">
        <Col xs ={11} md={6}>
          <div className="blue-line"></div>
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="pt-4">
          <p className="text-center">If there any question! don't hesitate to contact me anytime.</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="your_email_address">
              <Form.Label>Your email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email_subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="subject" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="your_message">
              <Form.Label>Your message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="message" />
            </Form.Group>
            <Form.Group className="mb-3 d-flex justify-content-center" controlId="email_subject">
              <button className="btn px-4 carousel-button"><FaEnvelope/> Send</button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
        <FaEnvelope/> wmnhasindu@gmail.com
        </Col>
      </Row>
    </Col>
  </Row>;
  }
}
 
export default Contact;