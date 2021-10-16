import React, { Component } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import Services from '../components/Services';
import Technologies from '../components/Technologies';
import HomeComponent from '../components/HomeComponent';

class Home extends React.Component {
  render() { 
    return <>
      <HomeComponent/>
      <About/>
      <Resume/>
      <Technologies/>
      <Services/>
      <Contact/>
    </>;
  }
}
 
export default Home;