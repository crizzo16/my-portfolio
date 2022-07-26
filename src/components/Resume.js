import React from "react";

function Resume() {
  return (
    <div className="container">
      <h4>Resume</h4>
      <p>
        Web Developer and Data Analyst with a background in Computer Science and
        Mathematics, who takes a detail-oriented approach to projects. A
        life-long passion for organized data &amp; code, beautiful visuals, and
        learning new things.
      </p>
      <div className="row">
        <div className="col l8 m12">
          <h6>Knowledge &amp; Skills</h6>
          <p className="resume-left">
            <strong>Languages:</strong> Javascript, HTML, CSS, SQL, Git, R, PHP,
            Python
          </p>
          <p className="resume-left">
            <strong>Tools:</strong> MongoDB, JQuery, Node JS, REST API, Laser
            Cutter
          </p>
          <p className="resume-left">
            <strong>Frameworks:</strong> Bootstrap, Materialize, Material UI,
            React
          </p>
          <p className="resume-left">
            <strong>Software:</strong> Tableau, Microsoft Office, Google Drive
            &amp; Scripts, Adobe Illustrator &amp; Photoshop, Figma
          </p>
          <p className="resume-left">
            <strong>Transferable Skills:</strong> Strong work ethic, optimistic
            attitude, attention to detail, public speaking, problem-solving,
            team player, communication skills
          </p>
        </div>
        <div className="col l4 m12">
          <img className="resume-img" src="./assets/resume-juggler.png" />
        </div>
      </div>
      <div className="row">
        <div className="col l4 m12">
          <img className="resume-img" src="./assets/resume-laptop.png" />
        </div>
        <div className="col l8 m12">
          <h6>Applications Built</h6>
          <p>
            <strong>Flipcause</strong> (
            <a
              className="website-link"
              target="_blank"
              href="https://www.flipcause.com"
            >
              flipcause.com
            </a>
            )
          </p>
          <ul>
            <li>
              Revitalized HTML emails to display consistently across multiple
              devices and screen widths
            </li>
            <li>
              Translated Figma designs into clean code that was intuitively
              responsive
            </li>
            <li>
              Communicated effectively with team members distributed across the
              globe
            </li>
          </ul>
          <p>
            <strong>All Things Right &amp; Relevant</strong> (
            <a
              className="website-link"
              target="_blank"
              href="http://www.rrconsignments.org/"
            >
              rrconsignments.org
            </a>
            )
          </p>
          <ul>
            <li>
              Created a friendly user interface that is accessible for all age
              ranges
            </li>
            <li>
              Created CSS "building-blocks" for ease of creation of new elements
            </li>
            <li>
              Tailored technologies used for ease-of-use for current &amp;
              future managers
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col l8 m12">
          <h6>Work Experience</h6>
        </div>
        <div className="col l4 m12">
          <img className="resume-img" src="./assets/resume-shaking-hands.png" />
        </div>
      </div>
      <div className="row">
        <div className="col l4 m12">
          <img className="resume-img" src="./assets/resume-graduate-cap.png" />
        </div>
        <div className="col l8 m12">
          <h6>Education</h6>
        </div>
      </div>
    </div>
  );
}

export default Resume;
