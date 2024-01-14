import React from 'react';
import './designs/Resume.css';

const Resume = () => {
  // Replace 'your_resume_link.pdf' with the actual link to your hosted PDF file
  const resumeLink = 'https://drive.google.com/file/d/14-Juu0zqTQ8KesgwTj1nGf8VoRudn8i3/view?usp=drive_link';
  return (
    <div className="resume-container">
      <h1>
        <span className="animated-text">Unlock My Journey</span>
        <span className="animated-cursor">!</span>
      </h1>

      {/* Add content related to your resume, if needed */}

      <div className="resume-link">
        <p>Ready to explore my story and skills?</p>
        <a href={resumeLink} download="YourResume.pdf">
          <span className="animated-text">Download my Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Resume;
