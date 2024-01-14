import React from 'react';
import './designs/TechnicalSkills.css';


const TechnicalSkills = () => {
  return (
    <div className="technical-skills-container">
      <h1>Technical Skills</h1>

      <ul className="skill-category">
        <li className="skill-list-item">
          <h2>Programming Languages</h2>
          <ul className="skill-list">
            <li className="skill-list-item">Java</li>
            <li className="skill-list-item">Python</li>
            <li className="skill-list-item">C</li>
            <li className="skill-list-item">C++</li>
          </ul>
        </li>
      </ul>

      <ul className="skill-category">
        <li className="skill-list-item">
          <h2>Database Languages</h2>
          <ul className="skill-list">
            <li className="skill-list-item">MySQL</li>
            <li className="skill-list-item">SQLite</li>
            <li className="skill-list-item">NoSQL</li>
          </ul>
        </li>
      </ul>

      <ul className="skill-category">
        <li className="skill-list-item">
          <h2>Data Structures and Algorithms</h2>
          <ul className="skill-list">
            <li className="skill-list-item">Java</li>
          </ul>
        </li>
      </ul>

      <ul className="skill-category">
        <li className="skill-list-item">
          <h2>Operating Systems</h2>
          <ul className="skill-list">
            <li className="skill-list-item">Linux</li>
          </ul>
        </li>
      </ul>

      <ul className="skill-category">
        <li className="skill-list-item">
          <h2>Computer Networks</h2>
          <ul className="skill-list">
            {/* Add relevant skills */}
          </ul>
        </li>
      </ul>

      <ul className="skill-category">
        <li className="skill-list-item">
          <h2>Machine Learning</h2>
          <ul className="skill-list">
            <li className="skill-list-item">Python</li>
            {/* Add relevant skills */}
          </ul>
        </li>
      </ul>

      <ul className="skill-category">
        <li className="skill-list-item">
          <h2>Deep Learning</h2>
          <ul className="skill-list">
            {/* Add relevant skills */}
          </ul>
        </li>
      </ul>

      <ul className="skill-category">
        <li className="skill-list-item">
          <h2>Web Development</h2>
          <ul className="skill-list">
            <li className="skill-list-item">JavaScript</li>
            <li className="skill-list-item">HTML</li>
            <li className="skill-list-item">CSS</li>
            <li className="skill-list-item">React.js</li>
            {/* Add relevant skills */}
          </ul>
        </li>
      </ul>

      <ul className="skill-category">
        <li className="skill-list-item">
          <h2>Additional</h2>
          <ul className="skill-list">
            <li className="skill-list-item">Figma</li>
            <li className="skill-list-item">REST APIs</li>
            <li className="skill-list-item">DevOps</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default TechnicalSkills;