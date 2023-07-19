import React from "react";
import { image } from "../data/data";
import Styles from "../styles.css";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am a passionate web developer with a love for creating innovative websites and applications.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
