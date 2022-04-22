import React, { Component } from "react";
import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Projects from "./Projects.js";
import Articles from "./Articles.js";
import About from "./About.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="frame">
          <div className="navigation">
            <div className="page-header">
              <h2 id="page-title">
                <Routes>
                  <Route exact path="/" element="Fun Little Things" />
                  <Route path="/articles" element="Articles" />
                  <Route path="/about" element="I Believe In The Power Of Nice" />
                </Routes>
              </h2>
            </div>
            <div className="navigation-sub">
              <Link to="/" className="item">
                Projects
              </Link>
              <Link to="/articles" className="item">
                Articles
              </Link>
              <Link to="/about" className="item">
                About
              </Link>
            </div>
          </div>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Projects />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
