// Home.js

import React from 'react';
import "./designs/Home.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>Hello World!</h1>
      <h2 className="name">I'm Shreya Ghumtane</h2>
      
      <p>Your friendly coding ninja and tech enigma. As a passionate engineer I love to to transform lines of code into mesmerizing web experiences. By day, I paint the internet canvas with projects, and by night, I'm a bona fide photochromic lens enthusiast, seamlessly transitioning from coding to soaking in the beauty of simplicity.</p>
      <p>I'm your go-to frontend developer, software architect, and Java engineer, turning zeroes and ones into immersive, interactive adventures. Beyond coding, catch me lost in swaying to the beats of kpop. Let's connect and create some digital magic!</p>
      <Link to="/about-me" className="know-more-link">
        know more about me : )
      </Link>
    </div>
  );
}

export default Home;
