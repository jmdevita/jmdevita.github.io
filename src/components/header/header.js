import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      {/*generated code*/}
      <header className="s-header">
        <div className="header-logo">
            <a className="site-logo" href="index.html"><img src="images/logo.png" alt="Homepage" /></a>
        </div>
        <nav className="header-nav-wrap">
            <ul className="header-nav">
            <li className="current"><a className="smoothscroll" href="#home" title="home">Home</a></li>
            <li><a className="smoothscroll" href="#about" title="about">About</a></li>
            <li><a className="smoothscroll" href="#projects" title="projects">Projects</a></li>
            <li><a className="smoothscroll" href="#personality" title="personality">Personality</a></li>
            <li><a className="smoothscroll" href="#contact" title="contact">Contact</a></li>
            </ul>
        </nav>
        <a className="header-menu-toggle" href="#0"><span>Menu</span></a>
      </header>
      </React.Fragment>
    );
  }
}