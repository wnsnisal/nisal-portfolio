import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import carouelImg01 from '../img/carousel-image-01.jpg';
import carouelImg02 from '../img/carousel-image-02.jpg';
import carouelImg03 from '../img/carousel-image-03.jpg';
import {FaPhoneAlt} from 'react-icons/fa';
import { Link } from "react-scroll";

function HomeComponent() {

  const carouselContentStyle = {
    color:"#212027",
    top:"40vh"
  }


  const heading = {
    fontWeight:"600",
    fontSize:"3.5em",
    textAlign:"center",
    color:"white",
  }
  const subHeading = {
    fontWeight:"600",
    color:"white"
  }
  const paragraph = {
    color:"white"
  }
  return (
    <div id="div-home" style={{height:"100vh"}}>
      <Carousel>
        <Carousel.Item >
          <div style={{backgroundImage:`url(${carouelImg01})`}} className="carousel-image"></div>
          <Carousel.Caption style={carouselContentStyle}>
            <h1 style={heading}>Hello! I'm Nisal Hasindu</h1>
            <h4 style={subHeading}>I am a Software developer</h4>
            <p style={paragraph}>Custome software solutions for desktop and other devices.</p>
            <Link 
              to="div-contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="btn carousel-button"
            > <FaPhoneAlt style={{marginRight:"10px"}}/>Contact me</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{backgroundImage:`url(${carouelImg02})`}} className="carousel-image"></div>

          <Carousel.Caption style={carouselContentStyle}>
            <h1 style={heading}>Hello! I'm Nisal Hasindu</h1>
            <h4 style={subHeading}>I am a Web developer</h4>
            <p style={paragraph}>Web applications, Modern and responsive frontend with backend.</p>
            <Link 
              to="div-contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="btn carousel-button"
            > <FaPhoneAlt style={{marginRight:"10px"}}/>Contact me</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{backgroundImage:`url(${carouelImg03})`}} className="carousel-image"></div>

          <Carousel.Caption style={carouselContentStyle}>
            <h1 style={heading}>Hello! I'm Nisal Hasindu</h1>
            <h4 style={subHeading}>I am a UI UX designer</h4>
            <p style={paragraph}>UIUX designs for desktop applications, web and mobile applications</p>
            <Link 
              to="div-contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="btn carousel-button"
            > <FaPhoneAlt style={{marginRight:"10px"}}/>Contact me</Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
 
export default HomeComponent;