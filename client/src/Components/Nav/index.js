import React from "react";
import "./style.css";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Allan Binayao
      </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/about"><p className="h6">About Me</p></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio"><p className="h6">Portfolio</p></a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <span className="navbar-text">Get in Contact</span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="mailto:allan.binayao@gmail.com"><img className="icon" src="/assets/images/gmail.png" alt="Email" /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/CinnaStar12"><img className="icon" src="/assets/images/githubsmol.png" alt="GitHub" /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/allan-binayao-097599196/"><img className="icon" src="/assets/images/linkedin.png" alt="LinkedIn"/></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

  );
}

export default Nav;