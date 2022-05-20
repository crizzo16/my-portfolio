import React from "react";

function About(props) {
  return (
    <div className="row">
      <div className="col l8 s12">
        <p>
          Raised in central California, Celia has always enjoyed logic puzzles
          and figuring things out, even if she hadn't discovered coding yet. At
          the University of Puget Sound, she decided to do a Computer Science
          minor, but from "Hello World!" was immediately entranced. Switching to
          a coding major, she finished her university days with Mathematics and
          French minors.
          <br />
          After university, Celia decided to augment her coding skills with a
          web development course through UC Davis Extension. This help her get in tough with her artistic side, as she really enjoyed the intersection between making a website look great while also being well-coded. 
          <br />
          Outside of coding, Celia enjoys crafting in a variety of disciplines from sewing to using a laser cutter. During the first year of the pandemic, she put this skill to good use creating masks for friends and family. She also deeply enjoys board games and TTRPGs, especially those that allow for cooperative play. 
        </p>
      </div>
      <div className="col l4 s12">
        <img className="about-img" src="logo192.png" />
      </div>
    </div>
  );
}

export default About;
