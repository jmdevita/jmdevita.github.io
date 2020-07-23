import React, { Component } from 'react';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Testimonials from './components/testimonials/testimonials';
import Personality from './components/personality/personality';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import PhotoSwipe from './components/projects/photoswipe_background';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <Home />
        <About />
        <Projects />
        <Testimonials />
        <Personality />
        <Contact />
        <Footer />
        <PhotoSwipe />
        <div id="preloader">
          <div id="loader" />
        </div>
      </div>
    );
  }
}
export default App;