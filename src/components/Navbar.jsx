import React, { Component } from 'react';
import nisal from '../img/nisal.png';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import { Link as ScrallLink, animateScroll as scroll } from "react-scroll";
import { FaFacebookF, FaUserAlt, FaHouseDamage, FaFileAlt, FaCode, FaLaptop, FaBriefcase,FaPhoneSquare } from 'react-icons/fa';
import { GrGithub, GrInstagram, GrLinkedinOption } from "react-icons/gr";
import { BiX } from "react-icons/bi";

function Navbar() {
  const navBarStyles = {
    backgroundColor: "#212027",
    color:"#ABABAB",
    position:"fixed",
    height:"100%",
    zIndex:"1000",
    boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)"
  }

  // const profileImage = {
  //   width:"100%",
  //   clipPath: "circle(73px at 57px 51px)",
  //   scale:"0.8",
  // }

  const hideNavBar = () => {
    document.getElementById("navBar").classList.remove("navBarShow");
    document.getElementById("navBar").classList.add("navBarHide");
  }
  return (
  <div id="navBar" className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-4 navBarHide" style={navBarStyles}>
    
    <div className="row">
      <div className="col-12">
        <button onClick={hideNavBar} className="navCloseButton"><BiX/></button>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <ScrallLink 
          to="div-home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        > 
          <Link style={{textDecoration:"none"}} to="/">
            <div className="div-profile-image">
              <img className='profile-image' src={nisal}/>
            </div>
          </Link>
        </ScrallLink>
      </div>
    </div>
    <div className="row">
    
      <div className="col-12 text-center mt-2">
        <h5>Nisal Hasindu</h5>
      </div>
      
    </div>
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
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
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-12 d-flex justify-content-center">
        <ScrallLink
          activeClass="active"
          to="div-home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Link style={{textDecoration:"none"}} to="/"> 
            <span onClick={hideNavBar} className="meu-tabs"><FaHouseDamage style={{marginRight:"10px"}}/>Home</span>
          </Link>
        </ScrallLink>
      </div>
    </div>
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <ScrallLink
          activeClass={'active'}
          to="div-about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Link style={{textDecoration:"none"}} to="/about"> 
          <span onClick={hideNavBar} className="meu-tabs"><FaUserAlt style={{marginRight:"10px"}}/>About</span>
          </Link>
        </ScrallLink>
      </div>
    </div>
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <ScrallLink

          to="div-resume"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Link style={{textDecoration:"none"}} to="/resume"> 
          <span onClick={hideNavBar} className="meu-tabs"><FaFileAlt style={{marginRight:"10px"}}/>Resume</span>
          </Link>
        </ScrallLink>
      </div>
    </div>
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <ScrallLink

          to="div-technologies"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Link style={{textDecoration:"none"}} to="/technologies">
          <span onClick={hideNavBar} className="meu-tabs"><FaCode style={{marginRight:"10px"}}/>Technologies</span>
          </Link>
        </ScrallLink>
      </div>
    </div>
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <ScrallLink
          to="div-services"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Link style={{textDecoration:"none"}} to="/services">
          <span onClick={hideNavBar} className="meu-tabs"><FaLaptop style={{marginRight:"10px"}}/>Services</span>
          </Link>
        </ScrallLink>
      </div>
    </div>
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <Link style={{textDecoration:"none"}} to="/projects">
        <span onClick={hideNavBar} className="meu-tabs"><FaBriefcase style={{marginRight:"10px"}}/>Projects</span>
        </Link>
      </div>
    </div>
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <ScrallLink
          to="div-contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Link style={{textDecoration:"none"}} to="/contact">
            <span onClick={hideNavBar} className="meu-tabs"><FaPhoneSquare style={{marginRight:"10px"}}/>Contact</span>
          </Link>
        </ScrallLink>
      </div>
    </div>
  </div>
  );
}

 
export default Navbar;