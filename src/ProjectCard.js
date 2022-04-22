import React from "react";
import "./App.css";

function ProjectCard(props) {
  return (
    <button className="btn-project">
        {props.title}
    </button>
  );
}

export default ProjectCard;
