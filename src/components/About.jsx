import React, { Component,useEffect } from 'react';
import {Row,Col} from 'react-bootstrap';
import {FaBabyCarriage,FaCircle,FaGraduationCap} from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 200,
    })
  }, []);

  return (
      <Row id="div-about" style={{height:"100vh",display:"flex",flexDirection:"row",alignItems:"center"}}>
        <Col xs={12} className="py-5 px-5">
          <Row>
            <h1 className="sectionHeading text-center text-dark" style={{fontWeight:"600"}}>About me</h1>
          </Row>
          <Row className="justify-content-center">
            <Col xs ={11} md={6}>
              <div data-aos="flip-right" className="blue-line"></div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} className="pt-4 d-flex align-items-center">
              <div className="card bg-light" style={{height:"100%"}}>
                <div className="card-body d-flex align-items-center p-2 p-md-5">
                  <p className="text-dark text-center">I'm full stack software developer. My goal is to provide programming solutions for enhance my client's needs. I'm very good at graphic designing and UI UX designing also. But I'm not stop in there. I provide frontend development services and also full web creations with backend.</p>
                </div>
              </div>
              {/* <p className="text-dark">I'm full stack software developer. My goal is to provide programming solutions for enhance my client's needs. I'm very good at graphic designing and UI UX designing also. But I'm not stop in there. I provide frontend development services and also full web creations with backend.</p> */}
            </Col>
            <Col sm={12} md={6} className="pt-4 mt-0 mt-md-5 mt-lg-0">
              <Row>
                <Col xs={12} className="d-flex text-center justify-content-center justify-content-md-start" style={{alignItems:"center"}}>
                  <FaBabyCarriage className="text-dark"/><h5 className="text-dark mx-2" style={{fontWeight:"600"}}>Bron on</h5>
                  
                </Col>
                <hr className="mb-1"/>
              </Row>
              <Row>
                <Col xs={12} className="d-flex text-center justify-content-center justify-content-md-start mb-2" style={{alignItems:"center"}}>
                  <FaCircle className="text-dark" style={{width:"7px"}}/><p className="text-dark mx-2 mb-0">1992 June 28 in Sri Lanka.</p>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="d-flex text-center justify-content-center justify-content-md-start" style={{alignItems:"center"}}>
                  <FaGraduationCap className="text-dark" style={{width:"22px"}}/><h5 className="text-dark mx-2" style={{fontWeight:"600"}}>Education</h5>
                </Col>
                <hr className="mb-1"/>
              </Row>
              <Row>
                <Col xs={12} className="d-flex text-center justify-content-center justify-content-md-start mb-0" style={{alignItems:"center"}}>
                  <FaCircle className="text-dark" style={{width:"7px"}}/><p className="text-dark mx-2 mb-0">R/Darmaloka Navodya School.</p>
                </Col>
                <Col xs={12} className="d-flex text-center justify-content-center justify-content-md-start mb-1" style={{alignItems:"center"}}>
                  <p className="text-secondary mx-3 mb-0" style={{fontSize:"11px"}}>GCE O/L</p>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="d-flex text-center justify-content-center justify-content-md-start mb-0" style={{alignItems:"center"}}>
                  <FaCircle className="text-dark" style={{width:"7px"}}/><p className="text-dark mx-2 mb-0">R/Sivali Cantrell College.</p>
                </Col>
                <Col xs={12} className="d-flex text-center justify-content-center justify-content-md-start mb-1" style={{alignItems:"center"}}>
                  <p className="text-secondary mx-3 mb-0" style={{fontSize:"11px"}}>GCE A/L</p>
                </Col>
              </Row>
                <Row><Col xs={12} className="d-flex text-center justify-content-center justify-content-md-start mb-0" style={{alignItems:"center"}}>
                  <FaCircle className="text-dark" style={{width:"7px"}}/><p className="text-dark mx-2 mb-0">ESOFT - Metro College - Ratnapura.</p>
                </Col>
                <Col xs={12} className="d-flex text-center justify-content-center justify-content-md-start mb-1" style={{alignItems:"center"}}>
                  <p className="text-secondary mx-3 mb-0" style={{fontSize:"11px"}}>HND in Software Engineering - Pearson certified</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
  );
}
 
export default About;