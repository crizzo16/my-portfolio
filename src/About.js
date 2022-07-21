import React from "react";

function About(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col l7 s12">
          <p>
            Raised in central California, Celia has always enjoyed logic puzzles
            and figuring things out, even if she hadn't discovered coding yet.
            At the University of Puget Sound, she decided to do a Computer
            Science minor, but from "Hello World!" was immediately entranced.
            Switching to a coding major, she finished her university days with
            Mathematics and French minors.
            <br />
            <br></br>
            After university, Celia decided to augment her coding skills with a
            web development course through UC Davis Extension. This help her get
            in touch with her artistic side, as she really enjoyed the
            intersection between making a website look great while also being
            well-coded.
            <br />
            <br></br>
            Outside of coding, Celia enjoys being creative, whether that's sewing masks or running a D&amp;D game for her friends. Like many others during the pandemic, she discovered that spending time with friends and family is very important, especially if she can convince them to play a board game or two.
          </p>
        </div>
        <div className="col l5 s12 flex f-vcenter">
          <img className="about-img" src="./assets/Celia01.jpeg" />
        </div>
      </div>
      <div className="row">
        <div className="col l6 s12">
        <div className="about-fun-fact">
            <p className="fun-fact-header light-green darken-3">
              Currently Reading
            </p>
            <p className="fun-fact-content">
              The Galaxy and the Ground Within by Becky Chambers
            </p>
          </div>
        </div>
        <div className="col l6 s12">
        <div className="about-fun-fact">
            <p className="fun-fact-header light-green darken-3">
              Currently Watching
            </p>
            <p className="fun-fact-content">
              The Boys, The Sea Beast, Critical Role
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col l6 s12">
          <div className="about-fun-fact">
            <p className="fun-fact-header light-green darken-3">
              Currently Playing
            </p>
            <p className="fun-fact-content">
              Battle for Bikini Bottom, Marvel Avengers
            </p>
          </div>
        </div>
        <div className="col l6 s12">
          <div className="about-fun-fact">
            <p className="fun-fact-header light-green darken-3">
              Currently Running
            </p>
            <p className="fun-fact-content">
              Ghosts of Saltmarsh: Salvage Operation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
