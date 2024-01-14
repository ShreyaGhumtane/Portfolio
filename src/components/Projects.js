import React from 'react';
import './designs/Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Want to know what I did.....!!</h1>

      <div className="project">
        <h2>Chatting Application using Java Swing</h2>
        <p>
          Developed a Java-based chat application server using Swing for the graphical interface.
          Implemented message handling, message formatting, and timestamps for chat messages.
          Utilized Java sockets for network communication.
        </p>
      </div>

      <div className="project">
        <h2>NewsApp using React</h2>
        <p>
          This React-based news application, named Trend Tracker, uses the 'News' component to manage state and retrieve data from the News API.
          The app dynamically fetches news data, providing a visually appealing interface for users to stay updated.
        </p>
      </div>

      <div className="project">
        <h2>Weather Forecasting using Machine Learning</h2>
        <p>
          Developed a machine learning model for assisting farmers with weather forecasting using Python.
          Studied and processed a dataset with relevant parameters, filling in missing values.
          Used logistic regression for predictions.
        </p>
      </div>

      <div className="project">
        <h2>Exoplanet Classification using Deep Learning</h2>
        <p>
          Utilized a deep learning LSTM model for binary classification of exoplanets using Python.
          Worked with Kepler's exoplanet dataset, applying appropriate preprocessing techniques.
        </p>
      </div>
    </div>
  );
};

export default Projects;
