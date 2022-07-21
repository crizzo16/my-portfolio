import React, { Component } from "react";
import "./App.css";
import { Routes, Route, Link, NavLink, useLocation} from "react-router-dom";
import Projects from "./Projects.js";
import Spreadsheets from "./Spreadsheet.js";
import About from "./About.js";
import Contact from "./Contact.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="frame">
          <div className="navigation">
            <div className="page-header light-green darken-3">
              <h2 id="page-title">
                <Routes>
                  <Route exact path="/" element="I Believe In The Power Of Nice" />
                  <Route path="/projects" element="Fun Little Things" />
                  <Route path="/data" element="So. Much. Data." />
                  <Route path="/contact" element="Where to Find Me"/>
                </Routes>
              </h2>
            </div>
            <div className="navigation-sub light-green">
              <NavLink to="/" className="item">
                About
              </NavLink>
              <NavLink exact to="/projects" className="item">
                Projects
              </NavLink>
              <NavLink to="/data" className="item">
                Data &amp; Spreadsheets
              </NavLink>
              <NavLink to="/contact" className="item">
                Contact
              </NavLink>
            </div>
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<About />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route path="/data" element={<Spreadsheets />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
