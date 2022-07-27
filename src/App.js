import React, { Component } from "react";
import "./components/assets/App.css";
import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import M from 'materialize-css/dist/js/materialize.min.js';
import Projects from "./components/Projects.js";
import Spreadsheets from "./components/Spreadsheet.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Resume from "./components/Resume.js";


class App extends Component {
  componentDidMount() {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }

  render() {
    return (
      <div className="App">
        <div className="frame">
          <div className="navigation">
            <div className="page-header light-green darken-3 flex f-vcenter f-center">
              <h2 id="page-title" className="flex f-vcenter f-center">
                <Routes>
                  <Route exact path="/" element="I Believe In The Power Of Nice" />
                  <Route path="/resume" element="A Lifetime of Learning" />
                  <Route path="/projects" element="Fun Little Things" />
                  <Route path="/data" element="So. Much. Data." />
                  <Route path="/contact" element="Where to Find Me" />
                </Routes>
              </h2>
            </div>
            <div className="navigation-sub light-green">
              <NavLink to="/" className="item">
                About
              </NavLink>
              <NavLink to="/resume" className="item">
                Resume
              </NavLink>
              <NavLink to="/data" className="item">
                Data &amp; Spreadsheets
              </NavLink>
              <NavLink to="/contact" className="item">
                Contact
              </NavLink>
              <a data-target="slide-out" className="sidenav-trigger">
                Menu
              </a>
            </div>
          </div>
          <ul id="slide-out" className="sidenav">
            <li>
              <NavLink to="/" className="item">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/data" className="item">
                Data &amp; Spreadsheets
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="item">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="content">
            <div className="main-content">
              <Routes>
                <Route path="/" element={<About />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route path="/data" element={<Spreadsheets />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </div>
            <div className="mobile-content">
              Mobile site in development, please check out the site on a tablet or larger screen. Thank you for your patience!
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
