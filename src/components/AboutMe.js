import React from 'react';
import './designs/AboutMe.css';

const AboutMe = () => {
  return (
    
    <div className="timeline-container">
      <h1>About Me</h1>
      <div className="timeline-line"></div>

      <div className="event college">
        <div className="dot"></div>
        <div className="content">
          <h2>Cummins College of Engineering for Women, Pune</h2>
          <p>Electronics and Telecommunication (B.Tech 2020-2024)</p>
          <p>Igniting my academic voyage, I am not just earning a ENTC degree; I am honing my prowess in coding, where algorithms are my language and innovation is my forte.</p>
        </div>
      </div>

      <div className="event shraddha">
        <div className="dot"></div>
        <div className="content">
          <h2>Shraddha Institute of Carrier Development (2020)</h2>
          <p>HSC Board: 82.93%</p>
          <p>
Navigating the realms of Physics, Chemistry, and Math in 11th and 12th, I've honed a knack for conquering logical puzzles and mathematical intricacies.</p>
        </div>
      </div>

      <div className="event school">
        <div className="dot"></div>
        <div className="content">
          <h2>Vyankatrao High-school Ichalkaranji (2018)</h2>
          <p>SSC Board: 93%</p>
          <p>Excelling at Vyankatrao High-school, I ranked 2nd in math and demonstrated prowess in science. Awarded a 36k NMMS scholarship in 8th grade, igniting my academic journey</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
