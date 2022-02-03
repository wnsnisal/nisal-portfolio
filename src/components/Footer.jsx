import React, { Component } from 'react';
import {Row,Col,Form} from 'react-bootstrap';
import { GrGithub, GrInstagram, GrLinkedinOption } from "react-icons/gr";
import {FaFacebookF} from 'react-icons/fa';

function Footer() {
  return (
    <div className="p-5" style={{backgroundColor:"#212027"}}>
      <Row>
        <Col className="d-flex justify-content-center">
          <a href="https://www.facebook.com/nisal.hasindu.5" target="_blank" className="div-social-icons m-2 m-lg-1">
            <FaFacebookF style={{color:"#FFFF"}}/>
          </a>
          <a href="https://www.instagram.com/nisal.hasindu/" target="_blank" className="div-social-icons m-2 m-lg-1">
            <GrInstagram style={{color:"#FFFF"}}/>
          </a>
          <a href="https://www.linkedin.com/in/wmn-nisal-a280651b6/" target="_blank" className="div-social-icons m-2 m-lg-1">
            <GrLinkedinOption style={{color:"#FFFF"}}/>
          </a>
          <a href="https://github.com/wnsnisal" target="_blank" className="div-social-icons m-2 m-lg-1">
            <GrGithub style={{color:"#FFFF"}}/>
          </a>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-3">
          <p className="text-light text-center m-0" style={{fontWeight:"300"}}>©2021 nisalhasindu.online. All Rights Reserved</p>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;