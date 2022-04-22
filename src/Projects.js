import React, { Component } from "react";
import Thumbnail from "./Thumbnail.js"; // Import the Thumbnail component
import ProjectCard from "./ProjectCard.js";
import "./App.css";

class Projects extends Component {


  render() {
    return (
      // Render a Thumbnail component
      <div>
        <h1>Projects</h1>
        <div>
            <ProjectCard title="Coin Converter" />
            <ProjectCard title="Combat Round" />
        </div>
        <div className="mini-projects"></div>
      </div>
    );
  }
}

export default Projects;
