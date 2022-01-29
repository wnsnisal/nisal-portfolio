import React, { Component, useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {Row,Col,Form} from 'react-bootstrap';
import {FaBabyCarriage,FaCircle,FaGraduationCap,FaEnvelope} from 'react-icons/fa';

function Contact() {

  const [values,setValues] = useState({
    from_name:"",
    email:"",
    message:"",
  });

  const [status, setStatus] = useState('');

  // const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if(values.from_name == '' || values.email == '' || values.message == '')
      setStatus('failed');
      return;

    emailjs.send('service_s3cv5sf', 'template_btu385c', values, 'user_UmznL8GvM12k9QE2BUvhY')
      .then(response=>{
        console.log("success", response);
        setValues(values=>({
          from_name:"",
          email:"",
          message:"",
        }));
        setStatus('success');
      },error=>{
        console.log("Failed...", error);
        setStatus('failed');
      });
  };

  useEffect(()=>{
    if(status != ''){
      setTimeout(()=>{
        setStatus('');
      },3000);
    }
  })

  const handleChange = (e) =>{
    setValues(values=>({
      ...values,
      [e.target.name]: e.target.value,
    }));
  }
  

  
  const renderAlert = () =>{
    if(status == "success")
      return<div className='alert alert-success p-1 mt-3'>
        <p className='m-0'>Your message sent successfully!</p>
      </div>;

    if(status == "failed")
      return<div className='alert alert-danger p-1 mt-3'>
        <p className='m-0'>Send message failed!</p>
      </div>;
  }



  return (
    <Row id="div-contact" style={{height:"100vh",display:"flex",flexDirection:"row",alignItems:"center"}}>
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
            <Form onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="email_subject">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="name" name="from_name" onChange={handleChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="your_email_address">
                <Form.Label>Your email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" name="email" onChange={handleChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="your_message">
                <Form.Label>Your message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="message" name="message" onChange={handleChange}/>
              </Form.Group>
              <Form.Group className="mb-3 d-flex justify-content-center" controlId="email_subject">
                <button className="btn px-4 carousel-button" value="send"><FaEnvelope/> Send</button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
          <FaEnvelope/> wmnhasindu@gmail.com
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            {renderAlert()}
          </Col>
        </Row>
      </Col>
    </Row>
    );
}

export default Contact;