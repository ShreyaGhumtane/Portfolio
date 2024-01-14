import React from 'react';
import './designs/Publications.css';

const Publications = () => {
  return (
    <div className="publications-container">
      <h1>Publications</h1>

      <div className="publication">
        <h2>Exciting news!</h2>
        <p>
          Our research paper, "Building a Website for Identification of Missing and Unrecognized Individuals Using an Optimized Face Recognition Algorithm," has been selected for publication at the IEEE IATMSI-2024. We're honored to share our innovative approach at this prestigious conference, contributing to the intersection of technology and social innovation. Join us as we present our groundbreaking work on building a website for enhanced identification, making a meaningful impact in the field. #IATMSI2024 #ResearchInnovation
        </p>
      </div>

      {/* Add more publications as needed */}
    </div>
  );
};

export default Publications;
