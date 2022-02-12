import React, { Component, useEffect } from 'react';
import Footer from '../components/Footer';
import {Row,Col} from 'react-bootstrap';
import projectsBackgroundImage from '../img/projects-backgrounds.jpg';
import portfolio_website from '../files/portfolio_website.xd';
import e_music_cloud from '../files/e_music_cloud.xd';
import Online_library_system from '../files/Online_library_system.xd';
import {FaFileDownload} from 'react-icons/fa';
import {BsGlobe2} from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { GrGithub} from "react-icons/gr";

import webSample01 from '../img/web-sample-01.png';
import webSample02 from '../img/web-sample-02.png';
import webSample03 from '../img/web-sample-03.png';
import webSample04 from '../img/web-sample-04.png';
import desktopSample01 from '../img/desktop-sample-01.png';
import desktopSample02 from '../img/desktop-sample-02.png';
import uiSample01 from '../img/ui_sample_01.JPG';
import uiSample02 from '../img/ui_sample_02.JPG';
import uiSample03 from '../img/ui_sample_03.JPG';
import graphicDesignPortfolio from '../img/graphic_design_portfolio.jpg';

function Projects() {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 200,
    })
  }, []);

  const projectsBackground = {
    backgroundColor:"rgba(0,0,0,0.2)",
    height:"100vh",
    backgroundImage:`url('${projectsBackgroundImage}')`,
    backgroundBlendMode:"overlay",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover"
  } 
  const heading = {
    fontWeight:"600",
    fontSize:"3.5em",
    textAlign:"center",
    color:"white",
  }

  const projectImage = {
    width:"100%"
  }

  const projectLinks = {
    color:"black",
    fontWeight:"600"
  }

  const fileDownloadIcon = {
    color :"rgba(0,0,0,0.8)",
    fontSize:"24px"
  }

  return <>
    <Row>
      <Col style={projectsBackground} className="d-flex justify-content-center align-items-center">
        <h1 style={heading}>My Projects</h1>
      </Col>
    </Row>
    
    <Row className="mt-5">
      <Col className="d-flex justify-content-center align-items-center mt-5">
        <h1>Web Projects</h1>
      </Col>
    </Row>
    <Row className="justify-content-center mt-3">
      <Col xs ={11} md={6}>
        <div data-aos="flip-right" className="blue-line"></div>
      </Col>
    </Row>
    <Row className="justify-content-center px-5 mb-5">
      <Col xs ={11} md={6} lg={4} className="mt-5">
        <Row className="justify-content-center">
            <img src={webSample01} style={projectImage} alt="" />
            <a href='https://drivingacademy.website/' target="_blank" className='text-center mt-1' style={projectLinks}>www.drivingacademy.website</a>
        </Row>
      </Col>
      <Col xs ={11} md={6} lg={4} className="mt-5">
        <Row className="justify-content-center">
            <img src={webSample02} style={projectImage} alt="" />
            <a href='https://nipunijayashani.com/' target="_blank" className='text-center mt-1' style={projectLinks}>www.nipunijayashani.com/</a>
        </Row>
      </Col>
      <Col xs ={11} md={6} lg={4} className="mt-5">
        <Row className="justify-content-center">
            <img src={webSample03} style={projectImage} alt="" />
            <a href='http://printup.website/' target="_blank" className='text-center mt-1' style={projectLinks}>www.printup.website</a>
        </Row>
      </Col>
      <Col xs ={11} md={6} lg={4} className="mt-5">
        <Row className="justify-content-center">
            <img src={webSample04} style={projectImage} alt="" />
            <Col className="d-flex justify-content-center mt-1">
              <GrGithub style={{color:"black",marginRight:"5px", marginTop:"5px"}}/><a target="_blank" href='https://github.com/wnsnisal/lovastate-university-library-management-system.git' className='text-center' style={projectLinks}>library management system</a>
            </Col>
        </Row>
      </Col>
    </Row>

    <Row>
      <Col className="d-flex justify-content-center align-items-center mt-5">
        <h1>Desktop Applications</h1>
      </Col>
    </Row>
    <Row className="justify-content-center mt-3">
      <Col xs ={11} md={6}>
        <div data-aos="flip-right" className="blue-line"></div>
      </Col>
    </Row>
    <Row className="justify-content-center px-5 mb-5">
      <Col xs ={11} md={6} lg={4} className="mt-5">
        <Row className="justify-content-center">
            <img src={desktopSample01} style={projectImage} alt="" />
            <Col className="d-flex justify-content-center mt-1">
              <GrGithub style={{color:"black",marginRight:"5px", marginTop:"5px"}}/><a target="_blank" style={projectLinks} href='https://github.com/wnsnisal/ayubo-drive.git' className='text-center'>Ayubo Drive</a>
            </Col>
            <p className='text-center'>Vehicle rent system</p>
        </Row>
      </Col>
      <Col xs ={11} md={6} lg={4} className="mt-5">
        <Row className="justify-content-center">
            <img src={desktopSample02} style={projectImage} alt="" />
            <Col className="d-flex justify-content-center mt-1">
              <GrGithub style={{color:"black",marginRight:"5px", marginTop:"5px"}}/><a target="_blank" style={projectLinks} href='https://github.com/wnsnisal/hotel-management-system.git' className='text-center'>Hotel Hilro</a>
            </Col>
            <p className='text-center'>Hotel management system</p>
        </Row>
      </Col>
    </Row>

    <Row>
      <Col className="d-flex justify-content-center align-items-center mt-5">
        <h1>UIUX Designs</h1>
      </Col>
    </Row>
    <Row className="justify-content-center mt-3">
      <Col xs ={11} md={6}>
        <div data-aos="flip-right" className="blue-line"></div>
      </Col>
    </Row>
    <Row className="justify-content-center px-5 mb-5">
      <Col xs ={11} md={6} lg={4} className="mt-5">
        <Row className="justify-content-center">
            <img src={uiSample01} style={projectImage} alt="" />
            portfolio website UI design
            <a href={portfolio_website} className='text-center text-dark' download><FaFileDownload style={fileDownloadIcon}/> download xd file</a>
        </Row>
      </Col>
      <Col xs ={11} md={6} lg={4} className="mt-5">
        <Row className="justify-content-center">
            <img src={uiSample02} style={projectImage} alt="" />
            E Music Cloud UI Design
            <a href={e_music_cloud} className='text-center text-dark' download><FaFileDownload style={fileDownloadIcon}/> download xd file</a>
        </Row>
      </Col>
      <Col xs ={11} md={6} lg={4} className="mt-5">
        <Row className="justify-content-center">
            <img src={uiSample03} style={projectImage} alt="" />
            Library management system ui design
            <a href={Online_library_system} className='text-center text-dark' download><FaFileDownload style={fileDownloadIcon}/> download xd file</a>
        </Row>
      </Col>
    </Row>


    <Row>
      <Col className="d-flex justify-content-center align-items-center mt-5">
        <h1>Graphic Designs</h1>
      </Col>
    </Row>
    <Row className="justify-content-center mt-3">
      <Col xs ={11} md={6}>
        <div data-aos="flip-right" className="blue-line"></div>
      </Col>
    </Row>
    <Row className="justify-content-center px-5 mb-5">
      <Col xs ={6} className="mt-3">
        <Row className="justify-content-center">
            <p style={{textAlign:"center",fontSize:"1.5em"}}>You can discover my graphic designs go to my graphic design portfolio below.</p>
            <a href='https://printme.website/nisal-haisndu/' target="_blank"><img src={graphicDesignPortfolio} style={projectImage} alt="" /></a>
            <a href='https://printme.website/nisal-haisndu/' className='text-center text-dark' target="_blank"><BsGlobe2 style={fileDownloadIcon}/>&nbsp;printme.website/nisal-haisndu</a>
        </Row>
      </Col>
      
    </Row>

    <Footer/>
  </>
}
 
export default Projects;