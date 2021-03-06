import React, { Component,useEffect } from 'react';
import {Row,Col} from 'react-bootstrap';
import codeigniterLogo from '../img/codeigniter-logo.png';
import reactLogo from '../img/react-logo.png';
import firebaseLogo from '../img/firebase-logo.png';
import mongodbLogo from '../img/mongodb-logo.png';
import mysqlLogo from '../img/MySQL-Logo.png';
import phpLogo from '../img/php-logo.png';
import wordpressLogo from '../img/wordpress-logo.png';
import nodejsLogo from '../img/nodejs-logo.png';
import flutterLogo from '../img/flutter-logo.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Technologies(props) {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 200,
    })
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  const technologiesLogos = {
    width:"100%",
    scale:"80%",
    paddingLeft:"1em",
    paddingRight:"1em",
  }
  return (
    <div id="div-technologies" style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
      <Col xs={12} className="px-5 py-5">
        <Row>
          <h1 className="sectionHeading text-center text-dark" style={{fontWeight:"600"}}>Technologies</h1>
        </Row>
        <Row className="justify-content-center">
          <Col xs ={11} md={6}>
            <div data-aos="flip-right" className="blue-line"></div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p className="text-center mt-3">Desktop application and game development using C#. Frontend development using React, Mobile application development using Google Flutter, Bootstrap, Scss, Jquery. Backend development using PHP(CodeIgniter framework), Nodejs. Database management with MS SQL, MySQL, MongoDB, Firebase. WordPress web development. UIUX designing with Adobe XD, Figma. Graphic designing with Adobe Photoshop, Illustrator.</p>
          </Col>
        </Row>
        
        <Row>
          <Carousel responsive={responsive} infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={2000}
            removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
            <img style={technologiesLogos} src={reactLogo} alt="react" />
            <img style={technologiesLogos} src={nodejsLogo} alt="react" />
            <img style={technologiesLogos} src={phpLogo} alt="react" />
            <img style={technologiesLogos} src={codeigniterLogo} alt="react" />
            <img style={technologiesLogos} src={mongodbLogo} alt="react" />
            <img style={technologiesLogos} src={mysqlLogo} alt="react" />
            <img style={technologiesLogos} src={firebaseLogo} alt="react" />
            <img style={technologiesLogos} src={wordpressLogo} alt="react" />
            <img style={technologiesLogos} src={flutterLogo} alt="react" />
          </Carousel>
        </Row>
      </Col>
    </div>
  );
}

export default Technologies;