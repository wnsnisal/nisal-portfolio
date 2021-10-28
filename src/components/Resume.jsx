import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap';
import resumeBckground from '../img/resumeBackground.jpg';
import {FaFileDownload} from 'react-icons/fa';
import nisalCV from '../files/CurriculumVitae.pdf';

class Resume extends React.Component {
  
  render() { 
    return <div id="div-resume" style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",height:"100vh",backgroundImage:`url(${resumeBckground})`,backgroundSize:"cover",backgroundAttachment:"fixed",backgroundBlendMode:"overlay",backgroundColor:"rgba(0,0,0,0.4)"}}>
    <Col xs={12} className="py-5 px-5">
      <Row>
        <h1 className="sectionHeading text-center text-light" style={{fontWeight:"600"}}>My Resume</h1>
      </Row>
      <Row className="justify-content-center">
        <Col xs ={11} md={6}>
          <div className="blue-line"></div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center mt-3 text-light">
          <p>Here is my resume. It's can download here. Then you can find more about my experience.</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="text-center mt-3">
          <a href={nisalCV} className="btn carousel-button px-4" download><FaFileDownload/> Download</a>
        </Col>
      </Row>
    </Col>
  </div>;
  }
}
 
export default Resume;