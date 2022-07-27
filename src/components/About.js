import React from "react";

function About(props) {
  return (
    <div className="container">
      <div className="row flex f-wrap f-around">
        <div className="col xl5 l12 flex f-vcenter">
          <img className="about-img" src="./assets/Celia01.jpeg" />
        </div>
        <div className="col xl7 l12">
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
            Outside of coding, Celia enjoys being creative, whether that's
            sewing masks or running a D&amp;D game for her friends. Like many
            others during the pandemic, she discovered that spending time with
            friends and family is very important, especially if she can convince
            them to play a board game or two.
          </p>
        </div>
      </div>
      <div className="row mt-lg f-wrap">
        <div className="col s12 l6">
          <div className="about-fun-fact">
            <p className="fun-fact-header light-green darken-3">
              Currently Reading
            </p>
            <p className="fun-fact-content light-green lighten-3">
              The Galaxy and the Ground Within by Becky Chambers, How to Keep
              House While Drowning by KC Davis
            </p>
          </div>
        </div>
        <div className="col l6 s12">
          <div className="about-fun-fact">
            <p className="fun-fact-header light-green darken-3">
              Currently Watching
            </p>
            <p className="fun-fact-content light-green lighten-3">
              The Boys, Young Justice, Critical Role, Dimension 20
            </p>
          </div>
        </div>
        <div className="col l6 s12">
          <div className="about-fun-fact">
            <p className="fun-fact-header light-green darken-3">
              Currently Playing
            </p>
            <p className="fun-fact-content light-green lighten-3">
              Battle for Bikini Bottom, Marvel Avengers, Ghosts of Saltmarsh
            </p>
          </div>
        </div>
        <div className="col l6 s12">
          <div className="about-fun-fact">
            <p className="fun-fact-header light-green darken-3">
              Currently Learning
            </p>
            <p className="fun-fact-content light-green lighten-3">
              Data Science,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
