import React, { Component } from 'react';
import Footer from '../components/Footer';
import {Row,Col} from 'react-bootstrap';
import projectsBackgroundImage from '../img/projects-backgrounds.jpg';

class Projects extends React.Component {
  render() { 
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
    return <>
      <Row>
        <Col style={projectsBackground} className="d-flex justify-content-center align-items-center">
          <h1 style={heading}>My Projects</h1>
        </Col>
      </Row>
      <Footer/>
    </>;
  }
}
 
export default Projects;