import React, { Component } from "react";
import "./App.css";
import { Routes, Route, Link, useLocation} from "react-router-dom";
import Projects from "./Projects.js";
import Spreadsheets from "./Spreadsheet.js";
import About from "./About.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="frame">
          <div className="navigation">
            <div className="page-header light-green darken-3">
              <h2 id="page-title">
                <Routes>
                  <Route path="/projects" element="Fun Little Things" />
                  <Route path="/data" element="So. Much. Data." />
                  <Route exact path="/" element="I Believe In The Power Of Nice" />
                </Routes>
              </h2>
            </div>
            <div className="navigation-sub light-green">
              <Link to="/projects" className="item">
                Projects
              </Link>
              <Link to="/data" className="item">
                Data &amp; Spreadsheets
              </Link>
              <Link to="/" className="item">
                About
              </Link>
            </div>
          </div>
          <div className="content">
            <Routes>
              <Route exact path="/projects" element={<Projects />} />
              <Route path="/data" element={<Spreadsheets />} />
              <Route path="/" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
