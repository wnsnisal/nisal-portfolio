import React, { Component } from 'react';
import { Carousel,Row,Col } from 'react-bootstrap';
import carouelImg01 from '../img/carousel-image-01.jpg';

class HomeComponent extends React.Component {
  
  render() { 
    const carouselContentStyle = {
      color:"#212027",
      top:"40vh"
    }

    const heading = {
      fontWeight:"600",
      fontSize:"3.5em",
      textAlign:"center",
    }
    const subHeading = {
      fontWeight:"600"
    }
    return <div id="div-home" style={{height:"100vh"}}>
    <Carousel>
      <Carousel.Item >
        <div style={{backgroundImage:`url(${carouelImg01})`}} className="carousel-image"></div>
        <Carousel.Caption style={carouselContentStyle}>
          <h1 style={heading}>Hello! I'm Nisal Hasindu</h1>
          <h4 style={subHeading}>I am a software developer</h4>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{backgroundImage:`url(${carouelImg01})`}} className="carousel-image"></div>

        <Carousel.Caption style={carouselContentStyle}>
          <h1 style={heading}>Hello! I'm Nisal Hasindu</h1>
          <h4 style={subHeading}>I am a software developer</h4>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{backgroundImage:`url(${carouelImg01})`}} className="carousel-image"></div>

        <Carousel.Caption style={carouselContentStyle}>
          <h1 style={heading}>Hello! I'm Nisal Hasindu</h1>
          <h4 style={subHeading}>I am a software developer</h4>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>;
  }
}
 
export default HomeComponent;