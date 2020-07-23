import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="home" className="s-home page-hero target-section" data-parallax="scroll" data-image-src="images/hero-bg.jpg" data-natural-width={3000} data-natural-height={2000} data-position-y="center">
        <div className="overlay" />
        <div className="shadow-overlay" />
        <div className="home-content">
            <div className="row home-content__main">
            <h3>Hello!</h3>
            <h1>
                Hi! I'm Julian. <br />
                I focus on technological
                implementation and <br />
                end-user support. <br />
            </h1>
            <div className="home-content__buttons">
                <a href="#projects" className="smoothscroll btn btn--stroke">
                Latest Projects
                </a>
                <a href="#about" className="smoothscroll btn btn--stroke">
                More About Me
                </a>
            </div>
            <div className="home-content__scroll">
                <a href="#about" className="scroll-link smoothscroll">
                <span>Scroll Down</span>
                </a>
            </div>
            </div>
        </div> {/* end home-content */}
        <ul className="home-social">
            <li>
            <a href="#"><i className="im im-facebook" aria-hidden="true" /><span>Facebook</span></a>
            </li>
            <li>
            <a href="#"><i className="im im-linkedin" aria-hidden="true" /><span>LinkedIn</span></a>
            </li>
            <li>
            <a href="#"><i className="im im-github" aria-hidden="true" /><span>Github</span></a>
            </li>
        </ul> 
        {/* end home-social */}
      </section>

      </React.Fragment>
    );
  }
}