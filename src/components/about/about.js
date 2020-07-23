import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="about" className="s-about target-section">
        <div className="row narrow section-intro has-bottom-sep">
          <div className="col-full text-center">
            <h3>About</h3>
            <h1>Things to Know</h1>
            <p className="lead">What's the long story short? I majored in Neuroscience and was going to go to medical school, but found a love towards analytics and end-user communication. Success after success, I found a new avenue as a liaison between the two worlds.</p>
          </div>
        </div>
        <div className="row about-content">
          <div className="col-six tab-full left">
            <h3>The Facts.</h3>
            <p>I worked in both analytics and support since 2015 as a Health &amp; Wellness Chair Coordinator where I created the UCSB Sleep Challenge, an online challenge focusing on sleep. With 300+ participants a quarter, I was awarded the Sophomore Award for Individual Co-Curricular Activity (1 of the 5 sophomores).</p>
            <p>
              I then moved into a internship coordinator role for two years, and was the lead product manager in the BI Model for our department analytics. By the end of my senior year, I was awarded the Award of Distinction, a University Award from the Chancellor. The department created a new position for me, and hired me for two years as a Health Educator and Data Manager. Throughout these two years I expanded and automated data collection for our events, and hired 5 student interns for a new website redesign and for analytics. I am currently a consultant for multiple University websites as well as the point person for department analytics.
            </p>
          </div>
          <div className="col-six tab-full right">
            <h3>The Skills.</h3>
            <ul className="skill-bars">
              <li>
                <div className="progress percent90"><span>Highly Proficient</span></div>
                <strong>R</strong>
              </li>
              <li>
                <div className="progress percent85"><span>Highly Proficient</span></div>
                <strong>Tableau</strong>
              </li>
              <li>
                <div className="progress percent75"><span>Proficient</span></div>
                <strong>SQL</strong>
              </li>
              <li>
                <div className="progress percent70"><span>Proficient</span></div>
                <strong>HTML</strong>
              </li>
              <li>
                <div className="progress percent70"><span>Proficient</span></div>
                <strong>CSS</strong>
              </li>   
              <li>
                <div className="progress percent75"><span>Proficient</span></div>
                <strong>Flask</strong>
              </li>
              <li>
                <div className="progress percent90"><span>Highly Proficient</span></div>
                <strong>Qualtrics</strong>
              </li>   
            </ul>
          </div>
        </div> {/* end about-content */}
        <div className="row about-content about-content--buttons">
          <div className="col-six tab-full left">
            <a href="{{ url_for('files', filename='/Julian De Vita Resume.pdf') }}" className="btn btn--primary full-width">Download My Resume</a>
          </div>
          <div className="col-six tab-full right">
            <a href="#contact" className="btn full-width scroll-link smoothscroll">Hire Me Now</a>
          </div>
        </div> {/* end about-content buttons */}
        <div className="row about-content about-content--timeline">
          <div className="col-full text-center">
            <h3>My Professional Experience.</h3>
          </div>
          <div className="col-six tab-full left">
            <div className="timeline">
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">June 2020 - Present</p>
                  <h3>UCSB</h3>
                  <h5>Web Developer/Consultant</h5>
                </div>
                <div className="timeline__desc">
                  <p>Oversees multiple university websites as well as the main developer for the UCSB Wellness Portal. A Drupal CMS consultant for the Department of Health &amp; Wellness Website and the UCSB Food Security Website. I maintain proper business practices for each website's mission.</p>
                </div>
              </div> {/* end timeline__block */}
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">June 2018 - June 2020</p>
                  <h3>Department of Health &amp; Wellness</h3>
                  <h5>Health Educator/Data Analytics Manager</h5>
                </div>
                <div className="timeline__desc">	
                  <p>Oversaw a team of website developers and data science interns to operationalize departmental business intelligence models alongside the University's IT department. I introduced and maintained three new academic college partners on campus to incorperate and fund wellness in academic spaces.</p>
                </div>
              </div> {/* end timeline__block */}
            </div> {/* end timeline */}
          </div> {/* end left */}
          <div className="col-six tab-full right">
            <div className="timeline">
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">June 2016 - June 2018</p>
                  <h3>Department of Health &amp; Wellness</h3>
                  <h5>Internship Coordinator</h5>
                </div>
                <div className="timeline__desc">
                  <p>Produced data visualization practices using R to analyze the National College Health Assessment, which is the largest University wellness survey, and distributed reports to over 10 different campus departments. I transitioned the department to incorperate data technologies for more efficient and effective event planning.</p>
                </div>
              </div> {/* end timeline__block */}
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">August 2015 - June 2016</p>
                  <h3>Residence Halls Association</h3>
                  <h5>Health &amp; Wellness Chair Coordinator</h5>
                </div>
                <div className="timeline__desc">
                  <p>Managed and lead 10 Health &amp; Wellness Chairs in each residence hall and facilitated and taught residence hall events. During this time, I co-created the UCSB Sleep Challenge, which had more than 300+ participants a quarter. I established mutliple experimental design and analysis methods towards online wellness.</p>
                </div>
              </div> {/* end timeline__block */}
            </div> {/* end timeline */}
          </div> {/* end right */}
        </div> {/* end about-content timeline */}
      </section>



      </React.Fragment>
    );
  }
}