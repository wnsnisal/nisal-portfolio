import React, { Component, useEffect } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import Services from '../components/Services';
import Technologies from '../components/Technologies';
import HomeComponent from '../components/HomeComponent';
import Footer from '../components/Footer';

function Home() {
  
  return <>
      <HomeComponent/>
      <About/>
      <Resume/>
      <Technologies/>
      <Services/>
      <Contact/>
      <Footer/>
    </>;
}

export default Home;